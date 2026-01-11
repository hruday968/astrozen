import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Hruday Pabbisetty — Software Engineer",
  author: "Hruday Pabbisetty",
  description:
    "Software Engineer based in Tempe, Arizona, USA.",
  lang: "en",
  siteLogo: "/hp.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
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
      "Software Engineer based in Tempe, Arizona, USA.",
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
        " Developed dual-channel push notification architecture for Skype for Business to ensure iOS 13 compliance, enabling 100% reliable delivery of both VoIP and Non-VoIP messages through Apple Push Notification Service (APNS) and ensuring uninterrupted communication.",
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
        "Created and published algorithmic problems with well-defined constraints, edge cases, and test data for CodeChef programming contests.",
        "Reviewed and validated peer submissions, ensuring clarity, correctness, and alignment with contest standards."
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
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
