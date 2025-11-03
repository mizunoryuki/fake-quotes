import styles from "./quoteCard.module.css";

type Props = {
	ref: React.RefObject<null>;
	handleDownload: () => Promise<void>;
	quote: string;
	source: string;
	isSample?: boolean;
};

export function QuoteCard({
	ref,
	handleDownload,
	quote,
	source,
	isSample,
}: Props) {
	return (
		<div className={styles.quoteCardContainer}>
			<div ref={ref} id="quote-card" className={styles.quoteCardInner}>
				<div className={styles.quoteCard}>
					<p className={styles.quoteText}>{quote}</p>
				</div>
				<p className={styles.subtitle}>{source}</p>
			</div>

			{isSample !== true ? (
				<button
					type="button"
					onClick={handleDownload}
					className={styles.downloadButton}
				>
					画像として保存
				</button>
			) : null}
		</div>
	);
}
