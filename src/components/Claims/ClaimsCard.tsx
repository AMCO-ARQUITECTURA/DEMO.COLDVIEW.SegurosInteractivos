import CardHeader from "@/components/CardHeader/CardHeader";
import ClaimsDialog from "@/components/Claims/ClaimsDialog";
import ClaimSummary from "@/components/Claims/ClaimsSummary";
import { emptyClaim, type Claim } from "@/types/CommonTypes"
import { Divider } from "primereact/divider";
import { useState } from "react";
import './Claims.css';
import ClaimDetailsDialog from "@/components/Claims/ClaimDetailsDialog";

type ClaimsCardProps = {
    claims: Claim[];
}

const ClaimsCard: React.FC<ClaimsCardProps> = ({claims}) => {
    const [claimsDialogVisible, setClaimsDialogVisible] = useState<boolean>(false);
    const [claimDetailsDialogVisible, setClaimDetailsDialogVisible] = useState<boolean>(false);
    const [selectedClaim, setSelectedClaim] = useState(emptyClaim);

    const openClaimDetails = (claim: Claim) => {
        setSelectedClaim(claim);
        setClaimDetailsDialogVisible(true);
    }
    
    return (
        <div className="generic-dashboard-card space-between col-6">
            <CardHeader title="Seguimiento solicitudes" />
            <div className="generic-dashboard-card-content claims-card-content">
                {
                    claims.slice(0, 4).map((claim) => {
                        return (
                            <ClaimSummary claim={claim} openClaimDetails={() => openClaimDetails(claim)}/>
                        )
                    })
                }
            </div>
            <div className="claims-card-footer">
                <Divider className="claims-card-footer-divider"/>
                <div className="claims-card-footer-button" onClick={() => setClaimsDialogVisible(true)}>
                    <span >Ver todos</span>
                    <i className="pi pi-arrow-right claims-card-footer-button-icon"/>
                </div>
            </div>
            
            <ClaimsDialog claims={claims} visible={claimsDialogVisible} setVisible={setClaimsDialogVisible}/>
            <ClaimDetailsDialog visible={claimDetailsDialogVisible} setVisible={setClaimDetailsDialogVisible} claim={selectedClaim} />
        </div>
    );
}

export default ClaimsCard;