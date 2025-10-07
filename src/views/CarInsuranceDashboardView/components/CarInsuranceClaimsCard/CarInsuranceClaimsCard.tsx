import CardHeader from "@/components/CardHeader/CardHeader";
import { useState } from "react";
import './CarInsuranceClaimsCard.css';
import { Divider } from "primereact/divider";
import type { Claim } from "@/types/CommonTypes";
import ClaimsDialog from "@/components/Claims/ClaimsDialog";
import ClaimSummary from "@/components/Claims/ClaimsSummary";

type CarInsuranceClaimsCardProps = {
    claims: Claim[];
}

const CarInsuranceClaimsCard: React.FC<CarInsuranceClaimsCardProps> = ({claims}) => {

    const [claimsDialogVisible, setClaimsDialogVisible] = useState<boolean>(false);

    return (
        <div className="generic-dashboard-card col-6" style={{gap: '0.625rem'}}>
            <CardHeader title="Seguimiento solicitudes" />
            <div className="generic-dashboard-card-content car-insurance-claims-card-content">
                {
                    claims.slice(0, 4).map((claim) => {
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
            
            <ClaimsDialog claims={claims} visible={claimsDialogVisible} setVisible={setClaimsDialogVisible}/>
        </div>
    );
}

export default CarInsuranceClaimsCard;