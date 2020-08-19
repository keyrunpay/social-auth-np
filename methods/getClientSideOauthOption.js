import { google_options, facebook_options, github_option, linked_in_option } from "../utils/clientOauthOptionHelper";

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

export default getClientSideOauthOption;
