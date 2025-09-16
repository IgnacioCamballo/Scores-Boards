import React from "react"
import { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { TeamsType, TrucoContextProps } from "@/types"

interface props {
  children: JSX.Element | JSX.Element[]
}

const TrucoContext = createContext<TrucoContextProps>({} as TrucoContextProps)

const TrucoProvider = ({children}: props) => {
  const [scores, setScores] = useState<TeamsType>({teamA: 0, teamB: 0})

  const getPlayersStorage = async () => {
    try {
      const storagedPlayers = await AsyncStorage.getItem('trucoPlayers')
      if (storagedPlayers !== null) {
        const parsed = await JSON.parse(storagedPlayers)
        setScores(parsed)
      }
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    getPlayersStorage()
  }, [])


  useEffect(() => {
    AsyncStorage.setItem("trucoPlayers", JSON.stringify(scores))
  }, [scores])
  
  return (
    <TrucoContext.Provider
      value={{
        scores,
        setScores
      }}
    >
      {children}
    </TrucoContext.Provider>
  )
}

export { TrucoProvider }

export default TrucoContext