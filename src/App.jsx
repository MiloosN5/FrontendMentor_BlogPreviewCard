import React from 'react'
import Card from './components/Card'
import { cards } from './db/cards'

const App = () => {
  return (
    <div className='page'>
      <div className='page__wrapper'>
        <main>
          <div className='home-route'>
            <section className='hero sr-only'>
              <h1 className='hero__title'>Pick your courses/articles for learning</h1>
            </section>
            <section className='cards-section'>
              <div className='cards-section__wrapper'>
                <h2 className='sr-only'>Cards</h2>
                <div className='cards-section__content'>
                  {
                    cards.map((card, index) => (
                      <Card key={index} item={card}></Card>
                    ))
                  }
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App