const formatMoney = money => {
  let value = money.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return `R$ ${ value }`
}

const formatTime = milliseconds => {
  let seconds = parseInt(milliseconds / 1000),
      minutes = parseInt(seconds / 60),
      hours = parseInt(minutes / 60)

  if (hours >= 1)   return `${ hours }h`
  if (minutes >= 1) return `${ minutes }m`

  return `${ seconds }s`
}

export default { formatMoney, formatTime }
