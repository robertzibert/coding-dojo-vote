import React from 'react'
import Pages from './Pages'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  const queryClient = new QueryClient(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Pages />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
