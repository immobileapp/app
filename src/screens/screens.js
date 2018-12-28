import React from 'react'

import Home from './home/home'
import History from './history/history'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import colors from '../../assets/values/colors'

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
      headerStyle: {
        backgroundColor: colors.darkRed,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
    /* The header config from HomeScreen is now here */
  }));
