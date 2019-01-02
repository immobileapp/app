import React from 'react'
import { View } from 'react-native'

import RoundButton from '../../../components/roundButton/roundButton'

import genericStyle from '../../../genericStyle'
import style from '../loginStyle'

export default class GenericStructure extends React.Component {
  backward() {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={ genericStyle.redScreen }>
        <View style={ genericStyle.justifyCenter }>
          { this.props.children }

          <RoundButton
            label={ this.props.forwardButtonLabel }
            color="white"
            style={ style.forwardButton}
            onPress={ () => this.props.forward() }/>
        </View>
      </View>
    )
  }
}
