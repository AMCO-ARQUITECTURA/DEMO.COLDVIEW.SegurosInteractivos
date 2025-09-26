import type { ReactNode } from "react";

type IconProps = {
    type: "primeicon" | "img" | "svg";
    primeicon?: string;
    img?: string;
    svg?: ReactNode;
    iconClassname?: string;
    containerized?: boolean;
    containerClassname?: string;
  }

export { type IconProps }