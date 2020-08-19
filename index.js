import getOauthUrl from "./methods/getOauthUrl";
import getClientSideOauthOption from "./methods/getClientSideOauthOption";
import parseUrl from "./methods/parseUrl";
import getAccessToken from "./methods/getAccessToken";
import getUserInfo from "./methods/getUserInfo";

const socialAuthNp = { getOauthUrl, getClientSideOauthOption, parseUrl, getAccessToken, getUserInfo };

export default socialAuthNp;
