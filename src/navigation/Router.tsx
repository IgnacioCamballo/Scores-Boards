import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes, useLocation } from 'react-router-native'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import translations from "@/lenguage/lenguage.json"
import GameLayout from '@/components/organisms/GameLayout'

              //Game selection page
import GameSelect from '@/navigation/pages/GameSelect'
import ModalMenuGeneral from '@/components/molecules/ModalMenuGeneral'

              //Classic score
import { ClassicProvider } from '@/games/classicScores/context/ClassicProvider'
import ModalMenuClassic from '@/games/classicScores/components/molecules/ModalMenuClassic'
import Classic from '@/games/classicScores/pages/Classic'
import EditPlayerClassic from '@/games/classicScores/pages/EditPlayerClassic'

              //Farkle
import { FarkleProvider } from '@/games/farkle/context/FarkleProvider'
import ModalMenuFarkle from '@/games/farkle/components/molecules/ModalMenuFarkle'
import Farkle from '@/games/farkle/pages/Farkle'
import EditPlayersFarkle from '@/games/farkle/pages/EditPlayersFarkle'
import RulesFarkle from '@/games/farkle/pages/RulesFarkle'

              //Generala
import { GeneralaProvider } from '@/games/generala/context/GeneralaProvider'
import ModalMenuGenerala from '@/games/generala/components/molecules/ModalMenuGenerala'
import Generala from '@/games/generala/pages/Generala'
import GeneralaPlay from '@/games/generala/pages/GeneralaPlay'
import GeneralaRules from '@/games/generala/pages/GeneralaRules'

              //Truco
import { TrucoProvider } from '@/games/truco/context/TrucoProvider'
import Truco from '@/games/truco/pages/Truco'
import ModalMenuTruco from '@/games/truco/components/molecules/ModalMenuTruco'
import TrucoRules from '@/games/truco/pages/TrucoRules'

export default function Router() {
  const { lenguage } = useGeneralHooks()
  const { pathname } = useLocation()

  return (
    <View style={styles.containerGeneral}>
      <Routes>
        <Route element={
          <GameLayout               
            title={translations.generalTitle.find(i => i.lenguage === lenguage)?.text}
            fontSize={32}
            menuModal={<ModalMenuGeneral/>}

          />
        }>  
          <Route path="/" element={<GameSelect />}/>
        </Route>
        
        <Route element={
          <ClassicProvider>{/* elements inside specific provider so it doesnt load all providers in all pages */}
            <GameLayout               
              title={translations.classicScore.find(i => i.lenguage === lenguage)?.text}
              menuModal={<ModalMenuClassic/>}
            />
          </ClassicProvider>
        }>
          <Route path='/classic' element={<Classic />} />
          <Route path='/classic/playersEdit' element={<EditPlayerClassic />} />
        </Route>

        <Route element={
          <FarkleProvider>
            <GameLayout 
              title={translations.titleFarkle.find(i => i.lenguage === lenguage)?.text}
              menuModal={<ModalMenuFarkle/>}
            />
          </FarkleProvider>
        }>
          <Route path='/farkle' element={<Farkle/>}/>
          <Route path='/farkle/playersEdit' element={<EditPlayersFarkle/>}/>
          <Route path='/farkle/rules' element={<RulesFarkle/>}/>
        </Route>

        <Route element={
          <GeneralaProvider>
            <GameLayout               
              title={translations.titleGenerala.find(i => i.lenguage === lenguage)?.text}
              menuModal={<ModalMenuGenerala/>}
              contentStyle={[
                {padding: 0}, 
                (pathname.endsWith("rules")) && {padding: 10},
                (pathname === "/generala/play") && {overflow: "hidden"}
              ]}
            />
          </GeneralaProvider>
        }>
          <Route path='/generala' element={<Generala />}/>
          <Route path='/generala/play' element={<GeneralaPlay />}/>
          <Route path='/generala/:from/rules' element={<GeneralaRules />}/> {/* from indicates the origin of the navigation, 0 is generala, 1 is generala/play */}
        </Route>

        <Route element={
          <TrucoProvider>
            <GameLayout
              title={translations.titleTruco.find(i => i.lenguage === lenguage)?.text}
              menuModal={<ModalMenuTruco />}
              contentStyle={{justifyContent: 'center', alignItems: 'center'}} // centers the content of the page

            />
          </TrucoProvider>
        }>
          <Route path='/truco' element={<Truco/>}/>
          <Route path='/truco/rules' element={<TrucoRules/>}/>
        </Route>
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create ({
  containerGeneral: { 
    flexGrow: 1
  }
})