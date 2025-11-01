import './App.css'
import { InputFormContainer } from './components/input-form/InputFormContainer'
import { QuoteCardListContainer } from './components/quote-card-list/QuoteCardListContainer'
import {QuoteCardContainer} from './components/quote-card/QuoteCardContainer'

function App() {

  return (
    <>
      <div className="app-header">
        <div>
          <h1 className="app-title">名言生成</h1>
          <p className="app-description">あなたのためのオリジナル名言を生成します。</p>
        </div>
        <InputFormContainer />
      </div>
      <QuoteCardContainer />
      <QuoteCardListContainer generatedCards={['a','i','u','e','o']}/>
    </>
  )
}

export default App
