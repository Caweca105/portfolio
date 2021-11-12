import { useState, useEffect } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  useToast
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Form() {
  const [success, setSuccess] = useState(false)
  const toast = useToast()
  let talkForm = document.querySelector("#contact form")

  talkForm.addEventListener('submit', e => {
    e.preventDefault()

    const formData = new FormData(talkForm)
    fetch(talkForm.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset-UTF-8',
        'Content-Type': 'application/x-www-form-urlenc;charset-UTF-8'
      },
      body: new URLSearchParams(formData).toString()
    })
    .then(res => {
      if (res) {
        alert('worked')
      }
    })
  })

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true)
    }
  }, [])

  return (
    <Layout>
      <Section delay={0.1}>
        <Container>
          <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', '#008080')} p={3} mb={6} align="center" >
                    If you wish to contact me, use the form below please
          </Box>

          <Heading as="h2" variant="contact-form" align="center">
            Contact Me
          </Heading>
        </Container>
      </Section>
        <Section delay={0.3}>
        <Container>
        <form 
        data-netlify="true" 
        name="contact-form" 
        method="POST" 
        >

        <input type='hidden' 
        name='contact-form'
        value='contact-form' 
        />

                <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', '#008080')} p={3} mb={6} align="center">
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input />
                  </FormControl>
                </Box>

                <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', '#008080')} p={3} mb={6} align="center">
                  <FormControl id="Company">
                    <FormLabel>Company</FormLabel>
                    <Input />
                  </FormControl>
                </Box>

                <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', '#008080')} p={3} mb={6} align="center">
                  <FormControl id="email" isRequired>
                    <FormLabel>Email adress</FormLabel>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                    />
                  </FormControl>
                </Box>

                <Box borderRadius="lg" bg={useColorModeValue('#94d2bd', '#008080')} p={3} mb={6} align="center">
                  <FormControl id="name" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea 
                      id="message" 
                      name="message"
                      size="lg"
                    />
                  </FormControl>
                </Box>

                  <Container align="center">
                    <Button 
                      type="Submit" 
                      rightIcon={<ChevronRightIcon />}
                      colorScheme="teal"
                      onClick={() => 
                        toast({
                          title: "Form sent",
                          description: "I've received your contact form. I'll reach out as soon as possible. Thank you",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        })
                      }
                    >
                      Submit
                    </Button>
                    {success && toast}
                  </Container>
              </form>
        </Container>
      </Section>
    </Layout>
  )
}