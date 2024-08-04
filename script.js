const input = document.getElementById('input');
const result = document.querySelector('.result');
const Lbutton = document.querySelector('.lowerCase');
const Ubutton = document.querySelector('.upperCase');
const Listen = document.querySelector('.listen');

function changetolowerCase() {
  const output = input.value.toLowerCase();
  result.innerHTML = output;
}
function changetoupperCase() {
  const output = input.value.toUpperCase();
  result.innerHTML = output;
}
Lbutton.addEventListener('click', changetolowerCase);
Ubutton.addEventListener('click', changetoupperCase);

function translateInput(){
  const text = input.value;
 text.translate();
}

let speech = new SpeechSynthesisUtterance();

Listen.addEventListener('click', ()=>{ 
  speech.text = input.value;
  window.speechSynthesis.speak(speech);
}); 