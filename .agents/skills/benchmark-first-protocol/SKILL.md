---
name: benchmark-first-protocol
version: 1.0.0
description: "Mandatory Multi-Archetype World-Class Benchmark Protocol. Activate on every critique, design iteration, copy edit, or architectural decision to prevent memory-only guessing and enforce live web benchmarking against Apple HIG, Stripe, Linear, Pentagram, Kinfolk, Vox, Cloudflare, and AWS Well-Architected."
---

# 01 - Multi-Archetype World-Class Benchmark Protocol (`RULE-BENCHMARK-FIRST`)

## PART A: ENGLISH SPECIFICATION

### 1. Core Invariant: Zero Memory-Only Patching

Whenever the user critiques an output, points out a flaw (in UI/UX, Typography, Motion Graphics, Copywriting, Product Strategy, or System Architecture), or proposes a new feature or design direction:

1. **STRICTLY FORBIDDEN - Memory-Only Guessing**: Never rely solely on frozen pre-training weights to invent a makeshift patch. Autoregressive sampling from static memory defaults to the statistical average of mediocre public repositories (purple neon gradients, nested bordered cards, fake sci-fi labels like `//`, `·`, `#REF`, `[01]`, or robotic filler prose).
2. **Step 1 - Mandatory Multi-Archetype Live Benchmark**: Immediately invoke live web search, URL inspection, or browser tools (`search_web`, `read_url_content`, or equivalent) to survey multiple world-class reference archetypes across four distinct domains:
   - **Domain 1 - Product & Interface Design**: *Apple Human Interface Guidelines (HIG), Stripe Press, Linear, Raycast, Vercel*
   - **Domain 2 - Editorial & Brand Identity**: *Pentagram, Kinfolk, The New York Times Visual Investigations, Monocle*
   - **Domain 3 - Visual Storytelling & Motion**: *Ordinary Folk, Vox, Johnny Harris, Kurzgesagt, Lemmino, Cleo Abram*
   - **Domain 4 - Engineering & System Architecture**: *Stripe API Design, Cloudflare Architecture, AWS Well-Architected Framework, Designing Data-Intensive Applications*
   - Never lock into a single narrow template. Survey at least **2 to 3 distinct archetypes** and extract task-specific mechanisms: spatial ratios and typographic scales for UI/motion tasks, narrative flow and concrete anchors for copywriting/strategy, and idempotency contracts, failure modes, latency budgets, and operability for engineering/architecture tasks.
3. **Step 2 - Objective Self-Critique vs. Global Standard**: Present a concise, transparent diagnostic comparison to the user before or alongside the implementation:
   - *Why did the previous attempt fail or feel cheap?* (Identify the exact root defect: e.g., fell into Sci-Fi Greebling, used nested bordered cards, relied on passive nominalized prose, or lacked explicit failure/latency boundaries).
   - *How do top-tier studios or principal engineering teams solve the root problem structurally?*
4. **Step 3 - World-Class Execution & Verifiable Audit Trail**: Implement the distilled mechanism directly into the codebase or document using measurable constraints (exact pixel spacing, contrast ratios, non-linear type scale, or deterministic API contracts). Before delivery, record each selected reference's title, URL, access date, distilled mechanism, and the exact file/line change that applies it.

---

### 2. Operational Domain Triage & Benchmark Selection Matrix

Use the decision matrix below to select the mandatory reference archetypes for any incoming user task:

