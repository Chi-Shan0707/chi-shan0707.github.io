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

An instinctive question is whether this theory applies to large language
models, and to *alignment* in particular.

There is a simple one-to-one correspondence between the two vocabularies.

| AI alignment | Social choice theory | Notation |
|---|---|---|
| Model responses, actions, or trajectories | Alternatives | $x \in X$ |
| Annotators, users, or stakeholders | Individuals | $i \in N$ |
| One person's comparison of model behaviors | Individual preference relation | $\succeq_i$ |
| All human feedback | Preference profile | $R=(\succeq_1,\ldots,\succeq_n)$ |
| Feedback-aggregation procedure | Social welfare function | $F$ |
| Collective ordering learned from feedback | Social ranking | $F(R)$ |

The crucial step is the same in both columns: many individual rankings are
compressed into one collective target. If alignment is meant to incorporate
everyone's ordering, then the model must turn a profile of diverse human
preferences into one coherent ranking of its possible behaviors.

One row of that table deserves suspicion, and we will return to it: in practice
the rule is not handed a profile at all. Comparisons from many annotators are
pooled with their labels discarded, so who said what is lost before aggregation
begins. That detail turns out to determine which voting rule the system is
secretly running.

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

Arrow's theorem is a **conditional**. It says: *if* a rule accepts every
profile, *if* its input is ordinal and interpersonally non-comparable, *if* it
obeys IIA, and *if* it returns one complete transitive ranking over at least
three alternatives, *then* it has a dictator. Every real alignment method
escapes the conclusion, because every one of them violates a hypothesis. So the
interesting question is never "does this system have a dictator?" It is:

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

Here $r$ is a single scalar reward, fit by maximum likelihood on comparisons
pooled across annotators. Two of Arrow's hypotheses fail at once. The learned
object is **cardinal**: $r$ carries magnitudes, not merely order. And the
annotator's identity is usually discarded, so the rule never sees a profile
$R = (\succeq_1,\ldots,\succeq_n)$ at all — it sees an unlabeled population of
comparisons.

Cardinality is the classical escape hatch. Interpersonal comparison of utility
is exactly what Arrow's framework forbids, and once it is allowed,
utilitarian-style rules become available. But we can say something much sharper
than "the theorem does not apply." We can say which rule you get instead.

Siththaranjan, Laidlaw and Hadfield-Menell prove that when the source of
disagreement is **hidden context** — the annotator's identity, their values, the
criterion they were labeling under — preference learning implicitly aggregates
by the **Borda count**: the learned reward orders alternatives by

$$
\mathrm{BC}(y) \;=\; \Pr_{y' \sim \rho}\big(y \succ y'\big),
$$

the probability that $y$ is preferred to an alternative drawn at random from the
comparison distribution $\rho$. RLHF is therefore not aggregating in some
unspecified way. It is running a specific voting rule from 1770, selected by
accident rather than by argument.

Everything known about Borda then transfers:

- **IIA fails, and it fails operationally.** Borda's signature defect is the
  spoiler: introducing or removing a third alternative can reverse the ranking
  of two others. Here $\rho$ *is* the training distribution. Change which
  responses get sampled for comparison and you change the learned ordering of
  responses nobody re-labeled.
- **The rule is manipulable.** Borda is notoriously easy to game, and the
  alignment consequence is drawn in the same paper: annotators have an incentive
  to misreport in order to move the model, which surfaces downstream as
  jailbreak vulnerability.

So the honest version of "IIA need not hold" is stronger and more useful: IIA
does not hold, the rule you are left with is Borda count, and Borda's classical
pathologies are alignment failure modes that already have names.

### What Constitutional AI gives up: universality

Constitutional AI does not aggregate preferences. It fixes a set of principles
and trains against them. In Arrow's language this is a restriction of the
domain: $F$ is defined not on all of $\mathcal{R}(X)^N$ but on a subset
$\mathcal{D} \subsetneq \mathcal{R}(X)^N$. Profiles that conflict with the
constitution are not reconciled; they are ruled inadmissible.

Domain restriction is a genuine escape, not a dodge. Black's theorem is the
model case: if every individual's preference is **single-peaked** with respect
to one common ordering of the alternatives, then pairwise majority rule yields a
transitive social ranking, topped by the median voter's ideal point. No cycle,
no dictator. The price is legible in the hypothesis — somebody has to supply the
axis along which the peaks are single, and the median voter ends up decisive.

Writing a constitution is precisely supplying that axis. This is why Collective
Constitutional AI is the right *shape* of response, and also why it does not
dissolve the problem: it reinstates an aggregation step one level higher, over
principles instead of responses, and that step is itself a social welfare
function with axioms of its own. The regress is not vicious — you may stop at
some level and defend stopping there — but there is no level at which no choice
is made.

### Why personalization is not an exit

The most tempting escape is to refuse to aggregate at all: give each user their
own policy. If nobody has to share a ranking, nobody can be a dictator.

