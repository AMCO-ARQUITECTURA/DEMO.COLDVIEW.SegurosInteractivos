import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";
import { pdfSvg } from "@/data/CommonSvg";

const DocumentationDownloadCard = () => {
    
    return (
        <div className="generic-dashboard-card normal-spacing small col-4" style={{ gap: 'var(--spacing-1)'}}>
            <CardHeader title="Documentacion" />
            <div className="generic-dashboard-card-content" style={{gap: 'var(--spacing-0-5)'}}>
                <QuickActionsButton label="Descargar poliza" icon={{type: 'svg', svg: pdfSvg}} additionalInfo="2.3MB"/>
                <QuickActionsButton label="Condiciones generales" icon={{type: 'svg', svg: pdfSvg}} additionalInfo="5.5MB"/>
                <QuickActionsButton label="Tarjeta de circulacion" icon={{type: 'svg', svg: pdfSvg}} additionalInfo="0.7MB"/>
                <QuickActionsButton label="Certificado licencia Mercosur" icon={{type: 'svg', svg: pdfSvg}} additionalInfo="0.8MB"/>
            </div>
        </div>
    )
};

export default DocumentationDownloadCard;
