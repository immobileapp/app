import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'

const watchCurrentUser = callback => (
  AsyncStorageHelper.subscribe('user.onchange', currentUser => {
    callback(currentUser)
  })
)

const newUser = (phoneNumber) => {
  saveUser({ phoneNumber })
}

const saveUser = user => {
  AsyncStorageHelper.save('user', user)
}

export default { watchCurrentUser, saveUser, newUser }
