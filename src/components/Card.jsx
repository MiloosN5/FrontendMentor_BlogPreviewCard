const Card = ({ item }) => {

    return (
        <article className='card'>
            <div className='card__wrapper'>
                <header className='card__header'>
                    <figure className='card__graphics'>
                        <img 
                            src={item.graphics.src} 
                            alt={item.graphics.alt} 
                        />
                        <figcaption className='sr-only'>Promo graphics for the corresponding course/article</figcaption>
                    </figure>
                    <div className='card__meta'>
                        <span className='card__category'>{item.label}</span>
                        <time 
                            className='card__date' 
                            dateTime='2023-09-23'
                        >
                            {item.published}
                        </time>
                    </div>
                </header>
                <div className='card__content'>
                    <h4 className='card__title'>{item.title}</h4>
                    <p className='card__desc'>{item.desc}</p>
                </div>
                <footer className='card__footer'>
                    <address className='card__author'>
                        <img 
                            src={item.author.avatar.src} 
                            alt={item.author.avatar.alt} 
                        />
                        <span className='card__author-name'>{item.author.name}</span>
                    </address>
                </footer>
            </div>
        </article>
    )
}

export default Card