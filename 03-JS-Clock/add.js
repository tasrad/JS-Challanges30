function clockWork(){
    const hoursArrow = document.querySelector('.hours');
    const minutesArrow = document.querySelector('.minutes');
    const secondsArrow = document.querySelector('.seconds');
    


    setInterval(()=>{
        const now = new Date();
        const deg = 6;

        const hour = now.getHours() 
        const hourDegrees = (hour /12)*360 ;

        const minute = now.getMinutes() 
        const minDegrees =( minute/60)*360 +180;

        const second = now.getSeconds() 
        const secDegrees = (second/60)*360 + 180;


        hoursArrow.style.transform=`rotate(${hourDegrees}deg)`;
        minutesArrow.style.transform=`rotate(${minDegrees}deg)`;
        secondsArrow.style.transform=`rotate(${secDegrees}deg)`;
    }, 0)


}

clockWork();