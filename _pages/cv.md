---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[**View PDF version**]({{ base_path }}/files/Yuhan_Chi_CV.pdf)

Profile
======
* Undergraduate at **Fudan University** (School of Mathematical Sciences), pursuing a double degree in **Information and Computing Science** and **Artificial Intelligence**.
* GPA: **3.96/4.00** (most recent semester); ranked **10th (top 5%)** in cohort.
* Research interests: mathematical interpretability for AI trust, verification/evaluation of LLM reasoning, and reinforcement learning for sequential decision-making.

Education
======
* **Fudan University**, Shanghai, China
  * **B.S. Candidate** in Information and Computing Science & Artificial Intelligence (Double Degree), School of Mathematical Sciences
  * **Sep. 2025 -- Present**
  * GPA: **3.96/4.00** (most recent semester)
  * Rank: **10th (top 5%)** in cohort

Research Interests
======
* **Mathematical Interpretability and AI Trust**: grounding claims about model reliability in inspectable mathematical and statistical evidence
* **Reasoning Verification and Evaluation**: studying when surface-level signals from LLM traces are diagnostic, misleading, or protocol-dependent
* **Reinforcement Learning and Sequential Decision-Making**: using RL concepts to reason about uncertainty, feedback, and interaction with environments


Selected Open-Source Projects
======
* **[token-verification-mirage](https://github.com/Chi-Shan0707/token-verification-mirage)** — [AI4Math Workshop](https://ai4math2026.github.io/)
  * Solo-author project; led the full pipeline from dataset selection and model deployment to trace generation, evaluation design, analysis, figures, related-work organization, and writing
  * Poster, **ICML 2026 Workshop on AI for Math (AI4Math)**
  * Audits how evaluation protocol choices such as pooling, in-sample scoring, and direction-agnostic AUROC can change apparent verification performance
  * Shows that shallow token statistics can be useful diagnostics, but should not be treated as stable standalone verifiers without stronger controls

* **[code-not-text](https://github.com/chi-shan0707/code-not-text)** — [Interactive Demo](https://chi-shan0707.github.io/code-not-text/demo)
  * Solo project; cross-domain measurement study of cheap CoT-surface and token-trajectory features on DeepSeek-R1-0528-Qwen3-8B
  * Reports strong math signal (AoA 0.958, AUROC@100% 0.982), partial science signal (AoA 0.799), and weak coding transfer (AoA 0.434)
  * Tests coding-side robustness through an 83-scalar feature sweep, grouped ablations, a CoT-only judge, nonlinear MLPs, SSL pre-training, and token-level de-knotting
  * Frames the result as measurement non-invariance: the same feature family tracks convergence-like behavior in math but not executable correctness in coding

* **[TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)**
  * Solo project; independent reimplementation and adaptation inspired by *Learning to Reason in 13 Parameters*
  * Moved a small-parameter adaptation and GRPO-style training pipeline toward verifiable competitive-programming code generation on Qwen2.5-Coder-3B
  * Uses compile-and-run rewards rather than static heuristics
  * Built as a full research-system exercise: data processing, training, multi-GPU setup, reward design, evaluation, and validation

* **[microgpt.cpp](https://github.com/Chi-Shan0707/microgpt.cpp)**
  * Solo project; minimal GPT implementation from first principles in C++, built to understand model internals without relying on high-level frameworks


Academic Service
======
* **Reviewer**, [ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/), 2026


Skills
======
* **Programming:** Python, C++, C, Java, Node.js, Lean 4
* **ML/AI:** PyTorch, ML experimentation, LLM evaluation, reinforcement-learning basics
* **Tools:** Git, GitHub, Linux, LaTeX, Markdown, VS Code
* **Other:** Mathematical proof writing, technical writing, self-directed learning, competitive programming



Additional Information
======
* Maintains **[github-unflag-playbook-cn](https://chi-shan0707.github.io/github-unflag-playbook-cn)**, a Chinese playbook documenting GitHub account flagging, recovery cases, and appeal workflows
* Contributor to **[FDUGuideBook/nav-site](https://github.com/FDUGuideBook/nav-site)**, a Fudan community site
* Personal website: [chi-shan0707.github.io](https://chi-shan0707.github.io/)
* GitHub: [Chi-Shan0707](https://github.com/Chi-Shan0707)
* Actively self-studying mathematics, algorithms, and AI beyond formal coursework, with ongoing work documented in public repositories
