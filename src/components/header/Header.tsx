import type { InputMode } from "../../types/types";
import styles from "./Header.module.css";

type Props = {
	mode: InputMode;
	setMode: (newMode: InputMode) => void;
};

export function Header({ mode, setMode }: Props) {
	return (
		<div className={styles.header}>
			<div>
				<h1 className={styles.appTitle}>名言生成</h1>
				<p className={styles.appDescription}>
					あなたのためのオリジナル名言を生成します。
				</p>
			</div>

			<div className={styles.modeSelect}>
				<div className={styles.modeSelectItem}>
					<div className={styles.modeSelectInput}>
						<input
							className={styles.radio}
							type="radio"
							name="mode"
							id="quote-mode"
							value="quote"
							aria-label="名言から出典を生成"
							aria-describedby="quote-mode-desc"
							checked={mode === "quote"}
							onChange={(e) => setMode(e.currentTarget.value as InputMode)}
						/>
						<label className={styles.modeSelectLabel} htmlFor="quote-mode">
							名言 → 出典を生成
						</label>
					</div>
					<span id="quote-mode-desc" className={styles.modeSelectDescription}>
						入力した名言から架空の出典を生成
					</span>
				</div>

				<div className={styles.modeSelectItem}>
					<div className={styles.modeSelectInput}>
						<input
							className={styles.radio}
							type="radio"
							name="mode"
							id="source-mode"
							value="source"
							aria-label="出典から名言を生成"
							aria-describedby="source-mode-desc"
							checked={mode === "source"}
							onChange={(e) => setMode(e.currentTarget.value as InputMode)}
						/>
						<label className={styles.modeSelectLabel} htmlFor="source-mode">
							出典 → 名言を生成
						</label>
					</div>
					<span id="source-mode-desc" className={styles.modeSelectDescription}>
						入力した出典から架空の名言を生成
					</span>
				</div>
			</div>
		</div>
	);
}
