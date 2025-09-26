import CardHeader from "@/components/CardHeader/CardHeader";
import PolicyStatusItem from "./PolicyStatusItem";

const PolicyStatusCard = () => {
    return (
        <div className="generic-dashboard-card small-spacing small col-2" style={{gap: '10px'}}>
            <CardHeader title="Estado de la poliza"/>
            <div className="generic-dashboard-card-content">
                <PolicyStatusItem icon="pi-check" label="Estado general" value="Activa" iconColor="green" valueColor="green"/>
                <PolicyStatusItem icon="pi-calendar" label="Vigencia" value="27/12/2024 - 27/12/2025"/>
                <PolicyStatusItem icon="pi-shield" label="Renovacion automatica" value="Habilitada" iconColor="green"/>
            </div>
        </div>
    );
};

export default PolicyStatusCard;