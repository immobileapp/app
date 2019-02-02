import React from 'react'
import { View, Text } from 'react-native'
import TextInput from '../../../components/input/textInput'
import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import phoneNumberValidator from '../../../helpers/phoneNumberValidator'
import GenericStructure from './genericStructure'

import MaskingHelper from '../../../helpers/maskingHelper'

export default class PersonPhone extends React.Component {
  state = {
    number: '',
    valid: true
  }

  validate() {
    const valid = phoneNumberValidator.validate(this.state.number)
    this.setState({ valid })

    return valid
  }

  handleClick() {
    this.validate() && this.goForward()
  }

  goForward(page) {
    this.props.navigation.navigate('ConfimationCode', {
      phoneNumber: MaskingHelper.unmask(this.state.number),
      phoneNumberMasked: this.state.number
    })
  }

  render() {
    return (
      <GenericStructure { ...this.props }
        forward={ () => this.handleClick() }
        forwardButtonLabel="Avançar">
        <View style={ genericStyle.justifyCenter }>
          <Text style={ style.welcomeText }>Pessoal</Text>
          <Text style={ style.description }>Informe seu número de telefone para verificarmos se já temos seu cadastro</Text>
          <View style={ style.inputWrapper}>
            <TextInput
              value={ this.state.number }
              placeholder="(00)0000-0000"
              keyboardType="number-pad"
              onChangeText={
                number => this.setState({ number: MaskingHelper.mask(number, '(00)00000-0000') })
              } />
            { !this.state.valid && <Text style={ style.error }>Número de telefone inválido</Text> }
          </View>
        </View>
      </GenericStructure>
    )
  }
}
