import React from 'react'
import { View } from 'react-native'
import genericStyle from '../../../genericStyle'
import style from '../loginStyle'
import TextInput from '../../../components/input/textInput'
import GenericStructure from './genericStructure'

export default class PersonDocument extends React.Component {

    state = {
        document: ''
    }

    forward() {
        // this.props.navigation.navigate('PersonDocument')
    }

    render() {
        return (
            <GenericStructure forward={ () => this.forward() }
                forwardButtonLabel="Avançar" >
                <View style={ { ...style.inputWrapper, ...genericStyle.justifyCenter} }>
                    <TextInput value={ this.state.document }
                        placeholder="Digite seu CPF"
                        keyboardType="number-pad"
                        onChange={ document => this.setState({ document }) } />
                </View>
            </GenericStructure>
        )
    }
}