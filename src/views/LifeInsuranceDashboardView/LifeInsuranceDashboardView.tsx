import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
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
import BlogCard from "@/components/BlogCard/BlogCard";
import CarouselCard from "@/components/CarouselCard/CarouselCard";

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

    const navigateToColdview = () => {
        console.log('navigateToColdview');
        window.open('https://www.coldview.com', '_blank', 'noopener,noreferrer');
    }

    const crossSellingImages = [
        { id: 1, url: '/ads/life_cross_dental.png', alt: 'Publicity 1', onClick: navigateToColdview},
        { id: 2, url: '/ads/life_cross_home.png', alt: 'Publicity 2', onClick: navigateToColdview},
        { id: 3, url: '/ads/life_cross_unemployment.png', alt: 'Publicity 3', onClick: navigateToColdview },
    ];

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
                    {/* <LifeInsuranceCrossSellingCard offers={lifeData.crossSelling} /> */}
                    <CarouselCard images={crossSellingImages} title={"Mejora tu cobertura"} />

                    <BlogCard title="Blog Destacado" imgPath="/ads/life_blog.png" onClick={() => navigateToColdview()} 
                        descriptionBadge={"Salud mental"} descriptionTitle={"El bienestar comienza en tu mente"} 
                        descriptionText={"Únete a nuestro encuentro gratuito sobre salud mental. Comparte con especialistas, aprende sobre autocuidado y descubre cómo tu bienestar emocional influye en cada decisión que tomas, especialmente al volante."} />
                </div>
            </div>
        </div>
    );
}

export default LifeInsuranceDashboardView;