import { StyleSheet } from 'react-native'

import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const {
  largeText,
  extraLargeText,
  sideMargin,
  mediumText,
  normalText
} = dimensions

const commonText = {
  color: colors.white,
  textAlign: 'justify',
  marginLeft: sideMargin
}

const style = StyleSheet.create({
  welcomeText: {
    ...commonText,
    fontSize: extraLargeText * 0.8,
    fontWeight: 'bold'
  },
  description: {
    ...commonText,
    fontSize: mediumText
  },
  invitationText: {
    ...commonText,
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
