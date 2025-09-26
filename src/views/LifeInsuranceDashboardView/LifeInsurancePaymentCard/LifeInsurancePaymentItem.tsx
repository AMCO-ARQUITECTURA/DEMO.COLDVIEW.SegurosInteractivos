import Icon from "@/components/Icon/Icon";
import type { IconProps } from "@/components/Icon/IconTypes"

type LifeInsurancePaymentItemProps = {
    iconProps: IconProps;
    label: string;
    value: string;
}

const LifeInsurancePaymentItem: React.FC<LifeInsurancePaymentItemProps> = ({iconProps, label, value}) => {
    return (
        <div className="life-insurance-payment-item">
            <div className="life-insurance-payment-item-label-container">
                <Icon {...iconProps} />
                <span className="life-insurance-payment-item-label">{label}</span>
            </div>
            <span className="life-insurance-payment-item-value">{value}</span>
        </div>
    );
}

export default LifeInsurancePaymentItem