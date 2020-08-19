import axios from "axios";

function getGitHubUserData(access_token) {
  return axios({
    url: "https://api.github.com/user",
    method: "get",
    headers: {
      Authorization: "token " + access_token,
    },
  });
}

function getFacebookUserData(access_token, fields) {
  return axios({
    url: "https://graph.facebook.com/me",
    method: "get",
    params: {
      fields: fields ? fields : "id,email,first_name,last_name",
      access_token,
    },
  });
}

function getGoogleUserData(access_token) {
  return axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
}

function getLinkedinUserData(access_token) {
  return axios({
    url: "https://api.linkedin.com/v2/me",
    method: "get",
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
}

function getUserData(platform, access_token, params = false) {
  if (typeof platform !== "string") throw "Platform must be a string";
  platform = platform.toLowerCase();
  switch (platform) {
    case "facebook":
      return getFacebookUserData(access_token, params);
    case "google":
      return getGoogleUserData(access_token);
    case "github":
      return getGitHubUserData(access_token);
    case "linkedin":
      return getLinkedinUserData(access_token);
    default:
      throw "Platform value not supported";
  }
}

export default getUserData;
