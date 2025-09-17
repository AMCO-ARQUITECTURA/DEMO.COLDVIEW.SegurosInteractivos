import './PublicityMiniCard.css';

type PublicityMiniCardProps = {
    primeicon: string;
    title: string;
    description: string;
    price: string;
    discount: string;
}

const PublicityMiniCard: React.FC<PublicityMiniCardProps> = (props) => {
    return (
        <div className="publicity-mini-card">
            <div className="publicity-mini-title-container">
                    <i className={`pi ${props.primeicon} publicity-mini-card-icon`}/>
                <span className="publicity-mini-card-title">{props.title}</span>
            </div>
            <span className="publicity-mini-card-description">{props.description}</span>
            <div className="publicity-mini-card-price-discount-container">
                <span className="publicity-mini-card-price">{props.price}</span>
                <div className='publicity-mini-card-discount-badge'>
                    {props.discount}
                </div>
            </div>
        </div>
    );
}

export default PublicityMiniCard;