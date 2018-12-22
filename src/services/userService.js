import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'

const watchCurrentUser = callback => (
    AsyncStorageHelper.subscribe('user.onchange', currentUser => callback(currentUser))
)

export default { watchCurrentUser }