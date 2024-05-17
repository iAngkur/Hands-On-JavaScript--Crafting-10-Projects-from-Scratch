function getFormatedTime(time) {
    return time < 10 ? "0" + time : time;
}

function displayTime(element, time) {
    element.textContent = getFormatedTime(time);
}

function updateClock() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    displayTime(hoursElement, hours);
    displayTime(minutesElement, minutes);
    displayTime(secondsElement, seconds);
}

setInterval(updateClock, 1000);