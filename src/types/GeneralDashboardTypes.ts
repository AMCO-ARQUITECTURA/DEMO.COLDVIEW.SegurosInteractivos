import type { IconProps } from "@/components/Icon/IconTypes";

type GeneralDashboardProduct = {
    id: string;
    type: 'car' | 'life' | 'home' | 'health' | 'pension' | 'savings' | 'credit' | 'other' | null;
    name: string;
    icon: IconProps;
    policyNumber: string;
    plan: string;
}

type GeneralDashboardClaim = {
    id: string;
    productId: string;
    productName: string;
    date: string;
    type: string;
    description: string;
    status: string;
    amount: string;
}

type GeneralDashboardPayment = {
    date: string;
    amount: string;
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
    amount: number;
    badgeColor: string;
}

type GeneralDashboard = {
    products: GeneralDashboardProduct[];
    lastSinistersAndClaims: GeneralDashboardClaim[];
    financialSummary: GeneralDashboardFinancialSummary;
    notificationsAndAlerts: GeneralDashboardNotificationsAndAlerts[];
}

export { type GeneralDashboard, type GeneralDashboardProduct, type GeneralDashboardClaim, type GeneralDashboardPayment,
    type GeneralDashboardFinancialSummary, type GeneralDashboardNotificationsAndAlerts };