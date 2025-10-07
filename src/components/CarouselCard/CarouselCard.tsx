import CardHeader from "@/components/CardHeader/CardHeader";
import { Carousel } from "primereact/carousel";
import './CarouselCard.css';

type CarouselCardProps = {
    images: {
        id: number,
        url: string,
        alt: string,
        onClick: Function;
    }[],
    title: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({images, title}) => {

    const itemTemplate = (item: typeof images[0]) => {
        return (<img src={item.url} alt={item.alt} className="carousel-card-img" onClick={() => item.onClick()}/>);
    };

    return (
        <div className="generic-dashboard-card col-6" style={{ gap: 'var(--spacing-0)', paddingBottom: '0' }}>
            <CardHeader title={title} />
            <div className="generic-dashboard-card-content">
                <Carousel
                    value={images}
                    numVisible={1}
                    numScroll={1}
                    circular
                    autoplayInterval={5000}
                    itemTemplate={itemTemplate}
                    showNavigators={true}
                    showIndicators={false}
                    containerClassName='carousel-card-container'
                />
            </div>
        </div>
    );
}

export default CarouselCard;