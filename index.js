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

document.getElementById("jwat-href").addEventListener("click", function () {
  const href =
    "https://www.cyberlogitec.com.vn/careers/experienced-hire/8cc3bd96-98a6-43e4-aa97-15648ceec4c6";
  window.location.href = href;
  history.pushState(null, "", href);
});

document.getElementById("training-href").addEventListener("click", function () {
  const href =
    "https://www.cyberlogitec.com.vn/careers/experienced-hire/043484ad-5cd9-402b-bb43-0531af0c8334";
  window.location.href = href;
  history.pushState(null, "", href);
});

document.getElementById("scrum-href").addEventListener("click", function () {
  const href =
    "https://www.cyberlogitec.com.vn/careers/experienced-hire/8c1298b0-c74e-4361-8470-2ddb5ef661e1";
  window.location.href = href;
  history.pushState(null, "", href);
});

window.addEventListener("popstate", function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);

  // Reload the page
  window.location.reload();
  console.log("back");
});
