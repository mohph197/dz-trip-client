import { LocationsContext } from "@/context/LocationsContext"
import { useContext } from "react"

export const useLocationsContext = () => {
    if (LocationsContext) {
        return useContext(LocationsContext);
    } else {
        throw new Error("LocationsProvider is Required");
    }
}