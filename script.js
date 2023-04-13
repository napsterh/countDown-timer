const daysLel = document.getElementById("daysL");
const hoursLel = document.getElementById("hoursL");
const minsLel = document.getElementById("minsL");
const secsLel = document.getElementById("secsL");
const fechaLunaEl = document.getElementById("fechaLuna");

const daysVel = document.getElementById("daysV");
const hoursVel = document.getElementById("hoursV");
const minsVel = document.getElementById("minsV");
const secsVel = document.getElementById("secsV");
const fechaVainiEl = document.getElementById("fechaVaini");

const cumpleLuna = "21 jun 2023"
const adopVaini = "13 aug 2023"

const countDown = (date, daysEl, hoursEl, minsEl, secsEl, fechaEl) => {
    const hb = new Date(date)
    const currentDate = new Date();

    const totalSecs = (hb - currentDate) / 1000;

    const days = Math.floor(totalSecs / 3600 / 24)
    const hours = Math.floor(totalSecs / 3600 ) % 24
    const mins = Math.floor(totalSecs / 60) % 60
    const secs = Math.floor(totalSecs) % 60

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);
    fechaEl.innerHTML = fechaEl === fechaLunaEl ? formatDateConverter(cumpleLuna) : formatDateConverter(adopVaini);
}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
} 

const formatDateConverter = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().substr(-2);
    return `${day}/${formatTime(month)}/${year}`; 
} 

setInterval(() => {
    countDown(cumpleLuna, daysLel, hoursLel, minsLel, secsLel, fechaLunaEl);
    countDown(adopVaini, daysVel, hoursVel, minsVel, secsVel, fechaVainiEl);
}, 1000)