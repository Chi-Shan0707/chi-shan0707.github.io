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


I am currently an undergraduate student at the School of Mathematical Sciences, Fudan University, pursuing a double degree in Information and Computing Science and Artificial Intelligence.<br>
At the same time, I have been actively self-studying interesting topics across computer science.<br>
I am exploring the intersection I truly want to work on and study.<br>
I hope to contribute to making society better.<br>

## My research interests

Currently, I am exploring the mathematical foundations of intelligence in large models and sequential decision-making. More specifically, I want to ground the concept of AI trust in **mathematical interpretability** rather than philosophy, and study these questions through **Reinforcement Learning** methods.<br>
See more of my motivation on my [plan](/plan/) page.

## My featured works

I enjoy building small but complete research systems: a question, a dataset or artifact, code that runs, and a write-up that makes the failure modes visible. I try to keep the claims modest and the artifacts inspectable.

***

### [token-verification-mirage](https://github.com/Chi-Shan0707/token-verification-mirage)

**Controlled evaluation of token-level verification signals for LLM math reasoning.**  
Workshop poster at the [ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/).

<details>
<summary>Overview</summary>

This project asks whether shallow token-level signals—entropy, log-probability, confidence trajectories—can distinguish correct from incorrect math reasoning traces without extra model calls. The focus is not to propose a new verifier, but to audit how much apparent performance depends on the evaluation protocol.

Across MATH and BigMath experiments with Qwen and Llama models, protocol choices such as global pooling, in-sample scoring, and direction-agnostic AUROC can shift reported AUROC by up to about 0.18. Final-token entropy reaches 0.72--0.75 direction-agnostic AUROC, but drops to 0.47--0.48 under fixed-direction evaluation.

**Takeaway:** shallow token statistics are useful diagnostics, but they should not be treated as stable standalone verifiers without within-problem evaluation, fixed-direction baselines, and permutation-null calibration.

Links: [code](https://github.com/Chi-Shan0707/token-verification-mirage) · [workshop](https://ai4math2026.github.io/)

</details>

### [code-not-text](https://github.com/Chi-Shan0707/code-not-text)

**Cross-domain behavior of hand-crafted CoT-surface features.** [Interactive demo](https://chi-shan0707.github.io/code-not-text/demo/)

<details>
<summary>Overview</summary>

This project studies whether hand-crafted features from reasoning traces—token confidence, trajectory continuity, reflection count, novelty, and related statistics—predict correctness across domains. On one experimental setting, the same feature family is strong for math, narrower for science, and weak for coding:

*Math (AIME, HMMT): AoA 0.958*  
*Science (GPQA): AoA 0.799*  
*Coding (LiveCodeBench): AoA 0.434*

I treat this as a measurement problem rather than a universal negative result: the features appear to capture useful reasoning dynamics in math, but coding correctness depends more directly on executable behavior. The project includes an interactive demo and a set of ablations around feature families and domain transfer.

Links: [code](https://github.com/Chi-Shan0707/code-not-text) · [demo](https://chi-shan0707.github.io/code-not-text/demo/)

</details>

### [TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)

**A small-parameter adaptation and RL training pipeline for code generation.**

<details>
<summary>Overview</summary>

An independent open-source reimplementation and adaptation inspired by [Learning to Reason in 13 Parameters](https://arxiv.org/abs/2602.04118), moved from math reasoning toward verifiable competitive-programming code generation. The project uses Qwen2.5-Coder-3B, a tiny shared-parameter adaptation mechanism, and compile-and-run rewards rather than static heuristics.

The main value of this project for me was engineering a full research loop: data processing, training, multi-GPU setup, reward design, evaluation, and validation. It is a systems-building project rather than a claim that the method is a general solution for code reasoning.

</details>

### [microgpt.cpp](https://github.com/Chi-Shan0707/microgpt.cpp)

**A minimal GPT implementation from first principles in C++.**

<details>
<summary>Overview</summary>

A compact C++ implementation built to understand transformer internals without relying on high-level deep-learning frameworks. The goal is educational: make the data flow, tensor operations, and model components explicit enough to inspect and modify.

</details>

### [SVDomain](https://github.com/Chi-Shan0707/SVDomain)

**Domain-conditioned low-rank analysis for chain-of-thought features.**

<details>
<summary>Overview</summary>

SVDomain builds feature views from token-level confidence and uncertainty statistics, trajectory summaries, and availability indicators, then learns a shared low-rank representation with a lightweight linear readout.

- Canonical pipeline: StandardScaler → TruncatedSVD → LogisticRegression
- Downstream tasks: early stopping, Best-of-N bridging, and checkpoint ranking
- Focus: when low-rank structure is predictive, how bases transfer across anchors, and how one representation can support both prediction and interpretation

This project was completed in collaboration with others. My collaborator contributed the meta-level raw data foundation; I proposed the framework, designed and ran the experiments, and conducted the validation.

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
