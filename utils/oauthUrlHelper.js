import queryString from "query-string";
const facebook_oauth_url = "https://www.facebook.com/dialog/oauth";
const google_oauth_url = "https://accounts.google.com/o/oauth2/v2/auth";
const github_oauth_url = "https://github.com/login/oauth/authorize";
const linked_in_oauth_url = "https://www.linkedin.com/oauth/v2/authorization";

function getGoogleOauthUrl(options) {
  const stringifiedParams = queryString.stringify(options);
  return `${google_oauth_url}?${stringifiedParams}`;
}

function getFacebookOauthUrl(options) {
  const stringifiedParams = queryString.stringify(options);
  return `${facebook_oauth_url}?${stringifiedParams}`;
}

function getGithubOauthUrl(options) {
  const stringifiedParams = queryString.stringify(options);
  return `${github_oauth_url}?${stringifiedParams}`;
}

function getLinkedInOauthUrl(options) {
  const stringifiedParams = queryString.stringify(options);
  return `${linked_in_oauth_url}?${stringifiedParams}`;
}

export { getGoogleOauthUrl, getGithubOauthUrl, getFacebookOauthUrl, getLinkedInOauthUrl };
