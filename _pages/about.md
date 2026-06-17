---
permalink: /
title: "Yuhan Chi's Homepage"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div style="text-align:right; margin-bottom:0.8rem;">
   <a href="{{ '/zh/' | relative_url }}" style="font-size:0.9rem;">中文</a>
</div>

## Basic Info

***
- China - Shanghai
- GitHub: [Chi-Shan0707](https://github.com/Chi-Shan0707)


I am an undergraduate at the School of Mathematical Sciences, Fudan University, pursuing a double degree in Information and Computing Science and Artificial Intelligence.<br>
My current work centers on evaluation, verification, and small research systems for LLM reasoning.<br>

## My research interests

I am interested in how to make claims about AI reasoning more inspectable: what signals are reliable, which evaluations are protocol-sensitive, and how sequential decision-making can be studied with mathematical tools.<br>
See also my [plan](/plan/) page for longer-term motivation.

## My featured works

Selected solo projects. I list them by the question they test, the artifact they provide, and the main limitation they reveal.

***

### [token-verification-mirage](https://github.com/Chi-Shan0707/token-verification-mirage)

**Solo-author project with full pipeline ownership.** Controlled evaluation of token-level verification signals for LLM math reasoning.  
Workshop poster at the [ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/).

<details markdown="1">
<summary>Overview</summary>

**Question.** Can shallow token-level signals such as entropy, log-probability, and confidence trajectories separate correct from incorrect math reasoning traces without extra model calls?

**Method.** I carried out the full pipeline: dataset selection, model deployment, trace generation, evaluation design, analysis, figure refinement, related-work organization, and writing. The experiments compare token statistics across MATH and BigMath traces from Qwen and Llama models, with controls for within-problem evaluation, fixed-direction scoring, and permutation-null calibration.

**Finding.** Protocol choices such as global pooling, in-sample scoring, and direction-agnostic AUROC can shift reported AUROC by up to about 0.18. Final-token entropy reaches 0.72--0.75 direction-agnostic AUROC, but drops to 0.47--0.48 under fixed-direction evaluation.

**Takeaway.** Shallow token statistics are useful diagnostics, not stable standalone verifiers unless the evaluation protocol is controlled.

Links: [code](https://github.com/Chi-Shan0707/token-verification-mirage) · [workshop](https://ai4math2026.github.io/)

</details>

### [code-not-text](https://github.com/Chi-Shan0707/code-not-text)

**Solo project.** Cross-domain behavior of hand-crafted CoT-surface features. [Interactive demo](https://chi-shan0707.github.io/code-not-text/demo/)

<details markdown="1">
<summary>Overview</summary>

**Question.** Do hand-crafted reasoning-trace features transfer across math, science, and coding tasks?

**Method.** I use features such as token confidence, trajectory continuity, reflection count, and novelty, then test how their predictive behavior changes across domains.

**Result in one setting.**

- Math (AIME, HMMT): AoA 0.958
- Science (GPQA): AoA 0.799
- Coding (LiveCodeBench): AoA 0.434

**Takeaway.** The features can capture useful reasoning dynamics in math-like traces, but coding correctness depends more directly on executable behavior. I treat this as a measurement issue, not a universal negative claim.

Links: [code](https://github.com/Chi-Shan0707/code-not-text) · [demo](https://chi-shan0707.github.io/code-not-text/demo/)

</details>

### [TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)

**Solo project.** A small-parameter adaptation and RL training pipeline for code generation.

<details markdown="1">
<summary>Overview</summary>

An independent reimplementation and adaptation inspired by [Learning to Reason in 13 Parameters](https://arxiv.org/abs/2602.04118), moved from math reasoning toward verifiable competitive-programming code generation.

The project uses Qwen2.5-Coder-3B, a tiny shared-parameter adaptation mechanism, and compile-and-run rewards rather than static heuristics. Its main value is the full research loop: data processing, training, multi-GPU setup, reward design, evaluation, and validation.

</details>

### [microgpt.cpp](https://github.com/Chi-Shan0707/microgpt.cpp)

**Solo project.** A minimal GPT implementation from first principles in C++.

<details markdown="1">
<summary>Overview</summary>

A compact C++ implementation built to understand transformer internals without relying on high-level deep-learning frameworks. The goal is educational: make the data flow, tensor operations, and model components explicit enough to inspect and modify.

</details>
***


## Service

Academic service and review roles.

   1. [ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/) <br>
      Reviewer, ICML 2026 Workshop on AI for Math (AI4Math), 2026.

## Community Involvement

Beyond my personal projects, I also contribute to community-oriented open-source work.

   1. [github-unflag-playbook-cn](https://github.com/Chi-Shan0707/github-unflag-playbook-cn) <br>
      [view **website** here ~~~](https://chi-shan0707.github.io/github-unflag-playbook-cn/)<br>
      A Chinese playbook documenting GitHub account flagging/recovery experiences, appeal processes, and case archives for mainland China developers.
   2. [FDUGuideBook/nav-site](https://github.com/FDUGuideBook/nav-site) <br>
      [visit our **website** here](https://fduguidebook.com/)<br>
      Contribute to this navigation site for the Fudan community continuously.



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


*When clouds gather, the mountain grows lovelier still; when they part, it stands like a painting.*<br>
*Clouds lend it shadow and light, and give shape to its height.*<br>
---
