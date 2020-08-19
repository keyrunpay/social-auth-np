# social-auth-np

> Making life easier to integrate social signup in applications

[![NPM](https://img.shields.io/npm/v/social-auth-np.svg)](https://www.npmjs.com/package/social-auth-np)

## Install

```bash
npm install --save social-auth-np
```

## Examples

[https://github.com/keyrunpay/social-auth-np/tree/master/example](https://github.com/keyrunpay/social-auth-np/tree/master/example)

## Usage Client Side

### Social Login Button Component

```jsx
import React from "react";
import socialAuthNp from "social-auth-np";

export default function FacebookAuthComponent() {
  const loginOption = {
    ...socialAuthNp.getClientSideOauthOption("facebook"), // available auth options "facebook", "google", "github", "linkedin"
    client_id: "FB_CLIENT_ID",
    redirect_uri: "http://localhost:3000/facebook_auth_callback",
  };
  const fbLoginUrl = socialAuthNp.getOauthUrl("facebook", loginOption); // available auth options "facebook", "google", "github", "linkedin"

  return (
    <div className="App">
      <br />
      <a href={fbLoginUrl}>
        <button>Login with facebook</button>
      </a>
    </div>
  );
}
```

### Fb Redirected Page Component

```jsx
import React from "react";
import socialAuthNp from "social-auth-np";
import Axios from "axios";

export default function FacebookCallback() {
  const code = socialAuthNp.parseUrl(window.location.search).code;
  const [resp, setResp] = React.useState(null);

  const submitCode = async () => {
    try {
      const { data } = await Axios.get(
        "http://localhost:6001/auth/facebook?code=" + code
      );
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
      <p>FB Code is: {code}</p>
      <p>Please wait submitting code for verification..</p>
      {resp && <p>{JSON.stringify(resp)}</p>}
    </div>
  );
}
```

## Usage Server Side

```js
const socialAuthNp = require("social-auth-np");

const authFacebook = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    res.status(401).json({ error: "Code is required" });
    return;
  }

  const params = {
    client_id: "CLIENT_ID",
    client_secret: "CLIENT_SECRET",
    redirect_uri: "http://localhost:3000/facebook_auth_callback",
    code,
  };

  try {
    const { data } = await socialAuthNp.getAccessToken("facebook", params); // available auth options "facebook", "google", "github", "linkedin"
    const access_token = data.access_token;
    if (!access_token) {
      res.status(401).json({ error: "Expired or bad code" });
      return;
    }
    const response = await socialAuthNp.getUserInfo("facebook", access_token); // available auth options "facebook", "google", "github", "linkedin"
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
```

## About Author

<a href="https://github.com/keyrunpay"><img src="https://avatars0.githubusercontent.com/u/41059790?s=460&u=fceee26bdb0e5dd6b3b57120fa7295ddcd82d878&v=4" title="keyrunpay" width="60" height="60"></a>

Kiran Neupane <br />
tokeyrun@gmail.com <br />
[Facebook](https://facebook.com/kiran.neupz)

## Support This Package

<a href="https://www.buymeacoffee.com/kirann"><img src="https://www.buymeacoffee.com/assets/img/bmc-meta-new/apple-icon-120x120.png" title="ashiishme" width="80" height="80"></a>

### React Tutor @ Youtube

Channel Name: Buggged <br/>
[Youtube](https://www.youtube.com/channel/UChvdEZeMyLPhZ0Jt_K3RCyQ) <br/>
[Website](https://buggged.com)

## License

MIT © [keyrunpay](https://github.com/keyrunpay)
