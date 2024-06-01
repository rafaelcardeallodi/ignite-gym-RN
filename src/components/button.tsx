import { Button as ButtonPrimitive, IButtonProps } from 'native-base'

interface ButtonProps extends IButtonProps {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ButtonPrimitive 
      w="full"
      h={14}
      bg="green.700"
      rounded="sm"
      _text={{
        color: 'white',
        fontFamily: 'heading',
        fontSize: 'sm'
      }}
      _pressed={{
        bg: 'green.500'
      }}
      {...rest}
    >
      {children}
    </ButtonPrimitive>
  )
}