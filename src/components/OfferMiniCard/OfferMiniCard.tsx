import { createIcon } from '@/utilities/ComponentUtilities';
import './OfferMiniCard.css';
import type { Offer } from '@/types/CommonTypes';

type OfferMiniCardProps = {
    offer: Offer;
    onClick: Function;
    asRow?: boolean;
}

const OfferMiniCard: React.FC<OfferMiniCardProps> = ({offer, onClick, asRow}) => {
    if (asRow) {
        return (
            <div className="offer-mini-card row" onClick={() => onClick()}>
                <div className="offer-mini-card-title-container">
                    <span className="offer-mini-card-title">{offer.title}</span>
                    <span className="offer-mini-card-subtitle">{offer.description}</span>
                </div>
                <div className="offer-mini-card-price-discount-container">
                    <span className="offer-mini-card-price">{offer.price}</span>
                    <div className='offer-mini-card-discount-badge'>
                        {offer.discount}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="offer-mini-card" onClick={() => onClick()}>
            <div className="offer-mini-card-title-container">
                {createIcon(offer.icon, 'offer-mini-card-icon')}
                <span className="offer-mini-card-title">{offer.title}</span>
            </div>
            <div className='offer-mini-card-middle'>
                <span className="offer-mini-card-subtitle">{offer.subtitle}</span>
                {offer.description && (<span className="offer-mini-card-description">{offer.description}</span>)}
            </div>
            <div className="offer-mini-card-price-discount-container">
                <span className="offer-mini-card-price">{offer.price}</span>
                <div className='offer-mini-card-discount-badge'>
                    {offer.discount}
                </div>
            </div>
        </div>
    );
}

export default OfferMiniCard;