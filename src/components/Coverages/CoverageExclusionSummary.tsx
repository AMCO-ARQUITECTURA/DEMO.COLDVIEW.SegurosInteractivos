import type { CoverageExclusion } from "@/types/CommonTypes";

type CoverageExclusionSummaryProps = {
  exclusion: CoverageExclusion;
}

const CoverageExclusionSummary: React.FC<CoverageExclusionSummaryProps> = ({exclusion}) => {
  return (
    <div className="coverage-exclusion-minimal-item">
      <div className="coverage-exclusion-minimal-icon">
        <i className="pi pi-exclamation-triangle"></i>
      </div>
      <div className="coverage-exclusion-minimal-info">
        <div className="coverage-exclusion-minimal-header">
          <div className="coverage-exclusion-minimal-title">{exclusion.name}</div>
        </div>
        <div className="coverage-exclusion-minimal-description">{exclusion.description}</div>
      </div>
    </div>
  );
}

export default CoverageExclusionSummary;