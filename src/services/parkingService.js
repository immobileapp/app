import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'
import TimerService from './timerService'

const MAX_HOURS = 2

const park = () => (
	AsyncStorageHelper.save('parking', { stoppedAt: + new Date() })
)

const leave = () => (
	getCurrentParking().then(current => (
		AsyncStorageHelper.update('parking', { id: current.id }, {
			leftAt: + new Date()
		})
	))
)

const getCurrentParking = () => (
	AsyncStorageHelper.find('parking')
		.then(parkingHistory => filterCurrentFromHistory(parkingHistory))
)

const filterCurrentFromHistory = parkingHistory => (
  parkingHistory.filter(parking => parking.leftAt === undefined)[0]
)

const watchAllParkingHistory = callback => (
  AsyncStorageHelper.subscribe('parking.onchange', list => {
		callback(list.sort(parking => parking.leftAt).reverse())
	})
)

const watchCurrentParking = callback => (
	AsyncStorageHelper.subscribe('parking.onchange', parkingHistory => {
		let current = filterCurrentFromHistory(parkingHistory)
		callback(current != null)

		current
			? TimerService.start((+ new Date()) - current.stoppedAt)
			: TimerService.stop()
	})
)

export default { park, leave, watchCurrentParking, watchAllParkingHistory }
