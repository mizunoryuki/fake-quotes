import { useState } from "react";
import type { InputMode } from "../../types/types";
import { InputForm } from "./InputForm";

type Props = {
	mode: InputMode;
};

export function InputFormContainer({ mode }: Props) {
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
			console.log("Generation result:", data.result);
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
