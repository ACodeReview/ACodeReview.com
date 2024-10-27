import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/constants";
import MobileNavIcon from "./MobileNavIcon";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const toggleMobileNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      const { key } = event;
      const currentIndex = menuItemsRef.current.findIndex(
        (item) => item === document.activeElement
      );

      if (key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % menuItemsRef.current.length;
        menuItemsRef.current[nextIndex]?.focus();
      } else if (key === "ArrowUp") {
        event.preventDefault();
        const prevIndex =
          (currentIndex - 1 + menuItemsRef.current.length) %
          menuItemsRef.current.length;
        menuItemsRef.current[prevIndex]?.focus();
      } else if (key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      } else if (key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === menuItemsRef.current[0]) {
            event.preventDefault();
            menuItemsRef.current[menuItemsRef.current.length - 1]?.focus();
          }
        } else {
          if (
            document.activeElement ===
            menuItemsRef.current[menuItemsRef.current.length - 1]
          ) {
            event.preventDefault();
            menuItemsRef.current[0]?.focus();
          }
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);

        if (window.innerWidth > 640) {
          toggleButtonRef.current?.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);

      if (window.innerWidth > 640) {
        menuItemsRef.current[0]?.focus();
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div className="flex items-center lg:hidden" ref={mobileNavRef}>
      <button
        aria-controls="mobile-nav-content"
        aria-expanded={isOpen}
        aria-label="Expand and close mobile navigation menu"
        className="group relative size-8"
        id="mobile-nav-button"
        onClick={toggleMobileNav}
        ref={toggleButtonRef}
      >
        <MobileNavIcon isOpen={isOpen} />
      </button>
      <nav
        className={
          !isOpen
            ? "hidden"
            : "subheading default-border-color absolute inset-x-0 inset-y-[53px] z-10 max-h-fit rounded-b-lg border bg-neutral-50 shadow-lg transition-all duration-500 ease-in-out"
        }
        id="mobile-nav-content"
        aria-hidden={!isOpen}
      >
        <ul className="default-divide-color flex flex-col divide-y-[1px]">
          {NAV_ITEMS.map(({ href, label }, index) => (
            <li key={href}>
              <Link
                className={`block p-6 ${
                  pathname === `/${href}` ? "text-secondary" : "engageable"
                }`}
                href={`/${href}`}
                onClick={toggleMobileNav}
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
