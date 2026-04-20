---
permalink: /review/
title: "After Action Review"
author_profile: true
redirect_from:
  - /review.html
---

# Daily Review

## Kaggle
1. 不要使用自己完全不理解的算法，不要让ai写自己看不懂的程序（指santa ）
2. 包的版本很重要，所有参数都需要注意（指所有pytorch之类的）
3. 管线的概念
4. 数据的格式！ 了解到整体把握, e.g.[spacecraft]中，具体的数据处理方法（缺失值）,pipeline搭建,joblib
5. 善用github搜索前人经验（如[monet]，找到别人的cyclegan with pytorch,自己再去理解）


## lora
1. 使用别的模型/vibecoding前，先了解好对象，做好背调：比如模型会话输入格式(别ai说alpaca就alpaca）【当时花了很多时间在测试是否能读取json格式，以怎样形式读取，ai又能否拆解，实际上不要问大模型，他们出幻觉就完蛋了，自己去查可靠的资料和前人的轮子】
2. 看看有没有前人的例子（qwen模型有很多开源教程）；
3. 看看每个库的版本


## HacKawayi
1. 风格的统一
2. workspace, codespace
3. 版本dockerfile很重要
4. localstorage存登录信息


## baseball：
1. 处理好工具，理解好所用工具的作用
2. 保持耐心
3. 现实数据往往很差劲

## 概率论
1. 专心阅读
2. 合理使用ai，但不要完全依赖，完全信任

## 论文
1. 参数
2. 专有名词


## 20260204
1. 去了解yolo，语义分割
2. 我做一个baseball模型最后需要能解出一点东西才能有用处（即因果推断）
3. 为达到这个可以看点文章

4. 大的创新只有：transofor，resenet，别的人，小的创新耳耳？
5. 我能做的创新： 别人没想到能把这套方法用在这个问题上，我用了；我迁移的过程中发现有些不好的地方，我因地制宜修改了；我组合其他模型一起使用；看看自己读过的论文能不能用上
6. 读论文：知道这个论文做了什么，有个怎样的结论，遇到了怎样的问题，怎么解决的
7. 怎样的优点，怎样的缺点？
8. 后人怎么引用这篇论文的，我能不能去复现？我能不能去使用/改进

## 20260205
1. 科目一考过，证明精力要适当分配，本就不用太过担心，花太多时间；同时心态还是有点急躁（考试时第一遍83分有很多傻子错
2. 不要太纠结，time is money，现在火车票已经没了。这次能转莆田，下次不一定了
3. 又重新搞了一下概率论，还是要有耐心和专注度
4. 回顾了一下在线算法，关于log的放缩其实还没有那么【下意识】，关于英语文档也许再熟悉一下；
5. 把论文最后收尾读完了，明天有空再最后看一看那些提到的论文，局限，
6. 随机算法要去学

## 20260206
1. 环境配置陷阱：GeoPandas 的依赖地狱

* **错误现象**：尝试安装 `geopandas` 时，Conda 的 `solving environment` 无限卡顿，无法完成环境配置。
* **解决方案**：果断放弃 `geopandas` 和 GIS 库。转而利用 `edge_index`（图拓扑）和 NumPy/Pandas 纯数学计算来提取特征（如通过出入度判断节点性质）。
* **经验教训**：**如无必要，勿增实体。** 在深度学习任务中，如果能用简单的矩阵运算或图结构代替复杂的 GIS 操作，优先选择前者，以保证环境的轻量化和可复现性。

2. PyG 数据集持久化与安全加载 (PyTorch 2.6+ 特性)

* **错误现象**：
  -  `FileNotFoundError`：Dataset 初始化报错，因为 `process()` 方法只处理了数据却忘记调用 `torch.save()`。
  -  `pickle.UnpicklingError`：修复保存后，加载时报错，因为 PyTorch 2.6+ 默认开启 `weights_only=True`，拒绝加载自定义的 HeteroData 对象。


* **解决方案**：
  -  在 `process()` 末尾显式添加 `torch.save((self.data, self.slices), ...)`。
  -  在 `torch.load()` 中显式设置 `weights_only=False`。


* **经验教训**：**闭环思维**。写数据处理管线时，时刻检查"输入-处理-输出-加载"的完整性；同时关注深度学习框架的新版本 Breaking Changes（如安全策略变更）。

3. 异构图卷积的自环问题 (Topology Constraint)

* **错误现象**：`ValueError: add_self_loops attribute set to True...`。GATv2Conv 试图在异构边（如 `manhole -> cell`）上添加自环。
* **解决方案**：在 `model.py` 构建卷积层时，针对跨类型的边（Bipartite edges）显式设置 `add_self_loops=False`。
* **经验教训**：**物理意义优先**。在图神经网络中，自环意味着"自己指向自己"。对于不同类型的节点交互（如下水道流向地面），物理上不存在"自己流向自己"的概念，代码必须尊重物理拓扑。

4. 循环神经网络 (GRU) 的维度匹配

* **错误现象**：`RuntimeError: mat1 and mat2 shapes cannot be multiplied`。
* **解决方案**：意识到 GRU 的门控机制是将"当前输入 "和"上一时刻隐状态 "拼接作为输入。因此，卷积层的输入维度应该是 `2 * hidden_dim` 而不是 `hidden_dim`。
* **经验教训**：**张量演算需谨慎**。在实现自定义的 RNN/GRU 单元时，必须手推一遍每一层的输入输出维度，特别是涉及 `torch.cat` 操作的地方。

5. 自回归训练的梯度流截断 (Autoregressive Detach)

* **错误现象**：`RuntimeError: Trying to backward through the graph a second time`。
* **解决方案**：在 `train.py` 的时间步循环中，将传递给下一时刻的隐状态 `h_dict` 进行 `.detach()` 操作。
* **经验教训**：**理解计算图**。在处理长序列（BPTT）时，必须手动切断历史梯度的传播，否则计算图会无限累积，既耗尽显存又导致逻辑错误。

6. 数据集划分与路径硬编码 (Train vs Test)

* **错误现象**：`FileNotFoundError`。在推理阶段，代码试图在 `.../train/` 目录下寻找测试集文件（如 `event_17`），导致失败。
* **解决方案**：重构 `UrbanFloodDataset`，增加 `split` 参数（'train'/'test'），使其能根据模式动态生成 `raw_dir` 路径。
* **经验教训**：**代码模块化与参数化**。永远不要在 Dataset 类中硬编码路径。始终假设你的模型需要运行在不同的数据子集上。

7. 大规模推理的内存溢出 (OOM / Killed)

* **错误现象**：`Killed`。在推理包含 29 个 Event 的测试集时，尝试将所有结果保存在一个巨大的 List 中，导致内存撑爆。
* **解决方案**：实施**流式写入 (Stream Writing)**。每跑完一个 Event，立即将结果写入 CSV 并清空内存 (`gc.collect`)，不再在 RAM 中囤积数据。
* **经验教训**：**工程思维**。在处理大数据（尤其是时空序列）时，必须假设内存是有限的。批处理和流式处理是解决大规模数据推理的唯一正解。

8. **自回归崩溃与数值爆炸 (The NaN Disaster)**

* **错误现象**：Submission contains null values。虽然模型训练正常，但在生成提交文件时，前 10 步数据正常，第 11 步开始突然变成 NaN 或 Infinity，导致 5000 万行数据中有 4800 万行无效。

* **核心概念 (新学到的知识)**：
  - Ground Truth (地面真值/标准答案)：真实世界观测到的数据（如真实水位）。
  - Teacher Forcing (教师强制)：一种训练策略。就像"爸爸扶车把"，在训练时不管模型上一步预测得偏离多远，下一步输入时强行把它纠正回 Ground Truth，让模型基于正确的数据继续算。

* **根本原因**：
  - 过度依赖 (Exposure Bias)：模型在训练时享受了 Teacher Forcing 的"呵护"，没学会在犯错后自我调整。
  - 推理崩溃：在推理（Inference）阶段，没有 Ground Truth 可用，模型必须吃自己上一步生成的预测值。一旦产生一点微小的误差，这个误差会在几十个时间步内指数级放大（1.01 的 100 次方），最终导致数值溢出（梯度爆炸）。
  - 数据未归一化：输入数据的绝对值差异过大（0 到 500），加速了这种爆炸。

* **解决方案**：
  - 急救 (Inference time)：在推理循环中加入数值截断 (Clamping)。使用 torch.clamp(val, 0, 200) 和 nan_to_num，给模型装上强制护栏，无论它算出的数字多离谱，都强行压回合理区间。
  - 长效 (Training time)：需要在训练代码中引入数据标准化 (Z-Score)，并逐步减少 Teacher Forcing 的比例。

* **经验教训**：温室里的花朵经不起风雨。训练 loss 低不代表推理效果好。如果你的模型是自回归的（Autoregressive），一定要警惕"训练推理不一致"的问题，并在推理端做好异常值防御。

## 20260207

1. 数学要静下心来学<br>
2. 算法奇妙，学习了一些mc++好用的东西
3. 经验与教训 (Lessons Learned)
  > C++ 性能哲学：<br>能 emplace 就不 push：emplace_back 省去了一次临时对象的构造和析构，在大循环中收益显著。<br>
 定长用 std::array：对于如字符集大小 (26 或 256) 这种固定维度的数组，std::array 比 std::vector 更轻量，且比 C 风格数组更安全（支持迭代器和边界检查）。<br>
4. UrbanFlood 问题很多啊，对于数据要预处理，太大总归是不好的；对于代码理解还不够深刻，对于到底在预测什么，依赖什么都不是很清楚,必须要搞明白，要控制住<br>
5. c++这啥的，路径不要有乱七八糟字符<br>

## 20260208
1. 数据类型
2. json，jsonl, split
3. LoRA原理
4. MLP
5. **TinyLoRA + 4-bit 量化 + RL 训练深度复盘**

今天的调试过程充满了"硬核"的工程挑战，踩遍了这一复杂组合下的所有经典坑位。以下分为**框架机制**、**算法实现**、**训练动力学**三个层面。

##### 第一阶段：框架与环境的"博弈" (The Framework Battles)

这部分错误主要源于 Hugging Face `Trainer` 与"手动魔改"模型之间的冲突。

**1. 4-bit 模型的"非法训练"误判**

- **现象**：报错 `ValueError: You cannot perform fine-tuning on purely quantized models...`。
- **背景**：加载了 4-bit 模型 (`load_in_4bit=True`)。
- **机制**：HF Trainer 为防止用户错误更新冻结的量化权重，会检查 `model.is_loaded_in_4bit`。如果为真，且模型不是官方的 `PeftModel`（即没有 `peft_config`），它就判定为非法操作并报错。
- **冲突点**：`TinyLoRA` 是手写的，不是通过 `get_peft_model` 生成的，所以 Trainer 认为在裸跑量化模型。
- **解决方案（Hack）**：手动设置 `model._hf_peft_config_loaded = True`。这是一张"伪造的通行证"，骗过 Trainer 的安检，让它以为这是一个标准的 PEFT 模型。

**2. "隐形"的量化层**

- **现象**：`apply_tiny_lora` 运行了，但替换数量为 `0`。
- **代码逻辑**：最初写的是 `if isinstance(child, nn.Linear)`。
- **事实**：量化后的模型，线性层已经变成了 `bitsandbytes.nn.Linear4bit`。它们虽然功能像 Linear，但在 Python 类型系统中不是 `nn.Linear` 的子类（或者判定失效）。
- **教训**：在处理量化模型时，永远不要假设层是标准的 `nn.Linear`。必须显式检查 `bnb.nn.Linear4bit`。

##### 第二阶段：算法实现的"细节魔鬼" (The Implementation Details)

这部分错误主要发生在手写 TinyLoRA 核心逻辑时。

**3. `einsum` 的维度迷宫**

- **现象**：`RuntimeError: einsum(): output subscript r appears more than once in the output`。
- **代码**：`torch.einsum('u, urr -> rr', v, self.P)`。
- **原因**：在 Einstein Summation 约定中，输出下标 `rr` 表示取对角线（或者在此语境下是非法/歧义的），不允许在输出端重复使用下标来代表两个不同的维度。
- **修正**：改为 `'u, uij -> ij'`。使用不同的字母（i, j）明确表示输出矩阵的行和列是独立的维度。

**4. "薛定谔"的可训练参数 (Global V)**

- **现象**：`trainable params: 0` 或者参数被意外冻结。
- **引用陷阱**：`global_v` 被共享给了 200 多个层。当遍历 `model.named_parameters()` 并根据名字冻结参数时，同一个对象（`global_v`）会被遍历多次。
- **覆盖效应**：第一次遇到它（作为 `tiny_lora_params`）时设为了 `True`，但第二次遇到它（作为某层的 `v`）时，因为名字不匹配逻辑，又被设回了 `False`。
- **修正**：
  1. 建立 `TinyLoRAGlobalParams` 容器，给它一个正式的"户口"。
  2. 不再依赖名字匹配，而是先 `model.requires_grad_(False)` 全冻，再通过对象引用 `global_params.global_v.requires_grad = True` 精准解冻。

##### 第三阶段：RL 训练的"冷启动" (The Cold Start)

这部分不是代码错误，而是强化学习的特性导致的现象。

**5. 0 分的静默 (Zero Reward & Loss)**

- **现象**：`loss: 0.0`, `reward: 0.0`, `grad_norm: 0.0`。
- **真相**：这是 GRPO 的正常机制。GRPO 依赖**组内优势 (Group Advantage)**。
  - 如果是 **[0, 0, 0, 0]**（全错）：没有优势，没有梯度，模型不更新。
  - 如果是 **[0, 1, 0, 0]**（有一个对）：产生优势，产生梯度，开始更新。
- **突破**：在 Step 1，模型终于蒙对了一次，Reward 变成了 `0.25`，Loss 和梯度瞬间出现，训练正式开始。

**6. 10347 Tokens 的误解**

- **现象**：看到日志里 `num_tokens: 10347`，以为显存炸了或者窗口溢出。
- **真相**：这是 **Total Tokens**（Batch Size × Group Size × Sequence Length）。对于 `accumulation=8`，`group=4` 的设置，这个数字非常正常（平均每条 300 多 token）。

##### 总结：避坑指南

如果下次再做类似的任务，这份清单价值千金：

1. **欺骗 Trainer**：只要是非官方 PEFT 的量化微调，起手就加 `_hf_peft_config_loaded = True`。
2. **类型检查**：替换层时，必查 `bnb.nn.Linear4bit`。
3. **参数冻结**：涉及参数共享（Shared Parameters）时，**绝对不要**在循环里用 `name` 判定 `requires_grad`。**先全冻，再点对点解冻对象**。
4. **Einsum**：输出维度的下标字母永远不要重复。
5. **RL 心态**：看到 `Reward=0` 不要慌，只要 `Length` 在变短，说明模型在挣扎；只要出现一次非 0 分数，训练就是活的。

今天不仅跑通了代码，还深入理解了 PyTorch 计算图、Trainer 机制和 RL 动力学，这是一次质量极高的 Debug！


## 20260211
（9 10  11）

1. 不要想太远的数学，从简单的，眼下的来，先去搞懂下学期的数学模型所需要的
2. 今日完成仓库的迁移就明显迅速了很多。 首先要搞明白文件格式。 训练可以再考虑如何提速。 最近思考了服务器的问题， 门道还是多。
3. 今日dyh问了java的问题， 嗯， 类型，实例，方法这些概念是相通的，可以多去思考
4. 教表妹python， 乐， 基础语法我也不会
5. 核电， 两家。 利润高？。 单日1000万。 但是很多时候是 不被批准发电： 电太多了
6. 在线学习：考虑财富增量； 琴声不等式，凸函数， 伯努利不等式， 是全知的expert problems
7. 静下心来


## 20260212

## 之前为什么修不好

| 次数 | 我做了什么 | 为什么无效 |
|------|-----------|-----------|
| 第1次 | 在 forward 中对 delta 做 `.to(W_base.dtype)` | **只转了 delta，没转 x**。`x` 是 bfloat16（模型以 `torch_dtype=bfloat16` 加载），`W_base` 从 `dequantize_4bit` 返回 float32，`F.linear(x, W_base)` 直接炸 |
| 第2次 | 在 `model.generate()` 前对 inputs 做 `.to(float32)` | **完全无效**。tokenizer 输出只有 `input_ids`（int64）和 `attention_mask`（int64），没有 float 张量可转。真正引发错误的是模型内部激活值的 dtype |

## 这次的根本修复

问题核心：`x`（激活值，bfloat16）和 `W_base`（反量化权重，float32）dtype 不一致。

修复策略：在 `TinyLoRALinear.forward()` 中，以 `W_base` 的 dtype 为唯一基准（`compute_dtype`），**所有参与 matmul 的张量（x、U、S、Vh、P、global_v、delta）全部显式转为同一 dtype**，最后再转回原始 dtype 输出。


## 20260213

1. 今日下午搞了agent，发现自己对于agent相关知识，如ollama，langchain不是很熟悉，之后可以更加多了解一点
2. agent对于我这样的人布置也尚有难度，manus有必要？
3. qwen那么大的模型也会写有大bug的程序（）
4. 和魏教授细聊，继续保持兴趣，但是要加强数理基础，然后多找他聊天，然后稍微精简一下注意力
5. 学习了在线算法，但晚上心有点燥动，关于电引入的思想能掌握，但是计算还没细算
6. 该多陪陪外公，我有罪。
7. 看数分吧


## 20260214
1. 中心极限定理
2. 方差
3. Regret
4. 订婚宴
5. 记得总结晚上的聊天（期货，制造业，供应商，资源，注意力，时间，教育，航空差距）
6. 开多项式，微积分
7. 学会feed

## 20260215
1. 网差
2. string 也可以 it
3. 记得做code review
4. 回乡，农村，老房子之思(with 村支书)
5. 姐姐生日快乐

## 20260216
1. 春节
2. 洗眼镜！！！
3. 思考
4. 要非常注意数据范围，不然再好的提示词也白写
5. 流式读入，也要流式写出，提示词要注意对二者都要强调

## 20260217
1. 下午对谈【AI，企业，科研经费，官，商，规划，付诸规划的能力】
2. 下载中文版LADR
3. header:  udi, prediction
4. \n, \n
5. 喝酒？

## 20260218
1. LADR 陪集是平移， 等价类很好理解，可以开奇异值。
2. 开马尔可夫，balls and bins
3. 县城教师，工资，财政
4. 职称，论文，钱
5. 粗看概率书 到了马尔可夫，
6. 接受自己读中文版本
7. 微博文章发出去
8. 给周云的那段想法2
9. 模型训练to-do-list

## 20260219
1. 读论文
2. 算delta，局部守恒，全局守恒，
3. 轻量级打印机：趣印，创业
4. kaggle比赛反思
5. **Truncated BPTT（多步截断时序反向传播）详解**

这是在时间序列预测（尤其是使用 RNN/GRU/LSTM 以及 GRU-GNN 架构时）非常经典且关键的训练技巧。

一句话总结：**"多步截断时序反向传播（Truncated BPTT）"是为了在"让模型学会长期记忆"和"防止 GPU 显存爆炸（OOM）"之间寻找完美平衡的妥协方案。**

为了让你彻底明白这个步骤的意思，我们可以把情况分为三种来对比：

**极端一：单步反传（之前可能遇到的问题）**

- **做法**：模型预测第1步，算一次 Loss，反向传播更新权重，然后把隐状态（Hidden State）使用 `.detach()` 斩断计算图。接着再去预测第2步。
- **通俗比喻**：就像一个**"鱼的记忆只有7秒"的近视眼**。
- **致命缺陷**：由于你每走一步就把梯度的"回溯路线"给砍断了，梯度的信息永远传不到上一时刻。模型根本无法理解"由于昨天暴雨，导致今天管网满载，最终引起明天地表内涝"这种跨越多个时间步的因果关系。你的 GRU 实际上退化成了一个只能看到当前输入的前馈网络。

**极端二：全序列反传（Full BPTT）**

- **做法**：让模型一口气预测完完整的 400 到 600 个时间步。在这期间，不进行任何 `.detach()`。等全部预测完后，算一个总 Loss，然后一次性从第 600 步一路反向传播回第 1 步。
- **通俗比喻**：要求一个人一口气背下一整本《辞海》，然后再去考试。
- **致命缺陷**：**显存瞬间爆炸（OOM）**。因为反向传播需要用到前向传播时的中间激活值（Activations）。你的模型结合了 GRU 和复杂的异构图神经网络（HeteroConv），每一步的计算图都极其庞大。把 400 步的庞大计算图全部存放在显存里，任何消费级甚至企业级显卡都扛不住。

**完美折中：多步截断时序反向传播（Truncated BPTT / 改进方案）**

既然单步没记忆，全序列存不下，那就**"分块记忆，定期结算"**。这就是将长序列分割为 `chunk_size = 20` 的含义。

它的具体执行流程如下：

1. **向前跑一小段（Forward）**：让模型从第 1 步推演到第 20 步。这期间计算图在显存中不断累积，但因为只有 20 步，显存完全可以承受。
2. **结算一次（Backward）**：把这 20 步的预测结果拿出来，计算出一个聚合 Loss。然后执行 `.backward()`。此时，**梯度可以从第 20 步一直回传到第 1 步**。这就保证了模型能够学到长达 20 个时间步的"时间依赖关系"（足以捕捉一场阵雨引发洪峰的过程）。
3. **斩断过去，保留记忆（Detach）**：这是最核心的一步！在准备计算第 21 到第 40 步之前，你必须对第 20 步输出的隐状态执行 `h_dict = {k: v.detach() for k, v in h_dict.items()}`。
   - **斩断的是什么？** 斩断了"计算图（反向传播的路线）"，释放了前 20 步占用的显存。
   - **保留的是什么？** 保留了隐状态的**具体数值（Values）**。
4. **接力跑下一段**：拿着保留了前 20 步浓缩记忆的数值，作为起跑点，去推演第 21 到 40 步，如此循环。

**总结来说：**
这个步骤的意思是，把一场漫长的洪水演进（400步），切分成许多个 20 步长的小片段。在每个小片段内部，模型进行完整的推演和反思（反向传播），学会了如何捕捉一段时间内的水流动态；而在片段与片段之间，模型只传递浓缩的"水位/水势记忆（隐状态的数值）"，不传递极其庞大的"反思过程（计算图）"，从而成功绕过了 GPU 显存不足的物理限制。

5. **多任务学习与隐式边流量预测**

这个步骤的核心思想是**"多任务学习（Multi-task Learning）"**和**"物理规律的强迫植入"**。

为了让你彻底明白，我们把这个步骤拆解为"它是什么意思"以及"推理时怎么用"两个部分来详细解答：

**1. 这个步骤是什么意思？（为什么要加隐式边流量预测？）**

在图神经网络（GNN）中，节点（Node）代表窨井或地表网格，边（Edge）代表它们之间的物理连接（管道或地表漫溢路径）。

- **原始模型的盲区**：如果模型只预测"节点的水位"，它就像是在玩"打地鼠"——只盯着每个坑（节点），试图死记硬背每个坑水位的涨跌规律。但实际上，节点A水位下降，是因为水**流到**了节点B。原始模型完全不知道"水流（Flow）"这个物理过程的存在。
- **改进后的魔法（self.edge_decoder）**：
  - 你把一条边两端节点的隐状态拼接起来（`cat([h_src, h_dst])`），相当于告诉模型："看着上游节点和下游节点当前的状态，你给我估算一下它们之间现在流了多少水（预测）。"
  - 在训练时，你拿着真实的边流量数据（`*_edges_dynamic_all.csv`）去惩罚模型："你预测的水流不对！根据物理规律，这里应该有这么大的水流！"
- **根本目的**：这实际上是一个**辅助训练任务**。通过逼迫模型去预测边上的流量，模型内部的 GRU 隐状态（`h_dict`）就不得不去学习真实的**水动力学规律（流向、流速、质量守恒）**，而不再是单纯的瞎猜水位。

**2. 我推理的时候会用到这个隐性边流量吗？**

根据你之前提供的 `inference.py` 代码，**在当前的自回归推理循环中，你直接丢弃了它，并没有把它作为下一步的输入。**

你看你在推理代码里是这么写的：

```
pred_dict, h_dict, _ = model(static_data, manhole_dyn_t, cell_dyn_t, h_dict)
```

那个 `_` 就是模型吐出来的边流量预测（`cell_to_cell_flow`），你并没有把它塞回给模型去预测下一步。模型下一步的输入依然只依赖节点的预测值（`pred_dict`）和历史记忆（`h_dict`）。

**既然推理时丢弃了，那预测它还有什么用？**

- **隐形加成（吃到了训练的红利）**：虽然推理时你丢弃了具体的值，但不要忘了，生成这些预测的**共享骨干网络（Encoder 和 GRU 卷积层）在训练时已经被"边流量预测"这个任务给调教过了**。此时模型的隐状态 `h_dict` 已经具备了极强的物理直觉。这就好比一个练过沙袋绑腿的长跑运动员，虽然正式比赛（推理）时把沙袋（边流量预测分支）卸下了，但他的腿部力量（网络权重）已经永久提升了。
- **物理后处理（未来的升级空间）**：你文案中提到了"*推理阶段作为隐变量供物理后处理使用*"。这意味着你**未来可以写一段额外的代码**：拿到模型预测的节点水量变化量和边流量，检查它们是否符合质量守恒。如果不符合，你可以用数学优化方法（比如基于卡尔曼滤波或简单的物理方程）去微调修正节点的水位预测值。这就是所谓的"物理后处理（Physical Post-processing）"，可以进一步榨干这个输出值的价值。


## 20260220
1. 学了policy iteratioon value iteration
2. 模型分数不错
3. 下载了实变教材
4. 暑校
5. 排除私立的,×  https://summer.uic.edu/courses/course-list/

  - ucla 时间不行https://sa.ucla.edu/ro/public/soc
  - uic 时间不行，全是5，6月出来的https://summer.uic.edu/courses/course-list/
  - ucb DEF  https://cn.berkeley.edu/summer-sessions
  - texas
  - boston 时间https://www.bu.edu/summer/courses/computer-science/
  - weisidunkangxin  https://public.enroll.wisc.edu/search?term=1266&modeOfInstruction=classroom&sessions=GAA,GBB,GCC,GDD,GEE,GFF,GGG,HDD,HEE,HAA,HBB,HCC,IAA,IBB,ICC,IDD,IEE,JAA,JBB,JCC,KAA,KBB,LAA 好像可以
  - University of Washington 好像全是full term
  - george tech?看不懂界面 只用本科生？
  - austin  只有线上？
  - cornell  排除， 时间不行 但页面很赏心悦目
  - 密歇根： 对中国很友好，但是项目太水了，甚至有中文版介绍就是hhh


6. 房地产，胆子，地级市，县级市，区，钱，冠名费，大学教授，


## 20260221
1. 忙活一天，还是决定走  认知科学？
2. 3weeks   brainworks+ 一个线上mooc
3. 3weeks   mathematical tools
4. 6weeks   4+1

5. 使用了周云的那个东东，有空要研究 ffpmeg这些乱七八糟的工具到底是哪里来的
6.

## 20260222
1. 吃饭，学喝酒
2. 大概率去6周了，加油
3. LADR，特征值，慢慢沉下心
4. 清理，洗澡！

    ```bash
    git gc --prune=now
    ```
5. 昨日要学的工具还没学完
6. 什么时候复盘kaggle比赛呢
7. 明日约时间
8. 看到5B，足了？
9. UCB 6weeks  Introduction to Cognitive Science  COGSCI 1 002 - LEC 002+ American Language and Culture: Business and Social Entrepreneurship COLWRIT 51C 002 - SES 002
10. 睡前看微分方0程
11. microgpt


## 20260223
1. 舅公70大寿
2. 两边是完整的乡村
3. 全微分
4. 交流with
    - 音视频联合生成
    - 6 week 完整体验
    - 保持高的gpa
    - 在暑研前要学校内做一段科研
    - 套磁，在ucb那些日子需要去和教授打好关系
    - 数理基础很重要，现在可以去做一些 数理基础 + 本地电脑能搞的
    - infra什么的确实不用phd， 但是如果想到企业中做一些偏Research的，还是需要phd学位做证明
    - 字节现在很厉害
    - 小模型 剪枝 end端的应用  physical ai
    - 关注ucb教授在做什么，读什么论文，不断发邮件去问
    - 明确方向？（确实不急?)但还是做一些有前景的工作？
    - 美国很看重对口，需要【对口】项目，【对口】经验，这个很卷
    - 学会用linkin
    - 找学长学姐
    - 在企业中学习！
