import React from 'react'
import {Preview} from '@storybook/react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {themes} from '../src/themes'
import * as NexImage from 'next/image'

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

const decorator = [
  (Story) => (
    <ThemeProvider theme={themes}>
      <GlobalStyle/>
      <Story/>
    </ThemeProvider>
  )
]
const OriginalNextImage = NexImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src}/>
  ) : (
    <OriginalNextImage {...props} unoptimized/>
  )
})