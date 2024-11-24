import get from "./utils/getElement.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const icons = [...document.querySelectorAll(".icon")];

const displayUser = (user) => {
  img.src = user.image;
  value.textContent = user.name;
  icons.map((icon) => icon.classList.remove("active"));
  icons[0].classList.add("active");
  icons.map((icon) => {
    const iconLabel = icon.dataset.label;
    icon.addEventListener("click", () => {
      title.textContent = `My ${iconLabel} is`;
      value.textContent = user[iconLabel];
      icons.map((icon) => icon.classList.remove("active"));
      icon.classList.add("active");
    });
  });
};
export default displayUser;