5. 有必要学数学模型冒险吗？
6. 练习英语！
7. 兴趣？ 我现在读概率算法那本书有点  疲惫， 思考是否要继续下去？或者说是代表了什么？
8. 今日搞了点数学模型
9. 这个学期每个周末都要精进厨艺！
10. 我的微博记得发


## 20260224
1. 要回家了
2. 休养
3. 思考下一步计划
4. copilot创建pr的时候， start a review 还有乱七八糟一些的区别是什么

## 20260225
1. 从老家回到上海，不舍
2. 拉普拉斯变换，由线性代数、内积角度理解
3. 思考明日和教授对话，不能一味展现自己"弱势"，说自己很迷茫怎么怎么样，这样子不够有效。要展现自己的强劲，明日讨要算力
4. log, 积分
5. log计算到很小，比如4*(1+0.2)=4.8, 就对应2+log_2(1+0.2)，用麦克劳林
6. 机器学习中的最大似然估计!

---

## 20260226
1. 交流
2. UCB
3. 面试tomorrow
4. 记得总结
5. 作息
6.

---

## 20260227
1. 明日总结对谈
2. 面试还行，记得不要激动，不要过于亢奋
3. 明日看3blue1brown的视频去了解gpt架构
4. c++搏斗
5. 选课
6. kaggle预测比赛采用双模型架构，增加了新的特征

