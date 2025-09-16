import { useContext } from "react";
import TrucoContext from "@/games/truco/context/TrucoProvider";

const useTruco = () => {
  return useContext(TrucoContext)
}

export default useTruco