import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Welcome from './components/welcome'
import PersonPhone from './components/personPhone'
import LicencePlate from './components/licencePlate'

export default class LoginNavigation extends React.Component {
  getTabs() {
    let stackNavigator = createStackNavigator({
      Welcome: {
        screen: Welcome
      },
      PersonPhone: {
        screen: PersonPhone
      },
      LicencePlate: {
        screen: LicencePlate
      }
    },
    {
      initialRouteName: 'Welcome',
      defaultNavigationOptions: {
        header: null
      }
    })

    return createAppContainer(stackNavigator)
  }

  getNavigator() {
    let materialNavigator = createMaterialTopTabNavigator({
      'Screens': {
        screen: this.getTabs()
      },
    },
    {
      swipeEnabled: false,
      tabBarOptions: {
        style: {
          display: 'none'
        }
      }
    })

    return createAppContainer(materialNavigator)
  }

  render() {
    const Navigator = this.getNavigator()
    return <Navigator />
  }
}
