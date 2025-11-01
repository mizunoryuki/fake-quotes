import './App.css'
import { QuoteCardListContainer } from './components/quote-card-list/QuoteCardListContainer'
import {QuoteCardContainer} from './components/quote-card/QuoteCardContainer'

function App() {

  return (
    <>
      <QuoteCardContainer />
      <QuoteCardListContainer generatedCards={['a','i','u','e','o']}/>
    </>
  )
}

export default App
