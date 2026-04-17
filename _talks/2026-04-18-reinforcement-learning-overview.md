---
title: "From Bandits to PPO: RL Prerequisite Seminar"
collection: talks
type: "Talk"
permalink: /talks/2026-04-18-reinforcement-learning-overview
venue: "Fudan University (internal seminar)"
date: 2026-04-18
location: "Shanghai, China"
excerpt: "A one-hour mathematical bridge from bandits to PPO, designed as preparation for GRPO/DAPO discussions."
pdf_url: "/files/From%20Bandits%20to%20PPO.pdf"
---

This page is the seminar detail page for "From Bandits to PPO". It is organized as a concise index of what the talk covers, while complete derivations and proofs are provided in the PDF notes.

[Read Full Notes (PDF)](/files/From%20Bandits%20to%20PPO.pdf){: .btn .btn--primary }

## Seminar Snapshot

| Item | Detail |
|---|---|
| Theme | Mathematical path from bandits to PPO |
| Positioning | Prerequisite for PPO-family LLM post-training methods (GRPO/DAPO) |
| Duration | 1 hour |
| Audience | Students with basic probability and linear algebra |
| Output | Conceptual map + formulas needed for next seminar |

## Seminar At A Glance

- Goal: understand why modern policy optimization naturally leads to actor-critic, GAE, and PPO
- Focus: theory and intuition first, engineering details later

## Simple Outline

1. Bandits and contextual bandits
2. MDPs, trajectories, and value functions
3. Monte Carlo vs. Temporal Difference (TD)
4. Tabular control: MC iteration, SARSA, Q-learning
5. Function approximation fork: DQN vs. policy parameterization
6. Policy gradient and REINFORCE
7. Baselines, advantage, actor-critic, and GAE
8. PPO clipping objective and practical training loop

## Key Mathematical Threads

- Learning object: value function vs. policy
- Learning signal: Monte Carlo returns vs. TD bootstrapping
- Variance control: baseline subtraction and advantage estimation
- Stability: importance ratio clipping in PPO

## Why This Stop Point Matters

PPO is the right endpoint for this seminar because it gives all the conceptual ingredients needed for understanding GRPO-like variants: policy gradient objective, advantage estimation, and controlled policy updates.

## Detailed Notes

For full derivations, proofs, and algorithm boxes, see the complete note:

- [From Bandits to PPO (PDF)](/files/From%20Bandits%20to%20PPO.pdf)