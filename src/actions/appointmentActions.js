export const addAppointmentAction = (appointment) => {
  return { type: "ADD_APPOINTMENT", value: appointment }
}
export const modifyAppointmentAction = (data) => {
  return { type: "MODIFY_APPOINTMENT", value: data }
}
