import CardHeader from "@/components/CardHeader/CardHeader";
import type { LifeInsuranceDashboardBeneficiary } from "@/types/LifeInsuranceDashboardTypes";
import BeneficiarySummary from "./BeneficiarySummary";
import './LifeInsuranceBeneficiariesCard.css';

type LifeInsuranceBeneficiariesCardProps = {
    beneficiaries: LifeInsuranceDashboardBeneficiary[];
}

const LifeInsuranceBeneficiariesCard: React.FC<LifeInsuranceBeneficiariesCardProps> = ({ beneficiaries }) => {
    return (
        <div className="generic-dashboard-card life-insurance-beneficiaries-card col-4 ">
            <CardHeader title="Beneficiarios"/>
            <div className="generic-dashboard-card-content life-insurance-beneficiaries-card-content">
                { beneficiaries.slice(0, 4).map((beneficiary => {
                    return (
                        <BeneficiarySummary beneficiary={beneficiary} />
                    )
                }))}
            </div>
        </div>
    );
}

export default LifeInsuranceBeneficiariesCard;