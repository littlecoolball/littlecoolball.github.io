const circles = document.querySelectorAll('.circle');

document.addEventListener('mousemove', e => {
  circles.forEach(circle => {
    let x = e.clientX;
    let y = e.clientY;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
  });
});
const dots = document.querySelectorAll('.dot');

// get a random number between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

dots.forEach(dot => {
  dot.style.left = getRandomInt(0, window.innerWidth) + 'px';
  dot.style.top = getRandomInt(0, window.innerHeight) + 'px';
  dot.style.transform = `scale(${getRandomInt(1,10) * 0.1})`;
});