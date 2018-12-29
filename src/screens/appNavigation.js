import React from 'react'
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import Parked from './parked/parked'
import Screens from './screens'

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