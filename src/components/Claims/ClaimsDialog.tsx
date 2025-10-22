
import { Dialog } from 'primereact/dialog';
import { DataTable, type DataTableFilterMeta } from 'primereact/datatable';
import { Column, type ColumnFilterElementTemplateOptions } from 'primereact/column';
import { MultiSelect, type MultiSelectChangeEvent } from "primereact/multiselect";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import type { Claim } from '@/types/CommonTypes';
import './Claims.css';

type ClaimsDialogProps = {
    claims: Claim[];
    visible: boolean;
    setVisible: (visible: boolean) => void;
    showType?: boolean;
}

const defaultFilters: DataTableFilterMeta = {
    description: { value: null, matchMode: FilterMatchMode.CONTAINS },
    type: { value: null, matchMode: FilterMatchMode.CONTAINS },
    date: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    amount: { value: null, matchMode: FilterMatchMode.CONTAINS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS }
};

const ClaimsDialog: React.FC<ClaimsDialogProps> = ({ claims, visible, setVisible, showType }) => {

    const [filters] = useState(defaultFilters);

    const statusItemTemplate = (option: string) => {
        const statusLabel = option === "pending" ? "En Proceso" : option === "rejected" ? "Rechazado" : "Completado"
        return (
                <div className={`claim-summary-badge ${option}`} style={{ margin: 'auto'}}>
                    <div className={`claim-summary-badge-icon ${option}`}></div>
                    <p className={`claim-summary-badge-text ${option}`} style={{display: 'inline'}}>{statusLabel}</p>
                </div>

        );
    };

    const statusBodyTemplate = (claim: Claim) => {
        const statusLabel = claim.status === "pending" ? "En Proceso" : claim.status === "rejected" ? "Rechazado" : "Completado"
        return (
            // <div className='claim-summary-badge-container'>
                <div className={`claim-summary-badge ${claim.status}`}>
                    <div className={`claim-summary-badge-icon ${claim.status}`}></div>
                    <p className={`claim-summary-badge-text ${claim.status}`} style={{display: 'inline'}}>{statusLabel}</p>
                </div>
            // </div>

        );
    };

    const statusRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <MultiSelect value={options.value} options={['pending', "completed", "rejected"]} itemTemplate={statusItemTemplate}
            onChange={(e: MultiSelectChangeEvent) => options.filterCallback(e.value)} placeholder="Estado" className="p-column-filter" selectedItemTemplate={statusItemTemplate} />;
    };

    return (
        <Dialog onHide={() => setVisible(false)} header="Listado de solicitudes" visible={visible} className='claims-dialog'>
            <DataTable value={claims} stripedRows paginator rowsPerPageOptions={[5, 10, 15]} rows={5} size="small"
                filterDisplay="menu" filters={filters} className='claims-table'>
                <Column field="description" filter showFilterMatchModes={false} filterField="description" header="Descripcion" />
                {showType && (<Column field="type" filter showFilterMatchModes={false} filterType="type" header="Tipo" />)}
                <Column field="date" filter showFilterMatchModes={false} header="Fecha" />
                <Column field="amount" filter showFilterMatchModes={false} header="Monto" />
                <Column field="status" header="Estado" filter filterElement={statusRowFilterTemplate} filterField="status" showFilterMatchModes={false} body={statusBodyTemplate} />
            </DataTable>
        </Dialog>
    );
}

export default ClaimsDialog;