import CardHeader from "@/components/CardHeader/CardHeader";
import OfferDialog from "@/components/OfferDialog/OfferDialog";
import OfferMiniCard from "@/components/OfferMiniCard/OfferMiniCard";
import { emptyOffer, type Offer } from "@/types/CommonTypes";
import { useState } from "react";
import './LifeInsuranceUpsellingCard.css';

type LifeInsuranceUpsellingProps = {
    upsellingOffers: Offer[];
}

const LifeInsuranceUpsellingCard: React.FC<LifeInsuranceUpsellingProps> = ({ upsellingOffers }) => {

    const [advertDetailsPopupVisible, setAdvertDetailsPopupVisible] = useState<boolean>(false);
    const [selectedAdvert, setSelectedAdvert] = useState<Offer>(emptyOffer);

    //TODO: Armar popup con la info de la publicidad correspondiente
    const openDetailsPopup = (offer: Offer) => {
        setSelectedAdvert(offer);
        setAdvertDetailsPopupVisible(true);
    }

    const headerBadge = <div className="life-insurance-upselling-card-badge">Recomendado</div>

    return (
        <div className="generic-dashboard-card small life-insurance-upselling-card col-4">
            <CardHeader title="Mejora tu cobertura!" subtitle="Ofertas especiales para ti" badge={headerBadge}/>
            <div className="generic-dashboard-card-content life-insurance-upselling-card-content">
                {
                    upsellingOffers.slice(0, 2).map((offer) => {
                        return (<>
                            <OfferMiniCard offer={offer} onClick={() => openDetailsPopup(offer)} asRow/>
                        </>
                            
                        )
                    })
                }
            </div>
            <OfferDialog visible={advertDetailsPopupVisible} setVisible={setAdvertDetailsPopupVisible} offer={selectedAdvert!} />
        </div>
    );
}

export default LifeInsuranceUpsellingCard;