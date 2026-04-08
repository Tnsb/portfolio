export const links = {
  linkedin: "https://linkedin.com/in/tinasibbal",
  github: "https://github.com/Tnsb",
  email: "mailto:tsibbal@gmail.com",
  /** Shown on buttons; inbox is the same address as `email`. */
  emailDisplay: "tsibbal@gmail.com",
  emailAndrew: "mailto:tsibbal@andrew.cmu.edu",
};

/** Optional: personal interests (not shown on site unless you add a section). */
export const hobbies = [
  "Running and strength training",
  "Film, narrative podcasts, and long-form journalism",
  "Cooking and baking",
];

/**
 * Writing / blog. Per post: title, href, summary, coverSrc, coverAlt; optional date, readTime.
 */
export const writing = {
  posts: [
    {
      id: "langgraph-drift-monitoring",
      title:
        "Your LangGraph agent has no idea if it’s drifting — here’s how to monitor it in production",
      href: "https://medium.com/@tinasibbal27/your-langgraph-agent-has-no-idea-if-its-drifting-here-s-how-to-monitor-it-in-production-797d4ca1b0fd",
      summary:
        "Why traditional ML drift checks break down for agents, the four surfaces to watch (tool calls, routing, judge scores, latency), and how to instrument LangGraph without waiting for an Evidently-for-agents moment.",
      coverSrc: "/blog/langgraph-monitoring-cover.png",
      coverAlt:
        "Desk and chair facing tall windows with a bright view of Oakland and the Cathedral of Learning in Pittsburgh.",
      readTime: "4 min read",
    },
  ],
};

export const projects = [
  {
    id: "aeromind",
    name: "AeroMind",
    mockupBg: "#c8d4ef",
    mockupSrc: "/projects/aeromind-mockup.png",
    mockupAlt:
      "Operations dashboard with workflow KPIs, human gate approval, agent pipeline, and governance controls.",
    tag: "Multi-agent AI · Air cargo",
    body:
      "LangGraph-style air-cargo orchestration: load optimization, rerouting, and compliance agents; OpenAI tool use; pgvector for regulatory RAG; Postgres state; React dashboard for approvals. Scoping docs covered roles, escalation rules, and success metrics.",
    extra:
      "Stakeholder writeups, per-agent LLM-judge evals on labeled scenarios, and decision logs.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/csaikarthikreddy-create/aeromind",
      },
    ],
  },
  {
    id: "movies",
    name: "Movie recommendation system",
    mockupBg: "#f0d4dc",
    mockupSrc: "/projects/movies-mockup.png",
    mockupAlt:
      "Query result table of watch events: id, time, user_id, movie_id, minute (sample ingestion data).",
    mockupContain: true,
    tag: "LightGBM · collaborative filtering · training at scale · governance",
    body:
      "Trained and compared recommendation models on 240K+ ratings—collaborative filtering vs LightGBM—using RMSE, training time, model footprint, and inference latency; LightGBM was chosen for the full serving profile. The work also covered drift monitoring, provenance for data and model artifacts, compliance and security expectations, and load validation on a production-style path sustained past 1,000 events per second.",
    extra:
      "Served via FastAPI with CI-driven model reloads and latency targets aligned to the chosen model.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/cmu-seai/group-project-s26-how-to-train-your-model-1",
      },
    ],
  },
  {
    id: "crypto",
    name: "Real-time crypto volatility detection",
    mockupBg: "#c8eadf",
    mockupSrc: "/projects/crypto-mockup.png",
    mockupAlt: "BTC-USD price line chart showing volatility over time.",
    tag: "Streaming features · XGBoost · production monitoring",
    body:
      "Live Bitcoin prices, hand-built indicators, and gradient-boosted models for near-term spikes, with MLflow experiments and Evidently for drift.",
    extra:
      "Beat a 0.74 baseline on the spike task; added monitoring notes and handoff documentation.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nicolelyu021/detecting_crypto_volatility",
      },
    ],
  },
  {
    id: "stock-trader",
    name: "StockTrader: competing analysis agents",
    mockupBg: "#f2e8c9",
    mockupContain: true,
    mockupSrc: "/projects/stock-trader-mockup.png",
    mockupAlt:
      "StockTrader multi-agent dashboard: summary stats, analysis table, LangGraph pipeline, and debate results.",
    tag: "LangGraph · Groq · yfinance · debate mode",
    body:
      "Two LLM strategy agents (momentum vs value contrarian) analyze the same market data in parallel. An evaluator scores agreement; Debate Mode lets each agent rebut on disagreement.",
    extra:
      "Python: yfinance for data, LangGraph for flow, saved JSON outputs for review without API reruns.",
    links: [{ label: "GitHub", href: "https://github.com/Tnsb/stockTrader" }],
  },
  {
    id: "rag-eval",
    name: "RAG evaluation pipeline",
    mockupBg: "#e4daf7",
    mockupSrc: "/projects/rag-mockup.png",
    mockupAlt: "Internal RAG evaluation console: corpus list, Q&A panel, and RAGAS-style metric bars.",
    tag: "LangChain · FAISS · RAGAS",
    body:
      "RAG on 18 AI papers with LangChain and FAISS; scored with RAGAS (faithfulness, relevancy, context precision). Defined corpus, quality bar, 23 test questions, and retrieval vs generation failure buckets.",
    extra: "Short writeup summarizing metrics and next steps.",
    links: [
      { label: "GitHub", href: "https://github.com/Tnsb/amd-research-portal" },
    ],
  },
  {
    id: "hands",
    name: "Hand pose estimation",
    mockupBg: "#f5dccf",
    mockupSrc: "/projects/hands-mockup.png",
    mockupAlt: "Tina Sibbal demonstrating fist gesture recognition with keypoint overlay.",
    mockupNatural: true,
    tag: "YOLO11 pose · gestures · rehabilitation benchmarking",
    body:
      "YOLO11-based 21-keypoint hand tracking, rule-based gesture classifiers (open palm, fist, thumbs-up), rep counting for rehab-style exercises, and benchmarks vs MediaPipe.",
    extra: "Eval first; planned follow-on for harder occlusion (e.g. fingertips).",
    links: [
      { label: "GitHub", href: "https://github.com/tahazakir/hand_pose_est" },
    ],
  },
  {
    id: "chef-nutritionist",
    name: "C.H.E.F. Nutritionist",
    mockupBg: "#dce8cc",
    mockupContain: true,
    mockupSrc: "/projects/chef-mockup.png",
    mockupAlt: "Meal Planner Streamlit UI with diet filters and daily meal cards (app only, no browser chrome).",
    tag: "Streamlit · Spoonacular · Groq · grocery integration",
    body:
      "AI meal-planning assistant: personalized prep from diet, calorie targets, and local grocery context, with recipes, nutrition, availability, shopping lists, and cost estimates.",
    extra:
      "Streamlit app: recipe APIs, LLM calls, Kroger-related tooling; README covers env vars and setup.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/KoustubhAnturkar/c.h.e.f.-nutritionist",
      },
    ],
  },
];

