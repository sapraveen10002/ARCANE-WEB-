document.addEventListener("DOMContentLoaded", function () {
  // navlink active
  const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      // Remove theme-active class from all links
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // Add theme-active class to the clicked link
      this.classList.add("active");
    });
  });

  // navbar background class add and remove on scrolling
  document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
