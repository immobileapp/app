import React from 'react'
import { View } from 'react-native'
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

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

	getTabs() {
		const { user } = this.state
		return createAppContainer(createStackNavigator({
			Login: {
				screen: LoginNavigation,
				navigationOptions: {
					header: null
				},
			},
			App: {
				screen: AppNavigation,
				navigationOptions: {
					header: null
				}
			}
		},
		{
			initialRouteName: user ? 'App' : 'Login',
		}))
	}

	getNavigator() {
		return createAppContainer(createMaterialTopTabNavigator({
				'Screens': {
					screen: this.getTabs()
				},
				}, {
					swipeEnabled: false,
					tabBarOptions: {
						style: {
							display: 'none'
						}
					}
				})
			)
	}

	render() {
		if (this.state.loading) return <View />
		const Navigator = this.getNavigator()
		return <Navigator />
	}
}
