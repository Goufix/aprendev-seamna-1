const axios = require("axios");

async function getApi() {
  const { data: usuarios } = await axios.get("https://api.myjson.com/bins/kj4aq");
  console.log(usuarios);
}

getApi();
