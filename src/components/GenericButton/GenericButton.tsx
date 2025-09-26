import './GenericButton.css';
type GenericButtonProps = {
    secondary?: boolean;
    className?: string;
    primeicon?: string;
    label: string;
    onClick: Function;
}

const GenericButton: React.FC<GenericButtonProps> = ({secondary, className, primeicon, label, onClick}) => {
    let classname = "generic-button";
    if (secondary) {
        classname += " secondary";
    }
    if (className) {
        classname += " " + className;
    }
    return (
        <button className={classname} onClick={() => onClick()}>
            {primeicon && (<i className={'pi ' + primeicon + ' generic-button-icon'}/>)}
            {label}
        </button>
    );
}

export default GenericButton;