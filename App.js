import React from 'react'
import { View, Platform, UIManager, StatusBar } from 'react-native'
import Navigation from './src/navigation'

import NotificationService from './src/services/notificationService'

export default class App extends React.Component {

    constructor() {
        super()

        Platform.OS === 'android' &&
            UIManager.setLayoutAnimationEnabledExperimental(true)

        NotificationService.initialize()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar 
                    translucent={ true } 
                    backgroundColor="transparent"
                />
                <Navigation />
            </View>
        )
    }
}