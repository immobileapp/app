import React from 'react'
import { View, Image, Text } from 'react-native'

import genericStyle from '../../../genericStyle'
import style from '../homeStyle'

const Statistics = props => (
	<View style={ style.statistics }>
		<View style={ style.infContainer }>
			<View style={ style.inf }>
				<Image
					style={ style.statsIcon }
					source={ require('../../../../assets/footage/watch.png') }
				/>
				<Text style={ style.statsText }>
					{ props.time }
				</Text>
			</View>
			<View style={ style.inf }>
				<Image
					style={ style.statsIcon }
					source={ require('../../../../assets/footage/coin.png') }
				/>
				<Text style={ style.statsText }>
					{ props.money }
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

export default Statistics
