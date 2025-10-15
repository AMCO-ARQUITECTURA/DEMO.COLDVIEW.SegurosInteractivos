import GenericButton from "@/components/GenericButton/GenericButton";
import type { PolicyPayment } from "@/types/CommonTypes";

type PaymentSummaryProps = {
    payment: PolicyPayment;
    onPayClick: Function
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({payment, onPayClick}) => {

    const downloadReceipt = () => {

    }
    
    return (
        <div className="payment-summary">
            <span className='payment-summary-date'>{payment.date}</span>
            <span className={`payment-summary-amount ${payment.status === 'pending' ? 'pending' : ''}`}>{payment.amount}</span>
            <div className="payment-summary-badge-container">
                <div className={`payment-summary-badge ${payment.status === 'pending' ? 'pending' : ''}`}>
                    <div className={`payment-summary-badge-icon ${payment.status === 'pending' ? 'pending' : ''}`}></div>
                    <p className={`payment-summary-badge-text ${payment.status === 'pending' ? 'pending' : ''}`}>{payment.status === 'pending' ? "Pendiente" : "Pagado"}</p>
                </div>
            </div>
            
            <div className="payment-summary-button-container">
                <GenericButton className="payment-summary-button" primeicon="pi-download" 
                    label={payment.status === 'pending' ? 'Pagar' : 'Descargar'} onClick={payment.status === 'pending' ? onPayClick : downloadReceipt} />
            </div>
            
        </div>
    )
}

export default PaymentSummary;