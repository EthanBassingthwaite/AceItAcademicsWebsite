// Used to monitor when to animate the results page academic growth bars
// Only animates once


createObserver();

function createObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: .5,
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  const items = document.querySelectorAll(".trigger-observe");
  items.forEach(item => observer.observe(item));
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("viewed");
    }

});
}