// lear
// Yogo

window.addEventListener("DOMContentLoaded", () => {
  const switchBtn = document.querySelector(".switch-btn");

  const aboutRow = document.querySelector(".about-row");
  const slideBtns = document.querySelectorAll(".slide-btn");

  const openLinksBtn = document.querySelector(".fa-bars");
  const hideLinksBtn = document.querySelector(".fa-times");
  const links = document.querySelector(".links");

  // Changing Background Color
  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
  });

  // Sliding Testimonials
  slideBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      aboutRow.style.transform = `translateX(-${index * 100}vw)`;
      slideBtns.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Show Links
  openLinksBtn.addEventListener("click", () => {
    links.style.right = "0";
  });

  // Hide Links
  hideLinksBtn.addEventListener("click", () => {
    links.style.right = "-160px";
  });
});
