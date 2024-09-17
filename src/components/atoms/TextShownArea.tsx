import React from 'react'
import { View } from 'react-native'
import theme from '../../theme/theme'

type TextShownAreaProps = {
  children: React.ReactNode,
  color?: string,
  width?: number,
  height?: number
}

export default function TextShownArea({children, color, width, height}: TextShownAreaProps) {
  return (
    <View 
      style={{
        backgroundColor: color,
        height: height,
        width: width,
        borderColor: theme.color.black,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </View>
  )
}
