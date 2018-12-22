import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'

import Home from './home/home'
import Parked from './parked/parked'

export default class AppNavigation extends React.Component {

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