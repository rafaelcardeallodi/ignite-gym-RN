import { HistoryCard } from "@components/history-card";
import { ScreenHeader } from "@components/screen-header";
import { VStack } from "native-base";

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  )
}