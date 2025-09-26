import CardHeader from "@/components/CardHeader/CardHeader";
import PaymentSummary from "./PaymentSummary";
import type { Payment } from "../../CarInsuranceDashboardViewTypes";
import './CarInsurancePaymentsCard.css';
import { useState } from "react";
import PaymentOptionsCard from "@/components/PaymentOptionsCard/PaymentOptionsDialog";

const CarInsurancePaymentsCard = () => {

    const [paymentFormVisible, setPaymentFormVisible] = useState<boolean>(false);
    const [selectedPayment, setSelectedPayment] = useState<Payment>({date: "", ammount: "", status: "pending"});

    const paymentsList: Payment[] = [
        { date: "15 Septiembre, 2025", ammount: "$284", status: "pending" },
        { date: "15 Agosto, 2025", ammount: "$284", status: "paid" },
        { date: "15 Julio, 2025", ammount: "$284", status: "paid" },
        { date: "15 Junio, 2025", ammount: "$284", status: "paid" },
        { date: "15 Mayo, 2025", ammount: "$284", status: "paid" },
        { date: "15 Abril, 2025", ammount: "$284", status: "paid" },
        { date: "15 Marzo, 2025", ammount: "$284", status: "paid" },
        { date: "15 Febrero, 2025", ammount: "$284", status: "paid" },
        { date: "15 Enero, 2025", ammount: "$284", status: "paid" }
    ]

    const openPaymentForm = (payment: Payment) => {
        setSelectedPayment(payment);
        setPaymentFormVisible(true);
    }

    return (
        <div className="generic-dashboard-card normal col-6" style={{gap: '10px'}}>
            <CardHeader title="Facturacion" />
            <div className="generic-dashboard-card-content" style={{ display: "flex", gap: '5px' }}>
                {
                    paymentsList.slice(0, 7).map((payment) => {
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