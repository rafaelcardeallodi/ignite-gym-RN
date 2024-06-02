import { Group } from "@components/group";
import { HomeHeader } from "@components/home-header";
import { FlatList, HStack, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [groups, setGroups] = useState(['costa', 'peito', 'ombro', 'perna'])
  const [selectedGroup, setSelectedGroup] = useState('costa')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group 
            name={item}
            isActive={selectedGroup === item}
            onPress={() => setSelectedGroup(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8
        }}
        my={10}
        maxHeight={10}
      />
    </VStack>
  )
}