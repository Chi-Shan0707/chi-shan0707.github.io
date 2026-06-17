---
permalink: /zh/
title: "Do interesting things"
author_profile: true
redirect_from:
  - /zh/about/
  - /zh/about.html
---

<div style="text-align:right; margin-bottom:0.8rem;">
   <a href="{{ '/' | relative_url }}" style="font-size:0.9rem;">English</a>
</div>

## Basic Info

***
- China - Shanghai
- GitHub: [Chi-Shan0707](https://github.com/Chi-Shan0707)


我目前就读于复旦大学数学科学学院，修读信息与计算科学及人工智能双学位。<br>
同时，我一直在积极自学计算机科学领域的各种有趣课题。<br>
我在探索自己真正想要从事和研究的交叉方向。<br>
做对人类有益的事。<br>


## My research interests

目前，我正在探索大模型与**序列决策（sequential decision-making）**中“智能涌现”的数理基础。更具体地说，面对关于 AI 信任的探讨，我不满足于模糊的哲学思辨，而是希望建立在**数理解释性（mathematical interpretability）**的根基之上，并通过**强化学习（Reinforcement Learning）**相关方法去进一步深入。<br>
我的motivation，参见 [plan](/plan/) 页面。


## My featured works

我喜欢构建小而完整的研究系统：从一个问题出发，整理数据或 artifact，写出能运行的代码，再用文档把有效之处和失败模式都交代清楚。相比把结论说大，我更希望项目本身可以被检查。

***

### [token-verification-mirage](https://github.com/Chi-Shan0707/token-verification-mirage)

**对 LLM 数学推理中 token-level verification 信号的受控评估。**  
[ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/) 的 workshop poster。

<details>
<summary>概述</summary>

这个项目研究 entropy、log-probability、confidence trajectory 等浅层 token 信号，能否在不额外调用模型的情况下区分数学推理轨迹的正确与错误。它不是提出一个新的 verifier，而是审计这些信号的表观效果有多少来自评估协议。

在 MATH 与 BigMath、Qwen 与 Llama 的实验中，global pooling、in-sample scoring、direction-agnostic AUROC 等协议选择可以使 AUROC 变化最高约 0.18。Final-token entropy 在 direction-agnostic AUROC 下达到 0.72--0.75，但在 fixed-direction evaluation 下下降到 0.47--0.48。

**Takeaway：** 浅层 token 统计可以作为诊断信号，但如果没有 within-problem evaluation、fixed-direction baseline 和 permutation-null calibration，就不应被直接视为稳定的独立 verifier。

链接：[代码](https://github.com/Chi-Shan0707/token-verification-mirage) · [Workshop](https://ai4math2026.github.io/)

</details>

### [code-not-text](https://github.com/Chi-Shan0707/code-not-text)

**手工 CoT 表面特征的跨领域行为。** [交互式 demo](https://chi-shan0707.github.io/code-not-text/demo/)

<details>
<summary>概述</summary>

这个项目研究推理轨迹中的手工特征——token 置信度、轨迹连续性、反思次数、新颖性等——在不同领域中是否能预测正确性。在一个实验设置中，同一组特征在数学上较强，在科学问答中较窄，在代码任务中较弱：

*数学 (AIME, HMMT)：AoA 0.958*  
*科学 (GPQA)：AoA 0.799*  
*编程 (LiveCodeBench)：AoA 0.434*

我把它理解为一个 measurement 问题，而不是一个普遍否定结论：这些特征在数学中可能捕捉到有用的推理动态，但代码正确性更直接依赖可执行行为。项目包含交互式 demo，以及围绕特征族和跨领域迁移的消融实验。

链接：[代码](https://github.com/Chi-Shan0707/code-not-text) · [demo](https://chi-shan0707.github.io/code-not-text/demo/)

</details>

### [TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)

**面向代码生成的小参数适配与强化学习训练管线。**

<details>
<summary>概述</summary>

这是一个受 [Learning to Reason in 13 Parameters](https://arxiv.org/abs/2602.04118) 启发的独立开源复现与适配项目，从数学推理迁移到可验证的竞技编程代码生成。项目基于 Qwen2.5-Coder-3B，使用很少的共享可训练参数，并采用真实编译运行奖励而非静态启发式。

这个项目对我的主要价值是完整走通一个 research system：数据处理、训练、多 GPU 配置、奖励设计、评估与验证。它更像一个系统构建项目，而不是声称解决了代码推理问题。

</details>

### [microgpt.cpp](https://github.com/Chi-Shan0707/microgpt.cpp)

**从第一性原理出发，用 C++ 实现的极简 GPT。**

<details>
<summary>概述</summary>

一个用于理解 transformer 内部机制的紧凑 C++ 实现，不依赖高层深度学习框架。目标是把数据流、张量操作和模型组件写得足够显式，便于检查和修改。

</details>

### [SVDomain](https://github.com/Chi-Shan0707/SVDomain)

**面向 chain-of-thought 特征的领域条件低秩分析。**

<details>
<summary>概述</summary>

SVDomain 从 token 级置信度与不确定性统计、轨迹摘要和可用性指标构建特征视图，并通过轻量线性读出学习共享的低秩表示。

- 标准流程：StandardScaler → TruncatedSVD → LogisticRegression
- 下游任务：early stopping、Best-of-N bridging、checkpoint ranking
- 重点：低秩结构何时具有预测性、基如何在不同锚点间迁移，以及一个表示如何同时支持预测与解释

该项目为合作完成。合作者提供了元级原始数据基础；我提出框架，设计并运行实验，并完成验证。

</details>

***


## Service

学术服务与审稿工作。

   1. [ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/) <br>
      Reviewer, ICML 2026 Workshop on AI for Math (AI4Math), 2026。

## Community Involvement

除了个人项目之外，我也参与面向社区的公益性开源工作。

   1. [github-unflag-playbook-cn](https://github.com/Chi-Shan0707/github-unflag-playbook-cn) <br>
      [查看 **网站** 这里 ~~~](https://chi-shan0707.github.io/github-unflag-playbook-cn/)<br>
      面向中国大陆开发者的 GitHub 账号 flagged / hidden 自救手册与案例档案，系统整理申诉流程与案例。
   2. [FDUGuideBook/nav-site](https://github.com/FDUGuideBook/nav-site) <br>
      [访问 **网站** 这里](https://fduguidebook.com/)<br>
      持续为复旦社区贡献导航网站。

我也签署了 [《莱顿人工智能与数学宣言》](https://leidendeclaration.ai/)（Leiden Declaration on Artificial Intelligence and Mathematics）——这是一项由国际数学联盟（IMU）认可的社区倡议，呼吁对人工智能在数学研究中的使用采取负责任的态度。

## Tech stack and tools

| Domain         | Skills                                                                 |
|----------------|------------------------------------------------------------------------|
| **Language**    | <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg" width="20"> Python &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nodejs/nodejs-original.svg" width="20"> Node.js &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/cplusplus/cplusplus-original.svg" width="20"> C++ &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/c/c-original.svg" width="20"> C &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg" width="20"> Java &nbsp; <img src="/icons/lean4.jpg" width="20"> Lean 4 &nbsp;  ε-N language, ε-δ language |
| **IDE**        | <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vscode/vscode-original.svg" width="20"> VS Code &nbsp;  📕Draftbooks|
| **OS**         | <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/windows8/windows8-original.svg" width="20"> Windows &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/linux/linux-original.svg" width="20"> Linux |
| **Other**      | <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/markdown/markdown-original.svg" width="20"> Markdown &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/latex/latex-original.svg" width="20"> LaTeX &nbsp; <img src="/icons/redstone.jpg" width="20"> Redstone |




***

## Education

<!-- - <img src="/icons/fdfzlogo.jpg" alt="FDFZ" width="64" style="vertical-align:middle; margin-right:8px;" /> 复旦大学附属中学 — [官网](https://www.fdfz.cn/)
- <img src="/icons/fudanlogo.png" alt="Fudan Math" width="64" style="vertical-align:middle; margin-right:8px;" /> 复旦大学数学科学学院 — [官网](https://math.fudan.edu.cn/) -->

School of Mathematical Sciences, Fudan University


*云来山更佳，云去山如画；*<br>
*山因云晦明，云山共高下。*<br>
---
