import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <Contador>
      <div className="Clock-days"><span className="number">{leading0(days)}</span> <span className="text">días</span></div>
      <div className="Clock-hours"><span className="number">{leading0(hours)}</span> <span className="text">horas</span></div>
      <div className="Clock-minutes"><span className="number">{leading0(minutes)}</span> <span className="text">minutos</span></div>
      <div className="Clock-seconds"><span className="number">{leading0(seconds)}</span> <span className="text">segundos</span></div>
    </Contador>
  );
};

const Contador = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 20px;
background-color: #E29C25;
padding: 30px;
border-radius: 30px;
max-width: 500px;
margin-left: auto;
margin-right: auto;
@media (max-width: 485px) {
    padding: 20px;
    border-radius: 15px;
}
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 20px;
        @media (max-width: 485px) {
            padding: 0 10px;
        }
        .number {
            color: white;
            font-size: 1.5rem;
            @media (max-width: 485px) {
                font-size: 1rem;
            }
        }
        .text {
            text-transform: uppercase;
            font-family: var(--slim);
            font-size: 1rem;
            color: white;
            @media (max-width: 485px) {
                font-size: 0.8rem;
            }
        }
    }
`

export default Clock;