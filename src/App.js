import React, { useState, useEffect } from 'react'
import './App.css'

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function App({date = new Date()}) {
  const [now, setNow] = useState(date)

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="App">
      <Now now={now} />
      <Clip now={now}>
        <Now now={now} />
      </Clip>
    </div>
  )
}

function Now({ now }) {
  return (
    <div className="Now">
      <div className="Calendar">
        {months.map((month) => <Month key={month} now={now} month={month} />)}
      </div>
    </div>
  )
}

function Month({ now, month }) {
  const then = new Date(now)
  then.setMonth(month)

  const past = now.getMonth() > then.getMonth()
  const present = now.getMonth() === then.getMonth()
  const future = now.getMonth() < month

  const name = then.toLocaleString('default', { month: 'long' })

  return <div className="month">
    {past && <strike>{name}</strike>}
    {present && <em>{now.toLocaleString('default', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })}</em>}
    {future && <span>{name}</span>}
  </div>
}

function Clip({ now, children }) {
  const janOneThisYear = new Date(now)
  janOneThisYear.setMonth(0)
  janOneThisYear.setDate(1)
  janOneThisYear.setHours(0)
  janOneThisYear.setMinutes(0)
  janOneThisYear.setSeconds(0)
  const janOneNextYear = new Date(janOneThisYear)
  janOneNextYear.setYear(janOneNextYear.getFullYear() + 1)
  const height = (now - janOneThisYear) / (janOneNextYear - janOneThisYear)
  return (
    <div className="BackdropContainer" style={{ height: `${(height * 100).toFixed(2)}vh` }}>
      {children}
    </div>
  )
}

export default App
