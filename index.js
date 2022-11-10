const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeCSSTransition));
window.addEventListener('keydown', playSound);

const btns = Array.from(document.getElementsByClassName('key'));
btns.forEach(btns => btns.addEventListener('click', removeCSSTransition));
window.addEventListener('click', playSound);

function removeCSSTransition(e) {
  if ((e.propertyName !== 'transform') && (e.propertyName !== 'click')) return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  if (e.type === "keydown"){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  } 

  if (e.type === "click"){
    const audio = document.querySelector(`audio[data-key="${e.path[1].dataset.key}"]`); 
    const key = document.querySelector(`div[data-key="${e.path[1].dataset.key}"]`);
    console.log(e)
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
}


