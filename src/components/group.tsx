import { IPressableProps, Pressable, Text } from "native-base";

interface GroupProps extends IPressableProps {
  name: string;
  isActive?: boolean;
}

export function Group({ name, isActive = false, ...rest }: GroupProps) {
  return  (
    <Pressable 
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1
      }}
      {...rest}
    >
      <Text 
        color={isActive ? "green.500" : "gray.200"}
        textTransform="uppercase" 
        fontSize="xs" 
        fontFamily="heading"
      >
        {name}
      </Text>
    </Pressable>
  )
}