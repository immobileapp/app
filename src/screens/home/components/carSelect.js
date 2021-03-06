import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ChangeIcon from '../../../components/icons/changeIcon'

import style from '../homeStyle'
import genericStyle from '../../../genericStyle'

const CarSelect = () => (
	<View style={ genericStyle.centerContent }>
		<View>
			<Text style={ style.carLabel }>
				Seu Carro
			</Text>
			<Text style={ style.carName }>
				VW Golf
			</Text>
			<TouchableOpacity style={ style.carChangeButtonWrapper }
				onPress={ () => console.warn('mazome') }
			>
				<View style={ style.carChangeButton }>
					<View style={ genericStyle.centerContent }>
						<ChangeIcon/>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	</View>
)

export default CarSelect
