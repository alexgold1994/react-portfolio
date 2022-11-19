import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyles'
import { darkTheme, lightTheme } from './components/Themes'
import { AppRoutes } from './routing/AppRoutes'

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AppRoutes />
      </ThemeProvider>
      <GlobalStyle />
    </>
  )
}

export default App
