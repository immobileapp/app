import React from 'react'
import { View, Text } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import moment from 'moment'
import 'moment-duration-format'

import historyStyle from '../historyStyle'
import colors from '../../../../assets/values/colors'

const HistoryItem = props => (
  <View style={historyStyle.itemWrapper}>
    {!props.last && !props.active && <View style={[historyStyle.verticalLine, props.active && historyStyle.verticalLineActive]}/>}
    { props.active && <LinearGradient colors={[colors.darkRed, colors.lightGrey]} style={[historyStyle.verticalLine, historyStyle.verticalLineActive]}/> }

    <View style={historyStyle.item}>
      <View style={historyStyle.header}>
        <Text style={[historyStyle.time, props.active && historyStyle.timeActive]}>
          {
            props.active
            ? moment.duration(new Date() - new Date(props.stoppedAt)).format("h[h] m[min]", {usePlural: false})
            : moment.duration(props.leftAt - props.stoppedAt, "milliseconds").format("h[h] m[min]", {usePlural: false})
          }
        </Text>

        <Text style={[historyStyle.time, props.active && historyStyle.timeActive]}>
          {!props.active && moment(props.leftAt).fromNow()}
        </Text>
      </View>

      <View style={historyStyle.carWrapper}>
        <View style={[historyStyle.dot, props.active && historyStyle.dotActive]}/>
        <Text style={[historyStyle.carName, props.active && historyStyle.carNameActive]}>VW Golf</Text>
      </View>
    </View>
  </View>
)

export default HistoryItem
