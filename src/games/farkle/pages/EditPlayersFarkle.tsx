import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'
import Constants from "expo-constants"
import Icon from 'react-native-vector-icons/AntDesign'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useFarkle from '@/games/farkle/hooks/useFarkle'
import { PlayerType } from '@/types'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import Button from '@/components/atoms/Button'
import Player from '@/games/farkle/components/organisms/Player'
import NamePointsLine from '@/games/farkle/components/molecules/NamePointsLine'
import TextInputEdit from '@/components/atoms/TextInputEdit'

type EditPlayersFarkleProps = {

}

export default function EditPlayersFarkle({ }: EditPlayersFarkleProps) {
  const navigate = useNavigate()
  const { players, setPlayers } = useFarkle()
  const { lenguage } = useGeneralHooks()

  const [playersList, setPlayersList] = useState(players)

  useEffect(() => {
    setPlayers(playersList)
  }, [playersList])


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
            setPlayersList(filteredPlayers)
          },
          style: 'cancel'
        },
      ],
    )
  }

  return (
    <View>
      {playersList?.map(player =>
        <Player key={player.key}>
          <NamePointsLine>
            <TextInputEdit player={player} players={players} setPlayers={setPlayers}/>

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

      <Button press={() => navigate('/farkle')} color={theme.color.white} style={styles.button} width={240}>
        <Text style={styles.text}>{translations.finishEditing.find(i => i.lenguage === lenguage)?.text}</Text>
      </Button>
    </View>

  )
}

const styles = StyleSheet.create({
  generalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: Dimensions.get("window").height - Constants.statusBarHeight - 70,
    width: Dimensions.get("window").width,
    alignItems: "center",
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
