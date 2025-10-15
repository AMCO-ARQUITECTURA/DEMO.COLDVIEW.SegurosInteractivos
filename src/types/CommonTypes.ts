import type { IconProps } from "@/components/Icon/IconTypes";

type Coverage = {
    icon: IconProps;
    title: string;
    shortTitle?: string;
    coverageLimits?: string;
    shortLimits?: string;
    description: string;
}

type CoverageExclusion = {
    name: string;
    description: string;
}

type PolicyPayment = {
    id?: string;
    date: string;
    amount: string;
    status: string;
}

const emptyPayment: PolicyPayment = {
    date: "",
    amount: "",
    status: "pending"
}

type Claim = {
    id?: string;
    date: string;
    type: string;
    description: string;
    status: 'pending' | 'completed' | 'rejected';
    amount: string;
}

const emptyClaim: Claim = {
    date: "",
    type: "",
    description: "",
    status: 'pending',
    amount: ""
}

type CallToAction = {
    label: string;
    linkTo: string;
    type: 'primary' | 'secondary';
    icon?: string;
}

type PopupContent = {
    discount?: string;
    oldPrice?: string;
    price?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    benefits?: {
        items: string[],
        title: string
    }
    ctaButtons: CallToAction[];
    trustIndicator?: {
        text: string;
        type: 'testimonial' | 'guarantee' | 'popular';
    };
}

type Offer = {
    icon: IconProps;
    title: string;
    subtitle: string;
    description?: string;
    price: string;
    discount: string;
    popup: PopupContent;
}

const emptyOffer: Offer = {
    icon: {
        type: "primeicon",
        primeicon: "pi-car"
    },
    title: "",
    subtitle: "",
    price: "",
    discount: "",
    popup: {
        ctaButtons: []
    }
}

type Benefit = {
    icon: IconProps;
    title: string;
    subtitle: string;
    description: string;
    discount: string;
}

type DownloadFile = {
    title: string;
    url: string;
    size: string;
}

export { type Coverage, type CoverageExclusion, type PolicyPayment, emptyPayment, 
    type Claim, emptyClaim, type CallToAction, type PopupContent, type Offer, emptyOffer, type Benefit, type DownloadFile}