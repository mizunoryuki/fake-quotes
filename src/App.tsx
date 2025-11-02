import { useState } from 'react';
import './App.css'
import { InputFormContainer } from './components/input-form/InputFormContainer'
import { QuoteCardListContainer } from './components/quote-card-list/QuoteCardListContainer'
import type { InputMode, QuoteCard } from './types/types';

function App() {
  const [cards, setCards] = useState<QuoteCard[] | undefined>([]);
  const [mode, setMode] = useState<InputMode>("quote");

  return (
    <>
      <div className="app-header">
        <div>
          <h1 className="app-title">名言生成</h1>
          <p className="app-description">あなたのためのオリジナル名言を生成します。</p>
        </div>
        <div className="mode-select">
        <label className="mode-slect-label">
          <input
            type="radio"
            value="quote"
            checked={mode === "quote"}
            onChange={(e) => setMode(e.target.value as "quote")}
          />
          名言 → 出典を生成
        </label>
        <label className="mode-select-label">
          <input
            type="radio"
            value="source"
            checked={mode === "source"}
            onChange={(e) => setMode(e.target.value as "source")}
          />
          出典 → 名言を生成
        </label>
      </div>
        <InputFormContainer mode={mode} />
      </div>
      {cards !== undefined ? 
        <QuoteCardListContainer generatedCards={cards} /> : null
      }
    </>
  )
}

export default App