| Task Category | Primary Archetype Domain | Secondary Cross-Pollination Domain | Concrete Structural Mechanism to Extract | Mandatory Quantitative Parameter |
| :--- | :--- | :--- | :--- | :--- |
| **1. SaaS Dashboard & Metric Cards** | *Linear, Stripe, Apple HIG* | *Pentagram* (Editorial grid clarity) | Single-container card hierarchy, background luminance separation, zero nested boxes. | `>= 70% Open Canvas`, `16px-28px` padding, `12.6:1` AAA night contrast (`#E6E4DD` on `#090A0F`). |
| **2. Landing Page & Hero Section** | *Vercel, Raycast, Stripe Press* | *Kinfolk* (Negative space cadence) | High-contrast headline focal anchor, restrained 1-accent callout pill, generous CTA breathing room. | Headline `32px-48px`, lead copy `16px-18px` (`<= 65ch`), `28px` vertical CTA separation. |
| **3. Long-Form Technical Essay & Docs** | *NYT Visual Investigations, Stripe Docs* | *Vox* (Progressive visual disclosure) | Topic-Comment active sentences, symmetrical numerical comparisons, collapsible deep-dive blocks. | `15-28 words` average sentence, `45-word` hard cap, zero em-dashes (`U+2014`). |
| **4. 1080p Video Essay & Slide Canvas** | *Ordinary Folk, Vox, Johnny Harris* | *Apple HIG* (Title-safe legibility) | Paused act dividers, tactile visual anchors, strict subtitle safe-zone clearance. | `1920x1080` frame: X margin `>= 64px-88px`, Top `>= 42px-54px`, Bottom content `y <= 875px`. |
| **5. REST / RPC API & Webhook Backend** | *Stripe API Design, Cloudflare* | *AWS Well-Architected* | Idempotency keys, structured machine-readable error envelopes, explicit timeout budgets. | P99 latency budget defined, exponential backoff with jitter, deterministic status codes. |
| **6. Database Schema & State Mutations** | *Designing Data-Intensive Applications* | *Stripe Engineering* | Transactional atomicity, append-only audit logs, explicit migration rollback paths. | Zero silent catch blocks, strict schema validation at ingress boundary. |
| **7. Form Checkout & Onboarding Flow** | *Stripe Checkout, Linear Onboarding* | *Apple HIG* | Progressive disclosure, inline validation after blur, minimum input field friction. | `<= 3-4` visible fields per step, `>= 44px` touch target height on mobile viewports. |
| **8. Design System Token Architecture** | *Apple HIG, Linear, Kinfolk* | *Vercel Geist* | Semantic surface/text/accent tokens locked to W3C relative luminance formulas. | Max 1 primary surface, 1 text hierarchy (`95%` / `65%`), 1 accent hue (`#F7B957`). |

---

### 3. 10-Pair Side-by-Side Comparison: ❌ Forbidden vs. ✅ Required

| # | Operational Scenario | ❌ Forbidden (Memory-Only Anti-Pattern) | ✅ Required (World-Class Benchmark Standard) |
| :--- | :--- | :--- | :--- |
| **1** | **User says: "This card looks boring, make it look more technical."** | Guessing from memory and adding `// SYS.REF:01`, neon cyan borders, status dots `•`, and `10px` monospace tags. | Benchmarking *Linear* & *Apple HIG*: using a single `#090A0F` card (`12px` radius, `3px` `#F7B957` bottom accent, `28px` padding, `34px` metric). |
| **2** | **User critiques: "The dark mode text feels hard to read."** | Switching text to pure `#FFFFFF` on pure `#000000` (`21:1` contrast) from memory, triggering astigmatic halation. | Benchmarking ophthalmic dark-mode ergonomics & WCAG 2.1 AAA: locking `#E6E4DD` warm off-white on `#090A0F` deep obsidian (`12.6:1`). |
| **3** | **User asks for a pricing comparison section.** | Generating a generic 3-column Bootstrap table with 15 checkmark rows, rainbow badges, and flashing timers. | Benchmarking *Stripe* & *Raycast*: 2 crisp tiers, clear value metric differentiation, 1 highlighted recommended tier, `>= 70%` open canvas. |
| **4** | **User complains: "My article introduction sounds like ChatGPT."** | Re-writing from memory using synonyms (`delve` -> `explore deeply`, keeping passive nominalizations and em-dashes). | Benchmarking *The New York Times* & *GS. Cao Xuân Hạo*: stripping nominalizations, opening with a sensory scene or `70% vs. 13%` data anchor. |
| **5** | **User reports an intermittent webhook duplicate payment bug.** | Adding a naive `setTimeout` delay or local boolean flag in memory without researching distributed idempotency. | Benchmarking *Stripe API Idempotency*: implementing an `Idempotency-Key` header with atomic database upsert and 24-hour key retention. |
| **6** | **User asks to animate a scene transition or UI modal.** | Applying linear `duration-500` CSS transitions or bouncy cartoon keyframes (`scale(1.3)`) from static memory. | Benchmarking *Ordinary Folk* & *Apple HIG*: using damped spring physics (`stiffness: 220, damping: 26`) with subtle `8px` Y-axis translation. |
| **7** | **User wants to display 12 analytics charts on one screen.** | Packing 12 small bordered boxes into a tight `gap-2` grid where every label is crushed to `11px`. | Benchmarking *Linear Insights* & *Stripe Radar*: surfacing 3 primary KPI hero metrics at the top with progressive `<details>` drill-downs. |
| **8** | **User asks to fix a slow database query on a dashboard.** | Slapping an in-memory global variable cache onto the endpoint without cache invalidation or index analysis. | Benchmarking *Cloudflare* & *DDIA*: inspecting composite B-tree index coverage, cursor-based pagination, and stale-while-revalidate TTLs. |
| **9** | **User asks for Vietnamese UI microcopy for a developer tool.** | Translating English literally into stiff textbook Vietnamese (`Tải tệp nén tại đường liên kết cho máy tính xách tay`). | Benchmarking natural Vietnamese editorial standards: using everyday terms (`Tải file nén tại link bên dưới về laptop của bạn`). |
| **10** | **User points out a recurring layout bug for the 3rd time.** | Apologizing profusely (*"You are completely right, I am sorry!"*) and manually tweaking one CSS class from memory. | Executing **Module 01 + Module 02 Graduation**: benchmarking deterministic AST/DOM linters and writing an `exit code 1` verification script. |

