const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

const positionElement = (e) => {
  const mouseY = e.pageY;
  const mouseX = e.pageX;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

const scrollElement = (e) => {
  const mouseY = e.pageY;
  const mouseX = e.pageX;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", positionElement);
window.addEventListener("wheel", scrollElement);

