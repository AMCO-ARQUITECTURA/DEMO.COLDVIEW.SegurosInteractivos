import type { Benefit } from "@/types/AppTypes";
import { createIcon } from "@/utilities/ComponentUtilities";

type BenefitSummary = {
    benefit: Benefit;
    compact?: boolean;
}

const BenefitSummary: React.FC<BenefitSummary> = ({ benefit, compact }) => {
    //TODO: Completar el formato total que se muestra en el dialogo
    if (!compact) {
        return (
            <div className="benefit-summary detailed">
                <div className="benefit-summary-title">
                    <div className="benefit-summary-left-part">
                        {createIcon(benefit.icon, 'benefit-summary-icon')}
                        <div className="benefit-summary-left-part-text">
                            <span className="benefit-summary-title">{benefit.title}</span>
                            <span className="benefit-summary-subtitle">{benefit.subtitle}</span>
                        </div>
                    </div>
                    <div className='benefit-summary-discount-badge'>
                        {benefit.discount}
                    </div>
                </div>
                <div className="benefit-summary-description">
                    {benefit.description}
                </div>
            </div>
        );
    }

    return (
        <div className="benefit-summary compact">
            <div className="benefit-summary-left-part">
                {createIcon(benefit.icon, 'benefit-summary-icon')}
                <div className="benefit-summary-left-part-text">
                    <span className="benefit-summary-title">{benefit.title}</span>
                    <span className="benefit-summary-subtitle">{benefit.subtitle}</span>
                </div>
            </div>
            <div className='benefit-summary-discount-badge'>
                {benefit.discount}
            </div>
        </div>
    );
}

export default BenefitSummary;