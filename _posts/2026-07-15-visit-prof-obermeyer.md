---
title: "My Visit to Professor Ziad Obermeyer at UC Berkeley"
date: 2026-07-15
categories: tech
excerpt: "Takeaways from meeting Professor Obermeyer at UC Berkeley School of Public Health — on applied math, interpretability, and mathematical models in healthcare."
---

## Meeting with Professor Ziad Obermeyer (School of Public Health)

### Takeaways

* **Applied Mathematics?** <br>
  Cannot be the top in one field? Try to be in the top 5% in several fields!

* **In serious scenarios, like medical systems, how much do we value interpretability?** <br>
  Very much. Interpretability in this area means that we want our models to perform well on data they haven't seen before. Besides, we need to know if it really has a sense of "science". For example, if I edit the symptom a little, what kind of change will happen in the output, and is the change aligned with the biology?

* **Why do we still need mathematical models? "The bitter lesson" has said: the data and compute will definitely outperform engineered architecture.** <br>
  We need them. First, "Garbage in, garbage out". We need mathematical models to make some data more "high-quality". Secondly, sometimes we cannot directly investigate the things we want. Hence, we should use mathematical models to find proxies.

---

### An ECG biomarker for sudden cardiac death discovered with deep learning

**Ziad Obermeyer, Alexander Schubert, James Ross, Sendhil Mullainathan & Markus Lingman**  
*Nature* volume 655, pages 210–218 (2026)

**Abstract:**  
Sudden cardiac death is, in theory, preventable with defibrillators. But every year, many patients die without defibrillators because doctors fail to predict their risk. The only predictive biomarker in wide use, cardiac left ventricular ejection fraction (LVEF), misses most sudden cardiac deaths, and flags many low-risk patients for futile defibrillators that never fire. Here we apply deep learning to a dataset linking all electrocardiograms (ECGs) in a Swedish region to death certificates. The resulting model isolates a high-risk group (2.2% of the sample) with a 7.0% annual rate of sudden cardiac death, higher than those with reduced LVEF (1.9% of the sample; 4.6% annual rate). Notably, 86.1% of the model’s high-risk patients were not flagged by LVEF. High-risk ECG patients with defibrillators implanted were 54.4% less likely to die than expected, suggesting a mortality benefit. We externally validate the model in a US health system, in which it predicts ventricular arrhythmias that cause sudden death; and a Taiwanese hospital registry, in which it specifically predicts future arrhythmic cardiac arrests. To visualize the waveform morphology ‘discovered’ by the predictive model, we pair it with a generative model of the ECG waveform. Together, they reveal a biomarker that is easily visible and robustly predicts sudden cardiac death, but has not to our knowledge been previously described. Tying the biomarker’s shape to electrophysiological first principles, we form and preliminarily test a new hypothesis on the mechanism of sudden cardiac death.

---

> [!NOTE]
> ### 📝 Coming Soon...
> 
> *More detailed notes and reflections from this insightful conversation and the paper are currently being organized and will be updated here soon!*