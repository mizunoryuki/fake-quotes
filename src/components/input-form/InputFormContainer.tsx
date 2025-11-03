import { useForm } from "react-hook-form";
import type { InputMode, QuoteCardInput } from "../../types/types";
import { InputForm } from "./InputForm";

type Props = {
	mode: InputMode;
	setGeneratedCards: (newCards: QuoteCardInput[]) => void;
};

export function InputFormContainer({ mode, setGeneratedCards }: Props) {
	const {
		register,
		handleSubmit,
		formState: { isDirty, isSubmitting },
	} = useForm<QuoteCardInput>({
		defaultValues: {
			quote: "",
			source: "",
		},
	});

	const onSubmit = async (values: QuoteCardInput) => {
		const inputText = mode === "quote" ? values.quote : values.source;

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

			if (!Array.isArray(splitResults) || splitResults.length === 0) {
				console.warn("生成に失敗しました");
				return;
			}

			if (mode === "quote") {
				setGeneratedCards(
					splitResults.map((sourceText: string) => ({
						quote: values.quote,
						source: sourceText,
					})),
				);
			} else {
				setGeneratedCards(
					splitResults.map((quoteText: string) => ({
						quote: quoteText,
						source: values.source,
					})),
				);
			}
		} else {
			console.error("Generation failed:", response.status, data);
		}
	};

	return (
		<InputForm
			onGenerate={handleSubmit(onSubmit)}
			mode={mode}
			register={register}
			isDirty={isDirty}
			isSubmitting={isSubmitting}
		/>
	);
}
