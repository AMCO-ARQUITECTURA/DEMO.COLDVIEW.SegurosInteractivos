import CardHeader from "@/components/CardHeader/CardHeader";
import CoverageMiniCard from "@/components/CoverageMiniCard/CoverageMiniCard";
import GenericButton from "@/components/GenericButton/GenericButton";
import type { IconProps } from "@/components/Icon/IconTypes";
import './CarInsuranceCoveragesCard.css';
import CoverageDetailsDialog from "@/components/CoverageDetailsDialog/CoverageDetailsDialog";
import type { CarInsuranceCoverageDetails } from "@/types/CarInsuranceDashboardTypes";
import { useCoverageDialog } from "@/hooks/useCoverageDialog";

type CarCoveragesCardProps = {
    coverageDetails: CarInsuranceCoverageDetails;
}

const CarCoveringsCard: React.FC<CarCoveragesCardProps> = ({coverageDetails}) => {
    const {dialogVisible, dialogConfig, handleCoverageClick, handleViewAllCoverages, handleViewExclusions, setDialogVisible } = useCoverageDialog();

    return (
        <div className="generic-dashboard-card space-between car-coverages-card col-6">
            <CardHeader title="Coberturas" />
            <div className="generic-dashboard-card-content" style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {coverageDetails.main.slice(0,4).map((coverage, index) => {
                    const iconProps: IconProps = {...coverage.icon, iconClassname: "car-insurance-coverages-mini-card-icon", 
                        containerized: true, containerClassname: 'car-insurance-mini-card-icon-container'}
                    return (
                        <CoverageMiniCard iconProps={iconProps} onClick={() => handleCoverageClick(index)}
                            title={coverage.title} subtitle={coverage.coverageLimits} additionalClassname="car-coverages-card-coverage-card"/>
                    )
                })}
            </div>
            <div className="car-coverages-card-footer">
                <GenericButton secondary label="Ver exclusiones" onClick={(handleViewExclusions)}/>
                <GenericButton label="Ver todas" onClick={handleViewAllCoverages}/> 
            </div>

            <CoverageDetailsDialog visible={dialogVisible} setVisible={setDialogVisible} coverages={coverageDetails.all} 
                exclusions={coverageDetails.exclusions} initialActiveTab={dialogConfig.activeTab} highlightedCoverageIndex={dialogConfig.highlightedCoverage}/>
            
        </div>
    );
}

export default CarCoveringsCard;