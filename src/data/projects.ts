
import type { Project } from '@/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Knowledge Transfer and Domain Adaptation for Fine-Grained Remote Sensing Image Segmentation',
    titleZh: '知识迁移与领域适应的精细遥感图像分割',
    titleBo: 'ཤེས་བྱའི་གནས་སྤོར་དང་ཁྱབ་ཁོངས་ལ་གོམས་འདྲིས་བྱས་ནས་ཐག་རིང་ནས་ཚོར་བའི་པར་རིས་ཆ་ཤས།',
    authors: ["Shun Zhang", "Xuechao Zou", "Kai Li", "Congyan Lang", "Shiying Wang", "Pin Tao", "Tengfei Cao"],
    year: 'Dec, 2024',
    shortDescription: 'A novel end-to-end learning paradigm combining knowledge guidance with domain refinement for remote sensing image segmentation.',
    shortDescriptionZh: '一种新颖的端到端学习范式，将知识指导与领域精炼结合，用于遥感图像分割。',
    shortDescriptionBo: 'མཐའ་མའི་སློབ་སྦྱོང་དཔེ་མཚོན་གསར་པ་ཞིག ཤེས་བྱའི་ལམ་སྟོན་དང་ཁྱབ་ཁོངས་ལེགས་བཅོས་མཉམ་དུ་བྱས་པ།',
    longDescription: `Fine-grained remote sensing image segmentation is essential for accurately identifying detailed objects in remote sensing images. Recently, vision transformer models (VTMs) pre-trained on large-scale datasets have demonstrated strong zero-shot generalization. However, directly applying them to specific tasks may lead to domain shift. We introduce a novel end-to-end learning paradigm combining knowledge guidance with domain refinement to enhance performance. We present two key components: the Feature Alignment Module (FAM) and the Feature Modulation Module (FMM). FAM aligns features from a CNN-based backbone with those from the pretrained VTM's encoder using channel transformation and spatial interpolation, and transfers knowledge via KL divergence and L2 normalization constraint. FMM further adapts the knowledge to the specific domain to address domain shift. We also introduce a fine-grained grass segmentation dataset and demonstrate, through experiments on two datasets, that our method achieves a significant improvement of 2.57 mIoU on the grass dataset and 3.73 mIoU on the cloud dataset. The results highlight the potential of combining knowledge transfer and domain adaptation to overcome domain-related challenges and data limitations. `,
    longDescriptionZh: '精细遥感图像分割对于准确识别图像中细节目标至关重要。近期在大规模数据集上预训练的视觉 Transformer 模型（VTM）展现了强大的零样本泛化能力，但直接应用于特定任务可能导致领域偏移。我们提出结合知识指导与领域精炼的端到端学习范式，其中包含特征对齐模块（FAM）和特征调制模块（FMM）。FAM 通过通道变换与空间插值将 CNN 主干特征与预训练 VTM 编码器特征对齐，并利用 KL 散度和 L2 约束进行知识迁移；FMM 进一步使知识适配于具体领域以解决领域偏移。我们还构建了精细草地分割数据集，并在两个数据集上的实验表明，该方法在草地和云数据集上分别提升了 2.57 和 3.73 mIoU，显示出知识迁移与领域自适应结合的巨大潜力。',
    longDescriptionBo: 'ཐག་རིང་ནས་ཚོར་བའི་པར་རིས་དབྱེ་འབྱེད་ཀྱི་གནད་དོན་དེ་ཞིབ་ཕྲ་བརྟན་པར་སྐྱོང་བའི་ཆེད་དུ་དགོས་པ་ཡིན། གསར་བའི་ Vision Transformer དབྱེ་བ་ཆེན་པོ་ལས་པ་ཡིས་རང་སྤྱོད་སྟོན་པ་ཡོད་རུང་ དམིགས་བསལ་འགྲུལ་ལ་ཐོག་དམིགས་བསྒྲུབས་ན་ཁྱབ་ཁོངས་སྒྱུར་བའི་སྐབས་འདུག ་ ང་ཚོས་ཤེས་བྱའི་ལམ་སྟོན་དང་ཁྱབ་ཁོངས་ལྷུགས་སྒྲིལ་གཉིས་མཉམ་བསྒྲིགས་པའི་སྤྱོད་ལམ་གསར་པ་བཀོལ་དོ། FAM ནི་ CNN གཞི་རྟེན་གྱི་མཚུངས་རྟགས་དང་ VTM ཡི་འཇུག་སྐུལ་དབྱེ་ཚན་འདི་ལ་ལྡན་པར་གཏང་ KL དང་ L2 དབྱེ་བ་སྟོང་བ་བསྒྱུར་ཞིབ། FMM ནི་དེ་ཉིད་ཁྱབ་ཁོངས་དམིགས་པར་བསྒྱུར་བ་དང་མཉམ་ཐུན་བྱས་ནས་ཁྱབ་ཁོངས་སྒྱུར་དགོས་པ་འདུག ་ ང་ཚོས་གཞི་གྲངས་མཇུག་འཇུག་ཞིག་བཟོས་པས་ grass དང cloud གཉིས་ཀྱི་གཞི་གྲངས་ལ་དེབ་འགྲོས་ཞིབ་ཕྲ་ 2.57 mIoU དང་ 3.73 mIoU གཉིས་བསྒུར་ཐོབ་པ་མཐོང་བསྟན།',
    imageUrl: new URL('@/assets/imageUrl/KTDA.png', import.meta.url).href,
    imageAiHint: 'satellite segmentation',
    tags: ["Remote Sensing", "Image Segmentation", "Deep Learning", "Vision Transformer", "Domain Adaptation"],
  tagsZh: ["遥感", "图像分割", "深度学习", "视觉变压器", "域适应"],
  tagsBo: ["ཐག་རིང་ཚོར་སྣང་།", "པར་རིས་དབྱེ་འབྱེད།", "སློབ་སྦྱོང་གཏིང་ཟབ་པ།", "མཐོང་རྒྱ་བསྒྱུར་བ།", "ཁྱབ་ཁོངས་མཐུན་སྒྲིལ།"],
    status: 'Active',
    demoType: 'segmentation', // Changed to 'segmentation'
    publicationLink: 'https://xavierjiezou.github.io/KTDA/',
    researchArea: 'remote sensing image segmentation',
    repositoryLink: 'https://github.com/XavierJiezou/KTDA',
    relatedPublications: [
      { title: 'Vision Transformers for Remote Sensing: A Survey', source: 'IEEE Transactions on Geoscience and Remote Sensing, 2023', link: '#' },
      { title: 'Domain Adaptation in Semantic Segmentation', source: 'CVPR Workshop, 2022', link: '#' }
    ],
    examples: [
      new URL('@/assets/examples/ktda/4.png', import.meta.url).href,
      new URL('@/assets/examples/ktda/5.png', import.meta.url).href,
      new URL('@/assets/examples/ktda/26.png', import.meta.url).href
    ],
    route_name: "/ktda_predict"
  },
  {
    id: '2',
    title: 'Adapting Vision Foundation Models for Robust Cloud Segmentation in Remote Sensing Images',
    titleZh: '适应视觉基础模型用于遥感图像中稳健的云分割',
    titleBo: 'ཐག་རིང་ཚོར་བའི་པར་རིས་ནང་མཐོང་རྒྱ་གཞི་འཛུགས་ཀྱི་དཔེ་སྟོན།',
    authors: ['Xuechao Zou', 'Shun Zhang', 'Kai Li', 'Shiying Wang', 'Junliang Xing', 'Lei Jin', 'Congyan Lang', 'Pin Tao'],
    year: 'Nov, 2024',
    shortDescription: 'Cloud-Adapter is a lightweight and efficient cloud segmentation method that enhances pre-trained vision models to achieve top performance across diverse satellite images and scenarios.',
    shortDescriptionZh: 'Cloud-Adapter 是一种轻量高效的云分割方法，可提升预训练视觉模型在多种卫星图像和场景中的表现。',
    shortDescriptionBo: 'མཁའ་དབྱིངས་ཨ་ཌབ་ཊར་ནི་ལྗིད་ཚད་མགྱོགས་པོའི་སྤྲིན་དབྱེ་བ་ཐབས་ལམ་ཞིག་ཡིན།',
    longDescription: `Cloud segmentation is a critical challenge in remote sensing image interpretation, as its accuracy directly impacts the effectiveness of subsequent data processing and analysis. Recently, vision foundation models (VFM) have demonstrated powerful generalization capabilities across various visual tasks. In this paper, we present a parameter-efficient adaptive approach, termed Cloud-Adapter, designed to enhance the accuracy and robustness of cloud segmentation. Our method leverages a VFM pretrained on general domain data, which remains frozen, eliminating the need for additional training. Cloud-Adapter incorporates a lightweight spatial perception module that initially utilizes a convolutional neural network (ConvNet) to extract dense spatial representations. These multi-scale features are then aggregated and serve as contextual inputs to an adapting module, which modulates the frozen transformer layers within the VFM. Experimental results demonstrate that the Cloud-Adapter approach, utilizing only 0.6% of the trainable parameters of the frozen backbone, achieves substantial performance gains. Cloud-Adapter consistently achieves state-of-the-art performance across various cloud segmentation datasets from multiple satellite sources, sensor series, data processing levels, land cover scenarios, and annotation granularities.`,
    longDescriptionZh: '云分割在遥感图像解译中至关重要，其精度直接关系到后续数据处理和分析的效果。近年来，视觉基础模型（VFM）展示了卓越的泛化能力。我们提出高效的 Cloud-Adapter 方法，在保持预训练 VFM 冻结的同时，通过轻量的空间感知模块提取并融合多尺度特征，调制模型内部的 Transformer 层。实验表明，该方法仅需冻结骨干 0.6% 的可训练参数便能显著提升性能，并在多源云分割数据集上持续取得领先结果。',
    longDescriptionBo: 'སྤྲིན་དབྱེ་བ་ནི་ཐག་རིང་ཚོར་བའི་པར་རིས་འགྲེལ་བའི་དམིགས་དོན་གཅིག་རེད། སྤྱིར་བཏང་མཐོང་རྒྱ་གཞི་འཛུགས་ཡོད་པས་ Cloud-Adapter ཟེར་བའི་ཐབས་ལམ་དེས་ ConvNet ལས་མང་ཚུགས་ཁྱད་པར་འགྱོ་ཚུལ་འདོན་གྱིས་ Transformer layer འདི་བསྒྲིག་སྟངས་མཐུད། 0.6% ཙམ་གྱི་སྒྲིག་ཆས་བརྡ་སྟོན་བསྐྱར་དགོས་མེད་པས་ སྡེ་ཚན་སྣ་ཚོགས་ཀྱི་སྐྱེལ་བཤད་ལ་མཐོང་སྣ་དངོས་གྲུབ།',
    imageUrl: new URL('@/assets/imageUrl/cloud-adapter.png', import.meta.url).href,
    imageAiHint: 'text analysis',
    tags: ["Cloud segmentation", "Vision Foundation Models", "Domain Adaptation", "Fine-Tuning", "Remote Sensing Image Processing"],
  tagsZh: ["云细分", "视觉基础模型", "域适应", "微调", "遥感图像处理"],
  tagsBo: ["སྤྲིན་པའི་དབྱེ་འབྱེད།", "མཐོང་རྒྱའི་ཐེབས་རྩའི་དཔེ་སྟོན།", "ཁྱབ་ཁོངས་མཐུན་སྒྲིལ།", "ལེགས་སྒྲིག་བྱེད་པ།", "ཐག་རིང་ནས་ཚོར་ཤེས་ཀྱི་པར་རིས་ལས་སྣོན་བྱེད་པ།"],
    status: 'Completed',
    demoType: 'segmentation', // No specific interactive demo or could be text-based
    publicationLink: 'https://example.com/publication/nlp-sentiment',
    researchArea: 'Cloud segmentation',
    repositoryLink: 'https://github.com/research-group/nlp-sentiment',
    relatedPublications: [
      { title: 'Transformer Models in Sentiment Analysis: A Review', source: 'Journal of NLP, 2024', link: '#' }
    ],
    examples: [
      new URL('@/assets/examples/cloud_adapter/barren_1.png', import.meta.url).href,
      new URL('@/assets/examples/cloud_adapter/barren_2.png', import.meta.url).href,
      new URL('@/assets/examples/cloud_adapter/barren_3.png', import.meta.url).href
    ],
    route_name: "/cloud_adapter_predict"
  },
  {
    id: '3',
    title: 'LEFormer',
    titleZh: 'LEFormer',
    titleBo: 'ལེ་ཧྥོར་མར',
    authors: ['Chen Ben', 'Zou Xuechao', 'Zhang Yu', 'Li Jiayu', 'Li Kai', 'Xing, Junliang', 'Tao, Pin'],
    year: '2024',
    shortDescription: 'LEFormer is a hybrid CNN-Transformer architecture designed for accurate lake extraction from remote sensing imagery, achieving state-of-the-art performance with a lightweight model.',
    shortDescriptionZh: 'LEFormer 是一种混合 CNN-Transformer 架构，旨在精准地从遥感图像中提取湖泊，使用轻量模型达到最先进的性能。',
    shortDescriptionBo: 'ལེ་ཧྥོར་མར་ནི་ CNN དང་ Transformer མཉམ་སྦྱོར་གྱི་བཟོ་བཀོད་དང་ མཚོ་ཐོན་གཏན་འཁེལ་གྱི་ཆེད་དུ་བསྐྱར་བཞག་བྱས་པ།',
    longDescription: `LEFormer is a lightweight deep learning model designed for lake extraction from remote sensing imagery. It introduces a hybrid architecture that combines convolutional networks for local feature extraction and transformer modules for capturing global context. This design allows the model to handle complex water boundaries and noisy backgrounds effectively. By fusing the strengths of CNNs and transformers through a tailored cross-encoder fusion module, LEFormer achieves high segmentation accuracy with minimal computational cost. The model has been extensively evaluated on multiple benchmark datasets and demonstrates superior performance in both precision and efficiency compared to existing methods.`,
    longDescriptionZh: 'LEFormer 是一款面向遥感湖泊提取的轻量级模型，采用 CNN 与 Transformer 结合的架构，可同时捕获局部特征和全局上下文，能够在复杂水体边界和噪声背景下保持高精度。通过定制的交叉编码融合模块，模型在极低的计算成本下取得了优秀的分割效果，并在多个基准数据集上超越现有方法。',
    longDescriptionBo: 'LEFormer ནི་ཐག་རིང་ཚོར་བའི་པར་རིས་ནས་མཚོ་བསྡུར་དོན་ལུས་མཐུན་རིམ་གྱི་དབྱེ་འབྱེད་སྒུལ་བའི་སྦྱོར་བ་ཞིག་རེད། CNN དང Transformer མཉམ་སྦྱོར་དང་ཡུལ་ཁག་ཁྱད་པར་འགྱུར་ཞིབ་མའི་གནད་དོན་གཏོགས་པས་བཀག་ལེན་དབང་ཆེན་པོ་ཐོབ་པ་ཡིན།',
    imageUrl: 'https://picsum.photos/seed/robotics-rl/1200/600',
    imageAiHint: 'robotic arm',
    tags: ["Lake Extraction",
      "Remote Sensing",
      "Semantic Segmentation",
      "CNN-Transformer Hybrid",
      "Lightweight Model",
      "Deep Learning",
      "Computer Vision",
      "Environmental Monitoring"],
    status: 'Published',
    demoType: 'segmentation', // Could be a video or simulation link
    publicationLink: 'https://github.com/BastianChen/LEFormer',
    researchArea: "Semantic Segmentation",
    relatedPublications: [
      { title: 'Safe Exploration in Reinforcement Learning for Robotics', source: 'Robotics Today, 2023', link: '#' }
    ],
    examples: [
      new URL('@/assets/examples/leformer/0.jpg', import.meta.url).href,
      new URL('@/assets/examples/leformer/3.jpg', import.meta.url).href,
      new URL('@/assets/examples/leformer/30.jpg', import.meta.url).href
    ],
    route_name: "/leformer_predict"
  },
  {
    id: '4',
    title: 'LEPrompter',
    titleZh: 'LEPrompter',
    titleBo: 'ལེ་པུ་རོམ་པར།',
    authors: ['Chen Ben', 'Zou Xuechao', 'Li Kai', 'Zhang Yu', 'Xing, Junliang', 'Tao, Pin'],
    year: '2023',
    shortDescription: 'LEPrompter is a two-stage prompt-enhanced deep learning framework for high-fidelity lake extraction from remote sensing imagery, achieving state-of-the-art accuracy without additional computational cost.',
    shortDescriptionZh: 'LEPrompter 是一个两阶段提示增强的深度学习框架，可在遥感图像中高保真地提取湖泊，且无需额外计算成本。',
    shortDescriptionBo: 'LEPrompter ནི་རིམ་པ་གཉིས་ཀྱིས་སློབ་སྦྱོང་བསྐྱོད་པའི་སྒྲོམ་གཞི་ཞིག་ཡིན་པས་མཚོ་ཁ་གཏན་འཁེལ་གྱི་དོན་ལ་མང་ངག་བསྐྱར་བསྐྱོད་མི་དགོས།',
    longDescription: `LEPrompter is a deep learning framework designed to enhance lake extraction from remote sensing imagery through a two-stage prompt-based approach. The first stage involves generating various prompt types, such as points, boxes, and masks, to guide the model's attention to relevant regions. The second stage employs a lightweight decoder that integrates these prompts with image features to produce accurate segmentation masks. This methodology establishes a new baseline for high-fidelity lake extraction, demonstrating improved performance across multiple datasets`,
    longDescriptionZh: 'LEPrompter 通过两阶段提示策略提升遥感湖泊提取精度：第一阶段生成点、框、掩码等提示以引导模型关注关键区域，第二阶段使用轻量解码器融合提示与图像特征，得到精确的分割结果。该框架在多个数据集上均取得了显著提升，为高保真湖泊提取设立了新的基准。',
    longDescriptionBo: 'LEPrompter ནི་ཐག་རིང་ཚོར་བའི་པར་རིས་ནང་མཚོ་དབྱེ་འབྱེད་ལས་འཕེལ་བའི་སྦྱོར་བ་གཉིས་རིམ་གྱི་སྐོར་ལས་དགའ་བསྐུར་དང་པོར་ཐག་གཅིག་གི་ཁྱད་ཆོས་བསྐྱར་བསྐྱོད་དང་ གཉིས་པར་དབྱེ་མཚམས་སླར་ལེགས་བཟོས་ནས་ངེས་པར་དབྱེ་འབྱེད་མཚམས་བཟོའི་འགྲུབ་འབྲས་གསལ་བཤད་བྱེད།',
    imageUrl: 'https://picsum.photos/seed/robotics-rl/1200/600',
    imageAiHint: 'robotic arm',
    tags: ["Lake Extraction",
      "Remote Sensing",
      "Semantic Segmentation",
      "Prompt Learning",
      "Deep Learning",
      "Computer Vision",
      "Environmental Monitoring"],
    status: 'Published',
    demoType: 'segmentation', // Could be a video or simulation link
    publicationLink: 'https://github.com/BastianChen/LEPrompter',
    researchArea: "Remote Sensing Image Processing",
    relatedPublications: [
      { title: 'Safe Exploration in Reinforcement Learning for Robotics', source: 'Robotics Today, 2023', link: '#' }
    ],
    examples: [
      new URL('@/assets/examples/leformer/0.jpg', import.meta.url).href,
      new URL('@/assets/examples/leformer/3.jpg', import.meta.url).href,
      new URL('@/assets/examples/leformer/30.jpg', import.meta.url).href
    ],
    route_name: "/leprompter_predict"
  },
  {
    id: '5',
    title: 'Quantum Machine Learning Algorithms',
    titleZh: '量子机器学习算法',
    titleBo: 'ཚད་རྡུལ་འཕྲུལ་ཆས་ཀྱི་སློབ་སྦྱོང་གི་རྩིས་རིགས།',
    authors: ['Dr. Grace Yellow', 'Henry Purple'],
    year: 'September 10, 2023',
    shortDescription: 'Exploring the intersection of quantum computing and machine learning to develop novel algorithms.',
    shortDescriptionZh: '探索量子计算与机器学习的交叉以开发新算法。',
    shortDescriptionBo: 'ཚད་གཞིའི་རྩིས་འཁོར་དང་འཕྲུལ་ཆས་སློབ་སྦྱོང་གི་མཐུད་མཚམས་འཚོལ་ཞིབ།',
    longDescription: `This project investigates how quantum phenomena, such as superposition and entanglement, can be harnessed to speed up machine learning tasks or solve problems intractable for classical computers. We are designing and simulating quantum algorithms for optimization (e.g., QAOA, VQE), classification (e.g., quantum SVMs), and generative modeling (e.g., quantum GANs). The research involves theoretical development, quantum circuit design, and simulation on quantum computing platforms (e.g., Qiskit, Cirq). We are preparing for the era of fault-tolerant quantum computers while also exploring applications for noisy intermediate-scale quantum (NISQ) devices. Potential impacts on drug discovery, materials science, and financial modeling are considered.`,
    longDescriptionZh: '该项目研究如何利用量子叠加和纠缠等现象加速机器学习任务或解决经典计算机难以处理的问题。我们正在设计并模拟面向优化、分类和生成建模的量子算法，并在 Qiskit、Cirq 等平台上验证。研究涵盖理论发展、量子线路设计与模拟，既着眼未来的容错量子计算，也探索当前 NISQ 设备的应用，对药物研发、材料科学和金融建模等领域具有潜在影响。',
    longDescriptionBo: 'འདི་ནི་ཚད་རྡུལ་འཕྲུལ་ཆས་ཀྱི་རིགས་སྐུལ་དང་སྣོད་ལུས་སྤྱོད་པ་སྦྱོར་བ་བསྐུར་བའི་གནད་དོན་ཡིན། QAOA དང VQE ལམ་སྟོན་མཐའ་དཔེ་སོགས་ཐད་འབྱོར་དང་ SVM, GAN སོགས་ཀྱི་ལག་ཐབས་གསར་བཟོ་ནས་ Qiskit དང་ Cirq གཉིས་སྤྱོད་ན་དོན་མཐུན་འབྱེད། འདིས་སྤུས་ཚད་མཇུག་མིན་གཅིག་ནས་འཕྲལ་བ་ལས་ལུས་མེད་པའི་གྲུབ་འབྲས་མཛད་གཏམ་ཐོག་མར་བསྒོ་འབད་དོ།',
    imageUrl: 'https://picsum.photos/seed/quantum-ml/1200/600',
    imageAiHint: 'quantum circuit',
    tags: ["Quantum Computing", "Machine Learning", "AI", "Algorithms", "QML"],
  tagsZh: ["量子计算", "机器学习", "人工智能", "算法", "QML"],
  tagsBo: ["ཚད་རྡུལ་རྩིས་རིག་པ།", "འཕྲུལ་ཆས་སློབ་སྦྱོང་།", "AII", "རྩིས་རིགས།", "QML"],
    status: 'Ongoing',
    demoType: 'mnist', // Changed this project to use mnist for variety
    researchArea: 'Quantum Computing',
  }
];
