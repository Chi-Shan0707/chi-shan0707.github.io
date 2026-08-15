---
title: "Choice and Alignment: Is it possible to please everyone?"
date: 2026-08-14
permalink: /posts/2026/08/choice-and-alignment/
tags:
  - mathematics
  - social-choice
  - alignment
categories:
  - tech
---

In a society, we all have our own preferences, yet we often need to reach a
collective decision or ranking. This is the basic question of social choice
theory. It also resembles a central problem in AI alignment: a system may need
to act on behalf of many people whose values are neither identical nor easy to
compare.

Arrow's framework makes this question precise.

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


<!-- ($x,y,z \in X $)<br> -->

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

The set $\mathcal{R}(X)^N$ is called the **preference-profile space**.

Thus, a preference profile is not itself a social ranking. It is the complete
input to an aggregation rule: one preference relation for each individual. In
this formal model, $N$ is the **society**, while $R$ is the society's preference
profile over the set of alternatives $X$.

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

that maps every preference profile $R$ to a complete and transitive **social
preference relation**, or **social ranking**, $F(R)$. It does not merely select
a winner; it ranks all alternatives for society as a whole.

This distinction matters. A **social choice function** instead maps a profile
to one chosen alternative (or a set of chosen alternatives). Arrow's theorem is
usually stated for social welfare functions.

## Arrow's requirements

As we learn in geometry, we should build from the most basic elements.

After these primitive definitions, what kinds of axioms come to mind?

1. Should it satisfy **universality**? It seems natural that every preference
   profile should be mapped to a social ranking.

2. Should it follow **unanimity**? If everyone strictly prefers $x$ to
   $y$—that is, $x \succ_i y$ for every $i \in N$—then shouldn't the social
   ranking also have $x \succ y$?

3. What about **independence of irrelevant alternatives**? Should the relative
   ranking of $x$ and $y$ depend only on how people compare $x$ with $y$,
   regardless of how good or bad another alternative $z$ is?

4. Should it satisfy **monotonicity**? Suppose the current social ranking has
   $x \succ y$. If an individual $k$ changes their preference from
   $x \prec_k y$ to $x \succ_k y$, shouldn't the social ranking still have
   $x \succ y$?
   This idea also relies on condition 3: reversing the relation between $x$ and
   $y$ may affect how they compare with other alternatives, but those changes
   should not affect the collective comparison between $x$ and $y$, right?



More importantly, just as in Euclidean geometry, we want as few axioms as
possible. It turns out that condition 4 can be derived from the first three.

**Lemma (Monotonicity).** Suppose a social welfare function satisfies
universality, unanimity, and IIA. If its social ranking has $x \succ y$ under a
preference profile $R$, and one individual changes their preference from
$x \prec_k y$ to $x \succ_k y$, then the social ranking under the new profile
$R'$ still has $x \succ y$.


*Proof.*

Suppose that, under a preference profile $R$, the individuals in a group $G$
prefer $x$ to $y$, while everyone outside $G$ prefers $y$ to $x$. Nevertheless,
the resulting social ranking has $x \succ y$.

Now choose an individual $k \notin G$ and change only their comparison of $x$
and $y$, from $x \prec_k y$ to $x \succ_k y$. Call the resulting preference
profile $R'$. We want to show that its social ranking still has $x \succ y$.

Introduce a third alternative $z$ and construct two auxiliary profiles,
$R_1$ and $R_2$. The relevant preferences in all four profiles are:

| Individuals | $R$ | $R_1$ | $R_2$ | $R'$ |
|---|---|---|---|---|
| $i \in G$ | $x \succ_i y$ | $x \succ_i y \succ_i z$ | $x \succ_i z \succ_i y$ | $x \succ_i y$ |
| $k$ | $y \succ_k x$ | $y \succ_k x \succ_k z$ | $x \succ_k z \succ_k y$ | $x \succ_k y$ |
| $j \notin G \cup \{k\}$ | $y \succ_j x$ | $y \succ_j z \succ_j x$ | $z \succ_j y \succ_j x$ | $y \succ_j x$ |


