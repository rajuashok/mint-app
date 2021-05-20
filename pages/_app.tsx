import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'fontsource-roboto';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
  }
`

const theme = {};

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
            </>
        );
    }
}