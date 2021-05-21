import React from 'react'
import { Container } from '@chakra-ui/react'
import { Flex, Heading, Box } from '@chakra-ui/react'

const MainLayout = ({ children }) => {
  return (
    <Container maxW="container.lg">
      <Flex>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          d="flex"
          alignItems="center"
          justifyContent="center"
          p="2"
          w="100%"
          h="50"
          style={{ marginBottom: 20 }}
        >
          <Heading size="md">Voting Dojo</Heading>
        </Box>
      </Flex>
      {children}
    </Container>
  )
}

export default MainLayout
