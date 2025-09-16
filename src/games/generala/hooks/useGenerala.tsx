import { useContext } from "react"
import GeneralaContext from "@/games/generala/context/GeneralaProvider"


const useGenerala = () => {
  return useContext(GeneralaContext)
}

export default useGenerala