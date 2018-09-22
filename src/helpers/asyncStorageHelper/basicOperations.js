import { AsyncStorage } from 'react-native'
import { storagePrefix } from '../../../app.json'

const getFullKey = key => `${ storagePrefix }:${ key }`

const get = key => (
	AsyncStorage.getItem(getFullKey(key))
		.then(item => item ? JSON.parse(item) : null)
)

const set = (key, value) => (
	AsyncStorage.setItem(getFullKey(key), JSON.stringify(value))
		.then(() => JSON.stringify(value))
)

const updateData = (key, callback) => (
	get(key)
		.then(prevValue => callback(prevValue || []))
		.then(newValue => set(key, newValue))
)

const formatQuery = query => ({
	key: Object.keys(query)[0],
	value: query[Object.keys(query)[0]]
})

const generateUuid = () => (
	'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	})
)

export default { get, set, updateData, formatQuery, generateUuid }