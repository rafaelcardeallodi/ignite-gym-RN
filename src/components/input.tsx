import { IInputProps, Input as InputPrimitive } from 'native-base'

interface InputProps extends IInputProps {}

export function Input(props: InputProps) {
  return (
    <InputPrimitive
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={1}
      borderColor="gray.700"
      fontSize="md"
      color="white"
      fontFamily="body"
      mb={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: 'green.500'
      }}
      {...props}
    />   
  )
}