import React from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import { useLocation, useNavigate } from 'react-router-native'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useTruco from '@/games/truco/hooks/useTruco'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import ModalMenuGeneral from '@/components/molecules/ModalMenuGeneral'

type ModalMenuTrucoProps = {

}

export default function ModalMenuTruco({}: ModalMenuTrucoProps) {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const {scores, setScores} = useTruco()
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
    let scoresCopy = {...scores}
    scoresCopy.teamA = 0
    scoresCopy.teamB = 0
    setScores(scoresCopy)
    setModalMenu(false)
  }

  return (
    <ModalMenuGeneral>
      { pathname === '/truco' && 
        <>
          <Text style={styles.text} onPress={() => resetAlert()}>{translations.newGame.find(i => i.lenguage === lenguage)?.text}</Text>
          <Text style={styles.text} onPress={() => {navigate('/truco/rules'), setModalMenu(false)}}>{translations.rules.find(i => i.lenguage === lenguage)?.text}</Text>
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