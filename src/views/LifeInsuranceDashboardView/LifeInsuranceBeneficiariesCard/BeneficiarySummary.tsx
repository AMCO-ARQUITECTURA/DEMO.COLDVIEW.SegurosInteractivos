import Icon from "@/components/Icon/Icon";
import type { LifeInsuranceDashboardBeneficiary } from "@/types/LifeInsuranceDashboardTypes";

type BeneficiarySummaryProps = {
    beneficiary: LifeInsuranceDashboardBeneficiary;
}

const BeneficiarySummary: React.FC<BeneficiarySummaryProps> = ({ beneficiary }) => {
    const percentage = beneficiary.percentage ? parseInt(beneficiary.percentage.replace('%', '')) : "";
    return (
        <div className="beneficiary-summary">
            {beneficiary.icon && (<Icon {...beneficiary.icon} iconClassname="beneficiary-summary-icon" />)}
            <span className="beneficiary-name">{beneficiary.name}</span>
            {beneficiary.percentage && (
                <div className="beneficiary-percentage-badge"
                    style={{ background: `linear-gradient(to right, #497FEB ${percentage}%, #84ABF9 ${percentage}%)` }}>
                    {beneficiary.percentage}
                </div>
            )}
        </div>
    );
}

export default BeneficiarySummary;