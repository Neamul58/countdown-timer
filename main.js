
//SELECTOR
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("min");
const secs = document.getElementById("sec");

//FOR MANAGE TWO DIGIT
const timeFormat = (time)=> {
    return time < 10 ? `0${time}` : time;
}

//UPDATE TIME 
const updateCountdown = (deadLine)=> {
    const currentTime = new Date();
    const timeDiff = deadLine - currentTime;
    
//    CALCULATE DAYS, HOURS, MINUITES AND SECONDS 
    const calcSec = Math.floor(timeDiff/1000) % 60;
    const calcMin = Math.floor(timeDiff/1000/60) % 60;
    const calcHour = Math.floor(timeDiff/1000/60/60) % 24;
    const calcday = Math.floor(timeDiff/1000/60/60/24);
    
//    FOR SHOWING RESULT ON DISPLAY
    days.textContent = timeFormat(calcday);
    hours.textContent = timeFormat(calcHour);
    mins.textContent = timeFormat(calcMin);
    secs.textContent = timeFormat(calcSec);
}

//FOR COUNTDOWN TIME IN EVERY SECOND
const countdown = (targetDate)=> {
    setInterval(()=> updateCountdown(targetDate), 1000);
}

//TIME DEADLINE
const targetDate = new Date("january 30 2026 23:59");
countdown(targetDate);
