import React from 'react'
import { TextInput } from 'react-native'

import style from './inputStyles'
import colors from '../../../assets/values/colors'

export default props => (
  <TextInput { ...props }
    placeholderTextColor={ colors.placeholderText }
    style={{ ...style.input, ...props.style }} />
)
