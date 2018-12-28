import { StyleSheet } from 'react-native'

import dimensions from '../../../assets/values/dimensions'

const {
	parkButtonWidth,
  timerText,
  normalText,
  backIconPadding,
  headerHeight,
  sideMargin
} = dimensions

const style = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})

export default style
