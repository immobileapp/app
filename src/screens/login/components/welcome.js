import React from 'react'
import { View, Text } from 'react-native'
import genericStyle from '../../../genericStyle'
import style from '../loginStyle'
import GenericStructure from './genericStructure'

export default class Welcome extends React.Component {

    forward() {
        this.props.navigation.navigate('PersonDocument')
    }

    render() {
        return (
            <GenericStructure forward={ () => this.forward() }
                forwardButtonLabel="Vamos Lá" >
                <View style={ genericStyle.justifyCenter }>
                    <Text style={ style.welcomeText }>
                        Olá, seja bem-vindo
                    </Text>
                    <Text style={ style.description }>
                        Logo você poderá utilizar o app, 
                        mas antes precisamos saber algumas informações sobre você.
                    </Text>
                    <Text style={ style.invitationText} >
                        Vamos começar?
                    </Text>
                </View>
            </GenericStructure>
        )
    }
}