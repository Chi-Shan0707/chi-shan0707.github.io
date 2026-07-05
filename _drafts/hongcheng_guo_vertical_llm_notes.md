---
title: "垂直领域大模型 — 郭宏成老师讲座笔记"
date: 2026-04-21
excerpt: "垂域LLM的关键竞争力：工作流建模、benchmark诊断、数据工程、分阶段后训练与Agent闭环"
categories:
  - tech
tags:
  - LLM
  - vertical domain
  - lecture
---

## 1. 一句话总结

**围绕真实工作流，先做场景诊断和测评，再做数据构造、分阶段训练、Agent 落地和线上反馈闭环。**

垂直领域大模型的关键竞争力来自：
- 是否真的理解行业工作流
- 是否有高质量、可控的数据工程
- 是否知道模型短板在哪
- 是否能在成本约束下把能力落到真实应用里

---

## 2. 为什么一定要做垂直领域大模型？

通用大模型在真实行业里至少存在四类缺口：

### 2.1 私有数据与合规
医疗数据、体检报告、专家诊疗记录等不能直接开放给通用模型使用——不是"数据少"，而是根本拿不到、不能外流。

### 2.2 专家经验与隐性偏好
很多行业知识是资深专家长期积累的判断习惯、表达风格、风险偏好，属于"会做但说不全"的 tacit knowledge，需要蒸馏成训练信号。

### 2.3 幻觉与过度自信
通用模型在开放场景中尚可容忍一些错误，但在医疗、运维、翻译、内容治理等场景里，错误会直接传导到真实决策。

### 2.4 从模型到 Agent 的落地鸿沟
真正的行业价值不是会聊天的大模型，而是能进入工作流、调用工具、完成任务的系统。

---

## 3. 统一方法论

三类案例（超声、AIOps、SNS）遵循同一套方法论：

```
行业场景分析
→ 找痛点与工作流
→ 定义 benchmark / 评测任务
→ 构造和清洗数据
→ 分阶段训练（预训练 / SFT / 偏好优化 / RL）
→ 做成应用或 Agent
→ 用线上反馈继续修复模型
```

最关键的四个判断标准：
1. benchmark 设计对不对
2. 数据是否覆盖真实工作流
3. 模型修复是否指向真实短板
4. 成本是否能支撑工业落地

---

## 4. 案例一：超声医疗

### 问题定义
- 超声是高频、无创、无辐射的影像方式，但高度依赖操作者经验
- 不同地区、医院之间能力差距大
- 模型不能只做"看图分类"，而要覆盖完整超声工作流

### 关键观察
**如果模型连"这张超声图是哪个部位"都判断不准，后面的诊断和建议就很容易变成幻觉。**

需要沿真实流程设计任务：数据获取/部位识别 → 病灶定位 → 大小/数值估计 → 诊断 → 报告生成。

### 公开工作
- **U2-BENCH**：7,241 个 case、15 个解剖区域、8 个临床启发任务、50 个超声应用场景。现有 LVLM 在图像分类上相对强，但在空间推理和临床语言生成上仍明显困难。
- **Dolphin v1.0 / Dolphin R1**：200 万级多模态数据集，三阶段训练（领域预训练 → 指令对齐 → 强化 refinement）。Dolphin R1 通过超声奖励的强化学习提升了诊断推理和可解释性。

### 结论
1. 垂域建模必须从工作流出发，而非单点任务
2. 医学大模型是 perception + language + reasoning + reporting 的综合问题
3. 推理模型在高风险行业很重要——提供可阅读的判断过程
4. 通用能力不能完全丢掉，否则退回成旧式单任务模型

---

## 5. 案例二：智能运维（AIOps）

### 问题定义
- 日志动辄几十万行、上百万行
- LLM 擅长：log analysis、dependency analysis、risk analysis、root cause analysis
- LLM 不擅长：长时间序列指标预测、纯数值外推

### 方法论
先分析痛点 → 设计 benchmark → 定位模型短板 → 针对性训练 → 落成 Agent 系统。

### 公开工作
- **OWL**：覆盖 9 类运维域知识（信息安全、应用、系统架构、软件架构、中间件、网络、操作系统、基础设施、数据库），提出 HMCE 处理输入长度限制。
- **mABC**：多智能体系统，通过 Agent Workflow + blockchain-inspired voting 降低幻觉和循环依赖，7 个专长不同的 agent 共同完成微服务根因定位与修复。

### 结论
1. 长上下文是垂域核心能力，不是工程细节
2. 复杂系统问题需要多 agent 协作
3. 行业 benchmark 本质是"任务地图"——先有地图，才知道该修哪块
4. 垂域系统要能定位问题，也要能进入操作流程

---

## 6. 案例三：SNS / 社交平台

### 核心判断
社交平台真正重要的是"建立共鸣"，而非单纯的语言交流。模型需要理解：笔记内容、评论区反馈、emoji/梗/hashtag、情感走向、热点语境、多模态图文共同表达的"氛围"。

### 四种关键能力
1. 笔记理解
2. 信息检索与精确匹配
3. 情感与意图理解
4. 个性化推荐

### SNS 翻译的特殊性
以 TikTok 用户涌入小红书为例：SNS 翻译不是字面对应，必须处理 meme/梗、emoji 语义、火星文/非正式表达、文化背景、评论区上下文、图文联动含义。

