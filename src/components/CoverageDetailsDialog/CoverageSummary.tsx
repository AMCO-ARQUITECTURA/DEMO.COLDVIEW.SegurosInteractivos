import Icon from "@/components/Icon/Icon";
import type { Coverage } from "@/types/CommonTypes";
import { useEffect, useRef, useState } from "react";

type CoverageSummaryProps = {
    coverage: Coverage;
    isHighlighted?: boolean;
}

const CoverageSummary: React.FC<CoverageSummaryProps> = ({ coverage, isHighlighted }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [showHighlight, setShowHighlight] = useState(false);

    useEffect(() => {
        if (isHighlighted && cardRef.current) {
            setShowHighlight(true);
            setTimeout(() => {
                cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
            }, 500);
            setTimeout(() => {
                setShowHighlight(false);
            }, 3000);
        }
    }, [isHighlighted]);

    return (
        <div ref={cardRef} className={`coverage-badge-item ${showHighlight ? 'coverage-badge-item-highlighted' : ''}`} >
            <div className="coverage-badge-header">
                <Icon {...coverage.icon} iconClassname="coverage-badge-icon" containerized containerClassname="coverage-badge-icon-container"
                />
                <div className="coverage-badge-title">{coverage.title}</div>
            </div>
            <div className="coverage-badge-limits">{coverage.coverageLimits}</div>
            <div className="coverage-badge-description">{coverage.description}</div>
        </div>
    );
}

export default CoverageSummary;