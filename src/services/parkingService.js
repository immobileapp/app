import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'

const park = () => (
	AsyncStorageHelper.save('parking', {
		stoppedAt: + new Date()
	})
)

const leave = id => (
	AsyncStorageHelper.update('parking', { id }, {
		leftAt: + new Date()
	})
)

const watchCurrentParking = callback => (
	AsyncStorageHelper.subscribe('parking.onchange', parkingHistory => {
		callback(parkingHistory.filter(parking => parking.leftAt === undefined)[0])
	})
)

export default { park, leave, watchCurrentParking }