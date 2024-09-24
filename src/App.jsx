import React from 'react'
import Card from './components/Card'
import { cards } from './db/cards'

const App = () => {
  return (
    <div className='page'>
      <div className='page__wrapper'>
        <main>
          <section className='hero sr-only'>
            <h1 className='hero__title'>Pick your courses/articles for learning</h1>
          </section>
          {
            cards.map((card, index) => (
              <Card key={index} item={card}></Card>
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App