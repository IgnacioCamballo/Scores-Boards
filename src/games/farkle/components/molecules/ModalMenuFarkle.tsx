import React from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import { useLocation, useNavigate } from 'react-router-native'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useFarkle from '@/games/farkle/hooks/useFarkle'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"
import ModalMenuGeneral from '@/components/molecules/ModalMenuGeneral'

type ModalMenuFarkleProps = {

}

export default function ModalMenuFarkle({}: ModalMenuFarkleProps) {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const {players, setPlayers} = useFarkle()
  const {lenguage, setModalMenu} = useGeneralHooks()

  const resetAlert = () => {
    Alert.alert(
      '',
      `${translations.alertReseteScores.find(i => i.lenguage === lenguage)?.text}`,
      [
        {
          text: `${translations.cancel.find(i => i.lenguage === lenguage)?.text}`,
          onPress: () => setModalMenu(false),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => resetScores(),
          style: 'cancel'
        },
      ],
    )
  }

  const resetScores = () => {
    let playersCopy = [...players]
    
    playersCopy.forEach(player => {
      player.points = 0
    })

    setPlayers(playersCopy)
    setModalMenu(false)
  }

  return (
    <ModalMenuGeneral>
      { pathname === '/farkle' && 
        <>
          <Text style={styles.text} onPress={() => resetAlert()}>{translations.reseteScores.find(i => i.lenguage === lenguage)?.text}</Text>
          <Text style={styles.text} onPress={() => {navigate('/farkle/playersEdit'), setModalMenu(false)}}>{translations.editPlayers.find(i => i.lenguage === lenguage)?.text}</Text>
          <Text style={styles.text} onPress={() => {navigate('/farkle/rules'), setModalMenu(false)}}>{translations.rules.find(i => i.lenguage === lenguage)?.text}</Text>
        </>
      }
    </ModalMenuGeneral>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSize.F24,
    alignSelf: "flex-start"
  }
})