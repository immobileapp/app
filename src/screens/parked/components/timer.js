import React from 'react'
import { Text } from 'react-native'

const Timer = props => (
	<Text style={ props.style }>
		{ formatTimer(props.timer) }
	</Text>
)

const formatTimer = timer => {
	let { hours, minutes, seconds } = timer
	return `${ hours }:${ minutes }:${ seconds }`
}

export default Timer