---
title: "Choice and Alignment: Is it possible?"
date: 2026-08-14
permalink: /posts/2026/08/choice-and-alignment/
tags:
  - mathematics
  - social-choice
  - alignment
categories:
  - tech
---

How can many individual preferences be combined into one collective decision?
This is the basic question of social choice theory. It also resembles a central
problem in AI alignment: a system may need to act on behalf of many people whose
values are neither identical nor easy to compare.

Arrow's framework makes this question precise. Before stating his impossibility
theorem, we need a small collection of definitions.

## Alternatives and individuals

Let

$$
X = \{x_1, x_2, \ldots, x_m\}
$$

be a finite set of **alternatives**. These may be candidates in an election,
public policies, or possible actions of an AI system. Let

$$
N = \{1, 2, \ldots, n\}
$$

be the set of **individuals** in the society.

Each individual $i \in N$ has a preference relation $\succeq_i$ over $X$. The
statement $x \succeq_i y$ means that individual $i$ considers $x$ at least as
good as $y$. We normally require this relation to be:

- **complete**: for any $x,y \in X$, either $x \succeq_i y$ or
  $y \succeq_i x$ (or both); and
- **transitive**: if $x \succeq_i y$ and $y \succeq_i z$, then
  $x \succeq_i z$.

A complete and transitive preference relation is called a **weak order**. Its
strict part is written $\succ_i$: $x \succ_i y$ means that $i$ strictly prefers
$x$ to $y$. Indifference is written $x \sim_i y$.

Let $\mathcal{R}(X)$ denote the set of all weak orders over $X$.

## Preference profiles and society

A **preference profile** records the preferences of everyone in the society:

$$
R = (\succeq_1, \succeq_2, \ldots, \succeq_n)
  \in \mathcal{R}(X)^N.
$$

Thus, a profile is not itself a collective preference. It is the complete input
to an aggregation rule: one ordering for each individual. In this formal model,
a **society** consists of the set of individuals $N$, the alternatives $X$, and
the profile of individual preferences under consideration.

For example, suppose three people rank three alternatives as follows:

| Individual | Ranking |
|---|---|
| 1 | $x \succ_1 y \succ_1 z$ |
| 2 | $y \succ_2 z \succ_2 x$ |
| 3 | $z \succ_3 x \succ_3 y$ |

Pairwise majority voting gives $x \succ y$, $y \succ z$, and $z \succ x$.
Although every individual ranking is transitive, the majority relation is
cyclic. This is the **Condorcet paradox**, and it shows why aggregation is not
simply a matter of counting pairwise votes.

## From a profile to a social ranking

A **social welfare function** is a rule

$$
F: \mathcal{R}(X)^N \longrightarrow \mathcal{R}(X)
$$

that maps every preference profile to a complete and transitive **social
preference relation** $\succeq_F$. It does not merely select a winner; it
produces a ranking of all alternatives for society as a whole.

This distinction matters. A **social choice function** instead maps a profile
to one chosen alternative (or a set of chosen alternatives). Arrow's theorem is
usually stated for social welfare functions.

## Arrow's requirements

Arrow considered several conditions that appear individually reasonable:

1. **Unrestricted domain (universality).** The rule accepts every logically
   possible profile in $\mathcal{R}(X)^N$.
2. **Pareto efficiency (unanimity).** If every individual strictly prefers $x$
   to $y$, then society must strictly prefer $x$ to $y$.
3. **Independence of irrelevant alternatives (IIA).** Society's comparison of
   $x$ and $y$ depends only on how individuals compare $x$ with $y$. Changing
   their opinions about a third alternative $z$ cannot reverse the social
   ordering of $x$ and $y$.
4. **Non-dictatorship.** There is no individual $d$ whose strict preference
   between every pair of alternatives always determines the corresponding
   social preference, regardless of everyone else's views.

## The impossibility theorem
