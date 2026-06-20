import "./styles/TechStack.css";

const row1 = [
  { name: "React.js", icon: "⚛️" },
  { name: "Flutter", icon: "📱" },
  { name: "Django", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Next.js", icon: "▲" },
  { name: "React Native", icon: "⚛️" },
  { name: "FastAPI", icon: "⚡" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TailwindCSS", icon: "🌊" },
  { name: "JavaScript", icon: "💛" },
];

const row2 = [
  { name: "PyTorch", icon: "🔥" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Deep Learning", icon: "🤖" },
  { name: "LLM Fine-tuning", icon: "📚" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "LangChain", icon: "🦜" },
  { name: "Hugging Face", icon: "🤗" },
  { name: "Computer Vision", icon: "👁️" },
  { name: "Git", icon: "🐙" },
  { name: "Firebase", icon: "🔥" },
  { name: "Nginx", icon: "⚙️" },
];

const TechStack = () => {
  return (
    <div className="techstack-section" id="techstack">
      <div className="techstack-header">
        <h2>
          My <span>Arsenal</span>
        </h2>
      </div>

      <div className="marquee-container">
        {/* Row 1 - Moves Left */}
        <div className="marquee-row marquee-left">
          {/* Render twice for seamless infinite loop */}
          {[...row1, ...row1].map((skill, index) => (
            <div className="skill-pill" key={`r1-${index}`}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Right */}
        <div className="marquee-row marquee-right">
          {/* Render twice for seamless infinite loop */}
          {[...row2, ...row2].map((skill, index) => (
            <div className="skill-pill" key={`r2-${index}`}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
