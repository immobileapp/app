import React from 'react'
import { View, Text } from 'react-native'

import HistoryList from './historyList'
import ParkingService from '../../services/parkingService'

export default class History extends React.Component {

  state = {
    history: { list: [] }
  }

  componentWillMount() {
    this.unsubscribeFromHistory = ParkingService.watchAllParkingHistory(history => {
      this.setState({ history })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromHistory()
  }

  render() {
    return (
      this.state.history.list.length > 0 ?
        <HistoryList { ...this.state.history } { ...this.props } /> :
        <View><Text>lista vazia</Text></View>
    )
  }
}
