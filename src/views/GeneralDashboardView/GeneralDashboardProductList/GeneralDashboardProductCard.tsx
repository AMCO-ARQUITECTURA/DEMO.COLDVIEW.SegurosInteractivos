import Icon from "@/components/Icon/Icon";
import type { GeneralDashboardProduct } from "@/types/GeneralDashboardTypes";
import { linkOptions, useNavigate } from "@tanstack/react-router";

type GeneralDashbordProductCardProps = {
    product: GeneralDashboardProduct;
}

const GeneralDashbordProductCard: React.FC<GeneralDashbordProductCardProps> = ({ product }) => {
    // TODO: Agregar posibilidad de agregarle al icono un badge de notificacion.

    const carLinkTo = linkOptions({ to: '/car-insurance-dashboard' });
    const lifeLinkTo = linkOptions({ to: '/life-insurance-dashboard' });
    const navigate = useNavigate();

    const onClickCard = () => {
        if (product.type === 'car') {
            navigate(carLinkTo);
        } else if (product.type === 'life') {
            navigate(lifeLinkTo);
        }
    }
    return (
        <div className="general-dashboard-product-card" onClick={onClickCard}>
            <div className="general-dashboard-product-card-details">
                <div className="general-dashboard-product-card-header">
                    <Icon {...product.icon} iconClassname="general-dashboard-product-card-icon" />
                    <span className="general-dashboard-product-card-title">{product.name}</span>
                </div>
                <div className="general-dashboard-product-card-body">
                    <span className="general-dashboard-product-card-body-secondary-value">{product.name}</span>
                    <span className="general-dashboard-product-card-body-secondary-value">{product.policyNumber}</span>
                </div>
            </div>
            <Icon type="primeicon" primeicon="pi-angle-right" iconClassname="general-dashboard-product-card-calltoaction-icon" />
        </div>
    );
}

export default GeneralDashbordProductCard;