import React from 'react'
import { useQuery } from 'react-query'
import { Flex, Box, Button, Heading } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import Navigation from '../components/Navigation'

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

  const history = useHistory()

  const vote = (value) => {
    fetch(`http://localhost:3000/poll/${pollId}`, {
      method: 'POST',
      body: JSON.stringify(value),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    history.push(`/poll/${pollId}/results`)
  }
  // const voteOption = () => {
  //   console.log('voting')
  // }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  const renderExtraQuestions = ({ poll: { thirdOption, fourthOption } }) => {
    return (
      <>
        {thirdOption && (
          <Button onClick={() => vote({ 'thirdOption.votes': 1 })} mt="2">
            {thirdOption.title}
          </Button>
        )}
        {fourthOption && (
          <Button onClick={() => vote({ 'fourthOption.votes': 1 })} mt="2">
            {fourthOption.title}
          </Button>
        )}
      </>
    )
  }

  return (
    <div>
      <Navigation label="Go back home" goto="/poll" />
      <Flex w="100%">
        <Box flexDirection="column" borderWidth="1px" borderRadius="lg" d="flex" p="5" w="100%">
          <Heading mb="2" size="md">
            {data.poll.question}
          </Heading>

          <Button onClick={() => vote({ 'firstOption.votes': 1 })} mt="2">
            {data.poll.firstOption.title}
          </Button>
          <Button onClick={() => vote({ 'secondOption.votes': 1 })} mt="2">
            {data.poll.secondOption.title}
          </Button>
          {renderExtraQuestions(data)}
        </Box>
      </Flex>
    </div>
  )
}

export default Poll
