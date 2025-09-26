import { createIcon } from '@/utilities/ComponentUtilities';
import type { IconProps } from '../Icon/IconTypes';
import './QuickActionsButton.css';

type QuickActionsButton = {
    label: string;
    icon: IconProps;
    accent?: boolean;
}

const QuickActionsButton: React.FC<QuickActionsButton> = ({label, icon, accent}) => {
    const iconWithClass: IconProps = {
        ...icon,
        iconClassname: `${icon.iconClassname || ''} quick-actions-button-icon ${accent ? 'accent' : ''}`.trim()
    };
    return (
        <div className={`quick-actions-button ${accent ? "accent" : ""}`}>
            {createIcon(iconWithClass)}
            <span>{label}</span>
        </div>
    );
}

export default QuickActionsButton;