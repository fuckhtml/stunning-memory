const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : value;
}

export const formatTime = (date) => {
  return `${castTimeFormat(date.getHours())}:${castTimeFormat(date.getMinutes())}`;
}