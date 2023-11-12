const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let colorInterval = null;



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const handleChangeColor = () => {
  colorInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute('disabled', '');
  }, 1000)
}

const startList = startBtn.addEventListener('click', handleChangeColor);

//додати стоп зміни кольру
stopBtn.addEventListener('click', () => {
  clearInterval(colorInterval);
  startBtn.removeAttribute('disabled');

});