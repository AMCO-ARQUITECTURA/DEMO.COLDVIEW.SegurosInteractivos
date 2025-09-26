import CardHeader from "@/components/CardHeader/CardHeader";
import OfferDialog from "@/components/OfferDialog/OfferDialog";
import OfferMiniCard from "@/components/OfferMiniCard/OfferMiniCard";
import { emptyOffer, type Offer } from "@/types/CommonTypes";
import { useState } from "react";

type CarInsuranceCrossSellingCardProps = {
    offers: Offer[];
}

const CarInsuranceCrossSellingCard: React.FC<CarInsuranceCrossSellingCardProps> = ({offers}) => {

    const [advertDetailsPopupVisible, setAdvertDetailsPopupVisible] = useState<boolean>(false);
    const [selectedOffer, setSelectedOffer] = useState<Offer>(emptyOffer);

    //TODO: Revisar ofertas y armar bien algo con logica que lo obtenga desde el json de entrada.
    //TODO: Armar popup con la info de la publicidad correspondiente
    const openDetailsPopup = (offer: Offer) => {
        setSelectedOffer(offer);
        setAdvertDetailsPopupVisible(true);
    }

    return (
        <div className="generic-dashboard-card small col-6" style={{gap: '0.755rem'}}>
            <CardHeader title="Oportunidades"/>
            <div className="generic-dashboard-card-content" style={{display: "flex", flexDirection: 'row', gap: '2.5%'}}>
                {
                    offers.slice(0, 3).map((offer) => {
                        return (
                            <OfferMiniCard offer={offer} onClick={() => openDetailsPopup(offer)}/>
                        )
                    })
                }
            </div>
            <OfferDialog visible={advertDetailsPopupVisible} setVisible={setAdvertDetailsPopupVisible} offer={selectedOffer!} />

        </div>
    );
}

export default CarInsuranceCrossSellingCard;