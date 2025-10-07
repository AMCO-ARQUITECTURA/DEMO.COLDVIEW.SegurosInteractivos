import CardHeader from "@/components/CardHeader/CardHeader";
import type { CarInsuranceGeneralData } from "@/types/CarInsuranceDashboardTypes";

type CarDetailsCardProps = {
    details: CarInsuranceGeneralData;
}

const CarDetailsCard: React.FC<CarDetailsCardProps> = ({details}) => {
    return (
        <div className="generic-dashboard-card space-between car-details-card small col-4">
            <CardHeader title="Datos generales" />
            <img src={details.imageUrl} width={250}  alt="Honda Civic 2014"/>
            <div className="car-details-content">
                <div id='details-column-one' className="car-details-column">
                    <p className="car-details-primary-value">{details.carModel}</p>
                    <p className="car-details-secondary-value">{details.licensePlate}</p>
                </div>
                <div id='details-column-two' className="car-details-column right-align">
                    <p className="car-details-primary-value">{details.policyNumber}</p>
                    <p className="car-details-secondary-value">{details.plan}</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsCard;