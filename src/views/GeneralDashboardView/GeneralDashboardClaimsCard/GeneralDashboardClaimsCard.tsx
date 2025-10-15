import CardHeader from "@/components/CardHeader/CardHeader";
import { useState } from "react";
import { Divider } from "primereact/divider";
import type { GeneralDashboardClaim } from "@/types/GeneralDashboardTypes";
import GeneralDashboardClaimSummary from "./GeneralDashboardClaimSummary";
import './GeneralDashboardClaimsCard.css';
import GeneralDashboardClaimsDialog from "./GeneralDashboardClaimsDialog";

type GeneralDashboardClaimsCardProps = {
    claims: GeneralDashboardClaim[];
}

const GeneralDashboardClaimsCard: React.FC<GeneralDashboardClaimsCardProps> = ({claims}) => {

    const [claimsDialogVisible, setClaimsDialogVisible] = useState<boolean>(false);

    return (
        <div className="generic-dashboard-card  col-6 general-dashboard-claims-card">
            <CardHeader title="Seguimiento solicitudes" />
            <div className="general-dashboard-claims-card-content" >
                {
                    claims.slice(0, 4).map((claim) => {
                        return (
                            <GeneralDashboardClaimSummary claim={claim}/>
                        )
                    })
                }
            </div>
            <div className="general-dashboard-claims-card-footer">
                <Divider className="general-dashboard-claims-card-footer-divider"/>
                <div className="general-dashboard-claims-footer-button" onClick={() => setClaimsDialogVisible(true)}>
                    <span >Ver todos</span>
                    <i className="pi pi-arrow-right general-dashboard-claims-footer-button-icon"/>
                </div>
            </div>
            
            <GeneralDashboardClaimsDialog claims={claims} visible={claimsDialogVisible} setVisible={setClaimsDialogVisible}/>
        </div>
    );
}

export default GeneralDashboardClaimsCard;