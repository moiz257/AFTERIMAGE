import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ContactFaqsSection, FooterMarquee } from "./layouts/footer";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { FullEventsView } from "./components/Events.jsx";
import { Sidebar, SectionCounter } from "./layouts/sidebar";
import { FullDiscoverView } from "./components/Discover.jsx";
import Home from "./pages/Home";
import NFTS from "./pages/nfts.jsx";

const Logo = ({ isHidden }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  if (isHidden) return null;

  return (
    <div
      className="center-logo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="logo-wrapper">
        <motion.div
          className="logo-particle p1"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.8 : 0,
            y: isHovered ? [-10, 10, -10] : 0,
            x: isHovered ? [-5, 5, -5] : 0,
          }}
          transition={{
            opacity: { delay: 0.6, duration: 0.3 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="logo-particle p2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.6 : 0,
            y: isHovered ? [15, -15, 15] : 0,
            x: isHovered ? [10, -10, 10] : 0,
          }}
          transition={{
            opacity: { delay: 0.7, duration: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="logo-particle p3"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.5 : 0,
            scale: isHovered ? [1, 1.3, 1] : 1,
          }}
          transition={{
            opacity: { delay: 0.8, duration: 0.3 },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <svg width="60" height="70" viewBox="0 0 60 70" className="logo-svg">
          <motion.path
            d="M 15 65 L 15 40 L 35 40 L 35 15 L 55 15"
            fill="transparent"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 1, pathOffset: 0 }}
            animate={{
              pathLength: isHovered ? [0, 1] : 1,
              pathOffset: isHovered ? [0, 0] : 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
      <motion.div
        className="logo-text"
        animate={{
          y: isHovered ? 40 : 0,
          x: isHovered ? 20 : 0,
          opacity: isHovered ? 0 : 1,
          filter: isHovered ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        AFTERIMAGE
      </motion.div>
    </div>
  );
};

const DynamicBackgrounds = ({ isHidden }) => {
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.1], [1.3, 1]);

  const opacity2 = useTransform(scrollYProgress, [0.05, 0.15, 0.45, 0.55], [0, 1, 0.5, 0]);
  const scale2 = useTransform(scrollYProgress, [0.05, 0.55], [1.1, 1.3]);

  const opacity3 = useTransform(scrollYProgress, [0.28, 0.33, 0.55, 0.61], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.28, 0.61], [1.1, 1.3]);

  const opacity6 = useTransform(scrollYProgress, [0.78, 0.84, 1], [0, 1, 1]);
  const scale6 = useTransform(scrollYProgress, [0.78, 1], [1.1, 1.3]);

  if (isHidden) return null;

  return (
    <div className="main-background">
      <motion.div
        className="bg-layer"
        style={{
          opacity: opacity1,
          scale: scale1,
          backgroundImage: `url('/assets/image/L1.5fe416cc.png')`,
          filter: "grayscale(1) brightness(0.6) contrast(1.2)",
          zIndex: 1,
        }}
      />
      <motion.div
        className="bg-layer"
        style={{
          opacity: opacity2,
          scale: scale2,
          backgroundImage: `url('/assets/image/newH2.b38c7138.png')`,
          filter: "grayscale(1) brightness(0.8) contrast(1.2)",
          zIndex: 1,
        }}
      />
      <motion.div
        className="bg-layer"
        style={{
          opacity: opacity3,
          scale: scale3,
          backgroundImage: `url('/assets/image/newH3.049bc031.png')`,
          filter: "grayscale(1) brightness(0.8) contrast(1.2)",
          zIndex: 1,
        }}
      />
      <motion.div
        className="bg-layer"
        style={{
          opacity: opacity6,
          scale: scale6,
          backgroundImage: `url('/assets/image/newH6.21e310ac.png')`,
          filter: "grayscale(1) brightness(0.5) contrast(1.4)",
          zIndex: 1,
        }}
      />
      <div className="overlay-vignette"></div>
    </div>
  );
};

const ScrollingWatermark = ({ isHidden }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-1.5%"]);

  if (isHidden) return null;

  return (
    <div className="watermark-container">
      <motion.div className="watermark-track" style={{ x }}>
        <span className="watermark-text">
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE AFTERIMAGE
          AFTERIMAGE AFTERIMAGE
        </span>
      </motion.div>
    </div>
  );
};

const SharedBackgroundVideo = ({ activeSection, isHidden }) => {
  const isVisible = (activeSection === "mission" || activeSection === "partner") && !isHidden;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="shared-bottom-video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video autoPlay loop muted playsInline className="shared-bg-video-el">
            <source src="/assets/image/section6vidoe.mp4" type="video/mp4" />
          </video>
          <div className="shared-video-overlay"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isNFTsPage = location.pathname === "/nfts";
  const hideDecorations = isNFTsPage;

  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openEventsView = () => {
    navigate("/events");
    window.scrollTo(0, 0);
  };

  const openDiscoverView = () => {
    navigate("/discover");
    window.scrollTo(0, 0);
  };

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isHomePage) return;
    if (latest < 0.10) {
      if (activeSection !== "hero") setActiveSection("hero");
    } else if (latest >= 0.10 && latest < 0.35) {
      if (activeSection !== "events") setActiveSection("events");
    } else if (latest >= 0.35 && latest < 0.53) {
      if (activeSection !== "curate") setActiveSection("curate");
    } else if (latest >= 0.53 && latest < 0.70) {
      if (activeSection !== "mission") setActiveSection("mission");
    } else if (latest >= 0.70 && latest < 0.80) {
      if (activeSection !== "partner") setActiveSection("partner");
    } else if (latest >= 0.80) {
      if (activeSection !== "faqs") setActiveSection("faqs");
    }
  });

  return (
    <div className="app-layout">
      <DynamicBackgrounds isHidden={hideDecorations} />
      <ScrollingWatermark isHidden={hideDecorations} />
      <SharedBackgroundVideo activeSection={activeSection} isHidden={hideDecorations} />

      {isHomePage && !isMenuOpen && (
        <SectionCounter activeSection={activeSection} />
      )}

      <Sidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onNavigate={scrollToSection}
        onEventsOpen={openEventsView}
        onDiscoverOpen={openDiscoverView}
        onNFTsOpen={() => {
          navigate("/nfts");
          window.scrollTo(0, 0);
        }}
      />

      <Logo isHidden={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nfts" element={<NFTS />} />
        <Route
          path="/events"
          element={
            <FullEventsView
              onClose={() => navigate("/")}
              ContactFaqsSection={ContactFaqsSection}
              FooterMarquee={FooterMarquee}
            />
          }
        />
        <Route
          path="/discover"
          element={
            <FullDiscoverView
              onClose={() => navigate("/")}
              ContactFaqsSection={ContactFaqsSection}
              FooterMarquee={FooterMarquee}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
