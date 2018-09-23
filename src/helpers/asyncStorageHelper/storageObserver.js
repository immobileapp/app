let subscribers = {
	onsave: {},
	onupdate: {},
	onremove: {},
	onchange: {}
}

const subscribe = (type, callback) => {
	let { key, operation } = getKeyAndOperation(type)
	
	subscribers[operation][key] = subscribers[operation][key] || []
	subscribers[operation][key].push(callback)

	return () => unsubscribe(key, operation, subscribers[operation][key].length - 1)
}

const getKeyAndOperation = type => ({
	key: type.split('.')[0],
	operation: type.split('.')[1]
})

const unsubscribe = (key, operation, index) => {
	subscribers[operation][key].splice(index, 1)
}

const notifySubscribers = (key, operation, data) => {
	if(!subscribers[operation][key]) return
	subscribers[operation][key].map(callback => callback(data))
}

export default { subscribe, notifySubscribers, getKeyAndOperation }