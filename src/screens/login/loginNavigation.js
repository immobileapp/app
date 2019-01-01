import React from 'react'
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import Welcome from './components/welcome'
import PersonDocument from './components/personDocument'
import LicencePlate from './components/licencePlate'

export default class LoginNavigation extends React.Component {

	getTabs() {
		return createAppContainer(createStackNavigator({
			Welcome: {
				screen: Welcome,
				navigationOptions: {
					header: null
				},
			},
			PersonDocument: {
				screen: PersonDocument,
				navigationOptions: {
					header: null
				}
			},
			LicencePlate: {
				screen: LicencePlate,
				navigationOptions: {
					header: null
				}
			}
		},
		{
			initialRouteName: 'Welcome'
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
		const Navigator = this.getNavigator()
		return <Navigator />
	}
}
