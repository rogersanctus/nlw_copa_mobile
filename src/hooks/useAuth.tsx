import { useContext } from "react";
import { authContext, AuthContextDataProps } from "../contexts/AuthContext";

export const useAuth = () => useContext<AuthContextDataProps>(authContext)
