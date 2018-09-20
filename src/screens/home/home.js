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

	componentWillMount() {
		AsyncStorageHelper.subscribe('test.onchange', data => {
			console.warn('HAAA')
		})
	}

	componentDidMount() {
		setTimeout(() => {
			AsyncStorageHelper.save('test', { cyka: 'blyat' })
		}, 1000)

		setTimeout(() => {
			AsyncStorageHelper.update('test', { cyka: 'blyat' }, { cyka: 'blyet' })
		}, 2000)

		setTimeout(() => {
			AsyncStorageHelper.save('test', { cyka: 'blyat' })
		}, 3000)
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
							onPress={ this.props.handleButton }
							label={ this.props.parked ? 'Deixar Vaga' : 'Estacionar' }
						/>
					</View>
					<Greetings/>
					<Statistics/>
				</View>
			</View>
		)
	}
}