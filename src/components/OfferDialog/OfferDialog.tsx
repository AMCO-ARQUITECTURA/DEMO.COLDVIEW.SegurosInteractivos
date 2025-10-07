import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import './OfferDialog.css';
import type { Offer } from "@/types/CommonTypes";

type OfferDialogProps = {
    offer: Offer;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const OfferDialog: React.FC<OfferDialogProps> = ({ offer, visible, setVisible }) => {

    const popup = offer.popup;

    const redirectoTo = (linkTo: string) => {
        window.open(linkTo, '_blank', 'noopener,noreferrer');
    }

    const getHeaderContent = () => {
        return (
            <div className={`offer-dialog-header`}>
                {popup.discount && (
                    <span className="offer-dialog-discount">{popup.discount}</span>
                )}
                <span className="offer-dialog-header-title">{popup.title}</span>
                <span className="offer-dialog-header-subtitle">{popup.subtitle}</span>
            </div>
        );
    };

    const renderPriceSection = () => {
        if (!popup.price) return null;
        return (
            <div className="offer-dialog-price-section">
                {popup.oldPrice && (<div className="offer-dialog-old-price">{popup.oldPrice}</div>)}
                <div className="offer-dialog-current-price">{popup.price}</div>
            </div>
        );
    };

    const renderBenefits = () => {
        const benefits = popup.benefits;
        if (!benefits || benefits.items.length === 0) return null;
        return (
            <div className="offer-dialog-benefits">
                <h3 className="offer-dialog-benefits-title">
                    {offer.popup.benefits?.title}
                </h3>
                <ul className="offer-dialog-benefits-list">
                    {benefits.items.map((benefit, index) => (
                        <li key={index} className="offer-dialog-benefit-item">
                            <span className="offer-dialog-benefit-check">✓</span>
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderTrustIndicator = () => {
        const trustIndicator = offer.popup.trustIndicator;
        if (!trustIndicator) return null;
        const getIcon = () => {
            switch (trustIndicator.type) {
                case 'testimonial':
                    return '⭐⭐⭐⭐⭐';
                case 'guarantee':
                    return '🛡️';
                case 'popular':
                    return '🔥';
                default:
                    return '✅';
            }
        };
        return (
            <div className={`offer-dialog-trust offer-dialog-trust--${trustIndicator.type}`}>
                <span className="offer-dialog-trust-icon">{getIcon()}</span>
                <p className="offer-dialog-trust-text">{trustIndicator.text}</p>
            </div>
        );
    };

    const renderCTAButtons = () => {
        const ctaButtons = offer.popup.ctaButtons;

        return (
            <div className="offer-dialog-cta-section">
                {ctaButtons.map((cta, index) => (
                    <Button
                        key={index}
                        label={cta.label}
                        icon={cta.icon}
                        onClick={() => redirectoTo(cta.linkTo)}
                        className={`offer-dialog-cta`}
                    />
                ))}
            </div>
        );
    };

    return (
        <Dialog
            onHide={() => setVisible(false)}
            header={getHeaderContent()}
            visible={visible}
            className={`offer-dialog `}
        >
            <div className="offer-dialog-content">
                {renderPriceSection()}
                {offer.popup.description && (
                    <div className="offer-dialog-description">
                        {offer.popup.description}
                    </div>
                )}
                {renderBenefits()}
                {renderTrustIndicator()}
                {renderCTAButtons()}
            </div>
        </Dialog>
    );
};

export default OfferDialog;