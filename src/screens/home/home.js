import React from 'react'
import { View, Image, InteractionManager } from 'react-native'

import RoundButton from '../../components/roundButton/roundButton'
import CarSelect from './components/carSelect'
import Greetings from './components/greetings'
import Statistics from './components/statistics'
import NoParkingsMessage from './components/noParkingsMessage'

import style from './homeStyle'
import genericStyle from '../../genericStyle'

import ParkingService from '../../services/parkingService'
import StatisticsService from '../../services/statisticsService'
import AsyncStorageHelper from '../../helpers/asyncStorageHelper/asyncStorageHelper'

export default class Home extends React.Component {

	state = {
    stats: {}
  }

	componentWillMount() {
		this.unsubscribeFromParking = ParkingService.watchCurrentParking(currentParking => {
			InteractionManager.runAfterInteractions(() => this.setState({ currentParking }))
    })

    this.unsubscribeFromStats = StatisticsService.watchAndSummarizeParking(stats => {
      InteractionManager.runAfterInteractions(() => this.setState({ stats }))
    })
	}

	componentWillUnmount() {
    this.unsubscribeFromParking()
    this.unsubscribeFromStats()
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

  showStatsOrCallToPark() {
    let hasParkedYet = this.state.stats.time == '0s'

    return hasParkedYet ? <NoParkingsMessage/>
                        : <Statistics { ...this.state.stats }
                                      navigation={ this.props.navigation } />
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
					{ this.showStatsOrCallToPark() }
				</View>
			</View>
		)
	}
}
