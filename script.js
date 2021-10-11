const el_days = document.getElementById("days");
const el_hours = document.getElementById("hours");
const el_minutes = document.getElementById("minutes");
const el_seconds = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalsSeconds = (newYearsDate - currentDate ) / 1000;

    const days = Math.floor(totalsSeconds / 3600 / 24);
    const hours = (Math.floor(totalsSeconds / 3600) % 24)-1;
    const minutes = Math.floor(totalsSeconds / 60) % 60;
    const seconds = Math.floor(totalsSeconds) % 60;

    el_days.innerHTML = days;
    el_hours.innerHTML = hours;
    el_minutes.innerHTML = minutes;
    el_seconds.innerHTML = seconds;
    console.log(days,hours,minutes,seconds);
}
countdown();
setInterval(countdown,1000);