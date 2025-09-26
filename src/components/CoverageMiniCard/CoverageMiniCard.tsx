import Icon from '../Icon/Icon';
import type { IconProps } from '../Icon/IconTypes';
import './CoverageMiniCard.css'

type CoverageMiniCardProps = {
    iconProps: IconProps; 
    title: string;
    subtitle?: string;
    additionalClassname?: string; 
    onClick?: Function;
  };

const CoverageMiniCard: React.FC<CoverageMiniCardProps> = ({iconProps, title, subtitle, additionalClassname, onClick}) => {
    return (
        <div className={"coverage-mini-card " + additionalClassname} onClick={() => onClick ? onClick() : ""}>
            <Icon {...iconProps} />
            <div className='coverage-mini-card-text-container'>
                <span className="coverage-mini-card-title">{title}</span>
                {subtitle && (<span className="coverage-mini-card-subtitle">{subtitle}</span>)}
            </div>
            
        </div>
    );
}

export default CoverageMiniCard;