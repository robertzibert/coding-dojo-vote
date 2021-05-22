import React from 'react'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'

const Field = ({ field, onChange, value, name, label, placeholder, errors, touched }) => {
  console.log(errors[name], name)
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      {React.cloneElement(field, { onChange, name, placeholder, value })}
      {!!errors[name] && <FormErrorMessage>{errors[name]}</FormErrorMessage>}
    </FormControl>
  )
}

export default Field
