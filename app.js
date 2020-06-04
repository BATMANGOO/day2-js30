const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

const setDate = () => {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const mins = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const secondsDegrees = ((seconds/60) * 360) + 90;
  const minutesDegrees = ((mins/60) * 360) + 90;
  const hoursDegrees = ((hours/12) * 360) + 90

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if(secondsDegrees === 90) {
    secondHand.classList.remove('tic-effect');
  } else if(minutesDegrees === 90) {
    minHand.classList.remove('tic-effect');
  } else if(hourHand === 90) {
    hourHand.classList.remove('tic-effect');
  };
  
  if(secondsDegrees === 96 || minutesDegrees === 96 || hoursDegrees === 96) {
  secondHand.classList.add('tic-effect');
  minHand.classList.add('tic-effect');
  hourHand.classList.add('tic-effect');
  };
};

setInterval(setDate, 1000);