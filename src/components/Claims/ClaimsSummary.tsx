import type { Claim } from "@/types/CommonTypes";
import './Claims.css';

type ClaimSummaryProps = {
    claim: Claim;
    openClaimDetails: Function;
    asGeneral?: boolean;
}

const ClaimSummary: React.FC<ClaimSummaryProps> = ({ claim, openClaimDetails, asGeneral }) => {
    const statusLabel = claim.status === "pending" ? "En Proceso" : claim.status === "rejected" ? "Rechazado" : "Completado"
    if (asGeneral) {
        return (
            <div className="general-claim-summary" onClick={() => openClaimDetails()}>
                <div className="general-claim-summary-details">
                    <div className="general-claim-summary-details-section">
                        <span className="general-claim-summary-policy-name">{claim.productName}</span>
                        <span className="general-claim-summary-policy-number">{claim.productId}</span>
                    </div>
                    <div className="general-claim-summary-details-section">
                        <span className="general-claim-summary-description ellipsis">{claim.description}</span>
                        <span className="general-claim-summary-date">{claim.date}</span>
                    </div>
                </div>
                <div className="general-claim-summary-price-and-status">
                    <span className="general-claim-summary-amount">{claim.amount}</span>
                    <div className={`claim-summary-badge ${claim.status}`}>
                        <div className={`claim-summary-badge-icon ${claim.status}`}/>
                        <p className={`claim-summary-badge-text general ${claim.status}`}>{statusLabel}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="claim-summary" onClick={() => openClaimDetails()}>
            <span className="claim-summary-description ellipsis">{claim.description}</span>
            {claim.type && (<span className="claim-summary-type">{claim.type}</span>)}
            <span className="claim-summary-date">{claim.date}</span>
            <span className="claim-summary-amount">{claim.amount}</span>
            <div className="claim-summary-badge-container">
                <div className={`claim-summary-badge ${claim.status}`}>
                    <div className={`claim-summary-badge-icon ${claim.status}`}></div>
                    <p className={`claim-summary-badge-text ${claim.status}`}>{statusLabel}</p>
                </div>
            </div>
        </div>
    );
}

export default ClaimSummary;