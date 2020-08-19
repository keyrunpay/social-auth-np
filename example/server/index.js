//Start the server
const app = require("./app");
const port = 6001;

const server = app.listen(6001, () => {
  console.log("Server Listening on: " + 6001);
});
