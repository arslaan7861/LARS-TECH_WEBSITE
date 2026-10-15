// src/data/seed/jobs.ts

export interface SeedJob {
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
  isActive: boolean;
  postedAt: string;
}

export const seedJobs: SeedJob[] = [
  {
    title: "Senior Full Stack Developer",
    slug: "senior-full-stack-developer",
    department: "Engineering",
    location: "Najibabad, UP (Hybrid / On-site)",
    type: "Full-time",
    experience: "4-7 years",
    salary: "₹8,00,000 - ₹16,00,000 / year",
    description:
      "We are looking for a Senior Full Stack Developer to lead development on scalable enterprise applications, client portals, and cloud integrations. You will architect robust microservices, collaborate directly with product leadership, and mentor engineering talent.",
    responsibilities: [
      "Architect and scale modern web applications utilizing Next.js, Node.js, and TypeScript.",
      "Design resilient REST and GraphQL APIs backed by PostgreSQL and MongoDB databases.",
      "Optimize frontend page speed, Core Web Vitals, and interactive performance.",
      "Participate in code reviews, CI/CD pipeline automation, and cloud deployments on AWS/Vercel.",
      "Work closely with UI/UX designers and product managers to iterate on customer requirements.",
    ],
    requirements: [
      "4+ years of hands-on experience building production React/Next.js and Node.js applications.",
      "Deep understanding of TypeScript, modern JavaScript (ES6+), and state management.",
      "Strong database design skills with both SQL (PostgreSQL/MySQL) and NoSQL (MongoDB).",
      "Familiarity with containerization (Docker) and cloud services (AWS S3, EC2, CloudFront).",
      "Proven track record of shipping clean, maintainable, and tested code.",
    ],
    niceToHave: [
      "Experience with AI/LLM integration or OpenAI/Anthropic APIs.",
      "Knowledge of Redis caching and event-driven architecture (RabbitMQ/Kafka).",
    ],
    benefits: [
      "Competitive compensation package with performance bonuses",
      "Comprehensive medical insurance for you and your dependents",
      "Flexible hybrid working options & learning allowance",
      "Modern development setup with high-end hardware",
    ],
    isActive: true,
    postedAt: "2026-10-12T00:00:00.000Z",
  },
  {
    title: "Software Engineer - School ERP Systems",
    slug: "school-erp-software-engineer",
    department: "Product Development",
    location: "Najibabad, UP (On-site)",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹5,00,000 - ₹10,00,000 / year",
    description:
      "Join our core School ERP product team to build next-generation educational management tools. You will implement features for attendance automation, fee calculation, examination grading, student portals, and mobile app sync.",
    responsibilities: [
      "Develop and enhance core modules within our flagship School ERP platform.",
      "Build real-time biometric and RFID attendance synchronization workers.",
      "Implement secure fee collection workflows with payment gateway webhooks.",
      "Maintain high availability and performance across thousands of concurrent school user sessions.",
      "Resolve customer support escalations and build requested institutional customizations.",
    ],
    requirements: [
      "2+ years of professional backend or full-stack software development experience.",
      "Solid proficiency in Node.js, Express, MongoDB, and React.",
      "Experience integrating third-party APIs (payment gateways like Razorpay, SMS gateways, WhatsApp APIs).",
      "Strong understanding of data security, role-based access control (RBAC), and multi-tenant systems.",
    ],
    niceToHave: [
      "Prior experience working on ERP, LMS, or educational institution platforms.",
      "Experience building React Native or Flutter companion applications.",
    ],
    benefits: [
      "Direct ownership over a product used by over 80+ schools and thousands of students",
      "Annual skill advancement budget and certification sponsorship",
      "Health coverage & paid time off",
    ],
    isActive: true,
    postedAt: "2026-10-10T00:00:00.000Z",
  },
  {
    title: "UI/UX & Product Designer",
    slug: "ui-ux-designer",
    department: "Design",
    location: "Najibabad, UP (Hybrid / On-site)",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹4,50,000 - ₹9,00,000 / year",
    description:
      "We are seeking a talented UI/UX Designer to craft intuitive, accessible, and aesthetically pleasing interfaces across our web applications, ERP dashboards, and mobile platforms.",
    responsibilities: [
      "Design wireframes, user journeys, prototypes, and high-fidelity mockups in Figma.",
      "Collaborate with developers to translate designs into pixel-perfect Tailwind CSS components.",
      "Conduct user research, customer interviews, and usability audits to identify friction points.",
      "Maintain and expand our unified design system and component token library.",
    ],
    requirements: [
      "2+ years of UI/UX design experience with a strong portfolio showcasing web & mobile apps.",
      "Mastery of Figma, component variants, auto-layout, and interactive prototyping.",
      "Understanding of web accessibility (WCAG), responsive design principles, and typography.",
      "Basic understanding of HTML/CSS to ensure design feasibility.",
    ],
    niceToHave: [
      "Experience with design system tooling and design-to-code automation.",
      "Motion graphics or micro-interaction prototyping experience.",
    ],
    benefits: [
      "Creative freedom to shape design across multiple high-impact products",
      "Latest Apple Silicon workstation and creative software licenses",
      "Generous health insurance and flexible working hours",
    ],
    isActive: true,
    postedAt: "2026-10-08T00:00:00.000Z",
  },
  {
    title: "Business Development Executive (B2B SaaS)",
    slug: "business-development-executive",
    department: "Sales & Growth",
    location: "Najibabad, UP (On-site / Regional Travel)",
    type: "Full-time",
    experience: "1-4 years",
    salary: "₹3,50,000 - ₹7,00,000 + Attractive Incentives",
    description:
      "Spearhead client acquisition for our School ERP system and bespoke custom software solutions. You will engage with school principals, management trusts, and business owners across the region.",
    responsibilities: [
      "Identify prospective educational institutions and enterprise clients in target territories.",
      "Schedule and deliver high-impact product demonstrations to decision-makers.",
      "Manage end-to-end sales cycles: cold outreach, discovery, contract negotiation, and onboarding.",
      "Build long-term relationships and drive customer retention and referrals.",
    ],
    requirements: [
      "1+ years of experience in B2B sales, SaaS, or education sector outreach.",
      "Exceptional verbal and written communication skills in Hindi and English.",
      "Demonstrated ability to meet and surpass monthly quota targets.",
      "High self-motivation, consultative selling mindset, and professionalism.",
    ],
    niceToHave: [
      "Existing network of educational institution contacts in Uttar Pradesh or Uttarakhand.",
      "Experience with CRM tools like HubSpot or Zoho.",
    ],
    benefits: [
      "Uncapped sales commission and performance milestone incentives",
      "Travel allowance, phone stipend, and client entertainment reimbursement",
      "Career growth path towards Sales Lead / Territory Manager",
    ],
    isActive: true,
    postedAt: "2026-10-05T00:00:00.000Z",
  },
];
