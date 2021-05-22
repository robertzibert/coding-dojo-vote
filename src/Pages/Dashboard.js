import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { useQuery } from 'react-query'

import url from '../utils/getUrl'
import PollList from '../components/PollList'
import Navigation from '../components/Navigation'

const Dashboard = () => {
  const { isLoading, data: polls } = useQuery('polls', () =>
    fetch(`${url}/polls`).then((res) => {
      return res.json()
    })
  )
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <Navigation label="Create your own poll" goto="/poll/new" />
      <Flex w="100%">
        <Box borderWidth="1px" borderRadius="lg" d="flex" p="2" w="100%">
          <Flex w="100%">
            <Box flexDirection="column" d="flex" p="2" h="200" w="50%">
              <Heading mb="2" size="md">
                Top 3 polls
              </Heading>
              <PollList polls={polls.topThree} />
            </Box>
            <Box flexDirection="column" d="flex" p="2" w="50%">
              <Heading mb="2" size="md">
                Recent polls
              </Heading>
              <PollList polls={polls.recentPolls} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}

export default Dashboard
