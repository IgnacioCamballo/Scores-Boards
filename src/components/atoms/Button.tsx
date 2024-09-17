import React from 'react'
import { StyleProp, TouchableOpacity, TouchableWithoutFeedback, ViewStyle } from 'react-native'
import theme from '../../theme/theme'

type ButtonProps = {
  children: React.ReactNode,
  press?: () => void,
  color?: string,
  width?: number,
  style?: StyleProp<ViewStyle>,
  disabled?: boolean
}

export default function Button({children, press, color, width, style, disabled}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={press}
      style={[{
        width: width,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 4,
        paddingHorizontal: 4,
        backgroundColor: color,
        borderColor: theme.color.black,
        borderWidth: 1,
        borderRadius: 10},
        [style]
      ]}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  )
}