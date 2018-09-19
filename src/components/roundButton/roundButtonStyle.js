import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const { mediumText, roundButtonHeight } = dimensions,
	  { white, lightRed } = colors

const style = StyleSheet.create({
	button: {
		height: roundButtonHeight,
		borderRadius: roundButtonHeight / 2
	},
	whiteButton: {
		backgroundColor: white
	},
	redButton: {
		backgroundColor: lightRed
	},
	text: {
		fontWeight: 'bold',
		fontSize: mediumText
	},
	whiteText: {
		color: white
	},
	redText: {
		color: lightRed
	}
})

export default style