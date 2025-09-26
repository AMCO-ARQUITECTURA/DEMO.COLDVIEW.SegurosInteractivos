import CardHeader from "@/components/CardHeader/CardHeader";

const CarDetailsCard = () => {
    return (
        <div className="generic-dashboard-card space-between car-details-card small col-4">
            <CardHeader title="Datos generales" />
            <img src="/civic2014.png" width={250}  alt="Honda Civic 2014"/>
            <div className="car-details-content">
                <div id='details-column-one' className="car-details-column">
                    <p className="car-details-primary-value">Honda Civic EXS 1.8 2014</p>
                    <p className="car-details-secondary-value">NPA 180</p>
                </div>
                <div id='details-column-two' className="car-details-column right-align">
                    <p className="car-details-primary-value">512001122</p>
                    <p className="car-details-secondary-value">CAR ESSENTIAL PLUS</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsCard;