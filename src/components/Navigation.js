import React from 'react'

import { Flex, Box, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const Navigation = ({ goto, label }) => {
  const history = useHistory()

  return (
    <Flex w="100%">
      <Box d="flex" justifyContent="flex-end" alignItems="center" p="2" w="100%">
        <Button
          onClick={() => {
            history.push(goto)
          }}
          mt={4}
          colorScheme="teal"
          type="submit"
        >
          {label}
        </Button>
      </Box>
    </Flex>
  )
}

export default Navigation
