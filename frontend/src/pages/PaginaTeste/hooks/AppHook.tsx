import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";


export const useAppHook = () => {
  return useContext(AppContext);
};