import { createContext } from "react"


export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {


    return <ThemeContext.Provider value={{theme: "light"}}>{children}</ThemeContext.Provider>
}