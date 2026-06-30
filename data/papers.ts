export const topDomains = [
  { name: "Language Modeling", count: "37067" },
  { name: "Image Understanding", count: "7626" },
  { name: "Reinforcement Learning", count: "7177" },
  { name: "Question Answering", count: "4199" },
  { name: "Reasoning", count: "3401" },
  { name: "Image Generation", count: "3119" },
  { name: "3D Generation", count: "2333" },
  { name: "Image Segmentation", count: "2137" },
];

export const trendingDomains = [
  { name: "Image Restoration", growth: "2.8x" },
  { name: "Time-Series Forecasting", growth: "2.7x" },
  { name: "Computer Use Agents", growth: "2.6x" },
  { name: "Coding Agents", growth: "2.6x" },
  { name: "Video Understanding", growth: "2.5x" },
  { name: "World Models", growth: "2.4x" },
  { name: "Motion Generation", growth: "2.3x" },
  { name: "Robotics", growth: "1.9x" },
];

export const feedTabs = ["Today", "This Week", "This Month", "All Time"];
export const sortFilters = ["Trending", "Newest", "Most Cited"];

export const papers = [
  {
    title: "GLM-5.2: Built for Long-Horizon Tasks",
    authors: "Zai Team",
    date: "30 Jun 2026",
    citations: "5.8K",
    abstract:
      "A frontier agentic model optimized for long-horizon planning, tool-use workflows, and multi-step research tasks with strong gains across reasoning benchmarks.",
    benchmark: "State-of-the-art on LongBench-Agent with 71.4 task success",
    tags: ["Language Modeling", "Agents", "Tool Use"],
    thumbnail: "LM",
    accent: "#ff5a1f",
    metrics: { stars: "342/hr", models: "18 models", spaces: "7 spaces", datasets: "5 datasets" },
  },
  {
    title: "MiniT2I: A Minimalist Baseline for Text-to-Image Generation",
    authors: "A. Rao, Mei Tan, Frontier Vision Lab",
    date: "29 Jun 2026",
    citations: "1.1K",
    abstract:
      "A compact text-to-image recipe showing that careful data curation, simple diffusion schedules, and small transformer blocks can rival heavier baselines.",
    benchmark: "Ranks #2 on GenEval zero-shot image composition",
    tags: ["Image Generation", "Diffusion", "Benchmarks"],
    thumbnail: "T2I",
    accent: "#ff8a3d",
    metrics: { stars: "219/hr", models: "9 models", spaces: "14 spaces", datasets: "3 datasets" },
  },
  {
    title: "LongCat-Next: Lexicalizing Modalities as Discrete Tokens",
    authors: "LongCat Research",
    date: "29 Jun 2026",
    citations: "862",
    abstract:
      "A unified multimodal tokenizer that maps text, image, audio, and UI state into discrete lexical units for more stable long-context reasoning.",
    benchmark: "Improves MMBench reasoning by 8.6 points over prior tokenizer baselines",
    tags: ["Multimodal", "Tokenization", "Long Context"],
    thumbnail: "LC",
    accent: "#e94816",
    metrics: { stars: "186/hr", models: "11 models", spaces: "4 spaces", datasets: "6 datasets" },
  },
  {
    title: "SWE-Bench Pro: Stronger Software Agents",
    authors: "Open Research Lab",
    date: "28 Jun 2026",
    citations: "1.9K",
    abstract:
      "A software-engineering benchmark with real repository issues, richer test traces, task decomposition labels, and stricter agent evaluation protocols.",
    benchmark: "New top result: 64.2 resolved issues with verified patch traces",
    tags: ["Coding Agents", "Benchmarks", "Evaluation"],
    thumbnail: "SWE",
    accent: "#ff5a1f",
    metrics: { stars: "171/hr", models: "23 models", spaces: "2 spaces", datasets: "8 datasets" },
  },
  {
    title: "Vision-R1: Multimodal Reasoning at Scale",
    authors: "Frontier Vision Group",
    date: "28 Jun 2026",
    citations: "1.4K",
    abstract:
      "A vision-language reasoning model for charts, diagrams, screens, and real-world visual problem solving, trained with verifiable intermediate steps.",
    benchmark: "SOTA on ChartQA-Pro and ScreenSpot-V2 reasoning splits",
    tags: ["Vision", "Reasoning", "Multimodal"],
    thumbnail: "V1",
    accent: "#f97316",
    metrics: { stars: "148/hr", models: "15 models", spaces: "12 spaces", datasets: "4 datasets" },
  },
  {
    title: "OSWorld 2.0: Benchmarking Computer Use Agents",
    authors: "OSWorld Contributors",
    date: "27 Jun 2026",
    citations: "2.6K",
    abstract:
      "A broader computer-use benchmark covering desktop automation, browser workflows, file operations, and multi-application task planning.",
    benchmark: "Adds 1,240 verified tasks across productivity and engineering workflows",
    tags: ["Computer Use Agents", "Robotics", "Evaluation"],
    thumbnail: "OS",
    accent: "#ff6a21",
    metrics: { stars: "133/hr", models: "31 models", spaces: "5 spaces", datasets: "10 datasets" },
  },
];

export const updates = [
  { label: "New leaderboard", text: "Agentic SWE verified results updated with 41 submissions.", meta: "2h" },
  { label: "Dataset", text: "HF community added 18 curated UI automation datasets this week.", meta: "5h" },
  { label: "Method", text: "Tree-search planning is trending across computer-use agents.", meta: "1d" },
];

export const methodGroups = [
  { label: "Popular Methods", items: ["ReAct", "Tool Use", "RAG", "MoE", "Self-Refine"] },
  { label: "Active Benchmarks", items: ["SWE-Bench", "OSWorld", "MMBench", "LongBench", "GenEval"] },
];
