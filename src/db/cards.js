import PromoImage from '../assets/images/illustration-article.svg'
import AuthorImage from '../assets/images/image-avatar.webp'

export const cards = [
    {
        graphics: {
            src: PromoImage,
            alt: 'Promo image for the corresponding course/article'
        },
        label: 'Learning',
        published: 'Published 21 Dec 2023',
        title: 'HTML & CSS foundations',
        desc: 'These languages are the backbone of every website, defining structure, content, and presentation.',
        author: {
            avatar: {
                src: AuthorImage,
                alt: 'Profile picture of the author'
            },
            name: 'Greg Hooper'
        }

    }
]