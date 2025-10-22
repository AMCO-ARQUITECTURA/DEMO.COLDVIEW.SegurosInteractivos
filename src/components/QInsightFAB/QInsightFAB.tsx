import { useState } from 'react';
import './QInsightFAB.css';
import Icon from '../Icon/Icon';
import { useChatStore } from '@/store/ChatStore';

const QInsightFAB: React.FC = () => {
    const [popupVisible, setPopupVisible] = useState(true);
    const { fabVisible, setChatVisible, setFabVisible} = useChatStore();

    const openChat = () => {
        setFabVisible(false);
        setChatVisible(true)
    }

    return (
        <>
            {fabVisible && popupVisible && (
                <div className="qinsight-fab-popup">
                    <div className="qinsight-fab-popup-header">
                        <div className="qinsight-fab-popup-header-content">
                            <Icon type="img" img="/icons/robot.png" iconClassname='qinsight-fab-popup-header-icon' />
                            <div className="qinsight-fab-header-text">
                                <h3>QInsight</h3>
                                <p>Asistente virtual</p>
                            </div>
                        </div>
                        <button className="qinsight-fab-header-close-button" onClick={() => setPopupVisible(false)}>
                            <i className="pi pi-times"></i>
                        </button>
                    </div>
                    <span className='qinsight-fab-popup-content-description'>
                        Hola! Soy Coldview QInsight tu asistente virtual!
                        Puedo ayudarte con cualquier consulta que tengas
                        sobre tu póliza.
                    </span>
                    <div className="qinsight-fab-popup-functions">
                        <div className="qinsight-fab-popup-function">
                            <i className="pi pi-file qinsight-fab-popup-function-icon" />
                            <span>Consultas sobre tu póliza</span>
                        </div>

                        <div className="qinsight-fab-popup-function">
                            <i className="pi pi-shield qinsight-fab-popup-function-icon"></i>
                            <span>Detalles de cobertura</span>
                        </div>

                        <div className="qinsight-fab-popup-function">
                            <i className="pi pi-phone qinsight-fab-popup-function-icon"></i>
                            <span>Asistencia 24/7</span>
                        </div>
                    </div>
                </div>)
            }

            <button className={`q-insight-fab-button ${fabVisible === false ? "hidden" : ""}`} onClick={openChat}>
                <Icon type="img" img="/icons/robot.png" iconClassname='q-insight-fab-button-icon' />
            </button>
        </>
    );
}

export default QInsightFAB;