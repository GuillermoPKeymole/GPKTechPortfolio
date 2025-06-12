// script.js - Portfolio Enhancements

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.id = "scrollToTop";
  document.body.appendChild(scrollBtn);

  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.fontSize = "20px";
  scrollBtn.style.display = "none";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "5px";
  scrollBtn.style.backgroundColor = "#444";
  scrollBtn.style.color = "white";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)";

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Copy to Clipboard (Email & Phone)
  document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", () => {
      const text = button.getAttribute("data-copy");
      navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i>';
        }, 1500);
      });
    });
  });
});
