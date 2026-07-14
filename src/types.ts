/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ThinkingScores {
  C: number; // Conceptual
  E: number; // Empirical
  S: number; // Systematic
  F: number; // Fluid
  P: number; // Plural / Dialogic
  I: number; // Solitary / Contemplative
  D: number; // Doubt / Critical
  A: number; // Affirmation / Creative
}

export interface QuizOption {
  id: string;
  label: string; // The text on the roadside wooden signpost
  quote?: string; // A short sensory or poetic accent statement
  scores: Partial<ThinkingScores>;
}

export interface QuizQuestion {
  id: number;
  stageName: string; // e.g. "第一段路：落叶的边界"
  situation: string; // Dynamic description of the surroundings in third-person cinematically
  options: QuizOption[];
}

export interface NearbyThinker {
  id: string;
  name: string;
  description: string;
  coordinates: { x: number; y: number }; // Percentage position on the lakeside scenery
  thinkingStyle: string; // e.g. "我也有一点这个方向的处理方式"
}

export interface ThinkerProfile {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  description: string;
  shapeName: string;
  shapeDescription: string;
  bulletPoints: string[];
  actionableAdvice: string;
  recommendedNext: string;
  bgGradient: string; // Tailwind class for background accents
  accentColor: string; // Hex color for buttons/glows
  shapeSvgPath: string; // Unique SVG interactive path or shape type
  nearbyThinkers: NearbyThinker[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    stageName: "第一段路：落叶的边界",
    situation: "细雨微茫。你踏入铺满树叶的泥径，金黄的枫叶与深褐的栎叶在道路两侧形成了一条若隐若现的世界界线。空气中弥漫着泥土和雨水的潮气，四周一片沙沙的声响。",
    options: [
      {
        id: "1A",
        label: "蹲下仔细对比叶片的对称形状与脉络特征，试图为分界边界归纳出清晰的空间定义。",
        quote: "「混乱必须由定义来裁决。」",
        scores: { C: 2, D: 1, I: 1 }
      },
      {
        id: "1B",
        label: "顺着界线向前延伸视线，默默推算林径的树种分布、更深处的植被规律与行路坐标。",
        quote: "「森林的秘密在于隐藏的秩序。」",
        scores: { S: 2, C: 1 }
      },
      {
        id: "1C",
        label: "不去多想界线，单纯用脚尖踩着松软而湿润的落叶层，全然感知反作用力与水分的变化。",
        quote: "「真理写在脚掌与大地的摩擦中。」",
        scores: { E: 2, F: 1 }
      },
      {
        id: "1D",
        label: "拾起一片红得刺眼的枫叶。相信它此刻被你拾起的宿命，远比其余树种的群体规矩要重得多。",
        quote: "「孤立的事物，比永恒的规则更有力量。」",
        scores: { F: 2, A: 2, I: 1 }
      }
    ]
  },
  {
    id: 2,
    stageName: "第二段路：倒下的古木",
    situation: "雷击留下的黑色焦炭痕迹还清晰可见。一条苍老粗壮的松树干横截道路，挡住前行去向。树枝上挂着雨水，在静谧的空中闪着微弱的光芒。左右两侧无路，只有湿滑的泥坡。",
    options: [
      {
        id: "2A",
        label: "手触焦痕，猜测雷击瞬时的空气电荷与树龄偶然，质疑并推导下一株巨木倒下的概率。",
        quote: "「每一声惊雷，都是统计学上的一个落点。」",
        scores: { E: 1, D: 2 }
      },
      {
        id: "2B",
        label: "寻找前方树枝上被人踏磨出的光滑印迹，判定这是被众人实践过的安全跨越路径，踩着前人脚印通过。",
        quote: "「在无人的寂静里，前人的脚印就是火把。」",
        scores: { P: 2, E: 1 }
      },
      {
        id: "2C",
        label: "直接从古木最棘手、带有尖锐树杈的一段迎难攀过，视其为磨炼自身意志与平衡力的不二新试炼。",
        quote: "「障碍物，正是检验我的意志的绝佳容器。」",
        scores: { F: 1, A: 2, I: 1 }
      },
      {
        id: "2D",
        label: "坐在木桩旁，分析『道路』的形式定义：如果绕过它，这是否仍是先前的同一条路？路标的连续性如何确立？",
        quote: "「在讨论如何翻过去之前，先问什么是翻越。」",
        scores: { C: 2, D: 1 }
      }
    ]
  },
  {
    id: 3,
    stageName: "第三段路：潮湿的碑文",
    situation: "树林阴暗处躺着半块饱经雨水侵蚀的青苔石碑，刻痕早已剥落残缺，似乎是古代行者留下的某种思想谜题。此时细雨如雾，石碑周围散发着淡淡霉潮气。",
    options: [
      {
        id: "3A",
        label: "拂开指尖的青苔，反复摩挲，怀疑石碑的真实年代，甚至怀疑这只是景区为了猎奇留下的恶搞物件。",
        quote: "「盲目的信从，是寻找遗迹最大的一场灾难。」",
        scores: { D: 2, E: 1 }
      },
      {
        id: "3B",
        label: "不求甚解，只靠在湿碑前深吸一口雨林空气，感受历史、青苔与沉沉石质融为一体的无言生命厚度。",
        quote: "「文字会消逝，但石块冰凉的呼吸不会。」",
        scores: { E: 2, F: 1 }
      },
      {
        id: "3C",
        label: "依凭残缺的偏旁、字形构架和先验逻辑，在心里有条不紊地反推字面句法，重构一套能完全自恰的理性表达系统。",
        quote: "「秩序被毁坏了，逻辑也能把它接上。」",
        scores: { S: 2, C: 1 }
      },
      {
        id: "3D",
        label: "指着模糊的刻痕对虚构的旅伴轻诉，在脑中描摹百年前风雨如晦时，人们在此围碑争论或相互取暖的社会群像。",
        quote: "「文字诞生于两个人相互对视的瞬间。」",
        scores: { P: 2, A: 1 }
      }
    ]
  },
  {
    id: 4,
    stageName: "第四段路：弥漫的雾气",
    situation: "湿气骤然重化为白雾，树林的能见度骤降，远处的大树都隐入了白茫茫的一片。此时林中没有了雨声，只剩下一片极致的绝对无声。",
    options: [
      {
        id: "4A",
        label: "闭上眼睛盲步前行，摒弃视觉杂音，全心信任耳朵听风走势与脚掌触压湿泥的直觉张力。",
        quote: "「闭上双眼，你才能用整个身躯触碰深林。」",
        scores: { E: 2, F: 1, I: 1 }
      },
      {
        id: "4B",
        label: "立定不动，取出随身理性的定位测定器，坚信必须先在脑中确立不变的坐标参照系，才能走下第一步。",
        quote: "「如果没有坚实的指南，宁肯保持高贵的静止。」",
        scores: { S: 2, C: 1 }
      },
      {
        id: "4C",
        label: "清唱一首带着回响的旷野之歌，用声音把白雾砸出一个自我的振动波，证明自身意识绝对无法被浓雾吞没。",
        quote: "「我歌唱，所以我在这片浓雾里确立自身。」",
        scores: { F: 1, A: 2, I: 1 }
      },
      {
        id: "4D",
        label: "向前方可能隐匿着旅伴的黑暗高声呼唤，通过声音的交互应答、或者拉起他人的手臂来对齐漫漫前程的方向。",
        quote: "「人在复数的存在中，才不会被虚无遮蔽。」",
        scores: { P: 2, C: 1 }
      }
    ]
  },
  {
    id: 5,
    stageName: "第五段路：静默的黑羽",
    situation: "前方一杆带铜锈的路牌顶端，伫立着一只身形硕大的乌鸦。它在细雨中羽毛黑得反光，既不扑翅飞走，也不发出啼鸣，只是极其平静地一动不动注视着你。",
    options: [
      {
        id: "5A",
        label: "认定乌鸦不代表任何灵异启示，世界并不存在事先写好的隐秘剧本，一切只是物理上的随机交会。",
        quote: "「别给自然的偶然，穿上神圣的外衣。」",
        scores: { E: 1, D: 2 }
      },
      {
        id: "5B",
        label: "将乌鸦视作此片森林浑然天成的默然见证者，朝它默默欠身致意，接纳万物在无序尘网里自然安放的位置。",
        quote: "「顺应宇宙的寂静，像草木和飞鸟一样松弛。」",
        scores: { F: 2, E: 1 }
      },
      {
        id: "5C",
        label: "从树叶滴水的频度、鸟爪在不锈钢牌面的受力平衡角度，严密记录其重力结构，推演其生物栖息周期规律。",
        quote: "「自然不仅需要崇敬，更需要精密归纳与量化。」",
        scores: { S: 2, E: 1 }
      },
      {
        id: "5D",
        label: "试探性地对乌鸦发问，试图从它羽毛在斜光下的角度变化中，辨析它对你思考结果持怀疑还是赞同态度。",
        quote: "「我与飞鸟的沉默，也是一场思想上的反复交锋。」",
        scores: { C: 2, P: 1 }
      }
    ]
  },
  {
    id: 6,
    stageName: "第六段路：两盏雨夜明灯",
    situation: "路旁松树干下悬着两个古老神秘的避雨小阁，各自亮起一盏引路明灯：一盏是纯净剔透、光芒没有一丝温度的冷白极光灯；另一盏是有些焦灼闪烁、带着煤油芳香的棕红煤油马灯。",
    options: [
      {
        id: "6A",
        label: "走向那盏带有粗粝焦油香气的煤油马灯——那种跳动、不安分、包含杂质的生命之火才最让人感知澎湃的活着。",
        quote: "「不完美而狂热的光芒，才是生命沸腾的意志。」",
        scores: { F: 1, A: 2, E: 1 }
      },
      {
        id: "6B",
        label: "趋向冷白极光灯——唯有冰冷、完全剥离主观色彩、稳定无杂质的理性光芒，才能免除我们在森林中的偏见迷失。",
        quote: "「唯有用无死角的微光割裂朦胧，才能确证前方。」",
        scores: { C: 2, S: 1 }
      },
      {
        id: "6C",
        label: "认为两盏人造灯都是对这片夜雨本身的粗暴干扰，自顾自走入两灯边界之外、更加和谐深邃的夜色虚空。",
        quote: "「最大的火光，就隐藏在夜空的混沌虚静之中。」",
        scores: { F: 2, I: 1 }
      },
      {
        id: "6D",
        label: "用随身透明板将两种光束交汇并投到树干上，对照研究不同色温在多湿度环境下的光子漫反射效果。",
        quote: "「两极不应作为阵营对立，而应作为相干因变量进行实验。」",
        scores: { S: 2, E: 1 }
      }
    ]
  },
  {
    id: 7,
    stageName: "第七段路：林中湿冷的铸铁椅",
    situation: "在一处寂寥开阔的圆形草地中央，静卧着一张被雨淋透的斑驳古老铁艺长椅，四周铺满了金褐相间的松针与熟落的坚果。",
    options: [
      {
        id: "7A",
        label: "一屁股坐上去，哪怕裤腿会沾上透凉，也要切实通过冰冷的钢铁感受秋天此时此刻最生动的体温。",
        quote: "「对世界的直观体认，来源于最冷峻的直接接触。」",
        scores: { E: 2, I: 1 }
      },
      {
        id: "7B",
        label: "凝视着长椅，深深静默：此时身旁无人注视时，这张椅子的『物自体』还在吗？它究竟在以何种面貌独立生存？",
        quote: "「世界因主观审视而被构筑，还是在幽暗深处自给自足？」",
        scores: { C: 2, I: 1 }
      },
      {
        id: "7C",
        label: "弯下身翻查长椅螺纹的松紧、铁锈腐蚀的面积比例，用随身木棍敲击，严密计算分析其力学承載与自然氧化阈值。",
        quote: "「在形而上学的天空打转，不如解剖一把生锈铁椅。」",
        scores: { S: 2, E: 1 }
      },
      {
        id: "7D",
        label: "退开三步，在脑海中将其三维体积完全抽空，仅把长椅抽象成一条平移几何线段，推演极简主义下的森林空间引力美学。",
        quote: "「剔除长椅的一切现实属性，只剩下高尚的抽象坐标。」",
        scores: { C: 2, S: 1 }
      }
    ]
  },
  {
    id: 8,
    stageName: "第八段路：通往湖泊的下坡",
    situation: "前方的树冠渐形稀疏，天光突然开朗。眼前展开一段铺满细沙碎石的长下坡路，你耳畔已能够清晰地听到微风拂过湖水激起的阵阵细碎涟漪声。",
    options: [
      {
        id: "8A",
        label: "顺着陡峭的沙坡撒开脚步向下俯冲奔跑，任凭细碎砂石在鞋底摩擦作响，渴望用肉体撞入这片新湖光世界。",
        quote: "「重力就是召唤，以燃烧生命的方式抵达终点。」",
        scores: { F: 1, A: 2, I: 1 }
      },
      {
        id: "8B",
        label: "缓缓按捺急促呼吸，仔细整理淋湿的衣服。在脑海中条分缕析地设想，当面对湖水镜像时应该准备何种追问线索。",
        quote: "「若不先将困惑澄清，见到清澈的湖泊也无济于事。」",
        scores: { C: 2, D: 1 }
      },
      {
        id: "8C",
        label: "步步为营，随时用足弓调整重心、观察下坡路的附着系数，以最平稳周延的动作曲线，保证每一步落脚的安稳万全。",
        quote: "「长途行军的安全感，是用最克制的行步效率喂养出来的。」",
        scores: { S: 2, E: 1 }
      },
      {
        id: "8D",
        label: "闭上双眼走下最缓的几步，在不设任何预期、甚至全然忘记湖泊存在的状态里，任由斜坡趋势接管全身平衡。",
        quote: "「无心以待风物，不知下坡之所在，亦忘身之所在。」",
        scores: { F: 2, A: 1 }
      }
    ]
  }
];

