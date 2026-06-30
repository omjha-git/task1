export const topics = [
  "Agents",
  "Reasoning",
  "Vision",
  "Coding",
  "Robotics",
  "AI Safety",
  "LLM",
  "Benchmarks",
  "Multimodal",
  "Tool Use",
];

export const filters = ["Today", "This Week", "This Month", "All Time"];

export const papers = [
  {
    rank: 1,
    title: "GLM-5.1 Built for Long-Horizon Tasks",
    authors: "Zai Team",
    summary:
      "A next-gen agentic reasoning model focused on long-horizon tasks, tool use, and multi-step planning with strong benchmark performance.",
    tags: ["LLM", "Agents", "Tool Use"],
    score: "+112",
    stars: "18.4K",
    citations: "5.6K",
    comments: 32,
    date: "Jun 30, 2026",
    links: ["View", "PDF", "GitHub"],
  },
  {
    rank: 2,
    title: "Kimi K2 Technical Report",
    authors: "Moonshot AI",
    summary:
      "Large-scale mixture-of-experts model with improved coding, math, and agentic workflows for research and engineering tasks.",
    tags: ["Reasoning", "MoE", "Long Context"],
    score: "+98",
    stars: "12.8K",
    citations: "3.2K",
    comments: 26,
    date: "Jun 29, 2026",
    links: ["View", "PDF", "GitHub"],
  },
  {
    rank: 3,
    title: "SWE-Bench Pro: Stronger Software Agents",
    authors: "Open Research Lab",
    summary:
      "New software-engineering benchmark with real repository issues, agent traces, and task-level evaluation for coding agents.",
    tags: ["Coding", "Agents", "Benchmarks"],
    score: "+84",
    stars: "9.7K",
    citations: "1.9K",
    comments: 18,
    date: "Jun 28, 2026",
    links: ["View", "PDF", "GitHub"],
  },
  {
    rank: 4,
    title: "Vision-R1: Multimodal Reasoning at Scale",
    authors: "Frontier Vision Group",
    summary:
      "A vision-language reasoning model for charts, diagrams, screens, and real-world visual problem solving.",
    tags: ["Vision", "Multimodal", "Reasoning"],
    score: "+73",
    stars: "7.1K",
    citations: "1.4K",
    comments: 14,
    date: "Jun 28, 2026",
    links: ["View", "PDF", "GitHub"],
  },
];

export const happenings = [
  {
    source: "X / Twitter",
    text: "Major changelog for long-context LLM tasks shared by frontier lab researchers.",
    meta: "2h ago",
  },
  {
    source: "GitHub",
    text: "New evaluation harness for tool-use agents trending across AI repos.",
    meta: "4h ago",
  },
  {
    source: "Community",
    text: "Researchers compare which paper-detail pages make discovery and replication fastest.",
    meta: "6h ago",
  },
];

export const methodGroups = [
  { label: "Language", items: ["BERT", "GPT", "MoE", "Transformer", "Fine-tuning"] },
  { label: "Reasoning", items: ["Chain-of-Thought", "Tree of Thoughts", "ReWOO", "Self-Refine"] },
  { label: "Agents", items: ["ReAct", "Tool Use", "Planning", "Memory", "Multi-agent"] },
  { label: "Retrieval", items: ["RAG", "BM25", "Hybrid Search", "Vector Search"] },
];
