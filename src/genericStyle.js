import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Header } from 'react-navigation'
import colors from '../assets/values/colors'

const { white, darkRed } = colors
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20

const genericStyle = StyleSheet.create({
	whiteScreen: {
		flex: 1,
    backgroundColor: white,
	},
	redScreen: {
		flex: 1,
		backgroundColor: darkRed
	},
	majorAurea: {
		flex: 0.618
	},
	minorAurea: {
		flex: 0.382
	},
	centerContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
  justifyCenter: {
    flex: 1,
    justifyContent: 'center'
  },
	darkOverlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.35)',
		zIndex: 1
	},
	statusBarCompensation: {
		paddingTop: statusBarHeight,
		height: Header.HEIGHT + statusBarHeight
	},
	header: {
		backgroundColor: darkRed
	}
})

export default genericStyle