Can you see how to prove it? Think boldly!

First consider $R_1$. Every individual compares $x$ with $y$ exactly as they
do under $R$. By IIA, the social comparison is unchanged, so $x \succ y$ under
$R_1$. Moreover, everyone prefers $y$ to $z$. By unanimity, the social ranking
has $y \succ z$. Transitivity then gives $x \succ z$.

Next consider $R_2$. Every individual compares $x$ with $z$ exactly as they do
under $R_1$. By IIA, we retain $x \succ z$. Everyone also prefers $z$ to $y$,
so unanimity gives $z \succ y$. By transitivity, $x \succ y$ under $R_2$.

Finally, every individual compares $x$ with $y$ in the same way under $R_2$ and
$R'$. Applying IIA once more gives $x \succ y$ under $R'$. Thus, moving one
individual's preference in favor of $x$ cannot cause $x$ to fall below $y$ in
the social ranking. This is exactly monotonicity.

$$
\square
$$



## When social choice becomes alignment

A instinctive idea is whether we can apply this theory to LLM, especially *alignment*.<br>

We can easily formulate a very simple one-to-one corresponding between AI alignment and Social choice theory.<br>

| AI alignment | Social choice theory | Notation |
|---|---|---|
| Model responses, actions, or trajectories | Alternatives | $x \in X$ |
| Annotators, users, or stakeholders | Individuals | $i \in N$ |
| One person's comparison of model behaviors | Individual preference relation | $\succeq_i$ |
| All human feedback | Preference profile | $R=(\succeq_1,\ldots,\succeq_n)$ |
| Feedback-aggregation procedure | Social welfare function | $F$ |
| Collective ordering learned from feedback | Social ranking | $F(R)$ |

The crucial step is still the same: many individual rankings are compressed into one collective target. <br>
If alignment is meant to incorporate everyone's
ordering, then the model must somehow turn a profile of diverse human preferences into one coherent ranking of its possible behaviors.

And now an uncomfortable concern arises. Will the model's values be dominated
by a small group of people who hold the power to define them? More sharply,
could there be a single *dominator*—one voice whose preferences always become
the model's preferences?

Actually, Arrow gives this concern a precise name.



**Definition (Dictator).** An individual $d \in N$ is a dictator if, for every
preference profile and every pair $x,y \in X$, $x \succ_d y$ always implies
$x \succ y$ in the social ranking, regardless of what everyone else prefers.

Surely we would also want **non-dictatorship**: no such individual should
exist. Yet this final wish conflicts with the apparently natural requirements
we already imposed.

##  A dictator always exists

Let $G \subseteq N$ and let $x,y \in X$.

**Definition (Weakly decisive set).** The set $G$ is weakly decisive (or
*almost decisive*) for $x$ over $y$ if

$$
\left.
\begin{aligned}
x &\succ_i y && \text{for every } i\in G,\\
y &\succ_j x && \text{for every } j\notin G
\end{aligned}
\right\}
\quad\Longrightarrow\quad
x\succ y.
$$

Thus, $G$ wins even when everyone outside $G$ takes the opposite side.

**Definition (Strongly decisive set).** The set $G$ is strongly decisive for
$x$ over $y$ if

$$
x\succ_i y \text{ for every } i\in G
\quad\Longrightarrow\quad
x\succ y,
$$

regardless of the preferences outside $G$. A strongly decisive set is usually
called simply a **decisive set**.

The monotonicity lemma immediately connects the two definitions:

$$
\text{weakly decisive for }(x,y)
\quad\Longrightarrow\quad
\text{strongly decisive for }(x,y).
$$

IIA first removes all comparisons unrelated to $x$ and $y$. Starting from the
worst case, in which every outsider opposes $G$, monotonicity then tells us that
moving any outsider toward $x$ cannot reverse $x\succ y$.

**Lemma (Field expansion).** If $G$ is decisive for one ordered pair, then it
is decisive for every ordered pair.

