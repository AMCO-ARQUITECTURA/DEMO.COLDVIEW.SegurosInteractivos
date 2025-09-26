import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import PublicityCarouselCard from "@/components/PublicityCarouselCard/PublicityCarouselCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { sidebarSections } from "@/data/CommonData";
import { useState } from "react";
import useVersionStore from "@/store/VersionStore";
import { useQuery } from "@tanstack/react-query";

import LifeInsuranceDashboardGeneralDataCard from "./LifeInsuranceGeneralDataCard/LifeInsuranceGeneralDataCard";
import type { LifeInsuranceDashboard } from "@/types/LifeInsuranceDashboardTypes";
import LifeInsuranceQuickActionsCard from "./LifeInsuranceQuickActionsCard/LifeInsuranceQuickActionsCard";
import LifeInsurancePrimaryCoveragesCard from "./LifeInsurancePrimaryCoveragesCard/LifeInsurancePrimaryCoveragesCard";
import LifeInsuranceUpsellingCard from "./LifeInsuranceUpsellingCard/LifeInsuranceUpsellingCard";
import LifeInsurancePaymentCard from "./LifeInsurancePaymentCard/LifeInsurancePaymentCard";
import LifeInsuranceBeneficiariesCard from "./LifeInsuranceBeneficiariesCard/LifeInsuranceBeneficiariesCard";
import LifeInsuranceAdditionalCoveragesCard from "./LifeInsuranceAdditionalCoveragesCard/LifeInsuranceAdditionalCoveragesCard";
import LifeInsuranceClaimsCard from "./LifeInsuranceClaimsCard/LifeInsuranceClaimsCard";

const LifeInsuranceDashboardView = () => {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const { version, getVersionJson } = useVersionStore();

    const { data: lifeData, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['lifeInsuranceDashboard', version],
        queryFn: () => getVersionJson<LifeInsuranceDashboard>('life'),
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true
    });

    if (isLoading) {
        return (
            <div className="dashboard-view">
                <div className="dashboard-loading">
                    <div className="loading-spinner"></div>
                    <p>Cargando dashboard...</p>
                </div>
            </div>
        );
    }

    if (isError || !lifeData) {
        return (
            <div className="dashboard-view">
                <div className="dashboard-error">
                    <h3>Error al cargar los datos</h3>
                    <p>
                        {error instanceof Error
                            ? error.message
                            : 'No hay datos disponibles'
                        }
                    </p>
                    <button
                        className="retry-button"
                        onClick={() => refetch()}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Cargando...' : 'Reintentar'}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-view">
            <Sidebar sections={sidebarSections} open={sidebarOpen} setOpen={setSidebarOpen} />
            <div className="dashboard-main-div">
                <Breadcrumb title="Seguro de vida" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="dashboard-content" >
                    {/* First row */}
                    <LifeInsuranceDashboardGeneralDataCard data={lifeData.generalData} />
                    <LifeInsuranceQuickActionsCard />
                    <LifeInsurancePrimaryCoveragesCard mainCoverages={lifeData.mainCoverages} />
                    {/* SecondRow */}
                    <LifeInsuranceUpsellingCard upsellingOffers={lifeData.upselling} />
                    <LifeInsurancePaymentCard data={lifeData.paymentInformation} />
                    <LifeInsuranceBeneficiariesCard beneficiaries={lifeData.beneficiaries} />
                    <LifeInsuranceAdditionalCoveragesCard coverageDetails={lifeData.coverageDetails} />
                    {/* ThirdRow */}
                    <LifeInsuranceClaimsCard claims={lifeData.claims} />
                    {/* <PublicityCarouselCard /> */}
                </div>
            </div>
        </div>
    );
}

export default LifeInsuranceDashboardView;