import CardHeader from "@/components/CardHeader/CardHeader";
import type { GeneralDashboardFinancialSummary } from "@/types/GeneralDashboardTypes";
import './GeneralDashboardFinancialResumeCard.css';

type GeneralDashboardFinancialResumeCardProps = {
    data: GeneralDashboardFinancialSummary;
}

const GeneralDashboardFinancialResumeCard: React.FC<GeneralDashboardFinancialResumeCardProps> = ({ data }) => {
    return (
        <div className="generic-dashboard-card space-between col-6">
            <CardHeader title="Resumen financiero" />
            <div className="generic-dashboard-card-content general-dashboard-financial-resume-card-content">
                <div className="general-dashboard-financial-resume-summary">
                    <div className="general-dashboard-financial-resume-summary-item">
                        <span className="general-dashboard-financial-resume-summary-item-value">{data.totalPaidInYear}</span>
                        <span className="general-dashboard-financial-resume-summary-item-label">TOTAL ANUAL</span>
                    </div>
                    <div className="general-dashboard-financial-resume-summary-item">
                        <span className="general-dashboard-financial-resume-summary-item-value">{data.totalPaidInYear}</span>
                        <span className="general-dashboard-financial-resume-summary-item-label">PROMEDIO MENSUAL</span>
                    </div>
                    <div className="general-dashboard-financial-resume-summary-item">
                        <span className="general-dashboard-financial-resume-summary-item-value">{data.totalPaidInYear}</span>
                        <span className="general-dashboard-financial-resume-summary-item-label">AHORRADO ESTE AÑO</span>
                    </div>
                </div>
                <div className="general-dashboard-financial-resume-card-next-payments">
                    <span className="general-dashboard-financial-resume-next-payments-title">Proximos Pagos</span>
                    <div className="general-dashboard-financial-resume-next-payments-list">
                        {data.nextPayments.slice(0, 3).map((payment, index) => (
                            <div key={index} className="general-dashboard-financial-resume-next-payments-list-item">
                                <div className="general-dashboard-financial-resume-next-payments-list-item-left">
                                    <span className="general-dashboard-financial-resume-next-payments-list-item-date">{payment.date}</span>
                                    <span className="general-dashboard-financial-resume-next-payments-list-item-name">{payment.productName}</span>
                                </div>
                                <span className="general-dashboard-financial-resume-next-payments-list-item-amount">{payment.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralDashboardFinancialResumeCard;