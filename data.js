// Profile data. Keep manuscript titles, authors, and publication status source-verified.
// Run `node build.mjs` after editing; GitHub Actions also rebuilds on every push.

// 1. News
const newsData = [
  {
    "date": "2026.9",
    "content": "Awarded the <strong>National Scholarship</strong> for Ph.D. Students, and the <strong>Presidential Scholarship</strong> of Sun Yat-sen University."
  },
  {
    "date": "2026.08",
    "content": "One collaborative paper accepted by <strong>IEEE TNNLS</strong>."
  },
  {
    "date": "2026.08",
    "content": "Two papers accepted by <strong>Renewable Energy</strong>, including one as corresponding author and one collaborative work."
  },
  {
    "date": "2026.07",
    "content": "One paper accepted by <strong>IEEE/CAA Journal of Automatica Sinica</strong>."
  },
  {
    "date": "2026.05",
    "content": "Recognized as a <strong>Gold Reviewer</strong> for <strong>ICML 2026</strong>."
  },
  {
    "date": "2026.05",
    "content": "One collaborative paper accepted by <strong>ICML 2026</strong>."
  },
  {
    "date": "2026.03",
    "content": "One paper accepted by <strong>IEEE TCYB</strong>."
  },
  {
    "date": "2026.03",
    "content": "One paper accepted by <strong>IEEE TNNLS</strong>."
  },
  {
    "date": "2026.01",
    "content": "Presented our work as an <strong>Oral Presentation</strong> at <strong>AAAI 2026</strong> in Singapore: <a href='https://underline.io/lecture/139636-learning-cell-aware-hierarchical-multi-modal-representations-for-robust-molecular-modeling' target='_blank' class='text-primary hover:underline font-medium'>Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling</a>."
  },
  {
    "date": "2025.12",
    "content": "One paper accepted by <strong>Pattern Recognition (PR)</strong>."
  },
  {
    "date": "2025.12",
    "content": "Two collaborative papers were accepted by <strong>Nature Communications</strong> and <strong>Communications Biology</strong>, respectively."
  },
  {
    "date": "2025.12",
    "content": "Research reported by media: <a href='https://mp.weixin.qq.com/s/iC9xO-69NZXqvNLymqaIBA' target='_blank' class='text-primary hover:underline font-medium'>Analysis of CHMR Framework</a>."
  },
  {
    "date": "2025.11",
    "content": "One paper accepted by <strong>AAAI 2025 (Oral)</strong>."
  },
  {
    "date": "2025.10",
    "content": "Awarded the <strong>National Scholarship</strong> for Ph.D. Students."
  },
  {
    "date": "2025.10",
    "content": "Awarded the <strong>Presidential Scholarship</strong> of Sun Yat-sen University."
  },
  {
    "date": "2025.09",
    "content": "Two papers (<em>Redundancy Is Not What You Need...</em> and <em>SCAE...</em>) selected as <strong>ESI Highly Cited Papers</strong>."
  },
  {
    "date": "2025.09",
    "content": "One survey paper on Graph LLMs accepted by <strong>Expert Systems with Applications (ESWA)</strong>."
  },
  {
    "date": "2025.03",
    "content": "Awarded the SYSU Hong Kong/Macau Exchange Funding. Joint training at <strong>Westlake University</strong> and <strong>CAIR, HK</strong> (Supervisor: <a href='https://en.westlake.edu.cn/faculty/stan-zq-li.html' target='_blank' class='text-primary hover:underline'>Prof. Stan Z. Li</a>, <a href='https://people.ucas.ac.cn/~zlei?language=en' target='_blank' class='text-primary hover:underline'>Prof. Zhen Lei</a> and <a href='https://www.cs.rochester.edu/u/jluo/' target='_blank' class='text-primary hover:underline'>Prof. Jiebo Luo</a>)."
  }
];

