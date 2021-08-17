import React from 'react'
import { View, Text, Platform } from 'react-native'

import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import TextInput from '../../../components/input/textInput'
import GenericStructure from './genericStructure'
import firebase from 'react-native-firebase'
import MaskingHelper from '../../../helpers/maskingHelper'

const getMessage = () => {
  const message = Platform.OS === 'android' ?
    'estamos aguardando para detectar automaticamente' :
    'cheque sua caixa de mensagens'
  return (
    <Text style={ style.description }>
      e para garantir a segurança das suas informações,
      enviamos um SMS para seu número, { message }
    </Text>
  )
}

export default class ConfimationCode extends React.Component {
  state = {
    code: '',
    inputCode: '',
    message: null
  }

  componentWillMount() {
    this.phoneNumber = this.props.navigation.getParam('phoneNumber')
    this.phoneNumberMasked = this.props.navigation.getParam('phoneNumberMasked')
    firebase.auth()
      .verifyPhoneNumber(`+55${ this.phoneNumber }`)
      .on('state_changed', phoneAuthSnapshot => {
        if (phoneAuthSnapshot.state == firebase.auth.PhoneAuthState.AUTO_VERIFIED) {
          this.forward()
        }
      },
      error => {
        console.warn(error)
        this.setState({
          message: `Erro ao enviar código de verificação para o número ${ this.phoneNumberMasked }`
        })
      },
      phoneAuthSnapshot => {
        console.warn(phoneAuthSnapshot)
        this.setState({ code: phoneAuthSnapshot.code})
      })
  }

  confirmCode = () => {
    const { inputCode, code } = this.state

    if (inputCode !== code) {
      return this.setState({
        message: 'Código de verificação inválido'
      })
    }
    this.forward()
  }

  forward() {
    this.props.navigation.navigate('LicencePlate', {
      phoneNumber: this.phoneNumber
    })
  }

  render() {
    const { message, inputCode } = this.state
    return (
      <GenericStructure forward={ () => this.confirmCode() }
          forwardButtonLabel="Verificar" >
        <View style={ genericStyle.justifyCenter }>
          <Text style={ style.welcomeText } >Segurança</Text>
          <Text style={ style.invitationText }>
            Parece que já nos conhecemos antes,
          </Text>
          { getMessage() }
          <View style={ style.inputWrapper}>
            <TextInput value={ inputCode }
              placeholder="Informar código"
              autoCorrect={false}
              onChangeText={
                inputCode => this.setState({ inputCode })
              } />
              {
                message &&
                  <Text style={ style.error }>{ message }</Text>
              }
          </View>
        </View>
      </GenericStructure>
    )
  }
}
