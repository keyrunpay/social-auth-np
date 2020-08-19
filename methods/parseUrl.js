import queryString from "query-string";

function parseUrl(url) {
  const parsedQuery = queryString.parse(url);
  return parsedQuery;
}

export default parseUrl;
