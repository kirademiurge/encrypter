import { Crypter } from '@/widgets/crypter'
import { ThemeProvider } from './provider/theme'
import { TypographyH1 } from '@/shared/ui/typography'
import './styles/index.css'

export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className='container mb-5'><TypographyH1>Encrypter</TypographyH1></div>
      <Crypter />
    </ThemeProvider>
  )
}
