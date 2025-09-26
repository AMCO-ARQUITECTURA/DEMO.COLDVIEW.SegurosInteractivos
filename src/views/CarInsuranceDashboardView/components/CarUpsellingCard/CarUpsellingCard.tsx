import CardHeader from "@/components/CardHeader/CardHeader";
import OfferDialog from "@/components/OfferDialog/OfferDialog";
import OfferMiniCard from "@/components/OfferMiniCard/OfferMiniCard";
import { emptyOffer, type Offer } from "@/types/CommonTypes";
import { useState } from "react";

type CarUpsellingCardProps = {
    upsellingOffers: Offer[];
}

const CarUpsellingCard: React.FC<CarUpsellingCardProps> = ({upsellingOffers}) => {

    const [advertDetailsPopupVisible, setAdvertDetailsPopupVisible] = useState<boolean>(false);
    const [selectedAdvert, setSelectedAdvert] = useState<Offer>(emptyOffer);

    //TODO: Armar popup con la info de la publicidad correspondiente
    const openDetailsPopup = (offer: Offer) => {
        setSelectedAdvert(offer);
        setAdvertDetailsPopupVisible(true);
    }

    return (
        <div className="generic-dashboard-card space-between  small col-6">
            <CardHeader title="Mejora tu cobertura! (Upselling)" subtitle="Ofertas especiales para ti"/>
            <div className="generic-dashboard-card-content" style={{display: "flex", flexDirection: 'row', gap: '2.5%'}}>
                {
                    upsellingOffers.slice(0, 3).map((offer) => {
                        return (
                            <OfferMiniCard offer={offer} onClick={() => openDetailsPopup(offer)}/>
                        )
                    })
                }
            </div>
            <OfferDialog visible={advertDetailsPopupVisible} setVisible={setAdvertDetailsPopupVisible} offer={selectedAdvert!} />

        </div>
    );
}

export default CarUpsellingCard;