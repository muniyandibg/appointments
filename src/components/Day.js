import { useState } from "react"
import Appointment from "./Appointment"
import { Droppable } from "react-drag-and-drop"
import "./day.css"
import { useSelector, useDispatch } from "react-redux"
import { modifyAppointmentAction } from "../actions/appointmentActions"
function Day(props) {
  const dispatch = useDispatch()
  const time = useSelector((state) => state.calender.time)
  const appointments = useSelector((state) => state.appointment.appointments)
  console.log(appointments)
  const displayDate = () => {
    let d = new Date(props.day)

    return d.toString().split(" ")[2] + " " + d.toString().split(" ")[0]
  }
  const handleDrop = (index, newTime, newDate) => {
    let data = {
      index,
      newTime,
      newDate,
    }
    console.log(data)
    dispatch(modifyAppointmentAction(data))
  }
  return (
    <div key={appointments.length} className="dayContainer">
      <div className="dayHeadline">{displayDate()}</div>
      {time.map((everyTime, index) => {
        return (
          <Droppable key={index} types={["appointment"]} onDrop={(data) => handleDrop(data, everyTime, props.day)}>
            <div key={index} className="hour">
              {appointments.map((everyAppointment, i) => {
                if (props.day == everyAppointment.appointmentDate && everyTime == everyAppointment.fromTime) return <Appointment key={i} data={i} details={everyAppointment} />
              })}
            </div>
          </Droppable>
        )
      })}
    </div>
  )
}
export default Day
// onDrop={() => props.setAppointment({ date: props.day, from: item, to: "4.00", description: "test appointment" })}