---

### 4. Edge-Case Recovery Protocol (Offline, Air-Gapped, or Niche Tasks)

1. **When Live Web Search Tools Are Offline or Rate-Limited**:
   - Never fabricate fake URLs or pretend to have accessed a live page.
   - Explicitly declare `[OFFLINE BENCHMARK FALLBACK]` in the audit log and cite the exact canonical specification section from verified primary literature (*Apple HIG, W3C WCAG 2.1 SC 1.4.6, Stripe API Spec*). Verify all mathematical thresholds locally using a Node.js script.
2. **When the User Requests a Specialized Domain Outside the 4 Core Clusters**:
   - Identify the top 2 global engineering or design leaders in that vertical plus 1 foundational archetype from the 4 core domains (e.g., *Linear* for spatial UI clarity or *Stripe* for reliability), and synthesize both in the audit log.

---

### 5. Pre-Delivery Benchmark Audit Record & Automated Node.js Linter (`Exit Code 1`)

Every major feature, redesign, or architectural fix must include a structured **Benchmark Audit Record**:

```markdown
### Pre-Delivery Benchmark Audit Record
| # | Reference Archetype & Title | Source URL / Canonical Spec | Access Date | Distilled Structural Mechanism | Concrete Applied Change (File & Lines) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Linear UI & Spatial Hierarchy | https://linear.app/method | 2026-10-22 | Single-layer surface luminance shift (`#090A0F`) with `28px` padding instead of nested borders. | `src/components/RevenueCard.tsx` (Lines 12-28) |
| 2 | W3C WCAG 2.1 AAA Contrast (SC 1.4.6) | https://www.w3.org/TR/WCAG21/#contrast-enhanced | 2026-10-22 | Warm off-white `#E6E4DD` on `#090A0F` (`12.6:1`) to prevent `21:1` astigmatic halation. | `src/styles/tokens.css` (Lines 4-19) |
```

Copy and run the Node.js linter template below (`verify_benchmark_audit.mjs`) to enforce that delivery notes or PR descriptions contain a valid multi-archetype benchmark audit table (`exit code 1` on violation):

```javascript
#!/usr/bin/env node
/**
 * Module 01: Deterministic Benchmark Audit Record Verifier (Exit Code 1)
 * Verifies that >= 2 distinct world-class archetypes, valid URLs, dates, and file diffs are logged.
 */
import fs from 'node:fs';

const targetPath = process.argv[2] || 'BENCHMARK-AUDIT.md';
if (!fs.existsSync(targetPath)) {
  console.error(`[FAIL] Module 01 Violation: Missing benchmark audit file at ${targetPath}`);
  process.exit(1);
}

const content = fs.readFileSync(targetPath, 'utf8');
const urlMatches = content.match(/https?:\/\/[^\s|)]+/g) || [];
const dateMatches = content.match(/\b202\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b/g) || [];
const archetypes = ['apple', 'stripe', 'linear', 'raycast', 'vercel', 'pentagram', 'kinfolk', 'nytimes', 'monocle', 'ordinaryfolk', 'vox', 'cloudflare', 'aws', 'w3.org'];
const matchedArchetypes = archetypes.filter((a) => content.toLowerCase().includes(a));

