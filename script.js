const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.position = "relative";
          entry.target.style.top = "0px";
          entry.target.style.opacity = "1";

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
});
document.querySelectorAll(".scroll-target").forEach(target => {
    observer.observe(target);
});

function openMenu(){
    document.querySelector(".menu-container").style.opacity = "1";
    document.querySelector(".menu-container").style.pointerEvents = "auto";
}
function closeMenu(){
    document.querySelector(".menu-container").style.opacity = "0";
    document.querySelector(".menu-container").style.pointerEvents = "none";
}