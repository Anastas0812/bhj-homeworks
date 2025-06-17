const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.getElementsByClassName('hole')

let victory = 0;
let defeat = 0;

for (let i = 0; i < holes.length; i++) {
  holes[i].onclick = function() {
    if (this.className.includes('hole_has-mole')) {
      victory++;
      dead.textContent = victory;

      if(victory >= 10) {
        alert('Победа!');
        victory = 0;
        defeat = 0;
        dead.textContent = victory;
        lost.textContent = defeat;
      }
    } else {
      defeat++;
      lost.textContent = defeat;

      if (defeat >= 5) {
        alert('Вы проиграли!');
        victory = 0;
        defeat = 0;
        dead.textContent = victory;
        lost.textContent = defeat;
      }
    }
  };
}