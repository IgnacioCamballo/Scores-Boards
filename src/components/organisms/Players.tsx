import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

import useFarkle from '../../hooks/useFarkle'
import theme from '../../theme/theme'
import translations from "../../lenguage/lenguage.json"
import Button from '../atoms/Button'
import Player from './Player'
import NamePointsLine from '../molecules/NamePointsLine'
import PointsView from '../molecules/PointsView'
import AddPoints from '../molecules/AddPoints'

export default function Players() {
  const { players, whosOpen, setPlayerModal, setWhosOpen, lenguage } = useFarkle()

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {players?.map(player => 
          <Player key={player.key}>
            <NamePointsLine press={() => setWhosOpen(whosOpen === player.key ? 0 : player.key)}>
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
  container: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
    backgroundColor: theme.color.playersBase,
    borderColor: theme.color.black,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 12,
    padding: 10
    },
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