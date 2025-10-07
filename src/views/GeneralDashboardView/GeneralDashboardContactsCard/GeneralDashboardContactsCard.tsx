import CardHeader from "@/components/CardHeader/CardHeader";
import './GeneralDashboardContactsCard.css';
import { GeneralDashboardContactSummary, type GeneralDashboardContactSummaryProps } from "./GeneralDashboardContactSummary";

const GeneralDashboardContactsCard = () => {
    
    const contacts: GeneralDashboardContactSummaryProps[] = [
        { icon: { type: 'primeicon', primeicon: 'pi-user'}, name: 'Soporte', description: 'Ayuda general', actions: [{icon: {type: 'primeicon', primeicon: 'pi-phone'}, label: '+54 911 5123-4567'}, {icon: {type: 'primeicon', primeicon: 'pi-whatsapp'}, accentClass: 'whatsapp', clickable: true}] },
        { icon: { type: 'primeicon', primeicon: 'pi-user'}, name: 'Maria Gonzalez', description: 'Tu agente', actions: [{icon: {type: 'primeicon', primeicon: 'pi-phone'}, label: '+54 911 5123-4567'}, {icon: {type: 'primeicon', primeicon: 'pi-whatsapp'}, accentClass: 'whatsapp', clickable: true}, {icon: {type: 'primeicon', primeicon: 'pi-envelope'}, label: 'E-mail', clickable: true}] },
        { icon: { type: 'primeicon', primeicon: 'pi-user'}, name: 'Ventas', description: 'Solicita tu proximo seguro!', actions: [{icon: {type: 'primeicon', primeicon: 'pi-phone'}, label: '+54 911 5123-4567'}, {icon: {type: 'primeicon', primeicon: 'pi-whatsapp'}, accentClass: 'whatsapp', clickable: true}] },
        { icon: { type: 'primeicon', primeicon: 'pi-user'}, name: 'Emergencias 24/7', description: 'Linea directa para urgencias y siniestros', accent: true, actions: [{icon: {type: 'primeicon', primeicon: 'pi-phone'}, label: '+54 911 5123-4567', accentClass: 'accent'}] },
    ]
    return (
        <div className="generic-dashboard-card col-6 general-dashboard-contacts-card">
            <CardHeader title="Contactos" />
            <div className="general-dashboard-contacts-card-content">
                {contacts.map((contact, index) => (
                    <GeneralDashboardContactSummary 
                        key={index}
                        icon={contact.icon} 
                        name={contact.name} 
                        description={contact.description} 
                        actions={contact.actions} 
                    />
                ))}
            </div>
        </div>
    );
};

export default GeneralDashboardContactsCard;