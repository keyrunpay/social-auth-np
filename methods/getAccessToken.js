import axios from "axios";

function getFacebookAccessToken(params) {
  return axios({
    url: "https://graph.facebook.com/oauth/access_token",
    method: "get",
    params,
  });
}

function getGoogleAccessToken(params) {
  return axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: { grant_type: "authorization_code", ...params },
  });
}

function getLinkedinAccessToken(params) {
  return axios({
    url: `https://www.linkedin.com/oauth/v2/accessToken`,
    method: "post",
    data: { grant_type: "authorization_code", ...params },
  });
}

function getGithubAccessToken(params) {
  return axios({
    url: "https://github.com/login/oauth/access_token",
    method: "get",
    params,
  });
}

function getAccessToken(platform, params) {
  if (typeof platform !== "string") throw "Platform must be a string";
  platform = platform.toLowerCase();
  switch (platform) {
    case "facebook":
      return getFacebookAccessToken(params);
    case "google":
      return getGoogleAccessToken(params);
    case "github":
      return getGithubAccessToken(params);
    case "linkedin":
      return getLinkedinAccessToken(params);
    default:
      throw "Platform value not supported";
  }
}

export default getAccessToken;

/*
Params Body 
{
  client_id: process.env.APP_ID_GOES_HERE,
  client_secret: process.env.APP_SECRET_GOES_HERE,
  redirect_uri: "https://www.example.com/authenticate/facebook/",
  code,
}
*/
