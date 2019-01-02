import React from 'react'
import { View, Text } from 'react-native'

import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import TextInput from '../../../components/input/textInput'
import GenericStructure from './genericStructure'
import userService from '../../../services/userService';
import carService from '../../../services/carService';

export default class LicencePlate extends React.Component {
  state = {
    licencePlate: ''
  }

  forward() {
    const document = this.props.navigation.getParam('document')
    carService.addCar(this.state.licencePlate)
    userService.newUser(document)
  }

  render() {
    return (
      <GenericStructure forward={ () => this.forward() }
          forwardButtonLabel="Avançar" >
        <View style={ genericStyle.justifyCenter }>
          <Text style={ style.welcomeText } >Veículo</Text>
          <Text style={ style.description }>Informe a placa do seu veículo</Text>

          <View style={ style.inputWrapper}>
            <TextInput value={ this.state.licencePlate }
              placeholder="AAA-1234"
              autoCorrect={false}
              autoCapitalize="characters"
              onChangeText={
                licencePlate => this.setState({ licencePlate })
              } />
          </View>
        </View>
      </GenericStructure>
    )
  }
}
