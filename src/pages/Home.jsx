import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { ContactFaqsSection, FooterMarquee } from "../layouts/footer";
// import { MissionSection } from "../components/Discover.jsx";
import "../styles/home.css";

const LongArrow = ({ className, size = 24 }) => (
  <svg
    width={size * 2}
    height={size}
    viewBox={`0 0 ${size * 2} ${size}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ transition: "transform 0.4s ease" }}
  >
    <line x1="0" y1={size / 2} x2={size * 2 - 4} y2={size / 2} />
    <polyline
      points={`${size * 2 - 10} ${size / 2 - 6} ${size * 2 - 4} ${size / 2} ${size * 2 - 10} ${size / 2 + 6}`}
    />
  </svg>
);

const EventsSection = ({ id }) => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.2, 0.25],
    [0, 1, 1, 0],
  );
  const display = useTransform(scrollYProgress, (v) =>
    v > 0.25 ? "none" : "flex",
  );
  const yBase = useTransform(smoothProgress, [0.05, 0.1], [60, 0]);

  const y1 = useTransform(
    smoothProgress,
    [0.05, 0.1, 0.2, 0.25],
    [-100, 0, 0, -100],
  );
  const x2 = useTransform(
    smoothProgress,
    [0.06, 0.11, 0.2, 0.25],
    [400, 0, 0, 400],
  );
  const y3 = useTransform(
    smoothProgress,
    [0.07, 0.12, 0.2, 0.25],
    [100, 0, 0, 100],
  );

  return (
    <section id={id} className="events-fixed-section">
      <motion.div
        className="events-content-fixed"
        style={{ opacity, y: yBase, display }}
      >
        <div className="events-header-staggered">
          <div style={{ overflow: "hidden", marginLeft: "120px" }}>
            <motion.div className="events-line e1" style={{ y: y1 }}>
              WE CREATE
            </motion.div>
          </div>
          <div style={{ overflow: "hidden", marginLeft: "310px" }}>
            <motion.div className="events-line e2" style={{ x: x2 }}>
              ONE OF A KIND
            </motion.div>
          </div>
          <div style={{ overflow: "hidden", marginLeft: "120px" }}>
            <motion.div className="events-line e3" style={{ y: y3 }}>
              <span className="text-orange">IMMERSIVE</span> EVENTS
            </motion.div>
          </div>
        </div>

        <div className="events-body-center">
          <div className="events-description">
          </div>

          <div className="curate-cta-container landing-cta">
            <Link to="/events" style={{ textDecoration: "none", color: "inherit" }}>
              <motion.div
                className="cta-link-curate"
                initial="initial"
                whileHover="hover"
              >
                <motion.div
                  className="cta-line-curate"
                  variants={{
                    initial: { width: 0, opacity: 0 },
                    hover: { width: 80, opacity: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="cta-text-wrapper">
                  <span>FIND AN EVENT</span>
                </div>
                <div className="cta-arrow-right">
                  <div className="arrow-line-short"></div>
                  <div className="arrow-head-short"></div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const HeroMain = ({ id }) => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y1 = useTransform(smoothProgress, [0, 0.015], [0, -40]);
  const x2 = useTransform(smoothProgress, [0, 0.015], [0, 400]);
  const y3 = useTransform(smoothProgress, [0, 0.015], [0, 40]);

  const opacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const display = useTransform(scrollYProgress, (v) =>
    v > 0.05 ? "none" : "flex",
  );
  const pointerEvents = useTransform(scrollYProgress, (v) =>
    v > 0.02 ? "none" : "auto",
  );

  return (
    <section id={id} className="hero-main">
      <motion.div
        className="hero-headline-group"
        style={{ opacity, display, pointerEvents }}
      >
        <motion.div className="hero-line hero-line-1" style={{ y: y1 }}>
          AFTERIMAGE
        </motion.div>
        <motion.div className="hero-line hero-line-2" style={{ x: x2 }}>
          IS A <span className="text-orange">UNIQUE</span>
        </motion.div>
        <motion.div className="hero-line hero-line-3" style={{ y: y3 }}>
          EXPERIENCE
        </motion.div>
      </motion.div>
    </section>
  );
};

const CurateSection = ({ id }) => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.45, 0.5],
    [0, 1, 1, 0],
  );
  const display = useTransform(scrollYProgress, (v) =>
    v < 0.25 || v > 0.5 ? "none" : "flex",
  );
  const yBase = useTransform(smoothProgress, [0.25, 0.3], [60, 0]);

  const y1 = useTransform(
    smoothProgress,
    [0.25, 0.3, 0.45, 0.5],
    [-100, 0, 0, -100],
  );
  const x2 = useTransform(
    smoothProgress,
    [0.26, 0.31, 0.45, 0.5],
    [400, 0, 0, 400],
  );
  const y3 = useTransform(
    smoothProgress,
    [0.27, 0.32, 0.45, 0.5],
    [100, 0, 0, 100],
  );

  return (
    <section id={id} className="curate-fixed-section">
      <motion.div
        className="curate-content-fixed"
        style={{ opacity, y: yBase, display }}
      >
        <div className="curate-header-staggered">
          <div style={{ overflow: "hidden" }}>
            <motion.div
              className="curate-line c1"
              style={{ y: y1, marginLeft: "120px" }}
            >
              AND CURATE
            </motion.div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              className="curate-line c2"
              style={{ x: x2, marginLeft: "410px" }}
            >
              EXCLUSIVE
            </motion.div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              className="curate-line c3"
              style={{ y: y3, marginLeft: "120px" }}
            >
              <span className="text-orange">ART</span> CONTENT
            </motion.div>
          </div>
        </div>

        <div className="curate-body-center">
          <div className="curate-description">
            <p>
              {/* Bringing a taste of the Afterimage experience in digital form,
              we create pieces that are written, directed and performed by an
              incredible array of talent. We're working on a digital collection
              of film, music, theatre and spotlight interviews that showcase the
              rich grassroots culture happening around us right now. */}
            </p>
          </div>

          {/* <div className="curate-cta-container">
            <motion.div
              className="cta-link-curate"
              initial="initial"
              whileHover="hover"
            >
              <motion.div
                className="cta-line-curate"
                variants={{
                  initial: { width: 0, opacity: 0 },
                  hover: { width: 80, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
              />
              <div className="cta-text-wrapper">
                <span>WATCH PERFORMANCES</span>
              </div>
              <div className="cta-arrow-right">
                <div className="arrow-line-short"></div>
                <div className="arrow-head-short"></div>
              </div>
            </motion.div>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};
export const MissionSection = ({ id }) => {
  return (
    <section id={id} className="mission-section">
      {/* Local video removed to show global bottom video from App.js */}

      <div className="mission-content">
        <div className="mission-left-col">
          <motion.div
            className="mission-headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mission-row-1">OUR MISSION</div>
            <div className="mission-row-2">
              IS TO <span className="text-orange">DEMOCRATISE</span>
            </div>
            <div className="mission-row-3">THE ART WORLD</div>
          </motion.div>

          <motion.div
            className="mission-description-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >

          </motion.div>
        </div>
      </div>

      <div className="mission-spinner-scene">
        <div className="planet-wrap">
          <div className="ring">
            {[
              {
                url: "/assets/image/DSC_5882-3 18-1.23d36e80.png",
                label: "Art",
              },
              {
                url: "/assets/image/DSC_5882-3 18.ac54106b.png",
                label: "Culture",
              },
              {
                url: "/assets/image/Screenshot 2021-05-03 at 11 1.d799934e.png",
                label: "Ritual",
              },
              {
                url: "/assets/image/L1220083 1 1.9c45b4b4.png",
                label: "Voices",
              },
              {
                url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
                label: "Emotion",
              },
              {
                url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
                label: "Vision",
              },
              {
                url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
                label: "Energy",
              },
              {
                url: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?auto=format&fit=crop&q=80&w=400",
                label: "Spirit",
              },
            ].map((img, i, arr) => {
              const count = arr.length;
              const angle = (360 / count) * i;
              const radius = 200;
              return (
                <div
                  key={i}
                  className="slot"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <div className="card">
                    <div className="frame">
                      <img src={img.url} alt={img.label} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
const PartnerSection = ({ id }) => {
  return (
    <section id={id} className="partner-section">
      <div className="partner-content">
        <div className="partner-header">
          <motion.h2
            className="partner-headline text-orange"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            PARTNER WITH US
          </motion.h2>

        </div>

        <motion.form
          className="partner-minimal-form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="minimal-field">
            <label className="text-orange">NAME</label>
            <input type="text" />
          </div>
          <div className="minimal-field">
            <label className="text-orange">EMAIL</label>
            <input type="email" />
          </div>
          <div className="minimal-field">
            <label className="text-orange">MESSAGE</label>
            <input type="text" />
          </div>
          <button type="submit" className="partner-submit-arrow">
            <ArrowRight size={30} className="text-orange" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const FaqsSection = () => {
  const [view, setView] = React.useState("grid");
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const faqData = {
    artists: [
      {
        q: "HOW CAN I PERFORM AT AN AFTERIMAGE EVENT?",
        a: "Afterimage programmes by invitation and through seasonal call-outs publicised on our website and across social media channels.",
      },
      {
        q: "WHAT'S YOUR SELECTION PROCESS?",
        a: "We review submissions based on artistic merit, socio-political themes and seasonal relevance.",
      },
      {
        q: "HOW DOES PAYMENT WORK?",
        a: "Artist rates are competitive and ensure fair compensation for all performers based on the scale of the show.",
      },
    ],
    patrons: [
      {
        q: "WHAT CAN I EXPECT AT AN AFTERIMAGE EVENT?",
        a: "Expect the unexpected. Every edition of Afterimage is different and is inspired by the ‘times’ we live in. Audiences and art lovers alike will get to enjoy an eclectic mix of artists performing across genres, delivering a unique experience that is visceral and mesmerising.",
      },
      {
        q: "ARE THERE AGE RESTRICTIONS FOR ATTENDEES?",
        a: "Check the specific event details for restrictions.\nEvening events are generally 18+. Events starting in the afternoon will always be family friendly with a cut off time later in the day. E.g. Our Club nights which follow the main event.",
      },
    ],
  };

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faqs-section">
      <AnimatePresence mode="wait">
        {view === "grid" ? (
          <motion.div
            key="grid"
            className="faqs-container"
            initial={{ opacity: 0, rotateY: 45, scale: 0.9, z: -200 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
            exit={{
              opacity: 0,
              rotateY: -45,
              scale: 0.9,
              z: -200,
              transition: { duration: 0.6 },
            }}
          >
            <motion.h2
              className="faqs-title text-orange"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              FAQS
            </motion.h2>

            <div className="faqs-grid">
              <motion.div
                className="faq-card artists-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                onClick={() => setView("artists")}
              >
                <div className="faq-img-wrapper">
                  <img
                    src="/assets/image/DSC_5882-3 18-1.23d36e80.png"
                    alt="Artists"
                  />
                </div>
                <h3 className="faq-card-title">ARTISTS</h3>
              </motion.div>

              <motion.div
                className="faq-card patrons-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                onClick={() => setView("patrons")}
              >
                <div className="faq-img-wrapper">
                  <img
                    src="/assets/image/DSC_5882-3 18.ac54106b.png"
                    alt="Patrons"
                  />
                </div>
                <h3 className="faq-card-title">PATRONS</h3>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            className="faq-detail-view"
            initial={{ opacity: 0, rotateY: -70, x: 500, scale: 0.8, z: -200 }}
            animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1, z: 0 }}
            exit={{ opacity: 0, rotateY: 70, x: -500, scale: 0.8, z: -200 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onWheel={(e) => {
              if (e.deltaY > 50) {
                setView("grid");
                setExpandedIndex(null);
              }
            }}
          >
            <div className="detail-content">
              <button
                className="faq-close-btn"
                onClick={() => {
                  setView("grid");
                  setExpandedIndex(null);
                }}
              >
                <X size={24} />
              </button>

              <div className="detail-header-wrap">
                <p className="detail-title text-orange">
                  {view === "artists" ? "ARTISTS" : "PATRONS"}
                </p>
              </div>

              <div className="faq-list">
                {faqData[view].map((item, index) => (
                  <div
                    key={index}
                    className={`faq-item ${expandedIndex === index ? "active" : ""}`}
                    onClick={() => handleToggle(index)}
                  >
                    <div className="faq-q-row">
                      <span className="faq-question">{item.q}</span>
                      <motion.span
                        animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          display: "inline-flex",
                          color: "var(--accent-color)",
                        }}
                      >
                        <LongArrow size={20} />
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="faq-answer-area"
                        >
                          <p className="faq-answer-text">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="faq-divider"></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  return (
    <main className="content-area">
      <HeroMain id="hero" />
      <EventsSection id="events" />
      <CurateSection id="curate" />
      <MissionSection id="mission" />
      <PartnerSection id="partner" />
      <section id="faqs">
        <FaqsSection />
        <ContactFaqsSection />
      </section>
      <FooterMarquee />
    </main>
  );
};

export default Home;
