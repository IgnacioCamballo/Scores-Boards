import { useContext } from "react";
import FarkleContext from "../context/FarkleProvider";

const useFarkle = () => {
  return useContext(FarkleContext)
}

export default useFarkle