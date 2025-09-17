import type { CSSProperties } from 'react';
import './CardHeader.css';
type CardHeaderProps = {
    title: string;
    subtitle?: string;
    accent?: boolean;
    iconColor?: 'red' | 'yellow';
    style?: CSSProperties;
};

const CardHeader = ({ title, subtitle, iconColor, style, accent}: CardHeaderProps) => {
    const iconColorClass = iconColor === 'red' ? 'card-header-icon-secondary' : iconColor === 'yellow' ? 'card-header-icon-tertiary' : '';
    return (
        <div className="card-header" style={style}>
            <div className='card-header-main-part'>
                <i className={"card-header-icon " + iconColorClass}></i>
                <p className={`card-header-title ${accent ? "accent" : ""}`}>{title}</p>
            </div>
            {subtitle && (<span className='card-header-subtitle'>{subtitle}</span>)}
        </div>
    );
};
export default CardHeader;