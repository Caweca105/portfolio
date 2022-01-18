import {
    Container,
    Badge,
    List,
    ListItem,
  } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Currency from '../../components/currency'


const CurrencyConverter = () => (
    <Layout title="CurrencyConverter">
    <Container>
      <Title>
        Currency Converter <Badge>2022</Badge>
      </Title>
      <P>
        This is a currency real-converter, it fetches an API and converts in real-time the currency intended.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Next.js, React.js, Chakra UI</span>
        </ListItem>
      </List>

      <Currency />

    </Container>
  </Layout>
)

export default CurrencyConverter