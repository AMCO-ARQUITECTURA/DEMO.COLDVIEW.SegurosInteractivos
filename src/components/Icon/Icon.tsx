import type { IconProps } from "./IconTypes";

const Icon: React.FC<IconProps> = (props) => {
    let iconElement;
    if (props.type === "primeicon") {
        iconElement = <i className={`pi ${props.primeicon} ${props.iconClassname}`}/>
    }
    if (props.type === "img") {
        iconElement = <img src={props.img} className={props.iconClassname}/>
    }
    if (props.type === "svg") {
        iconElement = props.svg;
    }

    if (props.containerized === true) {
        return (
            <div className={props.containerClassname}>
                {iconElement}
            </div>    
        )
    }
    return iconElement
}

export default Icon;