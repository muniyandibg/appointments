const getWeek = (givenDate) => {
  let curr = givenDate
  let week = []

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
  }
  return week
}

const initialState = {
  week: getWeek(new Date()),
  time: ["8.00", "9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00"],
}
export const calenderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_WEEK":
      let lastDate = new Date(state.week[6])
      return { ...state, week: getWeek(lastDate) }
      return
    case "PREV_WEEK":
      let prevDate = new Date(state.week[0])
      prevDate.setDate(prevDate.getDate() - 2)

      return { ...state, week: getWeek(prevDate) }
      return
    default:
      return state
  }
}
