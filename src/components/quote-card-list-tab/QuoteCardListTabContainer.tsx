import type { QuoteCardInput } from "../../types/types";
import { QuoteCardListTab } from "./QuoteCardListTab";

type Props = {
	generatedCards: QuoteCardInput[];
	isOpen: boolean;
	onToggle: (open?: boolean) => void;
};

export function QuoteCardListTabContainer({
	generatedCards,
	isOpen,
	onToggle,
}: Props) {
	return (
		<QuoteCardListTab
			generatedCards={generatedCards}
			isOpen={isOpen}
			onToggle={onToggle}
		/>
	);
}
