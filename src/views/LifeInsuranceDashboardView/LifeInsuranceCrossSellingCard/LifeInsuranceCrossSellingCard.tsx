import CardHeader from "@/components/CardHeader/CardHeader";
import OfferDialog from "@/components/OfferDialog/OfferDialog";
import OfferMiniCard from "@/components/OfferMiniCard/OfferMiniCard";
import { emptyOffer, type Offer } from "@/types/CommonTypes";
import { useState } from "react";

type LifeInsuranceCrossSellingCardProps = {
    offers: Offer[];
}

const LifeInsuranceCrossSellingCard: React.FC<LifeInsuranceCrossSellingCardProps> = ({offers}) => {

    const [advertDetailsPopupVisible, setAdvertDetailsPopupVisible] = useState<boolean>(false);
    const [selectedOffer, setSelectedOffer] = useState<Offer>(emptyOffer);

    const openDetailsPopup = (offer: Offer) => {
        setSelectedOffer(offer);
        setAdvertDetailsPopupVisible(true);
    }

    return (
        <div className="generic-dashboard-card normal col-6" style={{gap: '0.755rem'}}>
            <CardHeader title="Oportunidades"/>
            <div className="generic-dashboard-card-content" style={{gap: 'var(--spacing-2)'}}>
                {
                    offers.slice(0, 3).map((offer) => {
                        return (
                            <OfferMiniCard offer={offer} onClick={() => openDetailsPopup(offer)} asRow/>
                        )
                    })
                }
            </div>
            <OfferDialog visible={advertDetailsPopupVisible} setVisible={setAdvertDetailsPopupVisible} offer={selectedOffer!} />

        </div>
    );
}

export default LifeInsuranceCrossSellingCard;