export const THINKER_PROFILES: ThinkerProfile[] = [
  {
    id: "socrates",
    title: "苏格拉底式概念验票员",
    tagline: "在概念的落叶林里，没有一块含混的门牌不被盘问。",
    tags: ["概念洁癖", "追根究底", "理性对话", "灵魂审视"],
    description: "你如同雨中林径里一位清醒的『检票员』。每当面对模糊不清的大众观念，你从不盲目接受，而是习惯性地拦下它们，抽丝剥茧地盘问：『这真的是它自称的那样吗？』你善于在嘈杂、似是而非的前设里理出清晰的界线。你的大脑像是连环嵌套的主动圆环，用无休止的提问驱散一切不严密。",
    shapeName: "永动叩问之环 (Socratic Rings)",
    shapeDescription: "由多道同心、咬合且不断旋转的理性环轨构成，折射出深邃的青金色，没有闭合，始终探索全新的切入点。",
    bulletPoints: [
      "核心特质：在追求本质定义的过程中，你有一种近乎道德的智识偏执，不能忍受任何形式的敷衍和混乱。",
      "思维反射：常温状态下温雅博学，而在决策分歧时，会用一连串精密的『难道不是吗？』瞬间击落漏洞百出的陈规。",
      "盲点预警：偶尔过度钻研语义细节，导致你把精巧的思考耽搁在出发的路牌上，略微缺乏迅速跃入不可逆行动的果决。"
    ],
    actionableAdvice: "写一份你工作与生活里最高频词汇的『词义修正书』：尝试给日常口癖中的「有趣」、「有意义」、「低效」写下极其硬性的客观界定标准，并坚守一周。",
    recommendedNext: "浪漫主义情感反叛流放系列",
    bgGradient: "from-amber-950/40 via-yellow-950/30 to-zinc-950/60",
    accentColor: "#F59E0B",
    shapeSvgPath: "M50,10 A40,40 0 1,1 49.9,10 Z M50,25 A25,25 0 1,0 50.1,25 Z",
    nearbyThinkers: [
      {
        id: "descartes",
        name: "笛卡尔式怀疑冰川",
        description: "你也深深渴望在重构之前，将根基处的软沙统统清除干净。",
        coordinates: { x: 32, y: 48 },
        thinkingStyle: "你也深信，如果不从最不容置疑的原点重新启航，任何思考的航道都会结满不可触碰的虚妄浮冰。"
      },
      {
        id: "arendt",
        name: "阿伦特式公共纽带",
        description: "你也无法在彻底无声的荒野里独存，思想必须在交锋中显现。",
        coordinates: { x: 62, y: 35 },
        thinkingStyle: "你同样意识到，所谓的绝对客观必须建立在众人复数、彼此倾听与展示其行动力的精神广角之中。"
      }
    ]
  },
  {
    id: "kant",
    title: "康德式星空筑路师",
    tagline: "面对迷离的大雾，唯有内部的铁律能筑成绝对的思维主路。",
    tags: ["硬核严自律", "先验格律", "理性批判", "时空框架"],
    description: "你的大脑里架设着精密如齿轮天文仪的巨型机器。对你而言，外部世界的泥泞和偶然性不仅无法打乱你，反而成为了你展示强大自我重组秩序的燃料。你认为自律才是真正的自由。当跨越荆棘和倒地的古木时，你并不是被动绕开，而是像一位天才工程总设计师，在一万种不确定的落叶里筑造一条严格匀速、无限匀称的终极高速路线。",
    shapeName: "对称几何星云 (Kantian Monolith)",
    shapeDescription: "由极具力量感的金色等边晶格、对称中轴、与完美平衡的重叠框架构筑而成，像是一座不可动摇的黄金灯塔。",
    bulletPoints: [
      "核心特质：做事情带有浓烈的一致性，高度契合『任何时候，人都应该将个人准则上升为普适法则』的理念。",
      "思维反射：极强的时间意识，擅长在一片散沙的状态中，秒级画出极其清晰的执行步骤、分档归类以及自恰模型。",
      "盲点预警：一旦现实的事态脱离了你严丝合缝的理性时刻表，你可能会遭遇长达数小时的逻辑阻滞感与强烈排斥情绪。"
    ],
    actionableAdvice: "体验一次彻底的『时间格律试验』：完全不借助外在的被动打卡软件，依靠高度自觉，将你下周二的时间表画成完全对称且功能各归其位的精确理性格栅。",
    recommendedNext: "混沌直觉美学与自然流变系列",
    bgGradient: "from-amber-900/40 via-amber-950/40 to-neutral-900/70",
    accentColor: "#D97706",
    shapeSvgPath: "M50,15 L85,45 L70,85 L30,85 L15,45 Z M50,30 L68,48 L60,72 L40,72 L32,48 Z",
    nearbyThinkers: [
      {
        id: "bacon",
        name: "培根式实验极客",
        description: "你同样拥有极强的归纳统筹欲望，想要从细节推至万物。",
        coordinates: { x: 42, y: 62 },
        thinkingStyle: "你也笃信，无头苍蝇般的盲目飞舞绝无价值，思考必须配备精美的辅助天平、工具箱与归纳数据库。"
      },
      {
        id: "descartes",
        name: "笛卡尔式破冰船",
        description: "对清晰精确知识基底的无限追求，让你有着相同的逻辑崇拜。",
        coordinates: { x: 25, y: 22 },
        thinkingStyle: "你和笛卡尔一样，无法忍受半吊子的相对主义，渴望将一切混沌打碎重组为闪闪发光的几何定理。"
      }
    ]
  },
  {
    id: "niezsche",
    title: "尼采式重估火行者",
    tagline: "在无路的落叶泥原上，踩出最炽烈的火焰去照亮你的路牌。",
    tags: ["精神之豹", "重估一切价值", "权力意志", "自我超越"],
    description: "你体内涌动着一股骄傲、决不妥协的野性能量。在别人看来昏暗、令人焦虑的秋雨荒坡，对你而言正是自我挣脱、淬满意志的绝佳斗技场。你对一切画好的安全标牌、所谓的学者规劝抱有极高贵的审美嫌恶。你不是世界的读者，而是荒原的赋予者——你在雨泥中重塑道路的意义，并坚信任何让你受挫的湿冷，都是让你生命力澎湃的伟大容器。",
    shapeName: "跳跃的重估火花 (Nietzschean Dynamo)",
    shapeDescription: "呈现粗粝的几何尖锐刺针，核心处是一枚悬浮的永不熄灭的金色裂变火核，动态带有极强的上升破坏力和穿透感。",
    bulletPoints: [
      "核心特质：具有打破旧格局的惊人驱动。相比『遵守好的秩序』，你更迷恋『由我创造的带有痛快张力的新秩序』。",
      "思维反射：常温下表现为挑剔和独处的刺客。在逆境暴风雨中反而会发出充满爆发力的决策，用激浪吞没疲软和阻力。",
      "盲点预警：因为个体自律要求和审美直觉太高，你常因为周围同伴的妥协和温吞而产生深刻而孤独的傲慢与疲劳。"
    ],
    actionableAdvice: "进行一周的『偶像解构运动』：找三个你习以为常并常拿来自我设限的『我应该遵从的教条』，将其完全逆向解构，替换为你自己骄傲的『我想 / 创造』。",
    recommendedNext: "老庄自然消解与无为无相系列",
    bgGradient: "from-orange-950/40 via-red-950/20 to-neutral-900/60",
    accentColor: "#EA580C",
    shapeSvgPath: "M50,10 L60,35 L85,35 L65,55 L75,85 L50,65 L25,85 L35,55 L15,35 L40,35 Z",
    nearbyThinkers: [
      {
        id: "zhuangzi",
        name: "庄子式无待逍遥魂",
        description: "你和这位老庄同伴一样，同样在自成一格地反叛僵化的世俗刻痕。",
        coordinates: { x: 75, y: 70 },
        thinkingStyle: "虽然他选择退入山林水韵，你选择在泥泞中搏击生命力，但你们对陈腐说教都怀有一种默契的高傲鄙夷。"
      },
      {
        id: "descartes",
        name: "笛卡尔式雷电破冰",
        description: "你有着和他一样的勇气，去怀疑和推翻庞大而无用的历史迷宫。",
        coordinates: { x: 18, y: 40 },
        thinkingStyle: "只是笛卡尔最终走向了干净的水晶数学圣殿，而你更想在生命的荒原上燃起一簇超越自我的熊熊大火。"
      }
    ]
  },
  {
    id: "zhuangzi",
    title: "庄子式鲲鹏逍遥客",
    tagline: "游历于松针雨露中，乘风而行，在水天一色处泛舟忘归。",
    tags: ["物我两忘", "混沌和谐", "超脱二元", "纯粹直觉"],
    description: "你不喜欢在落叶界线前写论文，也懒得去计算煤油灯的光子阻系数。在你看来，这片冷雨秋林是不可分割、浑然流变的诗意温巢。你拥有一种浑然天成的认知松弛度，能用奇绝、看似不合常理的无待视角去化解生活里崩紧的对峙。当道路受阻、迷雾锁林，你不会跟物理障碍死磕，你早已幻化为一阵清凉的松风，在雾顶惬意滑行。",
    shapeName: "流变折光之水纹 (Daoist Ripple)",
    shapeDescription: "形貌无定，周身带着温润的金绿柔光，以类似于莫比乌斯环与温柔水滴完美交融的形态舒卷自如。",
    bulletPoints: [
      "核心特质：擅长超脱日常矛盾，在对立、冲突最激烈的局面，你总能抽身而出，指出事物本质上的平等与游戏价值。",
      "思维反射：随和随性，对条条框框的硬性规则不以为然，比起规划更信任直觉直观，甚至通过自嘲解构重力的拉扯。",
      "盲点预警：在现代社会过于讲求严格细分的量化考核和长期琐碎细节追踪时，你可能很快感到灵知干涸，并容易陷入逃避情绪。"
    ],
    actionableAdvice: "尝试一次彻底的『无待失焦散步』：关掉任何带有计数功能的智能穿戴，不设定里程和目的地，全随脚部骨骼的瞬间偏好去漫游一小时，直到你疲倦并坐下。",
    recommendedNext: "培根硬骨头工具改良铁匠系列",
    bgGradient: "from-emerald-950/40 via-teal-950/30 to-zinc-950/60",
    accentColor: "#10B981",
    shapeSvgPath: "M50,15 C20,15 20,40 50,45 C80,50 80,75 50,75 C20,75 20,85 50,85 C90,85 90,15 50,15 Z",
    nearbyThinkers: [
      {
        id: "hume",
        name: "休谟式感官清道夫",
        description: "同样对高悬夜空的僵硬神圣教条投以温和、嘲弄的冷眼。",
        coordinates: { x: 55, y: 75 },
        thinkingStyle: "你们都不要什么抽象的绝对天启，只是休谟留在了暖和舒适的英伦书房，而你跃入了万物平齐的空灵原生态中。"
      },
      {
        id: "niezsche",
        name: "尼采式意志激荡客",
        description: "你完全能感应他那种对于群体性教条的致命反叛冲动。",
        coordinates: { x: 82, y: 55 },
        thinkingStyle: "但比起他那种背负着沉重太阳、想要重组荒漠的高烈度焦渴，你更懂得以游戏尘寰和无为的松劲，在水中消融沉重。"
      }
    ]
  },
  {
    id: "arendt",
    title: "阿伦特式广场观察家",
    tagline: "深林亦是复数的聚落，唯有在对话中我们的星光才交织闪烁。",
    tags: ["多元复数", "言说见证", "行动奇迹", "反同质化"],
    description: "在你的意识图谱里，这片美丽的落叶并非单调的物理死物，而是吸引行者们共同踩过、共同发生对峙的『剧场』。你对一个人躲在地下室想出来的万物理论不抱绝对迷恋，而极其敏锐于众人用不同声音对世界发表见证的瞬间。你拥有温暖的感知力，善于为流浪者建构共享的对话圈子，相信思维唯一的意义在于连接和保护他人的多元面孔。",
    shapeName: "聚合的光芒晶格 (Arendtian Interlace)",
    shapeDescription: "由许多条相交在温亮中心点的光晕弧度相结成的动态圆矩阵，象征无数个性在对话中擦出的神圣公共网罩。",
    bulletPoints: [
      "核心特质：具有极为珍稀的同理倾听力和对政治、群体现象的透彻穿透力。极具反驳一切洗脑和同质化暗示的直觉。",
      "思维反射：爱辩护，爱倾听，热切观察人类的交往习惯，并倾向于通过组织、辩难或协作来驱逐笼罩时代的孤单冰冷。",
      "盲点预警：有时在过于狭窄、只能一个人咬牙承担而无法分担的多余孤僻境地上，你的情绪能量会容易枯涸。"
    ],
    actionableAdvice: "进行一次『复数言说聚落』：下周组织或参与一场不设胜负的高概念茶话沙龙，扮演彻底的『倾听旁听记录者』，并分析大家如何用不同立场交织出同一个命题的立体样态。",
    recommendedNext: "笛卡尔怀疑极地几何解剖系列",
    bgGradient: "from-sky-950/40 via-indigo-950/30 to-zinc-950/60",
    accentColor: "#0284C7",
    shapeSvgPath: "M50,15 L74,15 L74,39 L50,39 Z M26,39 L50,39 L50,63 L26,63 Z M50,39 L74,39 L74,63 L50,63 Z",
    nearbyThinkers: [
      {
        id: "socrates",
        name: "苏格拉底式对话宗师",
        description: "在追寻定义的追问里，你们都相信对话是清洗灵魂唯一的肥皂。",
        coordinates: { x: 45, y: 25 },
        thinkingStyle: "你们深信，真理不能诞生于自言自语中，必须在一来一回的对谈切磋与相互照耀里，无情的假象才能被刮离干净。"
      },
      {
        id: "hume",
        name: "休谟式温暖习惯法",
        description: "和他一样，对于绝对冷血的大一统神圣公式保持高雅的警惕。",
        coordinates: { x: 68, y: 78 },
        thinkingStyle: "休谟将人际情感与日常习俗作为避风港，这与你注重人道、交往底蕴和常情常理的观察点一脉相承。"
      }
    ]
  },
  {
    id: "hume",
    title: "休谟式经验采珠人",
    tagline: "世界从来不是钢铁造的逻辑轨道，我只想优雅地捡起潮湿沙地里的真实蚌壳。",
    tags: ["感知怀疑", "温和讽喻", "习惯归纳", "享受当下"],
    description: "你是一个绝顶聪明却又不带有一丝说教面孔的高雅散行者。你极度理智，理智到一眼就看穿了人类一切试图充当上帝的『宏大体系』其实不过是自欺欺人的连环计。比起那些不食人间的空中楼阁，你更愿意相信你脚底板沾上的黄泥巴、提灯烤热的额头，和那些基于无数次经验堆积出的生活常识，以一种低调、理性的姿态尽情玩味这个不连续但充满惊喜的世界。",
    shapeName: "颗粒偏镜珍珠网 (Empirical Peales)",
    shapeDescription: "由无数点缀在金色暗纹上的偏光圆晶珠堆叠成的流态星轨，既闪烁又有着实打实的重力坠感。",
    bulletPoints: [
      "核心特质：具有极为纯正的怀疑智商，但绝不在怀疑中走向消极，而是转向去拥抱日常柴米油盐和具体感官世界的质地美。",
      "思维反射：常温下表现为随和、理智且有些黑色幽默的老友。遇到吹牛皮的空想概念，总能用一句一针见血的实操玩笑秒去光环。",
      "盲点预警：因为骨子里看透了规则和承诺背后的偶然和脆弱，你容易在需要做出绝对而沉重承诺的转折点显出退缩举止。"
    ],
    actionableAdvice: "体验一次『彻底无框架感官复归餐』：今天选一顿饭，关掉一切声音与屏幕。只准调用你的色、香、触、温觉，去感受每一颗淀粉和配料在口齿间的化学流变，并默写下体验细节。",
    recommendedNext: "康德黑森林钟表匠超级意志建构系列",
    bgGradient: "from-amber-950/40 via-orange-950/30 to-zinc-950/60",
    accentColor: "#F59E0B",
    shapeSvgPath: "M50,15 A12,12 0 1,1 50,39 A12,12 0 1,1 50,15 M30,55 A12,12 0 1,1 30,79 A12,12 0 1,1 30,55 M70,55 A12,12 0 1,1 70,79 A12,12 0 1,1 70,55",
    nearbyThinkers: [
      {
        id: "zhuangzi",
        name: "庄子式风中飞鸟",
        description: "你们对教条主义都带着高度洗练、好玩的傲然消解手势。",
        coordinates: { x: 74, y: 75 },
        thinkingStyle: "两个同样不要宏大叙事、同样热恋感官和当下起伏的自由灵魂——你用温雅英伦的知性解构，他用东方逍遥的水纹消释。"
      },
      {
        id: "bacon",
        name: "培根式森林显微镜",
        description: "同样是实打实的唯物派，厌恶玄学，渴慕世俗具体的知识与效益。",
        coordinates: { x: 45, y: 82 },
        thinkingStyle: "只是培根更雄心勃勃地想要拿工具编制网罩，而你更宁静温和，偏向于舒适地享受这些散珠碎片带来的清逸乐趣。"
      }
    ]
  },
  {
    id: "bacon",
    title: "培根式林中实验者",
    tagline: "荒野不是用来祈祷的，它是等待我们的双手合力解剖、重组庞大真相的数据库。",
    tags: ["实证主义", "知识驱动", "归纳百宝袋", "能动改良"],
    description: "你是一个行动力爆表、装配着满口袋工具与试管的思想工程师。对你而言，森林既不是不可亵渎的神明、也不是毫无意义的虚无。你眼里的每一棵树、每一滴酸雨，都是可以被归纳分析、进而据造能动器皿加以控制改善的『大数据样本』。你坚信思考的唯一检验标准是在生活里究竟能擦出多么管用的火亮。你用你的步履，在荒坡泥潭里不断提纯，最终在湖边拿出一套优雅强大的科学图景。",
    shapeName: "精密旋转齿轮矩阵 (Baconian Engine)",
    shapeDescription: "由黄铜锈拉丝金属拼装出的多级渐进几何框架，环状带有复杂的归纳索引刻刻与滑移刻盘，象征力量与知识的合体。",
    bulletPoints: [
      "核心特质：具有无比广阔、踏实的归纳天性和旺盛改良习惯。厌倦一切高谈阔论，对能转化为现实效益、提质增效的知识有本能的崇敬。",
      "思维反射：极度看重工具性和数据统计。遇到低效混乱状态，会立即拿出系统优化的解决方案，而不是在一旁抱怨或悲叹造化。",
      "盲点预警：偶尔过度局限于功能和手段的改良，而容易忽略去仰望星空，审视那个宏大目标的终极终归宿和本源价值。"
    ],
    actionableAdvice: "写一份个人的『工作习惯效能审计实验清单』：挑选一个你目前感到无效率的生活习惯。在接下来的五天里，每天只在固定控制的前提下小心改动一个实验自变量（如起床后的喝水量、专注时间配比）来验证哪一个是最大因果解法。",
    recommendedNext: "苏格拉底无理性纯解构反思系列",
    bgGradient: "from-amber-900/40 via-yellow-950/20 to-neutral-800/60",
    accentColor: "#CA8A04",
    shapeSvgPath: "M50,15 L50,85 M15,50 L85,50 M25,25 L75,75 M75,25 L25,75",
    nearbyThinkers: [
      {
        id: "kant",
        name: "康德式精密测量刻度",
        description: "你们对建构主义、步骤化、规则化的推进有着相似的理智洁癖。",
        coordinates: { x: 38, y: 52 },
        thinkingStyle: "你和康德一样，不爱毫无条理的野性梦呓，但康德在脑内用纯粹批判画公路，你在荒野里用螺丝钉在泥水中造机械。"
      },
      {
        id: "hume",
        name: "休谟式怀疑论老友",
        description: "一提起要依赖实证不依凭空中幻想，你和他就能立刻握手拥抱。",
        coordinates: { x: 58, y: 84 },
        thinkingStyle: "只是在他温和躺平、微笑着喝着红茶感慨因果关系只是一种习惯之余，你却早已拿出了锤子，试图把这些习惯直接做成能自动航行的独木舟。"
      }
    ]
  },
  {
    id: "descartes",
    title: "笛卡尔式怀疑破冰船",
    tagline: "在将整个落叶大雾彻底推倒怀疑之前，绝不踏出第二只脚。",
    tags: ["我思我在", "地基清理者", "数理重建", "根源奠定"],
    description: "你就像是一艘孤傲、寒光闪闪的钢铁破冰巨轮。在遇到不严密、含混粘连的森林边界与虚饰提灯时，你的理智天性会驱使你爆发出一场极端的方法论怀疑：如果连我的身体、白雾、连脚底下的路都是不真实的幻象呢？直到你在彻底的废墟深谷中摸到那块无可动摇、不容置疑的核心磐石——『怀疑本身就是我在思考的确证』，你才会以此为第一基石，纯白无暇地重建整片恢弘科学宇宙的笛卡尔坐标。你的思维是纯净、容不得半点沙砾的水晶金字塔。",
    shapeName: "冰透折光几何椎 (Cartesian Prism)",
    shapeDescription: "形貌极其完美严整的结晶白晶多面棱镜，反射出不带一丝灰质的绝对无瑕折射面，散发出剔透澄明的冰蓝与纯金色极细激光束。",
    bulletPoints: [
      "核心特质：具有令人惊骇的理性解构勇气和高超的线性演绎智力。擅长将巨型庞大纷杂的混沌系统拆分为最最极细、不可再分的最小定理单元。",
      "思维反射：冷静、有极细致的理性城墙，能忍受极高的独处思维负荷。面对他人的混乱陈情，能剥离情感因素、精准指出问题逻辑核心。",
      "盲点预警：过度追求绝对底蕴和一因通到底的必然推导，有时会使你在面对不讲道理、充斥非理性流变和随机情感的人间世相时感到不小的挫败焦虑。"
    ],
    actionableAdvice: "连续三天开启『笛卡尔式地基清理复盘』：每当你产生焦虑（如「我今天觉得浪费了生命」）时，扮演冷峻解剖法官，连续问5个极度彻底的方法论『真的吗，有根据吗？』，直到剥离掉一切情绪渲染，拆除非理性的虚幻前置。",
    recommendedNext: "庄子无待游物宇宙逍遥流放系列",
    bgGradient: "from-sky-950/40 via-neutral-900/40 to-neutral-950/70",
    accentColor: "#38BDF8",
    shapeSvgPath: "M50,15 L85,60 M50,15 L15,60 M15,60 L85,60 M50,15 L50,85 M15,60 L50,85 M85,60 L50,85",
    nearbyThinkers: [
      {
        id: "socrates",
        name: "苏格拉底式连问追魂",
        description: "在清理假冒伪善的大路牌前提上，你们的怀疑剃刀同样锋锐。",
        coordinates: { x: 38, y: 32 },
        thinkingStyle: "两个在起点处绝不和任何妥协假象妥协的清醒大脑。苏格拉底喜欢在众人的争辩广场上手起刀落，而你更喜欢关在温暖寂静的壁炉暖阁中把几何之光雕刻成绝对神像。"
      },
      {
        id: "niezsche",
        name: "尼采式生命引力大火",
        description: "对粉饰太平的教条、虚弱前设抱有同样高傲的毁灭力量。",
        coordinates: { x: 28, y: 64 },
        thinkingStyle: "尽管笛卡尔最终渴望秩序在水晶大数学天网里安稳入眠，尼采更愿意在燃烧的废墟中不断高唱超越自我的终极歌谣。但你们都是这片雨夜旷野中，用怀疑作为破晓武器的开路人。"
      }
    ]
  }
];

