---
title: "Token-Level Verification under Controlled Evaluation"
excerpt: "A controlled audit of shallow token-level verification signals for LLM math reasoning."
collection: portfolio
link: https://github.com/Chi-Shan0707/token-verification-mirage
sidebar:
  - title: "Venue"
    content: "Poster, ICML 2026 Workshop on AI for Math (AI4Math)"
  - title: "Links"
    text: "[Paper PDF](/files/token-verification-mirage.pdf) · [Code](https://github.com/Chi-Shan0707/token-verification-mirage) · [Workshop](https://ai4math2026.github.io/)"
---

This project asks whether shallow token-level signals—entropy, log-probability, and confidence trajectories—can distinguish correct from incorrect math reasoning traces without extra model calls.

The emphasis is not on proposing a new verifier. Instead, the project audits how much apparent verification performance depends on evaluation protocol choices such as global pooling, in-sample scoring, direction-agnostic AUROC, and within-problem controls.

**Takeaway:** shallow token statistics can be useful diagnostics, but they should be reported with fixed-direction baselines and permutation-null calibration before being treated as stable standalone verifiers.

[View the code](https://github.com/Chi-Shan0707/token-verification-mirage){: .btn .btn--primary }
[Read the paper](/files/token-verification-mirage.pdf){: .btn }
[Workshop website](https://ai4math2026.github.io/){: .btn }
