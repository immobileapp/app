import DimensionConversionHelper from '../../src/helpers/dimensionConversionHelper'

const widthDimensions = DimensionConversionHelper.convert('vertical', {
	fullWidth: 414,
	parkButtonWidth: 256,
	changeButtonWidth: 32,
	changeIconWidth: 22,
	backIconWidth: 16,
	backIconTraceWidth: 2,
	sideMargin: 32,
	inputHorizontalPadding: 16,
	arrowButtonPadding: 16
})

const heightDimensions = DimensionConversionHelper.convert('vertical', {
	fullHeight: 736,
	roundButtonHeight: 64,
	backIconTraceHeight: 11,
	backIconPadding: 8,
	headerHeight: 62,
	homeDefaultMarginHeight: 28
})

const textDimensions = DimensionConversionHelper.convert('vertical', {
	normalText: 16,
	mediumText: 21,
	largeText: 26,
	extraLargeText: 68,
	timerText: 63.23
})

export default { ...widthDimensions, ...heightDimensions, ...textDimensions }