---

## 20260228
1. 做完了microgpt.cpp
2. 研究对偶空间，让心慢慢静下来
3. 思考之后问教授的问题（zhou，li）
4. 逛街
5. 牙缝冷
6. 思考商业（一日14场，400平，350一人，80min，3 ￥/平米每日）【沉浸式】
7. 经济下行
8. 天物
9.

没问题！恭喜你的 `microgpt.cpp` 彻底脱离 bug 海！用 C++ 手搓底层模型确实极其"烧脑"（难怪第一条就是"好累"），但彻底跑通那一刻的成就感绝对是无与伦比的。至于 Visa 卡，如果后续是要为了跑模型去租云服务器（比如 AWS、Google Cloud）或者申请各种海外 API 接口，确实是很必要的准备。

按照你的要求，我已经将今天的学习总结无缝拼接在了你的日记后面，并且优化了排版，方便你直接复制保存：

---

## 20260301

1. 好累
2. visa卡？
3. microgpt.cpp终于算彻底没bug了
4. from dyh


#### 一、 工程实践：掌控开发环境

* **Mac C++ 编译链路**：跳出了 VS Code `launch.json` 的黑盒，理解了 C++ 代码必须经过编译器（如 `clang++`）转化为二进制文件（`a.out`）才能运行的本质。掌握了直接在终端（Terminal）编译和执行代码的硬核技能。
* **开发术语脱盲**：
* **LSP (Language Server Protocol)**：让编辑器变聪明的底层通讯协议（如提供自动补全的 `clangd`）。
* **SSH**：专属加密通信隧道，用于安全、免密地连接远程服务器或 GitHub。
* **PE 环境**：一种纯净、临时的轻量级系统，通常用于学校机房或系统维护，但环境受限，不如在 macOS 上做开发来得自由。


