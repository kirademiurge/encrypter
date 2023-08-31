import { Crypter } from "@/widgets/crypter"
import { ThemeProvider } from "./provider/theme"
import "./styles/index.css"

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl container my-5">Encrypter</h1>
      <Crypter />
    </ThemeProvider>
  )
}
