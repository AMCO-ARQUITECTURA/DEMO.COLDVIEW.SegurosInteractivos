import CardHeader from "@/components/CardHeader/CardHeader";
import CoverageMiniCard from "@/components/CoverageMiniCard/CoverageMiniCard";
import GenericButton from "@/components/GenericButton/GenericButton";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';


const CarCoveringsCard = () => {
    //TODO: Popup con la informacion de las coberturas y exclusiones tal como lo detalla la
    const [coveringDetailsPopupVisible, setCoveringDetailsPopupVisible] = useState<boolean>(false);
    
    const openDetailsPopup = () => {
        console.log("open")
        setCoveringDetailsPopupVisible(true);
    }

    return (
        <div className="generic-dashboard-card normal-spacing car-coverings-card">
            <CardHeader title="Coberturas" />
            <div className="generic-dashboard-card-content" style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <CoverageMiniCard iconType="img" img="thief.png" imgHeight={20} title="Robo total" subtitle="Hasta $3000" height={90} width={125}/>
                <CoverageMiniCard iconType="img" img="car-windscreen.png" imgHeight={20} title="Rotura de cristales" subtitle="100% del siniestro hasta $4000"height={90} width={125}/>
                <CoverageMiniCard iconType="img" img="law.png" imgHeight={20} title="Responsabilidad civil" subtitle="100% del siniestro hasta $7500"height={90} width={125}/>
                <CoverageMiniCard iconType="img" img="earthquake.png" imgHeight={20} title="Terremoto" subtitle="Cobertura total sin franquicia"height={90} width={125}/>
            </div>
            <div className="car-coverings-card-footer">
                <GenericButton small secondary label="Ver exclusiones" onClick={(openDetailsPopup)}/>
                <GenericButton small label="Ver todas" onClick={openDetailsPopup}/> 
            </div>

            <Dialog onHide={() => setCoveringDetailsPopupVisible(false)} header="Detalle de coberturas y exclusiones" visible={coveringDetailsPopupVisible}>
                
            </Dialog>
            
        </div>
    );
}

export default CarCoveringsCard;