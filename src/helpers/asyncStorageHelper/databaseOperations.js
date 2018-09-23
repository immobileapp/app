import BasicOperations from './basicOperations'

const find = (key, query) => (
	BasicOperations.get(key).then(result => result || [])
)

const findById = (key, id) => (
	BasicOperations.get(key).then(result => (
		result.filter(item => item.id === id)[0]
	))
)

const save = (key, value) => (
	BasicOperations.updateData(key, prevValue => 
		[...prevValue, { ...value, ...{ id: BasicOperations.generateUuid() }}]
	)
)

const update = (key, query, value) => (
	BasicOperations.updateData(key, prevValue => (
		prevValue.map(item => (
			item[formatQuery(query).key] === formatQuery(query).value 
				? { ...item, ...value } 
				: item
		))
	))
)

const remove = (key, query) => (
	BasicOperations.updateData(key, prevValue => (
		prevValue.filter(item => (
			item[formatQuery(query).key] !== formatQuery(query).value
		))
	))
)

const formatQuery = query => BasicOperations.formatQuery(query)

export default { find, findById, save, update, remove }