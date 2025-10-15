import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";
import { Toast, type ToastMessage } from "primereact/toast";

import { useRef } from "react";

const CarInsuranceQuickActionsCard = () => {

    const toast = useRef<Toast>(null);

    const navigateToColdview = () => {
        window.open('https://www.coldview.com', '_blank', 'noopener,noreferrer');
    }

    const showToast = (summary: string, detail: string, severity: ToastMessage['severity']) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail, life: 3000 });
    };
    return (
        <div className="generic-dashboard-card small-spacing small accent col-2" style={{ gap: '5px' }}>
            <CardHeader title="Acciones rapidas" iconColor="red" accent />
            <div className="generic-dashboard-card-content" style={{ gap: '4px' }}>
                <QuickActionsButton label="Solicitar ambulancia" icon={{ type: 'img', img: "/icons/ambulance.png", iconClassname: "life-insurance-quick-action-icon" }} accent 
                    onClick={() => showToast("Solicitud enviada", "En instantes se contactara un agente especializado para ayudarte con tu solicitud de ambulancia.", "info")}/>
                <QuickActionsButton label="Reportar siniestro" icon={{ type: 'img', img: "/icons/claim.png", iconClassname: "life-insurance-quick-action-icon" }} accent 
                     onClick={() => navigateToColdview()}/>
                <QuickActionsButton label="Solicitar Grua" icon={{ type: 'img', img: "/icons/tow-truck.png", iconClassname: "life-insurance-quick-action-icon" }} 
                    onClick={() => showToast("Solicitud enviada", "En instantes se contactara un agente especializado para ayudarte con tu solicitud de grua.", "info")}/>
                <QuickActionsButton label="Central asistencia" icon={{ type: 'img', img: "/icons/customer-service.png", iconClassname: "life-insurance-quick-action-icon" }} 
                     onClick={() => navigateToColdview()}/>
            </div>
            <Toast ref={toast} />
        </div>
    )
}

export default CarInsuranceQuickActionsCard;