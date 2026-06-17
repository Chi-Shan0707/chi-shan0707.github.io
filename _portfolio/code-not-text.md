---
title: "Cross-Domain Behavior of CoT Surface Features"
excerpt: "A study of when hand-crafted reasoning-trace features are diagnostic across math, science, and coding tasks."
collection: portfolio
link: https://chi-shan0707.github.io/code-not-text/demo/
header:
  teaser: "themes/code-not-text-teaser.png"
sidebar:
  - title: "Role"
    image: profile.png
    content: "Research and implementation"
  - title: "Tech Stack"
    text: "Python, SVD, Logistic Regression, Transformer Lens"
---

### The Core Inquiry
Can cheap summaries of a chain-of-thought trace predict whether a solution is correct? This project studies one narrow, interpretable feature family across math, science, and coding rather than claiming that all text-based verifiers succeed or fail.

### Setup
The study uses DeepSeek-R1-0528-Qwen3-8B and features such as token-confidence summaries, token-trajectory statistics, trajectory continuity, novelty, reflection count, and a small activation-derived descriptor. Evaluation uses problem-grouped splits, AoA across trace anchors, AUROC@100%, and best-of-N reranking.

### Main Result
The feature family behaves differently by domain:

- **Math:** AoA 0.958, AUROC@100% 0.982, best-of-N=64 pass@1 +10.0 pp
- **Science:** AoA 0.799, AUROC@100% 0.841, best-of-N=64 pass@1 +8.0 pp
- **Coding:** AoA 0.434, AUROC@100% 0.407, best-of-N=64 pass@1 -0.6 pp

### Interpretation
The same feature names do not necessarily measure the same latent construct. In math, reflection count and continuity can track failure-to-converge. In science, the signal is narrower and confidence-heavy. In coding, executable correctness is farther from the surface form of the reasoning trace.

### Robustness Checks
The coding result is not just one failed probe. I tested an 83-scalar coding feature sweep, grouped feature ablations, a coding-specific CoT-only judge, nonlinear MLPs, SSL pre-training on 42K unlabeled traces, and token-level de-knotting. None produced a strong generalizable coding verifier from this feature family.

### Boundary
This does not rule out raw-text classifiers, code-aware models, execution-aware selectors, hidden-state probes, or LLM judges. The conclusion is narrower: cheap CoT-surface features are domain-specific measurement instruments, not general-purpose correctness proxies.

---

[Explore the interactive demo](https://chi-shan0707.github.io/code-not-text/demo/){: .btn .btn--primary }
[Read the report](https://github.com/Chi-Shan0707/code-not-text/blob/main/project_report/project_report.pdf){: .btn }
