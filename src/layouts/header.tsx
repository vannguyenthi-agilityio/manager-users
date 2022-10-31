import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

interface TypeProp {
  title: string
}

const Header: React.FC<TypeProp> = ({ title }) => {
  return (
    <Flex mt={5} minWidth='max-content' justifyContent='center' height='100%'>
      <Heading size='md'>{title}</Heading>
    </Flex>
  )
}

export default Header
