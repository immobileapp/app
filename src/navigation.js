import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'

import Home from './screens/home/home'
import Parked from './screens/parked/parked'
import History from './screens/history/history'

export default class Navigation extends React.Component {

	getNavigator() {
		return createMaterialTopTabNavigator({
      'History': { screen: History },
      'Home': { screen: Home },
      'Parked': { screen: Parked },
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
