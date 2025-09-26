import CardHeader from "@/components/CardHeader/CardHeader";
import QuickActionsButton from "@/components/QuickActionsButton/QuickActionsButton";

const LifeInsuranceQuickActionsCard = () => {
    return (
        <div className="generic-dashboard-card small-spacing small accent col-4" >
            <CardHeader title="Acciones rapidas" iconColor="red" accent/>
            <div className="generic-two-column-card-content" style={{columnGap: '0.333rem', rowGap: '0.555rem'}}>
                <QuickActionsButton label="Denunciar siniestro" icon={{type: 'img', img: "/icons/claim.png"}} accent/> 
                <QuickActionsButton label="Solicitar ambulancia" icon={{type: 'img', img: "/icons/ambulance.png"}} accent/> 
                <QuickActionsButton label="Solicitar reembolso" icon={{type: 'img', img: "/icons/refund.png"}} accent/> 
                <div></div>
                <QuickActionsButton label="Descargar poliza" icon={{type: 'primeicon', primeicon: "pi-file-pdf"}}/> 
                <QuickActionsButton label="Informacion adicional" icon={{type: 'primeicon', primeicon: 'pi-plus'}}/> 
            </div>
        </div>
    )
}

export default LifeInsuranceQuickActionsCard;