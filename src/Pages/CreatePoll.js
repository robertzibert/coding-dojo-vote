import React from 'react'
import { Flex, Box, FormControl, FormLabel, FormErrorMessage, Textarea, Input, Button } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'

import Navigation from '../components/Navigation'

const CreatePoll = () => {
  return (
    <div>
      <Navigation goto="/poll" label="Go back home" />
      <Flex w="100%">
        <Box borderWidth="1px" borderRadius="lg" d="flex" alignItems="center" p="2" w="100%">
          <Formik
            initialValues={{
              title: '',
              firstOption: '',
              secondOption: '',
              thirdOption: '',
              fourthOption: ''
            }}
            onSubmit={(values, actions) => {
              fetch('http://localhost:3000/poll/new', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
              })
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {(props) => (
              <Form style={{ width: '100%' }}>
                <Flex w="100%">
                  <Box d="flex" justifyContent="center" h="200" w="50%" p="2">
                    <Field name="title">
                      {({ field, form }) => (
                        <FormControl
                        // isInvalid={form.errors.name && form.touched.name}
                        >
                          <FormLabel htmlFor="title">Your question</FormLabel>
                          <Textarea {...field} id="title" placeholder="question" />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box d="table-column" w="50%" p="2">
                    <Field name="firstOption">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                          <FormLabel htmlFor="name">Option 1</FormLabel>
                          <Input {...field} id="firstOption" placeholder="Option1" />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="secondOption">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                          <FormLabel htmlFor="name">Option 2</FormLabel>
                          <Input {...field} id="secondOption" placeholder="Option2" />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="thirdOption">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                          <FormLabel htmlFor="name">Option 3</FormLabel>
                          <Input {...field} id="thirdOption" placeholder="Option3" />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="fourthOption">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                          <FormLabel htmlFor="name">Option 4</FormLabel>
                          <Input {...field} id="fourthOption" placeholder="Option4" />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </Flex>
                <Box d="flex" alignItems="center" p="2" w="100%" p="2">
                  <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </div>
  )
}

export default CreatePoll
