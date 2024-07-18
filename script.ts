function countdownToBirthday(birthday: Date): void {
  const now = new Date().getTime();
  const timeDifference = birthday.getTime() - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

  (document.getElementById("days") as HTMLElement).innerText = days.toString();
  (document.getElementById("hours") as HTMLElement).innerText = hours.toString();
  (document.getElementById("minutes") as HTMLElement).innerText = minutes.toString();
  (document.getElementById("seconds") as HTMLElement).innerText = seconds.toString();
}

function updateCountdown() {
  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), 6, 23, 11, 19, 0); 

  if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  countdownToBirthday(nextBirthday);
}

setInterval(updateCountdown, 1000);
updateCountdown();