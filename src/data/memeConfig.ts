export interface UniversityConfig {
  nameZh: string;
  nameEn: string;
  subZh: string;
  svgKey: string;
  imagePath: string;
  primaryColor: string;
  accentColor: string;
  sigLeftName: string;
  sigLeftTitle: string;
  sigLeftSub: string;
  sigRightName: string;
  sigRightTitle: string;
  sealBgClass: string;
  sealIcon: string;
  sealTitle: string;
  sealSub: string;
  degrees: string[];
  majors: string[];
  defaultDesc: string;
}

export const UNIV_CONFIGS: Record<string, UniversityConfig> = {
  shanshenbu: {
    nameZh: "絲滑閃身步開溜大學",
    nameEn: "SILKY DODGE STEP UNIV",
    subZh: "花 鼓 燈 瞬 移 閃 身 步 絲 滑 開 溜 頂 級 認 證",
    svgKey: "shanshenbu",
    imagePath: "/characters/shanshenbu.svg",
    primaryColor: "#0284c7",
    accentColor: "#0369a1",
    sigLeftName: "Master Zhao",
    sigLeftTitle: "閃身步創始人：趙大師 (Master Zhao)",
    sigLeftSub: "非遺花鼓燈身法總教頭",
    sigRightName: "Swift Evasion",
    sigRightTitle: "教務長：準時開溜人 (Quick Evasion)",
    sealBgClass: "seal-holo",
    sealIcon: "⚡",
    sealTitle: "DODGE",
    sealSub: "STEP UNIV",
    degrees: [
      "Doctor of Silky Dodgestep & Swift Evasion",
      "Master of Anhui Flower Drum Agile Sidestep",
      "Bachelor of Rapid Workplace Disappearance"
    ],
    majors: [
      "腰腹核心爆發力 & 絲滑橫移瞬移學",
      "下班準時開溜不被主管發現步伐力學",
      "靈活走位閃躲尷尬社交心理學"
    ],
    defaultDesc: "精通安徽花鼓燈「閃身步」精髓，腰腹發力瞬間側移開溜，身法絲滑如微風拂柳，瀟灑瞬移不著痕跡，特頒發最高榮譽博士學位。"
  },
  clapping_cat: {
    nameZh: "拍手黑貓鼓掌大學",
    nameEn: "CLAPPING BLACK CAT UNIV",
    subZh: "拍 手 黑 貓 鼓 掌 大 學 熱 烈 讚 賞 頂 級 認 證",
    svgKey: "clapping_cat",
    imagePath: "/characters/clapping_cat.svg",
    primaryColor: "#334155",
    accentColor: "#0f172a",
    sigLeftName: "Clapping Kitty",
    sigLeftTitle: "拍手黑貓校長 (Clapping Cat)",
    sigLeftSub: "首席熱烈鼓掌官",
    sigRightName: "Applause Master",
    sigRightTitle: "鼓掌特聘教授 (Applause Cat)",
    sealBgClass: "seal-holo",
    sealIcon: "👏",
    sealTitle: "APPLAUSE",
    sealSub: "CAT UNIV",
    degrees: [
      "Doctor of Standing Clapping & Applause Studies",
      "Master of Enthusiastic Standing Ovation",
      "Bachelor of Smiling & Cheering Arts"
    ],
    majors: [
      "起立拍手鼓掌行為學 & 露出微笑讚賞藝術",
      "無止境熱烈鼓掌共振學",
      "全場起立致敬與氣氛帶動工程"
    ],
    defaultDesc: "表彰其在面對任何傑出成就時，皆能展現無比熱情的站立拍手與標誌性微笑，特頒發最高榮譽博士學位。"
  },
  serious_study: {
    nameZh: "我將嚴肅學習大學",
    nameEn: "SERIOUS STUDY MEME UNIV",
    subZh: "嚴 肅 認 真 絕 不 擺 爛 專 注 學習 頂 級 認 證",
    svgKey: "serious_study",
    imagePath: "/characters/serious_study.svg",
    primaryColor: "#1e293b",
    accentColor: "#0284c7",
    sigLeftName: "Serious Guy",
    sigLeftTitle: "嚴肅學習發起人 (Serious Guy)",
    sigLeftSub: "學術誠信與沉思總監",
    sigRightName: "Study Harder",
    sigRightTitle: "教務長：認真人 (Study Hard)",
    sealBgClass: "seal-wax",
    sealIcon: "🧐",
    sealTitle: "SERIOUS",
    sealSub: "STUDY UNIV",
    degrees: [
      "Doctor of Serious Study & Anti-Procrastination",
      "Master of Extreme Focus & Brow Furrowing",
      "Bachelor of Steepled Hands Contemplation"
    ],
    majors: [
      "沉思手勢力學 & 拒絕擺爛極速專注工程學",
      "嚴肅眉毛控制學 & 夜戰圖書館理論",
      "學霸沉思姿態與無干擾專注力"
    ],
    defaultDesc: "表彰其下定決心「我將嚴肅學習」，展現無可挑剔的嚴肅眉毛與極致專注力，特頒發最高榮譽學術認證。"
  },
  capybara: {
    nameZh: "卡皮巴拉水豚大學",
    nameEn: "CAPYBARA UNIVERSITY",
    subZh: "水 豚 大 學 鬆 弛 感 頂 級 榮 譽 認 證",
    svgKey: "capybara",
    imagePath: "/characters/capybara.svg",
    primaryColor: "#b8860b",
    accentColor: "#854d0e",
    sigLeftName: "Capybara Lord",
    sigLeftTitle: "水豚校長 (Capybara Lord)",
    sigLeftSub: "水豚宇宙極致鬆弛官",
    sigRightName: "Usagi Yaha",
    sigRightTitle: "教務長：烏薩奇 (Usagi)",
    sealBgClass: "seal-gold",
    sealIcon: "🦫",
    sealTitle: "CHILL SEAL",
    sealSub: "CAPY UNIV",
    degrees: [
      "Doctor of Capybara Chillness & Serenity",
      "Master of Onsen Bathing Relaxation",
      "Bachelor of Zero-Stress Mindset"
    ],
    majors: [
      "水豚頂水果平衡力學 & 極致情緒穩定哲學",
      "露天溫泉泡澡長度極限突破學",
      "佛系面對世界危機精神健康學"
    ],
    defaultDesc: "表彰其在面對任何危機時皆能保持極致鬆弛感與情緒穩定，頭頂橘子泡溫泉長達十天十夜，特頒發最高榮譽博士學位。"
  },
  chiikawa: {
    nameZh: "吉伊卡哇拔草大學",
    nameEn: "CHIIKAWA WEED PULLING UNIV",
    subZh: "吉 伊 卡 哇 拔 草 檢 定 頂 級 榮 譽 認 證",
    svgKey: "chiikawa",
    imagePath: "/characters/chiikawa.svg",
    primaryColor: "#0284c7",
    accentColor: "#0369a1",
    sigLeftName: "Chiikawa",
    sigLeftTitle: "吉伊卡哇校長 (Chiikawa)",
    sigLeftSub: "拔草檢定特等認證官",
    sigRightName: "Hachiware",
    sigRightTitle: "小八貓教務長 (Hachiware)",
    sealBgClass: "seal-emerald",
    sealIcon: "🌱",
    sealTitle: "WEED SEAL",
    sealSub: "CHIIKAWA UNIV",
    degrees: [
      "Master of Chiikawa Weed Pulling Rank 1",
      "Doctor of Brave Monster Subjugation",
      "Bachelor of Yaha Screaming & Dancing"
    ],
    majors: [
      "一級拔草檢定實務 & 討伐大作戰",
      "怪獸討伐鐮刀應用工程學",
      "哭哭克服與夥伴羈絆共鳴學"
    ],
    defaultDesc: "通過嚴苛的拔草檢定考驗，展現出無與倫比的拔草技巧與勇敢精神，特此頒發一級檢定通過證書。"
  },
  godzilla: {
    nameZh: "哥吉拉熱線大學",
    nameEn: "GODZILLA ATOMIC UNIV",
    subZh: "哥 吉 拉 爆 射 熱 線 怪 獸 破 壞 認 證",
    svgKey: "godzilla",
    imagePath: "/characters/godzilla.svg",
    primaryColor: "#dc2626",
    accentColor: "#991b1b",
    sigLeftName: "King Godzilla",
    sigLeftTitle: "怪獸之王哥吉拉 (Godzilla)",
    sigLeftSub: "原子吐息最高司令官",
    sigRightName: "Mothra Queen",
    sigRightTitle: "摩斯拉 (Mothra)",
    sealBgClass: "seal-wax",
    sealIcon: "🔥",
    sealTitle: "ATOMIC",
    sealSub: "GODZILLA UNIV",
    degrees: [
      "Doctor of Godzilla Atomic Thermal Ray",
      "Master of Dorsal Fin Plasma Charging",
      "Bachelor of Kaiju Roar & Footstep Impact"
    ],
    majors: [
      "原子熱線高能輻射物理 & 城市地貌重塑學",
      "背鰭電磁脈衝爆發工程",
      "怪獸之王咆哮聲波衝擊學"
    ],
    defaultDesc: "掌握背鰭閃爍藍光與口吐原子吐息之核心技術，能一擊貫穿萬物，特頒發怪獸之王榮譽博士學位。"
  },
  mountain_monkey: {
    nameZh: "山道猴子莫生氣大學",
    nameEn: "MOUNTAIN MONKEY RACING UNIV",
    subZh: "山 道 猴 子 莫 生 氣 車 神 榮 譽 認 證",
    svgKey: "mountain_monkey",
    imagePath: "/characters/mountain_monkey.svg",
    primaryColor: "#ea580c",
    accentColor: "#c2410c",
    sigLeftName: "Mountain King",
    sigLeftTitle: "台七乙車神 (Mountain King)",
    sigLeftSub: "過彎莫生氣總教練",
    sigRightName: "Zen Master",
    sigRightTitle: "莫生氣大師 (Zen Master)",
    sealBgClass: "seal-wax",
    sealIcon: "🛵",
    sealTitle: "RACING",
    sealSub: "MONKEY UNIV",
    degrees: [
      "Master of Mountain Racing & Zen Mindset",
      "Doctor of Knee-Sliding Lean Angle",
      "Bachelor of Tai 7 Yi Anti-Rage Therapy"
    ],
    majors: [
      "壓車過彎傾角力學 & 山道莫生氣情緒管理",
      "檔車極限改裝與貼貼哲學",
      "跑山追焦照片霸氣構圖學"
    ],
    defaultDesc: "在台七乙山道上展現極致壓車技巧與平靜如水的莫生氣心態，特頒發山道車神學位。"
  },
  nai_long: {
    nameZh: "奶龍大學",
    nameEn: "NAI LONG UNIVERSITY",
    subZh: "奶 龍 大 學 頂 級 萌 獸 榮 譽 學 位 認 證",
    svgKey: "nai_long",
    imagePath: "/characters/nai_long.svg",
    primaryColor: "#d97706",
    accentColor: "#b45309",
    sigLeftName: "Nai Long",
    sigLeftTitle: "奶龍校長 (Nai Long)",
    sigLeftSub: "奶龍宇宙最高快樂官",
    sigRightName: "Xiao Jian",
    sigRightTitle: "小簡 (Xiao Jian)",
    sealBgClass: "seal-gold",
    sealIcon: "🐉",
    sealTitle: "DRAGON",
    sealSub: "NAI LONG UNIV",
    degrees: [
      "Master of Dragon Logic & Tycoon Economics",
      "Doctor of Yellow Belly Bounce Energy",
      "Bachelor of Cute Roar & Snack Science"
    ],
    majors: [
      "萌獸快樂能量轉換 & 奶龍邏輯行為學",
      "黃色肚子彈力物理與食物吸收學",
      "奶龍賣萌治癒心理學"
    ],
    defaultDesc: "成功掌握奶龍快樂傳播學，能以可愛萌威感染整個宇宙，特頒發奶龍大學最高榮譽學位。"
  },
  nai_wah: {
    nameZh: "奶蛙大學",
    nameEn: "NAI WAH UNIVERSITY",
    subZh: "奶 蛙 大 學 咕 嚕 萌 動 榮 譽 學 位 認 證",
    svgKey: "nai_wah",
    imagePath: "/characters/nai_wah.svg",
    primaryColor: "#eab308",
    accentColor: "#854d0e",
    sigLeftName: "Nai Wah",
    sigLeftTitle: "奶蛙校長 (Nai Wah)",
    sigLeftSub: "奶蛙肚肚首席官",
    sigRightName: "Xiao Jian",
    sigRightTitle: "小簡 (Xiao Jian)",
    sealBgClass: "seal-gold",
    sealIcon: "🐸",
    sealTitle: "FROG SEAL",
    sealSub: "NAI WAH UNIV",
    degrees: [
      "Master of Frog Belly Elasticity & Charm",
      "Doctor of Inflatable Frog Acrobatics",
      "Bachelor of Gulu Gulu Sound Waves"
    ],
    majors: [
      "拍肚肚聲波共振學 & 青蛙充氣動力學",
      "黃色大肚肚撫摸與表情包力學",
      "咕嚕咕嚕可愛聲效傳達"
    ],
    defaultDesc: "精通黃色梨形肚肚撫摸與拍肚肚產生的治癒聲波，特此頒發奶蛙大學最高榮譽認證。"
  },
  nai_dan: {
    nameZh: "奶蛋大學",
    nameEn: "NAI DAN UNIVERSITY",
    subZh: "奶 蛋 大 學 圓 潤 流 心 榮 譽 學 位 認 證",
    svgKey: "nai_dan",
    imagePath: "/characters/nai_dan.svg",
    primaryColor: "#eab308",
    accentColor: "#ca8a04",
    sigLeftName: "Nai Dan",
    sigLeftTitle: "奶蛋校長 (Nai Dan)",
    sigLeftSub: "奶蛋流心總監",
    sigRightName: "Xiao Jian",
    sigRightTitle: "小簡 (Xiao Jian)",
    sealBgClass: "seal-gold",
    sealIcon: "🥚",
    sealTitle: "EGG SEAL",
    sealSub: "NAI DAN UNIV",
    degrees: [
      "Doctor of Yolk Thermodynamics & Softness",
      "Master of Round Smooth Body Physics",
      "Bachelor of Golden Custard Flow"
    ],
    majors: [
      "流心奶黃熱力學 & 圓潤完美外殼流體力學",
      "蛋黃溫控與極致滑嫩質感研究",
      "甜點能量與幸福感傳遞"
    ],
    defaultDesc: "完美掌握蛋黃溫控與極致流心質感，特頒發奶蛋大學最高榮譽博士學位。"
  },
  roblox: {
    nameZh: "Roblox 羅布樂思大學",
    nameEn: "ROBLOX MEME UNIVERSITY",
    subZh: "羅 布 樂 思 創 建 者 與 迷 因 實 務 認 證",
    svgKey: "roblox",
    imagePath: "/characters/roblox.svg",
    primaryColor: "#dc2626",
    accentColor: "#991b1b",
    sigLeftName: "David Baszucki",
    sigLeftTitle: "Roblox 執行長 (Builderman)",
    sigLeftSub: "元宇宙首席架構師",
    sigRightName: "Noob King",
    sigRightTitle: "教務長：新手王 (Noob King)",
    sealBgClass: "seal-wax",
    sealIcon: "🎮",
    sealTitle: "ROBLOX",
    sealSub: "BUILDER",
    degrees: [
      "Doctor of Roblox Luau Game Scripting",
      "Master of Obby Parkour & Speedrun",
      "Bachelor of Avatar Fashion Design"
    ],
    majors: [
      "Roblox Luau 程式設計 & 元宇宙地圖建築學",
      "障礙跑酷 (Obby) 關卡心理學",
      "OOF 經典音效與造型穿搭藝術"
    ],
    defaultDesc: "精通 Roblox Luau 腳本開發與障礙跑酷關卡設計，特頒發羅布樂思大學最高榮譽認證。"
  },
  boba_tea: {
    nameZh: "珍珠奶茶連鎖大學",
    nameEn: "BOBA TEA CHAIN UNIV",
    subZh: "珍 珠 奶 茶 冰 塊 甜 度 精 密 控制 認 證",
    svgKey: "boba_tea",
    imagePath: "/characters/boba_tea.svg",
    primaryColor: "#d97706",
    accentColor: "#92400e",
    sigLeftName: "Boba Master",
    sigLeftTitle: "珍奶創始人 (Boba Master)",
    sigLeftSub: "手搖飲品總監",
    sigRightName: "Sugar Overlord",
    sigRightTitle: "全糖大師 (Sugar King)",
    sealBgClass: "seal-gold",
    sealIcon: "🧋",
    sealTitle: "BOBA SEAL",
    sealSub: "TEA UNIV",
    degrees: [
      "Doctor of Tapioca Pearl Chewiness & Sugar Control",
      "Master of Straw Piercing Technique",
      "Bachelor of Golden Ratio Milk Tea"
    ],
    majors: [
      "黑糖珍珠Q度嚼勁力學 & 微糖微冰黃金比例",
      "封口膜一針見血戳洞氣流學",
      "奶茶與珍珠密度沉降平衝學"
    ],
    defaultDesc: "完美調配微糖微冰黃金比例，並精通一針見血戳穿封口膜之絕技，特頒發手搖飲最高學位。"
  },
  popcat: {
    nameZh: "迷因貓 Pop Cat 大學",
    nameEn: "POPCAT CLICKING UNIV",
    subZh: "迷 因 貓 POPCAT 嘴 吧 開 合 點 擊 認 證",
    svgKey: "popcat",
    imagePath: "/characters/popcat.svg",
    primaryColor: "#1e293b",
    accentColor: "#0284c7",
    sigLeftName: "Pop Cat",
    sigLeftTitle: "Pop Cat 校長 (Pop Cat)",
    sigLeftSub: "點擊計數器總監",
    sigRightName: "Clicker God",
    sigRightTitle: "教務長：連點神手 (Click God)",
    sealBgClass: "seal-holo",
    sealIcon: "🐈",
    sealTitle: "POPCAT",
    sealSub: "CLICK UNIV",
    degrees: [
      "Doctor of PopCat Mouth Opening Speed & Clicks",
      "Master of Global Clicker Leaderboard",
      "Bachelor of Pop Sound Frequency"
    ],
    majors: [
      "PopCat 嘴巴開合頻率學 & 億萬點擊速度學",
      "POP 啵啵聲波響度物理",
      "連點神器與手指肌肉耐力工程"
    ],
    defaultDesc: "創造每秒百次嘴巴開合 POP 音效與貢獻全球點擊排行榜，特頒發 Pop Cat 大學最高榮譽認證。"
  }
};

