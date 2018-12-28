import { StyleSheet } from 'react-native'

import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const {
  largeText,
  sideMargin,
  dotWidth,
  lineWidth
} = dimensions

const style = StyleSheet.create({
  itemWrapper: {
    position: 'relative',
  },

  item: {
    paddingVertical: sideMargin,
    paddingRight: sideMargin,
    paddingLeft: sideMargin + dotWidth + (sideMargin / 2)
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  time: {
    color: colors.lightGrey,
    fontWeight: 'bold'
  },

  carName: {
    color: colors.lightGrey,
    fontSize: largeText,
    fontWeight: 'bold'
  },

  carWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },

  dot: {
    width: dotWidth,
    position: 'absolute',
    left: -dotWidth - (sideMargin / 2),
    height: dotWidth,
    backgroundColor: colors.lightGrey,
    borderRadius: dotWidth / 2
  },

  verticalLine: {
    position: 'absolute',
    width: lineWidth,
    height: '100%',
    bottom: '-55%',
    left: sideMargin + (dotWidth / 2),
    backgroundColor: colors.lightGrey,
  },

  dotActive: {
    backgroundColor: colors.darkRed
  },

  verticalLineActive: {
    backgroundColor: colors.darkRed
  },

  timeActive: {
    color: colors.darkRed
  },

  carNameActive: {
    color: colors.darkRed
  }
})

export default style
