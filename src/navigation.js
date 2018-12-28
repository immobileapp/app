import React from 'react'
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import Parked from './screens/parked/parked'
import Screens from './screens/screens'

import colors from '../assets/values/colors'

export default class Navigation extends React.Component {

  getNavigator() {
    return createAppContainer(createMaterialTopTabNavigator({
    'Screens': {
        screen: Screens
      },
      'Parked': { screen: Parked },
      }, {
        swipeEnabled: true,
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
