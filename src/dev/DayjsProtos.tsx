import dayjs from "dayjs";

//Date
export const CurrentDate = () => {
  dayjs().format("YYYY-M-D")
}
export const FirstDayOfYear = () => {
  dayjs().startOf('year').format("YYYY-M-D")
}
export const LastDayOfYear = () => {
  dayjs().endOf('year').format("YYYY-M-D")
}
export const FirstDayOfWeek = () => {
  dayjs().startOf('week').format("YYYY-M-D")
}
export const LastDayOfWeek = () => {
  dayjs().endOf('week').format("YYYY-M-D")
}
export const FirstDayOfMonth = () => {
  dayjs().startOf('month').format("YYYY-M-D")
}
export const LastDayOfMonth = () => {
  dayjs().endOf('month').format("YYYY-M-D")
}

//Time
export const CurrentTime = () => {
  dayjs().format("HH:mm:ss")
}
export const StartCurrentMinute = () => {
  dayjs().startOf('minute').format("HH:mm:ss")
}
export const EndCurrentMinute = () => {
  dayjs().endOf('minute').format("HH:mm:ss")
}
export const StartCurrentHour = () => {
  dayjs().startOf('hour').format("HH:mm:ss")
}
export const EndCurrentHour = () => {
  dayjs().endOf('hour').format("HH:mm:ss")
}

//Date-Time
export const CurrentDateTime = () => {
  dayjs().format("YYYY-M-D HH:mm:ss")
};
export const StartOfYesterday = () => {
  dayjs().subtract(1, 'day').startOf('day').format("YYYY-M-D HH:mm:ss")
}
export const StartOfTomorrow = () => {
  dayjs().add(1, 'day').startOf('day').format("YYYY-M-D HH:mm:ss")
}