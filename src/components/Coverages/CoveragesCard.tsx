import CardHeader from "@/components/CardHeader/CardHeader";
import CoverageMiniCard from "@/components/Coverages/CoverageMiniCard";
import { type Coverage, type CoverageExclusion } from "@/types/CommonTypes";
import { useState } from "react";
import './coverages.css';
import GenericButton from "@/components/GenericButton/GenericButton";
import CoverageDetailsDialog from "./CoverageDetailsDialog";

type CoveragesCardProps = {
    coverages: Coverage[];
    exclusions: CoverageExclusion[];
}

const CoveragesCard: React.FC<CoveragesCardProps> = ({ coverages, exclusions }) => {

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
        <div className="generic-dashboard-card space-between coverages-card col-6">
            <CardHeader title="Coberturas" />
            <div className="generic-dashboard-card-content coverages-card-content">
                {coverages.slice(0, 4).map((coverage, index) => {
                    const title = coverage.shortTitle ? coverage.shortTitle : coverage.title;
                    const subtitle = coverage.shortLimits? coverage.shortLimits : coverage.coverageLimits;
                    return (
                        <CoverageMiniCard iconProps={coverage.icon} title={title} subtitle={subtitle} 
                            additionalClassname="life-insurance-coverage" onClick={() => handleCoverageClick(index)} />
                    )
                })}
            </div>
            <div className="coverages-card-footer">
                <GenericButton secondary label="Ver exclusiones" onClick={(handleViewExclusions)} />
                <GenericButton label="Ver todas" onClick={handleViewAllCoverages} />
            </div>
            <CoverageDetailsDialog visible={coveragesDialogVisible} setVisible={setCoveragesDialogVisible} coverages={coverages}
                exclusions={exclusions} initialActiveTab={dialogConfig.activeTab} highlightedCoverageIndex={dialogConfig.highlightedCoverage} />
        </div>
    );
}

export default CoveragesCard;