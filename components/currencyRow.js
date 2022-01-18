import React from 'react'
import { Input, Select, Box, useColorModeValue, Container } from '@chakra-ui/react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    <Container>
        <Box 
            borderRadius="lg" 
            bg={useColorModeValue('#94d2bd', '#008080')} 
            p={3} 
            mb={6} 
            mt={6}
            align="center"
        >
            <Input 
                type="number" 
                className="input" 
                value={amount} 
                onChange={onChangeAmount} 
            />
        </Box>
        <Box
            borderRadius="lg" 
            bg={useColorModeValue('#94d2bd', '#008080')} 
            align="center" 
            p={3} 
            mb={6} 
            mt={6}
        >
            <Select 
                value={selectedCurrency} 
                onChange={onChangeCurrency}
            >
                {currencyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
                ))}
            </Select>
        </Box>
    </Container>
  )
}