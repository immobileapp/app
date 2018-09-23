let running = false,
	elapsed = 0,
	timeout,
	subscribers = []

const start = millisecons => {
	elapsed = millisecons || 0
	running = true
	
	run()
}

const run = () => {
	clearTimeout(timeout)
	timeout = setTimeout(() => {
		elapsed += 1000
		notifySubscribers()

		running && run()
	}, 1000)
}

const stop = () => {
	running = false
	elapsed = 0

	clearTimeout(timeout)
	notifySubscribers()
}

const onTimerChange = callback => {
	subscribers.push(callback)

	callback(getTimerFromMilliseconds(elapsed))
	return () => unsubscribe(subscribers.length - 1)
}

const unsubscribe = index => {
	subscribers.splice(index, 1)
}

const notifySubscribers = () => {
	subscribers.forEach(callback => callback(getTimerFromMilliseconds(elapsed)))
}

const getTimerFromMilliseconds = millisecons => {
	let date = new Date(null)
	date.setMilliseconds(millisecons)
	
	return date.toISOString().substr(11, 8)
}

export default { start, stop, onTimerChange }