import { Group } from "@components/group";
import { HomeHeader } from "@components/home-header";
import { HStack, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [selectedGroup, setSelectedGroup] = useState('costa')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group 
          name="costa"
          onPress={() => setSelectedGroup('costa')}
          isActive={selectedGroup === 'costa'}
        />
        <Group 
          name="peito" 
          onPress={() => setSelectedGroup('peito')}
          isActive={selectedGroup === 'peito'}
        />
      </HStack>
    </VStack>
  )
}