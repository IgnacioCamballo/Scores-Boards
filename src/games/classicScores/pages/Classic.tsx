import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import useClassic from '@/games/classicScores/hooks/useClassic'
import translations from "@/lenguage/lenguage.json"
import theme from '@/theme/theme'

import ClassicPlayer from '@/games/classicScores/components/molecules/ClassicPlayer'
import ModalPlayer from '@/games/classicScores/components/molecules/ModalPlayer'
import Button from '@/components/atoms/Button'

export default function Classic() {
  const {players, playerModal, setPlayerModal} = useClassic()
  const {lenguage} = useGeneralHooks()

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.containerGeneral}>
          {players.map(player => (
            <ClassicPlayer key={player.key} playerData={player} />
          ))}
        </View>

        {/* opens the modal to add a player */}
        <Button press={() => setPlayerModal(true)} color={theme.color.title} style={styles.button} width={240}>
          <Text style={styles.text}>{translations.addPlayer.find(i => i.lenguage === lenguage)?.text}</Text>
        </Button>

        {/* to give some space at the bottom of the scrollview */}
        <View style={{height: 40}}/>
      </ScrollView>
    
      {playerModal && <ModalPlayer setModal={setPlayerModal}/>}    
    </View>
  )
}

const styles = StyleSheet.create ({
  scrollView: {
    flex: 1,
    overflow: "hidden",
  },
  containerGeneral: { 
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 30,
    overflow: "hidden"
  },
  text: {
    fontSize: theme.fontSize.F24,
    fontWeight: '500'
  },
  button: {
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 40,
    shadowColor: theme.color.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5
  }
})