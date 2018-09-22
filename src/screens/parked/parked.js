import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import genericStyle from '../../genericStyle'
import style from './parkedStyle'

import Timer from './components/timer'
import RoundButton from '../../components/roundButton/roundButton'
import BackIcon from '../../components/icons/backIcon'

export default class Parked extends React.Component {

	state = {}

	render() {
		return (
			<View style={ genericStyle.redScreen }>
				<TouchableOpacity style={ style.backButton }
					onPress={ () => this.props.navigation.navigate('Home') }
				>
					<View style={ style.backIcon }>
						<BackIcon/>
					</View>
					<Text style={ style.backText }>
						voltar
					</Text>
				</TouchableOpacity>
				<View style={ genericStyle.centerContent }>
					<Timer 
						style={ style.timer }
						timer={{
							hours: '00',
							minutes: '00',
							seconds: '00'
						}}
					/>
					<View style={ style.leaveButton }>
						<RoundButton 
							color="white"
							label={ this.state.parked ? 'Deixar Vaga' : 'Estacionar' }
							onPress={ () => console.warn('pidar') }
						/>
					</View>
				</View>
			</View>
		)
	}
}