import React from "react";
import socialAuthNp from "social-auth-np";
import Axios from "axios";

export default function GithubCallback() {
  const code = socialAuthNp.parseUrl(window.location.search).code;
  const [resp, setResp] = React.useState(null);

  const submitCode = async () => {
    try {
      const { data } = await Axios.get("http://localhost:6001/auth/github?code=" + code);
      setResp(data);
    } catch (err) {
      setResp(err.response.data);
    }
  };

  React.useEffect(() => {
    if (code) submitCode();
  }, [code]);

  return (
    <div>
      <p>Code is: {code}</p>
      <p>Please wait submitting code for verification..</p>
      {resp && <p>{JSON.stringify(resp)}</p>}
    </div>
  );
}
