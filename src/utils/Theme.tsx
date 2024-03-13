import {
    createContext,
    CSSProperties,
    ReactNode,
    useState,
  } from "react"
  
  export type ThemeContextType = {
    style?: CSSProperties
    setStyle: (style?: CSSProperties) => void
  }
  
  export const ThemeContext = createContext<ThemeContextType>({
    setStyle: () => void null,
  })
  
  interface Props {
    children: ReactNode
  }
  
  export function ThemeProvider({ children }: Props) {
    const [style, setStyle] = useState<CSSProperties>()

    return (
      <ThemeContext.Provider value={{ style, setStyle }}>
        {children}
      </ThemeContext.Provider>
    )
  }
  