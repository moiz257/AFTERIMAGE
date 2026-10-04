import React from "react";
import { motion } from "framer-motion";
import "../styles/nfts.css";

const XIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
    </svg>
);

const InstagramIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const NFTS = () => {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        const fetchEvents = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await fetch(`${apiUrl}/api/event?t=${Date.now()}`);
                const data = await response.json();
                if (data.success) {
                    console.log("Fetched Events:", data.data); // Debugging
                    setEvents(data.data);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="nfts-page">
            <header className="nfts-header">
                <div className="nfts-logo">
                    AFTERIMAGE
                </div>
                <div className="header-right">
                    <div className="social-links">
                        <a href="https://x.com/afterimage_art" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><XIcon size={20} /></a>
                        <a href="https://instagram.com/afterimage.art" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={20} /></a>
                    </div>
                    <button className="verify-btn">Verify Ownership</button>
                </div>
            </header>

            <main className="nfts-hero">
                <motion.div
                    className="hero-content"
                    initial="initial"
                    animate="animate"
                    variants={{
                        initial: { opacity: 0 },
                        animate: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.div
                        className="badge-hedera"
                        variants={{
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        <span className="dot-orange"></span>
                        Powered by Hedera Hashgraph
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        variants={{
                            initial: { opacity: 0, y: 40 },
                            animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        Afterimage
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        variants={{
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        A disruptive live-entertainment platform delivering premium experiences.
                    </motion.p>

                    <motion.p
                        className="hero-description"
                        variants={{
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        The Afterimage Treasury (AFT) establishes a strategic crypto reserve for the platform,
                        utilizing Hedera Hashgraph — the Layer 1 in which we trust — for our future ambitions.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        variants={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        <button className="btn-primary" onClick={() => {
                            const el = document.querySelector('.events-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}>View Events</button>
                        <button className="btn-outline">Explore NFTs</button>
                    </motion.div>
                </motion.div>
            </main>

            <section className="nfts-info-section">
                <div className="section-circle"></div>
                <div className="section-container info-container-premium">
                    <div className="section-header">
                        <h2 className="section-number-title">01 // ABOUT AFT NFTS</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="info-cards-grid">
                        {[
                            { num: "01", text: "The Afterimage Treasury (AFT) establishes a strategic crypto reserve for the platform." },
                            { num: "02", text: "AFT NFTs are limited digital assets that provide exclusive access and long-term benefits within the Afterimage ecosystem." },
                            { num: "03", text: "Only 100 AFT holders will exist." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                className="info-card"
                                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.9,
                                    delay: i * 0.15,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <span className="card-bg-number">{card.num}</span>
                                <p>{card.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="section-container">
                    <div className="section-header">
                        <h2 className="section-number-title">02 // HOLDER BENEFITS</h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className="benefits-cards-grid">
                        {[
                            { id: "I", title: "Access to Events (2027–2034)", content: <p>100 AFT holders will enjoy access to all Afterimage events from 2027 through 2034, with a minimum of 4 events held annually.</p> },
                            {
                                id: "II", title: "Global Expansion", content: (
                                    <>
                                        <p className="list-intro">Events will take place across:</p>
                                        <ul className="benefit-list">
                                            <li><span></span> Europe from 2027</li>
                                            <li><span></span> North & South America from 2029</li>
                                            <li><span></span> Globally from 2032</li>
                                        </ul>
                                    </>
                                )
                            },
                            { id: "III", title: "Early Access Perks (2026 Events)", content: <p>NFTs minted before June 1st will include complimentary access to 2026 events in Athens and London.</p> }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                className="benefit-card"
                                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.15,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <div className="benefit-icon-badge">{benefit.id}</div>
                                <h3>{benefit.title}</h3>
                                {benefit.content}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="nfts-feature-section">
                <div className="feature-container">
                    <header className="feature-header">
                        <h2>WHAT ARE <span className="text-orange">AFT NFTS?</span></h2>
                        <p>Afterimage Treasury. A strategic crypto reserve, limited to just 100 highly-coveted pieces built on the Hedera network.</p>
                    </header>

                    <div className="feature-content">
                        <motion.div
                            className="feature-image-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <img src="/assets/image/Background+Border.png" alt="Afterimage Treasury" className="feature-main-image" />
                        </motion.div>

                        <div className="feature-cards">
                            {[
                                { icon: <path d="M2 9V5.25A2.25 2.25 0 0 1 4.25 3H19.75A2.25 2.25 0 0 1 22 5.25V9" />, title: "Full Event Access (2027–2034)", desc: "Guaranteed access to all Afterimage events with a minimum of 4 premium events per year." },
                                { icon: <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />, title: "Early Access (2026 Events)", desc: "Athens & London events included exclusively for NFTs minted before June 1st." },
                                { icon: <circle cx="12" cy="12" r="10" />, title: "Global Expansion", desc: "Watch the ecosystem grow: Europe (2027), Americas (2029), and Worldwide (2032)." }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    className="feature-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.4 + (i * 0.15),
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    <div className="card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c6ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {i === 0 ? (
                                                <>
                                                    <path d="M2 9V5.25A2.25 2.25 0 0 1 4.25 3H19.75A2.25 2.25 0 0 1 22 5.25V9" />
                                                    <path d="M22 15v3.75A2.25 2.25 0 0 1 19.75 21H4.25A2.25 2.25 0 0 1 2 18.75V15" />
                                                    <path d="M10 3v18" />
                                                    <path d="M14 3v18" />
                                                    <rect x="2" y="9" width="20" height="6" rx="2" />
                                                </>
                                            ) : (i === 1 ? (
                                                <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                                            ) : (
                                                <>
                                                    <circle cx="12" cy="12" r="10" />
                                                    <line x1="2" y1="12" x2="22" y2="12" />
                                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                </>
                                            ))}
                                        </svg>
                                    </div>
                                    <div className="card-info">
                                        <h3>{card.title}</h3>
                                        <p>{card.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="events-section">
                <div className="events-container">
                    <div className="events-ghost-text">EVENTS</div>
                    <header className="events-header-top">
                        <motion.h2
                            className="events-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            EVENTS
                            {/* <span style={{ fontSize: '20px', verticalAlign: 'middle', opacity: 0.5 }}>({events.length})</span> */}
                        </motion.h2>
                        <motion.div
                            className="events-divider"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        ></motion.div>
                    </header>

                    <motion.div
                        className="events-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {events.length > 0 ? events.map((event, index) => (
                            <motion.div
                                key={event._id}
                                className="event-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="event-image-container">
                                    <img
                                        src={event.image?.startsWith('http') ? event.image : `${process.env.REACT_APP_IMAGE_BASE_URL}${event.image}`}
                                        alt={event.name}
                                        onError={(e) => {
                                            e.target.src = "/assets/image/L1.5fe416cc.png";
                                        }}
                                    />
                                    <div className="event-overlay"></div>
                                    <div className="event-badge-top-left">{event.status || 'COMING SOON'}</div>
                                    <div className="event-badge-top-right">AFTERIMAGE</div>
                                    <div className="event-content">
                                        <p className="event-category">{event.description?.substring(0, 60).toUpperCase()}</p>
                                        <h3 className="event-name">{event.name}</h3>
                                    </div>
                                </div>
                                <div className="event-footer">
                                    <div className="event-loc-date">
                                        <p className="event-location">{event.location}</p>
                                        <p className="event-date">
                                            {new Date(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                        </p>
                                    </div>
                                    <div className="event-badge-bottom">{event.name.split(' ').pop().toUpperCase()}</div>
                                </div>
                            </motion.div>
                        )) : (
                            <div className="no-events-nfts">Loading events...</div>
                        )}
                    </motion.div>


                    <motion.div
                        className="events-actions"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <button className="view-all-btn">View All Events</button>
                    </motion.div>
                </div>
            </section>
            <section className="experience-section">

                <div className="experience-container">
                    <motion.div
                        className="experience-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="experience-title"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Experience the Exclusive
                        </motion.h2>
                        <motion.p
                            className="experience-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Be part of the revolution in live entertainment.
                        </motion.p>

                        <motion.button
                            className="view-events-btn-white"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            View Events
                        </motion.button>

                        <motion.p
                            className="announcement-text"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            ARTISTS TO BE ANNOUNCED MAY 11, 2026
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <footer className="nfts-footer">
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <h2 className="footer-logo">AFTERIMAGE</h2>
                            <p className="footer-tagline">Premium Web3 Live Entertainment</p>
                        </div>
                        <div className="footer-socials">
                           <a href="https://x.com/afterimage_art" target="_blank" rel="noopener noreferrer" className="social-icon-circle"><XIcon size={18} /></a>
                            <a href="https://instagram.com/afterimage.art" target="_blank" rel="noopener noreferrer" className="social-icon-circle"><InstagramIcon size={18} /></a>
                            <a href="#" className="social-icon-circle">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H13v-4h3.5v4zM8 16V8h2v8H8zm5-6h3.5v2H13v-2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <p className="copyright">© 2026 Afterimage. All rights reserved.</p>
                        <div className="built-on">
                            <span>Built on</span>
                            <span className="hedera-text">Hedera</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Decorative background elements */}
            <div className="bg-face-overlay-main"></div>
            <div className="bg-circle"></div>
        </div>
    );
};

export default NFTS;
