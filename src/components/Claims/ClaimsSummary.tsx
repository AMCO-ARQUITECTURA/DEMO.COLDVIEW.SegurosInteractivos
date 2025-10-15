import type { Claim } from "@/types/CommonTypes";
import './Claims.css';

type ClaimSummaryProps = {
    claim: Claim;
    openClaimDetails: Function;
}

const ClaimSummary: React.FC<ClaimSummaryProps> = ({ claim, openClaimDetails}) => {
    return (
        <div className="claim-summary" onClick={() => openClaimDetails()}>
            <span className="claim-summary-description">{claim.description}</span>
            {claim.type && (<span className="claim-summary-type">{claim.type}</span>)}
            <span className="claim-summary-date">{claim.date}</span>
            <span className="claim-summary-amount">{claim.amount}</span>
            <div className="claim-summary-badge-container">
                <div className={`claim-summary-badge ${claim.status === 'pending' ? 'pending' : ''}`}>
                    <div className={`claim-summary-badge-icon ${claim.status === 'pending' ? 'pending' : ''}`}></div>
                    <p className={`claim-summary-badge-text ${claim.status === 'pending' ? 'pending' : ''}`}>{claim.status === 'pending' ? "En proceso" : "Completado"}</p>
                </div>
            </div>
        </div>
    );
}

export default ClaimSummary;