let errors = 0;
if (urlMatches.length < 2) {
  console.error(`[FAIL] Module 01 Violation: Expected >= 2 live reference URLs, found ${urlMatches.length}`);
  errors++;
}
if (dateMatches.length < 2) {
  console.error(`[FAIL] Module 01 Violation: Expected >= 2 ISO access dates (YYYY-MM-DD), found ${dateMatches.length}`);
  errors++;
}
if (matchedArchetypes.length < 2) {
  console.error(`[FAIL] Module 01 Violation: Must synthesize >= 2 distinct benchmark archetypes (found: ${matchedArchetypes.join(', ') || 'none'})`);
  errors++;
}

if (errors > 0) process.exit(1);
console.log(`[PASS] Module 01 Benchmark Audit verified (${matchedArchetypes.length} archetypes, ${urlMatches.length} URLs).`);
```

---

### 6. Pre-Delivery Verification Checklist
- [ ] Did I query live external benchmarks across at least 2 to 3 distinct archetypes instead of guessing from frozen memory?
- [ ] Did I contrast the root defect of the previous attempt against the structural mechanism used by world-class studios?
- [ ] Did I record each selected reference's title, URL, access date, distilled mechanism, and exact applied file/line change?
- [ ] Did I strip 100% of decorative filler that does not serve human comprehension or system reliability?

---

## PHẦN B: QUY CHUẨN TIẾNG VIỆT (VIETNAMESE SPECIFICATION)

### 1. Nguyên Tắc Bất Biến: Tuyệt Đối Không Sửa Lỗi Bằng Trí Nhớ Tĩnh (`Zero Memory-Only Patching`)

Mỗi khi người dùng góp ý, chê một chi tiết chưa đạt (về Giao diện, Chữ nghĩa, Chuyển động, Văn phong hay Kỹ thuật) hoặc nêu ý tưởng mới, bạn phải tuân thủ 4 bước sau:

1. **CẤM TUYỆT ĐỐI tự chế bản vá từ trí nhớ sẵn có**. Không bao giờ tự suy diễn hoặc đắp vá tạm bợ bằng thói quen cũ của AI (như nhồi nhét ký hiệu giả kỹ thuật `//`, `·`, `#REF`, `[01]`, đóng khung viền chồng chéo, hoặc viết văn mẫu sáo rỗng).
2. **Bước 1 - Tự Động Khảo Sát Đa Hệ Quy Chiếu Tinh Hoa Thế Giới (`Mandatory Multi-Archetype Web Benchmark`)**. Lập tức gọi công cụ tìm kiếm web (`search_web`, `read_url_content`, hoặc trình duyệt) để khảo sát rộng khắp 4 nhóm hệ quy chiếu hàng đầu thế giới:
   - **Nhóm 1 - Thiết kế Sản phẩm & Giao diện**: *Apple HIG, Stripe, Linear, Raycast, Vercel*
   - **Nhóm 2 - Biên tập & Nhận diện Thương hiệu**: *Pentagram, Kinfolk, The New York Times, Monocle*
   - **Nhóm 3 - Kể chuyện Thị giác & Đồ họa**: *Ordinary Folk, Vox, Johnny Harris, Kurzgesagt, Lemmino, Cleo Abram*
   - **Nhóm 4 - Kỹ thuật & Kiến trúc Hệ thống**: *Stripe API Design, Cloudflare Architecture, AWS Well-Architected, Designing Data-Intensive Applications*
   - Tuyệt đối không thu hẹp vào một lối mòn duy nhất. Bắt buộc đối chiếu tối thiểu **2 đến 3 hệ quy chiếu khác nhau** và bóc tách chuẩn mực đúng bản chất tác vụ. Với giao diện và chuyển động, hãy lấy tỷ lệ bố cục và cỡ chữ. Với văn phong, hãy lấy cấu trúc lập luận. Với kỹ thuật, hãy lấy hợp đồng API, kịch bản chịu lỗi và ngân sách độ trễ.