// 2. Selected Publications (代表作)
const selectedWorks = [
  {
    "id": "morphosuff",
    "shortName": "MorphoSuff",
    "title": "When label-free morphology is sufficient for targeted cellular measurements",
    "authors": "Mengran Li, Jianqing Zhu, Bo Li, Chengyang Zhang, Zhenchao Tang, Jiaying Wang, Wenbin Xing, Boyu Zhang, Jinfeng Xu, Lingbei Meng, Bob Zhang, Junzhou Chen, Ronghui Zhang, Lian Zhang, Jinchao Xu",
    "venue": "Preprint · 2026",
    "desc": "A measurement-sufficiency framework that tests when inferred cellular readouts preserve perturbation responses, experimental priorities, and biological conclusions.",
    "img": "images/morphosuff.webp",
    "paperUrl": "https://limengran98.github.io/MorphoSuff/assets/manuscript.pdf",
    "projectUrl": "https://limengran98.github.io/MorphoSuff/",
    "codeUrl": "https://github.com/limengran98/MorphoSuff",
    "tags": [
      "Cell Morphology",
      "Measurement Sufficiency",
      "Experimental Design"
    ],
    "bibtex": "@misc{li2026morphosuff,\n  title = {When label-free morphology is sufficient for targeted cellular measurements},\n  author = {Li, Mengran and Zhu, Jianqing and Li, Bo and Zhang, Chengyang and Tang, Zhenchao and Wang, Jiaying and Xing, Wenbin and Zhang, Boyu and Xu, Jinfeng and Meng, Lingbei and Zhang, Bob and Chen, Junzhou and Zhang, Ronghui and Zhang, Lian and Xu, Jinchao},\n  year = {2026},\n  note = {Preprint},\n  url = {https://limengran98.github.io/MorphoSuff/}\n}"
  },
  {
    "id": "cellscientist",
    "shortName": "CellScientist",
    "title": "CellScientist: From Execution Feedback to Auditable Model-Revision Trajectories for Cellular Perturbation Prediction",
    "authors": "Mengran Li, Bo Li, Jiaying Wang, Wenbin Xing, Chengyang Zhang, Jinlin Wu, Zhen Lei, Jiebo Luo, Stan Z. Li, Zelin Zang",
    "venue": "Preprint · 2026",
    "desc": "CellScientist converts execution and validation feedback into local model revisions under a fixed task contract, preserving successful updates, regressions, rejected candidates, and failures as auditable trajectories for cellular perturbation prediction across morphological, transcriptomic, and single-cell response spaces.",
    "img": "images/cellscientist.webp",
    "paperUrl": "https://limengran98.github.io/CellScientist/assets/CellScientist.pdf",
    "projectUrl": "https://limengran98.github.io/CellScientist/",
    "codeUrl": "https://github.com/limengran98/CellScientist",
    "tags": [
      "AI for Science",
      "Model Revision",
      "Perturbation Prediction"
    ],
    "bibtex": "@misc{li2026cellscientist,\n  title = {{CellScientist}: From Execution Feedback to Auditable Model-Revision Trajectories for Cellular Perturbation Prediction},\n  author = {Li, Mengran and Li, Bo and Wang, Jiaying and Xing, Wenbin and Zhang, Chengyang and Wu, Jinlin and Lei, Zhen and Luo, Jiebo and Li, Stan Z. and Zang, Zelin},\n  year = {2026},\n  note = {Preprint},\n  url = {https://limengran98.github.io/CellScientist/}\n}"
  },
  {
    "id": "cellaudit",
    "shortName": "CellAudit",
    "title": "Discover, Falsify, Revise: Auditing Input-Use Claims from Source Code to Predictive Contribution in Agent-Discovered Cell Models",
    "authors": "Mengran Li, Bo Li, Chengyang Zhang, Yang Yan, Jinfeng Xu, Zhenchao Tang",
    "venue": "Preprint · 2026",
    "desc": "CellAudit traces input-use claims from source code to fitted-model dependence and target-relevant predictive contribution, revealing when strong cellular-response prediction masks unused perturbation inputs and using falsification evidence to guide model revision and test claim generalization across independently acquired cohorts.",
    "img": "images/cellaudit.webp",
    "paperUrl": "https://limengran98.github.io/CellAudit/assets/CellAudit.pdf",
    "projectUrl": "https://limengran98.github.io/CellAudit/",
    "codeUrl": "https://github.com/limengran98/CellAudit",
    "tags": [
      "AI for Science",
      "Model Auditing",
      "Perturbation Prediction"
    ],
    "bibtex": "@misc{li2026cellaudit,\n  title = {Discover, Falsify, Revise: Auditing Input-Use Claims from Source Code to Predictive Contribution in Agent-Discovered Cell Models},\n  author = {Li, Mengran and Li, Bo and Zhang, Chengyang and Yan, Yang and Xu, Jinfeng and Tang, Zhenchao},\n  year = {2026},\n  note = {Preprint},\n  url = {https://limengran98.github.io/CellAudit/}\n}"
  },
  {
    "id": "arb",
    "title": "AttriReBoost: A Gradient-Free Propagation Optimization Method for Cold-Start Mitigation in Attribute Missing Graphs",
    "venue": "IEEE Transactions on Cybernetics (IEEE TCYB 2026)",
    "authors": "Mengran Li, Chaojun Ding, Junzhou Chen, Wenbin Xing, Cong Ye, Ronghui Zhang, Songlin Zhuang, Jia Hu, Tony Z. Qiu, Huijun Gao",
    "desc": "We propose ARB, a gradient-free propagation framework for attribute-missing graphs that mitigates cold-start via boundary redefinition and virtual edges, achieving accurate reconstruction with strong scalability.",
    "img": "./images/arb.png",
    "paperUrl": "https://doi.org/10.1109/TCYB.2026.3681613",
    "codeUrl": "https://github.com/limengran98/ARB",
    "tags": [
      "Graph Learning",
      "Missing Data",
      "Cold-Start",
      "Propagation"
    ],
    "bibtex": "@article{li2026attriboost,\n  title={AttriReBoost: A Gradient-Free Propagation Optimization Method for Cold-Start Mitigation in Attribute Missing Graphs},\n  author={Li, Mengran and Ding, Chaojun and Chen, Junzhou and Xing, Wenbin and Ye, Cong and Zhang, Ronghui and Zhuang, Songlin and Hu, Jia and Qiu, Tony Z. and Gao, Huijun},\n  journal={IEEE Transactions on Cybernetics},\n  year={2026}\n}"
  },
  {
    "id": "app",
    "title": "Adaptive Prototype-Guided Personalized Propagation for Heterophilic Graphs With Missing Data",
    "venue": "IEEE TNNLS 2026",
    "authors": "Mengran Li, Wenbin Xing, Zelin Zang, Bo Li, Chengyang Zhang, Yong Zhang, Junzhou Chen, Ronghui Zhang, Yongfu Li, Chuan Hu, Xiaolei Ma, Zibin Zheng",
    "desc": "We propose APP, a unified framework for learning on heterophilic graphs with missing features. By introducing global semantic prototypes, virtual edge propagation, and adaptive fusion, APP jointly addresses propagation distortion and feature imputation, achieving robust performance under the challenging heterophily-missing coupling (HMC) setting.",
    "img": "./images/app.png",
    "paperUrl": "https://doi.org/10.1109/TNNLS.2026.3676197",
    "codeUrl": "https://github.com/limengran98/APP",
    "tags": [
      "Graph Learning",
      "Missing Data",
      "Heterophily"
    ],
    "bibtex": "@article{li2026adaptive,\n  title={Adaptive Prototype-Guided Personalized Propagation for Heterophilic Graphs With Missing Data},\n  author={Li, Mengran and Xing, Wenbin and Zang, Zelin and Li, Bo and Zhang, Chengyang and Zhang, Yong and Chen, Junzhou and Zhang, Ronghui and Li, Yongfu and Hu, Chuan and Ma, Xiaolei and Zheng, Zibin},\n  journal={IEEE Transactions on Neural Networks and Learning Systems},\n  year={2026}\n}"
  },
  {
    "id": "chmr",
    "title": "Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling",
    "venue": "AAAI 2026 (Oral)",
    "authors": "Mengran Li, Zelin Zang, Wenbin Xing, Junzhou Chen, Ronghui Zhang, Jiebo Luo, Stan Z. Li",
    "desc": "We propose CHMR, a framework that jointly models local-global dependencies between molecules and cellular responses. By using a tree-structured vector quantization, we capture latent biological hierarchies, significantly improving molecular property prediction.",
    "img": "./images/CHMR.png",
    "paperUrl": "https://arxiv.org/abs/2511.21120",
    "codeUrl": "https://github.com/limengran98/CHMR",
    "tags": [
      "AI for Science",
      "Molecular Modeling"
    ],
    "bibtex": "@inproceedings{li2026learning,\n  title={Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling},\n  author={Li, Mengran and Zang, Zelin and Xing, Wenbin and Chen, Junzhou and Zhang, Ronghui and Luo, Jiebo and Li, Stan Z},\n  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},\n  volume={40},\n  number={1},\n  pages={623--631},\n  year={2026}\n}"
  }
];

