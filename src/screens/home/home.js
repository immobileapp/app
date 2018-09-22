import React from 'react'
import { View, Image, Text } from 'react-native'

import RoundButton from '../../components/roundButton/roundButton'
import CarSelect from './components/carSelect'
import Greetings from './components/greetings'
import Statistics from './components/statistics'

import style from './homeStyle'
import genericStyle from '../../genericStyle'

import AsyncStorageHelper from '../../helpers/asyncStorageHelper/asyncStorageHelper'

export default class Home extends React.Component {

	state = {}

	componentWillMount() {
		AsyncStorageHelper.subscribe('test.onchange', data => {
			console.warn('HAAA')
		})
	}

	componentDidMount() {
		// setTimeout(() => {
		// 	AsyncStorageHelper.save('test', { cyka: 'blyat' })
		// 		.then(data => {
		// 			console.error(data)
		// 		})
		// }, 1000)
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
							onPress={ () => console.warn('pidar') }
							label={ this.state.parked ? 'Deixar Vaga' : 'Estacionar' }
						/>
					</View>
					<Greetings/>
					<Statistics/>
				</View>
			</View>
		)
	}
}