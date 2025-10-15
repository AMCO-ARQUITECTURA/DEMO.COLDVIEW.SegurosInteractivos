import CardHeader from "@/components/CardHeader/CardHeader";
import type { LifeInsuranceDashboardPaymentInformation } from "@/types/LifeInsuranceDashboardTypes";
import './LifeInsurancePaymentCard.css';
import { useState } from "react";
import PaymentOptionsDialog from "@/components/PaymentOptionsCard/PaymentOptionsDialog";
import type { PolicyPayment } from "@/types/CommonTypes";

type LifeInsurancePaymentCardProps = {
    data: LifeInsuranceDashboardPaymentInformation;
}

const LifeInsurancePaymentCard: React.FC<LifeInsurancePaymentCardProps> = ({data}) => {

    const [paymentFormVisible, setPaymentFormVisible] = useState<boolean>(false);

    const selectedPayment: PolicyPayment = {
        amount: data.amount,
        date: data.nextPaymentDate,
        status: "pending"
    }

        
    return (
        <div className="generic-dashboard-card small-spacing col-2 life-insurance-payment-card">
            <CardHeader title="Prima"/>
            <div className="generic-dashboard-card-content life-insurance-payment-card-content">
                <div className="life-insurance-main-stat">
                    <div className="life-insurance-main-amount">{data.amount}</div>
                    <div className="life-insurance-main-frequency">Prima {data.frequency.toLowerCase()}</div>
                </div>
                <div className="life-insurance-details-grid">
                    <div className='life-insurance-detail-item'>
                        <span className="life-insurance-detail-label">Vencimiento</span>
                        <span className="life-insurance-detail-value">{data.nextPaymentDate}</span>
                    </div>
                    <div className='life-insurance-detail-item'>
                        <span className="life-insurance-detail-label">Forma de pago</span>
                        <span className="life-insurance-detail-value">{data.paymentMethod}</span>
                    </div>
                </div>
                <button className="life-insurance-pay-button" onClick={() => setPaymentFormVisible(true)}>Pagar ahora</button>
            </div>
            <PaymentOptionsDialog visible={paymentFormVisible} setVisible={setPaymentFormVisible} selectedPayment={selectedPayment}/>
        </div>
    );
}

export default LifeInsurancePaymentCard;