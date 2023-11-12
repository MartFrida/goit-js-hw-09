// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const dateToday = new Date();
const timeToday = dateToday.getTime();
const btnStart = document.querySelector('button[data-start]');
let timeSelected = null;

const leftDays = document.querySelector('.value[data-days]');
const leftHours = document.querySelector('.value[data-hours]');
const leftMinutes = document.querySelector('.value[data-minutes]');
const leftSeconds = document.querySelector('.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkData(selectedDates)
  },
};

const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);  // flatpickr

btnStart.setAttribute('disabled', '');

function checkData(selectedDates) {
  timeSelected = selectedDates[0].getTime();
  if (timeSelected < timeToday) {
    window.alert("Please choose a date in the future")
  } else {
    btnStart.removeAttribute('disabled');
    localStorage.setItem('timeSelected', timeSelected)
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

function handleTimeStart() {
  setInterval(() => {
    const lastData = convertMs(localStorage.getItem('timeSelected') - timeToday);

    leftDays.textContent = lastData.days;
    leftHours.textContent = lastData.hours;
    leftMinutes.textContent = lastData.minutes;
    leftSeconds.textContent = lastData.seconds;
    console.log(lastData)
  }, 60000)

}

btnStart.addEventListener('click', handleTimeStart);





