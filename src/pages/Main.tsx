import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants"
import Icon from 'react-native-vector-icons/AntDesign'

import * as Font from 'expo-font';
import useFarkle from '../hooks/useFarkle'
import theme from '../theme/theme'
import translations from "../lenguage/lenguage.json"
import Players from '../components/organisms/Players'
import ModalMenu from '../components/molecules/ModalMenu'
import ModalPlayer from '../components/molecules/ModalPlayer'
import ModalEditPlayers from '../components/molecules/ModalEditPlayers'
import ModalRules from '../components/molecules/ModalRules'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'


export default function Main() {
  const { playerModal, setPlayerModal, setWhosOpen, lenguage, addsInitialized } = useFarkle()

  const [modalMenu, setModalMenu] = useState(false)
  const [modalEditPlayers, setModalEditPlayers] = useState(false)
  const [modalRules, setModalRules] = useState(false)

  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'Lakki': require('../../assets/fonts/LakkiReddy-Regular.ttf')
      })
      setFontLoaded(true)
    }
    loadFont()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, fontLoaded && {fontFamily: "Lakki"}]}>{translations.title.find(i => i.lenguage === lenguage)?.text}</Text>
      
      <Players />

      {addsInitialized && (
        <View style={styles.publicidad}>
        <BannerAd 
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          unitId={theme.adds.banner}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true
          }}
          />
        </View>
      )}

      <Icon 
        name='bars'
        color={theme.color.white}
        size={32}
        style={styles.menuIcon}
        onPress={() => {setModalMenu(true), setWhosOpen(0)}}
      />

      {modalMenu === true && <ModalMenu modal={modalMenu} setModal={setModalMenu} setModalRules={setModalRules} setModalEditPlayers={setModalEditPlayers}/>}

      {playerModal && <ModalPlayer setModal={setPlayerModal}/>}

      {modalEditPlayers && <ModalEditPlayers setModalEditPlayers={setModalEditPlayers}/>}

      {modalRules && <ModalRules setModal={setModalRules}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - Constants.statusBarHeight,
    alignItems: "center",
    backgroundColor: theme.color.base,
    alignContent: "center",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 60,
    height: 80,
    color: theme.color.title
  },
  publicidad: {
    height: 60, 
    width: "100%", 
    backgroundColor: theme.color.white,
    position: "relative",
    bottom: 0
  },
  menuIcon: {
    position: "absolute",
    top: 16,
    right: 20
  }
})