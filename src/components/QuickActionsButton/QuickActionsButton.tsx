import './QuickActionsButton.css';

type QuickActionsButton = {
    label: string;
    icon?: string;
    iconPath?: string;
    accent?: boolean;
    iconHeight?: number;
}

const QuickActionsButton: React.FC<QuickActionsButton> = ({label, icon, iconPath, accent, iconHeight}) => {
    const iconElement = iconPath ? <img src={'/icons/' + iconPath} height={iconHeight}/>
    : <i className={`pi ${icon} quick-actions-button-icon ${accent ? "accent" : ""}`}/>
    return (
        <div className={`quick-actions-button ${accent ? "accent" : ""}`}>
            <div className='quick-actions-button-icon-container'>
                {iconElement}
            </div>
            
            <span className={`quick-actions-button-label ${accent ? "accent" : ""}`}>{label}</span>
        </div>
    );
}

export default QuickActionsButton;