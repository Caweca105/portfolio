import Head from 'next/head'
import Navbar from '../navbar.js'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import VaporeonLoader from '../vaporeon-loader'

const LazyVaporeon = dynamic(() => import('../vaporeon'), { 
    ssr: false, 
    loading: () => <VaporeonLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Diogo Lemos - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVaporeon />
                {children}
            </Container>
        </Box>
    )
}

export default Main