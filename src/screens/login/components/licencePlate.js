import React from 'react'
import { View, Text } from 'react-native'

import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import TextInput from '../../../components/input/textInput'
import GenericStructure from './genericStructure'
import UserService from '../../../services/userService'
import CarService from '../../../services/carService'

import MaskingHelper from '../../../helpers/maskingHelper'

export default class LicencePlate extends React.Component {
  state = {
    licencePlate: ''
  }

  forward() {
    const document = this.props.navigation.getParam('document')
    
    CarService.addCar(this.state.licencePlate)
    UserService.newUser(document)
  }

  handleChange(licencePlate) {
    let differentChar = MaskingHelper.unmask(licencePlate).charAt(4),
        maskPattern = (differentChar && isNaN(differentChar)) ? 'AAA1B23' : 'AAA-1234'

    this.setState({ licencePlate: MaskingHelper.mask(licencePlate, maskPattern) })
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
              autoCorrect={ false }
              autoCapitalize="characters"
              onChangeText={ licencePlate => this.handleChange(licencePlate) } />
          </View>
        </View>
      </GenericStructure>
    )
  }
}
