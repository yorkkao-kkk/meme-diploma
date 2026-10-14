export interface UniversityConfig {
  nameZh: string;
  nameEn: string;
  subZh: string;
  svgKey: string;
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
  clapping_cat: {
    nameZh: "拍手黑貓鼓掌大學",
    nameEn: "CLAPPING BLACK CAT UNIV",
    subZh: "拍 手 黑 貓 鼓 掌 大 學 熱 烈 讚 賞 頂 級 認 證",
    svgKey: "clapping_cat",
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

export const CHARACTER_VISUALS: Record<string, string> = {
  clapping_cat: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><defs><radialGradient id="catFur" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#3f3f46" /><stop offset="70%" stop-color="#18181b" /><stop offset="100%" stop-color="#09090b" /></radialGradient><radialGradient id="catEye" cx="35%" cy="35%" r="65%"><stop offset="0%" stop-color="#fef08a" /><stop offset="50%" stop-color="#eab308" /><stop offset="100%" stop-color="#ca8a04" /></radialGradient></defs><path d="M 50 110 C 45 190, 155 190, 150 110 C 150 55, 50 55, 50 110 Z" fill="url(#catFur)" /><path d="M 55 80 L 32 20 C 50 25, 75 42, 80 60 Z" fill="url(#catFur)" /><path d="M 145 80 L 168 20 C 150 25, 125 42, 120 60 Z" fill="url(#catFur)" /><path d="M 58 75 L 42 35 L 70 60 Z" fill="#f43f5e" opacity="0.6" /><path d="M 142 75 L 158 35 L 130 60 Z" fill="#f43f5e" opacity="0.6" /><ellipse cx="75" cy="85" rx="14" ry="16" fill="url(#catEye)" /><ellipse cx="125" cy="85" rx="14" ry="16" fill="url(#catEye)" /><ellipse cx="75" cy="85" rx="4" ry="12" fill="#000000" /><ellipse cx="125" cy="85" rx="4" ry="12" fill="#000000" /><path d="M 76 108 Q 100 130 124 108 Z" fill="#ffffff" stroke="#09090b" stroke-width="2.5" /><ellipse cx="100" cy="118" rx="8" ry="5" fill="#f43f5e" /><path d="M 30 120 C 55 110, 80 135, 82 145 C 65 155, 35 150, 20 130 Z" fill="#3f3f46" stroke="#09090b" stroke-width="2" /><path d="M 170 120 C 145 110, 120 135, 118 145 C 135 155, 165 150, 180 130 Z" fill="#3f3f46" stroke="#09090b" stroke-width="2" /><circle cx="82" cy="142" r="5" fill="#fef08a" /><circle cx="118" cy="142" r="5" fill="#fef08a" /></svg>`,
  serious_study: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><defs><linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e293b" /><stop offset="100%" stop-color="#0f172a" /></linearGradient></defs><ellipse cx="100" cy="85" rx="60" ry="52" fill="#fffdf8" stroke="#0f172a" stroke-width="5" /><path d="M 40 170 C 40 130, 160 130, 160 170 L 170 220 L 30 220 Z" fill="url(#suitGrad)" stroke="#0f172a" stroke-width="4" /><polygon points="100,135 80,175 120,175" fill="#ffffff" /><polygon points="100,145 92,210 100,220 108,210" fill="#dc2626" /><path d="M 52 62 L 92 78" stroke="#0f172a" stroke-width="7" stroke-linecap="round" /><path d="M 148 62 L 108 78" stroke="#0f172a" stroke-width="7" stroke-linecap="round" /><ellipse cx="76" cy="88" rx="12" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="3.5" /><ellipse cx="124" cy="88" rx="12" ry="9" fill="#ffffff" stroke="#0f172a" stroke-width="3.5" /><circle cx="76" cy="88" r="5" fill="#0f172a" /><circle cx="124" cy="88" r="5" fill="#0f172a" /><line x1="85" y1="112" x2="115" y2="112" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round" /></svg>`,
  capybara: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><defs><linearGradient id="capyFur" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#d97706" /><stop offset="60%" stop-color="#b45309" /><stop offset="100%" stop-color="#78350f" /></linearGradient></defs><path d="M 50 140 C 50 80, 150 80, 150 140 C 150 190, 50 190, 50 140 Z" fill="url(#capyFur)" /><path d="M 60 115 C 60 65, 140 65, 140 115 Z" fill="url(#capyFur)" /><ellipse cx="100" cy="128" rx="22" ry="14" fill="#451a03" /><ellipse cx="92" cy="126" rx="4" ry="6" fill="#1c1917" /><ellipse cx="108" cy="126" rx="4" ry="6" fill="#1c1917" /><path d="M 72 100 Q 82 92 90 100" stroke="#1c1917" stroke-width="4" stroke-linecap="round" fill="none" /><path d="M 110 100 Q 118 92 128 100" stroke="#1c1917" stroke-width="4" stroke-linecap="round" fill="none" /><circle cx="100" cy="48" r="18" fill="#ea580c" /><path d="M 100 30 Q 105 22 108 26" stroke="#16a34a" stroke-width="3" fill="none" /></svg>`,
  chiikawa: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><ellipse cx="100" cy="125" rx="66" ry="58" fill="#ffffff" stroke="#0284c7" stroke-width="5" /><ellipse cx="68" cy="74" rx="14" ry="18" fill="#ffffff" stroke="#0284c7" stroke-width="4" /><ellipse cx="132" cy="74" rx="14" ry="18" fill="#ffffff" stroke="#0284c7" stroke-width="4" /><ellipse cx="68" cy="74" rx="8" ry="11" fill="#f472b6" opacity="0.4" /><ellipse cx="132" cy="74" rx="8" ry="11" fill="#f472b6" opacity="0.4" /><circle cx="75" cy="118" r="8" fill="#0f172a" /><circle cx="125" cy="118" r="8" fill="#0f172a" /><circle cx="73" cy="115" r="3" fill="#ffffff" /><circle cx="123" cy="115" r="3" fill="#ffffff" /><path d="M 92 128 Q 100 136 108 128" stroke="#0284c7" stroke-width="4" fill="none" stroke-linecap="round" /><ellipse cx="60" cy="132" rx="9" ry="6" fill="#f472b6" opacity="0.6" /><ellipse cx="140" cy="132" rx="9" ry="6" fill="#f472b6" opacity="0.6" /></svg>`,
  godzilla: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><path d="M 50 210 L 70 70 Q 100 30 130 70 L 150 210 Z" fill="#374151" stroke="#111827" stroke-width="3" /><polygon points="100,20 86,55 114,55" fill="#38bdf8" /><polygon points="100,58 80,95 120,95" fill="#38bdf8" /><polygon points="100,98 75,135 125,135" fill="#0284c7" /><circle cx="82" cy="82" r="7" fill="#fef08a" stroke="#111827" stroke-width="2" /><circle cx="118" cy="82" r="7" fill="#fef08a" stroke="#111827" stroke-width="2" /><circle cx="82" cy="82" r="3" fill="#111827" /><circle cx="118" cy="82" r="3" fill="#111827" /><path d="M 95 102 L 100 220 L 105 102 Z" fill="#60a5fa" opacity="0.95" /></svg>`,
  mountain_monkey: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><circle cx="100" cy="115" r="54" fill="#78350f" /><ellipse cx="100" cy="128" rx="38" ry="30" fill="#fef08a" /><circle cx="78" cy="118" r="6" fill="#1c1917" /><circle cx="122" cy="118" r="6" fill="#1c1917" /><path d="M 90 138 Q 100 146 110 138" stroke="#1c1917" stroke-width="3" fill="none" /><path d="M 42 100 C 42 38, 158 38, 158 100 Z" fill="#dc2626" /><rect x="55" y="78" width="90" height="24" rx="8" fill="#0f172a" stroke="#cbd5e1" stroke-width="2" /></svg>`,
  nai_long: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><defs><linearGradient id="nlGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#facc15" /><stop offset="100%" stop-color="#eab308" /></linearGradient></defs><path d="M 45 130 C 45 50, 155 50, 155 130 C 155 200, 45 200, 45 130 Z" fill="url(#nlGrad)" stroke="#ca8a04" stroke-width="3" /><ellipse cx="100" cy="145" rx="42" ry="46" fill="#fef08a" /><path d="M 70 55 Q 60 30 75 35 Z" fill="#f59e0b" /><path d="M 130 55 Q 140 30 125 35 Z" fill="#f59e0b" /><circle cx="76" cy="92" r="13" fill="#ffffff" stroke="#1c1917" stroke-width="2" /><circle cx="124" cy="92" r="13" fill="#ffffff" stroke="#1c1917" stroke-width="2" /><circle cx="78" cy="92" r="7" fill="#15803d" /><circle cx="122" cy="92" r="7" fill="#15803d" /><circle cx="80" cy="90" r="2.5" fill="#ffffff" /><circle cx="120" cy="90" r="2.5" fill="#ffffff" /><path d="M 78 112 Q 100 132 122 112 Z" fill="#451a03" stroke="#1c1917" stroke-width="2" /><path d="M 88 112 Q 100 120 112 112 Z" fill="#f43f5e" /></svg>`,
  nai_wah: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><defs><linearGradient id="nwGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fde047" /><stop offset="100%" stop-color="#eab308" /></linearGradient><linearGradient id="nwHand" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#84cc16" /><stop offset="100%" stop-color="#4d7c0f" /></linearGradient></defs><path d="M 100 20 C 135 20, 162 78, 162 138 C 162 192, 38 192, 38 138 C 38 78, 65 20, 100 20 Z" fill="url(#nwGrad)" stroke="#ca8a04" stroke-width="3" /><ellipse cx="100" cy="132" rx="44" ry="42" fill="#fef9c3" opacity="0.95" /><circle cx="78" cy="62" r="11" fill="#a3e635" stroke="#4d7c0f" stroke-width="1.5" /><circle cx="122" cy="62" r="11" fill="#a3e635" stroke="#4d7c0f" stroke-width="1.5" /><circle cx="78" cy="62" r="7" fill="#15803d" /><circle cx="122" cy="62" r="7" fill="#15803d" /><circle cx="78" cy="62" r="3.5" fill="#0f172a" /><circle cx="122" cy="62" r="3.5" fill="#0f172a" /><circle cx="76" cy="60" r="1.5" fill="#ffffff" /><circle cx="120" cy="60" r="1.5" fill="#ffffff" /><path d="M 96 75 Q 100 78 104 75" stroke="#854d0e" stroke-width="2" fill="none" stroke-linecap="round" /><path d="M 48 120 C 45 138, 62 145, 78 142 M 72 135 L 82 137 M 72 142 L 82 143 M 70 148 L 80 148" stroke="url(#nwHand)" stroke-width="5" fill="none" stroke-linecap="round" /><path d="M 152 120 C 155 138, 138 145, 122 142 M 128 135 L 118 137 M 128 142 L 118 143 M 130 148 L 120 148" stroke="url(#nwHand)" stroke-width="5" fill="none" stroke-linecap="round" /><path d="M 72 184 L 68 202 M 68 202 L 58 205 M 68 202 L 68 206 M 68 202 L 78 205" stroke="url(#nwHand)" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round" /><path d="M 128 184 L 132 202 M 132 202 L 122 205 M 132 202 L 132 206 M 132 202 L 142 205" stroke="url(#nwHand)" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
  nai_dan: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><defs><linearGradient id="ndGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fef08a" /><stop offset="100%" stop-color="#facc15" /></linearGradient></defs><ellipse cx="100" cy="115" rx="65" ry="58" fill="url(#ndGrad)" stroke="#ca8a04" stroke-width="3.5" /><ellipse cx="100" cy="125" rx="42" ry="38" fill="#ffffff" opacity="0.9" /><circle cx="100" cy="125" r="22" fill="#f97316" /><circle cx="75" cy="95" r="8" fill="#1e293b" /><circle cx="125" cy="95" r="8" fill="#1e293b" /><circle cx="77" cy="93" r="3" fill="#ffffff" /><circle cx="123" cy="93" r="3" fill="#ffffff" /><ellipse cx="62" cy="108" rx="8" ry="5" fill="#f43f5e" opacity="0.5" /><ellipse cx="138" cy="108" rx="8" ry="5" fill="#f43f5e" opacity="0.5" /><path d="M 90 108 Q 100 118 110 108" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round" /></svg>`,
  roblox: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><rect x="30" y="15" width="140" height="190" rx="18" fill="#dc2626" stroke="#991b1b" stroke-width="4" /><rect x="62" y="50" width="76" height="76" rx="10" transform="rotate(-12 100 88)" fill="#ffffff" /><rect x="87" y="75" width="26" height="26" rx="4" transform="rotate(-12 100 88)" fill="#dc2626" /><text x="100" y="172" font-family="'Inter', sans-serif" font-weight="900" font-size="20" fill="#ffffff" text-anchor="middle" letter-spacing="2">ROBLOX</text></svg>`,
  boba_tea: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><polygon points="46,55 154,55 138,205 62,205" fill="#d97706" opacity="0.95" stroke="#78350f" stroke-width="3" /><circle cx="78" cy="175" r="12" fill="#0f172a" /><circle cx="105" cy="182" r="12" fill="#0f172a" /><circle cx="124" cy="168" r="12" fill="#0f172a" /><circle cx="92" cy="160" r="12" fill="#0f172a" /><line x1="100" y1="12" x2="100" y2="190" stroke="#dc2626" stroke-width="14" stroke-linecap="round" /></svg>`,
  popcat: `<svg viewBox="0 0 200 220" class="w-full h-full object-contain"><ellipse cx="100" cy="120" rx="70" ry="64" fill="#f8fafc" stroke="#0f172a" stroke-width="5" /><polygon points="40,70 25,20 70,55" fill="#f8fafc" stroke="#0f172a" stroke-width="4" /><polygon points="160,70 175,20 130,55" fill="#f8fafc" stroke="#0f172a" stroke-width="4" /><circle cx="70" cy="98" r="9" fill="#000000" /><circle cx="130" cy="98" r="9" fill="#000000" /><circle cx="100" cy="142" r="26" fill="#0f172a" /></svg>`
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
