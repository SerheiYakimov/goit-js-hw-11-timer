


class CountdownTimer {
  constructor({ selector, targetDate }) {
    
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector('[data-value=days]'),
      hours: document.querySelector('[data-value=hours]'),
      mins: document.querySelector('[data-value=mins]'),
      secs: document.querySelector('[data-value=secs]'),
      timerFace: document.querySelector('#timer-1')
    };

    this.id = null;
    this.targetDate = new Date('Sept 01, 2021');

   
  }
  
  calcTime = () => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;   

    this.timerStop(time);
    
  };

  timerStart = () => {
    
    this.id = setInterval(this.calcTime, 1000);
  };

  timerStop = (time) => {
    if (time < 0) {
      clearInterval(this.id);
      this.refs.timerFace.textContent = 'Finish';
    };
  };

  init() {
   window.addEventListener('load', this.timerStart);
  }
      
};


const  timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 1, 2021'),
});
timer.init();






// const refs = {
//   days: document.querySelector('[data-value=days]'),
//   hours: document.querySelector('[data-value=hours]'),
//   mins: document.querySelector('[data-value=mins]'),
//   secs: document.querySelector('[data-value=secs]'),
//   timerFace: document.querySelector('#timer-1')
// }

// // console.log(refs.timerFace);

// function calcTime() {
//   const currentDate = Date.now();
//   const time = targetDate - currentDate;
  
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   refs.days.textContent = days < 10 ? `0${days}` : days;
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   refs.secs.textContent = secs < 10 ? `0${secs}` : secs;

//   timerStop(time);
  
// };

// let id = null;
// let targetDate = new Date('Sept 01, 2021');
// // console.log(targetDay);

// function timerStart() {
//   id = setInterval(calcTime, 1000);
 
// }

// function timerStop(time) {
//   if (time < 0) {
//     clearInterval(id);
//     refs.timerFace.textContent = 'Finish';
//   }
// }

// window.addEventListener('load', timerStart);