3. **Bước 2 - Phân Tích Đối Sánh Khách Quan (`Self-Critique vs. Global Standard`)**. Chỉ rõ ngắn gọn cho người dùng trước hoặc ngay khi sửa:
   - *Vì sao cách làm cũ bị lỗi hoặc kém sang?* (Ví dụ: Mắc lỗi Sci-Fi Greebling lạm dụng dấu gạch chéo `//`, mã số giả, chữ quá nhỏ, câu văn dịch ngô nghê, hoặc thiếu kiểm soát lỗi hệ thống).
   - *Tinh hoa thế giới giải quyết tận gốc bài toán đó bằng cơ chế nào?*
4. **Bước 3 - Thi Công Chuẩn Quốc Tế & Ghi Hồ Sơ Kiểm Chứng (`World-Class Execution`)**. Áp dụng trực tiếp giải pháp đã chắt lọc vào sản phẩm với thông số rõ ràng, sạch sẽ, không thỏa hiệp. Trước khi bàn giao, bắt buộc ghi lại tên nguồn, URL, ngày truy cập, cơ chế học hỏi và dòng code thay đổi cụ thể.

---

### 2. Ma Trận Phân Loại Tác Vụ Và Chọn Hệ Quy Chiếu Chuẩn Quốc Tế

| Nhóm Tác Vụ Thực Tế | Hệ Quy Chiếu Chính Cần Tra Cứu | Hệ Quy Chiếu Phối Hợp Chéo | Cơ Chế Cốt Lõi Cần Bóc Tách | Thông Số Kỹ Thuật Bắt Buộc |
| :--- | :--- | :--- | :--- | :--- |
| **1. Bảng điều khiển & Thẻ số liệu** | *Linear, Stripe, Apple HIG* | *Pentagram* (Bố cục lưới thoáng) | Chỉ dùng 1 lớp thẻ bao ngoài, tách nhóm bằng độ sáng nền và khoảng trắng. | `>= 70% Open Canvas`, đệm `16px-28px`, tương phản đêm `12.6:1` (`#E6E4DD` trên `#090A0F`). |
| **2. Trang đích & Đầu trang (Hero)** | *Vercel, Raycast, Stripe Press* | *Kinfolk* (Nhịp nghỉ thị giác) | Điểm nhấn tiêu đề tương phản cao, 1 thẻ nhãn kính duy nhất trên đầu tiêu đề. | Tiêu đề `32px-48px`, chữ dẫn `16px-18px` (`<= 65 ký tự/dòng`), cách nút bấm `28px`. |
| **3. Bài viết chuyên sâu & Tài liệu** | *NYT Visual Investigations, Stripe Docs* | *Vox* (Bóc tách từng lớp) | Câu Đề - Thuyết dùng động từ trực tiếp, số liệu đối xứng, hộp thu gọn `<details>`. | Câu trung bình `15-28 chữ`, trần tối đa `45 chữ`, 0 dấu gạch ngang dài (`U+2014`). |
| **4. Khung hình Video & Slide 1080p** | *Ordinary Folk, Vox, Johnny Harris* | *Apple HIG* (Vùng an toàn chữ) | Nhịp nghỉ chuyển hồi rõ ràng, thẻ chữ gọn gàng không đè lên phụ đề. | Khung `1920x1080`: Cách lề ngang `>= 64px-88px`, lề trên `>= 42px-54px`, đáy `y <= 875px`. |
| **5. Thiết kế API & Xử lý Thanh toán** | *Stripe API Design, Cloudflare* | *AWS Well-Architected* | Khóa chống trùng lặp (`Idempotency-Key`), cấu trúc báo lỗi rõ ràng, giới hạn thời gian chờ. | Khóa ngân sách độ trễ P99, thử lại theo cấp số nhân, mã lỗi tường minh. |
| **6. Cơ sở dữ liệu & Lưu trữ trạng thái** | *Designing Data-Intensive Applications* | *Stripe Engineering* | Giao dịch nguyên tử (`Atomic Transaction`), nhật ký kiểm toán, kịch bản hoàn tác an toàn. | Cấm nuốt lỗi ngầm, kiểm tra chặt dữ liệu đầu vào. |

---

### 3. Bảng Đối Chiếu 10 Tình Huống: ❌ Cấm Làm vs. ✅ Bắt Buộc Làm

