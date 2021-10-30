import { combineReducers } from "redux"
import { calenderReducer } from "./calenderReducer"
import { appointmentReducer } from "./appointmentReducer"

export const rootReducer = combineReducers({
  calender: calenderReducer,
  appointment: appointmentReducer,
})