*Proof.* Suppose $G$ is decisive for $x$ over $y$. Introduce $z$ and construct

$$
\begin{array}{c|cc}
 & G & N\setminus G \\ \hline
P_1 & x\succ y\succ z & y\succ z\succ x
\end{array}
$$

Then

$$
\begin{aligned}
x&\succ y,\\
y&\succ z,\\
\therefore\quad x&\succ z.
\end{aligned}
$$

The first relation follows from decisiveness, the second from unanimity, and
the third from transitivity. Exactly $G$ supports $x$ over $z$; by IIA, the
same social comparison holds in every profile with this pairwise pattern.
Thus $G$ is weakly—and hence strongly—decisive for $x$ over $z$.

Now construct

$$
\begin{array}{c|cc}
 & G & N\setminus G \\ \hline
P_2 & z\succ x\succ y & y\succ z\succ x
\end{array}
$$

This time,

$$
\begin{aligned}
z&\succ x,\\
x&\succ y,\\
\therefore\quad z&\succ y.
\end{aligned}
$$

Exactly $G$ supports $z$ over $y$, so IIA and monotonicity make $G$ decisive
for this pair as well. Repeating these two extensions reaches every ordered
pair. $\square$

**Theorem (Arrow).** If there are at least three alternatives, every social
welfare function satisfying universality, unanimity, and IIA has a dictator.

*Proof.* By unanimity, $N$ is decisive. Choose a decisive set $G$ of minimum
size. Suppose $|G|>1$ and split it into two nonempty sets:

$$
G=G_1\mathbin{\dot\cup}G_2,
\qquad
H=N\setminus G.
$$

By universality, the following profile is admissible:

| Individuals | Preference |
|---|---|
| $G_1$ | $x \succ y \succ z$ |
| $G_2$ | $y \succ z \succ x$ |
| $H$ | $z \succ x \succ y$ |

Every member of $G$ prefers $y$ to $z$, while everyone in $H$ prefers $z$ to
$y$. Since $G$ is decisive,

$$
y\succ z.
$$

By completeness, either

$$
x\succ z
\qquad\text{or}\qquad
z\succeq x.
$$

**Case 1:** $x\succ z$. Exactly the members of $G_1$ prefer $x$ to $z$.
By IIA, $G_1$ is weakly decisive for $(x,z)$, hence strongly decisive for every
pair. But

$$
\varnothing\neq G_1\subsetneq G,
$$

contradicting the minimality of $G$.

**Case 2:** $z\succeq x$. From transitivity,

$$
\begin{aligned}
y&\succ z,\\
z&\succeq x,\\
\therefore\quad y&\succ x.
\end{aligned}
$$

Exactly the members of $G_2$ prefer $y$ to $x$. Thus $G_2$ is weakly decisive
for $(y,x)$ by IIA, hence strongly decisive for every pair. Again,

$$
\varnothing\neq G_2\subsetneq G,
$$

contradicting minimality.

Therefore $G$ cannot contain more than one individual. Hence

$$
G=\{d\}
$$

for some $d\in N$. Since $G$ is decisive for every ordered pair, $d$ is a
dictator.

$$
\square
$$

Therefore universality, unanimity, IIA, and non-dictatorship cannot all hold at
once.

## Back to real alignment

Arrow's dictator is one individual *inside the preference profile*. A model
developer, a reward model, or a company is not automatically a dictator in
this precise sense.

Real alignment also lies outside this simple ordinal model. RLHF uses sparse
comparisons to learn cardinal rewards, and data about a third response can
change the learned ranking of the first two; IIA therefore need not hold.
Arrow identifies a tension in preference aggregation, not a literal diagnosis
of every deployed system.

Constitutional AI is different again. Its constitution is an external set of
principles, not one individual's ranking in $R$, so it is not an Arrow
dictatorship. The question merely moves: who writes the principles, and how can
they be revised? Collective Constitutional AI reintroduces aggregation at this
constitutional level. Alignment is not simply doomed to a dictator—but neither
is there a neutral way to avoid choices about whose values count.
