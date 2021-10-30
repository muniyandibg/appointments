import { useState } from "react"
import { useSelector } from "react-redux"
import "./time.css"
function Time() {
  const time = useSelector((state) => state.calender.time)
  return (
    <div className="timeContainer">
      <div className="timeHeadline">
        <span className="clockIcon">
          <i class="fa fa-clock-o"></i>
        </span>
        <span className="calenderIcon">
          <i class="fa fa-calendar"></i>
        </span>
      </div>
      {time.map((item) => {
        return (
          <div key={item} className="time">
            <span className="timeText">{item}</span>
          </div>
        )
      })}
    </div>
  )
}
export default Time
