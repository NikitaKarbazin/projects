const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hours = document.querySelector('.hour');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secDeg = (second / 60) * 360 + 90;
  sec.innerHTML = `${second}`;
  secondHand.style.transform =  `rotate(${secDeg}deg)`;


  const minute = now.getMinutes();
  const minDeg = (minute / 60) * 360 + 90;
  min.innerHTML = `${minute} :`;
  minutesHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  hours.innerHTML = `${hour} :`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);