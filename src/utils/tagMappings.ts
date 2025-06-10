/**
 * @fileOverview Maps project tags to their corresponding Wikipedia page slugs.
 * The base URL for Wikipedia is https://zh.wikipedia.org/wiki/
 */

export const tagToWikiMap: Record<string, string> = {
  // AI & Machine Learning
  "AI": "人工智能",
  "Artificial Intelligence": "人工智能",
  "Machine Learning": "机器学习",
  "Deep Learning": "深度学习",
  "Reinforcement Learning": "强化学习",
  "NLP": "自然语言处理",
  "Natural Language Processing": "自然语言处理",
  "Sentiment Analysis": "情感分析",
  "Text Mining": "文本挖掘",
  "BERT": "BERT (语言模型)",
  "Vision Transformer": "Transformer (机器学习模型)",
  "Domain Adaptation": "域适应",
  "XAI": "可解释人工智能",
  "Explainable AI": "可解释人工智能",
  "Algorithms": "算法",
  "QML": "量子机器学习",
  "Quantum Machine Learning": "量子机器学习",

  // Remote Sensing & Vision
  "Remote Sensing": "遥感",
  "Image Segmentation": "图像分割",
  "Computer Vision": "计算机视觉",
  
  // Robotics & Control Systems
  "Robotics": "机器人学",
  "Control Systems": "控制系统",
  "DQN": "深度Q网络",

  // Ethics & Fairness
  "Ethical AI": "人工智能伦理",
  "Bias Detection": "算法偏误",
  "Fairness": "公平 (机器学习)",
  "Accountability": "问责制",
  "Transparency": "透明度 (行为)",

  // Quantum Computing
  "Quantum Computing": "量子计算",

  // General Tech & Software
  "Vue": "Vue.js",
  "TypeScript": "TypeScript",
  "Vite": "Vite",
  "Tailwind CSS": "Tailwind_CSS",
  "Web Development": "Web开发",
  "Frontend": "前端",
  "UI/UX": "用户界面设计", // or 用户体验设计

  // Add more mappings as needed
  // It's important to use the correct page title from Wikipedia (often with underscores for spaces)
  // or the URL encoded version (with + for spaces)
};

export const WIKIPEDIA_BASE_URL = "https://zh.wikipedia.org/wiki/";
