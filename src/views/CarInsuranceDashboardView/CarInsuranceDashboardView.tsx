import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Sidebar from "@/components/Sidebar/Sidebar";
import './CarInsuranceDashboardView.css';
import CarDetailsCard from "./components/CarDetailsCard/CarDetailsCard";
import PolicyStatusCard from "./components/PolicyStatusCard/PolicyStatusCard";
import CarInsuranceQuickActionsCard from "./components/CarInsuranceQuickActionsCard/CarInsuranceQuickActionsCard";
import DocumentationDownloadCard from "./components/DocumentationDownloadCard/DocumentationDownloadCard";
import { useState } from "react";
import CarInsurancePaymentsCard from "./components/CarPaymentsCard/CarInsurancePaymentsCard";
import CarInsuranceCrossSellingCard from "./components/CarInsuranceCrossSellingCard/CarInsuranceCrossSellingCard";
import CarInsuranceBenefitsCard from "./components/CarInsuranceBenefitsCard/CarInsuranceBenefitsCard";
import { sidebarSections } from "@/data/CommonData";
import useVersionStore from "@/store/VersionStore";
import { useQuery } from "@tanstack/react-query";
import type { CarInsuranceDashboard } from "@/types/CarInsuranceDashboardTypes";
import type { Benefit, Offer } from "@/types/CommonTypes";
import QInsightFAB from "@/components/QInsightFAB/QInsightFAB";
import BlogCard from "@/components/BlogCard/BlogCard";
import CarouselCard from "@/components/CarouselCard/CarouselCard";
import QInsightChatPopup from "@/components/QInsightChatPopup/QInsightChatPopup";
import CoveragesCard from "@/components/Coverages/CoveragesCard";
import ClaimsCard from "@/components/Claims/ClaimsCard";

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

    const navigateToColdview = () => {
        window.open('https://www.coldview.com', '_blank', 'noopener,noreferrer');
    }

    const upsellingImages = [
        { id: 1, url: '/ads/car_up_total.png', alt: 'Publicity 1', onClick: navigateToColdview},
        { id: 2, url: '/ads/car_up_latam.png', alt: 'Publicity 2', onClick: navigateToColdview},
        { id: 3, url: '/ads/car_up_driver.png', alt: 'Publicity 3', onClick: navigateToColdview},
    ];

    return (
        <div className="dashboard-view">
            <Sidebar sections={sidebarSections} open={sidebarOpen} setOpen={setSidebarOpen} />
            <div className="dashboard-main-div">
                <Breadcrumb title="Seguro automotor" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="dashboard-content">
                    {/* Row one */}
                    <CarDetailsCard details={carData.generalData}/>
                    <PolicyStatusCard status={carData.policyStatus}/>
                    <CarInsuranceQuickActionsCard />
                    <DocumentationDownloadCard files={carData.documentation}/>
                    {/* Row two */}
                    <CoveragesCard coverages={carData.coverageDetails.coverages} exclusions={carData.coverageDetails.exclusions} />
                    <CarInsuranceCrossSellingCard offers={carData.crossSelling as Offer[]} />
                    {/* Row three */}
                    <CarInsurancePaymentsCard payments={carData.payments}/>
                    <CarInsuranceBenefitsCard benefits={carData.benefits as Benefit[]} />
                    {/* Row Four */}
                    <ClaimsCard claims={carData.claims}/>
                    <CarouselCard images={upsellingImages} title={"Mejora tu cobertura!"} />

                    <BlogCard title="Blog Destacado" imgPath="/ads/car_blog.png" onClick={() => navigateToColdview()} 
                        descriptionBadge={"Seguridad al volante"} descriptionTitle={"Alcohol Cero, Responsabilidad 100%"} 
                        descriptionText={"Infórmate en nuestro blog sobre el impacto real de conducir sin alcohol. Descubre datos, estadísticas y consejos para tomar decisiones más seguras al volante."} 
                        descriptionCallToAction={"Ingresa y sumate al cambio"}/>
                </div>
            </div>
            <QInsightFAB/>
            <QInsightChatPopup/>
        </div>
    );
};

export default CarInsuranceDashboardView;