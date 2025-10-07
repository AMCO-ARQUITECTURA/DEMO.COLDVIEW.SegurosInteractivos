import CardHeader from "@/components/CardHeader/CardHeader";
import GenericButton from "@/components/GenericButton/GenericButton";
import Icon from "@/components/Icon/Icon";
import './GeneralDashboardQInsightCard.css';

const GeneralDashboardQInsightCard = () => {
    return (
        <div className="generic-dashboard-card space-between col-6 general-dashboard-qinsight-card">
            <CardHeader title="QInsight - Asistente virtual" />
            <div className="generic-dashboard-card-content general-dashboard-qinsight-card-content">
                <div className="general-dashboard-qinsight-card-main">
                    <Icon type='img' img="/icons/robot.png" iconClassname="general-dashboard-qinsight-card-main-icon"/>
                    <div className="general-dashboard-qinsight-card-main-title-and-description">
                        <span className="general-dashboard-qinsight-card-main-title">Hola! Soy tu asistente virtual, Coldview Qinsight</span>
                        <span className="general-dashboard-qinsight-card-main-description">Puedo ayudarte con preguntas sobre tus polizas, coberturas, reclamos y mas. tengo acceso a tu informacion de seguros para ayudarte!</span>
                    </div>
                </div>
                <div className="general-dashboard-qinsight-card-functions-container">
                    <div className="general-dashboard-qinsight-card-function">
                        <Icon type='primeicon' primeicon="pi-file" iconClassname="general-dashboard-qinsight-card-function-icon"/>
                        <span className="general-dashboard-qinsight-card-function-text">Consultas sobre tu poliza</span>
                    </div>
                    <div className="general-dashboard-qinsight-card-function">
                        <Icon type='primeicon' primeicon="pi-search" iconClassname="general-dashboard-qinsight-card-function-icon"/>
                        <span className="general-dashboard-qinsight-card-function-text">Detalles de cobertura</span>
                    </div>
                    <div className="general-dashboard-qinsight-card-function">
                        <Icon type='primeicon' primeicon="pi-phone" iconClassname="general-dashboard-qinsight-card-function-icon"/>
                        <span className="general-dashboard-qinsight-card-function-text">Asistencia 24/7</span>
                    </div>
                </div>
                <div className="general-dashboard-qinsight-card-examples"> 
                    <span className="general-dashboard-qinsight-card-example">"Que cubre mi seguro de auto?"</span>
                    <span className="general-dashboard-qinsight-card-example">"Quienes estan asegurados por mi seguro de vida?"</span>
                    <span className="general-dashboard-qinsight-card-example">"Quienes son los beneficiarios de mi seguro de vida?"</span>
                </div>
                <div className="general-dashboard-qinsight-card-footer">
                    <GenericButton primeicon="pi-comment" label={"Iniciar conversacion"} onClick={() => console.log("true!")} className="general-dashboard-qinsight-card-footer-button"/>
                </div>
            </div>
        </div>
    );
};

export default GeneralDashboardQInsightCard;