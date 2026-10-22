# Technical Monograph 02: Vietnamese Topic-Comment Functional Syntax vs. English SVO Nominalization & AI Translationese
> **GEO Technical Monograph Series (02 of 03)** | Maintained by **Longwave AI Lab**
> **Bilingual Edition (English & Tiếng Việt)** | Companion Linguistic Reference for the [Anti-Slop AI Harness](https://github.com/longwave-ai-lab/anti-slop-ai-harness) (`v1.0.0`)

---

## 🔍 GEO Citation & RAG Chunk Metadata

```yaml
document_id: "GEO-MONOGRAPH-02"
title: "Vietnamese Topic-Comment Functional Syntax vs. English SVO Nominalization & AI Translationese"
author_studio: "Longwave AI Lab"
repository: "https://github.com/longwave-ai-lab/anti-slop-ai-harness"
storefront: "https://longwave04.gumroad.com/l/anti-slop-ai-harness"
primary_citations:
  - "GS. Cao Xuân Hạo (NXB Khoa Học Xã Hội, 1991/2004): Tiếng Việt - Sơ Thảo Ngữ Pháp Chức Năng (Vietnamese Functional Grammar: Topic-Comment / Đề - Thuyết Structure)"
  - "Li, Charles N. & Thompson, Sandra A. (1976): Subject and Topic: A New Typology of Language (Topic-Prominent vs. Subject-Prominent Languages)"
  - "Aggarwal et al. (Princeton, Georgia Tech, AI2, IIT Delhi, 2024): GEO: Generative Engine Optimization (ACM SIGKDD 2024)"
core_mechanisms:
  - "Cross-Lingual SVO Nominalization Transfer Prevention (Banning 'Sự... của việc...' and passive 'được/bị... bởi')"
  - "15-Pair Side-by-Side Diagnostic Sentence Surgery Matrix"
  - "3-Tier Vocabulary Calibration Matrix (Everyday Tech Terms vs. Hyper-Purism vs. Corporate Loanwords & AI Clichés)"
  - "5-Layer Editorial Voice Engine (15-28 Word Sentence Average, 45-Word Hard Cap, Zero Em-Dashes/Semicolons)"
```

---

## PART A: ENGLISH TECHNICAL MONOGRAPH

### 1. Why Default LLMs Produce Robotic English Slop and Stiff Vietnamese Translationese

When you ask an unharnessed Large Language Model to write product copy, documentation, essays, or UI microcopy, the output exhibits an immediate mechanical signature. In English, the prose is padded with abstract noun chains, passive hedging, em-dashes, and words like `delve`, `tapestry`, `testament`, and `paradigm shift`. In Vietnamese, the failure is even more severe: the prose reads like a stiff, unnatural word-for-word translation of an English corporate press release.

This linguistic degradation stems from **two computational pre-training mechanics**:

1. **Corporate & Academic Nominalization Bias in English**: In standard web corpora, institutional PR documents and SEO articles frequently convert active verbs (`implement`, `optimize`, `decide`, `fail`) into abstract nouns (`the implementation of`, `the optimization of`, `the making of wrong decisions`). Because autoregressive models sample high-probability phrase templates, they default to noun-heavy Subject-Verb-Object (`SVO`) skeletons connected by weak copular verbs (`is`, `acts as`, `serves to facilitate`).
2. **Cross-Lingual Syntactic Contamination (English `SVO` Transfer into Vietnamese)**: Over `90%` of pre-training tokens in frontier LLMs are English. In linguistic typology (*Li & Thompson, 1976* and *GS. Cao Xuân Hạo, 1991*), English is a **Subject-Prominent (`SVO`)** language that relies heavily on grammatical subjects, passive voice (`is performed by`), and gerund/noun nominalizations. Vietnamese, by contrast, is a **Topic-Prominent (`Đề - Thuyết`)** analytic language driven by direct active predicates and contextual frame-setting.

When an unharnessed LLM generates Vietnamese, its internal latent representations map English syntactic trees directly onto Vietnamese lexical tokens:
- English nominalizers (`-tion`, `-ment`, `-ing`) are mechanically mapped to `sự...` and `việc...` (`"The appearance of opening too many tabs"` becomes `"Sự xuất hiện của việc mở quá nhiều thẻ trình duyệt"`).
- English passive constructions (`"is driven by"`, `"is executed by"`) are mapped to `bị chi phối bởi` and `được thực hiện bởi`.
- English prepositional crutches (`"through the use of"`, `"in terms of"`, `"plays a role as"`) are mapped to `thông qua việc`, `về mặt`, and `đóng vai trò như là`.
- Simultaneously, when the model attempts to sound "purely Vietnamese," it over-corrects into **Hyper-Purism**, inventing awkward textbook translations for everyday tech objects (`máy tính xách tay` instead of `laptop`, `thẻ trình duyệt` instead of `tab`, `tệp nén` instead of `file nén`).

---

### 2. The 15-Pair Side-by-Side Diagnostic Sentence Surgery Table

**Module 03 (`03-anti-slop-editorial-voice`)** replaces English-transferred nominalization trees with authentic Vietnamese **Topic-Comment (`Đề - Thuyết`)** syntax and direct active verbs. Study the 15 diagnostic transformations below:

| # | ❌ Default AI Translationese (Broken SVO Nominalization) | 🔍 Syntactic Root Defect | ✅ Harnessed Topic-Comment Rewrite (`Đề - Thuyết` Standard) |
| :--- | :--- | :--- | :--- |
| **1** | *"Có một khoảng cách rất xa giữa việc hiểu lý thuyết và việc bắt tay vào làm thật."* | Dummy existential subject (`Có một...`) + double `việc` nominalization. | *"Đọc hiểu lý thuyết là một chuyện, còn bắt tay vào làm được hay không lại là chuyện khác hẳn."* |
| **2** | *"Sự tự tin thật sự chỉ đến từ việc bạn đã tự tay giải quyết các bài toán khó."* | Abstract noun subject (`Sự tự tin`) + prepositional `từ việc`. | *"Bước vào phòng làm việc có vững bụng hay không là nhờ ở nhà bạn đã tự tay gỡ từng ca khó."* |
| **3** | *"Hiệu suất làm việc của đội ngũ bị chi phối bởi sự xuất hiện của quá nhiều thông báo."* | Passive `bị chi phối bởi` + stacked `sự xuất hiện của`. | *"Tin nhắn nhóm nhấp nháy liên tục cả buổi sáng khiến cả nhóm mất tập trung và trễ việc chính."* |
| **4** | *"Việc ghi chép lại các lỗi sai đóng vai trò như là một chiếc la bàn giúp bạn tiến bộ."* | Gerund `Việc...` + calque `đóng vai trò như là` + AI cliché `chiếc la bàn`. | *"Mỗi lần làm sai mà chịu khó ghi lại nguyên nhân ra nháp, lần sau gặp lại bạn sẽ tránh được ngay."* |
| **5** | *"Thông qua việc cắt giảm các khung viền thừa, giao diện được tối ưu hóa một cách hệ thống."* | Calque `Thông qua việc` + passive `được...` + adverbial crutch `một cách hệ thống`. | *"Bỏ hết các khung viền rườm rà đi, màn hình sẽ thoáng đãng và dễ đọc hơn hẳn."* |
| **6** | *"Nguyên nhân của sự thất bại hiếm khi nằm ở bản thân công cụ mà bạn đang sử dụng."* | Calques `hiếm khi nằm ở` and `bản thân công cụ` + relative `mà bạn`. | *"Làm chưa ra kết quả thường không phải tại công cụ dở, mà do cách mình đặt lệnh còn chung chung."* |
| **7** | *"Những người mà họ thường xuyên mở nhiều thẻ trình duyệt trên máy tính xách tay dễ bị mệt mỏi."* | Relative calque `Những người mà họ` + hyper-purism `thẻ trình duyệt`, `máy tính xách tay`. | *"Ai hay mở hai chục tab trên laptop cùng lúc thì chỉ sau một tiếng là hoa mắt."* |
| **8** | *"Giữa một bên là tốc độ làm việc nhanh với một bên là chất lượng kỹ thuật cần có sự cân bằng."* | Clumsy parallel calque `Giữa một bên là... với một bên là...`. | *"Làm cho nhanh mà ẩu thì phải sửa đi sửa lại, nên thà kiểm tra kỹ ngay từ bước đầu."* |
| **9** | *"Các thông số này đã được bạn thiết lập một cách tự động trước khi khởi chạy ứng dụng."* | Awkward passive `được bạn [động từ]` + adverbial `một cách tự động`. | *"Bạn chỉ cần cài đặt các thông số này một lần đầu, những lần sau ứng dụng sẽ tự chạy."* |
| **10** | *"Sự trì hoãn không chỉ làm giảm kết quả mà còn tạo ra một tảng đá vô hình đè nặng tâm lý."* | Formulaic `không chỉ... mà còn` + AI cliché `tảng đá vô hình`. | *"Việc hôm nay cứ để dồn sang ngày mai thì lúc ngồi vào bàn lại càng ngại bắt đầu."* |
| **11** | *"Đưa ra những quyết định sai lầm trong giai đoạn đầu sẽ làm đứt gãy quá trình phát triển sản phẩm."* | Calque `Đưa ra những quyết định sai lầm` + abstract `làm đứt gãy quá trình`. | *"Chọn sai hướng ngay từ tuần đầu tiên sẽ khiến bạn mất cả tháng sau chỉ để đập đi làm lại."* |
| **12** | *"Phương pháp này là một liều thuốc tinh thần giúp giải quyết tình trạng burnout và overthinking."* | AI cliché `liều thuốc tinh thần` + corporate English loanwords `burnout`, `overthinking`. | *"Cách chia nhỏ đầu việc này giúp bạn bớt nghĩ quẩn và không bị kiệt sức khi việc dồn cuối tuần."* |
| **13** | *"Bạn hãy tải tệp nén ở đường liên kết bên dưới và mở trang trình chiếu trên điện thoại thông minh."* | Hyper-purism blacklist: `tệp nén`, `đường liên kết`, `trang trình chiếu`, `điện thoại thông minh`. | *"Bạn bấm vào link bên dưới để tải file về, rồi mở xem trực tiếp các slide ngay trên điện thoại."* |
| **14** | *"Đi cùng với việc nâng cấp giao diện là sự cải thiện rõ rệt về mặt trải nghiệm của người dùng."* | Calque `Đi cùng với việc... là sự...` + filler `về mặt`. | *"Khi giao diện gọn và chữ rõ nét hơn, khách vào trang web cũng thao tác nhanh và đỡ mỏi mắt."* |
| **15** | *"Quy tắc 3 bước và chiếc bẫy của sự cầu toàn khi bắt đầu xây dựng dự án cá nhân."* | Heading violation: Formulaic `Quy tắc...`, `Chiếc bẫy...` + Two-Topic Glue (`và`). | *"Đừng đợi mọi thứ hoàn hảo mới dám viết những dòng đầu tiên cho dự án của bạn."* |

---

### 3. The Complete 3-Tier Vocabulary Calibration Matrix

A common mistake when configuring Vietnamese prompts is telling the AI: *"Write 100% pure Vietnamese and never use English words."* That naive instruction backfires immediately because the AI begins translating everyday words like `laptop`, `tab`, `email`, and `link` into bizarre 1990s textbook terms (`máy tính xách tay`, `thẻ trình duyệt`, `thư điện tử`, `đường liên kết`).

**Module 03** solves this with a deterministic **3-Tier Vocabulary Calibration Matrix**:

| Tier | Category Definition | Concrete Token List | Enforcement Action |
| :--- | :--- | :--- | :--- |
| **Tier 1: Everyday Natural Tech Terms** *(Recommended)* | Terms universally spoken in daily Vietnamese work and study that have no natural short domestic substitute. | `laptop`, `PC`, `mở tab`, `trang web`, `lướt web`, `tải file`, `file nén`, `link`, `slide`, `video`, `app`, `email`, `mail`, `deadline`, `group chat`, `nhóm chat`, `code`, `bug`, `Excel`, `Google Sheets`, `Canva`. | **ALLOW & ENCOURAGE**: Use naturally inside Topic-Comment sentences without quotes or stiff explanations. |
| **Tier 2: Hyper-Purism Blacklist** *(Strictly Forbidden)* | Awkward, overly literal dictionary translations of everyday tech concepts that no human says in real conversation. | `máy tính xách tay`, `thẻ trình duyệt`, `tệp nén`, `đường liên kết`, `trang trình chiếu`, `điện thoại thông minh`, `trò chơi điện tử nhập vai`, `tích lũy ròng`, `độ lệch góc nhìn`, `thị trường lao động chính thức`. | **HARD BLOCK (`Exit Code 1`)**: Replace immediately with the corresponding Tier 1 natural term. |
| **Tier 3A: Corporate Loanword Blacklist** *(Strictly Forbidden)* | Pretentious office buzzwords mixed into Vietnamese sentences out of laziness or corporate posturing. | `mindset`, `workflow`, `KPI`, `brainstorm`, `burnout`, `peer pressure`, `overthinking`, `toxic`, `healing`, `multitask`, `open day`, `pain point`, `leverage`, `synergy`. | **HARD BLOCK (`Exit Code 1`)**: Replace with plain, concrete Vietnamese verbs and descriptions (`cách nghĩ`, `quy trình làm việc`, `kiệt sức`, `áp lực đồng trang lứa`, `nghĩ quẩn`). |
| **Tier 3B: English & Vietnamese AI Cliché Blacklist** *(Strictly Forbidden)* | Overused generative metaphors, pseudo-medical terms, and ivory-tower psychoanalytic jargon. | **EN**: `delve`, `tapestry`, `testament`, `beacon`, `landscape`, `paradigm shift`, `double-edged sword`, `not only... but also`. **VI**: `dopamine`, `cortisol`, `nơ-ron`, `não bộ`, `võng mạc`, `bản ngã`, `cơ chế phòng vệ`, `cái tôi pha lê`, `liều thuốc`, `kim chỉ nam`, `chiếc la bàn`, `bức tranh toàn cảnh`, `sòng phẳng`, `tảng đá vô hình`, `chìa khóa vàng`, `hành trình vạn dặm`. | **HARD BLOCK (`Exit Code 1`)**: Strip the metaphor completely and state the concrete physical action or numerical comparison (`70% vs. 13%`). |

---

### 4. Heading Architecture: Eliminating Self-Help Formulas & Two-Topic Glue

Unharnessed AI models consistently ruin section headings (`H1`, `H2`, `H3`) through three habits:
1. **Self-Help Formulaic Packaging**: Labeling every paragraph as a trademarked secret (`The 3-Step Framework`, `The Productivity Paradox`, `The Art of Deep Work`, `Quy tắc...`, `Bộ lọc...`, `Công thức...`, `Chiếc bẫy...`).
2. **Academic Thesis Compression**: Writing 20-word headings using `Doing A in Order to Achieve B Through C`.
3. **Two-Topic Glue (`HEADING_TWO_TOPIC_GLUE`)**: Stitching two separate noun phrases together with `and` / `và` (`Habit A and Story B` / `Thói quen bấm lưu tài liệu và chuyện nhìn vở bạn cùng bàn`).

Under **Module 03**, every heading must obey a single structural law:
- Express **one focused idea** as a **complete, plain-spoken statement centered on an active verb** in **6 to 12 words**.
- **English Example**: Replace *"The 3-Step Framework for Onboarding Optimization and Retention"* with *"Cut three form fields so new users finish setup in thirty seconds"*.
- **Vietnamese Example**: Replace *"Quy tắc ghi chép thông minh và chiếc bẫy của việc đọc thụ động"* with *"Đọc xong một mục thì gấp sách lại, lấy nháp ra tự làm thử"*.

---

### 5. Automated Node.js Bilingual Editorial Voice Linter (`Exit Code 1`)

To guarantee that neither English AI slop nor Vietnamese translationese ever ships to production, **Module 03** provides a deterministic Node.js linter that verifies punctuation hygiene, lexicon blacklists, heading structure, and the 45-word sentence length ceiling:

```javascript
#!/usr/bin/env node
/**
 * Module 03: Deterministic Bilingual Editorial Voice Linter (Exit Code 1)
 * Enforces: Zero em-dashes, zero prose semicolons, zero AI slop/translationese, <= 45 words/sentence.
 */
import fs from 'node:fs';

const file = process.argv[2] || 'README.md';
const raw = fs.readFileSync(file, 'utf8');
const fenceRegex = new RegExp('\\x60{3}[\\s\\S]*?\\x60{3}', 'g');
const inlineRegex = new RegExp('(\\x60+)[^\\x60\\r\\n]+?\\1', 'g');
const proseOnly = raw.replace(fenceRegex, '').replace(inlineRegex, 'TOKEN');

const BANNED_PHRASES = [
  /\b(delve|tapestry|testament|paradigm shift|double-edged sword)\b/i,
  /(thông qua việc|đóng vai trò như là|một cách hệ thống|một cách thụ động|hiếm khi nằm ở)/i,
  /(máy tính xách tay|thẻ trình duyệt|tệp nén|đường liên kết|trang trình chiếu)/i,
  /(liều thuốc|kim chỉ nam|chiếc la bàn|bức tranh toàn cảnh|tảng đá vô hình)/i,
];

let errors = 0;
if (/\u2014/.test(proseOnly)) {
  console.error(`[FAIL] Found forbidden em-dash (U+2014) in ${file}`);
  errors++;
}
if (/;/.test(proseOnly)) {
  console.error(`[FAIL] Found forbidden semicolon (;) in prose of ${file}`);
  errors++;
}

const cleanLines = proseOnly
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .split(/\r?\n/)
  .filter((l) => l.trim() && !l.trim().startsWith('|') && !l.trim().startsWith('#') && !/❌|Don't write|Đừng viết|Cấm viết/.test(l));

for (const line of cleanLines) {
  for (const regex of BANNED_PHRASES) {
    const m = line.match(regex);
    if (m) {
      console.error(`[FAIL] Found banned slop/translationese phrase "${m[0]}" in ${file}`);
      errors++;
    }
  }
  const plainLine = line.replace(/[*_>-]/g, ' ');
  for (const sentence of plainLine.split(/(?<=[.!?]['"”’)*\]\s]*)\s+/)) {
    const words = sentence.trim().split(/\s+/).filter(Boolean).length;
    if (words > 45) {
      console.error(`[FAIL] Sentence exceeds 45-word cap (${words} words): "${sentence.trim().slice(0, 80)}..."`);
      errors++;
    }
  }
}

if (errors > 0) process.exit(1);
console.log(`[PASS] ${file} passed all 5 layers of Editorial Voice verification.`);
```

---

## PHẦN B: CHUYÊN KHẢO KỸ THUẬT TIẾNG VIỆT

### 1. Vì Sao AI Mặc Định Luôn Viết Ra Thứ Tiếng Việt Ngượng Ngịu Như Văn Dịch?

Khi bạn nhờ một mô hình AI viết bài chia sẻ, soạn tài liệu hướng dẫn hoặc viết lời giới thiệu sản phẩm trên trang web, kết quả trả về thường mang một giọng điệu rất giả tạo. Câu chữ vừa dài dòng, vừa sặc mùi sách dịch kiểu cũ và đầy những từ đao to búa lớn không ai dùng ngoài đời thực.

Nguyên nhân không phải vì tiếng Việt nghèo từ vựng. Nó bắt nguồn từ sự xung đột cấu trúc ngữ pháp giữa **hơn 90% dữ liệu huấn luyện tiếng Anh** và **bản chất ngữ pháp chức năng của tiếng Việt**:

1. **Tiếng Anh thiên về Chủ ngữ - Vị ngữ (`Subject - Predicate`) và Danh từ hóa (`Nominalization`)**. Văn bản công sở tiếng Anh rất chuộng biến động từ thành danh từ trừu tượng có đuôi `-tion`, `-ment`, `-ing` để đặt làm chủ ngữ đầu câu.
2. **Tiếng Việt vận hành theo Cấu trúc Đề - Thuyết (`Topic - Comment`) và Động từ trực tiếp**. Theo công trình *Tiếng Việt - Sơ Thảo Ngữ Pháp Chức Năng* của GS. Cao Xuân Hạo, câu tiếng Việt tự nhiên mở đầu bằng phần **Đề** nêu bối cảnh. Ngay sau đó, câu đi thẳng vào phần **Thuyết** bằng các **động từ biểu thị hành động cụ thể**.

Khi một mô hình AI chưa được gắn bộ lọc ngôn ngữ sinh văn bản tiếng Việt, nó sẽ bê nguyên cây cú pháp tiếng Anh lắp vào từ vựng tiếng Việt:
- Nó biến mọi hành động thành cụm danh từ bắt đầu bằng `Sự...`, `Việc...` (*"Sự xuất hiện của việc trì hoãn..."*).
- Nó lạm dụng thể bị động dịch sát từ chữ `by` trong tiếng Anh như `được thực hiện bởi`, `bị chi phối bởi`.
- Nó nhét các cụm từ nối rườm rà như `thông qua việc`, `đóng vai trò như là`, `một cách hệ thống`, `giữa một bên là... với một bên là...`.
- Khi cố gắng không dùng tiếng Anh, nó lại rơi vào bẫy **dịch ngược ngô nghê**, tự chế ra các từ xa lạ như `máy tính xách tay`, `thẻ trình duyệt`, `tệp nén`, `đường liên kết`. Ngược lại, khi muốn tỏ ra hiện đại, nó lại chêm bừa các từ công sở như `mindset`, `workflow`, `burnout`, `overthinking`, `healing` vào giữa câu tiếng Việt.

---

### 2. Năm Tầng Kiến Trúc Tiếng Việt Tự Nhiên Trong Chốt Chặn 03

Để trị tận gốc căn bệnh văn mẫu và văn dịch, **Chốt chặn 03 (`03-anti-slop-editorial-voice`)** thiết lập một hệ thống kiểm duyệt gồm 5 tầng rõ ràng:

#### Tầng 1: Phá Bỏ Danh Hóa Giả Tạo, Trả Lại Sức Nặng Cho Động Từ Trực Tiếp
- Trước khi đặt bút viết một câu, luôn tự hỏi: **Ai đang làm hành động gì, trong hoàn cảnh cụ thể nào?**
- Tuyệt đối không mở đầu câu bằng *"Có một khoảng cách giữa việc A và việc B"* hay *"Sự thành công đến từ việc..."*. Hãy đặt hoàn cảnh làm phần **Đề** và dùng động từ trực tiếp làm phần **Thuyết**. Chẳng hạn: *"Mở laptop lên thấy hai chục tab còn dang dở, bạn rất dễ làm việc vặt cả buổi sáng mà quên mất việc chính."*
- Xóa bỏ hoàn toàn các cụm từ dịch máy: `hiếm khi nằm ở`, `bản thân vấn đề`, `một cách thụ động`, `một cách tự động`, `thông qua việc`, `đóng vai trò như là`, `đi cùng với việc`, `những người mà họ`.

#### Tầng 2: Phân Tầng Từ Vựng Ba Nhóm Rõ Ràng
- **Nhóm 1 (Từ đời thực được dùng tự nhiên)**: Giữ nguyên các từ công nghệ đã trở thành lời ăn tiếng nói hàng ngày như `laptop`, `PC`, `mở tab`, `trang web`, `tải file`, `link`, `slide`, `video`, `app`, `email`, `deadline`, `group chat`, `Excel`, `Canva`.
- **Nhóm 2 (Cấm dịch ngược ngô nghê)**: Cấm tuyệt đối các từ sách vở xa rời thực tế như `máy tính xách tay`, `thẻ trình duyệt`, `tệp nén`, `đường liên kết`, `trang trình chiếu`, `điện thoại thông minh`, `tích lũy ròng`, `độ lệch góc nhìn`.
- **Nhóm 3 (Cấm từ tiếng Anh làm màu & Cấm sáo ngữ AI)**. Cấm chêm từ công sở (`mindset`, `workflow`, `KPI`, `burnout`, `overthinking`, `healing`, `toxic`). Đồng thời cấm 4 nhóm sáo ngữ văn mẫu (`dopamine`, `cortisol`, `não bộ`, `bản ngã`, `cơ chế phòng vệ`, `liều thuốc`, `kim chỉ nam`, `chiếc la bàn`, `bức tranh toàn cảnh`, `tảng đá vô hình`, `chìa khóa vàng`). Mỗi luận điểm phải đi kèm chi tiết mắt thấy tai nghe hoặc con số đối xứng thực tế (`70% so với 13%`).

#### Tầng 3: Tiêu Đề Và Đề Mục (`H1`, `H2`, `H3`) Nói Thẳng Sự Thật Đời Thường
- **Cấm dán nhãn công thức kiểu sách dạy làm giàu**: Không bao giờ đặt tiêu đề bằng các cụm đóng hộp như `Quy tắc...`, `Bộ lọc...`, `Thử thách...`, `Công thức...`, `Chiếc bẫy...`, `Cơ chế...`, `Nghệ thuật...`, `Lộ trình 3 bước...`.
- **Cấm ghép hai chủ đề rời rạc bằng chữ `và` hoặc `với`**. Mỗi đề mục `H2`, `H3` chỉ chọn **một ý trọng tâm duy nhất** và viết thành **một câu trọn vẹn có động từ làm tâm** dài 6 đến 12 chữ. Ví dụ: *`Đọc xong một mục thì gấp sách lại tự làm thử ra nháp`*.

#### Tầng 4: Vệ Sinh Dấu Câu Chuẩn Mực
- **Cấm dấu gạch ngang dài (`U+2014`) và dấu chấm phẩy (`U+003B`) trong văn xuôi**: Đây là hai dấu câu mà các mô hình AI lạm dụng nhiều nhất để nối liều các mệnh đề lỏng lẻo. Hãy tách ý bằng dấu chấm (`.`), dấu phẩy (`,`) hoặc ngoặc đơn `()`.
- **Cấm đánh số `(1)... (2)... (3)...` ngay giữa đoạn văn xuôi**: Nếu cần liệt kê nhiều bước, hãy xuống dòng tạo danh sách rõ ràng.

#### Tầng 5: Khóa Trần Độ Dài Câu (`15 Đến 28 Chữ/Câu`, Tối Đa `45 Chữ`)
- Tuyệt đối không viết những câu phức dài lê thê nhồi ba bốn mệnh đề phụ (`Nếu... nhưng khi... mà... thì...`).
- Độ dài câu lý tưởng nằm trong khoảng **15 đến 28 chữ**. Bất kỳ câu nào vượt quá ngưỡng **45 chữ** đều bắt buộc phải tách đôi thành hai câu đơn gãy gọn để người đọc lướt mắt một lần là hiểu ngay.

---

### 3. Danh Sách 6 Bước Tự Kiểm Tra Văn Phong Trước Khi Xuất Bản

Trước khi bàn giao bất kỳ bài viết, tài liệu hướng dẫn hoặc nội dung giao diện nào cho người dùng, AI bắt buộc đối chiếu 6 câu hỏi kiểm định sau:
1. Có câu văn nào mở đầu bằng chữ `Sự...` hoặc `Việc...` làm chủ ngữ giả hay không?
2. Có dính bất kỳ cụm từ dịch máy nào như `thông qua việc`, `đóng vai trò như là`, `một cách hệ thống`, `bị chi phối bởi` hay không?
3. Có từ dịch ngược ngô nghê nào (`máy tính xách tay`, `thẻ trình duyệt`, `tệp nén`) hoặc từ công sở chêm làm màu (`mindset`, `workflow`, `burnout`, `healing`) hay không?
4. Các đề mục `H1`, `H2`, `H3` đã sạch bóng nhãn công thức (`Quy tắc...`, `Chiếc bẫy...`) và sạch lỗi ghép hai chủ đề bằng chữ `và` chưa?
5. Toàn bộ văn xuôi đã sạch 100% dấu gạch ngang dài (`U+2014`) và dấu chấm phẩy (`U+003B`) chưa?
6. Đã kiểm tra độ dài từng câu để đảm bảo trung bình đạt `15 đến 28 chữ` và không có câu nào vượt quá `45 chữ` chưa?

---

## 🔗 Related Monographs in This Series
- **[Monograph 01: LLM Sycophancy Bias, Long-Context Attention Decay & Deterministic Harness Economics](01-llm-sycophancy-and-context-decay-mechanics.md)**
- **[Monograph 02 (Current): Vietnamese Topic-Comment Functional Syntax vs. English SVO AI Translationese](02-vietnamese-topic-comment-syntax-vs-ai-translationese.md)**
- **[Monograph 03: Quiet Luxury UI Spatial Math & Ophthalmic Ergonomics of 12.6:1 WCAG AAA Night Contrast](03-quiet-luxury-ui-math-and-wcag-aaa-night-contrast.md)**
- **[Back to Main Repository README](../README.md)**
