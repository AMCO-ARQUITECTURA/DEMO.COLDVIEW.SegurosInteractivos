import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Sidebar from "@/components/Sidebar/Sidebar";
import { sidebarSections } from "@/data/CommonData";
import { useState } from "react";
import useVersionStore from "@/store/VersionStore";
import { useQuery } from "@tanstack/react-query";
import type { GeneralDashboard } from "@/types/GeneralDashboardTypes";
import GeneralDashboardProductsList from "./GeneralDashboardProductList/GeneralDashboardProductsList";
import GeneralDashboardQuickActionsCard from "./GeneralDashboardQuickActionsCard/GeneralDashboardQuickActionsCard";
import GeneralDashboardContactsCard from "./GeneralDashboardContactsCard/GeneralDashboardContactsCard";
import GeneralDashboardQInsightCard from "./GeneralDashboardQinsightCard/GeneralDashboardQInsightCard";
import GeneralDashboardFinancialResumeCard from "./GeneralDashboardFinancialResumeCard/GeneralDashboardFinancialResumeCard";
import GeneralDashboardNotificationsCard from "./GeneralDashboardNotificationsCard/GeneralDashboardNotificationsCard";
import ClaimsCard from "@/components/Claims/ClaimsCard";
import QInsightChatPopup from "@/components/QInsightChatPopup/QInsightChatPopup";

const GeneralDashboardView = () => {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const { version, getVersionJson } = useVersionStore();

    const { data: data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['GeneralDashboard', version],
        queryFn: () => getVersionJson<GeneralDashboard>('general'),
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

    if (isError || !data) {
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
                <Breadcrumb title="Dashboard General" toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="dashboard-content" >
                    {/* First row */}
                    <GeneralDashboardProductsList products={data.products}/>
                    {/* SecondRow */}
                    <ClaimsCard claims={data.lastSinistersAndClaims} asGeneral/>
                    <GeneralDashboardQuickActionsCard downloads={data.quickActions.downloads} />
                    {/* ThirdRow */}
                    <GeneralDashboardContactsCard />
                    <GeneralDashboardQInsightCard />
                    {/* FourthRow */}
                    <GeneralDashboardFinancialResumeCard data={data.financialSummary} />
                    <GeneralDashboardNotificationsCard notifications={data.notificationsAndAlerts} />
                </div>
            </div>
            <QInsightChatPopup />
        </div>
    );
}

export default GeneralDashboardView;