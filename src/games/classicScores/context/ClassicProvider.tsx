import React, { createContext, useEffect, useState } from 'react'
import { ClassicContextProps, PlayerType } from '@/types'
import AsyncStorage from '@react-native-async-storage/async-storage'

import useGeneralHooks from '@/hooks/useGeneralHooks'

interface props {
  children: JSX.Element | JSX.Element[]
}

const ClassicContext = createContext<ClassicContextProps>({} as ClassicContextProps)

const ClassicProvider = ({children}: props) => {
  const {lenguage} = useGeneralHooks()

  const [playerModal, setPlayerModal] = useState(false)
  const [players, setPlayers] = useState<PlayerType[]>([
    { key: 1, name: lenguage === "es" ?  'Jugador 1' : 'Player 1', points: 0 },
    { key: 2, name: lenguage === "es" ?  'Jugador 2' : 'Player 2', points: 0 }
  ])

  const getPlayersStorage = async () => {
    try {
      const storagedPlayers = await AsyncStorage.getItem('classicPlayers')
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
    AsyncStorage.setItem("classicPlayers", JSON.stringify(players))
  }, [players])
  
  return (
    <ClassicContext.Provider value={{
      players,
      playerModal,
      setPlayers,
      setPlayerModal
    }}>
      {children}
    </ClassicContext.Provider>
  )
}

export { ClassicProvider }

export default ClassicContext