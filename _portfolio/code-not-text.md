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
Can surface features from a reasoning trace tell us when an answer is correct? This project studies hand-crafted features such as token confidence, trajectory continuity, reflection count, and novelty across math, science, and coding tasks.

### Takeaway
The same feature family behaves differently across domains: it can be informative for math-style reasoning traces, but is much weaker for coding tasks where executable behavior matters. I treat this as a measurement problem rather than a universal negative result.

### What is included
* Behavioral probing with a compact feature pipeline.
* Ablations around feature families and domain transfer.
* An interactive demo for inspecting examples and visual patterns.

---

[Explore the interactive demo](https://chi-shan0707.github.io/code-not-text/demo/){: .btn .btn--primary }
