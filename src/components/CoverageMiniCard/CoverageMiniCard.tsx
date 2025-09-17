import './CoverageMiniCard.css';
import type { Component } from "react";

type CoverageMiniCardProps = {
    title: string;
    subtitle: string;
    height: number;
    width: number;
  } & (
    | {
        iconType: 'primeicon';
        primeicon: string;
        svg?: never;
        img?: never;
        imgHeight?: never;
      }
    | {
        iconType: 'svg';
        svg: Component;
        primeicon?: never;
        img?: never;
        imgHeight?: never;
      }
    | {
        iconType: 'img';
        img: string;
        imgHeight: number;
        primeicon?: never;
        svg?: never;
      }
  );

const CoverageMiniCard: React.FC<CoverageMiniCardProps> = ({iconType, primeicon, svg, img, imgHeight, title, subtitle, height, width}) => {
    let icon;
    if (iconType === "primeicon") {
        icon = <i className={`pi ${primeicon} quick-actions-button-icon `}/>
    } else if (iconType === "svg") {

    } else if (iconType === "img") {
        icon = <img src={'/icons/' + img} height={imgHeight}/>;
    }

    return (
        <div className="coverage-mini-card" style={{ height: `${height}px`, width: `${width}px` }}>
            <div className="coverage-mini-card-icon-container">
                {icon}
            </div>
            <div className='coverage-mini-card-text-container'>
                <span className="coverage-mini-card-title">{title}</span>
                <span className="coverage-mini-card-subtitle">{subtitle}</span>
            </div>
            
        </div>
    );
}

export default CoverageMiniCard;