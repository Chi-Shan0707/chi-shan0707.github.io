---
title: "Choice and Alignment"
date: 2026-08-14
permalink: /posts/2026/08/choice-and-alignment/
tags:
  - mathematics
  - social-choice
  - alignment
categories:
  - tech
---



Is it possible to please everyone?





In a society, we all have our own preferences, yet we often need to reach a collective decision or ranking. This is the basic question of social choice
theory. It also resembles a central problem in AI alignment: a system may need to act on behalf of many people whose values are neither identical nor easy to compare.<br>

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

Before drawing any conclusion about deployed systems, it is worth being precise
about what the theorem is.

Arrow's theorem is a **conditional**. It says: 

* *if* a rule accepts every profile, 
* *if* its input is ordinal and interpersonally non-comparable,
* *if* it obeys IIA, and 
* *if* it returns one complete transitive ranking over at least
three alternatives, 
<br> $\rightarrow$ *then* it has a dictator.<br>

But actually, every real alignment method escapes the conclusion, because every one of them violates a hypothesis. So the interesting question is never "does this system have a dictator?" It is:

> Which hypothesis is the system paying to avoid one, and what is the bill?

Three answers follow, and then one that says the bill cannot be avoided by
refusing to aggregate at all.



### What RLHF gives up: independence

The standard reward model is Bradley–Terry:

$$
\Pr(y \succ y') = \sigma\big(r(y) - r(y')\big),
\qquad
\sigma(t) = \frac{1}{1 + e^{-t}}.
$$

Here $r$ is a single scalar reward, fit by maximum likelihood on comparisons pooled across annotators. Two of Arrow's hypotheses fail at once: $r$ is
cardinal, not merely ordinal, and annotator identity is usually discarded, so the rule never sees a profile $R=(\succeq_1,\ldots,\succeq_n)$ — only an
unlabeled pool of comparisons.

Cardinality is the classical escape hatch: allow interpersonal comparison, and utilitarian-style rules become available. But we can say more than "the
theorem does not apply." We can say which rule this is.

Recall Borda count: rank $m$ alternatives, and a candidate's score is how many others it beats on that ballot, summed over voters. Siththaranjan, Laidlaw and
Hadfield-Menell show that when disagreement comes from **hidden context** —annotator identity, values, labeling criterion — preference learning
implicitly runs this rule.<br>
Discarding identity means every comparison already averages over whichever context produced it, so "count wins over all voters" becomes "probability of winning against a random opponent":

$$
\mathrm{BC}(y) = \Pr_{y'\sim\rho}(y\succ y'),
$$

where $\rho$ is the training comparison distribution. RLHF is not aggregating
in some unspecified way. It is running a named voting rule from 1770, chosen
by accident.

Two of Borda's known defects transfer directly.

* **IIA fails operationally.** <br>Suppose

  $$
  \Pr(y_1\succ y_2)=0.6,\qquad \Pr(y_1\succ y_3)=0.4,\qquad \Pr(y_2\succ y_3)=0.7.
  $$

  | | Pair weights | $\mathrm{BC}(y_1)$ | $\mathrm{BC}(y_2)$ | Winner |
  |---|---|---|---|---|
  | **Uniform** | $(y_1 y_2)=\tfrac13,\;(y_1 y_3)=\tfrac13,\;(y_2 y_3)=\tfrac13$ | $0.50$ | $\mathbf{0.55}$ | $y_2$ |
  | **Oversample $y_1 y_2$** | $(y_1 y_2)=\tfrac{9}{10},\;(y_1 y_3)=\tfrac{1}{20},\;(y_2 y_3)=\tfrac{1}{20}$ | $\mathbf{0.59}$ | $0.42$ | $y_1$ |

  $\Pr(y_1\succ y_2)=0.6$ in both rows. Only $y_3$'s sampling frequency changed; the winner flipped.

* **The rule is manipulable.** <br>
  Borda is easy to game, and the same paper draws the consequence: annotators have an incentive to misreport in order to move the model, which surfaces downstream as jailbreak vulnerability.




### What Constitutional AI gives up: universality

Constitutional AI does not aggregate preferences. It fixes a set of principles and trains against them. <br>
In Arrow's language this restricts the domain: $F$ is defined not on all of $\mathcal{R}(X)^N$ but on a subset $\mathcal{D}\subsetneq\mathcal{R}(X)^N$. <br>
Profiles that conflict with the constitution are not reconciled; they are ruled inadmissible.

Domain restriction is a genuine escape, not a dodge. Black's theorem is the
model case.

**Definition (Single-peaked).** Preferences are single-peaked with respect to
a common ordering of $X$ if each individual has an ideal point, and
satisfaction falls monotonically moving away from it in either direction.<br>

