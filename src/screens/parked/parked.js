import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../../../assets/values/colors'

import genericStyle from '../../genericStyle'
import style from './parkedStyle'

import Timer from './components/timer'
import RoundButton from '../../components/roundButton/roundButton'
import BackIcon from '../../components/icons/backIcon'
import StatusBarCompensator from '../../components/statusBarCompensator/statusBarCompensator'

import ParkingService from '../../services/parkingService'
import TimerService from '../../services/timerService'

export default class Parked extends React.Component {

	state = {
		time: '00:00:00'
	}

	componentWillMount() {
		this.unsubscribe = ParkingService.watchCurrentParking(currentParking => {
			this.setState({ currentParking })
		})

		this.unsubscribeFromTimer = TimerService.onTimerChange(time => {
			this.setState({ time })
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
		this.unsubscribeFromTimer()
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
				<StatusBarCompensator
					backgroundColor={ colors.darkRed }
				/>
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
						time={ this.state.time }
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