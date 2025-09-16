import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput, Modal } from 'react-native'
import Constants from "expo-constants"
import Icon from 'react-native-vector-icons/AntDesign'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useFarkle from '@/games/farkle/hooks/useFarkle'
import { PlayerType } from '@/types'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import Button from '@/components/atoms/Button'

type ModalPlayerProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalPlayer({setModal}: ModalPlayerProps) {
  const {players, setPlayers, setPlayerModal} = useFarkle()
  const {lenguage} = useGeneralHooks()

  const [name, setName] = useState("")

  const addPlayer = () => {
    const playersCopy = [...players || []]

    const newPlayer: PlayerType = {
      key: new Date().getTime(),
      name: name,
      points: 0
    }

    playersCopy.push(newPlayer)
    setPlayers(playersCopy)
    setPlayerModal(false)
  }

  return (
    <Modal
      visible={true}
      transparent={true}
      onRequestClose={() => setModal(false)}
      animationType='none'
    >
      <View style={styles.generalContainer}>
        <TouchableOpacity style={styles.blackBackGround} activeOpacity={0} onPress={()=> setModal(false)}/>
        
        <View style={styles.container}>
          <Icon 
            name='closecircleo'
            size={28}
            onPress={() => setModal(false)}
            style={styles.icon}
          />

          <Text style={styles.name}>{translations.name.find(i => i.lenguage === lenguage)?.text}:</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={setName}
            value={name}
            maxLength={20}
            placeholder={translations.insertName.find(i => i.lenguage === lenguage)?.text}
            placeholderTextColor={theme.color.grey}
          />

          <Button color={theme.color.title} press={() => addPlayer()} disabled={name === ""}>
            <Text style={styles.textButton}>{translations.addPlayer.find(i => i.lenguage === lenguage)?.text}</Text>
          </Button>
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
    padding: 8,
    borderRadius: 10,
    borderColor: theme.color.black,
    borderWidth: 1,
    gap: 12,
    marginBottom: 80 //it moves the modal up so it looks better
  },
  blackBackGround: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: Dimensions.get("window").height - Constants.statusBarHeight -70,
    backgroundColor: theme.color.black,
    opacity: 0.5
  },
  icon: {
    alignSelf: "flex-end",
    marginBottom: -28,
    zIndex: 1
  },
  name: {
    fontSize: theme.fontSize.F28,
  },
  textInput: {
    width: 280,
    fontSize: theme.fontSize.F28,
    textAlign: "right",
    textAlignVertical: "bottom",
    borderColor: theme.color.grey,
    borderWidth: 1,
    paddingBottom: 2,
    paddingHorizontal: 8
  },
  textButton: {
    fontSize: theme.fontSize.F24,
    fontWeight: "500"
  }
})
