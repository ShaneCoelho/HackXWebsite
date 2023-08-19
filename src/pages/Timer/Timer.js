import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const targetDate = new Date("2023-09-15T00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="countdown container">
      <h1>
        Enter the Hac<span>X</span> in :
      </h1>

      <div className="timer">
        <div className="time-block">
          DAYS
          <div className="digit">{timeRemaining.days}</div>
        </div>

        <div className="time-block">
          HOURS
          <div className="digit">{timeRemaining.hours}</div>
        </div>

        <div className="time-block">
          MINUTES
          <div className="digit">{timeRemaining.minutes}</div>
        </div>

        <div className="time-block">
          SECONDS
          <div className="digit">{timeRemaining.seconds}</div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
