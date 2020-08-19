import { getGoogleOauthUrl, getGithubOauthUrl, getFacebookOauthUrl, getLinkedInOauthUrl } from "../utils/oauthUrlHelper";

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

export default getOauthUrl;
