const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

const { width: w, height: h } = canvas;
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, w, h);
ctx.fillStyle = '#bbbbbb';

let x, y, radius;
for (let i = 0; i < 550; i++) {
  x = Math.random() * w;
  y = Math.random() * h;
  radius = Math.random() * 3;
  ctx.beginPath();
  //Parameters it expects are x, y, radius, start, end, and antiClockwise
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();
  //draws to canvas a
}
