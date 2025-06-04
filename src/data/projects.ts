
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
    imageUrl: new URL('@/assets/imageUrl/KTDA.png', import.meta.url).href,
    imageAiHint: 'satellite segmentation',
    tags: ['Remote Sensing', 'Image Segmentation', 'Deep Learning', 'Vision Transformer', 'Domain Adaptation'],
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
    imageUrl: new URL('@/assets/imageUrl/cloud-adapter.png', import.meta.url).href,
    imageAiHint: 'text analysis',
    tags: ['Cloud segmentation', 'Vision Foundation Models', 'Domain Adaptation', 'Fine-Tuning', 'Remote Sensing Image Processing'],
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
    imageUrl: 'https://picsum.photos/seed/quantum-ml/1200/600',
    imageAiHint: 'quantum circuit',
    tags: ['Quantum Computing', 'Machine Learning', 'AI', 'Algorithms', 'QML'],
    status: 'Ongoing',
    demoType: 'mnist', // Changed this project to use mnist for variety
    researchArea: 'Quantum Computing',
  }
];
