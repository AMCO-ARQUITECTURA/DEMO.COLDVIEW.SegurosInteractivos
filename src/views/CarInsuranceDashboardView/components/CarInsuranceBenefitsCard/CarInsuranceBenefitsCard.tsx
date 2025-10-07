import './CarInsuranceBenefitsCard.css';
import CardHeader from "@/components/CardHeader/CardHeader";
import type { Benefit } from "@/types/CommonTypes";
import BenefitSummary from './BenefitSummary';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import GenericButton from '@/components/GenericButton/GenericButton';

type CarInsuranceBenefitsCardProps = {
    benefits: Benefit[];
}

const CarInsuranceBenefitsCard: React.FC<CarInsuranceBenefitsCardProps> = ({ benefits }) => {

    const [benefitsDetailsDialogVisible, setBenefitsDetailsDialogVisible] = useState<boolean>(false);
    //TODO: DIalogo que muestre todos los beneficios con un poco mas de informacion.
    return (
        <div className="generic-dashboard-card col-6 space-between" >
            <CardHeader title="Beneficios" />
            <div className="generic-dashboard-card-content car-insurance-benefits-card-content">
                {
                    benefits.slice(0, 4).map((benefit) => {
                        return (
                            <BenefitSummary benefit={benefit} compact/>
                        )
                    })
                }
            </div>
            <div className="car-insurance-benefits-card-footer">
                <GenericButton label="Ver todos" onClick={() => setBenefitsDetailsDialogVisible(true)} />
            </div>
            <Dialog onHide={() => setBenefitsDetailsDialogVisible(false)} header="Listado de beneficios" visible={benefitsDetailsDialogVisible} style={{width: '25rem', maxHeight: '55%'}}> 
                <div style={{ display: 'flex', flexDirection: 'column', gap: "0.5rem" }}>
                    {
                        benefits.slice(0, 4).map((benefit) => {
                            return (
                                <BenefitSummary benefit={benefit} />
                            )
                        })
                    }
    
                </div>
            </Dialog>
        </div>
    );
}

export default CarInsuranceBenefitsCard;