#### 二、 架构哲学：面向对象与"五大公理" (SOLID)

* **里氏替换原则 (LSP - Liskov Substitution Principle)**：
* **打破直觉，回归逻辑**："继承"不仅是语义上的分类（如"正方形是长方形"），更是**行为契约的绝对服从**。
* **契约精神**：前置条件不能强化（子类不能对输入提出比父类更苛刻的要求），后置条件不能弱化（子类输出的结果必须严格落在父类承诺的集合内）。


* **其他四大原则 (SO_ID)**：
* **S (单一职责原则)**：一个类只应该有一个引起它变化的原因。拆分开来，各司其职。
* **O (开闭原则)**：对扩展开放，对修改关闭。当你想增加新功能时，应该通过写新的代码（扩展）来实现，而不是去修改稳定运行的老代码。
* **I (接口隔离原则)**：不要强迫客户依赖他们不用的方法。与其给一个巨大无比的"万能接口"，不如拆分成多个小而美的专用接口。
* **D (依赖倒置原则)**：高层模块不应该依赖低层模块，二者都应该依赖其抽象。（例如电脑依赖 USB 接口这个"抽象标准"，而不是依赖某一个特定牌子的鼠标）。

5. 想到算log之后还需要去麦克劳林的话，不还有乘法吗？
6. 读alphaevolve
---

## 20260302

1. LOCAL_RANK 是 PyTorch 分布式训练（DDP）中每个进程在本机上的 GPU 编号。
   - 来源：当用 `torchrun --nproc_per_node=2 train_rl.py` 启动时，`torchrun` 会自动为每个进程设置环境变量 `LOCAL_RANK`：
     - 进程 0 → `LOCAL_RANK=0`（使用 GPU 0）
     - 进程 1 → `LOCAL_RANK=1`（使用 GPU 1）
   - 作用：在这里用于 `device_map={"": LOCAL_RANK}`，告诉 HuggingFace 把整个模型加载到当前进程对应的那张 GPU 上。
   - 为什么不用 `device_map="auto"`：`"auto"` 会把模型分片到所有可见 GPU 上（模型并行），而 DDP 要求每个进程各自持有一份完整模型副本，用数据并行来训练。两者冲突。
   - 单卡时：`os.environ.get("LOCAL_RANK", 0)` 默认返回 `0`，等价于 `device_map={"": 0}`，行为与原来的单卡完全一致。

