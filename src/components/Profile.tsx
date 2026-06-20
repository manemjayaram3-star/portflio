import "./styles/Profile.css";

const photos = [
  {
    src: "/images/profile/profile3.png",
    alt: "Manem Jayaram - Developer",
    label: "Full-Stack Developer",
    className: "photo-main",
    icon: "💻",
  },
  {
    src: "/images/profile/profile2.png",
    alt: "Manem Jayaram - Coding",
    label: "Building Products",
    className: "photo-secondary",
    icon: "⚡",
  },
  {
    src: "/images/profile/profile1.png",
    alt: "Manem Jayaram - Developer Mode",
    label: "Developer Mode ON",
    className: "photo-collage",
    icon: "🚀",
  },
];

const Profile = () => {
  return (
    <div className="profile-section section-container" id="profile">
      <div className="profile-inner">
        {/* ── LEFT ── */}
        <div className="profile-left">
          <p className="profile-tag">// who am i</p>
          <h2 className="profile-heading">
            The <span>Developer</span>
            <br /> Behind The Code
          </h2>
          <p className="profile-bio">
            Hey! I'm <strong>Manem Jayaram</strong> — a Full-Stack Developer
            with 4+ years of building real products people use every day. From
            mobile apps to AI-powered platforms, I turn complex problems into
            clean, scalable solutions.
          </p>

          <div className="profile-stats">
            <div className="stat-box">
              <h3>4+</h3>
              <p>Years Exp</p>
            </div>
            <div className="stat-box">
              <h3>40+</h3>
              <p>Apps Delivered</p>
            </div>
            <div className="stat-box">
              <h3>3</h3>
              <p>Companies</p>
            </div>
          </div>

          <div className="profile-skills-row">
            {[
              "Flutter",
              "React.js",
              "Django",
              "AI/ML",
              "PostgreSQL",
              "FastAPI",
            ].map((skill) => (
              <span key={skill} className="profile-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT — PHOTO GRID ── */}
        <div className="profile-right">
          <div className="photo-grid">
            {photos.map((photo) => (
              <div key={photo.src} className={`photo-card ${photo.className}`}>
                {/* Always-visible gradient placeholder behind the image */}
                <div className="photo-fallback">
                  <span className="photo-fallback-icon">{photo.icon}</span>
                  <span className="photo-fallback-text">{photo.label}</span>
                </div>
                {/* Real image sits on top of the placeholder */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="photo-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="photo-glow" />
                <div className="photo-label">
                  <span>{photo.label}</span>
                </div>
              </div>
            ))}

            {/* Floating animated tags */}
            <div className="floating-tag tag-1">🚀 40+ Live Apps</div>
            <div className="floating-tag tag-2">🤖 AI / ML Expert</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
