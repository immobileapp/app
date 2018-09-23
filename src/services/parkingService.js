import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'

const park = () => (
	AsyncStorageHelper.save('parking', {
		stoppedAt: + new Date()
	})
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

const watchCurrentParking = callback => (
	AsyncStorageHelper.subscribe('parking.onchange', parkingHistory => {
		let current = filterCurrentFromHistory(parkingHistory)
		callback(current != null)
	})
)

export default { park, leave, watchCurrentParking }