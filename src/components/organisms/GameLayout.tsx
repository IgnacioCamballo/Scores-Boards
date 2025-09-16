import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';

import useGeneralHooks from '@/hooks/useGeneralHooks';
import theme from '@/theme/theme';

import Adds from '@/components/atoms/Adds';
import ButtonMenu from '@/components/atoms/ButtonMenu';
import { Outlet, useLocation } from 'react-router-native';

type GameLayoutProps = {
  title?: string
  menuModal?: React.ReactNode,
  menuButtonActions?: () => void,
  fontSize?: number,
  contentStyle?: object
}

export default function GameLayout({title, menuModal, menuButtonActions, fontSize, contentStyle}: GameLayoutProps) {
  const {pathname} = useLocation()
  const { fontLoaded, modalMenu } = useGeneralHooks()

  return (
    <View style={styles.container}>
      {/* title of the game */}
      <Text style={[
        styles.titulo, 
        fontLoaded && {fontFamily: "Lakki"}, 
        (fontSize !== undefined && fontSize > 0) && {fontSize: fontSize, textAlignVertical: "bottom"}
      ]}>{title}</Text>

      {/* inside of the app */}
      <View 
        style={[
          styles.content, 
          (pathname.endsWith("rules") || pathname.startsWith("/classic")) && {backgroundColor: theme.color.white},
          contentStyle
        ]}
      >
        <Outlet />
      </View>

      {/* loads adds in the bottom */}
      <Adds bannerId={theme.adds.bannerFarkle}/>

      {/* top right menu icon, opens the menu, accepts actions for each menu button */}
      <ButtonMenu onPress={() => {
        if (menuButtonActions) menuButtonActions();
      }}/>

      {/* menu modal, it must be passed as a prop so each game can have its own menu, made with a base of ModalMenu.tsx */}
      {modalMenu && menuModal}

    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    height: Dimensions.get("window").height - Constants.statusBarHeight,
    alignItems: "center",
    backgroundColor: theme.color.base,
    alignContent: "center",
    justifyContent: "center",
    position: "relative"
  },
  titulo: {
    fontSize: 60,
    height: 80,
    color: theme.color.title
  },
  content: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
    backgroundColor: theme.color.playersBase,
    borderColor: theme.color.black,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 12,
    padding: 10
  }
})