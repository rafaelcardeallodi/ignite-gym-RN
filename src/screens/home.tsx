import { HomeHeader } from "@components/home-header";
import { VStack } from "native-base";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  )
}