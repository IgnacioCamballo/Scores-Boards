import React from 'react'
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native'

import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"
import useGeneralHooks from '@/hooks/useGeneralHooks'

import ButtonGame from '@/components/atoms/ButtonGame'

export default function GameSelect() {
  const {lenguage} = useGeneralHooks()

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.containerGeneral}>
        <ButtonGame 
          link="/classic"
          title={translations.classicScore.find(i => i.lenguage === lenguage)?.text!}
          //img has to go inside require to make <Image work properly inside ButtonGame
          img={require("@/../assets/games/classicScore.png")}
        />
        <ButtonGame 
          link="/farkle"
          title={translations.titleFarkle.find(i => i.lenguage === lenguage)?.text!}
          img={require("@/../assets/games/farkle.png")}
        />
        <ButtonGame 
          link="/generala"
          title={translations.titleGenerala.find(i => i.lenguage === lenguage)?.text!}
          img={require("@/../assets/games/generala.png")}
        />
        <ButtonGame 
          link="/truco"
          title={translations.titleTruco.find(i => i.lenguage === lenguage)?.text!}
          img={require("@/../assets/games/truco.png")}
        />
      </View>
    </ScrollView>
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
  button: {
    width: Dimensions.get("window").width * 0.35,
    height: 150,
    backgroundColor: theme.color.grey,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
})