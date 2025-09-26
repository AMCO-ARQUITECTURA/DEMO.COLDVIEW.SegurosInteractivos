import { Carousel } from 'primereact/carousel';
import type { CSSProperties } from 'react';
import './PublicityCarouselCard.css';

type PublicityCarouselCard = {
    containerStyle?: CSSProperties;
    containerClass?: string;
}

const PublicityCarouselCard: React.FC<PublicityCarouselCard> = ({ containerStyle, containerClass }) => {
    // const images = [
    //     { id: 1, url: 'https://picsum.photos/800/400?random=1', alt: 'Publicity 1' },
    //     { id: 2, url: 'https://picsum.photos/800/400?random=2', alt: 'Publicity 2' },
    //     { id: 3, url: 'https://picsum.photos/800/400?random=3', alt: 'Publicity 3' },
    // ];
    const images = [
        { id: 1, url: '/banner.jpg', alt: 'Publicity 1' },
        { id: 2, url: '/banner_2.png', alt: 'Publicity 2' },
        { id: 3, url: '/banner_3.jpg', alt: 'Publicity 3' },
    ];

    const itemTemplate = (item: typeof images[0]) => {
        return (
            <div className="publicity-carousel-img-container">
                <a href="https://www.coldview.com" target="_blank" rel="noopener noreferrer">
                    <img src={item.url} alt={item.alt} className="publicity-carousel-img" />
                </a>
            </div>
        );
    };

    return (
        <div className={`publicity-carousel default-shadow col-12 ${containerClass || ''}`} style={containerStyle}>
            <Carousel value={images} numVisible={1} numScroll={1}
                circular autoplayInterval={5000}
                itemTemplate={itemTemplate} showNavigators={true} showIndicators={true}
                style={{ height: '100%', width: '100%', overflow: 'hidden' }}
                containerClassName='custom-carousel-container'
                contentClassName='custom-carousel-content'
            />
        </div>
    )
}


export default PublicityCarouselCard;
