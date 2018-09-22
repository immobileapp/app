import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'

import Home from './screens/home/home'
import Parked from './screens/parked/parked'

export default class Navigation extends React.Component {

	getNavigator() {
		return createMaterialTopTabNavigator({
			'Home': { screen: Home },
			'Parked': { screen: Parked }
		}, {
			swipeEnabled: true,
			tabBarOptions: {
				style: {
					display: 'none'
				}
			}
		})
	}

	render() {
		const Navigator = this.getNavigator()
		return <Navigator />
	}
}