const clikerCounter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');
const baseWidthCookie = img.width;

img.onclick = () => {
  img.width *= 1.1;
  clikerCounter.textContent = Number(clikerCounter.textContent) + 1;

  if (clikerCounter.textContent % 2 === 0) {
    img.width = baseWidthCookie;
  }
};