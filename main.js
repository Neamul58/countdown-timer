const days = document.getElementById("days");
const hours = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

 const formatTime = (time)=> {
        return time < 10 ? `0${time}` : time;
    }

const updateCountDown = (deadline)=> {
    const currentTime = new Date();
    const timeDiff = deadline - currentTime;
//    console.log(timeDiff);
    let calcSec = Math.floor(timeDiff/1000) % 60;
//    console.log(calcSec);
    let calcMin = Math.floor(timeDiff/1000/60) % 60;
//    console.log(calcMin);
    let calcHour = Math.floor(timeDiff/1000/60/60) % 24;
    let calcDay = Math.floor(timeDiff/1000/60/60/24);
//    console.log(calcDay);
    
    
    days.textContent = formatTime(calcDay);
    hours.textContent = formatTime(calcHour);
    min.textContent = formatTime(calcMin);
    sec.textContent = formatTime(calcSec);
    
}

const countDown = (targetDate) => {
    setInterval(()=> updateCountDown(targetDate), 1000);
}

const targetDate = new Date('january 10 2026 11:69');
countDown(targetDate);