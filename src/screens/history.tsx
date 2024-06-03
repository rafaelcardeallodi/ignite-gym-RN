import { useState } from "react";
import { Heading, VStack, SectionList } from "native-base";

import { HistoryCard } from "@components/history-card";
import { ScreenHeader } from "@components/screen-header";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada Frontal', 'Supino Reto', 'Rosca Direta']
    },
    {
      title: '25.08.22',
      data: ['Costas', 'Peito']
    }
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Heading color="gray.200" fontSize="md" mt={10} pb={3}>
            {title}
          </Heading>
        )}
        px={8}
      />
    </VStack>
  )
}