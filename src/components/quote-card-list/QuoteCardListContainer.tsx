import type { QuoteCard } from "../../types/types";
import { QuoteCardList } from "./QuoteCardList";

type Props = {
	generatedCards: QuoteCard[];
}

export function QuoteCardListContainer({ generatedCards }: Props) {
	return (
		<QuoteCardList generatedCards={generatedCards} />
	);
}