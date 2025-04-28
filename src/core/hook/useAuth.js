import { useContext } from "react";
import { AuthContext } from "../hook/AuthContext";

export const useAuth = () => useContext(AuthContext);
