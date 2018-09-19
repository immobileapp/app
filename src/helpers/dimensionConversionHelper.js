import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const prototypeWidth = 360
const prototypeHeight = 640

const convertHorizontal = proto => (proto * width) / prototypeWidth
const convertVertical = proto => (proto * height) / prototypeHeight

const convertFromType = {
	horizontal: convertHorizontal,
	vertical: convertVertical
}

const convert = (type, dimensions) => {
	let converted = {}

	Object.keys(dimensions).map(dimension => {
		converted[dimension] = convertFromType[type](dimensions[dimension])
	})

	return converted
}

export default { convert }