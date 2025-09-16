import React from 'react'
import { StyleSheet, View } from 'react-native'
import ScoreSquare from '../atoms/ScoreSquare'

type ScoresColumnProps = {
  player: "teamA" | "teamB"

}

export default function ScoresColumn({ player }: ScoresColumnProps) {
  return (
    <View style={styles.containerGeneral}>
      <ScoreSquare player={player} squareNumber={0}/>
      <ScoreSquare player={player} squareNumber={1}/>
      <ScoreSquare player={player} squareNumber={2}/>
      <View style={styles.middleLine}/>
      <ScoreSquare player={player} squareNumber={3}/>
      <ScoreSquare player={player} squareNumber={4}/>
      <ScoreSquare player={player} squareNumber={5}/>
    </View>
  )
}

const styles = StyleSheet.create ({
  containerGeneral: { 
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  middleLine: {
    borderWidth: 1,
    width: "100%",
    borderColor: "black",
    marginVertical: 12
  }
})