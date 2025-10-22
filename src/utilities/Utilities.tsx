import type { DownloadFile } from "@/types/CommonTypes";

export const downloadFile = (file: DownloadFile) => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.title + ".pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}