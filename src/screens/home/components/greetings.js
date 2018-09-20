import React from 'react'
import { View, Text } from 'react-native'
import style from '../homeStyle'

export default class Greetings extends React.Component {
	render() {
		return (
			<View style={ style.greetings }>
				<Text style={ style.greetingsText }>
					Olá, seja&nbsp;
					<Text style={[ style.greetingsText, style.greetingsTextBold ]}>
						bem vindo!
					</Text>
				</Text>
				<Text style={[ style.greetingsText, style.greetingsTextLight ]}>
					Neste&nbsp;
					<Text style={[ style.greetingsText, style.greetingsTextBold ]}>
						mês
					</Text>
					, você ja usou:
				</Text>
			</View>
		)
	}
}