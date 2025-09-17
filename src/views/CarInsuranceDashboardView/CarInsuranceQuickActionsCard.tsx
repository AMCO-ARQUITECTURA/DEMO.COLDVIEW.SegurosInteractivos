import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";

const CarInsuranceQuickActionsCard = () => {
    return (
        <div className="generic-dashboard-card small-spacing" style={{width: '20%', gap: '5px', backgroundColor: "var(--theme-primary-color)"}}>
            <CardHeader title="Acciones rapidas" iconColor="red" accent/>
            <div className="generic-dashboard-card-content" style={{gap: '4px'}}>
                <QuickActionsButton label="Solicitar ambulancia" iconPath="ambulance.png" accent iconHeight={22}/> 
                <QuickActionsButton label="Reportar siniestro" iconPath="claim.png" accent iconHeight={18}/> 
                <QuickActionsButton label="Solicitar Grua" iconPath="tow-truck.png" iconHeight={22}/> 
                <QuickActionsButton label="Central asistencia" iconPath="customer-service.png" iconHeight={18}/> 
            </div>
        </div>
    )
}

export default CarInsuranceQuickActionsCard;