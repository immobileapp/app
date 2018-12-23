import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'

import Welcome from './components/welcome'
import PersonDocument from './components/personDocument'

export default class LoginNavigation extends React.Component {

	getNavigator() {
		return createMaterialTopTabNavigator({
			'Welcome': { screen: Welcome },
			'PersonDocument': { screen: PersonDocument }
		}, {
			swipeEnabled: false,
			initialRouteName: 'PersonDocument',
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