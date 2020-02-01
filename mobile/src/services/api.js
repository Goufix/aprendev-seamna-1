import axios from "axios";

export async function get() {
  const { data: response } = await axios.get("https://api.myjson.com/bins/kj4aq");
  return response;
}