export function calculateThinkerProfile(answers: Record<number, string>): ThinkerProfile {
  const scores: ThinkingScores = { C: 0, E: 0, S: 0, F: 0, P: 0, I: 0, D: 0, A: 0 };

  // Aggregate selected answer options
  QUIZ_QUESTIONS.forEach(q => {
    const selectedOptionId = answers[q.id];
    if (selectedOptionId) {
      const option = q.options.find(opt => opt.id === selectedOptionId);
      if (option) {
        Object.entries(option.scores).forEach(([dimension, change]) => {
          const key = dimension as keyof ThinkingScores;
          scores[key] += change || 0;
        });
      }
    }
  });

  const isC = scores.C >= scores.E;
  const isS = scores.S >= scores.F;
  const isI = scores.I >= scores.P;
  const isD = scores.D >= scores.A;

  // Let's execute logic mapped exactly to our 8 thinkers:
  // 1. Socrates: C, P, D
  // 2. Kant: C, S, I, A
  // 3. Nietzsche: C, F, I, A
  // 4. Zhuangzi: E, F, I, A
  // 5. Arendt: C/E, F/S, P, D
  // 6. Hume: E, S/F, I, D
  // 7. Bacon: E, S, P/I, A
  // 8. Descartes: C, S, I, D

  if (isC) {
    if (isS) {
      if (isI) {
        return isD ? findProfileByID("descartes") : findProfileByID("kant");
      } else {
        return isD ? findProfileByID("socrates") : findProfileByID("arendt");
      }
    } else {
      if (isI) {
        return findProfileByID("niezsche");
      } else {
        return findProfileByID("arendt");
      }
    }
  } else {
    if (isS) {
      if (isI) {
        return isD ? findProfileByID("hume") : findProfileByID("bacon");
      } else {
        return findProfileByID("bacon");
      }
    } else {
      if (isI) {
        return isD ? findProfileByID("hume") : findProfileByID("zhuangzi");
      } else {
        return findProfileByID("zhuangzi");
      }
    }
  }
}

function findProfileByID(id: string): ThinkerProfile {
  return THINKER_PROFILES.find(p => p.id === id) || THINKER_PROFILES[0];
}