1. 多卡量化训练 CUBLAS_STATUS_NOT_SUPPORTED 踩坑与修复
   - 现象描述 (What happened)
     - 场景：将单卡（本地）跑通的 TinyLoRA + bitsandbytes 4-bit 量化训练代码，迁移到 2x A800 多卡环境（使用 torchrun / DDP）时发生崩溃。
     - 报错：RuntimeError: CUDA error: CUBLAS_STATUS_NOT_SUPPORTED。
     - 崩溃位置：发生在自定义 TinyLoRALinear 层的 forward 函数中，具体是调用原生的 torch.nn.functional.linear(x, dequantized_W) 进行反量化后的 BFloat16 矩阵乘法时。
   - 根本原因 (Root Cause)
     - 内存连续性缺失：多卡分布式训练（DDP/FSDP）在进行张量切片（Sharding）或卡间通信后，输入张量 x 在内存中的布局可能变为非连续 (non-contiguous)。
     - cuBLAS 的严苛要求：底层的 cublasGemmEx (执行矩阵乘法的 C++ 算子) 对 BFloat16 等特定数据类型的矩阵乘法有严格的内存对齐和连续性要求。当遇到非连续内存时，它无法执行，直接抛出 NOT_SUPPORTED。
     - 过度干预：我手动拆解了 bitsandbytes.nn.Linear4bit 的前向传播（手动反量化权重并调用原生 linear），绕过了 bitsandbytes 内部针对各种硬件和分布式环境优化的 C++ 后端。
   - 核心教训与规范 (Action Items & Takeaways)
     - ⚠️ 不要过度拆解黑盒：如果使用了第三方高度优化的算子库（如 bitsandbytes 的 Linear4bit、FlashAttention 等），永远优先直接调用其 forward() 方法（即 base_layer(x)），而不是手动提取其权重出来自己算。它们内部处理了大量边缘 case 和内存兼容性问题。
     - 🔄 多卡代码的防御性编程：在编写需要自定义底层矩阵乘法 (@ 或 F.linear) 的 PyTorch 算子时，如果在多卡环境下运行，务必在计算前加上 .contiguous()。例如：x = x.contiguous()。这虽然会带来微小的开销，但能彻底杜绝大部分由内存布局引起的 CUDA 底层报错。
     - ⚖️ 单卡 ≠ 多卡：单卡跑通只是第一步。涉及底层数据类型转换（Cast）和自定义算子的代码，必须尽早放到多卡（DDP）环境下做冒烟测试，因为分布式通信会改变张量的物理状态。
3. 教授谈话
 - diverse好
 - 问题品味，来自视野
 - 科研，就是要做自己觉得有意义的
 - 不急，探索前沿领域，做到能明白专家关注的核心问题
 - 多卡
 - 后训练
 - 楽，README用英文的吧


## 20260303
1. 元宵节
2. 多项式
3. 语言科学
4. 将强化学习和online algorithm融在一起？ Idea001
5. 复杂体系研究

## 20260304
1. 智能复杂实验室，林
2. 大二进组
3. 不要担心自己的毕业论文
4. 进组压力很大，不要太早
5. 桂教授，巧！
6. 配置claude
7. 思考如何去知道这么多论文（deepcoder）
8. 数学反思
9. 积分反思
10. 高代很重要
11. 记得回听赵的课

## 20260305
1. 中国的信仰很大基于学院
2. 和丁老师交流
3. 了解会议文章，而且cv这块很卷
4. 如果想做图寻游戏，还得是数据驱动，以及我理想中的样子需要世界模型
5. 总结孟的课，下次不要带书了，感受氛围
6. 记得卞
7. 几个博士生

## 20260306
1. 记得回听飞鼠
2. GRPO的clip num_iteration一定要搞懂
3. 注意力（我的微博）
4. 高代整除
5. 可信人工智能到底是研究什么！！！！！
6. 研究透，，把公式要研究透
7. loss entropy
8. 前几日说要做的还没做，比如code review
9. kaggle_quant比赛！！！
10. 优化了microgpt.cpp，记得要学lambda表达方式


## 20260307
1. 打羽毛球
2. 哈哈终于训练出来了v4.0！！
3. kaggle比赛继续
4. 软件基础，老师强调：考试考逻辑。平时作业就是延申，做深入


## 20260308
1. 练车
2. 生病
3. 学长看不上我建的org呜呜
4. v4.0
5. next_to_do?
6. 养胃吧
7. 可解释性？张qs： 与或交互能去逼近？

## 20260309
1. 争强好胜
2. 不要用豆包代替我阅读公众号
3. 读phd是获得判断〔价值〕的能力？
4. 认真读完公众号
5. 失败后再起来
6. 兴趣与依赖
7. 老房子
8. 与或交互图没法梯度下降吗
9. social

## 20260310
1. 有意思的人
2. 失败
3. ollama √
4. zeroclaw √
5. 有意思的人的有意思的观点: 最好的时代；找到自己要解决的问题；agent
6. 语言科学复盘
7. 不要有压力


## 20260311
1. 神经科学周围地质地！！
2. 长期主义，没必要评价当下
3. 泛化能力
4. 善缘
5. 影子，自己的plus，被别人的叙事挤占？
6. claw牛逼
7. 果蝇是假的？
8. abstrain from lust
9. 李约瑟之问
10. 两种科研：一种是将方法推到极致；一种是用各种方法解决问题


## 20260312
1. 想的历史问题： 中国为什么古代中国人口会膨胀的比西方快
2. 历史地理问题
3. 数学习题课复习
4. 符号主义：可能在世界模型中体现出来
5. 信息论：重要的是思想，能去应用
6. 要知道这个东西的存在
7. 人工智能导论的复习
8. 自然法的敬畏
9. 话语权
10. 地理上美洲没有大型动物
11. 为什么西欧权力分散？大河切成块？


## 20260313
1. 复盘对话面试
2. 复盘多个谈话
3. 保持兴趣广泛
4. 教授谈话复盘
5. 感觉忙忙碌碌 一定要复盘 一定要总结
6.  pytorch！？？
7. 博士生的视角
8.

## 20260314
1.  leisile


## 20260315
1. 要记得总结今日
2. Jekyll的posts格式？这是 Jekyll 官方强制规定的核心规则，写在 Jekyll 官方文档里，是它的内置工作机制，不是你主题的自定义要求。
3. 遗憾： 没有多看看在场其他人的创意
4. 学会： pitch 宣传 圆场 节奏
5. 什么是好的产品
6. 临场表现
7. 对于用户来讲，它在意的是什么
8. 我们的流程为什么有这么多bug
9. 别的组呢？一个是动机 一个是真的demo
10. 工具+问题
11. ai的人格？
12. ai屠城
13.


## 20260316
1. 分手，好痛。
2. 专注力！ 定力 思考力
3. 补数学
4. agent
5. 之前欠的 pytorch学习 与或图求导还要继续
6. 搜集的差不多了 可以研究做什么东西了
7. 定力
8. cogonitive science
9.

## 20260317
1. 自己去争取资源
2. 脑机接口？难，电信号？意识，本末倒置？
3. 面向未来是对自己有益，符合自己当下利益也是有益
4. phd到底是什么？ 论文只是载体，手段，途径
5. 套磁，推荐信
6. 科研
7. connection
8. 一种可能性
9.


## 20260318
1. 讨论什么是科研能力，什么是工程能力。结论是：科研能力的核心是"想"，工程能力的核心是"做"。
2. 文献综述，这种survey也是好的
3. 我说，图寻游戏中，那些理解视频生成的模型都是不行的，不真正理解，那么我就可以去收集这些证据啊？
4. agent确实没有特别大的技术含量？rlagent亦如此，大语言模型
5. 拒绝到时候再说吧
6. 人口周期性
7. 积极性  消极性 人口控制
8. 数学计算，应用的时候，要把握不同的视角
9. 还是有一点论文
10. 不要把注意力放在内耗上
11. 近现代史，悲哀！
12. 学车


## 20260319
1. onlinealogrithm选择
2. 不要再抱怨选课了
3. The evaluation of policy is very difficult
4. A* 算法！以及相关的最短路算法
5. CS182

## 20260320
1. 判断CS182对我有价值的部分需要
2. 接受自己的不完满》
3. 入组考试，比较复杂，今日灵感：贪心切分，图的最小生成树处理
4. pagerank
5. seminar
6. 定了个samplejava学习计划
7. 选课？ 数院的课主要学完 ； xiehuimin主要关注每章最后的题目


## 20260321
1. 一点数学题
2. 编译原理
  - 语法树ast
  - 代码->字节码->机器码
  - 装饰器
  - python调用c
  - 理解最重要
3. 学习c++的命令行？


## 20260322
1. 生病
2. 上服务器，打磨工具，可视化
3. 做数学
4. 不要浮躁
5. 发邮件了！！！


## 20260323
1. 数分 数值计算！！！
2. dp
3. 都是32 没有本质上区别？
4. 看推理路径，走没走过相同的路？


## 20260324
1. 讲座is in notebooklm
2. 逆天UCB
3. 数学恢复状态？
4. 强化学习阅读
5. MoSeq
6. 制定书阅读


## 20260325
1. 要明白自己的心力的宝贵
2. 不要老纠结于一个点的得失，要觉得这次去美国是长期的收益
3. 去citywalk课也未尝不可
4. 稍微弄懂了讲座
5. 仔细听了那个imitation learning 人的loop
6. opus劝诫我的话 明日摘录
7. 小小的课题思考
8. xiesaining  树？ 枝丫 根？
9. 被针对了？
10. 精力放在真正的要用的地方？
11. 要复习今日数学

