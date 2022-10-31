import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from '../layouts/layout'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CHAKRA_THEME } from '../themes/chakra'

const App = ({ Component, pageProps }: AppProps) => {
  const clientQuery = new QueryClient()
  return (
    <QueryClientProvider client={clientQuery}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider  theme={CHAKRA_THEME}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
