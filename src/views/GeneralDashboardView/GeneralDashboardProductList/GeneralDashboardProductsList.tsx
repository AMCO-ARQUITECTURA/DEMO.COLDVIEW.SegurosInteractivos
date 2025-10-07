import Icon from "@/components/Icon/Icon";
import type { GeneralDashboardProduct } from "@/types/GeneralDashboardTypes";
import './GeneralDashboardProductList.css';
import GeneralDashbordProductCard from "./GeneralDashboardProductCard";

type GeneralDashboardProductsListProps = {
    products: GeneralDashboardProduct[];
    onRequestNewProduct?: () => void;
}

const GeneralDashboardProductsList: React.FC<GeneralDashboardProductsListProps> = (props) => {
    return (
        <div className="general-dashboard-product-list">
            <span className="general-dashboard-product-list-title">Tus productos</span>
            <div className="general-dashboard-product-list-container">
                {props.products.map((product, index) => {
                    return (
                        <GeneralDashbordProductCard key={index} product={product} />
                    )
                })}
                <div className="general-dashboard-product-card-request" onClick={props.onRequestNewProduct} >
                    <Icon type="img" img="/icons/plus-circle.png" iconClassname="general-dashboard-product-card-request-icon" />
                    <span className="general-dashboard-product-card-request-text">Solicitar nuevo producto</span>
                </div>
            </div>
        </div>
    );
}

export default GeneralDashboardProductsList;