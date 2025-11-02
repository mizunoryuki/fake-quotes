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
          <div className="mode-select-item">
            <div className="mode-select-input">
              <input
                  type="radio"
                  id='quote-mode'
                  value="quote"
                  aria-label='名言から出典を生成'
                  checked={mode === "quote"}
                  onChange={(e) => setMode(e.target.value as "quote")}
                />
            <label className="mode-select-label" htmlFor='quote-mode'>名言 → 出典を生成</label>
            </div>
            <span className="mode-select-description" aria-labelledby='quote-mode'>入力した名言から架空の出典を生成</span>
          </div>
          <div className="mode-select-item">
            <div className="mode-select-input">
              <input
                  type="radio"
                  id='source-mode'
                  value="source"
                  aria-label='出典から名言を生成'
                checked={mode === "source"}
                onChange={(e) => setMode(e.target.value as "source")}
              />
            <label className="mode-select-label" htmlFor='source-mode'>出典 → 名言を生成</label>
            </div>
            <span className="mode-select-description" aria-labelledby='source-mode'>入力した出典から架空の名言を生成</span>
          </div>
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
