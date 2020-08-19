function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var queryString = _interopDefault(require("query-string"));
var axios = _interopDefault(require("axios"));

var facebook_oauth_url = "https://www.facebook.com/dialog/oauth";
var google_oauth_url = "https://accounts.google.com/o/oauth2/v2/auth";
var github_oauth_url = "https://github.com/login/oauth/authorize";
var linked_in_oauth_url = "https://www.linkedin.com/oauth/v2/authorization";

function getGoogleOauthUrl(options) {
  var stringifiedParams = queryString.stringify(options);
  return google_oauth_url + "?" + stringifiedParams;
}

function getFacebookOauthUrl(options) {
  var stringifiedParams = queryString.stringify(options);
  return facebook_oauth_url + "?" + stringifiedParams;
}

function getGithubOauthUrl(options) {
  var stringifiedParams = queryString.stringify(options);
  return github_oauth_url + "?" + stringifiedParams;
}

function getLinkedInOauthUrl(options) {
  var stringifiedParams = queryString.stringify(options);
  return linked_in_oauth_url + "?" + stringifiedParams;
}

function getOauthUrl(platform, options) {
  if (typeof platform !== "string") platform = "buggged";
  platform = platform.toLowerCase();

  switch (platform) {
    case "facebook":
      return getFacebookOauthUrl(options);

    case "google":
      return getGoogleOauthUrl(options);

    case "github":
      return getGithubOauthUrl(options);

    case "linkedin":
      return getLinkedInOauthUrl(options);

    default:
      return "https://buggged.com";
  }
}

var facebook_options = {
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: "YOUR_REDIRECT_URL",
  scope: "email",
  response_type: "code",
};
var google_options = {
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: "YOUR_REDIRECT_URL",
  scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
  response_type: "code",
  access_type: "offline",
  prompt: "consent",
};
var github_option = {
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: "YOUR_REDIRECT_URL",
  scope: "read:user user:email",
  allow_signup: true,
};
var linked_in_option = {
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: "YOUR_REDIRECT_URL",
  scope: "r_liteprofile r_emailaddress w_member_social",
  response_type: "code",
};

function getClientSideOauthOption(platform) {
  if (typeof platform !== "string") return facebook_options;
  platform = platform.toLowerCase();

  switch (platform) {
    case "facebook":
      return facebook_options;

    case "google":
      return google_options;

    case "github":
      return github_option;

    case "linkedin":
      return linked_in_option;

    default:
      return facebook_options;
  }
}

function parseUrl(url) {
  var parsedQuery = queryString.parse(url);
  return parsedQuery;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function getFacebookAccessToken(params) {
  return axios({
    url: "https://graph.facebook.com/oauth/access_token",
    method: "get",
    params: params,
  });
}

function getGoogleAccessToken(params) {
  return axios({
    url: "https://oauth2.googleapis.com/token",
    method: "post",
    data: _extends(
      {
        grant_type: "authorization_code",
      },
      params
    ),
  });
}

function getLinkedinAccessToken(params) {
  return axios({
    url: "https://www.linkedin.com/oauth/v2/accessToken",
    method: "post",
    data: _extends(
      {
        grant_type: "authorization_code",
      },
      params
    ),
  });
}

function getGithubAccessToken(params) {
  return axios({
    url: "https://github.com/login/oauth/access_token",
    method: "get",
    params: params,
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
      access_token: access_token,
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

function getUserData(platform, access_token, params) {
  if (params === void 0) {
    params = false;
  }

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

var socialAuthNp = {
  getOauthUrl: getOauthUrl,
  getClientSideOauthOption: getClientSideOauthOption,
  parseUrl: parseUrl,
  getAccessToken: getAccessToken,
  getUserInfo: getUserData,
};

module.exports = socialAuthNp;
//# sourceMappingURL=index.js.map
