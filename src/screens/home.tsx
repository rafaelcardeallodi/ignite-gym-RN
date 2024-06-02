import { Group } from "@components/group";
import { HomeHeader } from "@components/home-header";
import { HStack, VStack } from "native-base";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group name="Costas" />
        <Group name="Peito" />
      </HStack>
    </VStack>
  )
}