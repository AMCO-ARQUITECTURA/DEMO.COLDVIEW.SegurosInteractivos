
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

    const [filters, setFilters] = useState(defaultFilters);

    const clearFilter = () => {
        setFilters(defaultFilters);
    };

    const statusItemTemplate = (option: string) => {
        return (
                <div className={`claim-summary-badge ${option === 'pending' ? 'pending' : ''}`} style={{ margin: 'auto'}}>
                    <div className={`claim-summary-badge-icon ${option === 'pending' ? 'pending' : ''}`}></div>
                    <p className={`claim-summary-badge-text ${option === 'pending' ? 'pending' : ''}`} style={{display: 'inline'}}>{option === 'pending' ? "En proceso" : "Completado"}</p>
                </div>

        );
    };

    const statusBodyTemplate = (claim: Claim) => {
        return (
            // <div className='claim-summary-badge-container'>
                <div className={`claim-summary-badge ${claim.status === 'pending' ? 'pending' : ''}`}>
                    <div className={`claim-summary-badge-icon ${claim.status === 'pending' ? 'pending' : ''}`}></div>
                    <p className={`claim-summary-badge-text ${claim.status === 'pending' ? 'pending' : ''}`} style={{display: 'inline'}}>{claim.status === 'pending' ? "En proceso" : "Completado"}</p>
                </div>
            // </div>

        );
    };

    const statusRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <MultiSelect value={options.value} options={['pending', "completed"]} itemTemplate={statusItemTemplate}
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