import React from 'react'
import { View, Text } from 'react-native'

import style from '../homeStyle'

const NoParkingsMessage = props => (
  <View style={ style.greetings }>
		<Text style={ style.noParkingsMessage }>
      Você ainda não estacionou este mês :(
		</Text>
  </View>
)

export default NoParkingsMessage
