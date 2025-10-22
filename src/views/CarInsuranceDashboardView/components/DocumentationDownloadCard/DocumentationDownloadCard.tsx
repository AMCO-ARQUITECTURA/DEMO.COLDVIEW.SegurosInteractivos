import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";
import { pdfSvg } from "@/data/CommonSvg";
import type { DownloadFile } from "@/types/CommonTypes";

type DocumentationDownloadCardProps = {
    files: DownloadFile[];
}

const DocumentationDownloadCard: React.FC<DocumentationDownloadCardProps> = ({files}) => {

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
        <div className="generic-dashboard-card normal-spacing small col-4" style={{ gap: 'var(--spacing-1)'}}>
            <CardHeader title="Documentacion" />
            <div className="generic-dashboard-card-content" style={{gap: 'var(--spacing-0-5)'}}>
                {files.map((file) => {
                    return (
                        <QuickActionsButton label={file.title} icon={{type: 'svg', svg: pdfSvg}} additionalInfo={file.size} onClick={() => download(file)}/>
                    )
                })}
            </div>
        </div>
    )
};

export default DocumentationDownloadCard;
