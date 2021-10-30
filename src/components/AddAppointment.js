import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./addAppointment.css"
import { addAppointmentAction } from "../actions/appointmentActions"

function AddAppointment(props) {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("")
  const time = useSelector((state) => state.calender.time)
  const [appointmentDate, setAppointmentDate] = useState("")
  const [fromTime, setFromTime] = useState("8.00")
  const [toTime, setToTime] = useState("9.00")
  const [appointmentTitle, setAppointmentTitle] = useState("")
  const [appointmentDescription, setAppointmentDescription] = useState("")
  const [importance, setImportance] = useState("normal")

  const saveAppointment = () => {
    if (!appointmentDate) {
      setMessage("Please select a date!")
      return
    }
    if (!appointmentTitle) {
      setMessage("Please enter title!")
      return
    }
    if (!appointmentDescription) {
      setMessage("Please enter description!")
      return
    }
    if (parseInt(toTime) < parseInt(fromTime)) {
      setMessage("Appointment end time cannot be lesser than start time!")
      return
    }
    let appointmentDetails = {
      appointmentDate,
      fromTime,
      toTime,
      appointmentTitle,
      appointmentDescription,
      importance,
    }
    dispatch(addAppointmentAction(appointmentDetails))
    props.setActiveScreen("header")
  }

  return (
    <div className="addAppointmentContainer">
      <div className="addAppointmentWrapper">
        <div className="addAppointmentHeader">NEW APPOINTMENT</div>
        <ul className="appointmentDateTime">
          <li className="timeDateSelect">
            <label htmlFor="appointmentDate">Date</label>
            <input value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} type="date" className="appointmentDateInput" />
          </li>
          <li className="timeDateSelect">
            <label htmlFor="appointmentDate">From</label>
            <select onChange={(e) => setFromTime(e.target.value)} value={fromTime}>
              {time.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </li>
          <li className="timeDateSelect">
            <label htmlFor="appointmentDate">To</label>
            <select onChange={(e) => setToTime(e.target.value)} value={toTime}>
              {time.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </li>
        </ul>
        <div className="appointmentTitleContainer">
          <label htmlFor="appointmentDate">Title</label>
          <input value={appointmentTitle} onChange={(e) => setAppointmentTitle(e.target.value)} type="text" placeholder="Title" />
        </div>
        <div className="appointmentDescriptionContainer">
          <label htmlFor="appointmentDate">Description</label>
          <input value={appointmentDescription} onChange={(e) => setAppointmentDescription(e.target.value)} type="text" placeholder="Description" />
        </div>
        <div className="appointmentImportance">
          <label htmlFor="appointmentDate">Importance</label>
          <select onChange={(e) => setImportance(e.target.value)} value={importance}>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>
        {message && <div className="message">{message}</div>}
        <div className="addAppointmentFooter">
          <div onClick={() => saveAppointment()} className="saveButton">
            SAVE
          </div>
          <div onClick={() => props.setActiveScreen("header")} className="cancelButton">
            CANCEL
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAppointment
