import Icon from "@/components/Icon/Icon";
import type { IconProps } from "@/components/Icon/IconTypes";

const createIcon = (iconProps: IconProps, additionalClass?: string): React.ReactElement => {
    const finalIconProps = additionalClass
        ? {
            ...iconProps,
            iconClassname: `${iconProps.iconClassname || ''} ${additionalClass}`.trim()
        }
        : iconProps;

    return <Icon {...finalIconProps} />;
};

const createPrimeIcon = (
    primeicon: string,
    iconClassname?: string,
    containerized?: boolean,
    containerClassname?: string
): React.ReactElement => {
    return <Icon
        type="primeicon"
        primeicon={primeicon}
        iconClassname={iconClassname}
        containerized={containerized}
        containerClassname={containerClassname}
    />;
};

const createImgIcon = (
    img: string,
    iconClassname?: string,
    containerized?: boolean,
    containerClassname?: string
): React.ReactElement => {
    return <Icon
        type="img"
        img={img}
        iconClassname={iconClassname}
        containerized={containerized}
        containerClassname={containerClassname}
    />;
};

export { createIcon, createImgIcon, createPrimeIcon }