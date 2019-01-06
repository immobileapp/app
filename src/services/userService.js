import AsyncStorageHelper from '../helpers/asyncStorageHelper/asyncStorageHelper'
import httpHelper from '../helpers/httpHelper'

const watchCurrentUser = callback => (
  AsyncStorageHelper.subscribe('user.onchange', currentUser => {
    callback(currentUser)
  })
)

const newUser = (document) => {
  saveUser({ document })
}

const saveUser = user => {
  AsyncStorageHelper.save('user', user)
}

const checkForDocument = async document => {
  return await httpHelper.get(`/utils/documents/exists?document=${document}`)
}

export default {
  watchCurrentUser,
  saveUser,
  newUser,
  checkForDocument
}
