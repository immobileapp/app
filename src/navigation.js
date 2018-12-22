import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'

import AppNavigation from './screens/appNavigation'
import Login from './screens/login/login'
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
		const { user } = this.state
		return createMaterialTopTabNavigator({
			'Login': { screen: Login },
			'App': { screen: AppNavigation }
		}, {
			swipeEnabled: false,
			initialRouteName: user ? 'Login' : 'App',
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