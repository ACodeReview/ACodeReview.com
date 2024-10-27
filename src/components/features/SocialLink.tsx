import Link from "next/link";

export type SocialLinkProps = {
  children: React.ReactNode;
  href: string;
  viewBox: string;
  text: string;
};

const SocialLink = ({ children, href, text, viewBox }: SocialLinkProps) => (
  <Link className="flex items-center gap-2 group" href={href}>
    <svg
      aria-hidden="true"
      className="h-8 transition-all group-hover:brightness-150"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
    <span className="group-hover:text-neutral-900 transition-all group-hover:font-semibold">
      {text}
    </span>
  </Link>
);

export default SocialLink;
