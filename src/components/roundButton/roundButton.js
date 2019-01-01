import React from 'react'
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native'

import style from './roundButtonStyle'
import genericStyle from '../../genericStyle'

class RoundButton extends React.Component {

	componentWillReceiveProps() {
		LayoutAnimation.configureNext(
			LayoutAnimation.Presets.spring
		)
	}

	render() {
		return (
			<TouchableOpacity style={ this.props.style }
				onPress={ this.props.onPress }>
				<View style={[ style.button,
					this.props.color == 'white'
						? style.whiteButton
						: style.redButton
				]}>
					<View style={ genericStyle.centerContent }>
						<Text style={[ style.text,
							this.props.color == 'white'
								? style.redText
								: style.whiteText
						]}>
							{ this.props.label.toUpperCase() }
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

RoundButton.defaultProps = {
	style: {}
}

export default RoundButton
