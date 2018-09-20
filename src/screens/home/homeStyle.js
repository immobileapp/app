import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const { 
	parkButtonWidth, 
	roundButtonHeight,
	largeText,
	extraLargeText,
	changeButtonWidth,
	sideMargin,
	mediumText,
	homeDefaultMarginHeight,
	normalText
} = dimensions

const { white, darkGrey, lightGrey } = colors

const style = StyleSheet.create({
	topImg: {
		flex: 1,
		width: undefined,
		height: undefined,
		resizeMode: 'cover'
	},
	parkButton: {
		width: parkButtonWidth,
		alignSelf: 'center',
		marginTop: roundButtonHeight / -2,
		zIndex: 2
	},
	carLabel: {
		fontSize: largeText,
		fontStyle: 'italic',
		color: white
	},
	carName: {
		marginTop: extraLargeText / -3,
		fontSize: extraLargeText,
		fontWeight: 'bold',
		color: white
	},
	carChangeButtonWrapper: {
		alignSelf: 'flex-end',
		padding: changeButtonWidth,
		marginRight: changeButtonWidth * -1.4,
		marginTop: changeButtonWidth * -2.1
	},
	carChangeButton: {
		width: changeButtonWidth,
		height: changeButtonWidth,
		backgroundColor: white,
		borderRadius: changeButtonWidth / 2,
		elevation: 10
	},
	greetings: {
		display: 'flex',
		marginVertical: homeDefaultMarginHeight,
		alignItems: 'center'
	},
	greetingsText: {
		fontSize: largeText,
		color: darkGrey
	},
	greetingsTextBold: {
		fontWeight: 'bold'
	},
	greetingsTextLight: {
		fontWeight: '100'
	},
	statistics: {
		display: 'flex',
		alignItems: 'stretch',
		flexDirection: 'column',
		marginHorizontal: sideMargin,
		paddingTop: homeDefaultMarginHeight,
		borderColor: lightGrey,
		borderStyle: 'solid',
		borderTopWidth: 1,
		borderBottomWidth: 1
	},
	infContainer: {
		display: 'flex',
		flexDirection: 'row'
	},
	inf: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	statsIcon: {
		width: roundButtonHeight,
		height: roundButtonHeight,
		resizeMode: 'contain'
	},
	statsText: {
		fontSize: largeText,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: darkGrey
	},
	moreStats: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: homeDefaultMarginHeight * 1.5
	},
	moreStatsText: {
		fontSize: normalText,
		fontStyle: 'italic',
		color: lightGrey
	}
})

export default style