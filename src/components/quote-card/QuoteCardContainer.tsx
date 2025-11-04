import { toPng } from "html-to-image";
import { useRef } from "react";
import { QuoteCard } from "./QuoteCard";

type Props = {
	quote: string;
	source: string;
	isSample?: boolean;
};

export function QuoteCardContainer({ quote, source, isSample = false }: Props) {
	const ref = useRef(null);

	const handleDownload = async () => {
		if (ref.current === null) return;
		const dataUrl = await toPng(ref.current);
		const link = document.createElement("a");
		link.download = "quote.png";
		link.href = dataUrl;
		link.click();
	};

	return (
		<QuoteCard
			ref={ref}
			handleDownload={handleDownload}
			quote={quote}
			source={source}
			isSample={isSample}
		/>
	);
}
