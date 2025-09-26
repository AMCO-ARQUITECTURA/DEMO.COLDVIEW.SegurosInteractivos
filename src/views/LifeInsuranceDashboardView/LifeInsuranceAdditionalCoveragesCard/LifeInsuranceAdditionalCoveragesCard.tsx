import CardHeader from "@/components/CardHeader/CardHeader";
import CoverageMiniCard from "@/components/CoverageMiniCard/CoverageMiniCard";
import type { IconProps } from "@/components/Icon/IconTypes";
import { type Coverage, type CoverageExclusion } from "@/types/CommonTypes";
import { useState } from "react";
import './LifeInsuranceAdditionalCoveragesCard.css';
import GenericButton from "@/components/GenericButton/GenericButton";
import CoverageDetailsDialog from "@/components/CoverageDetailsDialog/CoverageDetailsDialog";

type LifeInsuranceAdditionalCoveragesCardProps = {
    coverageDetails: { coverages: Coverage[]; exclusions: CoverageExclusion[]; };
}

const LifeInsuranceAdditionalCoveragesCard: React.FC<LifeInsuranceAdditionalCoveragesCardProps> = ({ coverageDetails }) => {

    const [coveragesDialogVisible, setCoveragesDialogVisible] = useState<boolean>(false);
    const [dialogConfig, setDialogConfig] = useState<{ activeTab: number; highlightedCoverage?: number; }>({ activeTab: 0 });

    const handleCoverageClick = (coverageIndex: number) => {
        setDialogConfig({
            activeTab: 0,
            highlightedCoverage: coverageIndex
        });
        setCoveragesDialogVisible(true);
    };

    const handleViewAllCoverages = () => {
        setDialogConfig({
            activeTab: 0,
            highlightedCoverage: undefined
        });
        setCoveragesDialogVisible(true);
    };

    const handleViewExclusions = () => {
        setDialogConfig({
            activeTab: 1,
            highlightedCoverage: undefined
        });
        setCoveragesDialogVisible(true);
    };

    return (
        <div className="generic-dashboard-card small space-between life-insurance-additional-coverages-card col-4">
            <CardHeader title="Coberturas adicionales" />
            <div className="life-insurance-additional-coverages-card-content">
                {coverageDetails.coverages.slice(0, 6).map((coverage, index) => {
                    const iconProps: IconProps = { ...coverage.icon, iconClassname: "life-insurance-additional-coverage-icon" }
                    return (
                        <CoverageMiniCard iconProps={iconProps} title={coverage.title} additionalClassname="life-insurance-additional-coverage" onClick={() => handleCoverageClick(index)} />
                    )
                })}
            </div>
            <div className="car-coverages-card-footer">
                <GenericButton secondary label="Ver exclusiones" onClick={(handleViewExclusions)} />
                <GenericButton label="Ver todas" onClick={handleViewAllCoverages} />
            </div>
            <CoverageDetailsDialog visible={coveragesDialogVisible} setVisible={setCoveragesDialogVisible} coverages={coverageDetails.coverages}
                exclusions={coverageDetails.exclusions} initialActiveTab={dialogConfig.activeTab} highlightedCoverageIndex={dialogConfig.highlightedCoverage} />
        </div>
    );
}

export default LifeInsuranceAdditionalCoveragesCard;