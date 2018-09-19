import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'

import Home from './screens/home/home'

export default class Navigation extends React.Component {

	getNavigator() {
		return createMaterialTopTabNavigator({
			'Home': { screen: Home }
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