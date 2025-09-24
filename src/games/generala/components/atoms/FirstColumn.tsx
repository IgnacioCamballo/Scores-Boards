import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

type FirstColumnProps = {

}

export default function FirstColumn({ }: FirstColumnProps) {
  const {lenguage} = useGeneralHooks()

  return (
    <View style={styles.containerGeneral}>
      <Text style={[styles.text, styles.totalColor]}>{translations.player.find(i => i.lenguage === lenguage)?.text}</Text>
      <Text style={styles.text}>1</Text>
      <Text style={styles.text}>2</Text>
      <Text style={styles.text}>3</Text>
      <Text style={styles.text}>4</Text>
      <Text style={styles.text}>5</Text>
      <Text style={styles.text}>6</Text>
      <Text style={styles.text}>{translations.straight.find(i => i.lenguage === lenguage)?.text}</Text>
      <Text style={styles.text}>Full</Text>
      <Text style={styles.text}>Poker</Text>
      <Text style={styles.text}>{translations.Yahtzee.find(i => i.lenguage === lenguage)?.text}</Text>
      <Text style={styles.text}>{translations.DoubleYahtzee.find(i => i.lenguage === lenguage)?.text}</Text>
      <Text style={[styles.text, styles.totalColor]}>Total</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerGeneral: {
    width: 92,
    borderRightWidth: 1,
    borderColor: theme.color.black
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 0.5,
    borderColor: theme.color.black,
    backgroundColor: theme.color.playersBase
  },
  totalColor: {
    backgroundColor: theme.color.playersBase,
  }
})