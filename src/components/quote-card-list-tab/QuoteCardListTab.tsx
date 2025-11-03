import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import type { QuoteCardInput } from "../../types/types";
import { QuoteCardContainer } from "../quote-card/QuoteCardContainer";
import styles from "./QuoteCardListTab.module.css";

type Props = {
	generatedCards: QuoteCardInput[];
	isOpen: boolean;
	onToggle: () => void;
};

export function QuoteCardListTab({ generatedCards, isOpen, onToggle }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>生成された名言一覧</h2>
				{isOpen === false ? (
					<IoIosArrowDown
						role="button"
						onClick={onToggle}
						className={styles.button}
					/>
				) : (
					<IoIosArrowUp
						role="button"
						onClick={onToggle}
						className={styles.button}
					/>
				)}
			</div>
			{isOpen ? (
				<div>
					{generatedCards.map((value, index) => (
						<QuoteCardContainer
							key={index}
							quote={value.quote}
							source={value.source}
						/>
					))}
				</div>
			) : null}
		</div>
	);
}
