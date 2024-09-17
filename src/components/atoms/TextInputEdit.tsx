import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import theme from '../../theme/theme'
import { PlayerType } from '../../types'
import useFarkle from '../../hooks/useFarkle'

type textInputEditProps = {
  player: PlayerType
}

export default function TextInputEdit({player}: textInputEditProps) {
  const {players, setPlayers} = useFarkle()

  const [newName, setNewName] = useState("") 

  function editPlayerName () {
    const copyPlayers = [...players]

    const index = players.findIndex(person => person.key === player.key)

    const newNamePlayer = {
      ...player,
      name: newName
    }

    copyPlayers.splice(index, 1, newNamePlayer)
    setPlayers(copyPlayers)
  }  

  return (
    <TextInput 
      onPress={() => setNewName(player.name)}
      onEndEditing={() => editPlayerName()}
      style={styles.name}
      placeholder={player.name}
      placeholderTextColor={theme.color.black}
      maxLength={15}
      value={newName}
      onChangeText={setNewName}
    />
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: theme.fontSize.F28,
    fontWeight: "400",
    width: 200
  }
})
