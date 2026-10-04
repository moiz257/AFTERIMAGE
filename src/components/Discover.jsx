import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { X } from "lucide-react";
import "../styles/discover.css";

export const FullDiscoverView = ({ ContactFaqsSection, FooterMarquee }) => {
  const [activeCategory, setActiveCategory] = React.useState("ALL");
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const categories = ["ALL", "MUSIC", "FILM", "THEATRE", "DANCE", "INTERVIEWS"];
  const discoverItems = [
    // {
    //   type: "THEATRE",
    //   title: "Macbeth: Beirut",
    //   image:
    //     "https://firebasestorage.googleapis.com/v0/b/clubculture-3129b.appspot.com/o/THUMBNAILS%2FMACBETH_BEIRUT_THUMB.png?alt=media&token=6f496ffc-08bb-4c1e-9dc2-c40e327d0ee7",
    //   description:
    //     "In memory of the lives lost in the tragic disaster in Beirut, Lebanon, on August 4th 2020; Guerrilla...",
    //   videoId: "4o9iUPb1uLg",
    // },
    // {
    //   type: "INTERVIEWS",
    //   title: "Katja Larsson",
    //   image:
    //     "https://firebasestorage.googleapis.com/v0/b/clubculture-3129b.appspot.com/o/THUMBNAILS%2FKATJA_INTERVIEW_THUMB.png?alt=media&token=06d6a226-df49-4bc6-bc25-bf1d5e1bee41",
    //   description:
    //     "A series of Visual Art featuring Katja Larsson. Katja is a Swedish artist based in London. Her know as...",
    //   videoId: "4o9iUPb1uLg",
    // },
    // {
    //   type: "MUSIC",
    //   title: "Carnal Hell",
    //   image:
    //     "https://images.unsplash.com/photo-1514525253361-bee8d4a7c06b?auto=format&fit=crop&q=80&w=800",
    //   description:
    //     "During the unique global standstill we explore Roxana & Jorma...",
    //   videoId: "4o9iUPb1uLg",
    // },
    // {
    //   type: "THEATRE",
    //   title: "The Silent Artist",
    //   image:
    //     "https://images.unsplash.com/photo-1460391764214-0d456916501a?auto=format&fit=crop&q=80&w=800",
    //   description:
    //     "A deep dive into the world of silent performance and visual storytelling.",
    //   videoId: "4o9iUPb1uLg",
    // },
    // {
    //   type: "MUSIC",
    //   title: "Moonlight Sonata",
    //   image:
    //     "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    //   description:
    //     "An ethereal reimagining of classic sounds in a modern underground setting.",
    //   videoId: "4o9iUPb1uLg",
    // },
    // {
    //   type: "DANCE",
    //   title: "Ethereal Moves",
    //   image:
    //     "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    //   description:
    //     "Choreography that transcends physical boundaries, celebrating rhythm and life.",
    //   videoId: "4o9iUPb1uLg",
    // },
    // {
    //   type: "FILM",
    //   title: "Beirut Memoirs",
    //   image:
    //     "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    //   description:
    //     "A cinematic journey through the heart of the city's artistic resilience.",
    //   videoId: "4o9iUPb1uLg",
    // },
    // {
    //   type: "DANCE",
    //   title: "Rhythm of Life",
    //   image:
    //     "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80&w=800",
    //   description:
    //     "Exploring the visceral connection between human movement and urban energy.",
    //   videoId: "4o9iUPb1uLg",
    // },
  ];

  const filteredItems =
    activeCategory === "ALL"
      ? discoverItems
      : discoverItems.filter((item) => item.type === activeCategory);

  return (
    <motion.div
      className="full-discover-overlay-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="discover-view-scroll-container">
        <div className="discover-hero-section">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="discover-hero-video"
            id="discover-main-video"
          >
            <source src="/assets/image/BTEASER.6b07f0fb.mp4" type="video/mp4" />
          </video>
          <div className="discover-video-overlay" />
        </div>

        <div className="discover-content-container">
          <h1 className="discover-hero-title">DISCOVER</h1>
          <div className="discover-background-watermark">DISCOVER</div>

          <div className="discover-main-grid">
            {/* Sidebar */}
            <aside className="discover-sidebar">
              <nav className="discover-nav">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className={`discover-nav-item ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    <div className="nav-item-text-wrap" data-before={cat}>
                      <span>{cat}</span>
                    </div>
                    <div className="nav-underline"></div>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content Grid */}
            <div className="discover-items-scroll">
              <div className="discover-items-row">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item, idx) => (
                    <motion.div
                      key={`${item.title}-${idx}`}
                      className="discover-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      layout
                      onClick={() => setSelectedVideo(item.videoId)}
                    >
                      <div className="discover-card-img-wrap">
                        <img src={item.image} alt={item.title} />
                        <div className="discover-card-play">
                          <svg
                            viewBox="0 0 24 24"
                            width="45"
                            height="45"
                            fill="none"
                            stroke="white"
                            strokeWidth="1"
                          >
                            <path d="M8 5v14l11-7z" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="discover-card-info">
                        <div className="discover-card-meta">
                          <span className="discover-card-type">
                            {item.type}
                          </span>
                          <span className="discover-card-sep"> - </span>
                          <span className="discover-card-title">
                            {item.title}
                          </span>
                        </div>
                        <div className="discover-card-divider"></div>
                        <p className="discover-card-desc">{item.description}</p>
                        <button className="discover-card-more">
                          Show More
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal Overlay */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              className="video-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
            >
              <div className="modal-scroll-wrap">
                <motion.div
                  className="video-modal-content"
                  initial={{
                    opacity: 0,
                    rotateY: -70,
                    x: 500,
                    scale: 0.8,
                    z: -200,
                  }}
                  animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1, z: 0 }}
                  exit={{
                    opacity: 0,
                    rotateY: 70,
                    x: -500,
                    scale: 0.8,
                    z: -200,
                  }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="video-modal-close"
                    onClick={() => setSelectedVideo(null)}
                  >
                    <span className="close-text">Close</span>
                    <X size={26} strokeWidth={1.5} />
                  </button>
                  <div className="video-responsive-wrap">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>

                {/* Footer also visible inside modal scroll */}
                <div className="discover-footer-section">
                  {ContactFaqsSection && <ContactFaqsSection />}
                  {FooterMarquee && <FooterMarquee />}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="discover-footer-section">
          {ContactFaqsSection && <ContactFaqsSection />}
          {FooterMarquee && <FooterMarquee />}
        </div>
      </div>
    </motion.div>
  );
};

// Provide backward-compatible named export if other files import `MissionSection`
export { FullDiscoverView as MissionSection };