/** Favicon logos via Google s2 helper (no API key); swap for hosted assets if you prefer. */
const fav = (domain) =>
  `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;

export const jobs = [
  {
    id: "trackonomy",
    title: "Senior Software Engineer",
    org: "Trackonomy",
    orgUrl: "https://www.trackonomy.com/",
    logoUrl: fav("trackonomy.com"),
    tagline: "Last-mile logistics IoT platform.",
    location: "San Jose, CA",
    period: "Jul 2022 to Jul 2025",
    expanded:
      "Senior engineer on last-mile logistics across event pipelines, APIs, Postgres, and the platform’s largest enterprise account. Built Azure Service Bus ingestion for major carriers as volume passed 12M+ daily deliveries; shipped 60+ NestJS APIs and tightened client dashboards with SQL, indexing, and frontend work; led a multi-region Postgres consolidation with migrations and zero customer-facing downtime; and was the primary software contact for a Fortune 50 logistics client on roadmaps, launches, and reviews.",
  },
  {
    id: "ucd-it",
    title: "IT Operations Student Assistant",
    org: "UC Davis Office of Research",
    orgUrl: "https://research.ucdavis.edu/",
    logoUrl: fav("ucdavis.edu"),
    tagline: "University research computing support",
    location: "Davis, CA",
    period: "Nov 2020 to Jun 2022",
    expanded:
      "Research IT for the Office of Research: active directory and security policies for 100+ researchers, quarterly audits with no unauthorized-access incidents, onboarding, and Python diagnostics that automated the highest-volume ticket types—passwords, permissions, and VPN—so the team spent less time on repeat work.",
  },
  {
    id: "sachacks",
    title: "Marketing Associate",
    org: "SacHacks",
    orgUrl: "https://www.sachacks.io/",
    logoUrl: "/logos/sachacks.png",
    tagline: "Sacramento’s largest intercollegiate hackathon",
    location: "Greater Sacramento, CA",
    period: "Apr 2019 to May 2022",
    expanded:
      "Marketing for Sacramento’s largest intercollegiate hackathon—digital campaigns, on-site promotion, and partner-facing assets—so the event stayed visible and well-attended year over year.",
  },
  {
    id: "alletec-intern",
    title: "Software Engineering Intern",
    org: "Alletec",
    orgUrl: "https://www.alletec.com/",
    logoUrl: fav("alletec.com"),
    tagline: "Microsoft Dynamics and product engineering services",
    location: "Delhi, India",
    period: "Jul 2019 to Aug 2019",
    expanded:
      "Summer internship in Delhi on Microsoft Dynamics–related C# and SQL services: refactored APIs to decouple three core modules for cleaner deploys and added unit and integration tests that remained part of the team’s regression suite.",
  },
];

export const education = [
  {
    school: "Carnegie Mellon University",
    detail: "M.S. in Artificial Intelligence",
    place: "Pittsburgh, PA",
    time: "Aug 2025 to Aug 2026",
    coursework: [
      "AI strategy, product framing, and organizational adoption",
      "Agentic systems, tool use, and multi-agent orchestration",
      "Operationalizing ML: deployment, monitoring, evaluation, and risk",
      "Generative AI and modern model stacks",
      "Cybersecurity and robustness for AI / ML systems",
      "Decision modeling, data engineering, and analytics for AI workflows",
    ],
    campusPhoto: {
      src: "/education/cmu-campus.png",
      alt: "Carnegie Mellon at dusk from Tepper: glass wall, wood-slat ceiling, lawn and brick buildings under a pink sunset.",
    },
  },
  {
    school: "University of California, Davis",
    detail: "B.S. Computer Science & Engineering, minor in Economics",
    place: "Davis, CA",
    time: "Sep 2018 to Jun 2022",
    coursework: [
      "Algorithms, data structures, and discrete mathematics",
      "Computer architecture, operating systems, and concurrency",
      "Software engineering, object-oriented design, and large codebases",
      "Database systems and data management",
      "Computer networks and distributed systems",
      "Programming languages, compilers, and program analysis",
      "Economics minor: microeconomics, macroeconomics, econometrics, and applied theory",
    ],
    campusPhoto: {
      src: "/education/uc-davis-campus.png",
      alt: "UC Davis campus at sunset, with the water tower and evening light over the road and bike path.",
    },
  },
];
