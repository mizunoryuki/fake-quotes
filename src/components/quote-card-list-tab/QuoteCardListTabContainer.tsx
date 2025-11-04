import type { QuoteCardInput } from "../../types/types";
import { QuoteCardListTab } from "./QuoteCardListTab";

type Props = {
	generatedCards: QuoteCardInput[];
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
};

export function QuoteCardListTabContainer({
	generatedCards,
	isOpen,
	setIsOpen,
}: Props) {
	const onToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<QuoteCardListTab
			generatedCards={generatedCards}
			isOpen={isOpen}
			onToggle={onToggle}
		/>
	);
}
