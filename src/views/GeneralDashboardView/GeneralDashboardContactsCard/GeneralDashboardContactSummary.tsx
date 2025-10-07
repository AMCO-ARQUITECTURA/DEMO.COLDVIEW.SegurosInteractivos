import Icon from "@/components/Icon/Icon";
import type { IconProps } from "@/components/Icon/IconTypes";

type GeneralDashboardContactSummaryProps = {
    icon: IconProps;
    name: string;
    description: string;
    accent?: boolean;
    actions: { icon: IconProps, label?: string, clickable?: boolean, onClick?: Function, accentClass?: string}[];
}

const GeneralDashboardContactSummary: React.FC<GeneralDashboardContactSummaryProps> = ({icon, name, description, accent, actions}) => {
    return (
        <div className={`general-dashboard-contact-summary ${accent ? "accent" : ''}`}>
            <div className="general-dashboard-contact-summary-name-and-icon-container">
                <Icon {...icon} iconClassname="general-dashboard-contact-summary-icon"/>
                <div className="general-dashboard-contact-summary-title-and-description">
                    <span className="general-dashboard-contact-summary-title">{name}</span>
                    <span className="general-dashboard-contact-summary-description">{description}</span>
                </div>
            </div>
            <div className="general-dashboard-contact-summary-actions">
                {actions.map((action, index) => (
                    <div 
                        key={index}
                        className={`general-dashboard-contact-summary-action ${action.clickable ? 'clickable' : ''} ${action.accentClass ? action.accentClass : ''}`}
                        onClick={() => action.clickable && action.onClick ? action.onClick() : null}
                    >
                        <Icon {...action.icon} iconClassname={`general-dashboard-contact-summary-action-icon`}/>
                        {action.label && (<span>{action.label}</span>)}
                    </div>
                ))}
            </div>
        </div>
    );
}


export {type GeneralDashboardContactSummaryProps, GeneralDashboardContactSummary};