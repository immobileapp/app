import React from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'

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
      <TouchableHighlight onPress={ () => props.navigation.navigate('History') }>
        <Text style={ style.moreStatsText }>
          ver mais
        </Text>
      </TouchableHighlight>
		</View>
	</View>
)

export default Statistics
