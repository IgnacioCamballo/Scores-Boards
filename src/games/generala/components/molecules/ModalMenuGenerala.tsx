import React from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import { useLocation, useNavigate } from 'react-router-native'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useGenerala from '@/games/generala/hooks/useGenerala'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import ModalMenuGeneral from '@/components/molecules/ModalMenuGeneral'

type ModalMenuGeneralaProps = {

}

export default function ModalMenuGenerala({}: ModalMenuGeneralaProps) {
const navigate = useNavigate()
  const {pathname} = useLocation()

  const {lenguage, setModalMenu} = useGeneralHooks()
  const {players, setPlayers} = useGenerala()

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
    const playersCopy = players.map(player => ({
      ...player,
      scores: {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        straight: 0,
        full: 0,
        poker: 0,
        generala: 0,
        doubleGenerala: 0
      }
    }));
    setPlayers(playersCopy);
    setModalMenu(false);
    navigate('/generala')
  }

  return (
    <ModalMenuGeneral>
      { pathname === '/generala/play' && 
        <>
          <Text style={styles.text} onPress={() => resetAlert()}>{translations.newGame.find(i => i.lenguage === lenguage)?.text}</Text>
        </>
      }
      <Text style={styles.text} onPress={() => {navigate(`/generala/${pathname === '/generala/play' ? 1 : 0}/rules`), setModalMenu(false)}}>{translations.rules.find(i => i.lenguage === lenguage)?.text}</Text>
    </ModalMenuGeneral>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSize.F24,
    alignSelf: "flex-start"
  }
})