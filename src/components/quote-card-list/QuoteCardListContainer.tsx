import { QuoteCardList } from "./QuoteCardList";

type Props = {
	generatedCards: string[];
}

export function QuoteCardListContainer({ generatedCards }: Props) {
	return (
		<QuoteCardList generatedCards={generatedCards} />
	);
}