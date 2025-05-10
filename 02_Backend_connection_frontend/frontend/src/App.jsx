import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get('/api/quotes')
      .then((response) => {
        setQuotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Getting Quotes from backend</h1>
      <p>{`Quotes count: ${quotes.length}`}</p>

      {/* mapping over array to show results on UI */}

      {
        quotes.map((quote) => (
          <div key={quote.id}>
            <p><strong>{quote.content}</strong></p>
            <p>— {quote.author}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
