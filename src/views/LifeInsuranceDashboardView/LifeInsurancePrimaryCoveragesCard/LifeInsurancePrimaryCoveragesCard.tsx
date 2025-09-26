import CardHeader from "@/components/CardHeader/CardHeader";
import type { LifeInsuranceDashboardMainCoverages } from "@/types/LifeInsuranceDashboardTypes";
import './LifeInsurancePrimaryCoveragesCard.css';

type LifeInsurancePrimaryCoveragesCardProps = {
    mainCoverages: LifeInsuranceDashboardMainCoverages;
}

const LifeInsurancePrimaryCoveragesCard: React.FC<LifeInsurancePrimaryCoveragesCardProps> = ({ mainCoverages }) => {
    return (
        <div className="generic-dashboard-card small col-4" style={{ gap: '0.4rem'}}>
            <CardHeader title="Coberturas principales" />
            <div className="life-insurance-primary-coverages-card-content">
                <div className="grid-span-all life-insurance-primary-coverage-ammount">
                    <span className="life-insurance-primary-coverage-ammount-label">Suma asegurada</span>
                    <span className="life-insurance-primary-coverage-ammount-value">{mainCoverages.totalCoverage}</span>
                </div>
                <div className="life-insurance-primary-coverage-item">
                    <span className="life-insurance-primary-coverage-label">Tipo de cobertura</span>
                    <span className="life-insurance-primary-coverage-value">{mainCoverages.coverageType}</span>
                </div>
                <div className="life-insurance-primary-coverage-item">
                    <span className="life-insurance-primary-coverage-label">Modalidad</span>
                    <span className="life-insurance-primary-coverage-value">{mainCoverages.modality}</span>
                </div>
                <div className="grid-span-all life-insurance-primary-coverage-item" >
                    <span className="life-insurance-primary-coverage-label">Inclusiones</span>
                    <span className="life-insurance-primary-coverage-value">{mainCoverages.additionals}</span>
                </div>
            </div>
        </div>
    );
}

export default LifeInsurancePrimaryCoveragesCard;