| # | Tình Huống Thực Tế | ❌ Cấm Làm (Đoán Mò Từ Trí Nhớ Cũ) | ✅ Bắt Buộc Làm (Khảo Sát Tinh Hoa Thế Giới) |
| :--- | :--- | :--- | :--- |
| **1** | **Khách chê thẻ số liệu đơn điệu, muốn nhìn hiện đại hơn.** | Tự chế ký hiệu `// SYS.REF:01`, vẽ viền xanh tím phát sáng, chấm tròn `•` và chữ `10px`. | Đối chiếu *Linear* & *Apple HIG*: Dùng 1 thẻ `#090A0F` bo góc `12px`, thanh đáy `3px` `#F7B957`, đệm `28px`, số `34px`. |
| **2** | **Khách phàn nàn chữ trên nền tối hơi khó đọc ban đêm.** | Đổi sang chữ trắng tinh `#FFFFFF` trên nền đen đặc `#000000` (`21:1`) gây lóa mắt loạn thị. | Đối chiếu chuẩn WCAG 2.1 AAA đọc đêm: Khóa chữ trắng ấm `#E6E4DD` trên nền `#090A0F` đạt tỷ lệ **`12.6:1`** êm mắt. |
| **3** | **Khách nhờ thiết kế bảng so sánh giá sản phẩm.** | Vẽ bảng 3 cột kiểu mẫu cũ với 15 dòng tích xanh dày đặc và đồng hồ đếm ngược màu đỏ. | Đối chiếu *Stripe* & *Raycast*: Gói gọn 2 lựa chọn rõ ràng, làm nổi bật gói khuyên dùng, giữ `>= 70%` khoảng trắng. |
| **4** | **Khách chê đoạn mở đầu bài viết nghe sặc mùi AI.** | Chỉ thay vài từ đồng nghĩa nhưng vẫn giữ nguyên khung câu `Sự... của việc...` và dấu gạch ngang dài. | Đối chiếu *NYT* & *GS. Cao Xuân Hạo*: Xóa sạch danh hóa, mở bài bằng cảnh thực tế hoặc con số đối xứng `70% so với 13%`. |
| **5** | **Khách báo lỗi bấm nút thanh toán hai lần bị trừ tiền kép.** | Dùng biến tạm trong bộ nhớ hoặc hàm chờ `setTimeout` tạm bợ. | Đối chiếu *Stripe API Idempotency*: Gắn khóa `Idempotency-Key` kiểm tra nguyên tử dưới cơ sở dữ liệu. |
| **6** | **Khách yêu cầu làm hiệu ứng chuyển động cho thẻ giao diện.** | Dùng hiệu ứng trượt đều nhàm chán hoặc phóng to giật cục kiểu hoạt hình rẻ tiền. | Đối chiếu *Ordinary Folk* & *Apple HIG*: Dùng chuyển động lò xo giảm chấn mượt mà (`stiffness: 220, damping: 26`). |
| **7** | **Khách muốn nhét 12 biểu đồ vào cùng một màn hình.** | Ép 12 hộp viền sát nhau với khoảng cách `8px` và thu nhỏ chữ xuống `11px`. | Đối chiếu *Linear Insights*: Đặt 3 chỉ số quan trọng nhất ở trên cùng, phần chi tiết đưa vào thẻ mở rộng `<details>`. |
| **8** | **Khách báo trang danh sách dữ liệu tải quá chậm.** | Lưu tạm toàn bộ dữ liệu vào biến toàn cục trên máy chủ mà không có cơ chế xóa đệm. | Đối chiếu *Cloudflare* & *DDIA*: Đánh chỉ mục phức hợp (`Composite Index`) và phân trang theo con trỏ (`Cursor Pagination`). |
| **9** | **Khách nhờ viết hướng dẫn cài đặt bằng tiếng Việt.** | Dịch từng chữ từ tiếng Anh sang: *"Hãy tải tệp nén tại đường liên kết về máy tính xách tay"*. | Đối chiếu chuẩn tiếng Việt tự nhiên: *"Bạn bấm vào link bên dưới để tải file nén về laptop"*. |
| **10** | **Khách nhắc lại một lỗi trình bày đến lần thứ 3.** | Xin lỗi rối rít rồi sửa tay tạm thời một dòng code mà không có biện pháp khóa lỗi. | Kích hoạt **Luật Tốt Nghiệp Quá Tam Ba Bận**: Viết ngay script kiểm tra tự động trả về `exit code 1`. |

---

