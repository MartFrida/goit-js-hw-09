// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
// import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');
const myInput = document.querySelector("#datetime-picker");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const timeSelected = selectedDates[0].getTime();
    if (timeSelected < Date.now()) {
      window.alert("Please choose a date in the future")
    } else {
      btnStart.removeAttribute('disabled');
      localStorage.setItem('timeSelected', timeSelected)
    }
  },
};

const timer = {
  deadline: new Date(2023, 11, 13),
  intervalId: null,
  refs: {
    days: document.querySelector('.value[data-days]'),
    hours: document.querySelector('.value[data-hours]'),
    minutes: document.querySelector('.value[data-minutes]'),
    seconds: document.querySelector('.value[data-seconds]'),
  },

  start() {
    this.intervalId = setInterval(() => {
      const dif = this.deadline - Date.now();

      if (dif < 0) {
        this.stop();
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(dif);
      this.refs.days.textContent = this.pad(days);
      this.refs.hours.textContent = this.pad(hours);
      this.refs.minutes.textContent = this.pad(minutes);
      this.refs.seconds.textContent = this.pad(seconds);

      console.log(convertMs(dif))
    }, 1000)
  },

  stop() {
    clearInterval(this.intervalId);
  },

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

btnStart.setAttribute('disabled', '');
const fp = flatpickr(myInput, options);  // flatpickr
btnStart.addEventListener('click', () => {
  timer.deadline=localStorage.getItem('timeSelected')
  timer.start()
})
