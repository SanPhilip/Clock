const timeContainer = document.getElementById('time');
const dayContainer = document.getElementById('day');
const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');
let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const timeFormat = {
    timeZone,
    year: 'numeric',
    month: 'short',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

const getTime = () => {
    date = new Date();
    fullDate = new Intl.DateTimeFormat('en-US', timeFormat).format(date);
    time = fullDate.slice(-11).trim();
    day = fullDate.slice(0, -12).trim();

    timeContainer.textContent = time;
    dayContainer.textContent = day;

    secondHand.style.transformOrigin = "50% 94%";
    secondHand.style.transform = `translate(-50%, -1%) rotate(${6*date.getSeconds()}deg)`;

    minuteHand.style.transformOrigin = "50% 93%";
    minuteHand.style.transform = `translate(-50%, 16%) rotate(${6*date.getMinutes()}deg)`;

    hourHand.style.transformOrigin = "50% 93%";
    hourHand.style.transform = `translate(-50%, 16%) rotate(${30*date.getHours() + 0.5*date.getMinutes()}deg)`;
}

getTime();
setInterval(getTime, 1000);
