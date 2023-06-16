import { LocationModalContext } from "@/context/LocationModalContext";
import { useContext } from "react";

export const useLocationModalContext = () => {
    if (LocationModalContext) {
        return useContext(LocationModalContext)
    } else {
        throw new Error("LocationModalProvider is required");
    }
}