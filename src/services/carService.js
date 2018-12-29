import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'

const saveCar = car => {
    car.model = 'VW Golf'
    AsyncStorageHelper.save('veichles', car)
}

export default { saveCar }