import React from 'react'
import { Text } from 'react-native'

const Timer = props => (
	<Text style={ props.style }>
		{ props.time }
	</Text>
)

export default Timer