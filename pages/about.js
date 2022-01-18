import {
  Container,
  Heading,
  Button,
  Icon,
  Box,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import {
    IoLogoInstagram,
    IoLogoLinkedin
  } from 'react-icons/io5'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const About = () => (
    <Layout title="About me">
        <Container>
            <Box flexgrow={1}>
                <Heading as="h2" variant="page-title">
                    About me
                </Heading>

                <Accordion allowToggle allowMultiple>

                <Section delay={0.2}>
                        <AccordionItem>
                                <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            <Heading as="h3" variant="section-title">
                                                Who am I?
                                            </Heading>
                                        </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Paragraph>
                                    I've been working since my 20th anniversary. I've always wished to get into a technological area, but never did and after Covid hit my businesses I decided to do a leap of faith and embrace coding. I may be new to this, but I'm willing to learn and to give it my all.
                                </Paragraph>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                                <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            <Heading as="h3" variant="section-title">
                                            What am I like?
                                            </Heading>
                                        </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Paragraph>
                                I'm an outgoing person, extroverted and technologically savvy.
                                I like to be humorous and to make others laugh. 
                                If you didn't know anything about me, you would know that I love Pokemon!
                                I also enjoy movies, books, videogames and everything that has a good story in it.
                                Photography, although, really amateur/beginner/wannabe in it.
                                </Paragraph>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                                <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            <Heading as="h3" variant="section-title">
                                            What am I looking for?
                                            </Heading>
                                        </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Paragraph>
                                As I've only been in controlled environments I would like to get some real experience in front and in back-end, after that I'll decide what I enjoy the most.
                                I also have a crush on Cybersecurity, although, first I would prefer to become more experienced with coding and after that, maybe I will dedicate myself more to it.
                                </Paragraph>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                                <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            <Heading as="h3" variant="section-title">
                                                What I've done at Bytes4Future?
                                            </Heading>
                                        </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Paragraph>
                                    For 10 weeks I took part in the intensive programming Boot Camp of Bytes4Future. In this program I learned to write JavaScript (ES6) code, I also learned the basis of topics such as Object Oriented Programming, Data Structures, Algorithms, Functional Programming and Basic Software Principles.
                                </Paragraph>

                                <Paragraph>
                                    Starting from the HTML and CSS base acquired in the PowerUp stage of Bytes4Future, I learned to develop interfaces using the declarative model, more specifically, using React. I also learned what Redux is all about.
                                    I learned how to use JavaScript in the back end using NodeJS to run JavaScript code outside the browser. I developed REST APIs using Express and had my first chance to play with Web Sockets.
                                </Paragraph>

                                <Paragraph>
                                    To store application data, I learned how to use files, most of the time to store JSON objects. I also learned to work with MongoDB and learned the basics of SQL.
                                    During the development of projects I used Git and GitHub to manage source code versions.
                                </Paragraph>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                                <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            <Heading as="h3" variant="section-title">
                                            Disclaimer
                                            </Heading>
                                        </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Paragraph>
                                    My native language is not English, as such I may have done a few typos or got wrong some verbal constructions. If you spot one of those, please reach out to me, thank you in advance.

                                    This site was done by using Next.js, three.js and chakra-ui.
                                </Paragraph>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                                <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            <Heading as="h3" variant="section-title">
                                                Thank you
                                            </Heading>
                                        </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Paragraph>
                                    I want to thank to my dear friend Fernanda, who made the 3D model of Vaporeon at my request. 
                                    <Link href="https://www.instagram.com/lomiartwork/" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoInstagram} />}
                                    >
                                        @lomiartwork
                                    </Button>
                                    </Link>
                                </Paragraph>

                                <Paragraph>
                                    I would also like to thank 
                                    <Link href="https://www.linkedin.com/in/daniel-barreiras/" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoLinkedin} />}
                                    >
                                        Daniel Barradas
                                    </Button>
                                    </Link>
                                    and 
                                    <Link href="https://www.linkedin.com/in/ricardojjustino/" target="_blank">
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<Icon as={IoLogoLinkedin} />}
                                    >
                                        Ricardo Justino
                                    </Button>
                                    </Link> 
                                    for their valuable inputs, that made me improve my site!
                                </Paragraph>
                            </AccordionPanel>
                        </AccordionItem>
                </Section>
                </Accordion>
            </Box>
        </Container>
    </Layout>
)

export default About