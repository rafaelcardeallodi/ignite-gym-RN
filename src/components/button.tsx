import { Button as ButtonPrimitive, IButtonProps } from 'native-base'

interface ButtonProps extends IButtonProps {}

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <ButtonPrimitive 
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _text={{
        color: variant === 'outline' ? 'green.500' : 'white',
        fontFamily: 'heading',
        fontSize: 'sm'
      }}
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500'
      }}
      {...rest}
    >
      {children}
    </ButtonPrimitive>
  )
}