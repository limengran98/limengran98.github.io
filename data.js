// data.js - 这里存储所有的个人数据

// 1. News (新闻)
// 格式：{ date: '日期', content: '内容（支持HTML标签，如链接）' }
const newsData = [
  {
    date: "2025.12",
    content: "One paper accepted by <strong>Pattern Recognition (PR)</strong>."
  },
  {
    date: "2025.12",
    content: "Research reported by media: <a href='https://mp.weixin.qq.com/s/iC9xO-69NZXqvNLymqaIBA' target='_blank' class='text-primary hover:underline font-medium'>Analysis of CHMR Framework</a>."
  },
  {
    date: "2025.11",
    content: "One paper accepted by <strong>AAAI 2025 (Oral)</strong>."
  },
  {
    date: "2025.10",
    content: "Awarded the <strong>National Scholarship</strong> for Ph.D. Students."
  },
  {
    date: "2025.10",
    content: "Awarded the <strong>Presidential Scholarship</strong> of Sun Yat-sen University."
  },
  {
    date: "2025.09",
    content: "Two papers (<em>Redundancy Is Not What You Need...</em> and <em>SCAE...</em>) selected as <strong>ESI Highly Cited Papers</strong>."
  },
  {
    date: "2025.09",
    content: "One survey paper on Graph LLMs accepted by <strong>Expert Systems with Applications (ESWA)</strong>."
  },
  {
    date: "2025.03",
    content: "Awarded the SYSU Hong Kong/Macau Exchange Funding. Joint training at <strong>Westlake University</strong> and <strong>CAIR, HK</strong> (Supervisor: <a href='https://en.westlake.edu.cn/faculty/stan-zq-li.html' target='_blank' class='text-primary hover:underline'>Prof. Stan Z. Li</a> and <a href='https://www.cs.rochester.edu/u/jluo/' target='_blank' class='text-primary hover:underline'>Prof. Jiebo Luo</a>)."
  }
];

// 2. Selected Publications (代表作 - 建议放5篇)
const selectedWorks = [
  {
    id: "chmr",
    title: "Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling",
    venue: "AAAI 2025 (Oral)",
    authors: "Mengran Li, Zelin Zang, Wenbin Xing, Junzhou Chen, Ronghui Zhang, Jiebo Luo, Stan Z. Li",
    desc: "We propose CHMR, a framework that jointly models local-global dependencies between molecules and cellular responses. By using a tree-structured vector quantization, we capture latent biological hierarchies, significantly improving molecular property prediction.",
    img: "./images/chmr_framework.png", // 确保你在 images 文件夹里放了这张图
    paperUrl: "https://arxiv.org/abs/2511.21120",
    codeUrl: "https://github.com/limengran98/CHMR",
    tags: ["AI for Science", "Molecular Modeling"],
    bibtex: `@inproceedings{li2025learning,
  title={Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling},
  author={Li, Mengran and Zang, Zelin and Xing, Wenbin and Chen, Junzhou and Zhang, Ronghui and Luo, Jiebo and Li, Stan Z},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  year={2025}
}`
  },
  // 你可以继续复制上面的结构添加更多代表作...
  {
    id: "placeholder1",
    title: "[Placeholder] Selected Work 2",
    venue: "Journal/Conference 2025",
    authors: "Mengran Li, et al.",
    desc: "This slot is reserved for your next representative work.",
    img: "https://via.placeholder.com/300x180?text=Work+2", 
    paperUrl: "#",
    codeUrl: "#",
    tags: ["Graph Learning"],
    bibtex: ``
  }
];

// 3. Full Publications (完整论文列表)
// rank: 作者次序说明 (如 "1st Author", "Co-1st", "Corresponding")
// codeUrl: 如果没有代码，设置为 null
const fullPublications = [
  // --- 2025 ---
  { 
    title: "Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling", 
    venue: "AAAI Oral", year: "2025", 
    url: "https://arxiv.org/abs/2511.21120",
    codeUrl: "https://github.com/limengran98/CHMR",
    rank: "1st Author"
  },
  { 
    title: "A Survey of Large Language Models for Data Challenges in Graphs", 
    venue: "Expert Systems with Applications", year: "2025", 
    url: "https://doi.org/10.1016/j.eswa.2025.129643",
    codeUrl: "https://github.com/limengran98/Awesome-Literature-Graph-Learning-Challenges",
    rank: "1st Author"
  },
  { 
    title: "Attrireboost: A gradient-free propagation optimization method for cold start mitigation in attribute missing graphs", 
    venue: "arXiv", year: "2025", 
    url: "https://arxiv.org/pdf/2501.00743",
    codeUrl: "https://github.com/limengran98/ARB",
    rank: "1st Author"
  },
  { 
    title: "Mdvt: Enhancing multimodal recommendation with model-agnostic multimodal-driven virtual triplets", 
    venue: "ACM SIGKDD", year: "2025", 
    url: "https://doi.org/10.1145/3711896.3737042",
    codeUrl: "https://github.com/Jinfeng-Xu/MDVT",
    rank: "7th Author" 
  },
  { 
    title: "Redundancy Is Not What You Need: An Embedding Fusion Graph Auto-Encoder for Self-Supervised Graph Representation Learning", 
    venue: "IEEE TNNLS", year: "2025", 
    url: "https://doi.org/10.1109/TNNLS.2024.3357080",
    codeUrl: null, 
    rank: "1st Author"
  },
  { 
    title: "TDG-Mamba: Advanced Spatiotemporal Embedding for Temporal Dynamic Graph Learning via Bidirectional Information Propagation", 
    venue: "IEEE TCSS", year: "2025", 
    url: "https://doi.org/10.1109/TCSS.2024.3509399",
    codeUrl: "https://github.com/limengran98/TDG-Mamba",
    rank: "1st Author"
  },
  { 
    title: "Topology-Driven Attribute Recovery for Attribute Missing Graph Learning in Social Internet of Things", 
    venue: "IEEE IoT-J", year: "2025", 
    url: "https://doi.org/10.1109/JIOT.2025.3531985",
    codeUrl: "https://github.com/limengran98/TDAR",
    rank: "1st Author"
  },
  // ... 可以在这里继续添加你的其他论文
];

// 4. Awards (奖项)
const awardsData = [
  "<strong>National Scholarship</strong> (2025, 2022)",
  "Presidential Scholarship, SYSU (2025)",
  "Outstanding Master's Thesis, BJUT (2023)",
  "Xiaomi Special Award (Top 10), BJUT (2022)"
];

// 5. Service (学术服务)
const serviceData = [
  "<strong>Reviewer:</strong> IEEE TNNLS, IEEE TCSS, ACM TIST, ACM MM, AAAI, Neural Networks, Pattern Recognition."
];
