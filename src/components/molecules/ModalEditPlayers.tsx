import React from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native'
import Constants from "expo-constants"
import Icon from 'react-native-vector-icons/AntDesign'

import useFarkle from '../../hooks/useFarkle'
import theme from '../../theme/theme'
import translations from "../../lenguage/lenguage.json"
import Button from '../atoms/Button'
import Player from '../organisms/Player'
import NamePointsLine from './NamePointsLine'
import TextInputEdit from '../atoms/TextInputEdit'
import { PlayerType } from '../../types'

type ModalPlayerProps = {
  setModalEditPlayers: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalEditPlayers({setModalEditPlayers}: ModalPlayerProps) {
  const {players, setPlayers, lenguage} = useFarkle()
  
  
  
  const deletePlayerAlert = (player: PlayerType) => {
    Alert.alert(
      '',
      `${translations.alertDeletePlayer.find(i => i.lenguage === lenguage)?.text} ${player.name}?`,
      [
        {
          text: `${translations.cancel.find(i => i.lenguage === lenguage)?.text}`,
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            const copyPlayers = [...players]
            const filteredPlayers = copyPlayers.filter(person => person.name !== player.name)
            setPlayers(filteredPlayers)
          },
          style: 'cancel'
        },
      ],
    )
  }  

  return (
    <View style={styles.generalContainer}>
      
      <View style={styles.container}>
        {players?.map(player => 
          <Player key={player.key}>
            <NamePointsLine>
              <TextInputEdit player={player}/>

              <Button press={() => deletePlayerAlert(player)} color={theme.color.redDelete} style={styles.buttonDelete}>
                <Icon
                  name="delete"
                  color={theme.color.black}
                  size={18}
                />

                <Text>{translations.delete.find(i => i.lenguage === lenguage)?.text}</Text>
              </Button>
            </NamePointsLine>
          </Player>
        )}

        <Button press={() => setModalEditPlayers(false)} color={theme.color.white} style={styles.button} width={240}>
          <Text style={styles.text}>{translations.finishEditing.find(i => i.lenguage === lenguage)?.text}</Text>
        </Button>
      </View>

      <TouchableOpacity style={styles.transparentBackGround} activeOpacity={0} onPress={()=> setModalEditPlayers(false)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  generalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: Dimensions.get("window").height - Constants.statusBarHeight - 60,
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
  container: {
    zIndex: 1,
    flexGrow: 1,
    width: Dimensions.get("window").width - 20, 
    backgroundColor: theme.color.playersBase,
    borderColor: theme.color.black,
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 80,
    marginBottom: 10,
    padding: 10,
  },
  transparentBackGround: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  text: {
    fontSize: theme.fontSize.F24,
    fontWeight: '500'
  },
  button: {
    alignSelf: "center",
    borderRadius: 12
  },
  buttonDelete: {
    flexDirection: "row",
    gap: 4,
    height: 30,
    alignSelf: "center"
  }
})
