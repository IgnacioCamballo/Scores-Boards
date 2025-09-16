import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useTruco from '@/games/truco/hooks/useTruco'
import translations from "@/lenguage/lenguage.json"

import PlayerScore from '@/games/truco/components/organisms/PlayerScore'
import theme from '@/theme/theme'

type TrucoProps = {

}

export default function Truco({}: TrucoProps) {
  const {lenguage} = useGeneralHooks()
  const {scores} = useTruco()

  return (
    <View style={styles.containerGeneral}>
      <PlayerScore playerName={translations.us.find(i => i.lenguage === lenguage)?.text!} player={"teamA"}/>
      <View style={styles.centerLine}/>
      <PlayerScore playerName={translations.them.find(i => i.lenguage === lenguage)?.text!} player={"teamB"}/>
    </View>
  )
}

const styles = StyleSheet.create ({
  containerGeneral: { 
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  centerLine: {
    borderWidth: 1,
    width: 1,
    height: "100%",
    borderColor: theme.color.black
  }
})