import React, { useState, useEffect } from 'react';
import './App.css';

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function App({date = new Date()}) {
  const [now, setNow] = useState(date);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      <Now now={now} />
    </div>
  );
}

function Now({ now }) {
  return (
    <>
      <div><center>{now.toLocaleString()}</center></div>
      <div className="calendar">
        {months.map((month) => <Month key={month} now={now} month={month} />)}
      </div>
    </>
  )
}

function Month({ now, month }) {
  const then = new Date(now);
  then.setMonth(month);

  const past = now.getMonth() > then.getMonth();
  const present = now.getMonth() === then.getMonth();
  const future = now.getMonth() < month;

  const name = then.toLocaleString('default', { month: 'short' });

  return <div className="month">
    {past && <strike>{name}</strike>}
    {present && <em>{name}</em>}
    {future && <span>{name}</span>}
  </div>
}
export default App;