**Theorem (Black, 1948).** If every individual's preference is single-peaked with respect to one common ordering, pairwise majority rule yields a transitive social ranking, topped by the median voter's ideal point.<br>

No cycle, no dictator. The price sits in the hypothesis: someone has to supply the axis along which the peaks are single, and they must be single.<br>
Besides, the median voter ends up decisive.

Writing a constitution means picking that axis. But this does not make the problem disappear — it just moves it up one level: from combining everyone's opinions about which response is best to intergrating everyone's opinions about which principle is best. That is the same kind of problem.<br>

Plus, you could keep asking the same question again — who decides how we combine opinions about principles? — and again, and again. But this chain of questions is not fatal. You can stop at some point and give a real reason for stopping there. Still, wherever you stop, that stopping point is itself a choice. No level of this process is free of one.<br>

### Why personalization is not an exit

A tempting escape is: why don't we give each user their own policy? If nobody shares a ranking, nobody can be a dictator!<br>

Sen's theorem says this is unavailable. It concerns rights rather than rankings.<br>

**Definition (Minimal liberalism).** A rule satisfies minimal liberalism if there exist $i \neq j$ and pairs $\{x,y\}, \{z,w\} \subseteq X$ such that $i$ is decisive over $\{x,y\}$, and $j$ is decisive over $\{z,w\}$.

**Theorem (Sen, 1970).** No rule on the unrestricted domain satisfies both weak Pareto and minimal liberalism while always returning an acyclic social
preference.

*Proof.*

$$
a: \text{model answers user 1}, \quad b: \text{model answers user 2}, \quad c: \text{refuses both}
$$

User 1's sphere: $\{a,c\}$. User 2's sphere: $\{b,c\}$.

| | Ranking |
|---|---|
| 1 | $c \succ_1 a \succ_1 b$ |
| 2 | $a \succ_2 b \succ_2 c$ |

$$
c \succ a \ (\text{sphere}_1), \qquad b \succ c \ (\text{sphere}_2), \qquad a \succ b \ (\text{Pareto})
$$

$$
\Rightarrow a \succ b \succ c \succ a. \qquad \square
$$

Personalization *is* minimal liberalism: letting user $i$ set their own policy is exactly granting $i$ decisiveness over pairs that differ only in
$i$'s own affairs. The cycle needs **external preferences** — people caring about others' spheres, not just their own; drop that and Pareto has nothing
to grab onto. Real disputes about model policy are rarely free of external preferences, so the escape is unavailable without also ruling out those
preferences — itself a value judgment.

### Why randomizing does not launder the choice

A decision scheme maps profiles to distributions over $X$: $d: \mathcal{R}(X)^N \to \Delta(X)$.

**Definition.** Strategyproof: truthful reporting is always weakly optimal. Ex post Pareto optimal: never assigns positive probability to a unanimously
dominated alternative.

**Theorem (Gibbard, 1977).** With $\geq 3$ alternatives, any strategyproof,ex post Pareto optimal scheme is a probability mixture of dictatorships: fix
weights $(w_1,\ldots,w_n)$, draw a person, implement their top choice with certainty.

Why nothing else survives: if probability is set by a continuous score(Borda, weighted average, anything smooth), misreporting shifts the score and
shifts the odds — the same burying trick that manipulates Borda count manipulates any score-based lottery. Random dictatorship has no such lever:
the weights are fixed *before* anyone reports, so lying can't change your odds of being drawn, and once drawn, honesty is trivially optimal.

This relocates rather than resolves the question: who is in the lottery, and at what weight? Drop strategyproofness for a smoother blend, and the
misreporting incentive comes back.

### The shape of the answer


| Arrow's hypothesis | Given up by | What replaces it | The bill |
|---|---|---|---|
| Universality | Constitutional AI, hard refusals | Restricted domain; Black-style possibility | Someone writes the constitution, and chooses the axis |
| Ordinal, non-comparable input | Bradley–Terry reward models | Cardinal aggregation — in fact Borda count | Spoiler effects; manipulable annotation |
| One transitive social ranking | Stochastic policies | Decision schemes | Gibbard: strategyproof and efficient $\Rightarrow$ random dictatorship |
| One ranking for everyone | Personalization | Per-user policies | Sen: collides with Pareto once people care about others' interactions |

Every column on the right is a choice about whose preferences count, in what currency, and over whose affairs. None of them is forced, and none of them is neutral.

The goal cannot be to find the neutral rule. It can only be to make the non-neutrality explicit, revisable, and accountable to the people being
ranked.


***

So: can we please everyone? No — but we can be honest about whom we don't, and answerable to them for it.