// 3. Full Publications
const fullPublications = [
  {
    "title": "When label-free morphology is sufficient for targeted cellular measurements",
    "venue": "Preprint",
    "year": "2026",
    "url": "https://limengran98.github.io/MorphoSuff/assets/manuscript.pdf",
    "projectUrl": "https://limengran98.github.io/MorphoSuff/",
    "codeUrl": "https://github.com/limengran98/MorphoSuff",
    "rank": "Co-first Author",
    "type": "preprint",
    "tags": [
      "Cell Morphology",
      "Measurement Sufficiency",
      "Experimental Design"
    ]
  },
  {
    "title": "CellScientist: From Execution Feedback to Auditable Model-Revision Trajectories for Cellular Perturbation Prediction",
    "venue": "Preprint",
    "year": "2026",
    "url": "https://limengran98.github.io/CellScientist/assets/CellScientist.pdf",
    "projectUrl": "https://limengran98.github.io/CellScientist/",
    "codeUrl": "https://github.com/limengran98/CellScientist",
    "rank": "Co-first Author",
    "type": "preprint",
    "tags": [
      "AI for Science",
      "Model Revision",
      "Perturbation Prediction"
    ]
  },
  {
    "title": "Discover, Falsify, Revise: Auditing Input-Use Claims from Source Code to Predictive Contribution in Agent-Discovered Cell Models",
    "venue": "Preprint",
    "year": "2026",
    "url": "https://limengran98.github.io/CellAudit/assets/CellAudit.pdf",
    "projectUrl": "https://limengran98.github.io/CellAudit/",
    "codeUrl": "https://github.com/limengran98/CellAudit",
    "rank": "1st Author",
    "type": "preprint",
    "tags": [
      "AI for Science",
      "Model Auditing",
      "Perturbation Prediction"
    ]
  },
  {
    "title": "SFAR: Semantic Fusion Attribute Recovery for Text Attribute Missing Graphs via Large Language Model Knowledge Generalization",
    "venue": "IEEE/CAA Journal of Automatica Sinica",
    "year": "2026",
    "url": "",
    "codeUrl": "https://github.com/limengran98/SFAR",
    "rank": "1st Author"
  },
  {
    "title": "Attrireboost: A gradient-free propagation optimization method for cold start mitigation in attribute missing graphs",
    "venue": "IEEE Transactions on Cybernetics",
    "year": "2026",
    "url": "https://doi.org/10.1109/TCYB.2026.3681613",
    "codeUrl": "https://github.com/limengran98/ARB",
    "rank": "1st Author"
  },
  {
    "title": "Adaptive Prototype-guided Personalized Propagation for Heterophilic Graphs with Missing Data",
    "venue": "IEEE Transactions on Neural Networks and Learning Systems",
    "year": "2026",
    "url": "https://doi.org/10.1109/TNNLS.2026.3676197",
    "codeUrl": "https://github.com/limengran98/APP",
    "rank": "1st Author"
  },
  {
    "title": "Learning Cell-Aware Hierarchical Multi-Modal Representations for Robust Molecular Modeling",
    "venue": "AAAI",
    "year": "2026",
    "url": "https://arxiv.org/abs/2511.21120",
    "codeUrl": "https://github.com/limengran98/CHMR",
    "rank": "1st Author"
  },
  {
    "title": "MORSE: Molecular Representation Learning via Structured Semantic Extraction across Hierarchical and Asymmetric Biological Modalities",
    "venue": "Pattern Recognition",
    "year": "2025",
    "url": "https://doi.org/10.1016/j.patcog.2025.112975",
    "codeUrl": "",
    "rank": "2th Author",
    "corr": false
  },
  {
    "title": "PhenoProfiler: advancing phenotypic learning for image-based drug discovery",
    "venue": "Nature Communications",
    "year": "2025",
    "url": "https://doi.org/10.1038/s41467-025-67479-w",
    "codeUrl": "https://github.com/QSong-github/PhenoProfiler",
    "rank": "8th Author"
  },
  {
    "title": "Hypergraph-driven spatial multimodal fusion for precise domain delineation and tumor microenvironment decoding",
    "venue": "Communications Biology",
    "year": "2025",
    "url": "https://doi.org/10.1038/s42003-025-09312-0",
    "codeUrl": "https://github.com/VitaIntelli-CQU/HAST",
    "rank": "5th Author"
  },
  {
    "title": "A Survey of Large Language Models for Data Challenges in Graphs",
    "venue": "Expert Systems with Applications",
    "year": "2025",
    "url": "https://doi.org/10.1016/j.eswa.2025.129643",
    "codeUrl": "https://github.com/limengran98/Awesome-Literature-Graph-Learning-Challenges",
    "rank": "1st Author"
  },
  {
    "title": "Mdvt: Enhancing multimodal recommendation with model-agnostic multimodal-driven virtual triplets",
    "venue": "ACM SIGKDD",
    "year": "2025",
    "url": "https://doi.org/10.1145/3711896.3737042",
    "codeUrl": "https://github.com/Jinfeng-Xu/MDVT",
    "rank": "7th Author"
  },
  {
    "title": "Redundancy Is Not What You Need: An Embedding Fusion Graph Auto-Encoder for Self-Supervised Graph Representation Learning",
    "venue": "IEEE Transactions on Neural Networks and Learning Systems",
    "year": "2025",
    "url": "https://doi.org/10.1109/TNNLS.2024.3357080",
    "codeUrl": null,
    "rank": "1st Author"
  },
  {
    "title": "TDG-Mamba: Advanced Spatiotemporal Embedding for Temporal Dynamic Graph Learning via Bidirectional Information Propagation",
    "venue": "IEEE Transactions on Computational Social Systems",
    "year": "2025",
    "url": "https://doi.org/10.1109/TCSS.2024.3509399",
    "codeUrl": "https://github.com/limengran98/TDG-Mamba",
    "rank": "1st Author"
  },
  {
    "title": "Topology-Driven Attribute Recovery for Attribute Missing Graph Learning in Social Internet of Things",
    "venue": "IEEE Internet of Things Journal",
    "year": "2025",
    "url": "https://doi.org/10.1109/JIOT.2025.3531985",
    "codeUrl": "https://github.com/limengran98/TDAR",
    "rank": "1st Author"
  },
  {
    "title": "ElaD-Net: An Elastic Semantic Decoupling Network for Lesion Segmentation in Breast Ultrasound Images",
    "venue": "IJCAI",
    "year": "2025",
    "url": "https://doi.org/10.24963/ijcai.2025/235",
    "codeUrl": null,
    "rank": "5th Author"
  },
  {
    "title": "A Two-Stage Method for Specular Highlight Detection and Removal in Medical Images",
    "venue": "MICCAI",
    "year": "2025",
    "url": "https://link.springer.com/chapter/10.1007/978-3-032-05127-1_3",
    "codeUrl": "https://github.com/tkllndxn/highlight-removal",
    "rank": "8th Author"
  },
  {
    "title": "Effective Finite Time Stability Control for Human–Machine Shared Vehicle Following System",
    "venue": "IEEE Transactions on Intelligent Transportation Systems",
    "year": "2025",
    "url": "https://doi.org/10.1109/TITS.2025.3619092",
    "codeUrl": null,
    "rank": "2nd Author"
  },
  {
    "title": "MM-STFlowNet: A Transportation Hub-Oriented Multi-Mode Passenger Flow Prediction Method via Spatial-Temporal Dynamic Graph Modeling",
    "venue": "IEEE Transactions on Intelligent Transportation Systems",
    "year": "2025",
    "url": "https://doi.org/10.1109/TITS.2025.3588867",
    "codeUrl": "https://github.com/BMRETURN/MM-STFlowNet",
    "rank": "3rd Author"
  },
  {
    "title": "Ms-AeDNet: A multi-scale attention-enhanced dynamic network for multi-step performance prediction of hydrogen proton exchange membrane fuel cells",
    "venue": "Process Safety and Environmental Protection",
    "year": "2025",
    "url": "https://doi.org/10.1016/j.psep.2025.107674",
    "codeUrl": "https://github.com/BMRETURN/Ms-AeDNet",
    "rank": "1st Author"
  },
  {
    "title": "TAS-TsC: A data-driven framework for Estimating Time of Arrival using Temporal-Attribute-Spatial Tri-space Coordination of truck trajectories",
    "venue": "Applied Soft Computing",
    "year": "2025",
    "url": "https://doi.org/10.1016/j.asoc.2025.113214",
    "codeUrl": null,
    "rank": "1st Author"
  },
  {
    "title": "Self-Supervised Nodes-Hyperedges Embedding for Heterogeneous Information Network Learning",
    "venue": "IEEE Transactions on Big Data",
    "year": "2024",
    "url": "https://doi.org/10.1109/TBDATA.2023.3275374",
    "codeUrl": "https://github.com/limengran98/SNHE",
    "rank": "1st Author"
  },
  {
    "title": "CSAT: Contrastive Sampling-Aggregating Transformer for Community Detection in Attribute-Missing Networks",
    "venue": "IEEE Transactions on Computational Social Systems",
    "year": "2024",
    "url": "https://doi.org/10.1109/TCSS.2023.3292145",
    "codeUrl": null,
    "rank": "1st Author"
  },
  {
    "title": "SCAE: Structural Contrastive Auto-encoder for Incomplete Multi-view Representation Learning",
    "venue": "ACM Transactions on Multimedia Computing, Communications and Applications",
    "year": "2024",
    "url": "https://doi.org/10.1145/3672078",
    "codeUrl": "https://github.com/limengran98/SCAE",
    "rank": "1st Author"
  },
  {
    "title": "Contextual Semantics Interaction Graph Embedding Learning for Recommender Systems",
    "venue": "IEEE Transactions on Computational Social Systems",
    "year": "2024",
    "url": "https://doi.org/10.1109/TCSS.2024.3394701",
    "codeUrl": null,
    "rank": "3rd Author"
  },
  {
    "title": "Gene Expression Prediction from Histology Images via Hypergraph Neural Networks",
    "venue": "Briefings in Bioinformatics",
    "year": "2024",
    "url": "https://academic.oup.com/bib/article/25/6/bbae500/7937248",
    "codeUrl": "https://github.com/QSong-github/HGGEP",
    "rank": "5th Author"
  },
  {
    "title": "Hypergraph Transformer Neural Networks",
    "venue": "ACM Transactions on Knowledge Discovery from Data",
    "year": "2023",
    "url": "https://doi.org/10.1145/3565028",
    "codeUrl": "https://github.com/limengran98/HGTN",
    "rank": "1st Author"
  },
  {
    "title": "Inferring Student Social Links from Spatiotemporal Behavior Data via Entropy-based Analyzing Model",
    "venue": "Intelligent Data Analysis",
    "year": "2023",
    "url": "https://doi.org/10.3233/IDA-216318",
    "codeUrl": null,
    "rank": "1st Author"
  },
  {
    "title": "SHCN: Self-supervised General Hypergraph Clustering Network",
    "venue": "IEEE BigData",
    "year": "2022",
    "url": "https://doi.org/10.1109/BigData55660.2022.10020643",
    "codeUrl": "https://github.com/limengran98/SHCN",
    "rank": "1st Author"
  },
  {
    "title": "Student achievement prediction using deep neural network from multi-source campus data",
    "venue": "Complex & Intelligent Systems",
    "year": "2022",
    "url": "https://doi.org/10.1007/s40747-022-00731-8",
    "codeUrl": null,
    "rank": "4th Author"
  },
  {
    "title": "Multi-view Hypergraph Neural Networks for Student Academic Performance Prediction",
    "venue": "Engineering Applications of Artificial Intelligence",
    "year": "2022",
    "url": "https://doi.org/10.1016/j.engappai.2022.105174",
    "codeUrl": null,
    "rank": "1st Author"
  }
];

// 4. Awards
const awardsData = [
  "<strong>National Scholarship</strong> (2025, 2022)",
  "Presidential Scholarship, SYSU (2025)",
  "Outstanding Master's Thesis, BJUT (2023)",
  "Xiaomi Special Award (Top 10), BJUT (2022)"
];

// 5. Service
const serviceData = [
  "<strong>Reviewer:</strong> IJCV, ICML, AAAI, ACM MM; IEEE TPAMI, TNNLS, TKDE, TCSS; ACM TKDD, TOIS; Pattern Recognition, Information Fusion etc."
];
