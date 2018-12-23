import React from 'react'
import { View, Text } from 'react-native'
import RoundButton from '../../../components/roundButton/roundButton'
import genericStyle from '../../../genericStyle'
import style from '../loginStyle'

export default class Welcome extends React.Component {
    render() {
        return (
            <View style={ genericStyle.redScreen }>
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
                    <RoundButton
                        label="Vamos lá"
                        color="white" 
                        style={ style.forwardButton}
                        onPress={ () => this.handleClick() }/>
                </View>
            </View>
        )
    }
}