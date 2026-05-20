import React from "react";
import Navigation from "../../partials/Navigation";
import { navList } from "../json/nav-function";

const Layout = ({ children, menu = "", submenu = "" }) => {
  // TODO: use menu and submenu to determine which menu item is active
  const [isOpen, setIsOpen] = React.useState(false);

  const isMobile = () => window.innerWidth < 1024;

  //   only open the sidebar on mobile devices
  const setSidebar = (open) => {
    if (!isMobile()) return;
    setIsOpen(open);
  };

  //   close the sidebar when the window is resized to a width greater than 1024px
  React.useEffect(() => {
    const handleResize = () => {
      if (!isMobile()) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // to clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* navigation wrapper */}
      <section className="bg-gray-50 flex h-screen w-full relative overflow-hidden">
        {/* overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebar(false)}
          />
        )}
        <Navigation
          menu={menu}
          submenu={submenu}
          navigationList={navList}
          isOpen={isOpen}
          onClose={() => setSidebar(false)}
        />

        <main
          className={`flex-1 overflow-y-auto bg-gray-50 ${isOpen ? "overflow-hidden" : ""}`}
        >
          {/* Render children as function to pass down the onToggle function to Header */}
          {typeof children === "function"
            ? children({ onToggle: () => setSidebar(true) })
            : children}
        </main>
      </section>
    </>
  );
};

export default Layout;
