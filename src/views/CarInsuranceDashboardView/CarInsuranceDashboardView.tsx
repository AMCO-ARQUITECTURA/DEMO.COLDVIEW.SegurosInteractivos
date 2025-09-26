import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Sidebar from "@/components/Sidebar/Sidebar";
import './CarInsuranceDashboardView.css';
import CarDetailsCard from "./components/CarDetailsCard/CarDetailsCard";
import PolicyStatusCard from "./components/PolicyStatusCard/PolicyStatusCard";
import CarInsuranceQuickActionsCard from "./components/CarInsuranceQuickActionsCard/CarInsuranceQuickActionsCard";
import DocumentationDownloadCard from "./components/DocumentationDownloadCard/DocumentationDownloadCard";
import { useState } from "react";
import CarUpsellingCard from "./components/CarUpsellingCard/CarUpsellingCard";
import CarInsurancePaymentsCard from "./components/CarPaymentsCard/CarInsurancePaymentsCard";
import CarInsuranceClaimsCard from "./components/CarInsuranceClaimsCard/CarInsuranceClaimsCard";
import CarInsuranceCrossSellingCard from "./components/CarInsuranceCrossSellingCard/CarInsuranceCrossSellingCard";
import CarInsuranceBenefitsCard from "./components/CarInsuranceBenefitsCard/CarInsuranceBenefitsCard";
import PublicityCarouselCard from "@/components/PublicityCarouselCard/PublicityCarouselCard";
import { sidebarSections } from "@/data/CommonData";
import useVersionStore from "@/store/VersionStore";
import { useQuery } from "@tanstack/react-query";
import type { CarInsuranceDashboard } from "@/types/CarInsuranceDashboardTypes";
import type { Benefit, Offer } from "@/types/CommonTypes";
import CarInsuranceCoveragesCard from "./components/CarInsuranceCoveragesCard/CarInsuranceCoveragesCard";

const CarInsuranceDashboardView = () => {
    const { version, getVersionJson } = useVersionStore();
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const { data: carData, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['carInsuranceDashboard', version],
        queryFn: () => getVersionJson<CarInsuranceDashboard>('car'),
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

    if (isError || !carData) {
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
                <Breadcrumb title="Seguro automotor" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="dashboard-content">
                    {/* Row one */}
                    <CarDetailsCard />
                    <PolicyStatusCard />
                    <CarInsuranceQuickActionsCard />
                    <DocumentationDownloadCard />
                    {/* Row two */}

                    <CarInsuranceCoveragesCard coverageDetails={carData.coverageDetails}/>
                    <CarUpsellingCard upsellingOffers={carData.upselling as Offer[]} />
                    {/* Row three */}
                    <CarInsurancePaymentsCard />
                    <CarInsuranceClaimsCard />
                    {/* Row Four */}

                    <CarInsuranceCrossSellingCard offers={carData.crossSelling as Offer[]} />
                    <CarInsuranceBenefitsCard benefits={carData.benefits as Benefit[]} />
                    <PublicityCarouselCard />
                </div>
            </div>
        </div>
    );
};

export default CarInsuranceDashboardView;