import { createIcon } from '@/utilities/ComponentUtilities';
import type { IconProps } from '../Icon/IconTypes';
import './QuickActionsButton.css';

type QuickActionsButton = {
    label: string;
    icon: IconProps;
    accent?: boolean;
    additionalInfo?: string
}

const QuickActionsButton: React.FC<QuickActionsButton> = ({label, icon, accent, additionalInfo}) => {
    const iconWithClass: IconProps = {
        ...icon,
        iconClassname: `${icon.iconClassname || ''} quick-actions-button-icon ${accent ? 'accent' : ''}`.trim()
    };
    return (
        <div className={`quick-actions-button ${accent ? "accent" : ""}`}>
            <div className='quick-actions-button-main'>
                {createIcon(iconWithClass)}
                <span>{label}</span>
            </div>
            {additionalInfo && <span className='quick-actions-button-additional-info'>{additionalInfo}</span>}
        </div>
    );
}

export default QuickActionsButton;