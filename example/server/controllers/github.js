const socialAuthNp = require("social-auth-np");

const authGithub = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    res.status(401).json({ error: "Code is required" });
    return;
  }

  const params = {
    client_id: "f398fd575a67b0e21ad7",
    client_secret: "CLIENT_SECRET",
    redirect_uri: "http://localhost:3000/github_auth_callback",
    code,
  };

  try {
    const { data } = await socialAuthNp.getAccessToken("github", params);
    const access_token = socialAuthNp.parseUrl(data).access_token;
    /*
        here parseUrl is used because instead of giting json response github is giving us query string
    */
    if (!access_token) {
      res.status(401).json({ error: "Expired or bad code" });
      return;
    }
    const response = await socialAuthNp.getUserInfo("github", access_token);
    /*
        I hope from here you will use the info that is generated and do match wit your
        own database and do some JWT signin or session creation or whatever and your your own token from tracking user
    */
    res.json(response.data);
  } catch (err) {
    res.status(401).json({ error: "Expired or bad code or network issue" });
  }
};

module.exports = authGithub;
