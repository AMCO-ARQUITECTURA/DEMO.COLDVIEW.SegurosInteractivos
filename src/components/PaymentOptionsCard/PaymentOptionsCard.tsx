import type { ReactNode } from "react";

type PaymentOptionsCardProps = {
    headerIcon: ReactNode;
    title: string;
    description: string;
    mainPart: ReactNode;
    subtext: string;
}

const PaymentOptionsCard: React.FC<PaymentOptionsCardProps> = (props) => {
    return (
        <div className="payment-options-card">
            <div className="payment-options-card-header">
                {props.headerIcon}
                <p className="payment-options-card-header-title">{props.title}</p>
            </div>
            <div className="payment-options-card-content">
                <p className="payment-options-card-content-description">{props.description}</p>
                {props.mainPart}
                <p className="payment-options-card-content-subtext">{props.subtext}</p>
            </div>
        </div>
    );
}

export default PaymentOptionsCard;