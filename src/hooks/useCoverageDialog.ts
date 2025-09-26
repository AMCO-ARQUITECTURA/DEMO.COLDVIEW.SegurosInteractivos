// hooks/useCoverageDialog.ts
import { useState } from 'react';

export type CoverageDialogConfig = {
  activeTab: number;
  highlightedCoverage?: number;
};

export type CoverageDialogState = {
  dialogVisible: boolean;
  dialogConfig: CoverageDialogConfig;
};

export type CoverageDialogActions = {
  handleCoverageClick: (coverageIndex: number) => void;
  handleViewAllCoverages: () => void;
  handleViewExclusions: () => void;
  closeDialog: () => void;
  setDialogVisible: (visible: boolean) => void;
  setDialogConfig: (config: CoverageDialogConfig) => void;
};

export type UseCoverageDialogReturn = CoverageDialogState & CoverageDialogActions;

export const useCoverageDialog = (): UseCoverageDialogReturn => {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [dialogConfig, setDialogConfig] = useState<CoverageDialogConfig>({
    activeTab: 0
  });

  const handleCoverageClick = (coverageIndex: number): void => {
    setDialogConfig({
      activeTab: 0, // Coverages tab
      highlightedCoverage: coverageIndex
    });
    setDialogVisible(true);
  };

  const handleViewAllCoverages = (): void => {
    setDialogConfig({
      activeTab: 0, // Coverages tab
      highlightedCoverage: undefined
    });
    setDialogVisible(true);
  };

  const handleViewExclusions = (): void => {
    setDialogConfig({
      activeTab: 1, // Exclusions tab
      highlightedCoverage: undefined
    });
    setDialogVisible(true);
  };

  const closeDialog = (): void => {
    setDialogVisible(false);
    // Optionally reset config when closing
    setDialogConfig({
      activeTab: 0,
      highlightedCoverage: undefined
    });
  };

  return {
    // State
    dialogVisible,
    dialogConfig,
    
    // Actions
    handleCoverageClick,
    handleViewAllCoverages,
    handleViewExclusions,
    closeDialog,
    
    // Direct setters (for advanced use cases)
    setDialogVisible,
    setDialogConfig
  };
};