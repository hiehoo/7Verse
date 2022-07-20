import { useEffect, useState } from 'react';

const useDateCountDown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  days = days > 0 ? days : 0;

  let hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hours = hours > 0 ? hours : 0;

  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  minutes = minutes > 0 ? minutes : 0;

  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  seconds = seconds > 0 ? seconds : 0;

  return [days, hours, minutes, seconds];
};

export { useDateCountDown };
