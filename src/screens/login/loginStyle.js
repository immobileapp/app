import { StyleSheet } from 'react-native'

import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const {
  largeText,
  extraLargeText,
  sideMargin,
  mediumText,
  normalText,
  smallText
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
    fontSize: normalText
  },
  invitationText: {
    ...commonText,
    fontSize: mediumText,
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
    fontSize: smallText
  }
})

export default style
