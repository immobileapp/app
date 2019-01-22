import React from 'react'
import { View, Text, TextInput } from 'react-native'
import style from '../loginStyle'
import genericStyle from '../../../genericStyle'

import GenericStructure from './genericStructure'

import validateCpf from 'validar-cpf'
import MaskingHelper from '../../../helpers/maskingHelper'

export default class PersonDocument extends React.Component {
  state = {
    cpf: '',
    valid: true
  }

  validate() {
    const valid = validateCpf(MaskingHelper.unmask(this.state.cpf))
    this.setState({ valid })

    return valid
  }

  handleClick() {
    this.validate() && this.goForward()
  }

  goForward(page) {
    this.props.navigation.navigate('LicencePlate', {
      document: MaskingHelper.unmask(this.state.cpf)
    })
  }

  render() {
    return (
      <GenericStructure { ...this.props }
        forward={ () => this.handleClick() }
        forwardButtonLabel="Avançar">
        <View style={ genericStyle.justifyCenter }>
          <Text style={ style.welcomeText }>Pessoal</Text>
          <Text style={ style.description }>Informe seu CPF para verificarmos se já temos seu cadastro</Text>
          <View style={ style.inputWrapper}>
            <TextInput 
              value={ this.state.cpf }
              placeholder="000.000.000-00"
              keyboardType="number-pad"
              onChangeText={
                cpf => this.setState({ cpf: MaskingHelper.mask(cpf, '000.000.000-00') })
              } />
            { !this.state.valid && <Text style={ style.error }>CPF inválido</Text> }
          </View>
        </View>
      </GenericStructure>
    )
  }
}
