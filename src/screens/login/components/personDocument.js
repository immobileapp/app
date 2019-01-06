import React from 'react'
import { View, Text } from 'react-native'
import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import Masked from '../../../components/input/masked'
import GenericStructure from './genericStructure'
import validateCpf from 'validar-cpf'
import userService from '../../../services/userService'

export default class PersonDocument extends React.Component {
  state = {
    maskedValue: '',
    unmaskedValue: '',
    valid: true
  }

  validate() {
    const valid = validateCpf(this.state.unmaskedValue)
    this.setState({ valid })
    return valid
  }

  handleClick() {
    if (!this.validate()) return
    userService.checkForDocument(this.state.unmaskedValue).then(data => {
      this.handleForward(data.exists)
    })
  }

  handleForward(documentExists) {
    if (!documentExists) return this.forward('LicencePlate')
    this.forward('ConfimationCode')
  }

  forward(page) {
    this.props.navigation.navigate(page, {
      document: this.state.unmaskedValue
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
            <Masked value={ this.state.maskedValue }
              placeholder="000.000.000-00"
              keyboardType="number-pad"
              mask="[000].[000].[000]-[00]"
              onChangeText={
                (maskedValue, unmaskedValue) => this.setState({ maskedValue, unmaskedValue })
              } />
            { !this.state.valid && <Text style={ style.dataor }>CPF inválido</Text> }
          </View>
        </View>
      </GenericStructure>
    )
  }
}