export const CHARACTER_IMAGES: Record<string, string> = {
  shanshenbu: "/characters/shanshenbu.svg",
  clapping_cat: "/characters/clapping_cat.svg",
  serious_study: "/characters/serious_study.svg",
  capybara: "/characters/capybara.svg",
  chiikawa: "/characters/chiikawa.svg",
  godzilla: "/characters/godzilla.svg",
  mountain_monkey: "/characters/mountain_monkey.svg",
  nai_long: "/characters/nai_long.svg",
  nai_wah: "/characters/nai_wah.svg",
  nai_dan: "/characters/nai_dan.svg",
  roblox: "/characters/roblox.svg",
  boba_tea: "/characters/boba_tea.svg",
  popcat: "/characters/popcat.svg",
};

export const CHARACTER_VISUALS: Record<string, string> = {
  shanshenbu: `<img src="/characters/shanshenbu.svg" alt="絲滑閃身步" class="w-full h-full object-contain pointer-events-none" />`,
  clapping_cat: `<img src="/characters/clapping_cat.svg" alt="拍手黑貓" class="w-full h-full object-contain pointer-events-none" />`,
  serious_study: `<img src="/characters/serious_study.svg" alt="嚴肅學習" class="w-full h-full object-contain pointer-events-none" />`,
  capybara: `<img src="/characters/capybara.svg" alt="水豚" class="w-full h-full object-contain pointer-events-none" />`,
  chiikawa: `<img src="/characters/chiikawa.svg" alt="吉伊卡哇" class="w-full h-full object-contain pointer-events-none" />`,
  godzilla: `<img src="/characters/godzilla.svg" alt="哥吉拉" class="w-full h-full object-contain pointer-events-none" />`,
  mountain_monkey: `<img src="/characters/mountain_monkey.svg" alt="山道猴子" class="w-full h-full object-contain pointer-events-none" />`,
  nai_long: `<img src="/characters/nai_long.svg" alt="奶龍" class="w-full h-full object-contain pointer-events-none" />`,
  nai_wah: `<img src="/characters/nai_wah.svg" alt="奶蛙" class="w-full h-full object-contain pointer-events-none" />`,
  nai_dan: `<img src="/characters/nai_dan.svg" alt="奶蛋" class="w-full h-full object-contain pointer-events-none" />`,
  roblox: `<img src="/characters/roblox.svg" alt="Roblox" class="w-full h-full object-contain pointer-events-none" />`,
  boba_tea: `<img src="/characters/boba_tea.svg" alt="珍珠奶茶" class="w-full h-full object-contain pointer-events-none" />`,
  popcat: `<img src="/characters/popcat.svg" alt="Pop Cat" class="w-full h-full object-contain pointer-events-none" />`
};

