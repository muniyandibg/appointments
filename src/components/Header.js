import "./header.css"
import { useDispatch, useSelector } from "react-redux"
import { nextWeekAction, prevWeekAction } from "../actions/calenderActions"
import { useState } from "react"
import AddAppointment from "./AddAppointment"
function Header() {
  const [activeScreen, setActiveScreen] = useState("header")
  const dispatch = useDispatch()
  const week = useSelector((state) => state.calender.week)
  const weekChange = (selection) => {
    if (selection == "prev") dispatch(prevWeekAction())
    else if (selection == "next") dispatch(nextWeekAction())
  }
  const displayDate = () => {
    let firstDate = new Date(week[0])
    let lastDate = new Date(week[6])

    return firstDate.toString().split(" ")[1] + " " + firstDate.toString().split(" ")[2] + " - " + lastDate.toString().split(" ")[1] + " " + lastDate.toString().split(" ")[2] + ", " + lastDate.toString().split(" ")[3]
  }

  return (
    <div className="headerContainer">
      <div className="headerTopBar">
        <span className="logo">
          <i class="fa fa-handshake-o"></i> MY OPPOINTMENTS
        </span>
        <div>
          <span onClick={() => weekChange("prev")} className="navigation">
            <i class="fa fa-chevron-left"></i>
          </span>
          <span className="weekRange">{displayDate()}</span>
          <span onClick={() => weekChange("next")} className="navigation">
            <i class="fa fa-chevron-right"></i>
          </span>
        </div>
        <span onClick={() => setActiveScreen("addAppointment")} className="addNewButton">
          +
        </span>
      </div>
      {activeScreen == "addAppointment" && <AddAppointment setActiveScreen={setActiveScreen} />}
    </div>
  )
}

export default Header