### 公开工作
- **SNS-Bench**（ICML 2025）：8 类任务、6,658 个社交文本问题，将 SNS 从零散小任务提升为系统评测对象。
- **RedTrans**（72B）：Dual-LLM Back-Translation Sampling + Rewritten Preference Optimization (RePO) + RedTrans-Bench，重点评测 humor localization、emoji semantics、meme adaptation，已落地生产。
- **RedOne**：continued pretraining → SFT → preference optimization 三阶段。相比 base model，8 大 SNS 任务平均提升 14.02%，双语评测提升 7.56%，线上 harmful content exposure 降低 11.23%，post-view search 点击率提升 14.95%。
- **RedOne 2.0**：RL-prioritized progressive post-training——Exploratory Learning（找系统性短板）→ Targeted Fine-Tuning（只对诊断出的缺口做 SFT）→ Refinement Learning（SNS 信号做 RL 修复）。更小模型尺度也能获得稳定收益，数据量不到早期 SFT-heavy 路线的一半。

### 结论
**社交平台不是"知识更垂直"，而是"分布更特殊"。** 模型要学的不只是事实知识，还包括平台语体、用户偏好、情绪传播机制、审核/治理规则、多模态表达方式、上下文氛围。

---

## 7. 训练观：从"规模驱动"到"效率驱动"

| 旧范式（规模驱动） | 新范式（效率驱动） |
|---|---|
| 堆更多数据 | 场景诊断，只补最关键的数据 |
| 堆更大参数 | 用更小更快的模型 |
| 堆更多算力 | 成本可控前提下解决问题 |
| 开放式学术优化 | 受预算约束的工业优化 |

核心理念：
- **数据工程比花哨模块更重要**
- **评测设计比盲目训练更重要**
- **模型错误本身也是宝贵训练信号**
- **高难样例更能拉高能力边界**
- **偏好数据要靠人来做关键纠偏**

---

## 8. 为什么垂域模型中仍要保留通用能力？

> "如果只保留垂域打分能力，那它更像传统小模型。大模型的价值在于还能和人交流、解释、切换任务、进入复杂系统。"

**垂直领域大模型的目标不是把通用能力全部换成行业技能，而是在尽量保住 general ability 的前提下，把行业能力"插进去"。**

---

## 9. 关于可解释性

推理过程作为面向用户的可读 explanation，在高风险场景（如医疗）中能明显提升用户接受度。

但需注意区分：
- **面向用户的、可读的 explanation** ← 老师强调的
- **严格意义上的 faithful mechanistic interpretability** ← 学术上更严格的要求

近年研究表明，Chain-of-Thought 解释可能"看起来合理"但不一定忠实反映模型内部决策机制。这一区分对后续研究很重要。

---

## 10. 十个核心观点

1. 垂域不是先训模型，而是先定义工作流
2. benchmark 不是附属品，而是整个研究管线的起点
3. 数据质量、覆盖度、偏好信号，比盲目堆量更关键
4. 高风险场景里，"推理可读性"本身就是产品能力
5. SFT 更像"学知识"，RL/preference learning 更像"修回答方式和决策偏好"
6. 通用能力保不住，垂域模型就容易退回旧时代的专用分类器
7. 长上下文不是附加项，在日志、医疗、多轮交互里就是核心能力
8. 多 Agent 适合复杂流程，但前提是 workflow 设计得好
9. 工业界真正的壁垒不在 paper 里的 1% 提升，而在数据、调度、稳定性和系统工程
10. 垂域模型研究的终点不是分数，而是上线后的价值闭环

---

## 11. 文献对照

| 观点 | 支持文献 |
|------|---------|
| 领域继续预训练有效 | Don't Stop Pretraining (DAPT/TAPT) |
| 持续微调存在遗忘 | Catastrophic Forgetting in LLMs During Continual Fine-tuning |
| SFT → preference learning 有 trade-off | Understanding Forgetting in LLM SFT and Preference Learning |
| benchmark 反向塑造研究方向 | A Survey on LLM Benchmarks |
| CoT 解释不一定忠实 | Language Models Don't Always Say What They Think |

---

## 12. 最终归纳

> **垂直领域大模型 = 工作流建模 + benchmark 诊断 + 数据工程 + 分阶段后训练 + Agent 化部署 + 在线反馈修复。**

而不是："找个基座模型，再喂一点行业数据。"

---

## 参考资料

**讲座相关公开工作：**
- U2-BENCH: Benchmarking Large Vision-Language Models on Ultrasound Understanding
- Dolphin v1.0 Technical Report
- OWL: A Large Language Model for IT Operations
- mABC: multi-Agent Blockchain-Inspired Collaboration for Root Cause Analysis
- SNS-Bench: Defining, Building, and Assessing Capabilities of LLMs in SNS (ICML 2025)
- RedTrans: Redefining Machine Translation on SNS with LLMs
- RedOne: Revealing Domain-specific LLM Post-Training in SNS
- RedOne 2.0: Rethinking Domain-specific LLM Post-Training in SNS

**方法论补充：**
- Don't Stop Pretraining: Adapt Language Models to Domains and Tasks
- An Empirical Study of Catastrophic Forgetting in LLMs During Continual Fine-tuning
- Understanding Forgetting in LLM SFT and Preference Learning
- A Survey on Large Language Model Benchmarks
- Language Models Don't Always Say What They Think
- Are Self-Explanations from Large Language Models Faithful?
