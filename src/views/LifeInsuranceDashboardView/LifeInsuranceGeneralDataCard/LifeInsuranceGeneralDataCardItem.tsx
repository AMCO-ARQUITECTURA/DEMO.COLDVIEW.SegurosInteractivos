type LifeInsuranceGeneralDataCardItemProps = {
    label: string;
    value: string;
}

const LifeInsuranceGeneralDataItem: React.FC<LifeInsuranceGeneralDataCardItemProps> = ({label, value}) => {
    return (
        <div className="life-insurance-general-data-item">
            <span className="life-insurance-general-data-item-label">{label}</span>
            <span className="life-insurance-general-data-item-value">{value}</span>
        </div>
    );
}

export default LifeInsuranceGeneralDataItem;