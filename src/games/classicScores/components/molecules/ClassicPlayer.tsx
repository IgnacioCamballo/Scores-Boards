import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import useClassic from '@/games/classicScores/hooks/useClassic'
import { PlayerType } from '@/types'
import theme from '@/theme/theme'

type ClassicPlayerProps = {
  playerData: PlayerType
}

export default function ClassicPlayer({playerData}: ClassicPlayerProps) {
  const {setPlayers, players} = useClassic()

  const addPoint = () => {
    const playersCopy = [...players]
    const playerIndex = playersCopy.findIndex(player => player.key === playerData.key)
    if (playerIndex !== -1) {
      playersCopy[playerIndex].points += 1
      setPlayers(playersCopy)
    }
  }

  const removePoint = () => {
    const playersCopy = [...players]
    const playerIndex = playersCopy.findIndex(player => player.key === playerData.key)
    if (playerIndex !== -1) {
      playersCopy[playerIndex].points -= 1
      setPlayers(playersCopy)
    }
  }

  return (
    <View style={styles.containerGeneral}>
      <Text style={styles.name}>{playerData.name}</Text>
      <Text style={styles.points}>{playerData.points}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.9} 
          onPress={() => {removePoint()}}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.9} 
          onPress={() => {addPoint()}}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
   containerGeneral: {
    width: Dimensions.get("window").width * 0.35,
    height: 160,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 20,
    fontWeight: "900",
    color: theme.color.darkGrey
  },
  points: {
    fontSize: 48,
    fontWeight: "900",
    color: theme.color.black
  },
  buttons: {
    flexDirection: "row",
    gap: 16
  },
  button: {
    width: 36,
    height: 36,
    backgroundColor: theme.color.softGrey,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.color.grey,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    shadowColor: theme.color.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "900",
    color: theme.color.black,
    lineHeight: 30,
  }
})