## 20260326
1. 听谢赛宁
  - 表征学习，比较底层，丁认为，架构，丁确实厉害，很会宣传。 然后确实Resx-Net，  表征学习，确实是一个底层，的，想让特征分开，这是他们的动机。 表达能力。 明确意义。
2. 做软件基础作业，lambda 演算
3. 人工智能导论，的笔记要复习
4. 今日早上的yingzhouli的分析。 高性能计算。 数学系做到计 算机系做不到的事情得看数学。数学上的还是工业比较多，LLM之类的硬件比较多。 但我想说，flashattention算数学还是硬件？ 精度混合计算？   如今学的都是十几年前沉淀好的
5. 今日稍微复习了数分。   缺 数分 零测集覆盖证明。
6. jupyter跑的结果： 微分好像看不出什么东西来。 要拟合成曲线吗。


## 20260327
1. 谢赛宁播客
  - boring的研究，一开始想的是什么，之后就做出来什么
  - 好的研究的都是非线性的
  - 大厂都在做有限游戏，学界不应该去这样子
  - 极致的专注
  - 6个月的科研，一定要给自己有足够时间长的时间去explore，不是光想，要去hack问题。  可能最后一段时间才有；像随机梯度下降；
  - 最重要的不是a->b的路，而是梯度，梯度的来源
  - 定义好问题，才能去创新
2. 深层神经元数量和浅层神经元；剔除雷同部分;清洗掉没有必要的数据集；希望选择器是无偏的，；消融；problem 和 run 的混合；latent reasoning；nfs_weighted是什么方法; 2d->3d


## 20260328
1. 有点记不清今日播客听了什么了
2. 今日软件基础的课没有学的很懂
3. 今日seminar 学了一些有意思的概念，但是本质的东西要加强吸收能力
4. 仔细回忆


## 20260329
1. NAD_Next
2. 数学
3. 分析，需要基本功
4. 代数需要再去看白皮

## 20260330
1. 邮件周中发
2. lyz的数值计算关于稀疏矩阵没有特别听懂
3. hpc是个真空地带。对内存cacheline理解要求高
4. 数分反常积分
5. 高代基本听懂了
6. 明日继续补数分高代

## 20260331
1. 回顾了数学
2. 需要好好休息，精力，专注力，真的很重要！
3. 学长提醒的好，快速发邮件，不要耗精力，那不抱希望的50个现在就可以发了
4. 物理神经网络, 用材料的自带物理系统去寻找最低能量态输出解   同时，注意到， 需要紧密结合数学公式选取材料，典型例子- 核方法。 主要是控制磁场。 以及， 求解组合优化器（物理机制）。 能量很低。 每个问题都要单独设计。  不追求图灵完备。 走出实验室很难。 像退火一样，加温度。

## 20260401
1. 今日早上数学研究了不少
2. 读论文
3. 今日近现代弄得挺多
4. 数学研究
5. 今日还是有一些没做的很好的，但在努力中
6. 晚上讲座
7. 上周讲座整理

## 20260402
1. 慢慢来 数值代数能搞懂得  lyz邀请我参加期末考呢还
2. 时间去哪了是个好问题 还是要意识到 不能不知不觉时间不见掉
3. 好想法得明天验证了
4. 数学范数
5. 分析的收敛速度是待做，今天降落伞 以及追逐问题的衍生
6. 晚上的课 还算收获很大
7. dhh说了 第一种是更强调连贯性的一种   牛津那个更在于预测 理解 我更在乎序列决策


## 20260403
1. 代码类单独
2. knn很好，压过很多？
3. 混合 不消融
4. 两篇论文
5. 前缀
6. case
7. 让·G老师分析实验数据
8. 发邮件


## 20260404
1. seminar
2. 学习
3. 练车
4. 应该听别的同学的想法的
5. 强化学习要搞了
6. 开始有对于任务更深的思考？
7. 时间过得真过分的快了。

## 20260405
1. 强化学习速通
2. diffusionmodel学习
3. 数值代数与优化
4. 啊啊时间都去哪了

## 20260406
1. 强化学习
2. 数值代数还是有意思
3. 哎呀，又忘了早上做什么了。


## 20260407
1. 学高等代数
2. makefile学习
3. agent要学
4. 计算神经  robot去看看？
5. cs182作业？
6. fengming说的到底是第几节课习题课讲到了优化？
7. 写邮件？
8. 还是要提高效率！！！

## 20260408
1. 研究强化学习
2. 研究agent一点？
3. 研究了数值代数
4. 数分？
5. 系统性地完成工作！
6. 写文章
7.

## 20260409
1. 最近的review都有点为了写而写了，所以明天补完
2. 昨天SVD方法好，RL复习，遇到了关于G的瓶颈
3. 数值代数研究
4. 晚上的一无所事？
5. 数学分析最后一段没有跟上吗 算？  要回看？


## 20260410

1. langchain React Langgraph学习
2. 读论文， 那个论文
3. 组会还是录音吧
4. transformer归一
5. 时间 确定感
6. 脑分区
7. 组会还是需要更多总结
8. 不同图的观点
9. agreement

## 20260411
1. 感觉高代，数分每节课听的后都还要再补一补
2. prism
3. 今天pytorch课没有认真听 唉
4. drm讲的也没听进去
5. 把论文主线定了
6. 跑了不少论文相关实验了可以说，但是还是感觉脑袋空空呜呜

7. 你可以结合我之前和你的对话历史回答。我现在有关于COT的三个问题：，cot是如何得到的，我们好像没有特别多的数据集是有COT的作答的，大部分人不会把心路历程发网上吧；COT如果真的能反映出来run的正确与否，大厂为什么不先研究；大厂会训练COT吗？如果训练的话，是否就已经发现了我现在做的很多结论？

我先把你的三个问题拆开：COT数据从哪里来、为什么大厂看起来没先做你说的方向、以及大厂到底会不会训练COT、会不会早就发现了你现在的结论。我会结合你之前做的“run正确性 / 过程监督”这条线来回答。

另一个关键中间结论是：公开证据对“CoT 是否 faithful”并没有给出肯定答案，很多结果反而偏负面。也就是说，它更像有用但不完备的监控信号，而不是 run 的完整镜像。

Thought for 18m 3s

我先按你的说法，把 run 理解成一次 reasoning rollout / agent trajectory。你这三个问题其实混着两件事：一是 CoT 从哪来，二是 CoT 到底是不是能反映 rollout 正误的可靠信号。公开材料给出的总判断很一致：CoT 现在当然会被系统训练，而且往往比只看最终输出更有监控价值；但它并不等于模型真实内部推理，也不是 ground-truth。Anthropic 2025 直接测到 reasoning model 的 CoT faithfulness 仍然偏低；OpenAI 2025 则把 CoT monitorability 当成单独研究方向来做。

1）CoT 是怎么得到的？为什么不需要很多“真人心路历程”数据？

不是靠大规模“真人私密心路历程”语料堆出来的。Google 2022 最早的 CoT prompting，本来就不是在说“先收一个巨大 CoT 数据集再训练”，而是证明：给少量 step-by-step exemplars，足够大的模型就能被 elicitation 出 CoT。随后 STaR 更进一步，直接把问题表述成“没有大规模 rationale 数据怎么办”，它的答案是：用少量 rationale 示例 + 大量无 rationale 数据，让模型自己生成 reasoning、筛选出通向正确答案的那部分，再反过来微调自己。

工业上后来更常见的是几条路混用。第一，先让强模型生成 step-by-step 轨迹，再让人工做 step-level 标注，而不是让人从零写“心路历程”；OpenAI 的 PRM800K 就是给“大模型先生成的逐步解答”做人类逐步标注。第二，在可验证任务上直接用 verifiable reward / RL 去诱导 reasoning；DeepSeek-R1 明说 pure RL 就能在没有 human-labeled reasoning trajectories 的情况下诱导出自反思、验证和策略调整。第三，再把 reasoning model 的行为蒸馏给别的模型；OpenAI 的 Deliberative Alignment 甚至明确说，对 o-series 的安全对齐不需要 human-written CoTs or answers。也就是说，工业界训练的往往不是“真实私密内心独白”，而是“对任务有用、可评分、可筛选的 reasoning trace”。

2）如果 CoT 真能反映 run 的正确与否，大厂为什么不先研究？

其实已经研究了，只是公开名字往往不叫“CoT 反映 run 正误”。OpenAI 2021 的 verifier work，本质上就是让模型判断 candidate reasoning / solutions 哪个更可能正确；Google 2022 的 self-consistency，本质上是采样多条 reasoning path，再把一致性当 correctness proxy；OpenAI 2023 的 process supervision，则直接比较“只看最终答案”和“看中间步骤”哪种训练更有效。到 2025 年，Anthropic 在做 CoT faithfulness，OpenAI 在做 CoT monitorability，甚至还有跨 OpenAI / Anthropic / Google DeepMind / Redwood 等作者的论文，明确建议继续投入 CoT monitoring 研究。