Sen's theorem says this is unavailable, and it is the result most worth adding
to this story, because it is about *rights* rather than rankings.

**Definition (Minimal liberalism).** A rule satisfies minimal liberalism if
there exist at least two individuals $i \neq j$ and two pairs
$\{x,y\}, \{z,w\} \subseteq X$ such that $i$ is decisive over $\{x,y\}$ in both
directions, and $j$ is decisive over $\{z,w\}$ in both directions.

Read: each of the two has some private sphere — a pair of alternatives that
differ only in that person's own affairs — over which their preference simply is
society's.

**Theorem (Sen, 1970).** No rule on the unrestricted domain can satisfy both the
weak Pareto principle and minimal liberalism while always returning an acyclic
social preference.

*Proof.* Three alternatives, two users, and the model must adopt exactly one
policy:

$$
\begin{aligned}
a &: \text{the model answers user } 1\text{'s request},\\
b &: \text{the model answers user } 2\text{'s request},\\
c &: \text{the model refuses both.}
\end{aligned}
$$

User $1$'s private sphere is $\{a,c\}$ — whether the model answers *her*. User
$2$'s is $\{b,c\}$ — whether it answers *him*. Now take the profile

| Individual | Ranking |
|---|---|
| 1 | $c \succ_1 a \succ_1 b$ |
| 2 | $a \succ_2 b \succ_2 c$ |

User $1$ is cautious: on her own sphere she would rather be refused,
$c \succ_1 a$. User $2$ is permissive: on his own sphere he would rather be
answered, $b \succ_2 c$. And both rank $a \succ b$ — user $1$ because if exactly
one of them is to receive the answer she trusts herself with it more, user $2$
because he would rather the cautious user be the one confronted with it.

Then

$$
\begin{aligned}
c &\succ a && \text{(user 1 is decisive over her own sphere)},\\
b &\succ c && \text{(user 2 is decisive over his own sphere)},\\
a &\succ b && \text{(weak Pareto)}.
\end{aligned}
$$

The social preference cycles: $a \succ b \succ c \succ a$. No alternative can be
chosen. $\square$

The example is Sen's, transposed, and the transposition is what matters. The
pattern is not exotic; it is the standard shape of every dispute about model
policy. People hold preferences about what the model does for *strangers*, and
those preferences are frequently unanimous across the very people whose spheres
are at stake.

So personalization is minimal liberalism, and it fails as an escape not because
per-user policies are hard to build but because Pareto and private spheres are
jointly inconsistent once cross-preferences exist. "Let each user set their own
policy" is coherent only if we also rule that preferences about other people's
interactions do not count. And *that* is a value judgment — made by the
developer, of exactly the kind we were hoping to avoid.

### Why randomizing does not launder the choice

A deployed model does not emit a ranking. It samples. The right object is a
**decision scheme**: a map from profiles to probability distributions over $X$.
This is a real departure from Arrow's codomain, and it is tempting to hope that
it spreads authority around — a little of everyone's values, nobody decisive.

**Theorem (Gibbard, 1977).** With at least three alternatives, a decision scheme
that is strategyproof and ex post Pareto optimal is a probability mixture of
dictatorial schemes: fix a distribution over individuals, draw one, implement
that individual's top choice.

Sampling among plural values, if we also want the rule to be strategyproof, is a
**random dictatorship**. This is not a reason to abandon randomization — a random
dictator is a great deal better than a fixed one, and the mixing weights are a
real and useful design surface. But it relocates the question instead of
answering it: who is in the lottery, and with what probability? And the
incentive problem from the first subsection rides along. Drop strategyproofness
and annotators can move the weights by misreporting.

### The shape of the answer

Arrow's dictator is an individual *inside the profile*. A model developer, a
reward model, or a company is not one in that precise sense, and it is worth
resisting the slogan that says otherwise. But the disanalogy does not rescue
much, because the content of these theorems survives it:

| Arrow's hypothesis | Given up by | What replaces it | The bill |
|---|---|---|---|
| Universality | Constitutional AI, hard refusals | Restricted domain; Black-style possibility | Someone writes the constitution, and chooses the axis |
| Ordinal, non-comparable input | Bradley–Terry reward models | Cardinal aggregation — in fact Borda count | Spoiler effects; manipulable annotation |
| One transitive social ranking | Stochastic policies | Decision schemes | Gibbard: strategyproof and efficient $\Rightarrow$ random dictatorship |
| One ranking for everyone | Personalization | Per-user policies | Sen: collides with Pareto once people care about others' interactions |

Every column on the right is a choice about whose preferences count, in what
currency, and over whose affairs. None of them is forced, and none of them is
neutral.

That is the transferable conclusion, and it is narrower than "alignment is
impossible" and much sharper than "value pluralism is hard." There is no
aggregation procedure that is simultaneously universal, faithful, independent
and anonymous. So the goal cannot be to find the neutral rule. It can only be to
make the non-neutrality explicit, revisable, and accountable to the people being
ranked.
