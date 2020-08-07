import React, { useState, useEffect } from 'react'
import './App.css'

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function App({date = new Date()}) {
  const [now, setNow] = useState(date)

  // position of last pointer down
  // eg. `0` is top of screen, and `1` is bottom
  const [pointerY, setPointerY] = useState(null)

  const time = pointerY !== null ? translatePointerPositionToDate(now, pointerY) : now

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  function onPointerDown(event) {
    event.currentTarget.setPointerCapture(event.pointerId)
    setPointerY(calculatePointerYFromEvent(event))
  }
  function onPointerMove(event) {
    setPointerY(calculatePointerYFromEvent(event))
  }
  function onPointerUp() {
    setPointerY(null)
  }

  return (
    <div
      className="App"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <Clip now={time} isNegative={true}>
        <Now now={time} />
      </Clip>
      <Clip now={time} isNegative={false}>
        <Now now={time} />
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
  const then = new Date(now.getFullYear(), month, 1, 0, 0, 0, 0)

  const past = now.getMonth() > then.getMonth()
  const present = now.getMonth() === then.getMonth()
  const future = now.getMonth() < month

  const name = then.toLocaleString('default', { month: 'long' })

  return <div className="Month">
    {past && <strike>{name}</strike>}
    {present && <em>{now.toLocaleString('default', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })}</em>}
    {future && <span>{name}</span>}
  </div>
}

function Clip({ now, isNegative, children }) {
  const janOneThisYear = new Date(now)
  janOneThisYear.setMonth(0)
  janOneThisYear.setDate(1)
  janOneThisYear.setHours(0)
  janOneThisYear.setMinutes(0)
  janOneThisYear.setSeconds(0)
  const janOneNextYear = new Date(janOneThisYear)
  janOneNextYear.setYear(janOneNextYear.getFullYear() + 1)
  const height = (now - janOneThisYear) / (janOneNextYear - janOneThisYear)
  const formatted = `${(height * 100).toFixed(2)}`
  const style = isNegative ? { color: 'white', background: 'black', height: `${formatted}vh` } : { color: 'black', background: 'white', marginTop: `-${formatted}vh` }
  return (
    <div className="BackdropContainer">
      <div style={style}>
        {children}
      </div>
    </div>
  )
}

function calculatePointerYFromEvent(event) {
  return (event.clientY - event.currentTarget.clientTop) / event.currentTarget.clientHeight
}

function translatePointerPositionToDate(date, pointerY) {
  const [start, end] = getYearBookendsFromDate(date).map((date) => date.getTime())
  const result = new Date(linearInterpolate(start, end, pointerY))
  return result
}

function getYearBookendsFromDate(date) {
  const start = new Date(date.getFullYear(), 0, 0, 0, 0, 0)
  const end = new Date(date.getFullYear() + 1, 0, 0, 0, 0, 0)
  return [start, end]
}

function linearInterpolate(start, end, point) {
  return start + (end - start) * point
}

export default App
