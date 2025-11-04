import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { InputMode, QuoteCardInput } from "../../types/types";
import styles from "./InputForm.module.css";

type Props = {
	register: UseFormRegister<QuoteCardInput>;
	onGenerate: () => void;
	mode: InputMode;
	isSubmitting: boolean;
	isGenerateDisabled?: boolean;
	errorMessage?: string | null;
	inputErrors: FieldErrors<QuoteCardInput>;
};

export function InputForm({
	register,
	onGenerate,
	mode,
	isSubmitting,
	isGenerateDisabled,
	errorMessage,
	inputErrors,
}: Props) {
	return (
		<div className={styles.container}>
			<h2>{mode === "quote" ? "出典を生成" : "名言を生成"}</h2>
			<form onSubmit={onGenerate} className={styles.form}>
				<label
					className={`${styles.label} ${
						mode === "source" ? styles.disabledField : ""
					}
					}`}
					htmlFor="quote-input"
					aria-disabled={mode === "source"}
				>
					<span className={styles.labelTitle}>名言</span>
					<textarea
						id="quote-input"
						aria-label="名言"
						{...register("quote", {
							maxLength: {
								value: 60,
								message: "60文字以内で入力してください",
							},
							required: mode === "quote" ? "名言を入力してください" : false,
						})}
						className={`${styles.field} ${styles.textarea}`}
						disabled={mode === "source"}
						rows={3}
						placeholder="例：人生は一度きり、でもリロードはできる。"
					/>
				</label>
				<label
					className={`${styles.label} ${
						mode === "quote" ? styles.disabledField : ""
					}`}
					htmlFor="source-input"
					aria-disabled={mode === "quote"}
				>
					<span className={styles.labelTitle}>出典</span>
					<input
						id="source-input"
						aria-label="出典"
						{...register("source", {
							maxLength: {
								value: 60,
								message: "60文字以内で入力してください",
							},
							required: mode === "source" ? "出典を入力してください" : false,
						})}
						className={styles.field}
						placeholder="例：民明書房"
						disabled={mode === "quote"}
					/>
				</label>
				{inputErrors.quote ? (
					<p className={styles.errorMessage} role="alert">
						{inputErrors.quote.message}
					</p>
				) : null}
				{inputErrors.source ? (
					<p className={styles.errorMessage} role="alert">
						{inputErrors.source.message}
					</p>
				) : null}
				{errorMessage !== null && errorMessage !== undefined ? (
					<p className={styles.errorMessage} role="alert">
						{errorMessage}
					</p>
				) : null}

				<div className={styles.actions}>
					<button
						type="submit"
						className={styles.button}
						disabled={isGenerateDisabled}
						aria-disabled={isGenerateDisabled}
					>
						{isSubmitting ? "生成中..." : "生成する"}
					</button>
					<div className={styles.helper}>
						生成した画像はダウンロードして共有できます。
					</div>
				</div>
			</form>
		</div>
	);
}
