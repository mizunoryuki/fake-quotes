import styles from './InputForm.module.css';
type Props = {
	quote: string;
	source: string;
	setQuote: (quote: string) => void;
	setSource: (source: string) => void;
	onGenerate: () => void;
}

export function InputForm({ quote, source, setQuote, setSource, onGenerate }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.form}>
			<label className={styles.label}>
				<span className={styles.labelTitle}>名言</span>
				<textarea
					value={quote}
					onChange={(e) => setQuote(e.target.value)}
					className={`${styles.field} ${styles.textarea}`}
					rows={3}
					placeholder="例：人生は一度きり、でもリロードはできる。"
				/>
			</label>

			<label className={styles.label}>
				<span className={styles.labelTitle}>出典</span>
				<input
					value={source}
					onChange={(e) => setSource(e.target.value)}
					className={styles.field}
					placeholder="例：民明書房"
				/>
			</label>

			<div className={styles.actions}>
				<button onClick={onGenerate} className={styles.button}>
					画像を生成する 🎨
				</button>
				<div className={styles.helper}>生成した画像はダウンロードして共有できます。</div>
			</div>
			</div>
		</div>
	);
}