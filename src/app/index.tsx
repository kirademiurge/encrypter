import { HomePage } from "@/pages"
import { ReatomProvider, ThemeProvider } from "./provider"
import "./styles/index.css"

export const App = () => {
  return (
    <ReatomProvider>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <HomePage />
      </ThemeProvider>
    </ReatomProvider>
  )
}
