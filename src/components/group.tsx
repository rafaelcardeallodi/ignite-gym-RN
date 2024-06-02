import { IPressableProps, Pressable, Text } from "native-base";

interface GroupProps extends IPressableProps {
  name: string;
}

export function Group({ name, ...rest }: GroupProps) {
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
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1
      }}
      {...rest}
    >
      <Text 
        color="gray.200" 
        textTransform="uppercase" 
        fontSize="xs" 
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  )
}