import React, { createContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { GeneralaContextProps, PlayerGeneralaType } from '@/types'

interface props {
  children: JSX.Element | JSX.Element[]
}

const GeneralaContext = createContext<GeneralaContextProps>({} as GeneralaContextProps)

const GeneralaProvider = ({children}: props) => {
  const [players, setPlayers] = React.useState<PlayerGeneralaType[]>([])
  const [playerModal, setPlayerModal] = React.useState(false)

  const getPlayersStorage = async () => {
    try {
      const storagedPlayers = await AsyncStorage.getItem('generalaPlayers')
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
    AsyncStorage.setItem("generalaPlayers", JSON.stringify(players))
  }, [players])
  
  return (
    <GeneralaContext.Provider value={{
      players,
      playerModal,
      setPlayers,
      setPlayerModal
    }}>
      {children}
    </GeneralaContext.Provider>
  )
}

export { GeneralaProvider }

export default GeneralaContext