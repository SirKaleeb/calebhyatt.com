import type { NextPage } from 'next'
import Head from 'next/head'

import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caleb Hyatt</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as={'main'} bgColor={useColorModeValue('gray.200', 'gray.600')}>
        <Box h={'40vh'} w={'100vw'}>
          <Box
            h={'35vh'}
            w={'100vw'}
            backgroundImage={'url("/backsplash.jpg")'}
            backgroundSize={'cover'}
            zIndex={0}
          >
            <Text
              as={'b'}
              fontSize={'6xl'}
              position={'absolute'}
              top={'40%'}
              left={'50%'}
              transform={'translate(-50%, -50%)'}
            >
              Caleb Hyatt
            </Text>
          </Box>
          <Image
            src={'/me.png'}
            alt={'Me!'}
            rounded={'full'}
            w={'10vw'}
            boxShadow={'2xl'}
            zIndex={5}
            position={'absolute'}
            top={'90%'}
            left={'50%'}
            transform={'translate(-50%, -50%)'}
          />
        </Box>
      </Box>
    </>
  )
}

export default Home