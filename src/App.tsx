import { useState } from 'react';
import './App.css'
import { InputFormContainer } from './components/input-form/InputFormContainer'
import { QuoteCardListContainer } from './components/quote-card-list/QuoteCardListContainer'
import type { QuoteCard } from './types/types';

function App() {
  const [cards, setCards] = useState<QuoteCard[]>([]);

  return (
    <>
      <div className="app-header">
        <div>
          <h1 className="app-title">名言生成</h1>
          <p className="app-description">あなたのためのオリジナル名言を生成します。</p>
        </div>
        <InputFormContainer/>
      </div>
      <QuoteCardListContainer generatedCards={cards} />
    </>
  )
}

export default App
