import type { InputMode } from '../../types/types';
import styles from './InputForm.module.css';
type Props = {
	quote: string;
	source: string;
	setQuote: (quote: string) => void;
	setSource: (source: string) => void;
	onGenerate: () => void;
	mode: InputMode;
}

export function InputForm({ quote, source, setQuote, setSource, onGenerate, mode }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.form}>
			<label className={`${styles.label} ${mode === "source" ? styles.disabledField : ''}`} htmlFor='quote-input' aria-disabled={mode === "source"}>
				<span className={styles.labelTitle}>名言</span>
				<textarea
					id='quote-input'
					aria-label='名言'
					value={quote}
					onChange={(e) => setQuote(e.target.value)}
					className={`${styles.field} ${styles.textarea}`}
					disabled={mode === "source"}
					aria-dissabled={mode === "source"}
					rows={3}
					placeholder="例：人生は一度きり、でもリロードはできる。"
				/>
			</label>

			<label className={`${styles.label} ${mode === "quote" ? styles.disabledField : ''}`} htmlFor='source-input' aria-disabled={mode === "quote"}>
				<span className={styles.labelTitle}>出典</span>
				<input
					id='source-input'
					aria-label='出典'
					aria-disabled={mode === "quote"}
					value={source}
					onChange={(e) => setSource(e.target.value)}
					className={styles.field}
					placeholder="例：民明書房"
					disabled={mode === "quote"}
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