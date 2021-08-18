// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Sep 1, 2021'),
//   });

const refs = {
  days: document.querySelector('[data-value=days]'),
  hours: document.querySelector('[data-value=hours]'),
  mins: document.querySelector('[data-value=mins]'),
  secs: document.querySelector('[data-value=secs]')
}

function calcTime() {
  const currentDate = Date.now();
  const time = startDate - currentDate;
  // console.log(time);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  refs.days.textContent = days < 10 ? `0${days}` : days;
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
  
};

let id = null;
let targetDate = new Date('Sep 1, 2021');
// console.log(targetDate);

function timerStart() {
  startDate = targetDate;
  id = setInterval(calcTime, 1000);
 
}

function timerStop() {
  if (currentDate === targetDate) {
    clearInterval(id)
  }
}


window.addEventListener('load', timerStart);




  