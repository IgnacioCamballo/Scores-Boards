import { useState, createContext, useEffect } from "react"
import { FarkleContextProps, PlayerType } from "../types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import MobileAds from "react-native-google-mobile-ads"

interface props {
  children: JSX.Element | JSX.Element[]
}

const FarkleContext = createContext<FarkleContextProps>({} as FarkleContextProps)

const FarkleProvider = ({children}: props) => {
  const [players, setPlayers] = useState<PlayerType[]>([])
  const [lenguage, setLenguage] = useState("es")
  const [playerModal, setPlayerModal] = useState(false)
  const [whosOpen, setWhosOpen] = useState(0)
  const [addsInitialized, setAddsInitialized] = useState(false)

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

  const getPlayersStorage = async () => {
    try {
      const storagedPlayers = await AsyncStorage.getItem('players')
      if (storagedPlayers !== null) {
        const parsed = await JSON.parse(storagedPlayers)
        setPlayers(parsed)
      }
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    getLenguageStorage()
    getPlayersStorage()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem("lenguage", JSON.stringify(lenguage))
  }, [lenguage])

  useEffect(() => {
    AsyncStorage.setItem("players", JSON.stringify(players))
  }, [players])

  return (
    <FarkleContext.Provider
      value={{
        players,
        playerModal,
        whosOpen,
        lenguage,
        addsInitialized,
        setPlayers,
        setPlayerModal,
        setWhosOpen,
        setLenguage
      }}
    >
      {children}
    </FarkleContext.Provider>
  )
}

export { FarkleProvider }

export default FarkleContext