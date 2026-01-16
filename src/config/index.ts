import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Hruday Pabbisetty — Software Engineer",
  author: "Hruday Pabbisetty",
  description:
      "Backend-focused Software Engineer based in Tempe, Arizona, USA, who loves solving challenging problems and building reliable systems. Passionate about problem-solving, distributed systems, and turning complex ideas into scalable production solutions.",
  lang: "en",
  siteLogo: "/hp.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Achievements", href: "#achievements" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/hrudaypabbisetty/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/hruday-pabbisetty/" },
    { text: "Github", href: "https://github.com/hruday968" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Hruday Pabbisetty",
    specialty: "Software Engineer",
    summary:
        "Backend-focused Software Engineer based in Tempe, Arizona, USA, who loves solving challenging problems and building reliable systems. Passionate about problem-solving, distributed systems, and turning complex ideas into scalable production solutions.",
    email: "hrudaipabbisetty@gmail.com",
  },
  experience: [
    {
      company: "Microsoft",
      position: "Software Engineer II",
      startDate: "Jun 2019",
      endDate: "Nov 2024",
      summary: [
        "Led cross-functional efforts to engineer an automated Kubernetes pruning system that deleted 6,000+ orphaned resources across clusters, slashing security risks and compute costs by millions, while boosting deployment success rate by 2%",
        "Architected a real-time diagnostics platform using Kubernetes Pod Events API to proactively detect deployment anomalies. Reduced incident triage time by 80% and improved deployment success from 95% to 97%.",
        "Built and deployed an internal tool for Skype for Business (SFB) that cut onboarding setup time by 95.8%—from 12 hours to 30 minutes—saving support teams hours per customer and streamlining activation across the US Navy.",
        "Designed and launched a real-time security microservice that automatically mitigated active threats on on-prem servers without requiring software patches. Prevented compromise of thousands of enterprise servers and enabled instant containment with zero downtime, even in legacy environments.",
        "Developed dual-channel push notification architecture for Skype for Business to ensure iOS 13 compliance, enabling 100% reliable delivery of both VoIP and Non-VoIP messages through Apple Push Notification Service (APNS) and ensuring uninterrupted communication.",
        "Engineered a high-impact HTTP security filter that blocked 100% of malicious web requests, preventing CVE-grade exploits in Skype for Business, widely adopted across teams as a standard for securing web endpoints."
      ],
    },
    {
      company: "Amazon",
      position: "Software Development Intern",
      startDate: "May 2018",
      endDate: "Jul 2018",
      summary: [
        "Spearheaded the development of scheduling APIs that replaced a 6-hour manual vendor workflow with real-time automation, enhancing reliability and vendor satisfaction.",
        "Built a DynamoDB validation layer to detect data mismatches post-migration, fixing critical sync issues that previously caused system failures. Reduced production discrepancies by 90%, significantly improving migration confidence and rollout stability.",
      ],
    },
    {
      company: "CodeChef",
      position: "DSA Problem Curator (Freelance)",
      startDate: "Jul 2017",
      endDate: "Jan 2020",
      summary: [
        "Created and published high-quality algorithmic problems with well-defined constraints, clear statements, and strong edge-case coverage for global competitive programming contests.",
        "Designed exhaustive test cases spanning edge conditions, constraint boundaries, randomized inputs, and stress scenarios to ensure complete correctness and prevent hard-coded or suboptimal solutions.",
        "Reviewed and validated peer problem sets, ensuring clarity, correctness, balanced difficulty, and alignment with CodeChef’s contest standards for thousands of participants worldwide.",
      ],
    },
  ],
  projects: [
    {
      name: "Distributed Data Processing Platform (PostgreSQL, RocksDB, Neo4j)",
      summary: [
        "Designed a mini distributed-storage stack with horizontal sharding (range + round-robin), improving data distribution and enabling efficient partition-aware query execution.",
        "Built optimized ingestion pipelines using PostgreSQL COPY and RocksDB WriteBatch, ensuring reliable loading of 10M+ Reddit records with fault-tolerant recovery paths.",
        " Implemented core LSM-tree storage-engine primitives (MultiGet, Iterator, Delete) in RocksDB to support high-throughput read/write workloads.",
        "Deployed PageRank and BFS graph analytics on a Docker-orchestrated Neo4j environment, installing GDS and automating end-to-end graph processing."
      ],
      linkSource: "https://github.com/immois/astro-zen",
    },
    {
      name: "LLM-Driven Deployment Failure RCA Bot | Microsoft Hackathon 2024",
      summary: [
        "Built a bot that takes a deployment ID, fetches rollout logs, events, pod states, and config diffs, and uses an OpenAI reasoning model to generate clear Root Cause Analysis (RCA) for failed deployments.",
        "Detected patterns like CrashLoopBackOff, ImagePullError, resource issues, and config mismatches using LLM-based log analysis.",
        "Validated results against past failures to achieve high-accuracy RCA, reduce investigation time by 70%, and deliver consistent, standardized diagnostic reports.",
      ],
      linkSource: "https://github.com/immois/astro-zen",
    },
    {
      name: "Compiler & Custom Programming Language | Python, PLY (Lex/Yacc), AST, Interpreter",
      summary: [
        "Designed and implemented a custom programming language with support for numeric types, booleans, strings, conditionals, loops, and typed variable assignments as required.",
        "Built a complete lexer and parser using Python’s PLY (Lex/Yacc) to tokenize input, enforce EBNF grammar rules, and generate a structured Abstract Syntax Tree (AST) for semantic evaluation",
        "Developed a runtime interpreter/virtual machine to execute the AST, manage symbol tables, evaluate expressions, and handle control-flow constructs with correct variable scoping.",
        "Created comprehensive sample programs, documentation, and demonstrations showcasing end-to-end compilation and execution of the language.",
      ],
      linkSource: "https://github.com/immois/astro-zen",
    },
    {
      name: "Zoom Meeting Assistant - Classmate Buddy for students",
      summary: [
        "Designed an AI-powered Zoom assistant that summarized live transcripts every 10 minutes using Gemini LLM, achieved 70% manual effort reduction in notetaking and 30% boost in assignment submissions.",
        "Integrated CrewAI and Notion API to automate Notion updates and Gmail API for assignment detection and email reminders",
        "Orchestrated async workers for summarization and email sync; introduced rate limiting and health checks to stabilize workloads.",
        "Led a 5-person hackathon team to ship MVP in 24 hours; owned backlog, scoped roles, and won 1st place.",
      ],
      linkSource: "https://github.com/immois/astro-zen",
    },
  ],
  achievements: [
  "Secured 26th rank in the ACM-ICPC Asia Amritapuri Regionals 2017, competing against 200+ top teams across India.",
  "Achieved a peak LeetCode rating of 2424, placing in the top 0.1% of competitive programmers worldwide",
  "Candidate Master on Codeforces with a rating of 1900+, placing among the top competitive programmers globally",
  "Recognized with multiple internal awards at Microsoft for high-impact projects",
],
  about: {
    description: `
      Hi, I’m Hruday Pabbisetty, a backend-focused Software Engineer with over 5 years of experience building large-scale distributed systems and cloud infrastructure at Microsoft.

My work centers around designing reliable services, automating complex operational workflows, and improving system resiliency in Kubernetes-based environments. I’ve built platforms for orphan-resource cleanup, deployment failure diagnostics, and security mitigation that operate at production scale and directly impact system reliability and cost efficiency.

With a strong foundation in algorithms and system design — including a LeetCode rating of 2424 (Top 0.1%) and a Top-30 finish at ACM-ICPC Asia Regionals — I bring a problem-solving mindset to every layer of the backend stack. I’m currently pursuing my Master’s in Software Engineering at Arizona State University, continuing to deepen my expertise in distributed systems and scalable backend architectures.

I’m passionate about Kubernetes, cloud platforms, and building backend systems that engineers trust at scale.
    `,
    image: "/hp.jpg",
  },
};

// #5755ff
