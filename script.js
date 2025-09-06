// === BACKGROUND SUPER LAG (RGB noise chaos) ===
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function drawLagNoise() {
  const imgData = ctx.createImageData(canvas.width, canvas.height);
  for (let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = Math.random() * 255;     // R
    imgData.data[i+1] = Math.random() * 255;   // G
    imgData.data[i+2] = Math.random() * 255;   // B
    imgData.data[i+3] = 255;                   // A
  }
  ctx.putImageData(imgData, 0, 0);
  requestAnimationFrame(drawLagNoise);
}
drawLagNoise();

// === TEKS BERGERAK RANDOM (bouncing) ===
let texts = [];

function createText(x, y) {
  const div = document.createElement("div");
  div.className = "idiot";
  div.innerText = "YOU ARE AN IDIOT";
  div.style.left = x + "px";
  div.style.top = y + "px";
  document.body.appendChild(div);

  texts.push({
    el: div,
    x: x,
    y: y,
    dx: (Math.random() - 0.5) * 6,
    dy: (Math.random() - 0.5) * 6
  });
}

function moveTexts() {
  texts.forEach(t => {
    t.x += t.dx;
    t.y += t.dy;

    if (t.x < 0 || t.x > innerWidth - 200) t.dx *= -1;
    if (t.y < 0 || t.y > innerHeight - 50) t.dy *= -1;

    t.el.style.left = t.x + "px";
    t.el.style.top = t.y + "px";
  });
  requestAnimationFrame(moveTexts);
}
moveTexts();

// === ALERT + TEXT SETIAP 1 MILIDETIK ===
setInterval(() => {
  createText(Math.random() * (innerWidth-200),
             Math.random() * (innerHeight-50));
  alert("YOU ARE AN IDIOT!");
}, 1);
