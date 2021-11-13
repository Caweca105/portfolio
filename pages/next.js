import {
    Container,
    Heading,
    Box,
    UnorderedList,
    ListItem
  } from '@chakra-ui/react'
  import Paragraph from '../components/paragraph'
  import Layout from '../components/layouts/article'
  import Section from '../components/section'

  const Next = () => {
    return (
      <Layout>
          <Container>
              <Box flexgrow={1}>
                  <Heading as="h2" variant="page-title">
                      What's next?
                  </Heading>

                  <Section delay={0.2}>
                      <Heading as="h3" variant="section-title">
                        My ideas to improve the site
                      </Heading>

                      <Paragraph>
                          I will describe what I want to improve or add to this site, as we should always try to improve and criticize our own work in order to be better each and every day.
                      </Paragraph>

                      <Heading as="h3" variant="section-title">
                          What I want to improve/modify to this site?
                      </Heading>
                      
                      <Paragraph>
                      <UnorderedList>
                        <ListItem>Redo my form</ListItem>
                        <ListItem>A toast popup to appear when the submission is a success</ListItem>
                        <ListItem>Change the 3D model being currently in use</ListItem>
                        </UnorderedList>
                      </Paragraph>

                      <Heading as="h3" variant="section-title">
                          What I want to add to this site?
                      </Heading>

                      <Paragraph>
                      <UnorderedList>
                        <ListItem>A blog</ListItem>
                        <ListItem>Codecademy projects</ListItem>
                        <ListItem>FreeCodeCamp projects</ListItem>
                        <ListItem>Other projects that I've done</ListItem>
                        </UnorderedList>
                      </Paragraph>
                  </Section>
              </Box>
          </Container>
      </Layout>
    )
  }

  export default Next