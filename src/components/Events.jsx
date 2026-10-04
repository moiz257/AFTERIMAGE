import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import "../styles/events.css";

export const EventsSection = ({ id }) => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/api/event?t=${Date.now()}`);
        const data = await response.json();
        if (data.success) {
          setEvents(data.data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section id={id} className="events-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="sub-title">EXPERIENCES</span>
          <h2>LATEST EVENTS</h2>
        </motion.div>

        <div className="events-grid">
          {events.length > 0 ? events.map((event, index) => (
            <motion.div
              key={event._id}
              className="event-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="event-img-wrap">
                <div className="event-status-badge">{event.status || 'COMING SOON'}</div>
                <div className="event-brand-label">AFTERIMAGE</div>
                <img
                  src={event.image?.startsWith('http') ? event.image : `${process.env.REACT_APP_IMAGE_BASE_URL}${event.image}`}
                  alt={event.name}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1492684223066-81342f30?auto=format&fit=crop&q=80";
                  }}
                />
              </div>
              <div className="event-info">
                <span className="event-desc-short">{event.description?.substring(0, 60).toUpperCase()}</span>
                <h3>{event.name}</h3>

                <div className="event-footer-info">
                  <div className="event-loc-date">
                    <span className="loc">{event.location}</span>
                    <span className="date">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="event-tag-btn">
                    {event.name.split(' ').pop().toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          )) : (
            <div className="no-events">Loading events...</div>
          )}
        </div>
      </div>
    </section>
  );
};


export const FullEventsView = ({ ContactFaqsSection, FooterMarquee }) => {
  const [isHoveringEvent, setIsHoveringEvent] = React.useState(false);
  const [showEventDetail, setShowEventDetail] = React.useState(false);
  const [isWaitlistActive, setIsWaitlistActive] = React.useState(false);
  const [isWaitlistSuccess, setIsWaitlistSuccess] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  // New states for API integration
  const [events, setEvents] = React.useState([]);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/api/event?t=${Date.now()}`);
        const data = await response.json();
        if (data.success) {
          setEvents(data.data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleWaitlistSubmit = () => {
    if (!emailValue.trim()) {
      setEmailError("*Required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError("*Please enter a valid email");
      return;
    }
    // Success: show success msg
    setIsWaitlistSuccess(true);
    setEmailValue("");
    setEmailError("");

    // Auto-return to first UI after 2 seconds
    setTimeout(() => {
      setIsWaitlistSuccess(false);
      setIsWaitlistActive(false);
    }, 2000);
  };

  const closeEventModal = () => {
    setShowEventDetail(false);
    setSelectedEvent(null);
    setIsWaitlistActive(false);
    setIsWaitlistSuccess(false);
    setEmailValue("");
    setEmailError("");
  };

  const openEventDetail = (event) => {
    setSelectedEvent(event);
    setShowEventDetail(true);
  };

  return (
    <motion.div
      className="full-events-overlay-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="events-view-scroll-container">
        {/* Preload Flyer Image - DISABLED */}
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/clubculture-3129b.appspot.com/o/CCFlyerSmall.png?alt=media&token=2e4a6d5b-fbbf-49fc-95ff-ed01d5112d2f"
          alt="preload"
          style={{ display: 'none' }}
        /> */}
        <div className="events-view-hero">
          <div className="events-view-bg">
            <div className="overlay-vignette-dark"></div>
          </div>

          {/* Background Watermark Layer */}
          <div className="ev-view-watermark-wrap">
            <div className="ev-view-watermark-text">EVENTS</div>
          </div>

          <div className="ev-view-main-content-wrap">
            {/* Unified Content with Vertical Border-Left */}
            <div className="ev-view-content-box-dynamic">
              <div className="ev-view-header-col">
                <motion.div
                  className="ev-view-orange-title"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  EVENTS
                </motion.div>

                <div className="ev-view-content-lower">
                  <motion.div
                    className="ev-view-brewing-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    BREWING...
                  </motion.div>

                  {/* Dynamically render events from API */}
                  {events.length > 0 ? events.map((event, index) => (
                    <motion.div
                      key={event._id}
                      className="ev-view-event-link-group"
                      onMouseEnter={() => setIsHoveringEvent(true)}
                      onMouseLeave={() => setIsHoveringEvent(false)}
                      onClick={() => openEventDetail(event)}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                      style={{ marginBottom: '20px' }}
                    >
                      <span className="ev-view-event-name">{event.name}</span>
                      <div className="ev-view-arrow-wrap">
                        <svg width="40" height="15" viewBox="0 0 40 15" fill="none" className="ev-view-orange-arrow">
                          <path d="M0 7.5H38M38 7.5L31.5 1M38 7.5L31.5 14" stroke="#C6FF00" strokeWidth="2" />
                        </svg>
                      </div>
                    </motion.div>
                  )) : (
                    <motion.div
                      className="ev-view-event-link-group disabled"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                    >
                      <span className="ev-view-event-name">NO EVENTS PLANNED YET</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Flyer reveal centered on text - DISABLED */}
            {/* <AnimatePresence>
              {isHoveringEvent && !showEventDetail && (
                <motion.div
                  key="event-flyer"
                  className="ev-view-centered-flyer-wrap"
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)", x: "-50%", y: "-50%" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: "-50%", y: "-50%" }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(20px)", x: "-50%", y: "-50%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/clubculture-3129b.appspot.com/o/CCFlyerSmall.png?alt=media&token=2e4a6d5b-fbbf-49fc-95ff-ed01d5112d2f"
                    alt="CC Flyer"
                  />
                </motion.div>
              )}
            </AnimatePresence> */}

            {/* Event Detail Modal */}
            <AnimatePresence>
              {showEventDetail && selectedEvent && (
                <motion.div
                  className="ev-modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeEventModal}
                >
                  <div className="modal-scroll-wrap">
                    <motion.div
                      className="ev-detail-card-container"
                      initial={{ opacity: 0, rotateY: -70, x: 500, scale: 0.8, z: -200 }}
                      animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1, z: 0 }}
                      exit={{ opacity: 0, rotateY: 70, x: -500, scale: 0.8, z: -200 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="ev-modal-close" onClick={closeEventModal}>
                        <X size={32} />
                      </button>

                      <div className="ev-card-inner">
                        <motion.div
                          className="ev-card-bg"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: (isWaitlistActive || isWaitlistSuccess) ? 0 : 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <img
                            src={
                              selectedEvent?.image?.startsWith('http')
                                ? selectedEvent.image
                                : `${process.env.REACT_APP_IMAGE_BASE_URL}${selectedEvent?.image}`
                            }

                            alt={selectedEvent?.name}
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1492684223066-81342f30dfd6?auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                        </motion.div>

                        <div className="ev-card-content-wrap">
                          <AnimatePresence mode="wait">
                            {isWaitlistSuccess ? (
                              <motion.div
                                key="success"
                                className="ev-success-view"
                                initial={{ opacity: 0, scale: 0.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.5 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <h1 className="ev-card-title success-msg">YOU'VE BEEN ADDED.</h1>
                              </motion.div>
                            ) : !isWaitlistActive ? (
                              <motion.div
                                key="details"
                                className="ev-card-main"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.6 }}
                              >
                                <div className="ev-card-top-accent" />
                                <h1 className="ev-card-title uppercase">{selectedEvent.name}</h1>
                                <div className="ev-card-desc">
                                  <p className="ev-card-description">
                                    {selectedEvent.description}
                                  </p>

                                  {selectedEvent?.externalLink && (
                                    <button
                                      onClick={() => window.open(selectedEvent.externalLink, "_blank")}
                                      className="ev-view-btn"
                                    >
                                      <div className="navLink navButtons-wrap" data-before="VIEW">
                                        <h5 className="navButtons view-btn">VIEW</h5>
                                      </div>
                                      <div className="ev-btn-arrow-wrap">
                                        <svg width="40" height="15" viewBox="0 0 40 15" fill="none" className="waitlist-arrow">
                                          <path d="M0 7.5H38M38 7.5L31.5 1M38 7.5L31.5 14" stroke="#C6FF00" strokeWidth="2" />
                                        </svg>
                                      </div>
                                      <div className="ev-btn-hover-line" />
                                    </button>
                                  )}
                                </div>


                                <div className="ev-card-details-row">
                                  <div className="ev-card-meta">
                                    <div className="meta-item">
                                      <span className="meta-label">DATE:</span>
                                      <span className="meta-value">
                                        {new Date(selectedEvent.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                      </span>
                                    </div>
                                    <div className="meta-item">
                                      <span className="meta-label">PRICE:</span>
                                      <span className="meta-value">£{selectedEvent.price}</span>
                                    </div>
                                  </div>

                                  <button className="ev-waitlist-btn" onClick={() => { setIsWaitlistActive(true); setEmailError(""); }}>
                                    <div className="navLink navButtons-wrap" data-before="JOIN WAITING LIST">
                                      <h5 className="navButtons">JOIN WAITING LIST</h5>
                                    </div>
                                    <div className="ev-btn-arrow-wrap">
                                      <svg width="40" height="15" viewBox="0 0 40 15" fill="none" className="waitlist-arrow">
                                        <path d="M0 7.5H38M38 7.5L31.5 1M38 7.5L31.5 14" stroke="#C6FF00" strokeWidth="2" />
                                      </svg>
                                    </div>
                                    <div className="ev-btn-hover-line" />
                                  </button>
                                </div>
                                <div className="ev-card-bottom-accent" />
                              </motion.div>
                            ) : (
                              <motion.div
                                key="waitlist"
                                className="ev-waitlist-form-wrap"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6 }}
                              >
                                <div className="ev-card-top-accent" />
                                <h1 className="ev-card-title uppercase">{selectedEvent.name}</h1>
                                <div className="ev-waitlist-content-inner">
                                  <p className="ev-waitlist-sub">
                                    You'll be the first to get notified when this event goes live.
                                  </p>

                                  <div className="ev-waitlist-field">
                                    <label className="text-orange">
                                      EMAIL<span className="ev-label-colon">:</span>
                                      {emailError && <span className="ev-error-msg">{emailError}</span>}
                                    </label>
                                    <input
                                      type="email"
                                      placeholder=""
                                      value={emailValue}
                                      onChange={(e) => {
                                        setEmailValue(e.target.value);
                                        if (emailError) setEmailError("");
                                      }}
                                    />
                                    <div className="field-line" />
                                  </div>

                                  <div className="ev-waitlist-footer">
                                    <button className="ev-waitlist-submit" onClick={handleWaitlistSubmit}>
                                      <svg width="60" height="22" viewBox="0 0 60 22" fill="none" className="waitlist-arrow">
                                        <path d="M0 11H58M58 11L48 1M58 11L48 21" stroke="#C6FF00" strokeWidth="2" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                <div className="ev-card-bottom-accent" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>

                    <div className="modal-footer-section">
                      {ContactFaqsSection && <ContactFaqsSection />}
                      {FooterMarquee && <FooterMarquee />}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="ev-view-center-line-accent" />
        </div>

        <div className="events-view-footer-wrap">
          <ContactFaqsSection id="events-footer-contact" />
          <FooterMarquee />
        </div>
      </div>
    </motion.div>
  );
};
