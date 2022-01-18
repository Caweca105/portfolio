import {
    Container,
    Heading,
    Box,
    UnorderedList,
    ListItem,
    List
  } from '@chakra-ui/react'
  import { Meta } from '../components/work'
  import Paragraph from '../components/paragraph'
  import Layout from '../components/layouts/article'
  import Section from '../components/section'

  const Next = () => {
    return (
      <Layout title="What's Next?">
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
                          I am always trying to improve and to keep myself updated. In order to do so, and to demonstrate it, I decided to write here my ideas to improve my site.
                      </Paragraph>

                      <Paragraph>
                          They'll be in an unordered list, so I can keep some flexiblity in this project. If there's any feedback or suggestions, I'll appreciate if you could reach out to me. 
                      </Paragraph>

                    <List ml={4} my={4}>
                        <ListItem>
                        <Meta>Last updated</Meta>
                        <span>17th, January 2022</span>
                        </ListItem>
                    </List>

                      <Heading as="h3" variant="section-title">
                          What I want to improve/modify to this site?
                      </Heading>
                      
                      <Paragraph>
                      <UnorderedList spacing={2}>
                        <ListItem>Redo my form</ListItem>
                        <ListItem>Redo the photos showcasing my projects</ListItem>
                        <ListItem>A toast popup to appear when the submission is a success</ListItem>
                        </UnorderedList>
                      </Paragraph>

                      <Heading as="h3" variant="section-title">
                          What I want to add to this site?
                      </Heading>

                      <Paragraph>
                      <UnorderedList spacing={2}>
                        <ListItem>A blog</ListItem>
                        <ListItem>Codecademy projects</ListItem>
                        <ListItem>FreeCodeCamp projects</ListItem>
                        <ListItem>Other projects that I've done</ListItem>
                        <ListItem>What technologies I am currently using</ListItem>
                        <ListItem>In mobile, when slide right to left, the sidebar/menu will show</ListItem>
                        </UnorderedList>
                      </Paragraph>
                  </Section>
              </Box>
          </Container>
      </Layout>
    )
  }

  export default Next