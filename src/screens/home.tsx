import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useState } from "react";

import { ExerciseCard } from "@components/exercise-card";
import { Group } from "@components/group";
import { HomeHeader } from "@components/home-header";

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

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">Exercícios</Heading>

          <Text color="gray.200" fontSize="sm">4</Text>
        </HStack>

        <ExerciseCard />
        <ExerciseCard />
      </VStack>
    </VStack>
  )
}