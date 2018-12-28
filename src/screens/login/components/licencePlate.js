import React from 'react'
import { View, Text } from 'react-native'
import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import Masked from '../../../components/input/masked'
import GenericStructure from './genericStructure'

export default class LicencePlate extends React.Component {

    state = {
        maskedValue: '',
        unmaskedValue: ''
    }

    handleChange(maskedvalue, unmaskedValue) {
        console.warn(maskedvalue)
        this.setState({ 
            maskedValue: maskedvalue, 
            unmaskedValue: unmaskedValue
        })
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
                        <Masked value={ this.state.maskedValue }
                            placeholder="AAA-1234"
                            mask="[AAA]=[0000]"
                            onChangeText={ 
                                (maskedValue, unmaskedValue) => this.handleChange(maskedValue, unmaskedValue) 
                            } />

                    </View>
                </View>
            </GenericStructure>
        )
    }
}