import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

import useGenerala from '@/games/generala/hooks/useGenerala'
import theme from '@/theme/theme'
import { PlayerGeneralaType } from '@/types'

import ModalScore from '@/games/generala/components/molecules/ModalScore'

type PlayerColumnProps = {
  player: PlayerGeneralaType,
}

type ScoreKey = "" | "one" | "two" | "three" | "four" | "five" | "straight" | "full" | "poker" | "generala" | "doubleGenerala"

export default function PlayerColumn({ player }: PlayerColumnProps) {
  const { players } = useGenerala()

  const [currentScore, setCurrentScore] = useState<ScoreKey>("")

  //dinamic width for player columns depending on number of players
  const containerWidth = Dimensions.get("window").width - 112
  const dynamicWidth = Math.max(containerWidth / players.length, 92)

  //change background color and value depending on score
  function variableBGColor(value: number) {
    switch (true) {
      case value > 0: return theme.color.grey
      case value < 0: return theme.color.redCancel
      default: return theme.color.softGrey
    }
  }

  function variableValue(value: number) {
    switch (true) {
      case value > 0: return value
      case value < 0: return "x"
      default: return "-"
    }  
  }

  const total = () => {
    const scores = Object.values(player.scores)
    return scores.reduce((acc, score) => {
      if (score > 0) {
        return acc + score
      }
      return acc
    }, 0)
  }

  return (
    <View style={[{ width: dynamicWidth }, styles.containerGeneral]}>
      <Text style={[styles.text, styles.name_totals]}>{player.name}</Text>

      <TouchableOpacity
        onPress={() => setCurrentScore("one")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.one)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.one)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("two")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.two)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.two)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("three")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.three)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.three)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("four")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.four)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.four)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("five")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.five)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.five)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("straight")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.straight)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.straight)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("full")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.full)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.full)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("poker")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.poker)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.poker)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("generala")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.generala)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.generala)}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScore("doubleGenerala")}
        activeOpacity={1}
        style={[styles.touchable, {backgroundColor: variableBGColor(player.scores.doubleGenerala)}]}
      >
        <Text style={styles.text}>{variableValue(player.scores.doubleGenerala)}</Text>
      </TouchableOpacity>

      <Text style={[styles.text, styles.name_totals]}>{total()}</Text>

      {currentScore !== "" && <ModalScore closeModal={() => setCurrentScore("")} player={player} currentScore={currentScore} />}
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeneral: {
    minWidth: 92,
    height: "100%"
  },
  touchable: {
    flexGrow: 1,
    backgroundColor: theme.color.softGrey
  },
  name_totals: {
    backgroundColor: theme.color.generalaBase,
    borderWidth: 1,
    borderColor: theme.color.black
  },
  text: {
    flex: 1,
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 0.5,
    borderColor: theme.color.black,
  },
})