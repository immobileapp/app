import React from 'react'
import { View, Image, Text } from 'react-native'

import RoundButton from '../../components/roundButton/roundButton'
import CarSelect from './components/carSelect'
import Greetings from './components/greetings'
import Statistics from './components/statistics'

import style from './homeStyle'
import genericStyle from '../../genericStyle'

import ParkingService from '../../services/parkingService'
import AsyncStorageHelper from '../../helpers/asyncStorageHelper/asyncStorageHelper'

export default class Home extends React.Component {

	state = {}

	componentWillMount() {
		this.unsubscribe = ParkingService.watchCurrentParking(currentParking => {
			this.setState({ currentParking })
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	handleClick() {
		this.state.currentParking
			? this.leave()
			: this.park()
	}

	park() {
		ParkingService.park()
		this.props.navigation.navigate('Parked')
	}

	leave() {
		ParkingService.leave()
	}

	render() {
		return (
			<View style={ genericStyle.whiteScreen }>
				<View style={ genericStyle.minorAurea }>
					<View style={ genericStyle.darkOverlay }>
						<CarSelect/>
					</View>
					<Image style={ style.topImg }
						source={ require('../../../assets/footage/top-bg.png') }
					/>
				</View>
				<View style={ genericStyle.majorAurea }>
					<View style={ style.parkButton }>
						<RoundButton
							onPress={ () => this.handleClick() }
							label={ 
								this.state.currentParking 
									? 'Deixar Vaga' 
									: 'Estacionar' 
								}
						/>
					</View>
					<Greetings/>
					<Statistics/>
				</View>
			</View>
		)
	}
}