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

我乐于构建小而完整的研究系统、撰写技术笔记，将模糊的想法转化为可运行的成果。


***

### [code-not-text](https://github.com/Chi-Shan0707/code-not-text)

**手工设计的 CoT 表面特征存在跨领域局限性；预测数学正确率达到 0.958 的同一组 CoT 特征，在代码领域只是噪声（0.434）。** [查看 **demo** 这里~](https://chi-shan0707.github.io/code-not-text/demo/)

<details>
<summary>概述</summary>

通过五个手工设计的特征（token 置信度、轨迹连续性、反思次数、新颖性、神经元宽度），仅从推理轨迹本身即可预测答案正确性。在 31,040 次运行、覆盖三个领域的数据上：<br>

*数学 (AIME, HMMT)     AoA 0.958  — 仅需轨迹前 10% 即可达到信号*<br>
*科学 (GPQA)           AoA 0.799  — 置信度起主要作用，而非结构*<br>
*编程 (LiveCodeBench)  AoA 0.434  — 低于 token 置信度基线*<br>

这不是特征工程问题。我扫描了 83 个以上的编程领域标量特征、添加了 SSL 预训练、非线性 MLP、去结（de-knotting）以及编程专用运行判别器——全部失败。这些特征在数学领域度量的是推理质量，在编程领域却仅能度量文本流畅度：这是一个测量不变性失效问题。正确性存在于运行时（runtime）中，而非文本中。
</details>

<!-- ### [SVDomain](https://github.com/Chi-Shan0707/SVDomain)

**我提出了 SVDomain：一个面向思维链分析的领域条件低秩框架。**

<details>
<summary>概述</summary>

我提出了 SVDomain：一个领域条件低秩框架，从 token 级别的置信度与不确定性统计、轨迹摘要和可用性指标构建特征视图，并通过轻量线性读出学习共享潜基。

- 标准流程：StandardScaler → TruncatedSVD → LogisticRegression
- 下游任务：EarlyStop、Best-of-N 桥接、RL 检查点排序。
- 重点：低秩结构何时变得具有预测性、基如何在不同锚点间迁移，以及同一个低秩对象如何同时支持预测与解释。

该仓库包含论文式技术文档以及可复现实验与分析的代码。

</details> -->

### [TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)

**面向代码生成的低参数微调与强化学习。**

<details>
<summary>概述</summary>

对 [Learning to Reason in 13 Parameters](https://arxiv.org/abs/2602.04118) 中的 TinyLoRA + GRPO 进行独立开源复现与适配，从数学推理迁移至可验证的竞技编程代码生成。基于 Qwen2.5-Coder-3B，仅使用极少共享可训练参数，采用真实编译运行奖励而非静态启发式。我独立完成了从数据处理、训练、多 GPU 配置、奖励设计、评估到验证的全流程，显著提升了我将论文转化为可运行研究系统的能力。

</details>

## My repos

- 以下项目主要由本人独立完成，仅在适当之处辅助使用 AI。这些工作并非在实验室或研究组指导下开展，而是反映了我在正式研究环境之外的自主探索、持续学习和独立实践。

<details>
<summary><a href="https://github.com/Chi-Shan0707/KaggleCompetitions" target="_blank" rel="noopener">KaggleCompetitions</a></summary>

<p>参加了若干 <strong>Kaggle 比赛</strong>（见仓库：<a href="https://github.com/Chi-Shan0707/KaggleCompetitions" target="_blank" rel="noopener">KaggleCompetitions</a>），广泛接触并实践了各种机器学习工具。</p>

</details>

<details>
<summary><a href="https://github.com/Chi-Shan0707/Hone-My-C-Plus-Plus-" target="_blank" rel="noopener">Hone My C Plus Plus</a></summary>

<p>对 <strong>高级算法</strong>与 <strong>现代 C++</strong>的探索见 <a href="https://github.com/Chi-Shan0707/Hone-My-C-Plus-Plus-" target="_blank" rel="noopener">Hone My C Plus Plus</a>。</p>

</details>

<details>
<summary><a href="https://github.com/Chi-Shan0707/microgpt.cpp" target="_blank" rel="noopener">microgpt.cpp</a></summary>

<p>一个约 300 行的简易 <code>microgpt.cpp</code>（仓库：<a href="https://github.com/Chi-Shan0707/microgpt.cpp" target="_blank" rel="noopener">microgpt.cpp</a>）。</p>

</details>

<details>
<summary><a href="https://github.com/Chi-Shan0707/Baseball" target="_blank" rel="noopener">Baseball</a></summary>

<p>一个使用 CNN + ResNet18 进行棒球投球分析的 <strong>好球/坏球分类模型</strong>（仓库：<a href="https://github.com/Chi-Shan0707/Baseball" target="_blank" rel="noopener">Baseball</a>）。</p>

</details>

<details>
<summary><a href="https://github.com/Chi-Shan0707/Sample-Java" target="_blank" rel="noopener">Sample Java</a></summary>

<p><strong>随机算法</strong>的精髓——"采样的艺术"，以及我初次接触 Java。仓库：<a href="https://github.com/Chi-Shan0707/Sample-Java" target="_blank" rel="noopener">Sample Java</a>。</p>

</details>

<details>
<summary>DeepLearning / GenerativeModel / ReinforcementLearning</summary>

<p>这三个仓库作为<strong>学习记录</strong>，涵盖理论 → 实现：</p>
<ul>
   <li><a href="https://github.com/Chi-Shan0707/DeepLearning" target="_blank" rel="noopener">DeepLearning</a></li>
   <li><a href="https://github.com/Chi-Shan0707/GenerativeModel" target="_blank" rel="noopener">GenerativeModel</a></li>
   <li><a href="https://github.com/Chi-Shan0707/ReinforcementLearning" target="_blank" rel="noopener">ReinforcementLearning</a></li>
</ul>

</details>

- 以下项目为合作完成。

### [SVDomain](https://github.com/Chi-Shan0707/SVDomain)

**我提出了 SVDomain：一个面向思维链分析的领域条件低秩框架。**

<details>
<summary>概述</summary>

SVDomain 是一个领域条件低秩框架，从 token 级别的置信度与不确定性统计、轨迹摘要和可用性指标构建特征视图，并通过轻量线性读出学习共享潜基。

- 标准流程：StandardScaler → TruncatedSVD → LogisticRegression
- 下游任务：EarlyStop、Best-of-N 桥接、RL 检查点排序。
- 重点：低秩结构何时变得具有预测性、基如何在不同锚点间迁移，以及同一个低秩对象如何同时支持预测与解释。

该仓库包含论文式技术文档以及可复现实验与分析的代码。

</details>

该项目为合作完成。合作者提供了元级原始数据基础；我提出了框架，设计并完成了实验，进行了验证。

<!-- <details>
<summary><a href="https://github.com/Chi-Shan0707/NAD_Next" target="_blank" rel="noopener">NAD Next</a></summary>

<p>一个用于分析大语言模型神经元激活与推理过程的协作框架。项目涵盖激活缓存构建、选择器评估、token 级别统计及可视化。我们的目标是通过思维链、激活和集成信号比较同一问题上的不同运行，估计哪次运行更可能正确或错误。</p>

<p>我的主要贡献：算法构建与方法设计。</p>

> 备注：该项目目前仍在开发中（WIP）。由于实际限制，部分内容暂时无法在 GitHub 上开源，因此当前公开的仓库尚不完整。我们将在条件允许时继续补充材料，逐步完善发布。

</details> -->

***


## Service and Community Involvement

除了个人项目之外，我也参与面向社区的公益性开源工作。

   1. [github-unflag-playbook-cn](https://github.com/Chi-Shan0707/github-unflag-playbook-cn) <br>
      [查看 **网站** 这里 ~~~](https://chi-shan0707.github.io/github-unflag-playbook-cn/)<br>
      面向中国大陆开发者的 GitHub 账号 flagged / hidden 自救手册与案例档案，系统整理申诉流程与案例。
   2. [FDUGuideBook/nav-site](https://github.com/FDUGuideBook/nav-site) <br>
      [访问 **网站** 这里](https://fduguidebook.com/)<br>
      持续为复旦社区贡献导航网站。

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
