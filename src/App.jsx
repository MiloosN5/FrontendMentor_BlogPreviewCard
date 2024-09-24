import React from 'react'
import Card from './components/Card'
import { cards } from './db/cards'

const App = () => {
  return (
    <div className='page'>
      <div className='page__wrapper'>
        <main>
          <section className='home-route'>
            <div class='home-route__wrapper'>
              <h2 className='sr-only'>Home route</h2>
              <div className='home-route__content'>
                <section className='hero sr-only'>
                  <h1 className='hero__title'>Pick your courses/articles for learning</h1>
                </section>
                <section className='cards-section'>
                  <div className='cards-section__wrapper'>
                    <h3 className='sr-only'>Cards</h3>
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
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App