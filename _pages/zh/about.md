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
我现在主要关注 LLM reasoning 的评估、验证，以及可以完整运行的小型研究系统。<br>


## My research interests

我关心如何让关于 AI 推理能力的判断更可检查：哪些信号可靠，哪些结果依赖评估协议，以及如何用数学工具理解 sequential decision-making。<br>
更长期的 motivation 参见 [plan](/plan/) 页面。


## My featured works

以下是我独立完成的几个项目。我更想突出每个项目要回答的问题、给出的 artifact，以及它暴露出的边界。

***

### [token-verification-mirage](https://github.com/Chi-Shan0707/token-verification-mirage)

**单作者项目，完整流程由我负责。** 对 LLM 数学推理中 token-level verification 信号的受控评估。  
[ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/) 的 workshop poster。

<details markdown="1">
<summary>概述</summary>

**问题。** entropy、log-probability、confidence trajectory 这类浅层 token 信号，能否在不额外调用模型的情况下区分数学推理轨迹的正确与错误？

**方法。** 我独立走通完整研究流程，包括数据集选择、模型部署、推理轨迹生成、评估设计、分析、图表调整、related work 组织与写作。实验在 MATH 与 BigMath、Qwen 与 Llama 的设置中比较 token 统计，并加入 within-problem evaluation、fixed-direction scoring 和 permutation-null calibration 等控制。

**结果。** global pooling、in-sample scoring、direction-agnostic AUROC 等协议选择可以使 AUROC 变化最高约 0.18。Final-token entropy 在 direction-agnostic AUROC 下达到 0.72--0.75，但在 fixed-direction evaluation 下下降到 0.47--0.48。

**Takeaway。** 浅层 token 统计可以作为诊断信号，但不能在缺少协议控制时直接当作稳定的独立 verifier。

链接：[代码](https://github.com/Chi-Shan0707/token-verification-mirage) · [Workshop](https://ai4math2026.github.io/)

</details>

### [code-not-text](https://github.com/Chi-Shan0707/code-not-text)

**独立项目。** 关于 cheap CoT-surface features 的跨领域测量研究。 [交互式 demo](https://chi-shan0707.github.io/code-not-text/demo/)

<details markdown="1">
<summary>概述</summary>

**问题。** 当模型写出 chain-of-thought trace 时，便宜的表面统计特征是否能跨领域预测正确性？还是说，同一组特征在数学、科学问答、代码任务中其实测量的是不同东西？

**设置。** 我在 DeepSeek-R1-0528-Qwen3-8B 上研究一组刻意限定的特征族：token confidence summaries、token-trajectory statistics、continuity / novelty / reflection count 等简单轨迹特征，以及一个 activation-derived descriptor。评估使用 problem-grouped splits，并报告跨 trace anchor 的 AoA (AUC-of-AUROC)、AUROC@100% 与 best-of-N reranking。

**主要结果。** 同一组特征在数学中很强，在科学问答中部分有用，但在代码任务的 unseen problems 上很弱。

- 数学：AoA 0.958，AUROC@100% 0.982，best-of-N=64 pass@1 +10.0 pp
- 科学：AoA 0.799，AUROC@100% 0.841，best-of-N=64 pass@1 +8.0 pp
- 编程：AoA 0.434，AUROC@100% 0.407，best-of-N=64 pass@1 -0.6 pp

**为什么重要。** 在数学中，reflection count、continuity 这类轨迹特征似乎能捕捉 reasoning 是否收敛；在科学问答中，信号更窄，主要由 confidence 驱动；在代码中，同一组特征很难追踪可执行正确性——一段 trace 可以看起来结构清晰、信心很高，但实际程序逻辑仍然错误。

**稳健性检查。** 我检查了多个“也许只是工程没做好”的解释：83 个 coding-specific scalar 的 sweep、grouped feature ablations、coding-specific CoT-only judge、非线性 MLP、42K unlabeled traces 上的 SSL pre-training，以及 token-level de-knotting。它们都没有从这组特征中得到强的、可泛化的代码 verifier。

**边界。** 这不是说所有 text-based 或 code-aware verifier 都失败。更窄的结论是：这组便宜、可解释的 CoT-surface features 是 domain-specific measurement instruments，而不是 general-purpose correctness proxy。

链接：[代码](https://github.com/Chi-Shan0707/code-not-text) · [demo](https://chi-shan0707.github.io/code-not-text/demo/) · [report](https://github.com/Chi-Shan0707/code-not-text/blob/main/project_report/project_report.pdf)

</details>

### [TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)

**独立项目。** 面向代码生成的小参数适配与强化学习训练管线。

<details markdown="1">
<summary>概述</summary>

这是一个受 [Learning to Reason in 13 Parameters](https://arxiv.org/abs/2602.04118) 启发的独立复现与适配项目，从数学推理迁移到可验证的竞技编程代码生成。

项目基于 Qwen2.5-Coder-3B，使用很少的共享可训练参数，并采用真实编译运行奖励而非静态启发式。它对我的主要价值是走通完整 research loop：数据处理、训练、多 GPU 配置、奖励设计、评估与验证。

</details>

### [microgpt.cpp](https://github.com/Chi-Shan0707/microgpt.cpp)

**独立项目。** 从第一性原理出发，用 C++ 实现的极简 GPT。

<details markdown="1">
<summary>概述</summary>

一个用于理解 transformer 内部机制的紧凑 C++ 实现，不依赖高层深度学习框架。目标是把数据流、张量操作和模型组件写得足够显式，便于检查和修改。

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