export const DEFAULT_GRAD_HAT = `<svg viewBox="0 0 100 100" class="w-14 h-14 text-amber-700 opacity-80"><path fill="currentColor" d="M50,15 L90,32 L50,49 L10,32 Z M20,42 L20,68 C20,78 80,78 80,68 L80,42 L50,55 Z"/></svg>`;

export const PINYIN_DICT: Record<string, string> = {
  '李': 'Li', '王': 'Wang', '張': 'Zhang', '劉': 'Liu', '陳': 'Chen',
  '楊': 'Yang', '黃': 'Huang', '趙': 'Zhao', '吳': 'Wu', '周': 'Zhou',
  '徐': 'Xu', '孫': 'Sun', '馬': 'Ma', '朱': 'Zhu', '胡': 'Hu',
  '郭': 'Guo', '何': 'He', '高': 'Gao', '林': 'Lin', '羅': 'Luo',
  '鄭': 'Zheng', '梁': 'Liang', '謝': 'Xie', '宋': 'Song', '唐': 'Tang',
  '許': 'Xu', '韓': 'Han', '馮': 'Feng', '鄧': 'Deng', '曹': 'Cao',
  '明': 'Ming', '華': 'Hua', '小': 'Xiao', '龍': 'Long', '蛙': 'Wah',
  '蛋': 'Dan', '大': 'Da', '寶': 'Bao', '星': 'Xing', '海': 'Hai'
};

