import React from 'react'
import { TouchableOpacity } from 'react-native'

type NamePointsLineProps = {
  children: React.ReactNode,
  press?: () => void
}

export default function NamePointsLine({children, press}: NamePointsLineProps) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={press}
      style={{
        height: 48,
        padding: 4,
        paddingHorizontal: 14,
        flexDirection: 'row',
        justifyContent: "space-between"
      }}
    >
      {children}
    </TouchableOpacity>
  )
}
