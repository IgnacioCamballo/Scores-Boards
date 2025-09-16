import { useContext } from "react";
import FarkleContext from "@/games/farkle/context/FarkleProvider";

const useFarkle = () => {
  return useContext(FarkleContext)
}

export default useFarkle