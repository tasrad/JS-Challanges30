const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min/60)*360)+ ((second/60)*6)+90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour/12)*360)+((min/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);
// setDate();