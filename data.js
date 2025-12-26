// data.js - 个人数据文件
// 请确保保存此文件时编码为 UTF-8

// 1. News (新闻)
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

// 2. Selected Publications (代表作 - 目前放两篇)
const selectedWorks = [
  {
    id: "chmr",
    title: "Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling",
    venue: "AAAI 2026 (Oral)",
    authors: "Mengran Li, Zelin Zang, Wenbin Xing, Junzhou Chen, Ronghui Zhang, Jiebo Luo, Stan Z. Li",
    desc: "We propose CHMR, a framework that jointly models local-global dependencies between molecules and cellular responses. By using a tree-structured vector quantization, we capture latent biological hierarchies, significantly improving molecular property prediction.",
    img: "./images/CHMR.png", 
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
  {
    id: "eswa-survey",
    title: "A Survey of Large Language Models for Data Challenges in Graphs",
    venue: "Expert Systems with Applications (ESWA) 2025",
    authors: "Mengran Li, Pengyu Zhang, Wenbin Xing, Yijia Zheng, Klim Zaporojets, Junzhou Chen, Ronghui Zhang, Yong Zhang, Siyuan Gong, Jia Hu, Xiaolei Ma, Zhiyuan Liu, Paul Groth, Marcel Worring",
    desc: "This survey systematically explores how Large Language Models (LLMs) address four fundamental data-centric challenges in graph learning: Incompleteness, Imbalance, Heterogeneity, and Dynamics.",
    img: "./images/graph_llm_survey.png",
    paperUrl: "https://doi.org/10.1016/j.eswa.2025.129643",
    codeUrl: "https://github.com/limengran98/Awesome-Literature-Graph-Learning-Challenges",
    tags: ["Graph Learning", "LLM", "Survey"],
    bibtex: `@article{li2025survey,
  title={A survey of large language models for data challenges in graphs},
  author={Li, Mengran and Zhang, Pengyu and Xing, Wenbin and Zheng, Yijia and Zaporojets, Klim and Chen, Junzhou and Zhang, Ronghui and Zhang, Yong and Gong, Siyuan and Hu, Jia and others},
  journal={Expert Systems with Applications},
  pages={129643},
  year={2025},
  publisher={Elsevier}
}`
  }
];

// 3. Full Publications (完整列表)
const fullPublications = [
  // --- 2025 (New Additions) ---
  { 
    title: "PhenoProfiler: advancing phenotypic learning for image-based drug discovery", 
    venue: "Nature Communications", 
    year: "2025", 
    url: "https://doi.org/10.1038/s41467-025-67479-w", 
    codeUrl: "https://github.com/QSong-github/PhenoProfiler", 
    rank: "8th Author" 
  },
  { 
    title: "Hypergraph-driven spatial multimodal fusion for precise domain delineation and tumor microenvironment decoding", 
    venue: "Communications Biology", 
    year: "2025", 
    url: "https://doi.org/10.1038/s42003-025-09312-0", 
    codeUrl: "https://github.com/VitaIntelli-CQU/HAST", 
    rank: "5th Author" 
  },

  // --- 2025 (Existing) ---
  { 
    title: "Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling", 
    venue: "AAAI", 
    year: "2025", 
    url: "https://arxiv.org/abs/2511.21120",
    codeUrl: "https://github.com/limengran98/CHMR",
    rank: "1st Author"
  },
  { 
    title: "A Survey of Large Language Models for Data Challenges in Graphs", 
    venue: "Expert Systems with Applications", 
    year: "2025", 
    url: "https://doi.org/10.1016/j.eswa.2025.129643",
    codeUrl: "https://github.com/limengran98/Awesome-Literature-Graph-Learning-Challenges",
    rank: "1st Author"
  },
  { 
    title: "Attrireboost: A gradient-free propagation optimization method for cold start mitigation in attribute missing graphs", 
    venue: "arXiv", 
    year: "2025", 
    url: "https://arxiv.org/pdf/2501.00743",
    codeUrl: "https://github.com/limengran98/ARB",
    rank: "1st Author"
  },
  { 
    title: "Mdvt: Enhancing multimodal recommendation with model-agnostic multimodal-driven virtual triplets", 
    venue: "ACM SIGKDD", 
    year: "2025", 
    url: "https://doi.org/10.1145/3711896.3737042",
    codeUrl: "https://github.com/Jinfeng-Xu/MDVT",
    rank: "7th Author" 
  },
  { 
    title: "Redundancy Is Not What You Need: An Embedding Fusion Graph Auto-Encoder for Self-Supervised Graph Representation Learning", 
    venue: "IEEE Transactions on Neural Networks and Learning Systems", 
    year: "2025", 
    url: "https://doi.org/10.1109/TNNLS.2024.3357080",
    codeUrl: null, 
    rank: "1st Author"
  },
  { 
    title: "TDG-Mamba: Advanced Spatiotemporal Embedding for Temporal Dynamic Graph Learning via Bidirectional Information Propagation", 
    venue: "IEEE Transactions on Computational Social Systems", 
    year: "2025", 
    url: "https://doi.org/10.1109/TCSS.2024.3509399",
    codeUrl: "https://github.com/limengran98/TDG-Mamba",
    rank: "1st Author"
  },
  { 
    title: "Topology-Driven Attribute Recovery for Attribute Missing Graph Learning in Social Internet of Things", 
    venue: "IEEE Internet of Things Journal", 
    year: "2025", 
    url: "https://doi.org/10.1109/JIOT.2025.3531985",
    codeUrl: "https://github.com/limengran98/TDAR",
    rank: "1st Author"
  },
  { 
    title: "ElaD-Net: An Elastic Semantic Decoupling Network for Lesion Segmentation in Breast Ultrasound Images", 
    venue: "IJCAI", 
    year: "2025", 
    url: "https://doi.org/10.24963/ijcai.2025/235",
    codeUrl: null,
    rank: "5th Author"
  },
  { 
    title: "A Two-Stage Method for Specular Highlight Detection and Removal in Medical Images", 
    venue: "MICCAI", 
    year: "2025", 
    url: "https://link.springer.com/chapter/10.1007/978-3-032-05127-1_3",
    codeUrl: "https://github.com/tkllndxn/highlight-removal",
    rank: "8th Author"
  },
  { 
    title: "Effective Finite Time Stability Control for Human–Machine Shared Vehicle Following System", 
    venue: "IEEE Transactions on Intelligent Transportation Systems", 
    year: "2025", 
    url: "https://doi.org/10.1109/TITS.2025.3619092",
    codeUrl: null,
    rank: "2nd Author"
  },
  { 
    title: "MM-STFlowNet: A Transportation Hub-Oriented Multi-Mode Passenger Flow Prediction Method via Spatial-Temporal Dynamic Graph Modeling", 
    venue: "IEEE Transactions on Intelligent Transportation Systems", 
    year: "2025", 
    url: "https://doi.org/10.1109/TITS.2025.3588867",
    codeUrl: "https://github.com/BMRETURN/MM-STFlowNet",
    rank: "3rd Author"
  },
  { 
    title: "Ms-AeDNet: A multi-scale attention-enhanced dynamic network for multi-step performance prediction of hydrogen proton exchange membrane fuel cells", 
    venue: "Process Safety and Environmental Protection", 
    year: "2025", 
    url: "https://doi.org/10.1016/j.psep.2025.107674",
    codeUrl: "https://github.com/BMRETURN/Ms-AeDNet",
    rank: "1st Author"
  },
  { 
    title: "TAS-TsC: A data-driven framework for Estimating Time of Arrival using Temporal-Attribute-Spatial Tri-space Coordination of truck trajectories", 
    venue: "Applied Soft Computing", 
    year: "2025", 
    url: "https://doi.org/10.1016/j.asoc.2025.113214",
    codeUrl: null,
    rank: "1st Author"
  },

  // --- 2024 ---
  { 
    title: "Self-Supervised Nodes-Hyperedges Embedding for Heterogeneous Information Network Learning", 
    venue: "IEEE Transactions on Big Data", 
    year: "2024", 
    url: "https://doi.org/10.1109/TBDATA.2023.3275374",
    codeUrl: "https://github.com/limengran98/SNHE",
    rank: "1st Author"
  },
  { 
    title: "CSAT: Contrastive Sampling-Aggregating Transformer for Community Detection in Attribute-Missing Networks", 
    venue: "IEEE Transactions on Computational Social Systems", 
    year: "2024", 
    url: "https://doi.org/10.1109/TCSS.2023.3292145",
    codeUrl: null,
    rank: "1st Author"
  },
  { 
    title: "SCAE: Structural Contrastive Auto-encoder for Incomplete Multi-view Representation Learning", 
    venue: "ACM Transactions on Multimedia Computing, Communications and Applications", 
    year: "2024", 
    url: "https://doi.org/10.1145/3672078",
    codeUrl: "https://github.com/limengran98/SCAE",
    rank: "1st Author"
  },
  { 
    title: "Contextual Semantics Interaction Graph Embedding Learning for Recommender Systems", 
    venue: "IEEE Transactions on Computational Social Systems", 
    year: "2024", 
    url: "https://doi.org/10.1109/TCSS.2024.3394701",
    codeUrl: null,
    rank: "3rd Author"
  },
  { 
    title: "Gene Expression Prediction from Histology Images via Hypergraph Neural Networks", 
    venue: "Briefings in Bioinformatics", 
    year: "2024", 
    url: "https://academic.oup.com/bib/article/25/6/bbae500/7937248",
    codeUrl: "https://github.com/QSong-github/HGGEP",
    rank: "5th Author"
  },

  // --- 2023 ---
  { 
    title: "Hypergraph Transformer Neural Networks", 
    venue: "ACM Transactions on Knowledge Discovery from Data", 
    year: "2023", 
    url: "https://doi.org/10.1145/3565028",
    codeUrl: "https://github.com/limengran98/HGTN",
    rank: "1st Author"
  },
  { 
    title: "Inferring Student Social Links from Spatiotemporal Behavior Data via Entropy-based Analyzing Model", 
    venue: "Intelligent Data Analysis", 
    year: "2023", 
    url: "https://doi.org/10.3233/IDA-216318",
    codeUrl: null,
    rank: "1st Author"
  },

  // --- 2022 ---
  { 
    title: "SHCN: Self-supervised General Hypergraph Clustering Network", 
    venue: "IEEE BigData", 
    year: "2022", 
    url: "https://doi.org/10.1109/BigData55660.2022.10020643",
    codeUrl: "https://github.com/limengran98/SHCN",
    rank: "1st Author"
  },
  { 
    title: "Student achievement prediction using deep neural network from multi-source campus data", 
    venue: "Complex & Intelligent Systems", 
    year: "2022", 
    url: "https://doi.org/10.1007/s40747-022-00731-8",
    codeUrl: null,
    rank: "4th Author"
  },
  { 
    title: "Multi-view Hypergraph Neural Networks for Student Academic Performance Prediction", 
    venue: "Engineering Applications of Artificial Intelligence", 
    year: "2022", 
    url: "https://doi.org/10.1016/j.engappai.2022.105174",
    codeUrl: null,
    rank: "1st Author"
  }
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
  "<strong>Reviewer:</strong> IJCV, IEEE TPAMI,TNNLS, IEEE TCSS, ACM TKDD, TIST, ACM MM, AAAI, Neural Networks, Pattern Recognition, Information Fusion etc."
];
