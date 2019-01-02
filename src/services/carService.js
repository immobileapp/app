import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'

const addCar = car => {
  car.model = 'VW Golf'
  AsyncStorageHelper.save('vehicles', car)
}

export default { addCar }
