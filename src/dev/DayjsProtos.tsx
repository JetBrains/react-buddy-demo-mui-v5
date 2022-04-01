import dayjs from "dayjs";

//Date
export const CurrentDate = (
  /** @caption Date format **/format: "YYYY" | "YYYY-M" | "YYYY-M-D" | "D-M-YYYY"
) => {
  dayjs().format(format)
}
export const FirstDayOfYear = (
  /** @caption Date format **/format: "YYYY" | "YYYY-M" | "YYYY-M-D" | "D-M-YYYY"
) => {
  dayjs().startOf('year').format(format)
}
export const LastDayOfYear = (
  /** @caption Date format **/format: "YYYY" | "YYYY-M" | "YYYY-M-D" | "D-M-YYYY"
) => {
  dayjs().endOf('year').format(format)
}
export const FirstDayOfWeek = (
  /** @caption Date format **/format: "YYYY" | "YYYY-M" | "YYYY-M-D" | "D-M-YYYY"
) => {
  dayjs().startOf('week').format(format)
}
export const LastDayOfWeek = (
  /** @caption Date format **/format: "YYYY" | "YYYY-M" | "YYYY-M-D" | "D-M-YYYY"
) => {
  dayjs().endOf('week').format(format)
}
export const FirstDayOfMonth = (
  /** @caption Date format **/format: "YYYY" | "YYYY-M" | "YYYY-M-D" | "D-M-YYYY"
) => {
  dayjs().startOf('month').format(format)
}
export const LastDayOfMonth = (
  /** @caption Date format **/format: "YYYY" | "YYYY-M" | "YYYY-M-D" | "D-M-YYYY"
) => {
  dayjs().endOf('month').format(format)
}

//Time
export const CurrentTime = (
  /** @caption Time format **/format: "HH:mm" | "HH:mm:ss" | "HH:mm:SSS" | "HH:mm:ss a"
) => {
  dayjs().format(format)
}
export const StartCurrentMinute = (
  /** @caption Time format **/format: "HH:mm" | "HH:mm:ss" | "HH:mm:SSS" | "HH:mm:ss a"
) => {
  dayjs().startOf('minute').format(format)
}
export const EndCurrentMinute = (
  /** @caption Time format **/format: "HH:mm" | "HH:mm:ss" | "HH:mm:SSS" | "HH:mm:ss a"
) => {
  dayjs().endOf('minute').format(format)
}
export const StartCurrentHour = (
  /** @caption Time format **/format: "HH:mm" | "HH:mm:ss" | "HH:mm:SSS" | "HH:mm:ss a"
) => {
  dayjs().startOf('hour').format(format)
}
export const EndCurrentHour = (
  /** @caption Time format **/format: "HH:mm" | "HH:mm:ss" | "HH:mm:SSS" | "HH:mm:ss a"
) => {
  dayjs().endOf('hour').format(format)
}

//Date-Time
export const CurrentDateTime = (
  /** @caption Date and Time format **/format: "YYYY-M-D HH:mm:ss" | "YYYY-M-D HH:mm" | "D-M-YYYY HH:mm:ss" | "D-M-YYYY HH:mm"
) => {
  dayjs().format(format)
};
export const StartOfYesterday = (
  /** @caption Date and Time format **/format: "YYYY-M-D HH:mm:ss" | "YYYY-M-D HH:mm" | "D-M-YYYY HH:mm:ss" | "D-M-YYYY HH:mm"
) => {
  dayjs().subtract(1, 'day').startOf('day').format(format)
}
export const StartOfTomorrow = (
  /** @caption Date and Time format **/format: "YYYY-M-D HH:mm:ss" | "YYYY-M-D HH:mm" | "D-M-YYYY HH:mm:ss" | "D-M-YYYY HH:mm"
) => {
  dayjs().add(1, 'day').startOf('day').format(format)
}