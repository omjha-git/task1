export const navLinks = ["Papers", "Methods", "Tasks", "Models", "Datasets", "Benchmarks", "Researchers", "Organizations"];

export const heroChips = [
  { label: "Agents", icon: "bot" },
  { label: "Reasoning", icon: "nodes" },
  { label: "Vision", icon: "eye" },
  { label: "Coding", icon: "code" },
  { label: "Robotics", icon: "robot" },
  { label: "All Topics", icon: "grid" },
];

export const feedItems = [
  { label: "Trending Papers", icon: "flame", active: true },
  { label: "Latest Papers", icon: "clock" },
  { label: "New GitHub Stars", icon: "star" },
];

export const taskItems = [
  { label: "Agents", icon: "bot" },
  { label: "Reasoning", icon: "brain" },
  { label: "Vision", icon: "eye" },
  { label: "Coding", icon: "code" },
  { label: "Robotics", icon: "robot" },
  { label: "Language Modeling", icon: "book" },
  { label: "Computer Use", icon: "monitor" },
  { label: "World Models", icon: "globe" },
];

export const feedTabs = ["Today", "This Week", "This Month", "All time"];

export const papers = [
  {
    title: "GLM-5.2: Built for Long-Horizon Tasks",
    authors: "Z.ai Team",
    date: "Jun 16, 2026",
    abstract:
      "GLM-5.2 is Z.ai's latest flagship open-weight model for long-horizon agentic engineering. The release extends GLM-5.1 with a solid 1M-token context, sparse-attention efficiency, and improved speculative decoding.",
    result: "SOTA on AIME 2026, HMF Feb 2026, PostTrainBench · #3 on FrontierSWE, NL2Repo",
    tags: ["Agents", "Coding Agents", "Language Modeling", "Math", "World Knowledge", "DeepSeek Sparse Attention", "MCP", "Mixture-of-Experts (MoE)", "Transformer"],
    thumbnail: "GLM-5.2 Built for Long-Horizon Tasks",
    metrics: { stars: "11.2", repo: "11.3K", citations: "30" },
  },
  {
    title: "Kimi K2 Technical Report",
    authors: "Moonshot AI",
    date: "Jun 10, 2026",
    abstract:
      "Kimi K2 is a mixture-of-experts language model with 1T total parameters and 128K context length. It achieves state-of-the-art performance on agentic, coding, and general knowledge benchmarks.",
    result: "Strong results on SWE-Bench Verified, AIME, GPQA and long-context coding tasks",
    tags: ["Large Model", "Mixture-of-Experts (MoE)", "Pre-training", "Long Context"],
    thumbnail: "Kimi K2 Technical Report",
    metrics: { stars: "9.8", repo: "8.7K", citations: "25" },
  },
  {
    title: "SWE-Bench Pro: Stronger Software Agents",
    authors: "Open Research Lab",
    date: "Jun 8, 2026",
    abstract:
      "A harder software-engineering benchmark with real repository issues, execution traces, task decomposition labels, and stricter patch verification for coding agents.",
    result: "Top agent resolves 64.2 verified issues with reproducible patch traces",
    tags: ["Coding", "Agents", "Benchmarks", "Evaluation", "Tool Use"],
    thumbnail: "SWE-Bench Pro",
    metrics: { stars: "8.4", repo: "6.9K", citations: "18" },
  },
  {
    title: "MiniT2I: A Minimalist Baseline for Text-to-Image Generation",
    authors: "A. Rao, Mei Tan, Frontier Vision Lab",
    date: "Jun 4, 2026",
    abstract:
      "A compact text-to-image baseline showing that careful data curation, simple diffusion schedules, and small transformer blocks can rival heavier generation systems.",
    result: "Ranks #2 on GenEval zero-shot image composition with a small training budget",
    tags: ["Image Generation", "Diffusion", "Vision", "Benchmarks"],
    thumbnail: "MiniT2I",
    metrics: { stars: "7.6", repo: "5.1K", citations: "12" },
  },
];

export const updates = [
  {
    source: "X / Twitter",
    channel: "X / Twitter",
    time: "2h ago",
    text: "LongRPE 2.0 is a game changer for long context. 10M tokens without quality collapse.",
    likes: "201",
    replies: "24",
  },
  {
    source: "Reddit",
    channel: "r/MachineLearning",
    time: "4h ago",
    text: "Kimi K2 technical report is insane. 128K context with 1T params and beats GPT-4.1 on coding.",
    likes: "342",
    replies: "68",
  },
  {
    source: "GitHub",
    channel: "GitHub",
    time: "6h ago",
    text: "vLLM v0.7.0 released with major performance improvements and new API features.",
    likes: "125",
    replies: "17",
  },
];
