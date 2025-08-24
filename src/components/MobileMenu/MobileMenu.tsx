import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const matches = useMediaQuery("(max-width: 1325px)");

  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const links = [
    { to: "/generator", label: "Generator" },
    { to: "/character-history", label: "Character History" },
    { to: "/", label: "Copyright" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      {isMenuOpen && matches && (
        <div className="mobile-menu-links">
          {links.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
      {matches && <div className="mobile-menu">
        <button className="menu-button" onClick={handleOpenMenu}>
          {isMenuOpen ? <MdClose size={40} /> : <MdMenu size={40} />}
        </button>
      </div>}
    </>
  );
}

export { MobileMenu };
