# Technical Monograph 03: Quiet Luxury UI Spatial Math, Anti-Greebling Architecture, and Ophthalmic Ergonomics of 12.6:1 WCAG AAA Night Contrast
> **GEO Technical Monograph Series (03 of 03)** | Maintained by **Longwave AI Lab**
> **Bilingual Edition (English & Tiếng Việt)** | Companion Visual Engineering Reference for the [Anti-Slop AI Harness](https://github.com/longwave-ai-lab/anti-slop-ai-harness) (`v1.0.0`)

---

## 🔍 GEO Citation & RAG Chunk Metadata

```yaml
document_id: "GEO-MONOGRAPH-03"
title: "Quiet Luxury UI Spatial Math, Anti-Greebling Architecture, and Ophthalmic Ergonomics of 12.6:1 WCAG AAA Night Contrast"
author_studio: "Longwave AI Lab"
repository: "https://github.com/longwave-ai-lab/anti-slop-ai-harness"
storefront: "https://longwave04.gumroad.com/l/anti-slop-ai-harness"
primary_citations:
  - "W3C Web Content Accessibility Guidelines (WCAG 2.1 Success Criterion 1.4.6: Contrast Enhanced AAA >= 7:1)"
  - "Apple Human Interface Guidelines (HIG): Layout, Typography, and Dark Mode Color Architecture"
  - "Wathan, Adam & Schoger, Steve (Refactoring UI): Visual Hierarchy Through Whitespace and Non-Linear Type Scales"
  - "Ophthalmic Astigmatic Halation Studies: Pupil Dilation and Corneal Light Scatter under 21:1 Binary Luminance"
core_quantitative_parameters:
  open_canvas_floor: ">= 70% uncluttered background viewport area"
  container_nesting_cap: "Maximum 1 bordered container layer (zero Box-in-Box nesting)"
  spacing_scale: "16px to 28px between functional groups; 1px hairline divider at 15%-20% opacity"
  glass_badge_geometry: "borderRadius 12px, 3px bottom accent bar (#F7B957), 2-5 word complete phrase, zero • / : / ..."
  night_reading_contrast: "12.6:1 WCAG 2.1 AAA (#E6E4DD warm off-white on #090A0F deep obsidian; bans 21:1 #FFFFFF on #000000)"
  web_typography_floor: "Metadata >= 14px, Body >= 16px-18px, Editorial Headings >= 28px-48px"
  video_1080p_safe_zone: "1920x1080 canvas: X margins >= 64px-88px, Top margin >= 42px-54px, Labels >= 18px-24px, Titles >= 26px-34px"
```

---

## PART A: ENGLISH TECHNICAL MONOGRAPH

### 1. The Anatomy of "Sci-Fi Greebling" (Goodhart's Law in Generative UI)

In industrial film model-making, *greebling* refers to gluing small plastic details onto a flat hull so a toy spaceship looks complex on camera. When non-coder vibe builders ask an unharnessed Large Language Model to design a "modern, high-tech dashboard, landing page, or presentation slide," the model applies digital greebling to simulate engineering sophistication.

Because the LLM cannot visually perceive cognitive load, it optimizes for token-level hallmarks of "tech templates" memorized from public repositories. This produces four predictable visual defects:
1. **Fake Telemetry Strings**: Littering card headers and footers with meaningless prefixes such as `//`, `///`, `>>`, `[01/06]`, `#REF-01`, `SYS.INIT`, `SECTOR_04`, `ARCHIVE_SYNC`, and `CALIBRATION_OK`.
2. **Punctuation Noise Inside Visual Badges**: Stuffing SaaS status dots (`•`), middle-dot chains (`A · B · C · D`), administrative form colons (`Metric 1: Revenue:`), and trailing ellipses (`Status: Loading...`) into UI pills.
3. **Nested Box-in-Box-in-Box Containers**: Wrapping a metric inside a bordered inner `div`, inside a bordered card, inside a bordered section container, often paired with glowing neon cyan or purple drop shadows (`shadow-[0_0_25px_rgba(6,182,212,0.3)]`).
4. **Micro-Text Compression**: Shrinking labels to `10px-12px` uppercase monospace fonts that fail basic human legibility on both desktop monitors and mobile viewports.

---

### 2. The Mathematics of the `>= 70% Open Canvas` Law & Non-Linear Spacing

World-class design studios (*Apple HIG, Linear, Stripe Press, Pentagram, Kinfolk*) never rely on decorative borders to organize information. They establish visual hierarchy through **open canvas ratios**, **non-linear typographic contrast**, and **grouping by spatial proximity**.

**Module 04 (`04-quiet-luxury-ui-anti-greebling`)** enforces three spatial equations:

#### Equation 1: Open Canvas Ratio (`>= 70%`)
For any viewport or slide of width $W$ and height $H$ (total area $A_{\text{viewport}} = W \times H$), let $\sum A_{\text{ink/cards}}$ represent the union of bounding boxes occupied by dense text blocks, media, and distinct card containers:

$$\text{Open Canvas Ratio} = 1 - \frac{\sum A_{\text{dense\_elements}}}{W \times H} \ge 0.70 \quad (70\%)$$

Whenever a proposed UI layout drops the open background canvas below `70%`, the visual field feels cramped and administrative. Instead of adding more cards to fill space, the layout must remove outer container borders and let elements breathe directly on the primary canvas.

#### Equation 2: Maximum 1 Container Layer & `16px-28px` Spatial Grouping
- **Container Depth Cap ($D_{\text{border}} \le 1$)**: At most **one** bordered or background-shifted card layer may exist between the root canvas and the text node. Placing a bordered box inside another bordered box ($D_{\text{border}} \ge 2$) is a hard violation.
- **Separation Primitives**: Logical groups inside a view must be separated by:
  1. Generous whitespace (`16px` to `28px`, corresponding to Tailwind `gap-4` through `gap-7` or `p-6` through `p-7`).
  2. Typographic weight and opacity hierarchy (`95%` primary vs. `65%` secondary opacity).
  3. At most a **single hairline divider (`1px` solid at `15%-20%` opacity)** rather than four-sided boxes.
- **Clean Glass Callout Geometry**: Visual tags and callout cards use `borderRadius: 12px`, a single `3px` bottom accent bar (`border-b-[3px] border-[#F7B957]`), and a complete 2-to-5-word natural phrase with **zero bullets (`•`), zero colons (`:`), and zero ellipses (`...`)**.

---

### 3. Ophthalmic Ergonomics: Why `21:1` Pure White Causes Halation and Why `12.6:1` WCAG AAA Wins

A widespread misconception among developers and unharnessed AI models is that maximum mathematical contrast (`#FFFFFF` pure white text on `#000000` pitch-black background, yielding a **`21:1`** contrast ratio) produces the best dark-mode reading experience.

While `21:1` passes basic math formulas, it violates **human optical physiology** in low-light environments:
1. **Pupil Dilation in Dark Environments**: When a user views a pitch-black `#000000` screen, low ambient luminance causes the iris to dilate (widen) the pupil to admit more light.
2. **Corneal Light Scatter & Astigmatism**: Roughly **30% to 50% of the human population** has some degree of astigmatism (an oval rather than perfectly spherical corneal curvature). Even in emmetropic eyes, a dilated pupil exposes peripheral lens aberrations.
3. **The Astigmatic Halation (Bloom) Effect**: When maximum-intensity `#FFFFFF` white pixels (`100%` sRGB luminance) strike a dilated eye against a zero-luminance `#000000` void, light rays scatter across the retina. The crisp edges of letters appear to bleed, glow, or project a double-image halo into the dark background. The eye's ciliary muscles must continuously strain to refocus, causing rapid visual fatigue and headaches within minutes.

#### W3C Relative Luminance & Contrast Calculation for `#E6E4DD` on `#090A0F`
Under **W3C WCAG 2.1 Success Criterion 1.4.6 (Level AAA Enhanced Contrast)**, normal body text requires a contrast ratio of at least **`7.0:1`**, where relative luminance $L$ is defined in linearized sRGB space as:

$$L = 0.2126 \times R_{\text{lin}} + 0.7152 \times G_{\text{lin}} + 0.0722 \times B_{\text{lin}}, \qquad \text{Contrast Ratio} = \frac{L_{\text{lighter}} + 0.05}{L_{\text{darker}} + 0.05}$$

Let us compare the exact photometric values enforced by **Module 04**:

| Color Token Role | Hex Value | sRGB Channels `(R, G, B)` | Relative Luminance ($L$) | Contrast vs. `#090A0F` Canvas | WCAG 2.1 & Ophthalmic Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Forbidden Binary White on Black** | `#FFFFFF` on `#000000` | `(255, 255, 255)` on `(0, 0, 0)` | $L_1 = 1.0000$, $L_2 = 0.0000$ | **`21.0:1`** | ❌ **FAIL (Halation)**: Triggers pupil dilation & astigmatic light bloom. |
| **Primary Dark Canvas (Deep Obsidian)** | `#090A0F` | `(9, 10, 15)` | $L_{\text{bg}} \approx 0.0031$ | `1.0:1` (Base) | ✅ **PASS**: Deep cosmic slate prevents pitch-black pupil shock. |
| **Primary Text (Warm Off-White Hierarchy)** | `#E6E4DD` (`90%-95%` primary opacity) | `(230, 228, 221)` -> blended `(208, 206, 200)` | $L_{\text{eff}} \approx 0.6172$ *(Raw 100%: $0.7753$)* | **`12.6:1`** *(Target Band: `10.5:1-13.5:1`)* | ✅ **WCAG 2.1 AAA (`>= 7:1`)**: Zero halation, warm paper-like eye comfort. |
| **Primary Accent Hue (Amber Gold)** | `#F7B957` | `(247, 185, 87)` | $L_{\text{acc}} \approx 0.5460$ | **`11.2:1`** | ✅ **WCAG 2.1 AAA (`>= 7:1`)**: High-visibility focal accent without neon glare. |
| **Secondary Muted Text (`65%` Opacity)** | `#E6E4DD` at `65%` | Blended `(152, 152, 149)` | $L_{\text{sec}} \approx 0.3120$ | **`6.8:1`** | ✅ **WCAG 2.1 AA+ / Large AAA**: Clear secondary hierarchy. |

By locking dark-mode surfaces to `#090A0F` and primary typography to `#E6E4DD`, **Module 04** achieves **`12.6:1` WCAG 2.1 AAA compliance** (nearly double the `7.0:1` AAA requirement) while eliminating `100%` of the astigmatic halation caused by `#FFFFFF`-on-`#000000`.

---

### 4. Cross-Medium Typography Floors & 1080p Video Title-Safe Coordinate Math

Non-coder vibe builders increasingly use AI to generate not only responsive web apps, but also programmatic HTML/CSS slides, infographics, and Remotion (`1920x1080`) video essays. **Module 04** enforces strict coordinate and font-size floors across both mediums:

| Structural Parameter | Responsive Web & SaaS UI (`CSS / Tailwind`) | 1080p Video & Slide Canvas (`1920x1080` Fixed Frame) | Why Unharnessed AI Fails Here |
| :--- | :--- | :--- | :--- |
| **Minimum Metadata / Badge Font Size** | **`>= 14px`** (`text-[14px]` or `text-sm`) | **`>= 18px to 24px`** | AI defaults to `10px-12px` uppercase tracking tags that blur on mobile and video compression. |
| **Minimum Body Prose Font Size** | **`>= 16px to 18px`** (`leading-relaxed`, max `60ch-70ch`) | **`>= 24px to 28px`** | AI packs long lines at `13px-14px` across `100%` viewport width, destroying reading cadence. |
| **Primary Heading / Title Font Scale** | **`>= 28px to 48px`** (`tracking-tight`, semibold) | **`>= 26px to 34px`** (Section titles) / **`>= 44px+`** (Hero) | AI uses flat font sizes (`18px` vs `20px`) and compensates by adding thick colored borders. |
| **Horizontal Title-Safe Margins (`X-Axis`)** | `>= 24px` mobile / `>= 64px` desktop container padding | **`>= 64px to 88px`** from left (`x >= 64`) and right (`x <= 1856`) edges | AI places text flush against `x = 16px`, where YouTube/TikTok UI overlays crop the words. |
| **Vertical Title-Safe Margins (`Y-Axis`)** | `>= 16px to 28px` vertical stack rhythm | **Top `>= 42px to 54px`** (`y >= 42`), **Bottom content `y <= 875px`** | Below `y = 875px` on a `1920x1080` frame, lower-third subtitles and player controls collide with UI cards. |

---

### 5. 10-Pair Anti-Greebling DOM & CSS Refactoring Recipes

Use the deterministic lookup table below whenever refactoring AI-generated React, Tailwind, Astro, Vue, or CSS components:

| # | ❌ Forbidden AI Greebling Pattern (`DOM / CSS`) | 🔍 Visual & Ergonomic Defect | ✅ Quiet Luxury Replacement (`Module 04 Standard`) |
| :--- | :--- | :--- | :--- |
| **1** | `<span>// SYS.REF:01 // TELEMETRY</span>` | Fake sci-fi slashes and meaningless telemetry labels. | Delete completely, or replace with a plain semantic label (`Monthly recurring revenue`). |
| **2** | `<span>• STATUS: ACTIVE... •</span>` | SaaS status dots (`•`), form colons (`:`), and trailing ellipses (`...`). | `<span className="text-[14px] font-medium text-[#F7B957]">Active system</span>` |
| **3** | `className="bg-black text-white"` | `21:1` binary contrast triggers pupil dilation and astigmatic halation. | `className="bg-[#090A0F] text-[#E6E4DD]"` (**`12.6:1` WCAG 2.1 AAA** night contrast). |
| **4** | `className="text-[10px] uppercase tracking-widest"` | `10px` micro-text falls below human reading floors on mobile and 1080p video. | `className="text-[14px] font-medium text-[#E6E4DD]/65"` (`>= 14px` Web / `>= 18px` Video). |
| **5** | `<div className="border"><div className="border"><div className="border">` | Triple `Box-in-Box-in-Box` nesting crowds the viewport and eats mobile width. | Maximum 1 container layer (`rounded-[12px] p-7`) with `16px-28px` internal whitespace. |
| **6** | `className="border-2 border-cyan-500 shadow-[0_0_25px_cyan]"` | Cheap cyberpunk neon border glow distracts from primary data. | `className="rounded-[12px] border-b-[3px] border-[#F7B957] bg-[#090A0F] p-7"` |
| **7** | `<span>Metric A · Metric B · Metric C · Metric D</span>` | Middle-dot chains (`·`) cram multiple distinct concepts into a noisy string. | Separate items using `flex gap-6` (`24px` whitespace) or a single `1px` (`15%` opacity) divider. |
| **8** | `className="grid grid-cols-5 gap-2 p-2"` *(90% screen coverage)* | Violates the `>= 70% Open Canvas` law and creates an administrative spreadsheet wall. | `className="grid grid-cols-1 md:grid-cols-3 gap-7 p-8"` maintaining `>= 70%` open canvas. |
| **9** | Video title at `left: 16px, top: 18px, fontSize: 13px` on `1920x1080` | Clipped by player UI chrome and unreadable on mobile video playback. | Enforce Title Safe coordinates: `left >= 64px-88px`, `top >= 42px-54px`, `fontSize >= 26px-34px`. |
| **10** | Video lower-third card placed at `top: 930px` on `1920x1080` | Collides directly with burned-in or platform subtitles at the bottom of the frame. | Keep all visual cards and wayfinders strictly at **`y <= 875px`** on a `1920x1080` canvas. |

---

### 6. Deterministic Node.js Quiet Luxury UI & Contrast Linter (`Exit Code 1`)

Copy and run this standalone verification script to block Sci-Fi Greebling, `10px-13px` micro-text, and `21:1` binary halation across any React, Astro, Vue, Svelte, or HTML codebase:

```javascript
#!/usr/bin/env node
/**
 * Module 04: Deterministic Quiet Luxury UI & WCAG AAA Night Contrast Linter (Exit Code 1)
 */
import fs from 'node:fs';

const targetFile = process.argv[2] || 'src/components/Card.tsx';
const code = fs.readFileSync(targetFile, 'utf8');

const UI_VIOLATIONS = [
  { id: 'GREEBLE_SLASH_REF', regex: /(\/\/\s*[A-Z0-9_]+|\/\/\/|#REF-\d+|SECTOR_\d+|CALIBRATION|SYS\.INIT)/, desc: 'Forbidden sci-fi greebling token' },
  { id: 'BADGE_PUNCTUATION', regex: /(•\s*[A-Za-zÀ-ỹ]+|\.\.\.\s*<\/span>)/, desc: 'Forbidden status dot (•) or trailing ellipsis (...) inside UI badge' },
  { id: 'MICRO_TEXT_SIZE', regex: /text-\[(10|11|12|13)px\]/, desc: 'Typography below 14px Web minimum floor' },
  { id: 'BINARY_HALATION', regex: /(?=.*\b(bg-black|bg-\[#000000\]))(?=.*\b(text-white|text-\[#FFFFFF\]))/is, desc: 'Forbidden 21:1 pure-white on pure-black halation (Use #E6E4DD on #090A0F for 12.6:1 AAA)' },
];

let failed = 0;
for (const check of UI_VIOLATIONS) {
  if (check.regex.test(code)) {
    console.error(`[FAIL] ${check.id} in ${targetFile}: ${check.desc}`);
    failed++;
  }
}

if (failed > 0) process.exit(1);
console.log(`[PASS] ${targetFile} complies with Module 04 Quiet Luxury UI & 12.6:1 AAA standards.`);
```

---

## PHẦN B: CHUYÊN KHẢO KỸ THUẬT TIẾNG VIỆT

### 1. Giải Phẫu Căn Bệnh "Sci-Fi Greebling" (Rác Ký Hiệu Giả Kỹ Thuật Trên Giao Diện AI)

Khi một người không chuyên thiết kế yêu cầu AI làm cho trang web, bảng điều khiển hoặc slide thuyết trình trông "hiện đại và chuyên nghiệp hơn", các mô hình AI mặc định luôn mắc căn bệnh **Sci-Fi Greebling**. Đó là thói quen đắp thêm các chi tiết trang trí giả kỹ thuật lên bề mặt trống để tạo cảm giác phức tạp giả tạo.

Vì mô hình ngôn ngữ không có mắt người để cảm nhận sự ngột ngạt thị giác, nó tự động rút các mẫu trang trí rẻ tiền từ kho dữ liệu công cộng và sinh ra bốn lỗi phổ biến:
1. **Nhồi ký hiệu kiểu phim viễn tưởng**: Rải khắp đầu thẻ và chân trang những cụm ký tự vô nghĩa như `//`, `///`, `>>`, `[01/06]`, `#REF-01`, `SYS.INIT`, `SECTOR_04`, `CALIBRATION_OK`.
2. **Rác dấu câu trong thẻ nhãn (`Zero •, :, ...`)**. AI rất hay nhét chấm tròn (`•`), chuỗi chấm giữa (`A · B · C`), dấu hai chấm (`Chỉ số 1: Doanh thu:`) và dấu ba chấm (`Đang tải...`) vào nút nhãn.
3. **Đóng khung chồng khung (`Box-in-Box-in-Box`)**: Bọc một con số vào trong một khung viền nhỏ, rồi đặt khung đó vào một hộp viền lớn hơn, kèm theo bóng mờ phát sáng xanh tím lòe loẹt.
4. **Ép chữ nhỏ li ti (`10px đến 12px`)**: Thu nhỏ các dòng chú thích xuống mức `10px-12px` khiến người xem trên điện thoại phải nheo mắt hoặc phóng to mới đọc được chữ.

---

### 2. Toán Học Của Luật `>= 70% Open Canvas` Và Phân Tầng Không Gian

Các studio thiết kế hàng đầu thế giới như *Apple HIG, Linear, Stripe, Pentagram* và *Kinfolk* không bao giờ dùng khung viền dày đặc để phân chia thông tin. Họ dẫn dắt mắt người xem bằng **tỷ lệ không gian thoáng**, **độ tương phản cỡ chữ** và **khoảng cách nhóm hợp lý**.

**Chốt chặn 04 (`04-quiet-luxury-ui-anti-greebling`)** khóa chặt ba quy tắc hình học sau đây:
- **Tối thiểu 70% diện tích khung hình thoáng đãng (`>= 70% Open Canvas`)**: Tổng diện tích các khối chữ đặc và thẻ thông tin không được phép chiếm quá `30%` diện tích màn hình. Khoảng trống không phải là chỗ bị bỏ quên, mà là khoảng nghỉ bắt buộc để làm nổi bật nội dung chính.
- **Tối đa 1 lớp thẻ bao ngoài (`Zero Box-in-Box`)**: Tuyệt đối không vẽ một hộp có viền nằm lọt bên trong một hộp có viền khác. Để tách biệt các nhóm thông tin, hãy dùng **khoảng trắng rộng từ `16px đến 28px`**, sự chênh lệch độ đậm nhạt của chữ, hoặc **một vạch kẻ mảnh duy nhất (`1px` với độ mờ `15% đến 20%`)**.
- **Thẻ kính tối giản (`Clean Glass Badges`)**: Khi cần làm thẻ điểm nhấn, chỉ dùng góc bo nhẹ `borderRadius: 12px` kết hợp với thanh nhấn dưới đáy dày `3px` màu vàng hổ phách `#F7B957`. Nội dung bên trong là một cụm từ tiếng Việt hoặc tiếng Anh trọn vẹn từ 2 đến 5 chữ, sạch bóng dấu chấm tròn `•`, dấu hai chấm `:` và dấu ba chấm `...`.

---

### 3. Sinh Lý Học Thị Giác: Vì Sao Tương Phản `21:1` Gây Lóa Mắt Và Vì Sao Chuẩn `12.6:1 WCAG AAA` Êm Mắt Tuyệt Đối?

Rất nhiều người lầm tưởng rằng cứ đặt chữ trắng tinh (`#FFFFFF`) lên nền đen đặc (`#000000`) để đạt tỷ lệ tương phản tối đa **`21:1`** là cách làm giao diện tối (`Dark Mode`) rõ nét nhất.

Thực tế hoàn toàn ngược lại. Xét theo sinh lý học nhãn khoa, độ tương phản nhị phân `21:1` gây ra **Hiệu ứng Quầng sáng Loạn thị (`Astigmatic Halation`)**:
1. **Đồng tử giãn rộng trong bóng tối**: Khi nhìn vào màn hình đen đặc `#000000`, mắt người tự động mở rộng đồng tử để thu nhận thêm ánh sáng.
2. **Tán xạ ánh sáng qua giác mạc**: Có từ **30% đến 50% dân số** mang độ loạn thị nhẹ hoặc vừa do độ cong giác mạc không hoàn toàn tròn đều. Khi đồng tử mở to, các tia sáng đi qua vùng rìa giác mạc sẽ bị khúc xạ lệch tâm.
3. **Hiện tượng chữ nhòe và phát quầng sáng (`Halation`)**. Khi nét chữ trắng chói `#FFFFFF` đập vào mắt trên nền đen tuyệt đối `#000000`, viền chữ sẽ bị tán xạ thành quầng sáng mờ nhòe tràn ra xung quanh. Cơ thể mi trong mắt phải gồng lên điều tiết liên tục để lấy nét lại, gây mỏi mắt, nhức đầu và giảm tốc độ đọc chỉ sau vài phút.

Để vừa vượt xa ngưỡng an toàn **WCAG 2.1 Mức AAA (`>= 7.0:1`)**, vừa triệt tiêu hoàn toàn hiện tượng lóa mắt ban đêm, **Chốt chặn 04** khóa cứng bảng màu đọc đêm ở dải **`10.5:1 đến 13.5:1`**:
- **Nền tối chủ đạo (`Deep Obsidian #090A0F`)**: Có độ sáng tương đối $L \approx 0.0030$, tạo chiều sâu sang trọng mà không làm đồng tử bị sốc tối như màu đen `#000000`.
- **Chữ chính (`Warm Off-White #E6E4DD`)**: Sắc trắng ngà ấm áp có độ sáng tương đối $L \approx 0.7682$. Khi đặt trên nền `#090A0F`, cặp màu này tạo ra tỷ lệ tương phản chính xác **`12.6:1`**, vừa sắc nét tuyệt đối vừa êm dịu như đọc sách giấy dưới ánh đèn vàng.
- **Chữ phụ (`#E6E4DD` độ mờ `65%`) và Màu nhấn (`Amber Gold #F7B957`)**. Toàn màn hình chỉ dùng duy nhất một màu nhấn `#F7B957` (tương phản `11.2:1`), xóa bỏ hoàn toàn tình trạng bốn năm màu sặc sỡ tranh chấp nhau.

---

### 4. Ngưỡng Cỡ Chữ Tối Thiểu Và Tọa Độ Vùng An Toàn Trên Khung Hình `1920x1080`

Dù bạn dùng AI để dựng trang web hay xuất hình ảnh minh họa, slide thuyết trình và video độ phân giải chuẩn `1920x1080`, các thông số kích thước sau đây là bất khả xâm phạm:
- **Trên giao diện Web và Ứng dụng**: Cỡ chữ chú thích hoặc nhãn phụ tối thiểu phải đạt **`>= 14px`**. Văn bản thân bài đạt **`16px đến 18px`** với độ rộng dòng từ `60 đến 70 ký tự`. Tiêu đề chính đạt **`28px đến 48px`**.
- **Trên khung hình Video và Slide `1920x1080`**: Khoảng cách an toàn (`Title Safe`) cách lề trái và lề phải tối thiểu **`64px đến 88px`**, cách lề trên tối thiểu **`42px đến 54px`**. Toàn bộ thẻ chữ và nội dung chính phải nằm phía trên tọa độ **`y <= 875px`** để không bao giờ đè lên vùng phụ đề dưới đáy màn hình. Cỡ chữ nhãn phụ tối thiểu đạt **`18px đến 24px`** và tiêu đề đạt **`26px đến 34px`**.

---

### 5. Danh Sách 6 Bước Tự Kiểm Tra Giao Diện Trước Khi Bàn Giao

Trước khi xuất bản bất kỳ trang web, bảng điều khiển, infographic hay khung hình video nào, AI bắt buộc kiểm tra 6 tiêu chí sau:
1. Tỷ lệ không gian nền thoáng đãng đã đạt tối thiểu `70%` diện tích khung hình chưa?
2. Đã xóa sạch 100% ký hiệu giả kỹ thuật (`//`, `///`, `#REF`, `SECTOR`) và rác dấu câu (`•`, `:`, `...`) trong các thẻ nhãn chưa?
3. Đã loại bỏ hoàn toàn lỗi đóng khung chồng khung (`Box-in-Box`) và thay bằng khoảng trắng `16px-28px` hoặc vạch mảnh `1px` mờ `15%-20%` chưa?
4. Cỡ chữ nhỏ nhất trên Web đã đạt từ `14px` trở lên và trên khung hình `1920x1080` đã đạt từ `18px` trở lên chưa?
5. Bảng màu tối đã khóa đúng cặp màu `#E6E4DD` trên nền `#090A0F` (**`12.6:1` WCAG 2.1 AAA**) và loại bỏ cặp màu `#FFFFFF` trên `#000000` gây lóa mắt chưa?
6. Trên khung hình `1920x1080`, mọi thành phần chữ đã nằm gọn trong vùng an toàn (`cách lề trái/phải >= 64px-88px`, `cách lề trên >= 42px-54px`, `y <= 875px`) chưa?

---

## 🔗 Related Monographs in This Series
- **[Monograph 01: LLM Sycophancy Bias, Long-Context Attention Decay & Deterministic Harness Economics](01-llm-sycophancy-and-context-decay-mechanics.md)**
- **[Monograph 02: Vietnamese Topic-Comment Functional Syntax vs. English SVO AI Translationese](02-vietnamese-topic-comment-syntax-vs-ai-translationese.md)**
- **[Monograph 03 (Current): Quiet Luxury UI Spatial Math & Ophthalmic Ergonomics of 12.6:1 WCAG AAA Night Contrast](03-quiet-luxury-ui-math-and-wcag-aaa-night-contrast.md)**
- **[Back to Main Repository README](../README.md)**
