const initialState = {
  appointments: [],
}
export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      let newAppointment = action.value
      let appointmentsList = [...state.appointments]

      appointmentsList.push(newAppointment)
      console.log(appointmentsList)
      return { ...state, appointments: appointmentsList }
    case "MODIFY_APPOINTMENT":
      let appointmentsListToBeModified = [...state.appointments]
      let id = parseInt(action.value.index.appointment)
      let timeDiff = parseFloat(appointmentsListToBeModified[id].toTime) - parseFloat(appointmentsListToBeModified[id].fromTime)

      appointmentsListToBeModified[id].appointmentDate = action.value.newDate
      appointmentsListToBeModified[id].fromTime = action.value.newTime
      let newToTime = parseFloat(appointmentsListToBeModified[id].fromTime) + timeDiff
      appointmentsListToBeModified[id].toTime = newToTime.toString() + ".00"
      return { ...state, appointments: appointmentsListToBeModified }

    case "DELETE_APPOINTMENT":
      return
    default:
      return state
  }
}
