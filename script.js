function countdownToBirthday(birthday) {
    var now = new Date().getTime();
    var timeDifference = birthday.getTime() - now;
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    console.log("Days: ".concat(days, ", Hours: ").concat(hours, ", Minutes: ").concat(minutes, ", Seconds: ").concat(seconds));
    document.getElementById("days").innerText = days.toString();
    document.getElementById("hours").innerText = hours.toString();
    document.getElementById("minutes").innerText = minutes.toString();
    document.getElementById("seconds").innerText = seconds.toString();
}
function updateCountdown() {
    var today = new Date();
    var nextBirthday = new Date(today.getFullYear(), 6, 23, 11, 19, 0);
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    countdownToBirthday(nextBirthday);
}
setInterval(updateCountdown, 1000);
updateCountdown();
