import Logo from './logo'
import React from 'react'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    Button,
    useColorModeValue,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronRightIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return(
        <NextLink href={href} passHref>
            <Link
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            _target={_target}
            {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202390')}
        style={{backdropFilter: 'blur(10px'}}
        zIndex={1}
        {...props}
        >
            <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                direction={{base: 'column', md: 'row'}} 
                display={{base: 'none', md:'flex'}}
                width={{base: 'full', md:'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/next" path={path}>
                        What's Next?
                    </LinkItem>
                    <LinkItem href="/contacts" path={path}>
                        Contacts
                    </LinkItem>
                    <LinkItem
                        href="https://github.com/Caweca105/portfolio"
                        target="_blank"
                        rel="noreferrer"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu isLazy id="navbar-menu">
                        <HamburgerIcon 
                        ref={btnRef} 
                        colorScheme="teal" 
                        onClick={onOpen} 
                        />
                        <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Where do you want to go?</DrawerHeader>

                                <DrawerBody align="center">
                                <Box align="center" my={10} onClick={onClose}>
                                    <NextLink href="/" passHref>
                                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                            Home
                                        </Button>
                                    </NextLink>
                                </Box>
                                <Box align="center" my={10} onClick={onClose}>
                                    <NextLink href="/projects" passHref>
                                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                            Projects
                                        </Button>
                                    </NextLink>
                                </Box>
                                <Box align="center" my={10} onClick={onClose}>
                                    <NextLink href="/about" passHref>
                                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                            About
                                        </Button>
                                    </NextLink>
                                </Box>
                                <Box align="center" my={10} onClick={onClose}>
                                    <NextLink href="/next" passHref>
                                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                            What's Next?
                                        </Button>
                                    </NextLink>
                                </Box>
                                <Box align="center" my={10} onClick={onClose}>
                                    <NextLink href="/contacts" passHref>
                                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                            Contacts
                                        </Button>
                                    </NextLink>
                                </Box>
                                <Box align="center" my={10}>
                                    <Link
                                    href="https://github.com/Caweca105/portfolio"
                                    target="_blank"
                                    path={path}
                                    align="center"
                                    >
                                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                            <IoLogoGithub />
                                                View Source
                                        </Button>
                                    </Link>
                                </Box>

                                </DrawerBody>

                                </DrawerContent>
                            </Drawer>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar