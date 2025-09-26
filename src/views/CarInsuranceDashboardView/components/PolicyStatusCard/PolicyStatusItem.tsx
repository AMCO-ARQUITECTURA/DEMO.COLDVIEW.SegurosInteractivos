type PolicyStatusItemProps = {
    icon: string;
    label: string;
    value: string;
    iconColor?: 'red' | 'green' | 'yellow' | 'default';
    valueColor?: 'green' | 'default';
};

const PolicyStatusItem = ({ icon, label, value, iconColor, valueColor }: PolicyStatusItemProps) => {
    return (
        <div className="policy-status-item">
            <div className="policity-status-item-label-container">
                <div className={`policy-status-item-icon-container ${iconColor ? iconColor : 'default'}`}>
                    <i className={`pi ${icon} policy-status-item-icon`} />
                </div>
                <span className="policy-status-item-label">{label}</span>
            </div>
            
            <span className={`policy-status-item-value ${valueColor ? valueColor : 'default'}`}>{value}</span>
        </div>
    );
};

export default PolicyStatusItem;