import theme from '@/theme/theme'
import React from 'react'
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'

import useGenerala from '../hooks/useGenerala'

import FirstColumn from '@/games/generala/components/atoms/FirstColumn'
import PlayerColumn from '@/games/generala/components/atoms/PlayerColumn'

type GeneralaPlayProps = {

}

export default function GeneralaPlay({}: GeneralaPlayProps) {
  const {players} = useGenerala()

  return (
    <View style={styles.flex1}>
      <View style={styles.containerGeneral}>
        <FirstColumn />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          {players?.map(player =>
            <PlayerColumn key={player.key} player={player} />
          )}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  flex1: {
    width: "100%",
    height: "100%",
  },
  containerGeneral: { 
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row"
  },
  scrollView: {
    width: (Dimensions.get("window").width - 112)
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderColor: theme.color.grey,
  }
})