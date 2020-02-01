import { get } from "../services/api";

export async function validateUser(username, password, url) {
  const users = await get(url);

  let isValidUser = false;

  users.map(user => {
    if (user.user === username && user.password === password) {
      isValidUser = true;
      return true;
    }
    return false;
  });
  return isValidUser;
}
