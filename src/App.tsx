import { useState } from "react";
import "./App.css";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { InputFormContainer } from "./components/input-form/InputFormContainer";
import { QuoteCardContainer } from "./components/quote-card/QuoteCardContainer";
import { QuoteCardListContainer } from "./components/quote-card-list/QuoteCardListContainer";
import type { InputMode, QuoteCardInput } from "./types/types";

function App() {
	const [cards, setCards] = useState<QuoteCardInput[] | undefined>(undefined);
	const [mode, setMode] = useState<InputMode>("quote");

	const handleSetMode = (newMode: InputMode) => {
		setMode(newMode);
	};

	return (
		<>
			<div className="app-header">
				<HeaderContainer mode={mode} setMode={handleSetMode} />
				<InputFormContainer mode={mode} />
			</div>
			{cards !== undefined ? (
				<QuoteCardListContainer generatedCards={cards} />
			) : (
				<div>
					<p className="app-example">作成例</p>
					<QuoteCardContainer />
				</div>
			)}
		</>
	);
}

export default App;
