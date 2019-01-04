import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import genericStyle from '../genericStyle'

import Home from './home/home'
import History from './history/history'

export default createAppContainer(createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    },
  },
  History: {
    screen: History,
    navigationOptions: {
      title: 'Histórico'
    }
  }
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: { ...genericStyle.header, ...genericStyle.statusBarCompensation },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  /* The header config from HomeScreen is now here */
}))
