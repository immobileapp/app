import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Welcome from './components/welcome'
import PersonDocument from './components/personDocument'
import LicencePlate from './components/licencePlate'

export default class LoginNavigation extends React.Component {
  getTabs() {
    let baseNavigation = {
      navigationOptions: {
        header: null
      },
    }

    let stackNavigator = createStackNavigator({
      Welcome: {
        screen: Welcome,
        ...baseNavigation
      },
      PersonDocument: {
        screen: PersonDocument,
        ...baseNavigation
      },
      LicencePlate: {
        screen: LicencePlate,
        ...baseNavigation
      }
    },
    {
      initialRouteName: 'Welcome'
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
