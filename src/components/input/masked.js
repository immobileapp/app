import React from 'react'
import TextInputMask from 'react-native-text-input-mask'
import style from './inputStyles'
import colors from '../../../assets/values/colors'

export default props => (
    <TextInputMask { ...props } 
        placeholderTextColor={ colors.placeholderText }
        style={{ ...style.input, ...props.style }} />
)