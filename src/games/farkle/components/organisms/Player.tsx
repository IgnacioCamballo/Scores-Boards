import React from 'react'
import { View, StyleSheet } from 'react-native'

import theme from '@/theme/theme'
import useFarkle from '@/games/farkle/hooks/useFarkle'

type PlayerProps = {
  children: React.ReactNode
}

export default function Player({children}: PlayerProps) {
  
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.white,
    borderColor: theme.color.black,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10
  }
})