import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'
import FormatHelper from '../helpers/formatHelper'

let HOUR_PRICE = 2.12

const watchAndSummarizeParking = callback => (
	AsyncStorageHelper.subscribe('parking.onchange', parkingHistory => {
    const totalTime = parkingHistory
      .filter(parking => parking.leftAt != null)
      .reduce((acc, cur) => acc + (cur.leftAt - cur.stoppedAt), 0)

    const totalMoney = calculateTotalPrice(totalTime)

    callback({
      time: FormatHelper.formatTime(totalTime),
      money: FormatHelper.formatMoney(totalMoney)
    })
	})
)

const calculateTotalPrice = milliseconds => (
  ((milliseconds / 3600000) * HOUR_PRICE).toFixed(2)
)

export default { watchAndSummarizeParking }
