import CardHeader from "@/components/CardHeader/CardHeader";
import ClaimsDialog from "@/components/Claims/ClaimsDialog";
import ClaimSummary from "@/components/Claims/ClaimsSummary";
import type { Claim } from "@/types/CommonTypes"
import { Divider } from "primereact/divider";
import { useState } from "react";
import './LifeInsuranceClaimsCard.css';

type LifeInsuranceClaimsCardProps = {
    claims: Claim[];
}

const LifeInsuranceClaimsCard: React.FC<LifeInsuranceClaimsCardProps> = ({claims}) => {
    const [claimsDialogVisible, setClaimsDialogVisible] = useState<boolean>(false);
    
    return (
        <div className="generic-dashboard-card space-between normal col-6">
            <CardHeader title="Seguimiento solicitudes" />
            <div className="generic-dashboard-card-content life-insurance-claims-card-content">
                {
                    claims.slice(0, 4).map((claim) => {
                        return (
                            <ClaimSummary claim={claim}/>
                        )
                    })
                }
            </div>
            <div className="life-insurance-claims-card-footer">
                <Divider className="life-insurance-claims-card-footer-divider"/>
                <div className="life-insurance-claims-footer-button" onClick={() => setClaimsDialogVisible(true)}>
                    <span >Ver todos</span>
                    <i className="pi pi-arrow-right life-insurance-claims-footer-button-icon"/>
                </div>
            </div>
            
            <ClaimsDialog claims={claims} visible={claimsDialogVisible} setVisible={setClaimsDialogVisible}/>
        </div>
    );
}

export default LifeInsuranceClaimsCard;