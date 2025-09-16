import React from 'react'
import { StyleSheet, View } from 'react-native'

import useFarkle from '@/games/farkle/hooks/useFarkle'

import Players from '@/games/farkle/components/organisms/Players'
import ModalPlayer from '@/games/farkle/components/molecules/ModalPlayer'

export default function Farkle() {
  const { playerModal, setPlayerModal } = useFarkle()
  
  return (
    <View style={styles.container}>
      {/* players scores */}
      <Players />

      {playerModal && <ModalPlayer setModal={setPlayerModal}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center"
  }
})