import { AsyncStorage } from 'react-native'

const dbName = 'IMMOBILE'
const getFullKey = key => `${ dbName }:${ key }`

const get = key => (
	AsyncStorage.getItem(getFullKey(key))
		.then(item => item ? JSON.parse(item) : null)
)

const set = (key, value) => (
	AsyncStorage.setItem(getFullKey(key), JSON.stringify(value))
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

const find = (key, query) => (
	get(key).then(found => 
		query
			? found.filter(item => 
				item[formatQuery(query).key] === formatQuery(query).value
			)
			: found
	)
)

const findById = (key, id) => (
	find(key, { id })[0]
)

const save = (key, value) => (
	updateData(key, prevValue => [...prevValue, value])
)

const update = (key, query, value) => (
	updateData(key, prevValue => (
		prevValue.map(item => (
			item[formatQuery(query).key] === formatQuery(query).value 
				? { ...item, ...value } 
				: item
		))
	))
)

const remove = (key, query) => (
	updateData(key, prevValue => (
		prevValue.filter(item => (
			item[formatQuery(query).key] !== formatQuery(query).value
		))
	))
)

export default { find, findById, save, update, remove }