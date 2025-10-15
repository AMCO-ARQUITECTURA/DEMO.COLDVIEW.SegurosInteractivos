import CardHeader from "@/components/CardHeader/CardHeader";
import type { GeneralDashboardNotificationsAndAlerts } from "@/types/GeneralDashboardTypes";
import './GeneralDashboardNotificationsCard.css';

type GeneralDashboardNotificationsCardProps = {
    notifications: GeneralDashboardNotificationsAndAlerts[];
}

const GeneralDashboardNotificationsCard: React.FC<GeneralDashboardNotificationsCardProps> = ({ notifications }) => {
    return (
        <div className="generic-dashboard-card col-6">
            <CardHeader title="Notificaciones - Avisos" />
            <div className="generic-dashboard-card-content ">
                {
                    notifications.map((notification, index) => (
                        <div key={index} className="general-dashboard-notification">
                            <div className="general-dashboard-notification-left">
                                <div className={"general-dashboard-notification-badge " + notification.badgeColor}/>
                                <div className="general-dashboard-notification-text">
                                    <span className="general-dashboard-notifications-card-item-title">{notification.title}</span>
                                    <span className="general-dashboard-notifications-card-item-message">{notification.message}</span>
                                </div>
                            </div>
                            {notification.amount && (<span className="general-dashboard-notification-amount">{notification.amount}</span>)}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GeneralDashboardNotificationsCard;