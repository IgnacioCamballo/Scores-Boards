import { useContext } from "react"
import ClassicContext from "@/games/classicScores/context/ClassicProvider"


const useClassic = () => {
  return useContext(ClassicContext)
}

export default useClassic