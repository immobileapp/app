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

const commomText = {
    color: colors.white,
    textAlign: 'justify',
    marginLeft: sideMargin
}

const style = StyleSheet.create({
	welcomeText: {
        ...commomText,
        fontSize: extraLargeText * 0.8,
        fontWeight: 'bold'
    },
    description: {
        ...commomText,
        fontSize: mediumText
    },
    invitationText: {
        ...commomText,
        fontSize: largeText,
        fontWeight: 'bold'
    },
    forwardButton: {
        margin: sideMargin
    },
    inputWrapper: {
        margin: sideMargin
    },
    error: {
        color: colors.white,
        fontSize: normalText
    }
})

export default style