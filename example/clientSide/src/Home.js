import React from "react";
import socialAuthNp from "social-auth-np";

export default function Login() {
  const loginOption = {
    ...socialAuthNp.getClientSideOauthOption("facebook"),
    client_id: "711237096101342",
    redirect_uri: "http://localhost:3000/facebook_auth_callback",
  };
  const fbLoginUrl = socialAuthNp.getOauthUrl("facebook", loginOption);

  const gLoginOption = {
    ...socialAuthNp.getClientSideOauthOption("google"),
    client_id:
      "415303719139-sea932dqp0dii9q5r6bqc35g1s5uos11.apps.googleusercontent.com",
    redirect_uri: "http://localhost:3000/google_auth_callback",
  };
  const googleLoginUrl = socialAuthNp.getOauthUrl("google", gLoginOption);

  const ghubLoginOption = {
    ...socialAuthNp.getClientSideOauthOption("github"),
    client_id: "f398fd575a67b0e21ad7",
    redirect_uri: "http://localhost:3000/github_auth_callback",
  };
  const githubLoginUrl = socialAuthNp.getOauthUrl("github", ghubLoginOption);

  return (
    <div className="App">
      <br />
      <a href={fbLoginUrl}>
        <button>Login with facebook</button>
      </a>
      <br />
      <a href={googleLoginUrl}>
        <button>Login with google</button>
      </a>
      <br />
      <a href={githubLoginUrl}>
        <button>Login with Github</button>
      </a>
    </div>
  );
}
