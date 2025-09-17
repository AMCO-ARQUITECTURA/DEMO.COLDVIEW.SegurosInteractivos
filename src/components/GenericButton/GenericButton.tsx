import './GenericButton.css';
type GenericButtonProps = {
    secondary?: boolean;
    small?: boolean;
    label: string;
    onClick: Function;
}

const GenericButton: React.FC<GenericButtonProps> = ({secondary, small, label, onClick}) => {
    let classname = "generic-button";
    if (secondary) {
        classname += " secondary";
    }
    if (small) {
        classname += " small";
    }
    return (
        <button className={classname} onClick={() => onClick()}>
            {label}
        </button>
    );
}

export default GenericButton;