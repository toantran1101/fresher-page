document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.remove("transparent-header");
    header.classList.add("scrolled");
    console.log("scroll");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("transparent-header");
  }
});
