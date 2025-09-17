import CardHeader from "@/components/CardHeader/CardHeader";
import PublicityMiniCard from "@/components/PublicityMiniCard/PublicityMiniCard";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

const CarUpsellingCard = () => {

    const [advertDetailsPopupVisible, setAdvertDetailsPopupVisible] = useState<boolean>(false);
    const [selectedAdvert, setSelectedAdvert] = useState<number>(0);

    const openDetailsPopup = (publicityId: number) => {
        console.log("open")
        setSelectedAdvert(publicityId);
        setAdvertDetailsPopupVisible(true);
    }

    return (
        <div className="generic-dashboard-card normal-spacing space-between car-upselling-card">
            <CardHeader title="Mejora tu cobertura! (Upselling)" subtitle="Ofertas especiales para ti"/>
            <div className="generic-dashboard-card-content" style={{display: "flex", flexDirection: 'row', gap: '2.5%'}}>
                <PublicityMiniCard primeicon="pi-car" title="Cobertura integral" 
                    description="Cobertura integral para tu automovil! Incluye granizo, incendio y rotura de cristales" price="+8.500" discount="20% OFF"/>
                <PublicityMiniCard primeicon="pi-car" title="Cobertura integral" 
                    description="Cobertura integral para tu automovil! Incluye granizo, incendio y rotura de cristales" price="+8.500" discount="20% OFF"/>
                <PublicityMiniCard primeicon="pi-car" title="Cobertura integral" 
                    description="Cobertura integral para tu automovil! Incluye granizo, incendio y rotura de cristales" price="+8.500" discount="20% OFF"/>
            </div>
            <Dialog onHide={() => setAdvertDetailsPopupVisible(false)} header="Detalle de oferta" visible={advertDetailsPopupVisible}>

            </Dialog>

        </div>
    );
}

export default CarUpsellingCard;