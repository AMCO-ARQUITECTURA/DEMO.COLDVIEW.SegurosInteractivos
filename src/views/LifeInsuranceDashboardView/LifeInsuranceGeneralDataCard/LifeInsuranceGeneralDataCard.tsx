import CardHeader from "@/components/CardHeader/CardHeader";
import type { LifeInsuranceDashboardGeneralData } from "@/types/LifeInsuranceDashboardTypes";
import './LifeInsuranceGeneralDataCard.css';
import LifeInsuranceGeneralDataCardItem from "./LifeInsuranceGeneralDataCardItem";

type LifeInsuranceGeneralDataCardProps = {
    data: LifeInsuranceDashboardGeneralData;
}

const LifeInsuranceGeneralDataCard: React.FC<LifeInsuranceGeneralDataCardProps> = ({data}) => {

    const headerBadge = <div className="life-insurance-general-data-badge">
        {data.status}
    </div>
        

    return (
        <div className="generic-dashboard-card small space-between col-4" >
            <CardHeader title="Datos generales" badge={headerBadge}/>
            <div className="generic-dashboard-card-content life-insurance-general-data-card-content">
                <LifeInsuranceGeneralDataCardItem label={"Contratante"} value={data.contractor}/>
                <LifeInsuranceGeneralDataCardItem label={"Asegurado"} value={data.beneficiary}/>
                <LifeInsuranceGeneralDataCardItem label={"Nombre producto"} value={data.plan}/>
                <LifeInsuranceGeneralDataCardItem label={"Numero de poliza"} value={data.policyNumber}/>
                <LifeInsuranceGeneralDataCardItem label={"Vigencia"} value={data.sinceTo}/>
            </div>
        </div>
    );
}

export default LifeInsuranceGeneralDataCard;