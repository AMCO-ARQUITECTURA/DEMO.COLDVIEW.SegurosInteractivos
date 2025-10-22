import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";
import { Divider } from "primereact/divider";
import './GeneralDashboardQuickActionsCard.css';
import type { DownloadFile } from "@/types/CommonTypes";
import { downloadFile } from "@/utilities/Utilities";

type GeneralDashboardQuickActionsCardProps = {
    downloads: DownloadFile[]
}

const GeneralDashboardQuickActionsCard:React.FC<GeneralDashboardQuickActionsCardProps> = ({downloads}) => {

    return (
        <div className="generic-dashboard-card col-6 general-dashboard-quick-actions-card">
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
                        {
                            downloads.slice(0,4).map((download) => {
                                return (
                                    <QuickActionsButton label={download.title} icon={download.icon!} additionalInfo={download.size} onClick={() => downloadFile(download)}/>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default GeneralDashboardQuickActionsCard;