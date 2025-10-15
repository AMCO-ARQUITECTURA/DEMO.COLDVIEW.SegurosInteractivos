import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";
import type { DownloadFile } from "@/types/CommonTypes";
import { Toast, type ToastMessage } from 'primereact/toast';
import { useRef } from "react";

type LifeInsuranceQuickActionsCardProps = {
    policyFile: DownloadFile
}

const LifeInsuranceQuickActionsCard: React.FC<LifeInsuranceQuickActionsCardProps> = ({policyFile}) => {

    const toast = useRef<Toast>(null);

    const navigateToColdview = () => {
        window.open('https://www.coldview.com', '_blank', 'noopener,noreferrer');
    }

    const showToast = (summary: string, detail: string, severity: ToastMessage['severity']) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail, life: 3000});
    };

    const download = (file: DownloadFile) => {
        const link = document.createElement("a");
        link.href = file.url;
        link.download = file.title + ".pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="generic-dashboard-card small-spacing small accent col-4" >
            <CardHeader title="Acciones rapidas" iconColor="red" accent/>
            <div className="generic-two-column-card-content" style={{columnGap: '0.333rem', rowGap: '0.555rem'}}>
                <QuickActionsButton label="Denunciar siniestro" icon={{type: 'img', img: "/icons/claim.png"}} accent onClick={() => navigateToColdview()}/> 
                <QuickActionsButton label="Solicitar ambulancia" icon={{type: 'img', img: "/icons/ambulance.png"}} accent 
                    onClick={() => showToast("Solicitud enviada", "En instantes se contactara un agente especializado para ayudarte con tu solicitud de ambulancia.", "info")}/> 
                <QuickActionsButton label="Solicitar reembolso" icon={{type: 'img', img: "/icons/refund.png"}} accent
                    onClick={() => showToast("Solicitud enviada", "En instantes se contactara un agente especializado para ayudarte con tu solicitud de reembolso.", "info")}/> 
                <div></div>
                <QuickActionsButton label="Descargar poliza" icon={{type: 'primeicon', primeicon: "pi-file-pdf"}} onClick={() => download(policyFile)}/> 
                <QuickActionsButton label="Informacion adicional" icon={{type: 'primeicon', primeicon: 'pi-plus'}} onClick={() => navigateToColdview()}/> 
            </div>
            <Toast ref={toast} />
        </div>
    )
}

export default LifeInsuranceQuickActionsCard;