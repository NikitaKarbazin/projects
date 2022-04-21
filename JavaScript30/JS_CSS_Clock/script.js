const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secDeg = (second / 60) * 360 + 90;
  secondHand.style.transform =  `rotate(${secDeg}deg)`;

  const minute = now.getMinutes();
  const minDeg = (minute / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);