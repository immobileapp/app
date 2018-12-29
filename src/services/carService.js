import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'

const addCar = car => {
    car.model = 'VW Golf'
    AsyncStorageHelper.save('veichles', car)
}

export default { addCar }