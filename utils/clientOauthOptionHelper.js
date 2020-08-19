const facebook_options = {
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: "YOUR_REDIRECT_URL",
  scope: "email",
  response_type: "code",
};

const google_options = {
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: "YOUR_REDIRECT_URL",
  scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
  response_type: "code",
  access_type: "offline",
  prompt: "consent",
};

const github_option = {
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: "YOUR_REDIRECT_URL",
  scope: "read:user user:email",
  allow_signup: true,
};

const linked_in_option = {
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: "YOUR_REDIRECT_URL",
  scope: "r_liteprofile r_emailaddress w_member_social",
  response_type: "code",
};

export { facebook_options, google_options, github_option, linked_in_option };
