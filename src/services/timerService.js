import BackgroundTimer from 'react-native-background-timer'

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
	BackgroundTimer.clearTimeout(timeout)
	timeout = BackgroundTimer.setTimeout(() => {
		elapsed += 1000
		running && notifySubscribers()

		running && run()
	}, 1000)
}

const stop = () => {
	running = false
	elapsed = 0

	BackgroundTimer.clearTimeout(timeout)
	notifySubscribers()
}

const onTimerChange = callback => {
	subscribers.push(callback)

	running && callback(getTimerFromMilliseconds(elapsed))
	return () => unsubscribe(subscribers.length - 1)
}

const unsubscribe = index => {
	subscribers.splice(index, 1)
}

const notifySubscribers = () => {
	subscribers.forEach(callback => 
		callback(getTimerFromMilliseconds(elapsed), running)
	)
}

const getTimerFromMilliseconds = millisecons => {
	let date = new Date(null)
	date.setMilliseconds(millisecons)
	
	return date.toISOString().substr(11, 8)
}

export default { start, stop, onTimerChange }