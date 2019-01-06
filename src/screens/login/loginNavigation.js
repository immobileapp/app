import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Welcome from './components/welcome'
import PersonDocument from './components/personDocument'
import LicencePlate from './components/licencePlate'
import ConfimationCode from './components/confirmationCode'

export default class LoginNavigation extends React.Component {
  getTabs() {
    let stackNavigator = createStackNavigator({
      Welcome: {
        screen: Welcome
      },
      PersonDocument: {
        screen: PersonDocument
      },
      LicencePlate: {
        screen: LicencePlate
      },
      ConfimationCode: {
        screen: ConfimationCode
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
