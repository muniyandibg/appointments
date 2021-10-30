import "./appointment.css"
import { Draggable } from "react-drag-and-drop"
function Appointment(props) {
  console.log(props.details)
  const getHeight = () => {
    let from = parseInt(props.details.fromTime)
    let to = parseInt(props.details.toTime)
    let height = (to - from) * 120 + "px"
    return height
  }
  return (
    <Draggable type="appointment" data={props.data}>
      <div className="appointmentContainer" style={{ height: getHeight(), borderTopColor: props.details.importance == "Low" ? "green" : props.details.importance == "High" ? "red" : "blue" }}>
        <div className="appointmentTimeDisplay">
          {props.details.fromTime} - {props.details.toTime}
        </div>
        <div className="appointmentTitleDisplay">{props.details.appointmentTitle}</div>
        <div className="appointmentDescriptionDisplay">{props.details.appointmentDescription}</div>
      </div>
    </Draggable>
  )
}
export default Appointment
