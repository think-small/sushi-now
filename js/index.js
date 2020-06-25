const fadeInObjects = document.querySelectorAll(".fade-in");

const options = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScrollObserver = new IntersectionObserver(
  (entries, appearOnScrollObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      else {
        entry.target.classList.add("appear");
        appearOnScrollObserver.unobserve(entry.target);
      }
    });
  },
  options
);

fadeInObjects.forEach((obj) => {
  appearOnScrollObserver.observe(obj);
});
