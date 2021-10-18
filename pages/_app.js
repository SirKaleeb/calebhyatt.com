import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'

const CannotSelectText = styled.div`
  user-select: none;
  --ms-user-select: none;
  --moz-user-select: none;
  --webkit-user-select: none;
`

function MyApp({ Component, pageProps, router }) {
  return (
    <CannotSelectText>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </CannotSelectText>
  )
}

export default MyApp
