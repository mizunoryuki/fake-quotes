import './App.css'
import { InputFormContainer } from './components/input-form/InputFormContainer'
import { QuoteCardListContainer } from './components/quote-card-list/QuoteCardListContainer'
import {QuoteCardContainer} from './components/quote-card/QuoteCardContainer'

function App() {

  return (
    <>
    <InputFormContainer />
      <QuoteCardContainer />
      <QuoteCardListContainer generatedCards={['a','i','u','e','o']}/>
    </>
  )
}

export default App
