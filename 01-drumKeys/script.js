
function removeTransition(event){
    console.log(event)
    event.target.classList.remove('playing');
    
}

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key=>key.addEventListener('transitionend', removeTransition));



function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`li[data-key="${event.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play()
    setTimeout(removeTransition,1000)
}

window.addEventListener('keydown', playSound);
