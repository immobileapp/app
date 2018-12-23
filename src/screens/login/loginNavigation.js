import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'

import Welcome from './components/welcome'

export default class LoginNavigation extends React.Component {

	getNavigator() {
		return createMaterialTopTabNavigator({
			'Welcome': { screen: Welcome }
		}, {
			swipeEnabled: false,
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