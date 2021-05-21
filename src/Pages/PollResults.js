import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useQuery } from 'react-query'
import { Flex, Box, Heading } from '@chakra-ui/react'

import Navigation from '../components/Navigation'

const formatData = ({ question, _id, createdAt, __v, ...options }) => {
  const optionsKeys = Object.keys(options)
  const labels = optionsKeys.map((key) => options[key].title)
  const data = optionsKeys.map((key) => options[key].votes)
  return {
    labels,
    datasets: [
      {
        label: '# of Votes',
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderWidth: 1
      }
    ]
  }
}

const Poll = ({
  match: {
    params: { pollId }
  }
}) => {
  const { isLoading, data: results } = useQuery('pollResult', () =>
    fetch(`http://localhost:3000/poll/${pollId}`).then((res) => {
      return res.json()
    })
  )

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  const data = formatData(results.poll)

  return (
    <div>
      <Navigation label="Go back home" goto="/poll" />
      <Flex w="100%">
        <Box flexDirection="column" borderWidth="1px" borderRadius="lg" d="flex" p="5" w="100%">
          <Heading mb="2" size="md">
            {results.poll.question}
          </Heading>
          <div>
            <Doughnut height={200} data={data} options={{ maintainAspectRatio: false }} />
          </div>
        </Box>
      </Flex>
    </div>
  )
}

export default Poll
