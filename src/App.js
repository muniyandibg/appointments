import "./App.css"
import Header from "./components/Header"
import Time from "./components/Time"
import Day from "./components/Day"
import { useState } from "react"
import { useSelector } from "react-redux"

function App() {
  const days = useSelector((state) => state.calender.week)

  return (
    <div>
      <Header />
      <div className="calenderContainer">
        <Time />

        <div className="daysContainer">
          {days.map((item, index) => {
            return <Day key={index} day={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
