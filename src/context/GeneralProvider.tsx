import React, { createContext, useEffect, useState } from 'react'
import { GeneralContextProps } from '@/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MobileAds from "react-native-google-mobile-ads"
import * as Font from 'expo-font';

interface props {
  children: JSX.Element | JSX.Element[]
}

const GeneralContext = createContext<GeneralContextProps>({} as GeneralContextProps)

const GeneralProvider = ({children}: props) => {
  const [lenguage, setLenguage] = useState("es")
  const [addsInitialized, setAddsInitialized] = useState(false)
  // state for the menues, if its true it will render the modal for the specific game rendered on that moment
  const [modalMenu, setModalMenu] = useState(false)
  //fonts for the titles
  const [fontLoaded, setFontLoaded] = useState(false)
  
  //initialize adds
  useEffect(() => {
    const addsInit = async () => {
      try {
        await MobileAds().initialize()
        setAddsInitialized(true)
      } catch (error) {
        console.log(error)
      }
    }
    addsInit()
  }, [])
  
  //loads the font for the title
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'Lakki': require('@/../assets/fonts/LakkiReddy-Regular.ttf')
      })
      setFontLoaded(true)
    }
    loadFont()
  }, [])

  // Get the language from AsyncStorage when the app starts
  const getLenguageStorage = async () => {
    try {
      const storagedLenguage = await AsyncStorage.getItem('lenguage')
      if (storagedLenguage !== null) {
        const parsed = await JSON.parse(storagedLenguage)
        setLenguage(parsed)
      } else {
        setLenguage("es")
      }
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    getLenguageStorage()
  }, [])

  //saves the lenguage in the mobile storage when user change it
    useEffect(() => {
    AsyncStorage.setItem("lenguage", JSON.stringify(lenguage))
  }, [lenguage])

  return (
    <GeneralContext.Provider value={{
      lenguage,
      addsInitialized,
      modalMenu,
      fontLoaded,
      setLenguage,
      setModalMenu
    }}>
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralProvider }

export default GeneralContext