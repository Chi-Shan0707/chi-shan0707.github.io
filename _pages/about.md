---
permalink: /
title: "About"
layout: archive
redirect_from:
  - /about/
  - /about.html
---

<div class="home-intro" markdown="1">

I am Yuhan Chi (pronounced /juːˈhɑːn tʃiː/). I am an undergraduate at the School of Mathematical Sciences, Fudan University,
pursuing a double degree in Information and Computing Science and Artificial Intelligence.

I study applied mathematics: how to model, reason, and make decisions under uncertainty.
This leads me to AI decision-making --- when these decisions can be interpreted and when
they are trustworthy.

</div>

<div class="home-section" markdown="1">

## Research Interests

Mathematical interpretability for AI trust.
Verification and evaluation of LLM reasoning.
Optimization, control, and reinforcement learning for sequential decision-making.

</div>

<div class="home-section" markdown="1">

## Featured Projects

<div class="project" markdown="1">

### [token-verification-mirage](https://github.com/Chi-Shan0707/token-verification-mirage) <span class="github-stars" data-github-stars="Chi-Shan0707/token-verification-mirage" aria-label="GitHub stars"></span>

<div class="meta">Solo-author &middot; ICML 2026 AI4Math Workshop Poster</div>

Controlled evaluation of token-level verification signals for LLM math reasoning.
Protocol choices like global pooling and direction-agnostic AUROC can shift
reported performance by up to 0.18. Shallow token statistics are useful diagnostics,
not stable standalone verifiers.

[Paper](https://openreview.net/pdf?id=wRImV3kfR1) &middot;
[Code](https://github.com/Chi-Shan0707/token-verification-mirage) &middot;
[Workshop](https://ai4math2026.github.io/)

</div>

<div class="project" markdown="1">

### [code-not-text](https://github.com/Chi-Shan0707/code-not-text) <span class="github-stars" data-github-stars="Chi-Shan0707/code-not-text" aria-label="GitHub stars"></span>

<div class="meta">Solo measurement study &middot; 31,040 runs across math, science, coding</div>

Tests cheap hand-crafted features from reasoning traces across domains.
Strong math signal (AoA 0.958), partial science signal (0.799),
weak coding transfer (0.434). Same features track convergence in math
but not executable correctness in code.

[Code](https://github.com/Chi-Shan0707/code-not-text) &middot;
[Demo](https://chi-shan0707.github.io/code-not-text/demo/) &middot;
[Technical note](/tech/code-not-text/)

</div>

<div class="project" markdown="1">

### [TinyLoRA-GRPO-Coder](https://github.com/Chi-Shan0707/TinyLoRA-GRPO-Coder) <span class="github-stars" data-github-stars="Chi-Shan0707/TinyLoRA-GRPO-Coder" aria-label="GitHub stars"></span>

<div class="meta">Solo project &middot; RL for code generation</div>

Small-parameter adaptation and GRPO training pipeline for competitive-programming
code generation on Qwen2.5-Coder-3B. Uses compile-and-run rewards rather than
static heuristics.

</div>

</div>

<div class="home-section" markdown="1">

## Talks

**[From Bandits to PPO: RL Prerequisite Seminar](/talks/2026-04-18-reinforcement-learning-overview)** --- Fudan University, Apr 2026 ([PDF notes](/files/From%20Bandits%20to%20PPO.pdf))

</div>

<div class="home-section" markdown="1">

## Publications

<div class="pub" markdown="1">

<div class="pub-title">Token Verification Mirage</div>
<div class="pub-venue">ICML 2026 Workshop on AI for Math (AI4Math), 2026</div>
<div class="pub-links">
<a href="https://openreview.net/pdf?id=wRImV3kfR1">Paper</a> &middot;
<a href="https://github.com/Chi-Shan0707/token-verification-mirage">Code</a>
</div>

</div>

</div>
