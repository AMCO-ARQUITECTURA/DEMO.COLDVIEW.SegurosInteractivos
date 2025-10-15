
import type { IconProps } from "@/components/Icon/IconTypes";
import type { Claim, Coverage, CoverageExclusion, DownloadFile, Offer } from "./CommonTypes";

type LifeInsuranceDashboardGeneralData = {
    status: string;
    contractor: string;
    beneficiary: string;
    policyNumber: string;
    plan: string;
    sinceTo: string;
}

type LifeInsuranceDashboardMainCoverages = {
    totalCoverage: string;
    coverageType: string;
    modality: string;
    additionals: string;
}

type LifeInsuranceDashboardPaymentInformation = {
    amount: string;
    frequency: string;
    nextPaymentDate: string;
    paymentMethod: string;
}

type LifeInsuranceDashboardBeneficiary = {
    name: string;
    // relationship: string;
    percentage?: string;
    icon?: IconProps;
}

type LifeInsuranceDashboard = {
    generalData: LifeInsuranceDashboardGeneralData;
    mainCoverages: LifeInsuranceDashboardMainCoverages;
    upselling: Offer[];
    paymentInformation: LifeInsuranceDashboardPaymentInformation;
    beneficiaries: LifeInsuranceDashboardBeneficiary[];
    coverageDetails: {
        coverages: Coverage[],
        exclusions: CoverageExclusion[]
    },
    claims: Claim[],
    crossSelling: Offer[];
    policyFile: DownloadFile;
}

export { type LifeInsuranceDashboardGeneralData, type LifeInsuranceDashboardMainCoverages, type LifeInsuranceDashboardPaymentInformation, 
    type LifeInsuranceDashboardBeneficiary, type LifeInsuranceDashboard }