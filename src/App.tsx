import { useState } from "react";
import "./App.css";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { InputFormContainer } from "./components/input-form/InputFormContainer";
import { QuoteCardListContainer } from "./components/quote-card-list/QuoteCardListContainer";
import type { InputMode, QuoteCard } from "./types/types";

function App() {
	const [cards, setCards] = useState<QuoteCard[] | undefined>([]);
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
			) : null}
		</>
	);
}

export default App;
