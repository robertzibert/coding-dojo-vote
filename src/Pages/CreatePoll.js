import React from 'react'
import { Flex, Box, Textarea, Button, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Navigation from '../components/Navigation'
import Field from '../components/Field'
import url from '../utils/getUrl'

const CreatePoll = () => {
  const pollSchema = Yup.object().shape({
    title: Yup.string().min(10, 'Too Short!').required('Dont forget to fill this field'),
    firstOption: Yup.string().required('Dont forget to fill this field'),
    secondOption: Yup.string().required('Dont forget to fill this field')
  })

  const { handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {},
    validationSchema: pollSchema,
    onSubmit: async (values) => {
      const res = await fetch(`${url}/poll/new`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })

      if (!res.ok) {
        const err = await res.json()

        alert(err.message)
      }
    }
  })

  return (
    <div>
      <Navigation goto="/poll" label="Go back home" />
      <Flex w="100%">
        <Box borderWidth="1px" borderRadius="lg" d="flex" alignItems="center" p="2" w="100%">
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <Flex w="100%">
              <Box d="flex" justifyContent="center" h="200" w="50%" p="2">
                <Field
                  field={<Textarea />}
                  name="title"
                  label={'Your Question'}
                  placeholder="What you wanna ask?"
                  errors={errors}
                  touched={touched}
                  onChange={handleChange}
                />
              </Box>
              <Box d="table-column" justifyContent="center" w="50%" p="2">
                <Field
                  field={<Input />}
                  name="firstOption"
                  label={'First Option'}
                  placeholder="Option 1"
                  errors={errors}
                  touched={touched}
                  onChange={handleChange}
                />
                <Field
                  field={<Input />}
                  name="secondOption"
                  label={'Second Option'}
                  placeholder="Option 2"
                  errors={errors}
                  touched={touched}
                  onChange={handleChange}
                />
                <Field
                  field={<Input />}
                  name="thirdOption"
                  label={'Third Option'}
                  placeholder="Option 3"
                  errors={errors}
                  touched={touched}
                  onChange={handleChange}
                />
                <Field
                  field={<Input />}
                  name="fourthOption"
                  label={'Third Option'}
                  placeholder="Option 4"
                  errors={errors}
                  touched={touched}
                  onChange={handleChange}
                />
              </Box>
            </Flex>
            <Box d="flex" alignItems="center" p="2" w="100%">
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </div>
  )
}

export default CreatePoll
