export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "B.Pharm", href: "#research" },
  { label: "AI", href: "#ai" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
] as const;

export const TIMELINE_ITEMS = [
  { year: "4th Std", title: "Discipline Leader", desc: "First leadership role — maintaining order and setting an example for peers.", category: "leadership" },
  { year: "9th Std", title: "Discipline Secretary", desc: "Elevated to a formal student leadership position with broader responsibilities.", category: "leadership" },
  { year: "12th Std", title: "Co-founded Hijab Couture", desc: "Launched a startup with a partner — learned business from the ground up.", category: "entrepreneurship" },
  { year: "6 Months", title: "Affiliate Marketing", desc: "Explored digital marketing, product promotion, and online business models.", category: "entrepreneurship" },
  { year: "Lions Club", title: "Vice President", desc: "Led event planning, team coordination, and project execution.", category: "leadership" },
  { year: "Lions Club", title: "President", desc: "Headed the entire club — decision-making, delegation, and strategic leadership.", category: "leadership" },
  { year: "Sem II", title: "Class Representative", desc: "Elected CR at H.K. College of Pharmacy — academic coordination and student liaison.", category: "leadership" },
  { year: "Sem III", title: "Class Representative", desc: "Continued leading the class through submissions, deadlines, and faculty coordination.", category: "leadership" },
  { year: "Sem IV", title: "Class Representative", desc: "Sustained leadership — organizing activities and handling student concerns.", category: "leadership" },
  { year: "Sem V", title: "Class Representative (Current)", desc: "Ongoing CR role with deepened responsibility and trust.", category: "leadership" },
  { year: "College", title: "Culture Committee Member", desc: "Cultural event planning, creative coordination, and student engagement.", category: "leadership" },
  { year: "College", title: "DLLE Member", desc: "Community engagement, social initiatives, and institutional activities.", category: "leadership" },
  { year: "Academic", title: "Participated in Avishkar", desc: "Gained exposure to research methodology, literature exploration, project planning, and scientific thinking.", category: "research" },
  { year: "Academic", title: "Scientific Review Article", desc: "Literature analysis, scientific writing, referencing, and systematic presentation.", category: "research" },
  { year: "Work", title: "CA Assistant", desc: "TDS filing, ITR, banking management, documentation, and financial administration.", category: "business" },
  { year: "Current", title: "Bellapaso — Executive Manager", desc: "Managing a women's footwear brand — business operations, marketing, and digital strategy.", category: "business" },
  { year: "AI", title: "AI & Prompt Engineering", desc: "Creating detailed prompts, AI-assisted research, design, and problem-solving.", category: "ai" },
  { year: "AI", title: "Vibe Coding & Landing Pages", desc: "Transforming ideas into digital experiences through AI-assisted development.", category: "ai" },
  { year: "Learning", title: "Currently Learning Python", desc: "Building programming foundations to combine with AI, research, and automation.", category: "ai" },
] as const;

export const SKILL_CATEGORIES = [
  {
    title: "AI & Prompt Engineering",
    icon: "⚡",
    skills: ["Prompt Engineering", "AI-assisted Problem Solving", "AI Research", "AI Workflows", "AI-assisted Content & Design"],
  },
  {
    title: "Vibe Coding",
    icon: "🔮",
    skills: ["AI-assisted Coding", "Landing Page Development", "Website Development", "UI/UX Planning", "Digital Product Development"],
  },
  {
    title: "Leadership",
    icon: "🎯",
    skills: ["Team Leadership", "Planning & Execution", "Delegation", "Coordination", "Decision-making", "Event Management"],
  },
  {
    title: "Entrepreneurship",
    icon: "🚀",
    skills: ["Startup Management", "Business Development", "Marketing & Sales", "Customer Handling", "Brand Building", "Business Operations"],
  },
  {
    title: "Research",
    icon: "🔬",
    skills: ["Research Methodology", "Literature Review", "Scientific Writing", "Review Article Preparation", "Research Presentation", "Innovation"],
  },
  {
    title: "Marketing",
    icon: "📈",
    skills: ["Digital Marketing", "Social Media", "Brand Positioning", "Product Promotion", "Content Strategy", "Customer Acquisition"],
  },
  {
    title: "Tools",
    icon: "🛠",
    skills: ["Canva", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
  {
    title: "Currently Learning",
    icon: "📚",
    skills: ["Python"],
  },
] as const;

export const STRENGTHS = [
  { title: "Leadership", desc: "Naturally takes initiative and enjoys taking responsibility for teams, projects, and execution.", icon: "👑" },
  { title: "Execution", desc: "Focuses not only on generating ideas but on turning ideas into tangible outcomes.", icon: "⚡" },
  { title: "AI & Technology", desc: "Actively uses AI to research, design, develop, solve problems, and transform concepts into practical outputs.", icon: "🤖" },
  { title: "Entrepreneurship", desc: "Startup and business experience has developed an understanding of customers, products, marketing, operations, and growth.", icon: "🚀" },
  { title: "Research", desc: "Pharmacy background, Avishkar experience, and review article have developed an interest in scientific research and innovation.", icon: "🔬" },
  { title: "Adaptability", desc: "Experience across Pharmacy, Research, Entrepreneurship, Marketing, Leadership, Business Management, AI, and Technology.", icon: "🔄" },
  { title: "Problem Solving", desc: "Enjoys identifying a problem, understanding its requirements, developing a solution, and executing it.", icon: "💡" },
] as const;
