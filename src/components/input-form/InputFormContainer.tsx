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
		formState: { isSubmitting },
		watch,
	} = useForm<QuoteCardInput>({
		defaultValues: {
			quote: "",
			source: "",
		},
	});

	const onSubmit = async (values: QuoteCardInput) => {
		const inputText = mode === "quote" ? values.quote : values.source;
		const env = import.meta.env as Record<string, unknown>;
		if (!env.VITE_API_URL) {
			console.warn(
				"VITE_API_URL is not set in import.meta.env — falling back to relative '/api/generate'. If you expect an external API, set VITE_API_URL in your .env (no spaces around =).",
			);
		}
		const viteApi =
			typeof env.VITE_API_URL === "string"
				? (env.VITE_API_URL as string).trim()
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
		/>
	);
}
