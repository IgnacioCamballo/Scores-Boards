import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native'
import Constants from "expo-constants"

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useGenerala from '@/games/generala/hooks/useGenerala'
import { PlayerGeneralaType } from '@/types'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

type ScoreKey = "one" | "two" | "three" | "four" | "five" | "straight" | "full" | "poker" | "generala" | "doubleGenerala"

type ModalScoreProps = {
  closeModal: () => void,
  player: PlayerGeneralaType,
  currentScore: ScoreKey
}

export default function ModalScore({ closeModal, player, currentScore }: ModalScoreProps) {
  const { lenguage } = useGeneralHooks()
  const { players, setPlayers } = useGenerala()

  const addScore = (score: number) => {
    const playersCopy = [...players]
    const playerIndex = playersCopy.findIndex(p => p.key === player.key)
    playersCopy[playerIndex].scores[currentScore] = score
    setPlayers(playersCopy)
    closeModal()
  }

  //value for options depending on score value
  const optionsValue = 
    currentScore === "one" ? 1 :
    currentScore === "two" ? 2 :
    currentScore === "three" ? 3 :
    currentScore === "four" ? 4 :
    currentScore === "five" ? 5 : 0

  const addSpecialScore = (type: "natural" | "made") => {
    let score = type === "natural" ? 5 : 0;
    switch (currentScore) {
      case "straight":
        score += 20;
        break;
      case "full":
        score += 30;
        break;
      case "poker":
        score += 40;
        break;
      case "generala":
        score += 50;
        break;
      case "doubleGenerala":
        score += 100;
        break;
    }
    addScore(score);
  }
    
  return (
    <Modal
      visible={true}
      transparent={true}
      onRequestClose={closeModal}
      animationType='none'
    >
      <View style={styles.generalContainer}>
        <TouchableOpacity style={styles.blackBackGround} activeOpacity={0} onPress={closeModal} />
        
        <View style={styles.container}>
          {
            currentScore === "straight" || 
            currentScore === "full" || 
            currentScore === "poker" || 
            currentScore === "generala" || 
            currentScore === "doubleGenerala" ?
            <>
              <Text onPress={() => addSpecialScore("natural")} style={styles.textOption}>{translations.natural.find(i => i.lenguage === lenguage)?.text}</Text>
              <Text onPress={() => addSpecialScore("made")} style={styles.textOption}>{translations.made.find(i => i.lenguage === lenguage)?.text}</Text>
            </> : <>
              <Text onPress={() => addScore(optionsValue * 1)} style={styles.textOption}>{optionsValue * 1}</Text>
              <Text onPress={() => addScore(optionsValue * 2)} style={styles.textOption}>{optionsValue * 2}</Text>
              <Text onPress={() => addScore(optionsValue * 3)} style={styles.textOption}>{optionsValue * 3}</Text>  
              <Text onPress={() => addScore(optionsValue * 4)} style={styles.textOption}>{optionsValue * 4}</Text>
              <Text onPress={() => addScore(optionsValue * 5)} style={styles.textOption}>{optionsValue * 5}</Text>
              <Text onPress={() => addScore(optionsValue * 6)} style={styles.textOption}>{optionsValue * 6}</Text>  
            </>
          }
          <Text onPress={() => addScore(0)} style={[styles.textOption, {backgroundColor: theme.color.generalaGreen}]}>-</Text>
          <Text onPress={() => addScore(-1)} style={[styles.textOption, {backgroundColor: theme.color.redGenerala}]}>{translations.scratch.find(i => i.lenguage === lenguage)?.text}</Text>
          <Text onPress={closeModal} style={[styles.textOption, styles.noBorderBottom]}>{translations.cancel.find(i => i.lenguage === lenguage)?.text}</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    backgroundColor: theme.color.white,
    padding: 16,
    borderRadius: 10,
    borderColor: theme.color.black,
    borderWidth: 1,
    marginBottom: 80, //it moves the modal up so it looks better
  },
  blackBackGround: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: Dimensions.get("window").height - Constants.statusBarHeight - 70,
    backgroundColor: theme.color.black,
    opacity: 0.5
  },
  textOption: {
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: 2,
    lineHeight: 40,
    fontSize: 20,
    borderBottomColor: theme.color.grey,
    borderBottomWidth: 1,
    width: 160
  },
  noBorderBottom: {
    borderBottomWidth: 0,
    fontWeight: "bold"
  }
})