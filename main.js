const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById("min");
const secs = document.getElementById("sec");

const timeFormat = (time)=> {
    return time < 10 ? `0${time}` : time;
}

const updateCountdown = (deadLine)=> {
    const currentTime = new Date();
    const timeDiff = deadLine - currentTime;
//    console.log(timeDiff);
    const calcSec = Math.floor(timeDiff/1000) % 60;
//    console.log(calcSec);
    const calcMin = Math.floor(timeDiff/1000/60) % 60;
//    console.log(calcMin);
    const calcHour = Math.floor(timeDiff/1000/60/60) % 24;
//    console.log(calcHour);
    const calcDay = Math.floor(timeDiff/1000/60/60/24);
//    console.log(calcDay);
     
    days.textContent = timeFormat(calcDay);
    hours.textContent = timeFormat(calcHour);
    mins.textContent = timeFormat(calcMin);
    secs.textContent = timeFormat(calcSec);
}

const countDown = (targetDate)=> {
    setInterval(()=> updateCountdown(targetDate), 1000);
}

const targetDate = new Date('january 30 2026 23:59');
countDown(targetDate);
