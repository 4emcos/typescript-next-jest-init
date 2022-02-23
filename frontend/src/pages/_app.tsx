import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