但这条线之所以难，不是因为没人想到，而是因为 CoT 不是正确性的金标准。Turpin 等人在 2023 年就指出，CoT explanation 可能系统性地 misrepresent 模型真正的决定原因；Anthropic 2025 在 reasoning models 上继续发现：CoT 虽然比非 reasoning model 更 faithful，但总体仍然不高，在他们的设定里 Claude 3.7 Sonnet 和 DeepSeek R1 的 overall faithfulness 只有 25% 和 39%。OpenAI 2025 也明确说 monitorability 可能会被训练过程、数据来源和继续 scaling 破坏。所以更准确地说，CoT 是一个 高信息量但带噪声的 side channel，不是 rollout 正误的 ground truth。

还有个更微妙的点：reasoning model 的 CoT 和早年“prompt it to think step by step”的 CoT 不是一回事。OpenAI 2025 专门区分了两者，认为 reasoning model 的 CoT 是 RL 塑造出来的 private workspace；也正因为想把它保成一个未被过度修饰的工作区，OpenAI 公开说不能把 policy compliance 或用户偏好直接训到 CoT 本身上，并且出于安全和竞争原因不向用户公开 raw CoT，只给 summary。换句话说，大厂不是没研究，而是他们在研究时甚至会尽量避免把 CoT 训练成“好看但不真实”。至于“他们内部是不是比公开论文走得更前”，这是我的高概率推断，不是公开文档能直接证明的事实。

3）大厂会训练 CoT 吗？如果训练，会不会早就发现了你现在的很多结论？

会，而且公开证据已经很直接。Google 的 CoT prompting 是最早的 elicitation 证据；OpenAI 明说 o1/o-series 通过大规模 RL 学会 “productively using its chain of thought”，并把 reasoning 直接用于安全对齐；OpenAI 的 Model Spec 还明确写了某些模型会生成 hidden chain-of-thought；DeepSeek-R1 则公开了“RL 激励 reasoning，再把这种 reasoning 能力蒸馏给更小模型”的路线。

所以，如果你的结论是这些比较大的方向——比如“CoT 不必依赖大量人工心路历程语料”“过程监督 / verifier / reasoning trace 对能力和监控都有帮助”“CoT 不是完全 faithful”“monitorability 重要但 fragile”——那这些方向在公开文献里基本都已经被看到，内部大概率也知道得更多。真正还可能有新意的，通常不是再证明这些大方向本身，而是把它们做成一个更强、更可 operationalize 的东西：例如 哪类 CoT 特征能稳定预测一次 rollout 失误、怎么在 RL 后保持 faithfulness / monitorability、在 code agent / tool-use 环境里哪种 trace 最能提前暴露错误。Anthropic 2025 还在报告低 faithfulness，OpenAI 2025 还在说 few evaluations exist，跨-lab monitorability 论文也把这件事叫做 “new and fragile opportunity”，这恰恰说明问题远没有被做完。

我的判断是：你的方向不是“太晚了”，而是已经切到一个 大厂非常在意、但公开答案仍不完整 的交叉地带。你现在最该做的，不是再证明“CoT 存在 / 有用 / 不完全 faithful”，而是把结论钉在一个更窄的对象上：特定 run、特定 domain、特定 evaluator、特定 intervention。把你现在最核心的 2–3 条结论贴出来，下一轮我就按“公开已知 / 可能新颖 / 最该补的实验”给你做一次定位。

cot编程的时候，就是我觉得自然语言没有办法拍平  编程中遇到的那些循环或者选择结构
就是即便我不是显式的按照标准语法写出循环或者分支的话，那么在我自然语言式的COT当中，我仍然需要做一个类似于模拟或者想象的过程；然后这就和next token prediction矛盾，就是不像是数学，就从上到下，从前到后，很自然，而编程因此就要跳跃

我先把你的直觉落成两个问题：自然语言式 CoT 能不能忠实承载程序里的控制流，以及这会不会和线性的 next-token 生成机制发生根本冲突。

还要再加一个关键区分：程序的结构本身并不等于某次具体执行；给定输入后，执行轨迹其实能线性展开，但结构、状态和执行很难同时用自然语言稳妥表示。

Thought for 11m 26s

对，这个点我觉得你抓得很准。我会把它改写成一句更精确的话：在代码任务里，问题不是“CoT 和 next-token prediction 本身矛盾”，而是“自由自然语言 CoT 和程序运行态之间存在表示错配”。按你那份 Python 讲义的视角，源码先被解析/编译，再由 PVM 逐条执行；一次具体 run 从运行时看，本来就是 frame、栈、指令状态不断推进的序列，而不是源码表面上的树结构。

所以，对固定输入的程序来说，循环和分支其实是能被“拍平”的，只是不是拍平成源码，而是拍平成 execution trace。NExT 就把 program trace 定义成“每条已执行语句后的中间变量状态序列”，再让模型基于 trace 生成自然语言 rationale；这等于明确承认：代码运行可以线性化成一串状态更新。

你真正碰到的难点在下一层：自然语言 CoT 很容易把关键状态压缩掉。它会说“遍历数组并更新最大值”，却不保留每轮的 i、x、max，以及到底走了哪条 branch。代码任务的对错，恰恰往往取决于这些细粒度运行态。因此近来的代码 CoT 工作才会反复强调，teacher 生成的步骤常常只是 plausible-sounding explanation，不是对真实执行的可验证描述；更稳的做法是从 execution trace 出发，再把 trace 叙述成自然语言。

这也是为什么我会把你的“编程因此就要跳跃”再修一下：源码级 reasoning 的确更像 graph/tree，标准 CoT 只是一条 path。相关综述也把这件事说得很直白：很多 prompting scheme 背后的 reasoning 可以建模成 graph；CoT 是 plain path，ToT 则是在 chain 上显式引入 branching。也就是说，问题不是模型只能左到右，而是你让它用 path 去承载本来更像 graph 的对象。

举个很小的例子：

s = 0
for x in [2, 5, 1]:
    if x % 2 == 1:
        s += x

一种“像人话”的 CoT 会写成：“遍历列表，只把奇数加进去，所以结果是 6。”
这句话是对的，但几乎没留下监控信号。

更适合代码推理的 trace 会是：
t0: x=2, s=0, skip
t1: x=5, s=5
t2: x=1, s=6

这时 loop 没有消失，branch 也没有消失；它们只是变成了线性的状态转移。用更程序语义的话说，run 的自然对象其实是 (pc, locals, stack, heap) 的状态序列；自然语言 CoT 只是对它的有损转述。和 next-token prediction 真正冲突的不是“循环”本身，而是“你有没有把当前解释器状态保真地带到下一步”。

所以你觉得数学更自然，不一定是因为数学真的没有 branching，而更像是数学解答文本通常已经把分支和回溯压成了一条最后采用的证明路径；而代码任务经常要求你连那些被压掉的运行态也一起维护。

这也正是为什么大家一直从纯自然语言 CoT 往 code/trace/external execution 迁移。Program of Thoughts 明确把 computation 和 reasoning 拆开，让模型把 reasoning 写成程序交给外部执行；代码推理工作也强调，需要正确理解 control flow 和 data flow，而不仅是生成看起来顺的解释。

但还有一个很重要的反例要记住：不是“只要加 trace 就好了”。2025 的 program repair 研究发现，单纯把 execution traces 塞进 prompt，提升其实很有限，而且 trace 一复杂效果就下降。也就是说，关键不只是有没有 trace，而是 trace 是否被组织成模型能稳定维护的状态表示。

所以我会把你的观点压成一句可直接写进论文的问题定义：

代码 CoT 的核心瓶颈，不是线性生成本身，而是自然语言难以保真地承载控制流与运行态。

这也和你前面问的 run 正误监控直接连上了：在 coding 里，CoT 仍然是很有信息量的 side channel，但它不是解释器 ground truth。OpenAI 2025 的监控工作就在 agentic coding 环境里发现，监看 CoT 往往比只看 action 更有效，但这个信号也很脆弱，直接对 CoT 施压会诱发 obfuscation。

把这个想法再往前推一步，你最值得测的不是“自然语言不适合代码”这么泛的命题，而是更窄的三个问题：free-form NL CoT 是否系统性漏掉 branch choice 和 variable diff；这些被漏掉的局部状态能不能早于 final failure 预测 run 出错；把 CoT 换成 execution-grounded trace 之后，这种预测性会不会明显上升。

把你最想分析的 coding task 类型贴出来，比如 output prediction、program repair，还是带工具的 agent run，我就按这个框架帮你直接收成 hypothesis 和 evaluator。

