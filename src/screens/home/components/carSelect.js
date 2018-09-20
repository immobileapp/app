import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ChangeIcon from './changeIcon'

import style from '../homeStyle'
import genericStyle from '../../../genericStyle'

export default class CarSelect extends React.Component {
	render() {
		return (
			<View style={ genericStyle.centerContent }>
				<View>
					<Text style={ style.carLabel }>
						Seu Carro
					</Text>
					<Text style={ style.carName }>
						Ford Ka
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
	}
}