import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/nav.css"
import "../styles/footer.css"
import "../styles/corpsAccueil.css"

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
}

