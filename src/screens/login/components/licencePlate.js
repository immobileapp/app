import React from 'react'
import { View, Text } from 'react-native'
import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import TextInput from '../../../components/input/textInput'
import GenericStructure from './genericStructure'

export default class LicencePlate extends React.Component {

    state = {
        licence: ''
    }

    forward() {
        
    }

    render() {
        return (
            <GenericStructure forward={ () => this.forward() }
                forwardButtonLabel="Avançar" >
                <View style={ genericStyle.justifyCenter }>
                    <Text style={ style.welcomeText } >Veículo</Text>
                    <Text style={ style.description }>Informe a placa do seu veículo</Text>
                    <View style={ style.inputWrapper}>
                        <TextInput value={ this.state.licence }
                            placeholder="AAA-1234"
                            onChangeText={ licence => this.setState({ licence }) } />

                    </View>
                </View>
            </GenericStructure>
        )
    }
}