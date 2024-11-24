import get from "./utils/getElement.js";
import fetchUser from "./fetchUser.js";
import displayUser from "./displayUser.js";

// select elements

const btn = get(".btn");

const showUser = async () => {
  const user = await fetchUser();
  return displayUser(user);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
