import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import genericStyle from '../../genericStyle'
import style from './parkedStyle'

import Timer from './components/timer'
import RoundButton from '../../components/roundButton/roundButton'
import BackIcon from '../../components/icons/backIcon'

import ParkingService from '../../services/parkingService'

export default class Parked extends React.Component {

	state = {}

	componentWillMount() {
		ParkingService.watchCurrentParking(currentParking => {
			this.setState({ currentParking })
		})
	}

	handleClick() {
		this.state.currentParking
			? this.leave()
			: this.park()
	}

	park() {
		ParkingService.park()
	}

	leave() {
		ParkingService.leave()
		this.props.navigation.navigate('Home')
	}

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
							label={ 
								this.state.currentParking 
									? 'Deixar Vaga' 
									: 'Estacionar' 
							}
							onPress={ () => this.handleClick() }
						/>
					</View>
				</View>
			</View>
		)
	}
}