import { useEffect, useRef, useState } from "react";
import "./App.css";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { InputFormContainer } from "./components/input-form/InputFormContainer";
import { QuoteCardContainer } from "./components/quote-card/QuoteCardContainer";
import { QuoteCardListContainer } from "./components/quote-card-list/QuoteCardListContainer";
import type { InputMode, QuoteCardInput } from "./types/types";

function App() {
	const [cards, setCards] = useState<QuoteCardInput[] | undefined>(undefined);
	const [mode, setMode] = useState<InputMode>("quote");
	const listRef = useRef<HTMLDivElement | null>(null);

	const handleSetMode = (newMode: InputMode) => {
		setMode(newMode);
	};

	const handleSetGeneratedCards = (newCards: QuoteCardInput[]) => {
		setCards(newCards);
	};

	useEffect(() => {
		if (!cards) return;
		setTimeout(() => {
			const prefersReduced =
				typeof window !== "undefined" &&
				window.matchMedia &&
				window.matchMedia("(prefers-reduced-motion: reduce)").matches;

			const behavior: ScrollBehavior = prefersReduced ? "auto" : "smooth";

			const doc = document.documentElement;
			const body = document.body;
			const scrollHeight = Math.max(
				doc.scrollHeight,
				body ? body.scrollHeight : 0,
				doc.clientHeight,
			);

			window.scrollTo({ top: scrollHeight, behavior });
		}, 50);
	}, [cards]);

	return (
		<>
			<div className="app-header">
				<HeaderContainer mode={mode} setMode={handleSetMode} />
				<InputFormContainer
					mode={mode}
					setGeneratedCards={handleSetGeneratedCards}
				/>
			</div>
			{cards !== undefined ? (
				<div ref={listRef}>
					<QuoteCardListContainer generatedCards={cards} />
				</div>
			) : (
				<div className="app-sample-container">
					<h2 className="app-example">作成例</h2>
					<QuoteCardContainer
						quote="夢を見続けることが、人生を豊かにする。"
						source="— エッセイ『夢の習慣』 著：斎藤 湊 —"
						isSample
					/>
				</div>
			)}
		</>
	);
}

export default App;
