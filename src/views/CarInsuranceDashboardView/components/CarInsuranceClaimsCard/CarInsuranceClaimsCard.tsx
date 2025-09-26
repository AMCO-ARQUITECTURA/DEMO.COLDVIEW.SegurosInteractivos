import CardHeader from "@/components/CardHeader/CardHeader";
import { useState } from "react";
import './CarInsuranceClaimsCard.css';
import { Divider } from "primereact/divider";
import type { Claim } from "@/types/CommonTypes";
import ClaimsDialog from "@/components/Claims/ClaimsDialog";
import ClaimSummary from "@/components/Claims/ClaimsSummary";

const CarInsuranceClaimsCard = () => {

    const [claimsDialogVisible, setClaimsDialogVisible] = useState<boolean>(false);

    const claimsList: Claim[] = [
        { description: "Daño por colision", type: 'Siniestro', date: "15 Julio, 2025", ammount: "$12,450", status: "pending" },
        { description: "Rotura de cristales", type: 'Siniestro', date: "23 Junio, 2025", ammount: "$555", status: "pending" },
        { description: "Remolque", type: 'Asistencia', date: "13 Junio, 2025", ammount: "-", status: "completed" },
        { description: "Remolque", type: 'Asistencia', date: "10 Junio, 2025", ammount: "$12,450", status: "completed" },
        { description: "Remolque", type: 'Asistencia', date: "12 Junio, 2025", ammount: "$12,450", status: "completed" },
        { description: "Daño por colision", type: 'Siniestro', date: "27 Diciembre, 2024", ammount: "$5,123", status: "completed" },
        { description: "Daño por colision", type: 'Siniestro', date: "14 Mayo, 2024", ammount: "$450", status: "completed" },
        { description: "Daño por colision", type: 'Siniestro', date: "13 Julio, 2023", ammount: "$1050", status: "rejected" },
        { description: "Daño por colision", type: 'Siniestro', date: "30 Abril, 2022", ammount: "$", status: "rejected" }
    ]

    return (
        <div className="generic-dashboard-card  normal col-6" style={{gap: '0.625rem'}}>
            <CardHeader title="Seguimiento solicitudes" />
            <div className="generic-dashboard-card-content" style={{ flexDirection: 'column', justifyContent: 'space-between', height: '80%'}}>
                {
                    claimsList.slice(0, 4).map((claim) => {
                        return (
                            <ClaimSummary claim={claim}/>
                        )
                    })
                }
            </div>
            <div className="car-insurance-claims-card-footer">
                <Divider className="car-insurance-claims-card-footer-divider"/>
                <div className="car-insurance-claims-footer-button" onClick={() => setClaimsDialogVisible(true)}>
                    <span >Ver todos</span>
                    <i className="pi pi-arrow-right car-insurance-claims-footer-button-icon"/>
                </div>
            </div>
            
            <ClaimsDialog claims={claimsList} visible={claimsDialogVisible} setVisible={setClaimsDialogVisible}/>
        </div>
    );
}

export default CarInsuranceClaimsCard;