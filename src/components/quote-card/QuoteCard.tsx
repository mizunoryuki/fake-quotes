import styles from "./quoteCard.module.css";

type Props = {
	ref: React.RefObject<null>;
	handleDownload: () => Promise<void>;
};

export function QuoteCard({ ref, handleDownload }: Props) {
	return (
		<div className={styles.quoteCardContainer}>
			<div ref={ref} id="quote-card" className={styles.quoteCardInner}>
				<div className={styles.quoteCard}>
					<p className={styles.quoteText}>
						だれもが創作をはじめ、続けられるようにする。
					</p>
				</div>
				<p className={styles.subtitle}>note株式会社のミッション</p>
			</div>

			<button
				type="button"
				onClick={handleDownload}
				className={styles.downloadButton}
			>
				画像として保存
			</button>
		</div>
	);
}
