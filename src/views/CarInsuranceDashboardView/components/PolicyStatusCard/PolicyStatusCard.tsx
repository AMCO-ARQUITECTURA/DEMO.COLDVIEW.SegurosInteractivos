import CardHeader from "@/components/CardHeader/CardHeader";
import PolicyStatusItem from "./PolicyStatusItem";
import type { CarInsurancePolicyStatus } from "@/types/CarInsuranceDashboardTypes";

type PolicyStatusCardProps = {
   status:  CarInsurancePolicyStatus;
}

const PolicyStatusCard: React.FC<PolicyStatusCardProps> = ({status}) => {
    return (
        <div className="generic-dashboard-card small-spacing small col-2" style={{gap: '10px'}}>
            <CardHeader title="Estado de la poliza"/>
            <div className="generic-dashboard-card-content">
                <PolicyStatusItem icon="pi-check" label="Estado general" value={status.status} iconColor="green" valueColor="green"/>
                <PolicyStatusItem icon="pi-calendar" label="Vigencia" value={status.sinceTo}/>
                <PolicyStatusItem icon="pi-shield" label="Renovacion automatica" value={status.automaticRenewal ? 'Habilitada' : "Deshabilitada"} iconColor="green"/>
            </div>
        </div>
    );
};

export default PolicyStatusCard;