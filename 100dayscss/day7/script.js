const searchIcon = document.querySelector(".fa-magnifying-glass");
const searchBar = document.querySelector(".search-bar");

searchIcon.addEventListener("click", () => {
  if (searchBar.classList.contains("active")) {
    searchBar.style.animation = `searchDisappears .4s forwards ease-in-out`;
    searchBar.addEventListener(
      "animationend",
      () => {
        searchBar.style.display = "none";
      },
      { once: true }
    );
    searchBar.classList.remove("active");
  } else {
    searchBar.style.display = "block";
    searchBar.style.animation = `searchAppears .4s forwards ease-in-out`;
    searchBar.classList.add("active");
  }
});

const asideIcon = document.querySelector(".aside-bar");
const aside = document.querySelector("aside");
const main = document.querySelector("main");

asideIcon.addEventListener("click", () => {
  if (aside.classList.contains("active")) {
    aside.style.animation = `asideDisappears .4s forwards ease-in`;
    main.style.animation = `mainAppears .4s forwards ease-in-out`;
    aside.classList.remove("active");
  } else {
    aside.style.animation = `asideAppears .4s forwards ease-out`;
    main.style.animation = `mainDisappears .4s forwards ease-in-out`;
    aside.classList.add("active");
  }
});