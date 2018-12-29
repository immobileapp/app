import React from 'react'
import { View, Platform, UIManager } from 'react-native'
import Navigation from './src/navigation'
import moment from 'moment'
import 'moment/locale/pt-br'

import NotificationService from './src/services/notificationService'

export default class App extends React.Component {

    constructor() {
        super()
        moment.locale('pt-br');

        Platform.OS === 'android' &&
            UIManager.setLayoutAnimationEnabledExperimental(true)

        // NotificationService.initialize()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Navigation />
            </View>
        )
    }
}