export const HONOR_BADGES = [
  "✨ SUMMA CUM LAUDE (最高榮譽畢業)",
  "⚡ SILKY DODGE STEP SUPREME (絲滑閃身步特等大師)",
  "👏 APPLAUSE MASTER SUPREME (熱烈鼓掌大師)",
  "🧐 SERIOUS LEARNER RANK 1 (嚴肅學習一級認證)",
  "🌿 CHILLMASTER SUPREME (極致鬆弛感首獎)",
  "🌱 WEED PULLING CERTIFIED RANK 1 (拔草一級檢定合格)"
];

export const SEAL_STYLES = [
  { id: 'seal-gold', name: '🟡 立體光澤燙金 (Golden Metallic)' },
  { id: 'seal-wax', name: '🔴 古典皇家封蠟 (Crimson Wax)' },
  { id: 'seal-emerald', name: '🟢 翡翠帝國印章 (Emerald Royal)' },
  { id: 'seal-holo', name: '🟣 全息雷射光澤 (Holographic Foil)' }
];

export const CERT_THEMES = [
  { id: 'theme-ivory', name: '✨ 典雅羊皮金', previewClass: 'from-amber-50 to-amber-100 text-slate-900 border-amber-300' },
  { id: 'theme-royal', name: '👑 皇家鉑金', previewClass: 'from-slate-100 to-slate-200 text-blue-900 border-blue-300' },
  { id: 'theme-ruby', name: '🍷 帝國紅寶石', previewClass: 'from-rose-50 to-rose-100 text-rose-900 border-rose-300' },
  { id: 'theme-cyber', name: '⚡ 賽博霓虹', previewClass: 'from-slate-800 to-slate-900 text-cyan-400 border-cyan-700' }
];
