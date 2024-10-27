import Image from "next/image";

import { twMerge } from "tailwind-merge";

import ACodeReviewLogo from "./ACodeReviewLogo.jpg";

type LogoProps = {
  className: string;
};

const Logo = ({ className }: LogoProps) => (
  <Image
    alt="Logo"
    className={twMerge("w-auto", className)}
    src={ACodeReviewLogo}
  />
);

export default Logo;
