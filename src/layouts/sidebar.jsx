import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/sidebar.css";

export const SectionCounter = ({ activeSection }) => {
  const getNumber = (section) => {
    switch (section) {
      case "hero": return "1";
      case "events": return "2";
      case "curate": return "3";
      case "mission": return "4";
      case "partner": return "5";
      case "faqs": return "6";
      default: return "1";
    }
  };

  return (
    <div className="sidebar-middle-fixed">
      <div className="sidebar-label">
        <span>GRASSROOTS</span>
        <span>ART</span>
      </div>
      <div className="sidebar-number-container">
        <span className="sidebar-zero">0</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={`digit-${activeSection}`}
            className="sidebar-one"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getNumber(activeSection)}
          </motion.span>
        </AnimatePresence>
        <div className="sidebar-accent-line"></div>
      </div>
    </div>
  );
};

export const Sidebar = ({
  isMenuOpen,
  setIsMenuOpen,
  onNavigate,
  onEventsOpen,
  onDiscoverOpen,
  onNFTsOpen,
  onFaqsOpen,
}) => {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarHalf = document.querySelector('.sidebar-overlay-half');
      const triggerBtn = document.querySelector('.menu-lines-trigger');
      
      if (
        sidebarHalf && 
        !sidebarHalf.contains(event.target) && 
        triggerBtn && 
        !triggerBtn.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const navItems = [
    { label: "HOME", id: "hero" },
    { label: "EVENTS", id: "events" },
    // { label: "DISCOVER", id: "mission" },
    { label: "NFT", id: "nfts" },
    { label: "FAQ", id: "faqs" },
  ];

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    if (id === "events") {
      onEventsOpen();
    } else if (id === "mission") {
      onDiscoverOpen();
    } else if (id === "nfts") {
      onNFTsOpen();
    } else {
      onNavigate(id);
    }
  };

  return (
    <div className={`sidebar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="sidebar-header">
        <button
          className="menu-lines-trigger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`menu-line-bar top ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line-bar bottom ${isMenuOpen ? "open" : ""}`}></div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sidebar-overlay-half"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="sidebar-half-content">
              <nav className="sidebar-nav-v2">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    className="nav-link-v2"
                    data-before={item.label}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <span>{item.label}</span>
                    <div className="nav-underline"></div>
                  </motion.button>
                ))}
              </nav>
            </div>
            <div className="sidebar-divider-vertical"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
