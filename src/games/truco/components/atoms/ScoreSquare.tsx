import theme from '@/theme/theme'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import useTruco from '@/games/truco/hooks/useTruco'

type ScoreSquareProps = {
  player: "teamA" | "teamB"
  squareNumber: number
}

export default function ScoreSquare({ player, squareNumber }: ScoreSquareProps) {
  const {scores} = useTruco()

  return (
    <View style={styles.containerGeneral}>
      <View style={[styles.innerLine1, scores[player] >= (squareNumber * 5) + 1 ? { opacity: 1 } : { opacity: 0 }]}/>
      <View style={[styles.innerLine2, scores[player] >= (squareNumber * 5) + 2 ? { opacity: 1 } : { opacity: 0 }]}/>
      <View style={[styles.innerLine3, scores[player] >= (squareNumber * 5) + 3 ? { opacity: 1 } : { opacity: 0 }]}/>
      <View style={[styles.innerLine4, scores[player] >= (squareNumber * 5) + 4 ? { opacity: 1 } : { opacity: 0 }]}/>
      <View style={[styles.innerLine5, scores[player] >= (squareNumber * 5) + 5 ? { opacity: 1 } : { opacity: 0 }]}/>
    </View>
  )
}

const styles = StyleSheet.create ({
  containerGeneral: { 
    height: Dimensions.get("window").height * 0.06, 
    width: Dimensions.get("window").height * 0.06, 
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12
  },
  innerLine1: {
    borderWidth: 3,
    borderRadius: 2,
    width: "60%",
    height: 2,
    borderColor: theme.color.white,
    position: "absolute",
    top: 0,
  },
  innerLine2: {
    borderWidth: 3,
    borderRadius: 2,
    width: 2,
    height: "60%",
    borderColor: theme.color.white,
    position: "absolute",
    right: 0,
  },
  innerLine3: {
    borderWidth: 3,
    borderRadius: 2,
    width: "60%",
    height: 2,
    borderColor: theme.color.white,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  innerLine4: {
    borderWidth: 3,
    borderRadius: 2,
    width: 2,
    height: "60%",
    borderColor: theme.color.white,
    position: "absolute",
    left: 0,
    alignSelf: "center",
  },
  innerLine5: {
    borderWidth: 3,
    borderRadius: 2,
    width: "60%",
    height: 2,
    borderColor: theme.color.white,
    position: "absolute",
    alignSelf: "center",
    transform: [{rotate: "-45deg"}]
  }
})