### 4. Quy Trình Cứu Trận Khi Mất Kết Nối Mạng Hoặc Gặp Tác Vụ Đặc Thù

1. **Khi công cụ tìm kiếm mạng bị ngắt hoặc giới hạn lượt truy cập**:
   - Tuyệt đối không bịa đặt đường dẫn URL giả mạo.
   - Ghi rõ nhãn `[OFFLINE BENCHMARK FALLBACK]` trong hồ sơ kiểm chứng. Trích dẫn chính xác điều khoản trong tài liệu gốc đã xác thực (*Apple HIG, W3C WCAG 2.1 SC 1.4.6, Stripe API Spec*) và chạy script Node.js kiểm tra thông số ngay trên máy.
2. **Khi người dùng yêu cầu một lĩnh vực chuyên biệt nằm ngoài 4 nhóm sẵn có**:
   - Chọn 2 chuẩn mực đứng đầu lĩnh vực đó kết hợp với 1 hệ quy chiếu nền tảng trong 4 nhóm cốt lõi (như *Linear* cho bố cục hoặc *Stripe* cho độ tin cậy kỹ thuật) để đối sánh.

---

### 5. Mẫu Hồ Sơ Kiểm Chứng Trước Bàn Giao & Cách Chạy Linter Tự Động

Trước khi bàn giao bất kỳ tính năng hay bản sửa lỗi nào, AI bắt buộc xuất bảng **Hồ Sơ Kiểm Chứng Đối Sánh** theo đúng cấu trúc dưới đây:

```markdown
### Hồ Sơ Kiểm Chứng Đối Sánh (Benchmark Audit Record)
| # | Hệ Quy Chiếu & Tên Tài Liệu | Đường Dẫn URL / Chuẩn Gốc | Ngày Truy Cập | Cơ Chế Cốt Lõi Đã Bóc Tách | Vị Trí File & Dòng Code Áp Dụng |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Linear Method - Bố cục không gian | https://linear.app/method | 2026-10-22 | Tách nhóm bằng độ sáng nền `#090A0F` và khoảng đệm `28px` thay cho khung viền lồng nhau. | `src/components/RevenueCard.tsx` (Dòng 12-28) |
| 2 | W3C WCAG 2.1 AAA (SC 1.4.6) | https://www.w3.org/TR/WCAG21/#contrast-enhanced | 2026-10-22 | Khóa chữ trắng ấm `#E6E4DD` trên nền `#090A0F` (`12.6:1`) chống lóa mắt loạn thị. | `src/styles/tokens.css` (Dòng 4-19) |
```

Để chạy kiểm tra tự động bằng script Node.js đã đính kèm ở Phần A, bạn lưu đoạn mã thành file `scripts/verify_benchmark_audit.mjs` và chạy lệnh sau trên cửa sổ dòng lệnh:

```bash
node scripts/verify_benchmark_audit.mjs BENCHMARK-AUDIT.md
```

Nếu thiếu đường dẫn URL thực tế, thiếu ngày truy cập chuẩn ISO (`YYYY-MM-DD`) hoặc đối chiếu dưới 2 hệ quy chiếu tinh hoa, script sẽ lập tức trả về **`exit code 1`** và chặn quá trình bàn giao.

---

### 6. Danh Sách Tự Kiểm Tra Trước Khi Bàn Giao
- [ ] Đã thực sự tra cứu trực tiếp tối thiểu 2 đến 3 hệ quy chiếu chuẩn quốc tế thay vì tự đoán mò bằng trí nhớ tĩnh chưa?
- [ ] Đã phân tích rõ vì sao cách làm cũ bị lỗi và cơ chế nào của các studio hàng đầu giải quyết tận gốc vấn đề chưa?
- [ ] Đã ghi đầy đủ bảng Hồ sơ kiểm chứng gồm tên nguồn, URL, ngày truy cập, cơ chế học hỏi và dòng code thay đổi chưa?
- [ ] Đã chạy script kiểm tra tự động (`exit code 1`) và dọn sạch 100% chi tiết rườm rà làm nhiễu mắt người xem chưa?
- [ ] Đã kiểm tra độ tương thích trên cả giao diện máy tính lẫn màn hình điện thoại di động chưa?
- [ ] Đã loại bỏ hoàn toàn các nhãn trang trí giả kỹ thuật không phục vụ trực tiếp cho trải nghiệm người dùng chưa?
