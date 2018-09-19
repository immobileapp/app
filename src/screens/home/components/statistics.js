import React from 'react'
import { View, Image, Text } from 'react-native'

import genericStyle from '../../../genericStyle'
import style from '../homeStyle'

export default class Statistics extends React.Component {

	getHours() {
		let { hour, minute, second } = this.props.time

		if (hour != 0) 	 return `${ hour }h`
		if (minute != 0) return `${ minute }m`
		
		return `${ second }s`
	}

	render() {
		return (
			<View style={ style.statistics }>
				<View style={ style.infContainer }>
					<View style={ style.inf }>
						<Image 
							style={ style.statsIcon }
							source={ require('../../../../assets/footage/watch.png') }
						/>
						<Text style={ style.statsText }>
							{ this.props.time && this.getHours() }
						</Text>
					</View>
					<View style={ style.inf }>
						<Image 
							style={ style.statsIcon }
							source={ require('../../../../assets/footage/coin.png') }
						/>
						<Text style={ style.statsText }>
							{ this.props.money }
						</Text>
					</View>
				</View>
				<View style={ style.moreStats }>
					<Text style={ style.moreStatsText }>
						ver mais
					</Text>
				</View>
			</View>
		)
	}
}