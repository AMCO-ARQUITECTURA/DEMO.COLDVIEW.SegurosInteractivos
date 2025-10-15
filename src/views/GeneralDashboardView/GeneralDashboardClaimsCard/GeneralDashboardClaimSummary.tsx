import type { GeneralDashboardClaim } from "@/types/GeneralDashboardTypes";

type GeneralDashboardClaimSummaryProps = {
    claim: GeneralDashboardClaim;
}

const GeneralDashboardClaimSummary: React.FC<GeneralDashboardClaimSummaryProps> = ({claim}) => {
    return (
        <div className="general-dashboard-claim-summary">
            <div className="general-dashboard-claim-summary-details">
                <div className="general-dashboard-claim-summary-details-section">
                    <span className="general-dashboard-claim-summary-policy-name">{claim.productName}</span>
                    <span className="general-dashboard-claim-summary-policy-number">{claim.productId}</span>
                </div>
                <div className="general-dashboard-claim-summary-details-section">
                    <span className="general-dashboard-claim-summary-description">{claim.description}</span>
                    <span className="general-dashboard-claim-summary-date">{claim.date}</span>
                </div>
            </div>
            <div className="general-dashboard-claim-summary-price-and-status">
                <span className="general-dashboard-claim-summary-amount">{claim.amount}</span>
                <div className={`general-dashboard-claim-summary-badge ${claim.status === 'pending' ? 'pending' : ''}`}>
                    <div className={`general-dashboard-claim-summary-badge-icon ${claim.status === 'pending' ? 'pending' : ''}`}></div>
                    <p className={`general-dashboard-claim-summary-badge-text ${claim.status === 'pending' ? 'pending' : ''}`}>{claim.status === 'pending' ? "En proceso" : "Completado"}</p>
                </div>
            </div>
        </div>
    );
}

export default GeneralDashboardClaimSummary;