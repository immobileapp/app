import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const { mediumText, roundButtonHeight } = dimensions,
	  { white, lightGrey } = colors

const style = StyleSheet.create({
	input: {
        width: '100%',
        borderBottomColor: white, 
        borderBottomWidth: 1,
        paddingLeft: 20,
        fontSize: mediumText,
        color: lightGrey
    }
    
})

export default style