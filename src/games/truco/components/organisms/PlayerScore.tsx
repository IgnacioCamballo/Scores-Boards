import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import useTruco from '@/games/truco/hooks/useTruco'
import theme from '@/theme/theme'

import ScoresColumn from '@/games/truco/components/molecules/ScoresColumn'

type PlayerScoreProps = {
  playerName: string,
  player: "teamA" | "teamB"
}

export default function PlayerScore({ playerName, player }: PlayerScoreProps) {
  const { scores, setScores } = useTruco()

  const addPoint = () => {
    const newScore = scores[player] < 30 ? scores[player] + 1 : 30
    setScores({ ...scores, [player]: newScore })
  }
  const removePoint = () => {
    const newScore = scores[player] > 0 ? scores[player] - 1 : 0
    setScores({ ...scores, [player]: newScore })
  }

  return (
    <View style={styles.containerGeneral}>
      <Text style={styles.tittle}>{playerName}</Text>
      <View style={styles.line} />

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.9}
          onPress={() => { removePoint() }}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.9}
          onPress={() => { addPoint() }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScoresColumn player={player} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerGeneral: {
    width: 142,

  },
  tittle: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.color.white,
    textAlign: "center",
  },
  line: {
    height: 1,
    borderWidth: 1,
    width: "100%",
    borderColor: theme.color.black,
    marginTop: 10
  },
  buttons: {
    flexDirection: "row",
    gap: 16,
    alignSelf: "center",
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
