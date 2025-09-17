import CardHeader from "@/components/CardHeader/CardHeader";
import FileDownloadButton from "@/components/FileDownloadButton/FileDownloadButton";

const DocumentationDownloadCard = () => {
    return (
        <div className="generic-dashboard-card small-spacing" style={{width: '27%', gap: "5px"}}>
            <CardHeader title="Documentacion" />
            <div className="generic-dashboard-card-content" style={{gap: '4px'}}>
                <FileDownloadButton label="Descargar poliza" type="pdf" size="2.3MB"/>
                <FileDownloadButton label="Condiciones generales" type="pdf" size="2.3MB"/>
                <FileDownloadButton label="Tarjeta de circulacion" type="pdf" size="2.3MB"/>
                <FileDownloadButton label="Certificado licencia Mercosur" type="pdf" size="2.3MB"/>
            </div>
        </div>
    )
};

export default DocumentationDownloadCard;