结合我现在在做的NAD_NEXT实验；和  SVD实验，我该怎么做才能去捕捉到这种特征，是否需要额外引入一个大模型去把这种特征从自然语言上捕捉出来

我先把你的问题拆成两件事：一是这种代码里的控制流/运行态缺失特征，怎么在现有 NAD_NEXT + SVD 框架里落成可测信号，二是要不要上一个额外大模型来读自然语言 CoT。

我已经有一个更明确的中间判断了：先别把重点放在再加一个更强的大模型去“读懂”文本，而是先把 CoT 里和控制流、运行态错配有关的痕迹做成结构化、可测的特征。

Thought for 12m 21s

结论先给你：第一阶段不需要额外引入一个“大模型去读自然语言 CoT”。你现在更该做的，是把“自然语言把运行态压缩掉”这件事，翻成一组可计算的 gap 特征，然后直接接到你现有的 NAD_NEXT 流水线上。因为你自己梳理过的 NAD_NEXT-SVD，本质上已经是一个从 prefix / trajectory / meta 数值特征出发的低秩判别器，而不是直接对 CoT 原文做主题分析；同时当前真实 cache 已足够支撑神经元分布、token 置信度、prefix / position 动态和 meta-selector 分析。

但如果你的研究问题是“自然语言是否漏掉了 loop / branch / state”，那当前真正的瓶颈也很明确：不是模型不够大，而是 generated_text 缺失。你那份 cache 梳理已经写得很清楚：compact 报告里没有完整回答文本，所以 rich text validity、文本结构、答案重复、代码闭合这类特征现在只能弱估计；反过来，tok_gini、token_ids、rows/w_max / rows/w_sum、以及性能字段其实都已经在 cache 里或可导出，只是还没系统纳入主特征集。

从表示上说，你要抓的不是 AST 层的“程序长什么样”，而是运行层的“程序怎么推进”。你前面的 Python 笔记也强调了：AST 不是运行全过程，运行时真正维护的是 frame、栈和局部状态。对应到代码推理，NExT 把 program trace 定义成“每条已执行语句后的中间变量状态序列”；REval 也把 runtime reasoning 拆成 code coverage、execution path、program state 和 output 几个维度。也就是说，你真正想抓的对象，本来就更像 execution trace，而不是一整段顺滑的解释文本。

所以我会把你的目标定义成一个压缩缺口：

compression_gap = 程序要求显式维护的运行态复杂度 - CoT 实际显式表达出来的运行态复杂度

左边来自 code / execution，右边来自 CoT / prefix。这个 gap 才是你应该喂给 SVD 的新信号，而不是直接把整段 CoT 扔进 LSA。你自己的 SVD note 其实已经给出很好的方向：文档级、step-level、prefix-level 三路并行；而且现有总结里 coding 域是 10/10 都走 baseline，不是 SVD，这恰好说明在 coding 上更该做 hybrid，而不是押注纯文本低秩化。

我建议你按下面四步做。

先补一层统一导出，不加 LLM。
先把 cache 统一导出成 run 级 / prefix 级 / question 级 JSONL。你那份 note 已经建议这么做。然后新增两类特征：
一类是 code-side demand：loop depth、branch count、nesting depth、API call count、异常路径、可执行 trace 长度、变量写入次数。CodeMind 的失败分析也说明，nested constructs、复杂条件、loop 条件、算术与逻辑组合、API 调用，都会显著增加代码推理难度。另一类是 CoT-side emission：显式 branch 提及数、显式 iteration 提及数、变量名复现率、状态值更新表达数、是否出现“遍历/判断/更新”这类抽象词却没有配套状态值。前者表示“本题需要多少运行态”，后者表示“CoT 真表达了多少运行态”。
把新特征并入现有 SVD，而不是另起炉灶。
你现在的 NAD_NEXT-SVD 已经是 raw / rank / raw+rank -> TruncatedSVD -> LogisticRegression。最稳的做法不是推翻它，而是把新加的 gap 特征、token 曲线特征、rows 曲线特征并进 x_raw。现成最值得先补进去的，就是你 note 里已经点名的 tok_gini 系列、token_ids / 格式信号、rows/w_sum 波动、后段稳定性，以及 prefix-safe 的位置特征。继续沿用 problem_id 分组、grouped holdout、prefix-safe，这些 protocol 不要动。
额外 LLM 只做弱标注，不做最终 judge。
如果你后面拿到了完整 CoT 文本，可以再引入一个便宜一些的模型，把每个句子标成固定 schema，例如：plan / execute / branch / loop / backtrack / check / finalize，再抽 vars_read / vars_write / condition / chosen_branch / iter_idx / confidence。这时它的角色不是“读整段 CoT 给你一个分数”，而是把自然语言转成结构化中间表示。Thought Anchors 的结果支持 sentence-level analysis，而且发现 planning / backtracking 句子往往对后续轨迹影响更大，所以如果要加额外模型，最合适的粒度就是 sentence / step level。

比如让标注器输出这种结构就够了：

{
  "role": "branch",
  "vars_read": ["i", "x", "arr"],
  "vars_write": ["s"],
  "condition": "x % 2 == 1",
  "chosen_branch": "true",
  "iter_idx": 3,
  "has_explicit_state": 1
}
把“LLM 读 CoT”当 baseline，不要当主线。
一个很强的方法学提醒是：在 CoT 监控研究里，基于 activations 的线性 probe 明显强于强 LLM 和文本分类器，因为 CoT 文本可能不忠实、会表演化。这不是 coding 的直接定理，但足够说明：你不该把“再上一个大模型读自然语言”当主信号，而更应该把它放在辅助标注或 error analysis 的位置。另一方面，execution-trace 研究也发现，简单把 trace 塞进 prompt 提升有限，而且 trace 一复杂效果还会下降；而 execution-trace training 的工作又提示，长执行里更好的不是累积长叙述，而是更紧凑的 dynamic scratchpad。合起来看，关键不是“要不要大模型”，而是“你有没有把状态压成稳定、紧凑、可比较的表示”。

所以我的建议其实很明确：

先做三层并行，而不是先加一个大模型。

第一层是 activation/prefix native，也就是你现在 NAD_NEXT 已有的那些特征。
第二层是 execution-grounded heuristic，也就是 code demand + CoT emission + gap。
第三层才是 LLM weak annotation，只做句子级结构化标签。

然后做四个 ablation：只用第一层、第一层+第二层、第二层+第三层、三层全开。
只要 第一层+第二层 已经明显提升，你就已经证明了：你要找的“运行态被自然语言压缩”的特征，本来就是可结构化捕捉的，不需要先上一个更大的模型。只有当这一步到顶以后，第三层的 LLM 标注才值得花成本。

再补一个和 SVD 实验直接相关的建议：如果你继续做 text-SVD，不要全域混做。你那份 note 已经提醒，LSA/SVD 对语料选择和维度很敏感；而 Auto-CoT 本身也是先聚类再选代表问题。对你这里，更合理的是 coding 单独建词表、单独选 rank、优先做 step-level / prefix-level SVD，不要把 math / science / coding 混成一个总词表再期待同一个低秩空间解释所有现象。

如果你眼下还拿不到 generated_text，那就先做一个 纯 cache proxy 版：用 tok_gini 的 tail / slope、tok_logprob 的尾部下坠、rows/w_sum 的峰值波动与 late oscillation，再加上你现有的 outlierness、medoid_affinity、prefix_budget_ratio，先去预测“这条 run 后面会不会出现 branch / loop 压缩型失败”。这一步虽然还没直接读自然语言，但已经能先验证：运行态压力本身是不是会在 prefix 里提前冒出来。

把你现在一条 run 能拿到的字段贴出来，我可以直接帮你把这套东西收成一个可执行的 feature schema + ablation plan。


## 20260420

1. 一周没review了
2. 时间过得真的很快呢
3. 心还是不定，不定就易乱。 短视频，这种就会趁虚而入。
4. 心要稳，不要过喜或过悲
5. 不要轻易感到无聊
6. 没有github的几日，反而会更加专注。有了电脑，有了账号，有了ai就会定
7. ai是否剥夺我真的面对困难的勇气？
8. 数学还是得学。如果把它当作对冲的话，也能自解
9. 我所厌恶的，是自己，是自己的影子吗？
10. 我所恐惧的，意义被消解，是这方面技能对于我的存在本身价值吧
11. 静下心来。 即便不能进入那个组又如何？这个期间，用到了最先进的ai，已经是很不错的体验了。
12. 放轻松。但也是要珍惜时间
13. 空即是色，色即是空，什么都在意，什么都留不下
14. 和别人比，是为了什么呢？
15. 关于统计学的几种应用可以记得总结
16. 数分的一系列命题。瑕积分无穷限积分，测度，各种积分证明计算题目，习题课题目
17. 高等代数书吃透，课后习题吃透
18. GPU
19. 主成分分析
