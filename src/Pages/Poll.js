import React from 'react'
import { useQuery } from 'react-query'
import { Flex, Box, Button, Heading } from '@chakra-ui/react'

import Navigation from '../components/Navigation'

const renderExtraQuestions = ({ poll: { thirdOption, fourthOption } }) => {
  return (
    <div>
      {thirdOption && <Button mt="2">{thirdOption.title}</Button>}
      {fourthOption && <Button mt="2">{fourthOption.title}</Button>}
    </div>
  )
}

const Poll = ({
  match: {
    params: { pollId }
  }
}) => {
  const { isLoading, data } = useQuery('poll', () =>
    fetch(`http://localhost:3000/poll/${pollId}`).then((res) => {
      return res.json()
    })
  )

  // const voteOption = () => {
  //   console.log('voting')
  // }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <Navigation label="Go back home" goto="/poll" />
      <Flex w="100%">
        <Box flexDirection="column" borderWidth="1px" borderRadius="lg" d="flex" p="5" w="100%">
          <Heading mb="2" size="md">
            {data.poll.question}
          </Heading>

          <Button mt="2">{data.poll.firstOption.title}</Button>
          <Button mt="2">{data.poll.secondOption.title}</Button>
          {renderExtraQuestions(data)}
        </Box>
      </Flex>
    </div>
  )
}

export default Poll
