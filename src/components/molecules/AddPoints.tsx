import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import useFarkle from '../../hooks/useFarkle'
import translations from "../../lenguage/lenguage.json"
import theme from '../../theme/theme'
import TextShownArea from '../atoms/TextShownArea'
import Button from '../atoms/Button'
import ButtonsSum from './ButtonsSum'
import { PlayerType } from '../../types'

type AddPointsProps = {
  playerKey: number
}

export default function AddPoints({playerKey}: AddPointsProps) {
  const {players, setPlayers, lenguage, whosOpen, setWhosOpen} = useFarkle()

  const [sum, setSum] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const scale = useSharedValue(0)
  const top = useSharedValue(0)
  const height = useSharedValue(0)
  const opacity = useSharedValue(0)

  useEffect(() => {
    if (whosOpen === playerKey) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [whosOpen])

  useEffect(() => {
    if (isOpen) {
      scale.value = withTiming(1, {duration: 100, easing: Easing.inOut(Easing.ease)})
      top.value = withTiming(0, {duration: 100})
      height.value = withTiming(400, {duration: 300})
      opacity.value = withTiming(1, {duration: 300})
    } else {
      scale.value = withTiming(0, {duration: 200})
      top.value = withTiming(-10, {duration: 100})
      height.value = withTiming(0, {duration: 200})
      opacity.value = withTiming(0, {duration: 200})
    }
  }, [isOpen])

  const customeStyles = useAnimatedStyle(() => ({
    transform: [{scaleY: scale.value}],
    top: top.value,
    maxHeight: height.value,
    opacity: opacity.value
  }))

  const addScore = () => {
    const actualPlayer = players.find(player => player.key === playerKey)
    const index = players.findIndex(player => player.key === playerKey)
    
    if(actualPlayer!.points + sum < 0){
      Alert.alert(
        '',
        `${translations.alertNegativeScore.find(i => i.lenguage === lenguage)?.text}`,
        [
          {
            text: 'OK',
            onPress: () => setSum(0),
            style: 'cancel'
          },
        ],
      )
    } else {
      const playersCopy = [...players]
      
      const editedPlayer: PlayerType = {
        key: actualPlayer!.key,
        name: actualPlayer!.name,
        points: actualPlayer!.points + sum
      }
      
      playersCopy.splice(index, 1, editedPlayer)
      setPlayers(playersCopy)
      setSum(0)
      setWhosOpen(0)
    }
  }

  return (
    
    <Animated.View style={[styles.container, customeStyles]}>
      <View style={styles.line}/>
      
      <View style={styles.buttonsContainer}>
        <View style={styles.points}>
          <TextShownArea color={theme.color.softGrey} width={140} height={36}>
            <Text style={styles.font24}>{sum}</Text>
          </TextShownArea>

          <View style={styles.sumCancelButtons}>
            <Button color={theme.color.redCancel} width={64} press={() => {setSum(0)}}>
              <Text style={styles.font16}>Cancel</Text>
            </Button>

            <Button color={theme.color.greenAddButton} width={64} press={() => addScore()}>
              <Text style={styles.font16}>{translations.sum.find(i => i.lenguage === lenguage)?.text}</Text>
            </Button>
          </View>
        </View>

        <ButtonsSum total={sum} setTotal={setSum}/>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  font16: {
    fontSize: theme.fontSize.F16,
    lineHeight: 20
  },
  font24: {
    fontSize: theme.fontSize.F24,
    lineHeight: 28
  },
  line: {
    height: 1,
    marginHorizontal: 10,
    borderColor: theme.color.black,
    borderWidth: 0.8
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  sumCancelButtons: {
    flexDirection: "row",
    gap: 8
  },
  points: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 8
  }
})
