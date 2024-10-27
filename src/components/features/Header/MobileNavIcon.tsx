const MobileNavIcon = ({ isOpen }: { isOpen: boolean }) => (
  <>
    <span className="sr-only">Open dropdown navigation menu</span>
    <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-5 transform transition duration-500 ease-in-out ${
          isOpen
            ? "rotate-45 bg-secondary group-hover:bg-secondary-600"
            : "-translate-y-1.5 bg-primary group-hover:bg-secondary"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-5 transform transition duration-500 ease-in-out ${
          isOpen ? "opacity-0" : "bg-primary group-hover:bg-secondary"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`absolute block h-0.5 w-5 transform transition duration-500 ease-in-out ${
          isOpen
            ? "-rotate-45 bg-secondary group-hover:bg-secondary-600"
            : "translate-y-1.5 bg-primary group-hover:bg-secondary"
        }`}
      ></span>
    </div>
  </>
);

export default MobileNavIcon;
