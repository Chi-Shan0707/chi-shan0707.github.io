---
layout: single
title: "CV"
permalink: /cv/
redirect_from:
  - /resume
---

[**PDF**](/files/Yuhan_Chi_CV.pdf)

## Profile

Undergraduate at **Fudan University** (School of Mathematical Sciences), pursuing a double degree in **Information and Computing Science** and **Artificial Intelligence**.

GPA: **3.96/4.00** (Fall 2025), **4.00/4.00** (Spring 2026); Cumulative: **3.98/4.00**; Rank: **3/213** in cohort.

## Education

**Fudan University**, Shanghai, China --- *Sep. 2025 -- Present*

B.S. Candidate in Information and Computing Science & Artificial Intelligence (Double Degree), School of Mathematical Sciences.

## Research Interests

- **Reasoning Verification and Evaluation**: studying when trace-level signals are diagnostic, misleading, protocol-dependent, or domain-specific
- **Optimization, Control, and Sequential Decision-Making**: using mathematical tools to reason about uncertainty, feedback, constraints, and interaction with environments
- **Mathematical Interpretability and AI Trust**: grounding claims about model reliability in inspectable mathematical and statistical evidence


## Selected Open-Source Projects

**[token-verification-mirage](https://github.com/Chi-Shan0707/token-verification-mirage)** --- [Paper](https://openreview.net/pdf?id=wRImV3kfR1) · [AI4Math Workshop](https://ai4math2026.github.io/)
- Poster, **ICML 2026 Workshop on AI for Math (AI4Math)**; solo-authored, full pipeline (dataset selection, generation, evaluation design, analysis, writing)
- Evaluation-protocol choices alone (pooling, in-sample scoring, direction-agnostic AUROC) shift apparent verification AUROC by up to **0.18**
- Under corrected within-problem, leave-one-run-out, fixed-direction scoring, shallow token statistics cluster at only **0.60--0.75 AUROC**; final-token entropy drops from 0.72--0.75 to 0.47--0.48 once the direction-agnostic reporting artifact is removed

**[code-not-text](https://github.com/chi-shan0707/code-not-text)** --- [Demo](https://chi-shan0707.github.io/code-not-text/demo)
- Cross-domain measurement study across 31,040 math, science, and coding runs: AoA 0.958 (math), 0.799 (science), 0.434 (coding, below the random-direction baseline)
- Rules out five alternative explanations for the coding failure (model capacity, label scarcity, surface noise, feature coverage, judge framing) --- all converge to the same ceiling; frames the result as measurement non-invariance

**[TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)** --- [DeepWiki](https://deepwiki.com/Chi-Shan0707/TinyLoRA-GRPO-Coder)
- Adapts *Learning to Reason in 13 Parameters* (Morris et al., 2026) to competitive programming: trains 32 shared scalars via GRPO on Qwen2.5-Coder-3B, rewarded by real `g++` compile-and-run outcomes

**[microgpt.cpp](https://github.com/Chi-Shan0707/microgpt.cpp)**
- Minimal GPT (autograd, multi-head attention, Adam) from scratch in ~300 lines of C++, inspired by Karpathy's teaching gist

## Academic Service

**Reviewer**, [ICML 2026 Workshop on AI for Math (AI4Math)](https://ai4math2026.github.io/), 2026

**Talk: Reinforcement Learning: From Bandits to PPO** --- *Apr 18, 2026* ([PDF notes](/files/From%20Bandits%20to%20PPO.pdf))
- Overview covering multi-armed bandits, MDPs, policy gradient, and PPO

## Skills

**Programming:** Python, C++, C ·
**ML/AI:** PyTorch, ML experimentation, LLM evaluation, RL basics ·
**Tools:** Git, GitHub, Linux, LaTeX, Markdown ·
**Language:** Chinese(native) English(fluent)

## Selected Course Grades

| Semester | Course | Grade |
|:---|:---|:---:|
| **Fall 2025** | Programming | A |
| | Analytic Geometry | A |
| | Mathematical Analysis I | A |
| | Advanced Algebra I | A- |
| **Spring 2026** | Mathematical Analysis II | A+ |
| | Advanced Algebra II | A |
| | Foundations of Software for AI | A |
| | Introduction to AI | A |

## Community Involvement {: #community}

- **[github-unflag-playbook-cn](https://chi-shan0707.github.io/github-unflag-playbook-cn)** --- Chinese playbook for GitHub account flagging/recovery
- **[ic-guide](https://crys-chen.github.io/ic-guide/)** --- Open-source self-learning guide for integrated circuits
- **[FDUGuideBook/nav-site](https://fduguidebook.com/)** --- Student navigation site for the Fudan community
- **[FDU-Sharing](https://fdu-sharing.vercel.app/)** --- Mutual-aid course-material sharing
- **[Fudan Open Source Initiative (FDU-OSI)](https://github.com/Chi-Shan0707/fdu-opensource-initiative)** --- Founder; an initiative to promote the establishment and exchange of Fudan's open-source community through standardization
