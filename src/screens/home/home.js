import React from 'react'
import { View, Image, Text } from 'react-native'

import RoundButton from '../../components/roundButton/roundButton'
import CarSelect from './components/carSelect'
import Greetings from './components/greetings'
import Statistics from './components/statistics'

import style from './homeStyle'
import genericStyle from '../../genericStyle'

import AsyncStorageHelper from '../../helpers/asyncStorageHelper'

export default class Home extends React.Component {

	componentDidMount() {
		// AsyncStorageHelper.save('test', { pidar: 'blyaaaaat' })
		// 	.then(() => {
		// 		AsyncStorageHelper.find('test')
		// 			.then(result => console.error(result))
		// 	})
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