// import moment from 'moment'

import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'
import FormatHelper from '../helpers/formatHelper'

let HOUR_PRICE = 2.12
let CURRENT_MONTH = new Date().getMonth()
let CURRENT_YEAR = new Date().getYear()

const watchAndSummarizeParking = callback => (
	AsyncStorageHelper.subscribe('parking.onchange', parkingHistory => {
    const totalTime = calculateTotalTime(parkingHistory || [])
    const totalMoney = calculateTotalPrice(totalTime)

    callback({
      time: FormatHelper.formatTime(totalTime),
      money: FormatHelper.formatMoney(totalMoney)
    })
	})
)

const calculateTotalTime = parkingHistory => (
  parkingHistory
    .filter(filterByCurrentMonth)
    .filter(parking => parking.leftAt != null)
    .reduce((acc, cur) => acc + (cur.leftAt - cur.stoppedAt), 0)
)

const filterByCurrentMonth = parking => {
  let date = new Date(parking.stoppedAt)

  return date.getMonth() == CURRENT_MONTH && date.getYear() == CURRENT_YEAR
}

const calculateTotalPrice = milliseconds => (
  ((milliseconds / 3600000) * HOUR_PRICE).toFixed(2)
)

export default { watchAndSummarizeParking }
