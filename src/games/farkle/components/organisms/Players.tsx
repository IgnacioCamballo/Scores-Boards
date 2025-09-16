import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useFarkle from '@/games/farkle/hooks/useFarkle'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import Button from '@/components/atoms/Button'
import Player from '@/games/farkle/components/organisms/Player'
import NamePointsLine from '@/games/farkle/components/molecules/NamePointsLine'
import PointsView from '@/games/farkle/components/molecules/PointsView'
import AddPoints from '@/games/farkle/components/molecules/AddPoints'

export default function Players() {
  const { players, whosOpen, setPlayerModal, setWhosOpen } = useFarkle()
  const {lenguage} = useGeneralHooks()

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {players?.map(player => 
          <Player key={player.key}>
            <NamePointsLine press={() => {setWhosOpen(whosOpen === player.key ? 0 : player.key)}}>
              <Text style={styles.name}>{player.name!}</Text>
              <PointsView isOpen={whosOpen === player.key} points={player.points!}/>
            </NamePointsLine>
            
            <AddPoints playerKey={player.key!}/>
          </Player>
        )}

        <Button press={() => setPlayerModal(true)} color={theme.color.white} style={styles.button} width={240}>
          <Text style={styles.text}>{translations.addPlayer.find(i => i.lenguage === lenguage)?.text}</Text>
        </Button>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSize.F24,
    fontWeight: '500'
  },
  button: {
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 40
  },
  name: {
    fontSize: theme.fontSize.F28,
    fontWeight: "400"
  }
})