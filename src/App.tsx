import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AppContext } from 'contexts'
import { Router } from './routes'
import { theme, ThemeType } from 'styles'

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  
  a {
    color:#000;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }
`

export const App: React.FC = () => {
  return (
    <AppContext>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <ToastContainer autoClose={1500} />

        <Router />
      </ThemeProvider>
    </AppContext>
  )
}
