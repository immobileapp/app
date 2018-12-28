import React from 'react'
import { View, Text, FlatList } from 'react-native'

import genericStyle from '../../genericStyle'
import historyStyle from './historyStyle'

export default class HistoryList extends React.PureComponent {
  _keyExtractor = (item, _i) => item.id;

  _renderItem = ({item}) => (
    <Text style={historyStyle.item}>{item.leftAt}</Text>
  );

  render() {
    return (
      <View style={genericStyle.whiteScreen}>
        <FlatList
          data={this.props.list}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
