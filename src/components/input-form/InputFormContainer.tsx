import { useState } from "react";
import type { InputMode, QuoteCardInput } from "../../types/types";
import { InputForm } from "./InputForm";

type Props = {
	mode: InputMode;
	setGeneratedCards: (newCards: QuoteCardInput[]) => void;
};

export function InputFormContainer({ mode, setGeneratedCards }: Props) {
	const [quote, setQuote] = useState(""); // 名言
	const [source, setSource] = useState(""); // 出典
	const handleChangeQuote = (newQuote: string) => {
		setQuote(newQuote);
	};
	const handleChangeSource = (newSource: string) => {
		setSource(newSource);
	};

	const handleGenerate = async () => {
		const inputText = mode === "quote" ? quote : source;

		const response = await fetch("/api/generate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ mode: mode, inputText }),
		});

		const data = await response.json().catch(() => ({}));
		if (response.ok) {
			const result = data.result;
			const splitResults = result
				.split("\n")
				.map((line: string) => line.trim())
				.filter((line: string) => line !== "");
			console.log("Generation result:", splitResults);

			if (!Array.isArray(splitResults)) {
				console.warn("生成に失敗しました");
				return;
			}
			if (splitResults.length === 0) {
				console.warn("生成に失敗しました");
				return;
			}

			if (mode === "quote") {
				setGeneratedCards(
					splitResults.map((sourceText: string) => ({
						quote: quote,
						source: sourceText,
					})),
				);
			} else {
				setGeneratedCards(
					splitResults.map((quoteText: string) => ({
						quote: quoteText,
						source: source,
					})),
				);
			}
		} else {
			console.error("Generation failed:", response.status, data);
		}
	};

	return (
		<InputForm
			quote={quote}
			source={source}
			setQuote={handleChangeQuote}
			setSource={handleChangeSource}
			onGenerate={handleGenerate}
			mode={mode}
		/>
	);
}
