import React from 'react'
import { View, Text, FlatList } from 'react-native'

import ParkingService from '../../services/parkingService'
import HistoryItem from './components/historyItem'

export default class History extends React.Component {
  state = {
    history: []
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
      this.state.history.length > 0
        ? <FlatList
            data={this.state.history}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({item, index}) => (
              <HistoryItem
                {...item}
                active={index == 0}
                last={index == this.state.history.length - 1}
                />
            )}
          />
        : <View><Text>Vazio</Text></View>
    )
  }
}
