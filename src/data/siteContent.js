export const links = {
  linkedin: "https://linkedin.com/in/tinasibbal",
  github: "https://github.com/Tnsb",
  email: "mailto:tsibbal@gmail.com",
  emailAndrew: "mailto:tsibbal@andrew.cmu.edu",
};

/** Personal interests on About; edit to match you. */
export const hobbies = [
  "Running and strength training",
  "Film, narrative podcasts, and long-form journalism",
  "Cooking and baking",
];

/**
 * Writing / blog. Set mediumUrl to your Medium profile when live.
 * Add { title, href, date? } to posts as you publish.
 */
export const writing = {
  mediumUrl: "https://medium.com/@tinasibbal",
  intro:
    "I am starting to write on AI engineering: agents, production ML, evaluation, and shipping reliable systems in the real world. Medium will be the main outlet.",
  posts: [],
};

export const projects = [
  {
    id: "aeromind",
    name: "AeroMind",
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
    tag: "Kafka · FastAPI · drift checks · team leadership",
    body:
      "Kafka to PostgreSQL ingestion, FastAPI service, Pydantic validation, DLQs for bad events, and drift checks on rolling windows. I led the data path for a five-person team: ingestion plan, how we’d judge models (RMSE, training cost, latency, disk), milestones, and weekly syncs.",
    extra:
      "Collaborative filtering vs LightGBM on 240K+ ratings: LightGBM won on RMSE, training time, and size, then we served it with a latency budget and CI-triggered reloads.",
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
      "Built and ran production pipelines, APIs, and databases; primary software contact for Trackonomy’s largest client (Fortune 50 logistics), including roadmaps, dates, and escalations.",
    bulletGroups: [
      {
        title: "Engineering & platform",
        items: [
          "Built real-time event-driven pipelines on Azure Service Bus to ingest delivery scan events across FedEx, UPS, and USPS, handling deduplication, ordering, and dead-letter queues so the platform could scale past 12M+ daily deliveries without losing data.",
          "Designed and shipped 60+ REST APIs in Node.js and NestJS (Swagger, Zod validation, rate limiting) connecting logistics, scanning, and reporting, removing sync delays that had become recurring operational pain for clients.",
          "Rewrote client-facing React apps and optimized SQL, indexes, and pagination, cutting average page load by over 95%, with hotspot fixes taking a device health dashboard from about five seconds to under one second for 1,000+ daily users.",
          "Led a multi-region PostgreSQL consolidation with scripted migrations, rollback plans, and coordinated API/app updates, completing cutover with zero client-facing disruption while merging regional systems into one.",
          "Built a shared TypeScript logging and tracing library (Elastic + Grafana) adopted across microservices, making cross-service incidents easier to reason about during outages.",
          "Reduced deployment risk across 40+ services by fixing memory leaks, Docker misconfigurations, Redis pooling, and flaky GitLab CI, and raised automated test coverage ~70% (Jest/Vitest), with team-wide testing and documentation norms that measurably reduced bugs per release.",
          "Onboarded engineers with internal docs, service walkthroughs, and incident runbooks, shortening ramp-up and mistakes born from unfamiliarity.",
        ],
      },
      {
        title: "Product, clients & delivery",
        items: [
          "Owned Trackonomy’s largest client relationship (Fortune 50 logistics), single point of contact for software feature prioritization, delivery timelines, and escalations across a major contract renewed annually.",
          "Translated client requirements on reducing manual scanning and improving delivery visibility into engineering specs and sprint plans; coordinated both sides through delivery cycles to ship capabilities that eliminated 20M+ manual scans per day on the platform.",
          "Coordinated cross-functional execution across engineering, QA, and client operations for the public launch of Trackonomy’s Last Mile product, managing dependencies, testing schedules, and client onboarding as the product grew to 12M+ processed deliveries daily.",
          "Ran the database migration end to end: testing plan, data-integrity risks, aligned engineering and client on go-live, cut over without service disruption.",
          "Defined requirements for a widely used device health dashboard, coordinated frontend, backend, and database work across engineers, and validated performance after launch, including the page-load win above.",
          "Ran quarterly business reviews with the Fortune 500 client: performance reporting, risk flags, and roadmap updates from operational data.",
        ],
      },
    ],
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
      "Onboarding, permissions, and scripts for sensitive research systems: repeatable access and fewer repeat tickets.",
    bullets: [
      "Configured and maintained Active Directory access controls, login systems, and group security policies for 100+ researchers, handling onboarding, offboarding, and quarterly audits with no unauthorized access incidents over 18 months of sensitive research workloads.",
      "Analyzed support-ticket patterns to pinpoint the highest-frequency failure categories (password resets, permission errors, VPN issues), then built Python diagnostic scripts that automated resolution and cut repeat escalations for the team.",
    ],
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
      "Marketing and outreach for a 500-student regional hackathon: campaigns, on-site experience, and materials for participants and partners.",
    bullets: [
      "Helped run digital and on-site marketing, partner-facing assets, and comms so the event stayed visible and well attended year over year.",
    ],
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
      "Internship on an engineering team in Delhi working on C# and SQL services around Dynamics-related products.",
    bullets: [
      "Refactored internal C# and SQL APIs to decouple 3 tightly coupled core modules that had accumulated across multiple product iterations, improving service scalability and enabling independent deployments that reduced cross-team coordination overhead and deployment risk.",
      "Authored unit and integration tests for RESTful services, covering edge cases and error handling; the test suite was absorbed into the team's active regression pipeline and remained in use after the internship ended.",
    ],
  },
];

export const education = [
  {
    school: "Carnegie Mellon University",
    detail: "M.S. in Artificial Intelligence",
    place: "Pittsburgh, PA",
    time: "Aug 2025 to Aug 2026",
    notes: "Coursework: AI strategy, agents, production ML, security, and data engineering.",
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
    time: "Jun 2022",
    notes: "B.S. CSE with economics minor (micro, macro, econometrics).",
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

export const skillGroups = [
  {
    label: "Product & leadership",
    items:
      "Roadmap planning, user research, go-to-market thinking, stakeholder management, Agile delivery, A/B testing, PRD writing, client management, quarterly business reviews, cross-functional coordination",
  },
  {
    label: "Languages & core CS",
    items: "Python, Java, JavaScript, TypeScript, C++, SQL, HTML/CSS",
  },
  {
    label: "AI / ML",
    items:
      "PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, Transformers, RAG, LangChain, LangGraph, Google ADK, MLflow, Evidently AI, RAGAS, FAISS, pgvector",
  },
  {
    label: "Data & MLOps",
    items: "Kafka, Spark, Airflow, Pydantic, Pandas, PostgreSQL-oriented data modeling",
  },
  {
    label: "Web, infra & collaboration",
    items:
      "React, Next.js, Node.js, NestJS, FastAPI, Azure, AWS, GCP, Docker, Kubernetes, Git, GitHub Actions, Grafana, Redis, Figma, Jira",
  },
];
