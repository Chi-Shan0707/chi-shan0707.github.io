---
permalink: /
title: "Do interesting things"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## Basic Info

***
- 中国-上海 / China - Shanghai
- GitHub： [Chi-Shan0707](https://github.com/Chi-Shan0707)

我目前是复旦大学数学科学学院信息与计算科学-人工智能双学位在读。同时一直在坚持自学计算机各领域中有意思的内容。<br>
希望能找到自己真正想交叉，想研究的东西。<br>
我想让这个社会变得更好。<br>


I am currently an undergraduate student at the School of Mathematical Sciences, Fudan University, pursuing a double degree in Information and Computing Science and Artificial Intelligence.<br>
At the same time, I have been actively self-studying interesting topics across computer science.<br>
I am exploring the intersection I truly want to work on and study.<br>
I hope to contribute to making society better.<br>

### My repos

- 以下项目主要由我独立完成，AI 在部分环节作为辅助工具使用；这些工作并非依托实验室或课题组开展。换言之，它们代表了我在缺乏正式科研平台支持的情况下，主动探索、持续学习与独立实现的结果。<br>The following projects were primarily completed independently, with AI used only as an auxiliary tool where appropriate. These works were not conducted under a laboratory or research group; rather, they reflect my self-directed exploration, sustained learning, and independent implementation outside a formal research environment.
   1. [TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)<br>
      我独立复现并开源了《Learning to Reason in 13 Parameters》中 TinyLoRA + GRPO 的核心方法，并将其从数学推理任务迁移到可验证的竞赛编程代码生成。项目以 Qwen2.5-Coder-3B 为基础，在极少可训练参数的设定下，通过真实的 compile-and-run 奖励进行强化学习，而不是依赖静态启发式。我从数据处理、训练流程、多卡适配、奖励设计到评测与验证完整打通了整个 pipeline；这个项目让我系统训练了“从论文到可运行系统”的全流程能力。<br>
      An independent open-source reimplementation and adaptation of TinyLoRA + GRPO from *Learning to Reason in 13 Parameters*, migrated from math reasoning to verifiable competitive-programming code generation. Built on Qwen2.5-Coder-3B with only a tiny number of shared trainable parameters, the project uses real compile-and-run rewards rather than static heuristics. I developed the full pipeline end to end, including data processing, training, multi-GPU setup, reward design, evaluation, and validation, which significantly strengthened my ability to turn a paper into a working research system.<br>

   2. [KaggleCompetitions](https://github.com/Chi-Shan0707/KaggleCompetitions)<br>
      数个kaggle [repo link](https://github.com/Chi-Shan0707/KaggleCompetitions)比赛，广泛了解并使用了各种机器学习工具。<br>
      Participated in several **Kaggle competitions** (see repo: [KaggleCompetitions](https://github.com/Chi-Shan0707/KaggleCompetitions)), gaining broad exposure to and practical experience with various machine learning tools.<br>

   3. [Hone My C Plus Plus](https://github.com/Chi-Shan0707/KaggleCompetitions)<br>
      对于高级算法和mc++的一些探索会在[Hone My C Plus Plus](https://github.com/Chi-Shan0707/Hone-My-C-Plus-Plus-)中<br>
      Explorations of **Advanced Algorithms** and **Modern C++** can be found in [Hone My C Plus Plus](https://github.com/Chi-Shan0707/Hone-My-C-Plus-Plus-).

   4. [microgpt.cpp](https://github.com/Chi-Shan0707/microgpt.cpp)<br>
      一个简易的gpt，用300行代码实现。<br>
      A simple `microgpt.cpp` in 300 lines (see repo: [microgpt.cpp](https://github.com/Chi-Shan0707/microgpt.cpp)).<br>

   5. [Baseball](https://github.com/Chi-Shan0707/Baseball)<br>
      一个CNN+ResNet18，学好球坏球判断的模型。<br>
      A **Strike/Ball Classification Model** using CNN + ResNet18 for baseball pitch analysis (see repo: [Baseball](https://github.com/Chi-Shan0707/Baseball)).<br>

   6. [Sample Java](https://github.com/Chi-Shan0707/Sample-Java)<br>
      带随机数的算法的精髓在于看似随机，但是每次随机选择都能选的不是很差，是sample的艺术。同时在这我初步浅尝了java，故名曰 Sample Java。<br>
      The essence of **Randomized Algorithms** lies in the "Art of Sampling"—making choices that appear random but are statistically effective. This repo also marks my first taste of Java, hence the name [Sample Java](https://github.com/Chi-Shan0707/Sample-Java). The majority of the repo is my study notes.<br>
   7. [DeepLearning](https://github.com/Chi-Shan0707/DeepLearning), [GenerativeModel](https://github.com/Chi-Shan0707/GenerativeModel), [ReinforcementLearning](https://github.com/Chi-Shan0707/ReinforcementLearning)<br>
      这三个仓库是我的学习记录，涵盖了从理论推导到代码复现的过程。<br>
      These three repositories serve as **my learning records**, covering the journey from theoretical derivation to code implementation in Deep Learning, Generative Models, and Reinforcement Learning (see repos: [DeepLearning](https://github.com/Chi-Shan0707/DeepLearning), [GenerativeModel](https://github.com/Chi-Shan0707/GenerativeModel), [ReinforcementLearning](https://github.com/Chi-Shan0707/ReinforcementLearning)).<br>

- 以下项目为我合作完成。<br>
  The following project was completed in collaboration with others.<br>
   1. [NAD Next](https://github.com/Chi-Shan0707/NAD_Next)
      一个面向大模型神经元激活与推理过程的分析框架。项目涵盖激活缓存构建、selector 评估、token-level 统计与可视化。我们希望可以通过COT, Activation, Ensemble方法，去判断一个problem中的run各自的好坏程度。谁会更“对”一些？谁会更“错”？我在该项目中主要贡献是算法构建与方法设计。<br>
      A collaborative framework for analyzing large-language-model neuron activations and reasoning processes. The project covers activation-cache construction, selector evaluation, token-level statistics, and visualization. Our goal is to compare different runs on the same problem via CoT-, activation-, and ensemble-based signals, and estimate which run is more likely to be correct or incorrect. 
      My primary contribution to this project is algorithm construction and method design.<br>
      > 注：该项目目前处于持续开发（WIP）阶段。受现实条件影响，部分内容暂无法立即开源到 GitHub，因此当前公开仓库尚不完整；后续将在条件允许时持续补充并更新完整版本。<br>
      > Note: This project is currently a work in progress (WIP). Due to practical constraints, some content cannot be open-sourced on GitHub immediately; therefore, the current public repository is not yet complete. We will continue to add materials and update toward a more complete release as conditions permit.<br>
      
***


### Service and Community Involvement

Beyond my personal projects, I also contribute to community-oriented open-source work.

   1. [FDUGuideBook/nav-site](https://github.com/FDUGuideBook/nav-site) 

### Tech stack and tools

| Domain         | Skills                                                                 |
|----------------|------------------------------------------------------------------------|
| **Language**    | <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg" width="20"> Python &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nodejs/nodejs-original.svg" width="20"> Node.js &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/cplusplus/cplusplus-original.svg" width="20"> C++ &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/c/c-original.svg" width="20"> C &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg" width="20"> Java &nbsp; <img src="/icons/lean4.jpg" width="20"> Lean 4 &nbsp;  ε-N language, ε-δ language |
| **IDE**        | <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vscode/vscode-original.svg" width="20"> VS Code &nbsp;  📕Draftbooks|
| **OS**         | <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/windows8/windows8-original.svg" width="20"> Windows &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/linux/linux-original.svg" width="20"> Linux |
| **Other**      | <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/markdown/markdown-original.svg" width="20"> Markdown &nbsp; <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/latex/latex-original.svg" width="20"> LaTeX &nbsp; <img src="/icons/redstone.jpg" width="20"> Redstone |





***

### 所行之路/Education

<!-- - <img src="/icons/fdfzlogo.jpg" alt="FDFZ" width="64" style="vertical-align:middle; margin-right:8px;" /> 复旦大学附属中学 — [官网](https://www.fdfz.cn/)
- <img src="/icons/fudanlogo.png" alt="Fudan Math" width="64" style="vertical-align:middle; margin-right:8px;" /> 复旦大学数学科学学院 — [官网](https://math.fudan.edu.cn/) -->

复旦大学数学科学学院


*云来山更佳，云去山如画；山因云晦明，云共山高下。*
---
