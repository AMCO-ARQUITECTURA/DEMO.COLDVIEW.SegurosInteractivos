import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";

const CarInsuranceQuickActionsCard = () => {
    return (
        <div className="generic-dashboard-card small-spacing small accent col-2" style={{gap: '5px'}}>
            <CardHeader title="Acciones rapidas" iconColor="red" accent/>
            <div className="generic-dashboard-card-content" style={{gap: '4px'}}>
                <QuickActionsButton label="Solicitar ambulancia" icon={{type: 'img', img: "/icons/ambulance.png", iconClassname: "life-insurance-quick-action-icon"}} accent/> 
                <QuickActionsButton label="Reportar siniestro" icon={{type: 'img', img: "/icons/claim.png", iconClassname: "life-insurance-quick-action-icon"}} accent /> 
                <QuickActionsButton label="Solicitar Grua" icon={{type: 'img', img: "/icons/tow-truck.png", iconClassname: "life-insurance-quick-action-icon"}} /> 
                <QuickActionsButton label="Central asistencia" icon={{type: 'img', img: "/icons/customer-service.png", iconClassname: "life-insurance-quick-action-icon"}} /> 
            </div>
        </div>
    )
}

export default CarInsuranceQuickActionsCard;