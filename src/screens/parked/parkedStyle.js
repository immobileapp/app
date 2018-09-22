import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const { 
	parkButtonWidth,
	timerText,
	normalText,
	backIconPadding,
	headerHeight,
	sideMargin
} = dimensions
	  
const { white } = colors

const style = StyleSheet.create({
	leaveButton: {
		width: parkButtonWidth
	},
	timer: {
		fontWeight: 'bold',
		fontSize: timerText,
		color: white
	},
	backButton: {
		flexDirection: 'row',
		height: headerHeight,
		paddingLeft: sideMargin,
		alignItems: 'center'
	},
	backIcon: {
		paddingRight: backIconPadding * 2,
		paddingVertical: backIconPadding
	},
	backText: {
		marginTop: normalText / -4,
		fontSize: normalText,
		color: white
	}
})

export default style