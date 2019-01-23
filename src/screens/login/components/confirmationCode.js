import React from 'react'
import { View, Text, Platform } from 'react-native'

import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import TextInput from '../../../components/input/textInput'
import GenericStructure from './genericStructure'
import firebase from 'react-native-firebase'

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
    valid: true
  }

  componentWillMount() {
    const phoneNumber = this.props.navigation.getParam('phoneNumber')
    firebase.auth()
      .verifyPhoneNumber(`+55${phoneNumber}`)
      .on('state_changed', phoneAuthSnapshot => {
        switch (phoneAuthSnapshot.state) {
          case firebase.auth.PhoneAuthState.CODE_SENT:
            console.warn('code sent')
            break
          case firebase.auth.PhoneAuthState.AUTO_VERIFIED:
            console.warn('autoverified')
            console.warn(phoneAuthSnapshot)
            break

        }
      })

  }

  confirmCode = () => {
    const { code } = this.state;
  }

  forward() {
    if (this.state.code === '') return this.setState({ valid: false })
  }

  render() {
    return (
      <GenericStructure forward={ () => this.forward() }
          forwardButtonLabel="Verificar" >
        <View style={ genericStyle.justifyCenter }>
          <Text style={ style.welcomeText } >Segurança</Text>
          <Text style={ style.invitationText }>
            Parece que já nos conhecemos antes,
          </Text>
          { getMessage() }
          <View style={ style.inputWrapper}>
            <TextInput value={ this.state.code }
              placeholder="Informar código"
              autoCorrect={false}
              onChangeText={
                code => this.setState({ code })
              } />
              { !this.state.valid && <Text style={ style.error }>Código inválido</Text> }
          </View>
        </View>
      </GenericStructure>
    )
  }
}
