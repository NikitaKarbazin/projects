const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 0;
ctx.globalCompositeOperation = 'destination-over';

let isDrawing = false;
let direction = true;

let X = 0;
let Y = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  console.log(e)

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(X, Y);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  // деструктуризация
  [X, Y] = [e.offsetX, e.offsetY]

  hue++;
  if (hue > 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 70 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth--;
  }
  else {
    ctx.lineWidth++;
  }

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [X, Y] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

