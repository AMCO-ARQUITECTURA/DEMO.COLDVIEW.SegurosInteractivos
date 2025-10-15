
import type { Benefit, Claim, Coverage, CoverageExclusion, DownloadFile, Offer, PolicyPayment } from "./CommonTypes";

type CarInsuranceGeneralData = {
    imageUrl: string;
    carModel: string;
    licensePlate: string;
    policyNumber: string;
    plan: string;
}

type CarInsurancePolicyStatus = {
    status: string;
    sinceTo: string;
    automaticRenewal: boolean;
}

type CarInsuranceCoverageDetails = {
    coverages: Coverage[];
    exclusions: CoverageExclusion[];
}

type CarInsuranceDashboard = {
    generalData: CarInsuranceGeneralData;
    policyStatus: CarInsurancePolicyStatus;
    coverageDetails: CarInsuranceCoverageDetails;
    upselling: Offer[];
    payments: PolicyPayment[];
    claims: Claim[];
    crossSelling: Offer[];
    benefits: Benefit[];
    documentation: DownloadFile[];
}


export { type CarInsuranceGeneralData, type CarInsurancePolicyStatus, type CarInsuranceCoverageDetails, type CarInsuranceDashboard }