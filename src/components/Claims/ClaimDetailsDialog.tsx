import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Tag } from "primereact/tag";
import type { Claim } from "@/types/CommonTypes";
import { Divider } from "primereact/divider";

interface ClaimDetailsDialogProps {
    visible: boolean;
    setVisible: (newValue: boolean) => void;
    claim: Claim;
}

export default function ClaimDetailsDialog({ visible, setVisible, claim }: ClaimDetailsDialogProps) {
    const [comments, setComments] = useState<{ id: string; text: string; createdAt: string }[]>([]);
    const [newComment, setNewComment] = useState("");


    const addComment = () => {
        const trimmed = newComment.trim();
        if (!trimmed) return;
        const now = new Date().toISOString();
        setComments((c) => [{ id: String(Date.now()), text: trimmed, createdAt: now }, ...c]);
        setNewComment("");
    };

    const statusSeverity = (s: Claim["status"]) => {
        switch (s) {
            case "completed":
                return "success";
            case "rejected":
                return "danger";
            default:
                return "warning";
        }
    };

    const getStatusLabel = (s: Claim["status"]) => {
        switch (s) {
            case "completed":
                return "Completado";
            case "rejected":
                return "Rechazado";
            default:
                return "En Proceso";
        }
    };

    return (
        <Dialog visible={visible} onHide={() => setVisible(false)} modal className="claim-details-dialog" closable closeOnEscape

            header={<div className="claim-details-dialog-header"><span>Detalles de solicitud</span><Tag value={getStatusLabel(claim.status)} severity={statusSeverity(claim.status)} /></div>}
        >
            <div className="claim-details-dialog-container">
                <div className="claim-details-info">
                    <div className="claim-details-field">
                        <label>ID</label>
                        <span>{claim.id ?? "-"}</span>
                    </div>
                    <div className="claim-details-field">
                        <label>Fecha</label>
                        <span>{claim.date}</span>
                    </div>
                    {claim.type && (<div className="claim-details-field">
                        <label>Tipo</label>
                        <span>{claim.type}</span>
                    </div>)
                    }
                    <div className="claim-details-field">
                        <label>Monto</label>
                        <span>{claim.amount}</span>
                    </div>
                    <div className="claim-details-field description">
                        <label>Descripcion</label>
                        <span className="claim-details-description">{claim.description}</span>
                    </div>
                </div>
                <Divider/>
                <div className="claim-details-comments">
                    <label>Comentarios</label>
                    <InputTextarea value={newComment} onChange={(e) => setNewComment((e.target as HTMLTextAreaElement).value)}
                        rows={2} autoResize placeholder="Agregar comentario" className="claim-details-comment-textarea"
                    />
                    <Button label="Agregar comentario" onClick={addComment} disabled={!newComment.trim()} className="claim-details-comment-add-button" />

                    <div className="claim-details-comment-list">
                        {comments.length === 0 ? (
                            <div className="claim-details-no-comments">No hay comentarios aun.</div>
                        ) : (
                            comments.map((c) => (
                                <div key={c.id} className="claim-details-comment-item">
                                    <div className="claim-details-comment-text">{c.text}</div>
                                    <div className="claim-details-comment-date">{new Date(c.createdAt).toLocaleString()}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Dialog>
    );
}