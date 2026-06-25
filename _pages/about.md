---
permalink: /
title: "About Yuhan Chi"
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

## Experience

***
- **UC Berkeley Summer Sessions** — Summer study, July--August 2026.  
  I will attend Berkeley Summer Sessions to broaden my exposure to advanced coursework, research culture, and the mathematical/computational foundations behind AI systems.

## My research interests

I am interested in how to make claims about AI reasoning more inspectable: what signals are reliable, which evaluations are protocol-sensitive, and how sequential decision-making can be studied with mathematical tools.<br>
See also my [plan](/plan/) page for longer-term motivation.

## My featured works

Selected solo projects. I list them by the question they test, the artifact they provide, and the main limitation they reveal.

***

### [IntuitMath.skill](https://github.com/Chi-Shan0707/IntuitMath.skill)

**Solo open-source agent skill.** A portable mathematics reasoning skill for AI coding/CLI agents that makes mathematical explanations start from intuition, motivation, and proof repair rather than definitions alone.

<details markdown="1">
<summary>Overview</summary>

**Question.** Can an AI agent be steered to teach mathematics as a thinking partner: reconstructing why an idea had to be invented, testing examples and counterexamples, then moving toward rigorous proof?

**Method.** I designed a portable `SKILL.md` workflow with routing rules, slash-command specs, domain subskills, HTML/KaTeX note generation, and adapters for Codex-like, Claude Code, OpenCode, Gemini CLI, and generic command-line agents.

**Use cases.** Concept motivation, proof/disproof, proof repair, problem solving, study planning, and polished math notes from middle-school topics to higher mathematics.

**Takeaway.** The project treats mathematical understanding as a sequence of crisis, naive attempt, breakdown, repair, and rigorous version, making agent outputs easier to inspect and learn from.

Links: [code](https://github.com/Chi-Shan0707/IntuitMath.skill) · [README](https://github.com/Chi-Shan0707/IntuitMath.skill#readme)

</details>

### [token-verification-mirage](https://github.com/Chi-Shan0707/token-verification-mirage)

**Solo-author project with full pipeline ownership.** Controlled evaluation of token-level verification signals for LLM math reasoning.  
Workshop poster at the [ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/).

<details markdown="1">
<summary>Overview</summary>

**Question.** Can shallow token-level signals such as entropy, log-probability, and confidence trajectories separate correct from incorrect math reasoning traces without extra model calls?

**Method.** I carried out the full pipeline: dataset selection, model deployment, trace generation, evaluation design, analysis, figure refinement, related-work organization, and writing. The experiments compare token statistics across MATH and BigMath traces from Qwen and Llama models, with controls for within-problem evaluation, fixed-direction scoring, and permutation-null calibration.

**Finding.** Protocol choices such as global pooling, in-sample scoring, and direction-agnostic AUROC can shift reported AUROC by up to about 0.18. Final-token entropy reaches 0.72--0.75 direction-agnostic AUROC, but drops to 0.47--0.48 under fixed-direction evaluation.

**Takeaway.** Shallow token statistics are useful diagnostics, not stable standalone verifiers unless the evaluation protocol is controlled.

Links: [paper](https://openreview.net/pdf?id=wRImV3kfR1) · [code](https://github.com/Chi-Shan0707/token-verification-mirage) · [workshop](https://ai4math2026.github.io/)

</details>

### [code-not-text](https://github.com/Chi-Shan0707/code-not-text)

**Solo measurement study.** Can cheap, hand-crafted features from reasoning traces predict correctness across math, science, and coding?

I test one deliberately narrow feature family on **DeepSeek-R1-0528-Qwen3-8B**: token-confidence summaries, token-trajectory statistics, continuity, novelty, reflection count, and a small activation-derived descriptor. The study covers **7,680 math runs**, **12,672 science runs**, and **10,688 coding runs**, with problem-grouped splits and best-of-64 reranking.

**Result.** The same feature family is highly diagnostic for math reasoning, partly useful for GPQA-style science questions, and weak on LiveCodeBench-v5 coding tasks: AoA moves from **0.958** in math to **0.799** in science and **0.434** in coding; best-of-64 reranking changes from **+10.0 pp** to **+8.0 pp** and then **-0.6 pp**.

**Takeaway.** The result is not “text cannot verify code.” It is narrower: these cheap CoT-surface features are domain-specific measurement instruments. They can track convergence-like behavior in math, but they do not reliably track executable correctness in code. Robustness checks include an 83-scalar coding sweep, grouped ablations, a CoT-only judge, MLPs, SSL pretraining, semantic-knot annotation, and token-level de-knotting.

Links: [code](https://github.com/Chi-Shan0707/code-not-text) · [demo](https://chi-shan0707.github.io/code-not-text/demo/) · [technical note](/tech/code-not-text/)

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

Beyond my personal projects, I also contribute to community-oriented open-source work that keeps useful information easier to find and freely accessible.

   1. [github-unflag-playbook-cn](https://github.com/Chi-Shan0707/github-unflag-playbook-cn) <br>
      [view **website** here ~~~](https://chi-shan0707.github.io/github-unflag-playbook-cn/)<br>
      A Chinese playbook documenting GitHub account flagging/recovery experiences, appeal processes, and case archives for mainland China developers.
   2. [FDUGuideBook/nav-site](https://github.com/FDUGuideBook/nav-site) <br>
      [visit our **website** here](https://fduguidebook.com/)<br>
      Help maintain a student-built navigation site that makes Fudan-related resources easier to discover.
   3. [FDU-Sharing](https://github.com/victkk/FDU-Sharing) <br>
      [visit **website** here](https://fdu-sharing.vercel.app/)<br>
      Contribute course materials, maintain documentation, and add small features for an open, mutual-aid learning space among Fudan students.



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
