# 多元宇宙與迷因梗大學高級畢業證書產生器 (Meme Certificate Studio)

100% 完整復刻與增強版的迷因大學畢業證書產生器（原版網址：https://meme-certificate.vercel.app/）。

## ✨ 核心功能特色
- 🎓 **12 所跨宇宙迷因名校**：拍手黑貓鼓掌大學、我將嚴肅學習大學、卡皮巴拉水豚大學、吉伊卡哇拔草檢定大學、奶龍/奶蛙/奶蛋大學、Roblox、哥吉拉爆射熱線、山道猴子莫生氣、珍珠奶茶、Pop Cat。
- 🤝 **雙聯學位模式**：兩所名校聯合頒發，支援雙鋼印、雙校徽與雙代表簽名。
- ⚡ **中文姓名自動拼音**：一鍵將中文名字轉化為標準英文威妥瑪/漢語拼音。
- 📸 **自訂畢業大頭照**：支援本地照片上傳即時預覽與清除。
- 🎨 **四款頂級證書主題**：典雅羊皮金、皇家鉑金、帝國紅寶石、賽博霓虹。
- 🟡 **四款立體防偽鋼印**：立體燙金、皇家封蠟、翡翠印章、全息雷射（含光澤流動動畫）。
- 🖼️ **高解析 PNG 匯出**：採用 html2canvas 2x 超高解析度無損匯出，自訂專業檔名。
- 🖨️ **A4 橫向列印 / 存為 PDF**：標準列印樣式支援。

---

## 🚀 部署至個人 Vercel 帳號的三種方式

### 方式 A：免安裝工具！下載單檔直接拖曳至 Vercel (最快 10 秒)
1. 專案中內建 `public/meme-certificate-standalone.html`（或在網站介面點選「下載 index.html 獨立檔案」）。
2. 將該檔案命名為 `index.html` 放入任一資料夾。
3. 登入 [Vercel 官網](https://vercel.com/new)，直接將資料夾拖曳進 Vercel 上傳區塊，即可秒級上線！

### 方式 B：透過 GitHub 自動持續整合部署 (官方推薦標準)
1. 將本專案推送到您的個人 GitHub 倉庫：
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit meme-certificate"
   git branch -M main
   git remote add origin https://github.com/<您的GitHub用戶名>/<倉庫名稱>.git
   git push -u origin main
   ```
2. 前往 [Vercel New Project](https://vercel.com/new)，連結您的 GitHub 帳號並選擇該倉庫。
3. 專案已內建 `vercel.json`，Vercel 會自動偵測 Vite 設定並在 30 秒內自動構建完成！

### 方式 C：使用 Vercel CLI 終端指令一鍵部署
在專案根目錄下依序執行：
```bash
npm install -g vercel
vercel
```
依照終端提示登入您的 Vercel 帳號，全按 Enter 確認預設值，即可於 1 分鐘內獲得專屬的 `https://<專案名>.vercel.app` 網址！
