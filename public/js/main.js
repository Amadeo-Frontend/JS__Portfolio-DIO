function toggleAccordion(e) {
  var i = e.parentElement,
    e = e.querySelector(".arrow"),
    t = i.classList.contains("active");
  i.classList.toggle("active"),
    (e.src = t
      ? "./public/images/trigger-up.svg"
      : "./public/images/trigger-down.svg");
}
