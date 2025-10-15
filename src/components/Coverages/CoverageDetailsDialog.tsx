import type { Coverage, CoverageExclusion } from "@/types/CommonTypes";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import CoverageSummary from "./CoverageSummary";
import CoverageExclusionSummary from "./CoverageExclusionSummary";
import './CoverageDetailsDialog.css';

type CoverageDetailsProps = {
    visible: boolean;
    setVisible: (newValue: boolean) => void;
    coverages: Coverage[];
    exclusions: CoverageExclusion[];
    initialActiveTab?: number; // 0 for coverages, 1 for exclusions
    highlightedCoverageIndex?: number; // Index of coverage to highlight
}

const CoverageDetailsDialog: React.FC<CoverageDetailsProps> = ({ visible, setVisible, coverages, exclusions, initialActiveTab, highlightedCoverageIndex }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Update active tab when dialog opens with new props
    useEffect(() => {
        if (visible) {
            setActiveIndex(initialActiveTab!);
        }
    }, [visible, initialActiveTab]);

    return (
        <Dialog visible={visible} onHide={() => setVisible(false)} header="Detalles de cobertura" className="coverage-details-dialog">
            <Accordion activeIndex={activeIndex}>
                <AccordionTab header="Coberturas" className="coverage-details-tab">
                    {coverages.map((coverage, index) => {
                        return (
                            <CoverageSummary coverage={coverage} isHighlighted={highlightedCoverageIndex === index}/>
                        )
                    })}
                </AccordionTab>
                <AccordionTab header="Exclusiones" className="coverage-details-tab">
                    {exclusions.map((exclusion) => {
                        return (
                            <CoverageExclusionSummary exclusion={exclusion} />
                        )
                    })}
                </AccordionTab>
            </Accordion>
        </Dialog>
    );
}

export default CoverageDetailsDialog;