import React from "react"
import { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { FarkleContextProps, PlayerType } from "@/types"

interface props {
  children: JSX.Element | JSX.Element[]
}

const FarkleContext = createContext<FarkleContextProps>({} as FarkleContextProps)

const FarkleProvider = ({children}: props) => {
  const [players, setPlayers] = useState<PlayerType[]>([])
  const [playerModal, setPlayerModal] = useState(false)
  const [whosOpen, setWhosOpen] = useState(0)

  const getPlayersStorage = async () => {
    try {
      const storagedPlayers = await AsyncStorage.getItem('farklePlayers')
      if (storagedPlayers !== null) {
        const parsed = await JSON.parse(storagedPlayers)
        setPlayers(parsed)
      }
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    getPlayersStorage()
  }, [])


  useEffect(() => {
    AsyncStorage.setItem("farklePlayers", JSON.stringify(players))
  }, [players])

  return (
    <FarkleContext.Provider
      value={{
        players,
        playerModal,
        whosOpen,
        setPlayers,
        setPlayerModal,
        setWhosOpen
      }}
    >
      {children}
    </FarkleContext.Provider>
  )
}

export { FarkleProvider }

export default FarkleContext