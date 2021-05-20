import App from 'next/app'
// import { createGlobalStyle, ThemeProvider } from 'styled-components'
// import 'fontsource-roboto';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     width: 100vw;
//   }
// `

const colors = {
  "brand": {
    "50": "#ECF9EC",
    "100": "#CAEDCB",
    "200": "#A7E1A9",
    "300": "#85D688",
    "400": "#63CA66",
    "500": "#41BE44",
    "600": "#349937",
    "700": "#277229",
    "800": "#1A4C1B",
    "900": "#0D260E"
  }
}

const theme = extendTheme({
  colors
})

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
              <ChakraProvider theme={theme}>
                <Component {...pageProps} />
              </ChakraProvider>
            </>
        );
    }
}