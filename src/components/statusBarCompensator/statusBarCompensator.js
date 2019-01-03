import React from 'react'
import { View } from 'react-native'
import style from './statusBarCompensatorStyle'

const StatusBarCompensator = props => (
	<View style={{ 
		...style.statusBarCompensator, 
		backgroundColor: props.backgroundColor
	}}/>
)

export default StatusBarCompensator