import React from 'react'
import { View, Text } from 'react-native'
import style from '../loginStyle'
import genericStyle from '../../../genericStyle'
import TextInput from '../../../components/input/textInput'
import GenericStructure from './genericStructure'

export default class PersonDocument extends React.Component {

    state = {
        document: ''
    }

    forward() {
        this.props.navigation.navigate('LicencePlate')
    }

    render() {
        return (
            <GenericStructure { ...this.props } 
                forward={ () => this.forward() }
                forwardButtonLabel="Avançar" >
                <View style={ genericStyle.justifyCenter }>
                    <Text style={ style.welcomeText } >Pessoal</Text>
                    <Text style={ style.description }>Informe seu CPF para verificarmos se já temos seu cadastro</Text>
                    <View style={ style.inputWrapper}>
                        <TextInput value={ this.state.document }
                            placeholder="000.000.000-00"
                            keyboardType="number-pad"
                            onChange={ document => this.setState({ document }) } />

                    </View>
                </View>
            </GenericStructure>
        )
    }
}