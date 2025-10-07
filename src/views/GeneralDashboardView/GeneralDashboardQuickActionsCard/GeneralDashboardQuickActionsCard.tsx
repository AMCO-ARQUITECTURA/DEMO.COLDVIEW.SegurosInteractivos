import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";
import { Divider } from "primereact/divider";
import './GeneralDashboardQuickActionsCard.css';
import { pdfSvg } from "@/data/CommonSvg";

const GeneralDashboardQuickActionsCard = () => {
    return (
        <div className="generic-dashboard-card  normal col-6 general-dashboard-quick-actions-card">
            <CardHeader title="Acciones rápidas" />
            <div className="generic-dashboard-card-content general-dashboard-quick-actions-card-content">
                <div className="general-dashboard-quick-actions-card-section">
                    <span className="general-dashboard-quick-actions-card-section-title">Acciones</span>
                    <Divider className="general-dashboard-quick-actions-card-section-divider"/>
                    <div className="general-dashboard-quick-actions-card-section-buttons">
                        <QuickActionsButton label="Reportar siniestro" icon={{type: 'primeicon', primeicon: "pi-exclamation-triangle"}}/>
                        <QuickActionsButton label="Actualizar datos personales" icon={{type: 'primeicon', primeicon: "pi-user"}}/>
                    </div>
                </div>
                <div className="general-dashboard-quick-actions-card-section">
                    <span className="general-dashboard-quick-actions-card-section-title">Descarga de documentos</span>
                    <Divider className="general-dashboard-quick-actions-card-section-divider"/>
                    <div className="general-dashboard-quick-actions-card-section-buttons">
                        <QuickActionsButton label="Poliza automotor - 512001122" icon={{type: 'svg', svg: pdfSvg}} additionalInfo="2.3MB"/>
                        <QuickActionsButton label="Poliza Vida - 512001123" icon={{type: 'svg', svg: pdfSvg}}  additionalInfo="1.5MB"/>
                        <QuickActionsButton label="Tarjeta de circulacion -512001122" icon={{type: 'primeicon', primeicon: "pi-id-card"}} additionalInfo="0.7MB"/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default GeneralDashboardQuickActionsCard;