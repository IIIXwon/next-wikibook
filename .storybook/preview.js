import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {themes} from '../src/themes'

export const parameters = {
  actions: {argTypeRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    textarea {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        transition: .25s;
        color: #000000;
    }

    ol, ul {
        list-style: none;
    }
`

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes}>
      <GlobalStyle/>
      <Story/>
    </ThemeProvider>
  )
]