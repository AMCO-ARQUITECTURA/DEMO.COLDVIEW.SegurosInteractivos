import CardHeader from "@/components/CardHeader/CardHeader";
import PaymentSummary from "./PaymentSummary";
import './CarInsurancePaymentsCard.css';
import { useState } from "react";
import PaymentOptionsCard from "@/components/PaymentOptionsCard/PaymentOptionsDialog";
import { emptyPayment, type PolicyPayment } from "@/types/CommonTypes";

type CarInsurancePaymentsCardProps = {
    payments: PolicyPayment[];
}

const CarInsurancePaymentsCard: React.FC<CarInsurancePaymentsCardProps> = ({payments}) => {

    const [paymentFormVisible, setPaymentFormVisible] = useState<boolean>(false);
    const [selectedPayment, setSelectedPayment] = useState<PolicyPayment>(emptyPayment);

    const openPaymentForm = (payment: PolicyPayment) => {
        setSelectedPayment(payment);
        setPaymentFormVisible(true);
    }

    return (
        <div className="generic-dashboard-card col-6" style={{gap: '10px'}}>
            <CardHeader title="Facturacion" />
            <div className="generic-dashboard-card-content" style={{ display: "flex", gap: '5px' }}>
                {
                    payments.slice(0, 4).map((payment) => {
                        return (
                            <PaymentSummary payment={payment} onPayClick={() => openPaymentForm(payment)}/>
                        )
                    })
                }
            </div>
            <PaymentOptionsCard visible={paymentFormVisible} setVisible={setPaymentFormVisible} selectedPayment={selectedPayment}/>
        </div>
    );
}

export default CarInsurancePaymentsCard;