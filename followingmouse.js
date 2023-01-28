const circles = document.querySelectorAll('.circle');

document.addEventListener('mousemove', e => {
  circles.forEach(circle => {
    let x = e.clientX;
    let y = e.clientY;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
  });
});