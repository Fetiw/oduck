const $timer = document.querySelector('[data-timer]');

if  ($timer) {
  const $days = $timer.querySelector('[data-days]');
  const $hours = $timer.querySelector('[data-hours]');
  const $minutes = $timer.querySelector('[data-minutes]');
  const $seconds = $timer.querySelector('[data-seconds]');
  const timer = $timer.getAttribute('data-timer');

  function countdown() {
    const newYearEndDate = new Date(timer);
    const currentDate = new Date();

    const totalSeconds = (newYearEndDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    $days.innerHTML = formatTime(days);
    $hours.innerHTML = formatTime(hours);
    $minutes.innerHTML = formatTime(minutes);
    $seconds.innerHTML = formatTime(seconds);
  }

  countdown();

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  setInterval(countdown, 1000);
}
