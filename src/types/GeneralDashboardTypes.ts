import type { IconProps } from "@/components/Icon/IconTypes";

type GeneralDashboardProduct = {
    id: string;
    name: string;
    icon: IconProps;
    policyNumber: string;
    plan: string;
}

type GeneralDashboardClaim = {
    id: string;
    productId: string;
    productNAme: string;
    date: string;
    type: string;
    description: string;
    status: string;
    ammount: string;
}

type GeneralDashboardPayment = {
    date: string;
    ammount: string;
    productName: string;
}

type GeneralDashboardFinancialSummary = {
    totalPaidInYear: string;
    monthAverage: string;
    savedThisYear: string;
    nextPayments: GeneralDashboardPayment[]
}

type GeneralDashboardNotificationsAndAlerts = {
    title: string;
    message: string;
    ammount: number;
    badgeColor: string;
}

type GeneralDashboard = {
    products: GeneralDashboardProduct[];
    lastSinistersAndClaims: GeneralDashboardClaim[];
    financialSummary: GeneralDashboardFinancialSummary;
    notificationsAndAlerts: GeneralDashboardNotificationsAndAlerts[];
}

export { type GeneralDashboard }