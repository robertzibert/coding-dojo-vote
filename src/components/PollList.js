import React from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { MdDonutSmall } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import Moment from 'react-moment'

const renderIcon = () => {
  return <Icon w={12} h={12} as={MdDonutSmall} color="gray.500" />
}

const renderTitle = (question) => {
  return (
    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
      {question}
    </Box>
  )
}

const renderOptions = ({ _id, createdAt, __v, question, ...options }) => {
  const optionsKeys = Object.keys(options)
  const labels = optionsKeys.map((key) => options[key].title)
  const data = optionsKeys.map((key) => options[key].votes)
  return (
    <Box as="span" color="gray.600" fontSize="sm">
      {optionsKeys.map((optionKey) => `${options[optionKey].title}:${options[optionKey].votes || 0}  `)}
    </Box>
  )
}

const renderDate = (createdAt) => {
  return (
    <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" mt="2">
      <Moment fromNow>{createdAt}</Moment>
    </Box>
  )
}

const PollList = ({ polls }) => {
  const history = useHistory()

  return polls.map((poll, i) => {
    return (
      <Box
        key={i}
        onClick={() => {
          history.push(`/poll/${poll._id}`)
        }}
        d="flex"
        borderWidth="1px"
        borderRadius="lg"
        cursor="pointer"
        mb="5"
      >
        <Box d="flex" flexDirection="column" justifyContent="center" p="4">
          {renderIcon()}
        </Box>
        <Box p="5">
          {renderTitle(poll.question)}
          {renderOptions(poll)}
          {renderDate(poll.createdAt)}
        </Box>
      </Box>
    )
  })
}

export default PollList
