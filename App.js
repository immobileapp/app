import React from 'react'
import { View, Platform, UIManager } from 'react-native'
import Navigation from './src/navigation'
import LoginNavigation from './src/screens/login/loginNavigation'
import moment from 'moment'
import 'moment/locale/pt-br'
import userService from './src/services/userService'

export default class App extends React.Component {

  state = {
    user: null,
    loading: true
  }

  constructor() {
    super()
    moment.locale('pt-br');

    Platform.OS === 'android' &&
        UIManager.setLayoutAnimationEnabledExperimental(true)

      // NotificationService.initialize()
  }

  componentWillMount() {
    userService.watchCurrentUser(user => {
      this.setState({ user, loading: false })
    })
  }

  renderApp() {
    return this.state.user ? <Navigation /> : <LoginNavigation />
  }

  render() {
    const { loading } = this.state

    return (
      <View style={{ flex: 1 }}>
        { !loading && this.renderApp() }
      </View>
    )
  }
}
