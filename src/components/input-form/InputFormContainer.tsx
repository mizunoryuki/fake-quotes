import { useState } from "react";
import { useForm } from "react-hook-form";
import type { InputMode, QuoteCardInput } from "../../types/types";
import { InputForm } from "./InputForm";

type Props = {
	mode: InputMode;
	setGeneratedCards: (newCards: QuoteCardInput[]) => void;
};

export function InputFormContainer({ mode, setGeneratedCards }: Props) {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		watch,
	} = useForm<QuoteCardInput>({
		defaultValues: {
			quote: "",
			source: "",
		},
	});

	const onSubmit = async (values: QuoteCardInput) => {
		setErrorMessage(null); // 送信前にエラーをリセット

		try {
			const inputText = mode === "quote" ? values.quote : values.source;
			const env = import.meta.env as Record<string, unknown>;
			const viteApi =
				typeof env.VITE_API_URL === "string"
					? env.VITE_API_URL.trim()
					: undefined;

			let generateEndpoint = "/api/generate";
			if (viteApi && viteApi.length > 0) {
				const cleaned = viteApi.replace(/\/+$/, "");
				generateEndpoint = cleaned.endsWith("/api/generate")
					? cleaned
					: `${cleaned}/api/generate`;
			}

			const response = await fetch(generateEndpoint, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ mode, inputText }),
			});

			const data = await response.json().catch(() => ({}));

			if (!response.ok) {
				console.error("Generation failed:", response.status, data);
				const apiError =
					data?.error ||
					`サーバーエラーが発生しました (status: ${response.status})`;
				setErrorMessage(apiError);
				return;
			}

			const result = data.result;
			if (!result || typeof result !== "string") {
				setErrorMessage("生成結果が不正です。もう一度お試しください。");
				return;
			}

			const splitResults = result
				.split("\n")
				.map((line: string) => line.trim())
				.filter((line: string) => line !== "");

			if (splitResults.length === 0) {
				setErrorMessage("生成に失敗しました。入力内容を確認してください。");
				return;
			}

			if (mode === "quote") {
				setGeneratedCards(
					splitResults.map((sourceText) => ({
						quote: values.quote,
						source: sourceText,
					})),
				);
			} else {
				setGeneratedCards(
					splitResults.map((quoteText) => ({
						quote: quoteText,
						source: values.source,
					})),
				);
			}
		} catch (err) {
			console.error("Network error:", err);
			setErrorMessage(
				"ネットワークエラーが発生しました。接続を確認してください。",
			);
		}
	};

	const quoteValue = watch("quote");
	const sourceValue = watch("source");

	const requiredEmpty =
		(mode === "quote" && (!quoteValue || quoteValue.trim() === "")) ||
		(mode === "source" && (!sourceValue || sourceValue.trim() === ""));

	const isGenerateDisabled = isSubmitting || requiredEmpty;

	return (
		<InputForm
			onGenerate={handleSubmit(onSubmit)}
			mode={mode}
			register={register}
			isSubmitting={isSubmitting}
			isGenerateDisabled={isGenerateDisabled}
			errorMessage={errorMessage}
		/>
	);
}
