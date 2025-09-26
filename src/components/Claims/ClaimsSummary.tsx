import type { Claim } from "@/types/CommonTypes";
import './Claims.css';

type ClaimSummaryProps = {
    claim: Claim;
}

const ClaimSummary: React.FC<ClaimSummaryProps> = ({claim}) => {
    return (
        <div className="claim-summary">
            <div className="claim-summary-main-part">
                <span className="claim-summary-description">{claim.description}</span>
                <span className="claim-summary-type">{claim.type}</span>    
            </div>
            <span className="claim-summary-date">{claim.date}</span>
            <span className="claim-summary-ammount">{claim.ammount}</span>
            <div className={`claim-summary-badge ${claim.status === 'pending' ? 'pending' : ''}`}>
                <div className={`claim-summary-badge-icon ${claim.status === 'pending' ? 'pending' : ''}`}></div>
                <p className={`claim-summary-badge-text ${claim.status === 'pending' ? 'pending' : ''}`}>{claim.status === 'pending' ? "En proceso" : "Completado"}</p>
            </div>
        </div>
    );
}

export default ClaimSummary;