const panels = document.querySelectorAll('.panel-photo');
const text = document.querySelectorAll('p');
const photos = document.querySelectorAll('.photo')

function openPhoto (){
    this.classList.add('open-section');
    this.querySelector('p').classList.add('hidden')
}

function nativeForm(e){
    console.log(e);
    setInterval(()=>{
        this.classList.remove('open-section');
     this.querySelector('p').classList.remove('hidden');
    }, 5000)
}

panels.forEach(panel => panel.addEventListener('click', openPhoto));
panels.forEach(panel => panel.addEventListener('transitionend', nativeForm));


