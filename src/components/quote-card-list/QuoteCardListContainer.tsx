import type { QuoteCardInput } from "../../types/types";
import { QuoteCardList } from "./QuoteCardList";

type Props = {
	generatedCards: QuoteCardInput[];
};

export function QuoteCardListContainer({ generatedCards }: Props) {
	return <QuoteCardList generatedCards={generatedCards} />;
}
