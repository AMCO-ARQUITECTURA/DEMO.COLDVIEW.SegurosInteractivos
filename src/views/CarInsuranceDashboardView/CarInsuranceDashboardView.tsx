import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Sidebar from "@/components/Sidebar/Sidebar";
import './CarInsuranceDashboardView.css';
import CarDetailsCard from "./CarDetailsCard";
import PolicyStatusCard from "./PolicyStatusCard";
import CarInsuranceQuickActionsCard from "./CarInsuranceQuickActionsCard";
import DocumentationDownloadCard from "./DocumentationDownloadCard";
import { useState } from "react";
import CarCoveringsCard from "./CarCoveringsCard";
import CarUpsellingCard from "./CarUpsellingCard";


const CarInsuranceDashboardView = () => {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

    const sidebarSections = [
        {
            sectionTitle: "Principal",
            showTitle: false,
            icons: [
                { name: "Dashboard general", icon: "pi-home", route: "/" }
            ]
        },
        {
            sectionTitle: "Productos",
            showTitle: true,
            icons: [
                { name: "Seguro automotor", icon: "pi-car", route: "/car-insurance-dashboard" },
                { name: "Seguro de vida", icon: "pi-heart", route: "/life-insurance-dashboard" }
            ]
        }];

    return (
        <div className="dashboard-view">
            <Sidebar sections={sidebarSections} open={sidebarOpen} setOpen={setSidebarOpen}/>
            <div className="dashboard-main-div">
                <Breadcrumb title="Seguro automotor" toggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>
                <div className="dashboard-content">
                    <div id="dashboardRowOne" style={{ display: 'flex', gap: '10px', width: '100%' }}> 
                        <CarDetailsCard />
                        <PolicyStatusCard />
                        <CarInsuranceQuickActionsCard />
                        <DocumentationDownloadCard />
                    </div>
                    <div id="dashboardRowOne" style={{ display: 'flex', gap: '10px', width: '100%' }}> 
                        <CarCoveringsCard />
                        <CarUpsellingCard />
                        {/* <CarDetailsCard /> */}
                        {/* <CarDetailsCard /> */}
                        {/* <SmallDashboardCard />
                        <SmallDashboardCard />
                        <SmallDashboardCard /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarInsuranceDashboardView;