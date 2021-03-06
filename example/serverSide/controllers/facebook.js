const socialAuthNp = require("social-auth-np");

const authFacebook = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    res.status(401).json({ error: "Code is required" });
    return;
  }

  const params = {
    client_id: "711237096101342",
    client_secret: "CLIENT_SECRET",
    redirect_uri: "http://localhost:3000/facebook_auth_callback",
    code,
  };

  try {
    const { data } = await socialAuthNp.getAccessToken("facebook", params);
    const access_token = data.access_token;
    if (!access_token) {
      res.status(401).json({ error: "Expired or bad code" });
      return;
    }
    const response = await socialAuthNp.getUserInfo("facebook", access_token);
    /*
        I hope from here you will use the info that is generated and do match wit your
        own database and do some JWT signin or session creation or whatever and your your own token from tracking user
    */
    res.json(response.data);
  } catch (err) {
    res.status(401).json({ error: "Expired or bad code or network issue" });
  }
};

module.exports = authFacebook;
