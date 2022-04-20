const secondHand = document.querySelectorAll('.second-hand');
const minutesHand = document.querySelectorAll('.min-hand');
const hourHand = document.querySelectorAll('.hour-hand');

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secDeg = (second / 60) * 360 + 90;
  secondHand[0].style.transform =  `rotate(${secDeg}deg)`;
  secondHand[1].style.transform =  `rotate(${secDeg}deg)`;

  const minute = now.getMinutes();
  const minDeg = (minute / 60) * 360 + 90;
  minutesHand[0].style.transform = `rotate(${minDeg}deg)`;
  minutesHand[1].style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  hourHand[0].style.transform = `rotate(${hourDeg}deg)`;
  hourHand[1].style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);