import { Platform, InteractionManager } from 'react-native'
import PushNotification from 'react-native-push-notification'
import TimerService from './timerService'

const initialize = () => (
	TimerService.onTimerChange((timer, running) => {
		running
			? sendNotification(timer)
			: InteractionManager.runAfterInteractions(() => dismiss())
	})
)

const sendNotification = message => {
	PushNotification.localNotification(
		Platform.OS === 'android'
			? getAndroidNotification(message)
			: getIOSNotification(message)
	)
}

const getAndroidNotification = message => ({
	...getNotification(message), ...{
		id: '0',
		vibrate: false
	}
})

const getIOSNotification = message => ({
	...getNotification(message), ...{
		userInfo: {
			id: '0'
		}
	}
})

const getNotification = message => ({
	title: 'Você está estacionado a',
	message,
	playSound: false
})

const dismiss = () => {
	PushNotification.cancelAllLocalNotifications()
}

export default { initialize }
