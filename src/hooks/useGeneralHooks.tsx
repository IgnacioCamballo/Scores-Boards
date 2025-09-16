import { useContext } from "react"
import GeneralContext from "@/context/GeneralProvider"


const useGeneralHooks = () => {
  return useContext(GeneralContext)
}

export default useGeneralHooks