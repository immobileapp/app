import { StyleSheet } from 'react-native'

import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const {
  largeText,
  sideMargin,
  dotWidth,
  lineWidth,
  lineHeight,
  dotActiveWidth
} = dimensions

const style = StyleSheet.create({
  itemWrapper: {
    position: 'relative',
  },

  item: {
    paddingVertical: sideMargin / 2,
    paddingRight: sideMargin,
    paddingLeft: sideMargin + dotWidth + (sideMargin / 2)
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  time: {
    color: colors.lightGrey,
    backgroundColor: colors.white,
    fontWeight: 'bold'
  },

  timeElapsed: {
    paddingRight: sideMargin / 6
  },

  timeFromNow: {
    paddingLeft: sideMargin / 6
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
    left: -(dotWidth / 2) - (sideMargin / 2),
    transform: [{ translateX: -(dotWidth / 2) + (lineWidth / 2) }],
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

  ruler: {
    position: 'absolute',
    width: '100%',
    height: lineHeight,
    backgroundColor: colors.lightGrey
  },

  dotActive: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.darkRed,
    borderRadius: dotActiveWidth / 2,
    left: -(sideMargin / 2) - (dotWidth / 2),
    transform: [{ translateX: -(dotActiveWidth / 2) + (lineWidth / 2) }],
    width: dotActiveWidth,
    height: dotActiveWidth,
    borderWidth: lineHeight
  },

  innerDotActive: {
    backgroundColor: colors.darkRed,
    borderRadius: dotWidth / 2,
    width: dotWidth,
    height: dotWidth
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
