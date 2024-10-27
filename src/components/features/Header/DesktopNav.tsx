import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/constants";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="subheading hidden lg:block">
      <ul className="flex">
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <Link
              className={`mx-2 px-3 ${
                pathname === `/${href}` ? "text-secondary" : "engageable"
              }`}
              href={`/${href}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
