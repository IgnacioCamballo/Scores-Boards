import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated'
import Constants from "expo-constants"
import Icon from 'react-native-vector-icons/AntDesign'

import useFarkle from '../../hooks/useFarkle'
import theme from '../../theme/theme'
import translations from "../../lenguage/lenguage.json"

type ModalMenuProps = {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  setModalEditPlayers: React.Dispatch<React.SetStateAction<boolean>>
  setModalRules: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalMenu({modal, setModal, setModalEditPlayers, setModalRules}: ModalMenuProps) {
  const {players, lenguage, setPlayers, setLenguage} = useFarkle()

  const [lenguageView, setLenguageView] = useState(false)
  const [isOpen, setIsOppen] = useState(modal)

  const scale = useSharedValue(0)
  const top = useSharedValue(16)
  const right = useSharedValue(20)
  const width = useSharedValue(0)
  const height = useSharedValue(0)
  const opacity = useSharedValue(0)

  useEffect(() => {
    if(isOpen) {
      scale.value = withTiming(1, {duration: 300})
      top.value = withTiming(16, {duration: 400})
      right.value = withTiming(20, {duration: 400})
      width.value = withTiming(300, {duration: 400})
      height.value = withTiming(200, {duration: 400})
      opacity.value = withSequence(withTiming(0, {duration: 250}), withTiming(1, {duration: 100}))
    } else {
      scale.value = withTiming(0, {duration: 700}, () => {runOnJS(setModal)(false)})
      top.value = withTiming(16, { duration: 400});
      right.value = withTiming(20, { duration: 400});
      width.value = withTiming(0, { duration: 400});
      height.value = withTiming(0, { duration: 400});
      opacity.value = withTiming(0, { duration: 200});
    }
  }, [isOpen])

  const customeStyles = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
    top: top.value,
    right: right.value,
    maxWidth: width.value,
    maxHeight: height.value,
  }))

  const customeHideStyles = useAnimatedStyle(() => ({
    opacity: opacity.value
  }))
  
  const resetAlert = () => {
    Alert.alert(
      '',
      `${translations.alertReseteScores.find(i => i.lenguage === lenguage)?.text}`,
      [
        {
          text: `${translations.cancel.find(i => i.lenguage === lenguage)?.text}`,
          onPress: () => setModal(false),
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
    let playersCopy = [...players] || []
    
    playersCopy.forEach(player => {
      player.points = 0
    })

    setPlayers(playersCopy)
    setModal(false)
  }

  return (
    <View style={styles.generalContainer}>
      <Animated.View style={[styles.container, customeStyles]}>
        <Animated.View style={[customeHideStyles]}>
          <View style={styles.rowLine}>
            <Text style={styles.text} onPress={() => setLenguageView(!lenguageView)}>{translations.lenguage.find(i => i.lenguage === lenguage)?.text}</Text>
            <Icon 
              name='closecircleo'
              size={24}
              onPress={() => setIsOppen(false)}
              style={styles.icon}
              />
          </View>

          {lenguageView && 
            <View style={styles.lenguagesContainer}>
              <Text onPress={() => setLenguage("es")} style={[styles.textLenguage, lenguage === "es" ? styles.bgGrey : {}]}>Español</Text>
              <Text onPress={() => setLenguage("en")} style={[styles.textLenguage, lenguage === "en" ? styles.bgGrey : {}]}>English</Text>
            </View>
          }

          <Text style={styles.text} onPress={() => resetAlert()}>{translations.reseteScores.find(i => i.lenguage === lenguage)?.text}</Text>
          <Text style={styles.text} onPress={() => {setModalEditPlayers(true), setModal(false)}}>{translations.editPlayers.find(i => i.lenguage === lenguage)?.text}</Text>
          <Text style={styles.text} onPress={() => {setModalRules(true), setModal(false)}}>{translations.rules.find(i => i.lenguage === lenguage)?.text}</Text>
        </Animated.View>
      </Animated.View>

      <TouchableOpacity style={styles.transparentView} activeOpacity={0} onPress={()=> setModal(false)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  generalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: Dimensions.get("window").height - Constants.statusBarHeight - 60,
    width: Dimensions.get("window").width
  },
  container: {
    position: "absolute",
    zIndex: 1,
    top: 16,
    right: 20,
    backgroundColor: theme.color.white,
    padding: 8,
    borderRadius: 10,
    borderColor: theme.color.black,
    borderWidth: 1,
    gap: 8
  },
  transparentView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent"
  },
  text: {
    fontSize: theme.fontSize.F24,
    alignSelf: "flex-start"
  },
  textLenguage: {
    fontSize: theme.fontSize.F20,
    width: "100%",
    textAlign: "center"
  },
  lenguagesContainer: {
    borderWidth: 0.5,
    borderColor: theme.color.black,
  },
  rowLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bgGrey: {
    backgroundColor: theme.color.softGrey
  },
  icon: {
    top: -4
  }
})