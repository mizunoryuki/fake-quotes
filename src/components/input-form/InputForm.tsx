import styles from './InputForm.module.css';
type Props = {
	quote: string;
	author: string;
	setQuote: (quote: string) => void;
	setAuthor: (author: string) => void;
	onGenerate: () => void;
}

export function InputForm({ quote, author, setQuote, setAuthor, onGenerate }: Props) {
	return (
		<div className={styles.container}>
			<label className={styles.label}>
				<span className={styles.labelTitle}>名言（quote）</span>
				<textarea
					value={quote}
					onChange={(e) => setQuote(e.target.value)}
					className={`${styles.field} ${styles.textarea}`}
					rows={3}
					placeholder="例：人生は一度きり、でもリロードはできる。"
				/>
			</label>

			<label className={styles.label}>
				<span className={styles.labelTitle}>著者（author）</span>
				<input
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					className={styles.field}
					placeholder="例：AI賢者・Lambda"
				/>
			</label>

			<div className={styles.actions}>
				<button onClick={onGenerate} className={styles.button}>
					画像を生成する 🎨
				</button>
				<div className={styles.helper}>生成した画像はダウンロードして共有できます。</div>
			</div>
		</div>
	);
}