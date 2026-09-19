const timer = (deadLine) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const padZero = (num) => String(num).padStart(2, "0");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    // если дедлайн уже прошёл — не уходим в минус, фиксируем на нуле
    if (timeRemaining < 0) {
      timeRemaining = 0;
    }

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    // console.log("tick");

    let getTime = getTimeRemaining();

    timerHours.textContent = padZero(getTime.hours);
    timerMinutes.textContent = padZero(getTime.minutes);
    timerSeconds.textContent = padZero(getTime.seconds);

    if (getTime.timeRemaining <= 0) {
      clearInterval(intervalId);
    }
  };

  updateClock();
  const intervalId = setInterval(updateClock, 1000);
};

export default timer;