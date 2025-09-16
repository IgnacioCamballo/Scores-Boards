import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'
import Constants from "expo-constants"
import Icon from 'react-native-vector-icons/AntDesign'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useGenerala from '@/games/generala/hooks/useGenerala'
import { PlayerGeneralaType, PlayerType } from '@/types'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import Button from '@/components/atoms/Button'
import TextInputEdit from '@/components/atoms/TextInputEdit'
import ModalPlayer from '@/games/generala/components/molecules/ModalPlayer'

export default function Generala() {
  const navigate = useNavigate()
  const { players, playerModal, setPlayers, setPlayerModal } = useGenerala()
  const { lenguage } = useGeneralHooks()

  const [playersList, setPlayersList] = useState(players)

  useEffect(() => {
    const hasScore = players.some(player =>
      Object.values(player.scores).some(score => score !== 0)
    );
    if (hasScore) {
      navigate('/generala/play');
    }
  }, [players]);
  

  useEffect(() => {
    setPlayers(playersList)
  }, [playersList])

  //alert to confirm player deletion
  const deletePlayerAlert = (player: PlayerType | PlayerGeneralaType) => {
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
            setPlayersList(filteredPlayers)
          },
          style: 'cancel'
        },
      ],
    )
  }
  
  //alert if trying to start game with less than 2 players
  const minimumAlert = () => {
    Alert.alert(
      '',
      `${translations.minimumScores.find(i => i.lenguage === lenguage)?.text}`,
      [
        {
          text: 'OK',
          style: 'cancel'
        },
      ],
    )
  }

  return (
    <View style={styles.playersContainer}>
      {players?.map(player =>
        <View style={styles.player} key={player.key}>
          <View style={styles.insidePlayer}>
            <TextInputEdit player={player} players={players} setPlayers={setPlayers}/>

            <Button press={() => deletePlayerAlert(player)} color={theme.color.redDelete} style={styles.buttonDelete}>
              <Icon
                name="delete"
                color={theme.color.black}
                size={18}
              />

              <Text>{translations.delete.find(i => i.lenguage === lenguage)?.text}</Text>
            </Button>
          </View>
        </View>
      )}

      {/* opens the modal to add a player */}
      <Button press={() => setPlayerModal(true)} color={theme.color.white} style={styles.button} width={240}>
        <Text style={styles.text}>{translations.addPlayer.find(i => i.lenguage === lenguage)?.text}</Text>
      </Button>

      {/* starts the game */}
      <Button 
        //disabled={players.length < 2} 
        press={() => (players.length < 2 ? minimumAlert() : navigate('/generala/play'))} 
        color={players.length < 2 ? theme.color.softGrey : theme.color.white} 
        style={styles.button} 
        width={240}
      >
        <Text style={[styles.text, { color: players.length < 2 ? theme.color.darkGrey : theme.color.black }]}>{translations.startGame.find(i => i.lenguage === lenguage)?.text}</Text>
      </Button>

      { playerModal && <ModalPlayer /> }
    </View>

  )
}

const styles = StyleSheet.create({
  playersContainer: {
    flexGrow: 1,
    padding: 16
  },
  player: {
    backgroundColor: theme.color.softGrey,
    borderColor: theme.color.black,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10
  },
  insidePlayer: {
    height: 48,
    padding: 4,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: "space-between"
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
    borderRadius: 12,
    marginTop: 32
  },
  buttonDelete: {
    flexDirection: "row",
    gap: 4,
    height: 30,
    alignSelf: "center"
  }
})