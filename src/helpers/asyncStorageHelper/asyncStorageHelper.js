import DatabaseOperations from './databaseOperations'
import StorageObserver from './storageObserver'

const find = key => {
	return DatabaseOperations.find(key)
}

const findById = (key, id) => {
	return DatabaseOperations.findById(key, query)
}

const save = (key, value) => {
	return DatabaseOperations.save(key, value).then(result => {
		StorageObserver.notifySubscribers(key, 'onsave', result)
		StorageObserver.notifySubscribers(key, 'onchange', result)
		
		return result
	})
}

const update = (key, query, value) => {
	return DatabaseOperations.update(key, query, value).then(result => {
		StorageObserver.notifySubscribers(key, 'onupdate', result)
		StorageObserver.notifySubscribers(key, 'onchange', result)
		
		return result
	})
}

const remove = (key, query) => {
	return DatabaseOperations.remove(key, query).then(result => {
		StorageObserver.notifySubscribers(key, 'onremove', result)
		StorageObserver.notifySubscribers(key, 'onchange', result)
		
		return result
	})
}

const subscribe = (type, callback) => {
	DatabaseOperations.find(StorageObserver.getKeyAndOperation(type).key)
		.then(result => callback(result))

	StorageObserver.subscribe(type, callback)
}

export default { find, findById, save, update, remove, subscribe }