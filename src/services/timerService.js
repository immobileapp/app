import BackgroundTimer from 'react-native-background-timer'
import { Platform } from 'react-native'

let running = false,
	elapsed = 0,
	timeout,
	subscribers = []

const start = millisecons => {
	elapsed = millisecons || 0
	running = true
	
	Platform.OS === 'ios' &&
		BackgroundTimer.start()

	Platform.OS === 'android'
		? runOnAndroid()
		: runOnIOS()
}

const runOnAndroid = () => {
	BackgroundTimer.clearTimeout(timeout)
	timeout = BackgroundTimer.setTimeout(() => {
		elapsed += 1000
		running && notifySubscribers()

		running && runOnAndroid()
	}, 1000)
}

const runOnIOS = () => {
	clearTimeout(timeout)
	timeout = setTimeout(() => {
		elapsed += 1000
		running && notifySubscribers()

		running && runOnAndroid()
	}, 1000)
}

const stop = () => {
	running = false
	elapsed = 0

	Platform.OS === 'android'
		? stopAndroidTimer()
		: stopIOSTimer()
	
	notifySubscribers()
}

const stopAndroidTimer = () => {
	BackgroundTimer.clearTimeout(timeout)
}

const stopIOSTimer = () => {
	clearTimeout(timeout)
	BackgroundTimer.stop()
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