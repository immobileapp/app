import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'

import AppNavigation from './screens/appNavigation'
import LoginNavigation from './screens/login/loginNavigation'
import userService from './services/userService'

export default class Navigation extends React.Component {

	state = {
		user: null,
		loading: true
	}

	componentWillMount() {
		userService.watchCurrentUser(user => {
			this.setState({ user, loading: false })
		})
	}

	getNavigator() {
		const { user } = this.state]
		return createMaterialTopTabNavigator({
			'Login': { screen: LoginNavigation },
			'App': { screen: AppNavigation }
		}, {
			swipeEnabled: false,
			initialRouteName: user ? 'App' : 'Login',
			tabBarOptions: {
				style: {
					display: 'none'
				}
			}
		})
	}

	render() {
		if (this.state.loading) return <View />
		const Navigator = this.getNavigator()
		return <Navigator />
	}
}
