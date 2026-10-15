import React, { useState, useEffect, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import confetti from 'canvas-confetti';
import {
  UNIV_CONFIGS,
  DEFAULT_GRAD_HAT,
  PINYIN_DICT,
  HONOR_BADGES,
  SEAL_STYLES,
  CERT_THEMES,
} from './data/memeConfig';
import {
  Camera,
  Printer,
  Sparkles,
  RotateCcw,
  Upload,
  Trash2,
  ZoomIn,
  ZoomOut,
  Maximize2,
  School,
  User,
  GraduationCap,
  Palette,
  Smartphone,
  Monitor
} from 'lucide-react';

export default function App() {
  // State variables
  const [orientation, setOrientation] = useState<'landscape' | 'portrait'>('landscape');
  const [primaryUniv, setPrimaryUniv] = useState<string>('shanshenbu');
  const [isDualDegree, setIsDualDegree] = useState<boolean>(false);
  const [secondaryUniv, setSecondaryUniv] = useState<string>('clapping_cat');

  const [nameZh, setNameZh] = useState<string>('王小明');
  const [nameEn, setNameEn] = useState<string>('Xiao-Ming Wang');
  const [issueDate, setIssueDate] = useState<string>('October 14, 2026');
  const [certId, setCertId] = useState<string>('DODGE-2026-6666');

  const [degree, setDegree] = useState<string>(
    UNIV_CONFIGS['shanshenbu'].degrees[0]
  );
  const [major, setMajor] = useState<string>(
    UNIV_CONFIGS['shanshenbu'].majors[0]
  );
  const [honorBadge, setHonorBadge] = useState<string>(HONOR_BADGES[1]);
  const [evaluationDesc, setEvaluationDesc] = useState<string>(
    UNIV_CONFIGS['shanshenbu'].defaultDesc
  );

  const [mascotPosition, setMascotPosition] = useState<'right' | 'left' | 'none'>('right');
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [certTheme, setCertTheme] = useState<string>('theme-ivory');
  const [sealStyle, setSealStyle] = useState<string>('seal-holo');

  const [activeTab, setActiveTab] = useState<'school' | 'student' | 'degree' | 'style'>('school');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Zoom and Auto-fit state
  const [isAutoFit, setIsAutoFit] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [computedScale, setComputedScale] = useState<number>(0.65);

  // Toast state
  const [toast, setToast] = useState<{ message: string; icon: string } | null>(null);

  const previewContainerRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string, icon = '✅') => {
    setToast({ message, icon });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const pConfig = UNIV_CONFIGS[primaryUniv] || UNIV_CONFIGS['shanshenbu'];
  const sConfig = UNIV_CONFIGS[secondaryUniv] || UNIV_CONFIGS['clapping_cat'];

  // Dimensions based on orientation
  const certDimensions = orientation === 'landscape'
    ? { width: 980, height: 680 }
    : { width: 700, height: 960 };

  // Calculate Auto-Fit Scale: conservative and comfortable so the entire certificate is always in view
  const recalculateAutoFit = useCallback(() => {
    if (!previewContainerRef.current) return;
    const container = previewContainerRef.current;
    
    // Generous safety padding so nothing touches the borders or toolbar
    const availableWidth = Math.max(280, container.clientWidth - 56);
    const availableHeight = Math.max(320, container.clientHeight - 130);

    const scaleX = availableWidth / certDimensions.width;
    const scaleY = availableHeight / certDimensions.height;
    
    // Safety factor 0.88 so it has breathing room on all 4 sides
    const bestScale = Math.min(scaleX, scaleY) * 0.88;

    // Cap between 0.30 and 0.95
    const clampedScale = Math.max(0.30, Math.min(0.95, Number(bestScale.toFixed(2))));
    setComputedScale(clampedScale);
  }, [certDimensions.width, certDimensions.height]);

  // ResizeObserver for reliable, immediate responsive scaling
  useEffect(() => {
    if (!previewContainerRef.current) return;
    
    const updateSize = () => {
      if (isAutoFit) {
        recalculateAutoFit();
      } else {
        setComputedScale(zoomLevel / 100);
      }
    };

    updateSize();

    const ro = new ResizeObserver(() => {
      updateSize();
    });

    ro.observe(previewContainerRef.current);
    window.addEventListener('resize', updateSize);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, [isAutoFit, zoomLevel, recalculateAutoFit, orientation]);

  // Handle changing primary university
  const handlePrimaryUnivChange = (key: string) => {
    setPrimaryUniv(key);
    const cfg = UNIV_CONFIGS[key] || UNIV_CONFIGS['shanshenbu'];
    setDegree(cfg.degrees[0]);
    setMajor(cfg.majors[0]);
    setEvaluationDesc(cfg.defaultDesc);
    const prefix = key.slice(0, 4).toUpperCase();
    setCertId(`${prefix}-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  };

  // Convert Chinese name to Pinyin
  const handleConvertToPinyin = () => {
    const trimmed = nameZh.trim();
    if (!trimmed) return;

    const result: string[] = [];
    for (let i = 0; i < trimmed.length; i++) {
      const char = trimmed[i];
      result.push(PINYIN_DICT[char] || char);
    }

    if (result.length > 0) {
      const formatted =
        result.length === 1 ? result[0] : `${result[0]} ${result.slice(1).join('-')}`;
      setNameEn(formatted);
      showToast('拼音自動轉換完成', '⚡');
    }
  };

  // Handle Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedPhoto(event.target.result as string);
          showToast('個人畢業照上傳成功！', '📸');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clearPhoto = () => {
    setUploadedPhoto(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    showToast('已清除大頭照，還原學士帽', '🔄');
  };

  // Randomize Certificate
  const handleRandomize = () => {
    const keys = Object.keys(UNIV_CONFIGS);
    const randomPKey = keys[Math.floor(Math.random() * keys.length)];
    const randomDual = Math.random() > 0.6;
    const randomSKey = keys[Math.floor(Math.random() * keys.length)];

    setPrimaryUniv(randomPKey);
    setIsDualDegree(randomDual);
    if (randomDual) setSecondaryUniv(randomSKey);

    const cfg = UNIV_CONFIGS[randomPKey];
    setDegree(cfg.degrees[Math.floor(Math.random() * cfg.degrees.length)]);
    setMajor(cfg.majors[Math.floor(Math.random() * cfg.majors.length)]);
    setEvaluationDesc(cfg.defaultDesc);

    const randomTheme = CERT_THEMES[Math.floor(Math.random() * CERT_THEMES.length)].id;
    setCertTheme(randomTheme);

    const randomSeal = SEAL_STYLES[Math.floor(Math.random() * SEAL_STYLES.length)].id;
    setSealStyle(randomSeal);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    showToast('已隨機生成全新迷因畢業證書！', '🎲');
  };

  // Reset Defaults
  const handleResetDefaults = () => {
    setOrientation('landscape');
    setPrimaryUniv('shanshenbu');
    setIsDualDegree(false);
    setNameZh('王小明');
    setNameEn('Xiao-Ming Wang');
    setIssueDate('October 14, 2026');
    setCertId('DODGE-2026-6666');
    setDegree(UNIV_CONFIGS['shanshenbu'].degrees[0]);
    setMajor(UNIV_CONFIGS['shanshenbu'].majors[0]);
    setHonorBadge(HONOR_BADGES[1]);
    setEvaluationDesc(UNIV_CONFIGS['shanshenbu'].defaultDesc);
    setMascotPosition('right');
    setUploadedPhoto(null);
    setCertTheme('theme-ivory');
    setSealStyle('seal-holo');
    setIsAutoFit(true);
    showToast('已還原為原廠預設值', '🔄');
  };

  // Computed Filename
  const displayNameForFile = nameZh || nameEn || '畢業生';
  const fullUnivTitle = isDualDegree
    ? `${pConfig.nameZh}與${sConfig.nameZh}`
    : pConfig.nameZh;
  const orientationTag = orientation === 'portrait' ? '(直式)' : '(橫式)';
  const filename = `${displayNameForFile}${fullUnivTitle}畢業證書${orientationTag}`;

  useEffect(() => {
    document.title = filename;
  }, [filename]);

  // High Quality PNG Export
  const handleExportPNG = async () => {
    if (!certRef.current) return;
    setIsExporting(true);

    try {
      await new Promise((r) => setTimeout(r, 150));

      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {
        // ignore
      }

      showToast('證書高清圖片已成功匯出！', '🎉');
    } catch (err) {
      console.error(err);
      showToast('匯出失敗，請重試', '❌');
    } finally {
      setIsExporting(false);
    }
  };

  // Print Certificate
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`bg-slate-950 text-slate-100 min-h-screen font-sans flex flex-col lg:flex-row relative overflow-x-hidden ${certTheme}`}>
      {/* Background ambient lighting */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-900/10 blur-[120px] pointer-events-none" />

      {/* Control Panel Sidebar */}
      <aside className="no-print lg:w-[390px] glass-panel flex flex-col justify-between shrink-0 h-auto lg:h-screen lg:sticky top-0 z-30 transition-all border-b lg:border-b-0 lg:border-r border-white/10">
        <div className="p-4 lg:p-5 space-y-4 overflow-y-auto custom-scrollbar max-h-[calc(100vh-140px)]">
          {/* Header Branding */}
          <div className="flex items-center space-x-3 pb-3 border-b border-white/10">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 via-indigo-500 to-amber-500 rounded-2xl flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(56,189,248,0.3)] border border-sky-300/30">
              🎓
            </div>
            <div>
              <h1 className="text-base font-extrabold text-white tracking-wide drop-shadow-sm flex items-center gap-1.5">
                <span>迷因證書實驗室</span>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 font-bold px-1.5 py-0.5 rounded border border-sky-400/30">
                  閃身步版
                </span>
              </h1>
              <p className="text-[11px] text-amber-400 font-medium">
                Multiverse Certificate Studio
              </p>
            </div>
          </div>

          {/* Quick Action Toolbar */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleRandomize}
              className="py-2.5 px-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95 border border-indigo-400/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>隨機產生</span>
            </button>
            <button
              type="button"
              onClick={handleResetDefaults}
              className="py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs flex items-center justify-center space-x-1.5 border border-slate-600/50 shadow-sm transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>還原預設</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="grid grid-cols-4 gap-1 bg-black/40 p-1 rounded-xl text-[11px] font-semibold border border-white/5 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('school')}
              className={`py-2 rounded-lg transition-all duration-200 text-center truncate flex items-center justify-center gap-1 ${
                activeTab === 'school'
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <School className="w-3 h-3" />
              <span>學校</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('student')}
              className={`py-2 rounded-lg transition-all duration-200 text-center truncate flex items-center justify-center gap-1 ${
                activeTab === 'student'
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-3 h-3" />
              <span>學生</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('degree')}
              className={`py-2 rounded-lg transition-all duration-200 text-center truncate flex items-center justify-center gap-1 ${
                activeTab === 'degree'
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3 h-3" />
              <span>學位</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('style')}
              className={`py-2 rounded-lg transition-all duration-200 text-center truncate flex items-center justify-center gap-1 ${
                activeTab === 'style'
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Palette className="w-3 h-3" />
              <span>視覺</span>
            </button>
          </div>

          {/* Tab 1: School */}
          {activeTab === 'school' && (
            <div className="space-y-4 text-xs animate-fadeIn">
              <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5 space-y-4 backdrop-blur-sm">
                <div>
                  <label className="block font-bold text-amber-400 uppercase tracking-wider mb-2 text-[10px]">
                    🎓 主辦名校 (Primary University)
                  </label>
                  <select
                    value={primaryUniv}
                    onChange={(e) => handlePrimaryUnivChange(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
                  >
                    <option value="shanshenbu">⚡ 絲滑閃身步開溜大學 (Silky Dodge Step Univ)</option>
                    <option value="clapping_cat">👏 拍手黑貓鼓掌大學 (Clapping Cat Univ)</option>
                    <option value="serious_study">🧐 我將嚴肅學習大學 (Serious Study Univ)</option>
                    <option value="capybara">🦫 卡皮巴拉水豚大學 (Capybara Univ)</option>
                    <option value="chiikawa">🌱 吉伊卡哇拔草檢定大學 (Chiikawa Univ)</option>
                    <option value="godzilla">🦖 哥吉拉爆射熱線大學 (Godzilla Univ)</option>
                    <option value="mountain_monkey">🛵 山道猴子莫生氣大學 (Mountain Monkey Univ)</option>
                    <option value="nai_long">🐉 奶龍大學 (Nai Long Univ)</option>
                    <option value="nai_wah">🐸 奶蛙大學 (Nai Wah Univ)</option>
                    <option value="nai_dan">🥚 奶蛋大學 (Nai Dan Univ)</option>
                    <option value="roblox">🎮 Roblox 羅布樂思大學 (Roblox Univ)</option>
                    <option value="boba_tea">🧋 珍珠奶茶連鎖大學 (Boba Tea Univ)</option>
                    <option value="popcat">🐈 迷因貓 Pop Cat 大學 (Pop Cat Univ)</option>
                  </select>
                </div>

                {/* Quick Selection Tags */}
                <div>
                  <span className="block text-[10px] text-slate-400 mb-1.5 font-medium">
                    熱門快速切換
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { key: 'shanshenbu', label: '⚡ 閃身步' },
                      { key: 'clapping_cat', label: '👏 拍手黑貓' },
                      { key: 'capybara', label: '🦫 水豚' },
                      { key: 'chiikawa', label: '🌱 吉伊卡哇' },
                      { key: 'godzilla', label: '🦖 哥吉拉' },
                      { key: 'mountain_monkey', label: '🛵 山道猴' },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => handlePrimaryUnivChange(item.key)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-semibold border transition-all ${
                          primaryUniv === item.key
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                            : 'bg-slate-900/60 text-slate-300 border-white/5 hover:border-white/20'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dual Degree Toggle */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div>
                    <span className="block font-bold text-slate-200">開啟跨宇宙雙聯學位</span>
                    <span className="text-[10px] text-slate-400">兩所名校聯合頒發、雙鋼印</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isDualDegree}
                      onChange={(e) => setIsDualDegree(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-orange-500 shadow-inner" />
                  </label>
                </div>

                {isDualDegree && (
                  <div className="pt-2 space-y-2">
                    <label className="block font-bold text-sky-400 uppercase tracking-wider text-[10px]">
                      🤝 協辦雙聯學校 (Secondary University)
                    </label>
                    <select
                      value={secondaryUniv}
                      onChange={(e) => setSecondaryUniv(e.target.value)}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-white font-semibold focus:outline-none focus:border-sky-500 transition-colors shadow-inner"
                    >
                      <option value="clapping_cat">👏 拍手黑貓鼓掌大學 (Clapping Cat Univ)</option>
                      <option value="shanshenbu">⚡ 絲滑閃身步開溜大學 (Silky Dodge Step Univ)</option>
                      <option value="serious_study">🧐 我將嚴肅學習大學 (Serious Study Univ)</option>
                      <option value="capybara">🦫 卡皮巴拉水豚大學 (Capybara Univ)</option>
                      <option value="chiikawa">🌱 吉伊卡哇拔草檢定大學 (Chiikawa Univ)</option>
                      <option value="godzilla">🦖 哥吉拉爆射熱線大學 (Godzilla Univ)</option>
                      <option value="roblox">🎮 Roblox 羅布樂思大學 (Roblox Univ)</option>
                      <option value="nai_long">🐉 奶龍大學 (Nai Long Univ)</option>
                      <option value="boba_tea">🧋 珍珠奶茶連鎖大學 (Boba Tea Univ)</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Student */}
          {activeTab === 'student' && (
            <div className="space-y-4 text-xs animate-fadeIn">
              <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5 space-y-4 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-1">
                  <label className="block font-bold text-amber-300 uppercase tracking-wider text-[10px]">
                    畢業生姓名資訊
                  </label>
                  <button
                    type="button"
                    onClick={handleConvertToPinyin}
                    className="text-[10px] bg-indigo-500/20 hover:bg-indigo-500/40 text-indigo-300 border border-indigo-500/30 font-semibold px-2 py-1 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>⚡ 自動拼音</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="block text-[10px] text-slate-400 mb-1">中文姓名</span>
                    <input
                      type="text"
                      value={nameZh}
                      onChange={(e) => setNameZh(e.target.value)}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-inner font-medium"
                    />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 mb-1">英文姓名 (證書呈現)</span>
                    <input
                      type="text"
                      value={nameEn}
                      onChange={(e) => setNameEn(e.target.value)}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 text-amber-300 font-bold focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                  <div>
                    <span className="block text-[10px] text-slate-400 mb-1">頒發日期</span>
                    <input
                      type="text"
                      value={issueDate}
                      onChange={(e) => setIssueDate(e.target.value)}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500 transition-colors font-medium text-[11px]"
                    />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 mb-1">證書字號</span>
                    <input
                      type="text"
                      value={certId}
                      onChange={(e) => setCertId(e.target.value)}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono text-[11px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Degree */}
          {activeTab === 'degree' && (
            <div className="space-y-4 text-xs animate-fadeIn">
              <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5 space-y-4 backdrop-blur-sm">
                <div>
                  <label className="block font-bold text-amber-400 uppercase tracking-wider mb-2 text-[10px]">
                    榮譽頂級勛銜 (Top Banner)
                  </label>
                  <select
                    value={honorBadge}
                    onChange={(e) => setHonorBadge(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
                  >
                    {HONOR_BADGES.map((b, i) => (
                      <option key={i} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-amber-400 uppercase tracking-wider mb-2 text-[10px]">
                    授予學位 (Degree Title)
                  </label>
                  <select
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
                  >
                    {pConfig.degrees.map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-amber-400 uppercase tracking-wider mb-2 text-[10px]">
                    主修專業 (Major / Specialty)
                  </label>
                  <select
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
                  >
                    {pConfig.majors.map((m, i) => (
                      <option key={i} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-amber-400 uppercase tracking-wider mb-2 text-[10px]">
                    校長評語 / 授予原因
                  </label>
                  <textarea
                    rows={3}
                    value={evaluationDesc}
                    onChange={(e) => setEvaluationDesc(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500 transition-colors shadow-inner resize-none leading-relaxed text-[11px]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Style & Mascot */}
          {activeTab === 'style' && (
            <div className="space-y-4 text-xs animate-fadeIn">
              {/* Photo & Mascot Layout */}
              <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5 space-y-3 backdrop-blur-sm">
                <label className="block font-bold text-amber-400 uppercase tracking-wider text-[10px]">
                  🎓 吉祥物立繪設定 (安全邊距，不擋簽名與文字)
                </label>

                <div>
                  <span className="block text-[10px] text-slate-400 mb-1.5">吉祥物立繪位置</span>
                  <select
                    value={mascotPosition}
                    onChange={(e) => setMascotPosition(e.target.value as any)}
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="right">👉 站立於右側 (安全空白區，不擋簽名)</option>
                    <option value="left">👈 站立於左側 (安全空白區，不擋簽名)</option>
                    <option value="none">🚫 隱藏側邊吉祥物立繪</option>
                  </select>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="block text-[10px] text-slate-400 mb-1.5">
                    畢業生照片 / 大頭照
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="cursor-pointer bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 border border-amber-500/30 py-2.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-1 shadow-sm">
                      <Upload className="w-3.5 h-3.5" />
                      <span>上傳個人照</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoUpload}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={clearPhoto}
                      className="bg-slate-900/80 hover:bg-slate-700 text-slate-300 py-2.5 rounded-xl border border-slate-600/50 transition-colors font-medium flex items-center justify-center gap-1 shadow-sm"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>清除照片</span>
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center italic mt-1.5">
                    {uploadedPhoto ? '大頭照：目前為個人上傳照片' : '大頭照：目前為學士服圖騰'}
                  </p>
                </div>
              </div>

              {/* Certificate Theme */}
              <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5 space-y-3 backdrop-blur-sm">
                <label className="block font-bold text-amber-400 uppercase tracking-wider text-[10px]">
                  證書主題色調
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {CERT_THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => {
                        setCertTheme(theme.id);
                        showToast(`已套用：${theme.name}`, '🎨');
                      }}
                      className={`p-2.5 bg-gradient-to-br hover:brightness-105 rounded-xl font-bold text-center border shadow-sm transition-all active:scale-95 ${
                        theme.previewClass
                      } ${certTheme === theme.id ? 'ring-2 ring-amber-400 scale-[1.02]' : ''}`}
                    >
                      {theme.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seal Style */}
              <div className="bg-slate-800/40 p-4 rounded-2xl border border-white/5 space-y-2 backdrop-blur-sm">
                <label className="block font-bold text-amber-400 uppercase tracking-wider text-[10px]">
                  防偽鋼印材質 (CSS Shimmer)
                </label>
                <select
                  value={sealStyle}
                  onChange={(e) => setSealStyle(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-white font-semibold focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
                >
                  {SEAL_STYLES.map((seal) => (
                    <option key={seal.id} value={seal.id}>
                      {seal.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Export Action Bar */}
        <div className="p-4 bg-black/60 border-t border-white/10 space-y-2.5 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-2.5">
            <button
              id="btnExport"
              type="button"
              disabled={isExporting}
              onClick={handleExportPNG}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold py-3 px-2 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center space-x-1.5 transition-all transform hover:-translate-y-0.5 active:scale-95 text-xs disabled:opacity-60"
            >
              {isExporting ? (
                <>
                  <span className="animate-spin text-sm">⏳</span>
                  <span>正在渲染高清圖片...</span>
                </>
              ) : (
                <>
                  <Camera className="w-4 h-4" />
                  <span>匯出高清 PNG</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold py-3 px-2 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center justify-center space-x-1.5 transition-all transform hover:-translate-y-0.5 active:scale-95 text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>列印 / 存 PDF</span>
            </button>
          </div>

          <div className="text-center text-[10px] text-slate-400 truncate px-1">
            匯出檔名：<span className="text-amber-400 font-mono font-medium">{filename}.png</span>
          </div>
        </div>
      </aside>

      {/* Main Certificate Preview Canvas */}
      <main
        ref={previewContainerRef}
        className="flex-1 p-3 lg:p-6 overflow-auto min-h-screen relative z-10 custom-scrollbar flex flex-col justify-start"
      >
        {/* Top Control Bar: cleanly positioned in document flow above canvas */}
        <div className="no-print mb-4 shrink-0 mx-auto w-full max-w-xl flex flex-wrap items-center justify-between gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-700/80 shadow-xl text-xs">
          {/* Orientation switch */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setOrientation('landscape');
                setIsAutoFit(true);
              }}
              className={`py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition-colors ${
                orientation === 'landscape'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="切換橫向證書"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="text-[11px]">橫向</span>
            </button>
            <button
              onClick={() => {
                setOrientation('portrait');
                setIsAutoFit(true);
              }}
              className={`py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition-colors ${
                orientation === 'portrait'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="切換直向證書"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="text-[11px]">直向</span>
            </button>
          </div>

          {/* Auto-fit and zoom controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsAutoFit(true);
                recalculateAutoFit();
                showToast('已整張完整顯示', '📐');
              }}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                isAutoFit
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              整張完整可見
            </button>

            <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-lg border border-white/5">
              <button
                onClick={() => {
                  setIsAutoFit(false);
                  setZoomLevel((z) => Math.max(30, z - 8));
                }}
                className="p-1 hover:bg-slate-800 rounded text-slate-300"
                title="縮小"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-amber-400 w-11 text-center text-[11px] font-bold">
                {Math.round(computedScale * 100)}%
              </span>
              <button
                onClick={() => {
                  setIsAutoFit(false);
                  setZoomLevel((z) => Math.min(120, z + 8));
                }}
                className="p-1 hover:bg-slate-800 rounded text-slate-300"
                title="放大"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setIsAutoFit(false);
                  setZoomLevel(100);
                }}
                className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                title="100% 原始大小"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Certificate Outer Scroll Container */}
        <div className="m-auto flex items-center justify-center p-2">
          {/* Scaled stage boundary */}
          <div
            className="relative transition-all duration-150"
            style={{
              width: `${Math.round(certDimensions.width * computedScale)}px`,
              height: `${Math.round(certDimensions.height * computedScale)}px`,
            }}
          >
            {/* Certificate Live Box */}
            <div
              ref={certRef}
              id="certContainer"
              className="print-container relative cert-frame flex flex-col justify-between shrink-0 select-none overflow-hidden"
              style={
                {
                  width: `${certDimensions.width}px`,
                  height: `${certDimensions.height}px`,
                  transform: `scale(${computedScale})`,
                  transformOrigin: 'top left',
                  '--border-color': pConfig.primaryColor,
                } as React.CSSProperties
              }
            >
              {/* Security Pattern Background (Guilloche) */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="guillochePattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 0 20 Q 10 0 20 20 T 40 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-amber-800"
                        opacity="0.3"
                      />
                      <path
                        d="M 20 0 Q 40 10 20 20 T 20 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-amber-800"
                        opacity="0.3"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.3"
                        className="text-amber-800"
                        opacity="0.2"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#guillochePattern)" />
                </svg>
              </div>

              {/* Paper Noise Texture */}
              <div
                className="absolute inset-0 opacity-[0.30] mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Corner Ornaments */}
              <div className="absolute top-4 left-4 w-14 h-14 border-t-4 border-l-4 border-amber-600/70 opacity-90" />
              <div className="absolute top-4 right-4 w-14 h-14 border-t-4 border-r-4 border-amber-600/70 opacity-90" />
              <div className="absolute bottom-4 left-4 w-14 h-14 border-b-4 border-l-4 border-amber-600/70 opacity-90" />
              <div className="absolute bottom-4 right-4 w-14 h-14 border-b-4 border-r-4 border-amber-600/70 opacity-90" />

              {/* ⭐ Standing University Mascot Character ⭐
                  CRITICAL OPTIMIZATION: Positioned with generous side margins and safe vertical bounds.
                  Never overlaps certificate text or footer signatures.
                  No obstructive text badge. */}
              {mascotPosition !== 'none' && (
                <div
                  className={`absolute ${
                    mascotPosition === 'left' ? 'left-5 lg:left-6' : 'right-5 lg:right-6'
                  } ${
                    orientation === 'portrait'
                      ? 'bottom-[180px] w-28 h-38'
                      : 'bottom-[170px] w-32 h-44'
                  } z-20 flex flex-col items-center justify-end pointer-events-none transition-all duration-300`}
                >
                  <img
                    src={pConfig.imagePath}
                    alt={pConfig.nameZh}
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.3)] mascot-floating"
                  />
                  <div className="w-20 h-2 bg-black/20 rounded-full blur-[2px] mt-1" />
                </div>
              )}

              {/* Header Section */}
              <div className={`text-center relative z-10 ${orientation === 'portrait' ? 'pt-8' : 'pt-2'}`}>
                {/* Top Honor Badge Banner */}
                <div className="inline-block mb-2">
                  <span className="bg-amber-500/15 border border-amber-600/40 cert-text-accent font-cinzel text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-sm backdrop-blur-sm">
                    {honorBadge}
                  </span>
                </div>

                <div className="flex items-center justify-center space-x-4 mb-1.5 px-4">
                  {/* Primary Mascot Crest Image */}
                  <div
                    className={`${
                      orientation === 'portrait' ? 'w-16 h-16' : 'w-16 h-16'
                    } flex items-center justify-center shadow-lg rounded-2xl p-1 bg-white/95 border border-amber-300 overflow-hidden shrink-0`}
                  >
                    <img
                      src={pConfig.imagePath}
                      alt={pConfig.nameZh}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>

                  {/* Dual Connector */}
                  {isDualDegree && (
                    <>
                      <div className="text-amber-600 font-black text-2xl px-2">✕</div>
                      <div
                        className={`${
                          orientation === 'portrait' ? 'w-16 h-16' : 'w-16 h-16'
                        } flex items-center justify-center shadow-lg rounded-2xl p-1 bg-white/95 border border-red-300 overflow-hidden shrink-0`}
                      >
                        <img
                          src={sConfig.imagePath}
                          alt={sConfig.nameZh}
                          className="w-full h-full object-contain pointer-events-none"
                        />
                      </div>
                    </>
                  )}

                  <span
                    className={`font-cinzel ${
                      orientation === 'portrait'
                        ? 'text-2xl lg:text-3xl max-w-md'
                        : 'text-3xl lg:text-4xl'
                    } font-black tracking-widest cert-text-main ml-2 drop-shadow-sm leading-tight`}
                  >
                    {isDualDegree ? `${pConfig.nameEn} ✕ ${sConfig.nameEn}` : pConfig.nameEn}
                  </span>
                </div>

                <p
                  className={`font-serif-tc ${
                    orientation === 'portrait' ? 'text-sm' : 'text-sm'
                  } uppercase tracking-[0.25em] font-bold cert-text-accent mt-2`}
                >
                  {isDualDegree
                    ? `${pConfig.nameZh} ＆ ${sConfig.nameZh} 聯合頒發`
                    : pConfig.subZh}
                </p>
                <div className="w-56 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-2.5 opacity-80" />
              </div>

              {/* Certificate Core Content */}
              <div
                className={`text-center relative z-10 my-auto flex flex-col items-center justify-center ${
                  orientation === 'portrait' ? 'py-4 space-y-2' : 'py-1'
                }`}
              >
                {/* Graduation Photo Box */}
                <div className="relative mb-2 group">
                  <div
                    className={`relative ${
                      orientation === 'portrait' ? 'w-[96px] h-[118px]' : 'w-[88px] h-[108px]'
                    } bg-slate-900 border-2 border-amber-400/80 rounded-xl shadow-md overflow-hidden flex items-center justify-center p-1 z-10`}
                  >
                    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg">
                      {uploadedPhoto ? (
                        <img
                          src={uploadedPhoto}
                          className="w-full h-full object-cover"
                          alt="Student Photo"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          dangerouslySetInnerHTML={{ __html: DEFAULT_GRAD_HAT }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <p className="font-serif-tc text-xs italic cert-text-sub mb-1 font-medium">
                  茲證明 (This is to certify that)
                </p>

                {/* Student Name */}
                <div className="inline-block border-b-2 border-amber-600/50 px-10 pb-0.5 mb-1.5">
                  <span
                    className={`font-cinzel ${
                      orientation === 'portrait' ? 'text-3xl lg:text-4xl' : 'text-3xl lg:text-4xl'
                    } font-black tracking-wider cert-text-main drop-shadow-sm`}
                  >
                    {nameEn || 'Graduate Student'}
                  </span>
                </div>

                <p className="font-serif-tc text-xs cert-text-sub mb-1.5 font-semibold">
                  修滿規定學分，經學位評定委員會考核成績合格，特此授予
                </p>

                {/* Degree Title */}
                <h3
                  className={`font-cinzel ${
                    orientation === 'portrait'
                      ? 'text-xl lg:text-2xl max-w-lg px-2'
                      : 'text-2xl lg:text-3xl'
                  } font-black tracking-wider mb-2 transition-colors drop-shadow-sm`}
                  style={{ color: pConfig.accentColor }}
                >
                  {degree}
                </h3>

                {/* Major */}
                <p className="font-serif-tc text-xs font-bold cert-text-main mb-2 bg-amber-500/15 inline-block px-5 py-1.5 rounded-full border border-amber-500/30 shadow-sm max-w-lg">
                  主修：{major}
                </p>

                {/* Description */}
                <p
                  className={`font-serif-tc ${
                    orientation === 'portrait' ? 'text-sm max-w-md' : 'text-xs lg:text-sm max-w-xl'
                  } cert-text-sub mx-auto leading-relaxed italic px-4 font-medium`}
                >
                  {evaluationDesc}
                </p>
              </div>

              {/* Footer Section: Seals & Signatures */}
              <div
                className={`relative z-10 grid grid-cols-3 items-end ${
                  orientation === 'portrait' ? 'pt-5 pb-4 px-6' : 'pt-3 pb-2 px-4'
                } border-t border-slate-400/50`}
              >
                {/* Left Signature */}
                <div className="text-center">
                  <p className="font-signature text-3xl lg:text-4xl cert-text-main -mb-1 transform -rotate-2">
                    {pConfig.sigLeftName}
                  </p>
                  <div className="w-36 h-[1.5px] bg-slate-400 mx-auto mb-1" />
                  <p className="font-cinzel text-[11px] font-bold uppercase tracking-wider cert-text-main">
                    {pConfig.sigLeftTitle}
                  </p>
                  <p className="text-[9px] cert-text-sub font-medium">
                    {isDualDegree ? `${pConfig.nameZh} 校長代表` : pConfig.sigLeftSub}
                  </p>
                </div>

                {/* Center Seals */}
                <div className="flex items-center justify-center gap-3">
                  {/* Seal 1 */}
                  <div
                    className={`relative ${
                      isDualDegree ? 'w-14 h-14' : 'w-16 h-16'
                    } ${sealStyle} rounded-full border border-amber-200/60 flex items-center justify-center p-1.5 shadow-md shrink-0`}
                  >
                    <div className="w-full h-full border border-dashed border-black/40 rounded-full flex flex-col items-center justify-center text-center p-0.5">
                      <span className="text-base">{pConfig.sealIcon}</span>
                      <span className="font-cinzel text-[5px] font-black tracking-widest text-black/90 uppercase">
                        {pConfig.sealTitle}
                      </span>
                    </div>
                  </div>

                  {/* Seal 2 (Dual Degree) */}
                  {isDualDegree && (
                    <div
                      className={`relative w-14 h-14 ${sConfig.sealBgClass} rounded-full border border-red-200/60 flex items-center justify-center p-1.5 shadow-md shrink-0`}
                    >
                      <div className="w-full h-full border border-dashed border-white/50 rounded-full flex flex-col items-center justify-center text-center p-0.5">
                        <span className="text-base">{sConfig.sealIcon}</span>
                        <span className="font-cinzel text-[5px] font-black tracking-widest text-white/90 uppercase">
                          {sConfig.sealTitle}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Signature & Date */}
                <div className="text-center">
                  <p className="font-signature text-3xl lg:text-4xl cert-text-main -mb-1 transform rotate-1">
                    {isDualDegree ? sConfig.sigLeftName : pConfig.sigRightName}
                  </p>
                  <div className="w-36 h-[1.5px] bg-slate-400 mx-auto mb-1" />
                  <p className="font-cinzel text-[11px] font-bold uppercase tracking-wider cert-text-main">
                    {isDualDegree ? sConfig.sigLeftTitle : pConfig.sigRightTitle}
                  </p>
                  <p className="text-[9px] cert-text-sub font-semibold mt-0.5">
                    頒發日期：{issueDate}
                  </p>
                  <p className="font-mono text-[8px] opacity-75 cert-text-sub">
                    {certId}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-800/95 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-slate-700 animate-slideUp">
          <span className="text-xl">{toast.icon}</span>
          <span className="font-bold text-sm tracking-wide">{toast.message}</span>
        </div>
      )}
    </div>
  );
}
