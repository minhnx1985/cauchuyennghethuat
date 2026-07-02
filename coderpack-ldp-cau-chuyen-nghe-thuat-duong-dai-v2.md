# CODER PACK — Landing Page: Câu chuyện nghệ thuật đương đại

## 0. Methodology lock

Use **Vibecode Kit v6.0** operating model.

- Human/Homeowner decides strategy and approves output.
- Contractor designs, coordinates, verifies. Contractor does not code.
- Builder implements, tests, reports.
- Workflow may be compressed for this medium-sized landing page task, but must preserve: SCAN → VISION → BLUEPRINT → TASK GRAPH/TIPs → BUILD → VERIFY.
- Builder must scan the existing repo first and follow current project patterns.
- Do not introduce a new framework, UI library, styling system, route convention, tracking library, or build tool if the repository already has an established pattern.
- Verify output, not path.

---

## 1. Project context

Project: Landing page for **Câu chuyện nghệ thuật đương đại** by Tony Godfrey, Vietnamese edition by Nhã Nam.

Campaign: **THẾ NÀO LÀ NGHỆ THUẬT ĐƯƠNG ĐẠI?**

Objective: Build a production-ready landing page that can:

1. Explain the book clearly.
2. Sell pre-order at 20% discount.
3. Display interior preview pages/spreads.
4. Drive registration for a SIS talk in mid-August 2026.
5. Support follow-up marketing after the talk.

Book data:

- Vietnamese title: Câu chuyện nghệ thuật đương đại
- Original title: The Story of Contemporary Art
- Subtitle: Một dẫn nhập sáng rõ vào nghệ thuật đương đại toàn cầu
- Author: Tony Godfrey
- Translator: Trần Phương Thúy
- Badge: Best Art Books of 2020 — Sunday Times
- Imprint: Nhã Nam Mỹ học - Nghệ thuật
- Cover price: 575.000đ
- Pre-order price: 460.000đ
- Discount: 20%
- Event: SIS talk in mid-August 2026
- Primary CTA: Đặt trước với giá 460.000đ
- Secondary CTA: Đăng ký talk giữa tháng 8

Strategic positioning:

> Một dẫn nhập sáng rõ vào nghệ thuật đương đại toàn cầu, dành cho những người từng tự hỏi “thế này mà cũng là nghệ thuật à?”, và muốn có một bản đồ đủ tin cậy để bước vào thế giới ấy.

Core idea:

Do not sell the book as a decorative art book. Sell from the public's real confusion before contemporary art: a banana taped to a wall, a urinal in an exhibition room, a silent performance, an ordinary object with a huge market price. The page must turn that confusion into a reason to read.

---

## 2. Required assets

Builder must support these assets. If files are missing, create placeholders with clear names and TODO comments; do not break the page.

### Core images

1. Cover image, Vietnamese edition.
2. Optional 3D book mockup.
3. Interior preview image 1.
4. Interior preview image 2.
5. Interior preview image 3.
6. Interior preview image 4.
7. Interior preview image 5.
8. Interior preview image 6.
9. Optional author portrait.
10. Optional SIS/talk visual.

### Interior preview requirement

The landing page should show **6–8 interior images/spreads**.

Reason: this book is expensive and visually important. Interior preview is not decoration; it is a conversion proof. It helps users see layout quality, text/image density, illustration style, and reading experience.

Implementation requirement:

- Desktop: grid, masonry-like gallery, or horizontal preview section depending on existing design system.
- Mobile: swipeable carousel or stacked cards.
- Include lightbox/modal if the project already has a pattern or if implementation cost is low.
- Add alt text for each preview.
- Do not display too many consecutive readable pages.
- Add microcopy: “Ảnh xem trước chỉ nhằm giới thiệu hình thức và tinh thần trình bày của sách. Nội dung đầy đủ có trong bản in.”

Suggested asset names:

```text
book-cover.jpg
book-mockup.png
interior-01.jpg
interior-02.jpg
interior-03.jpg
interior-04.jpg
interior-05.jpg
interior-06.jpg
interior-07.jpg
interior-08.jpg
author-tony-godfrey.jpg
sis-talk-visual.jpg
```

---

## 3. Page structure

Builder may adjust component names and markup to match the repository. Do not remove required sections unless Contractor approves.

### Section 1 — Hero

Purpose: instant positioning + offer + CTA.

Content:

Headline:

> Thế nào là nghệ thuật đương đại?

Subheadline:

> Một dẫn nhập sáng rõ vào nghệ thuật đương đại toàn cầu, dành cho những người từng đứng trước một tác phẩm và tự hỏi: “Thế này mà cũng là nghệ thuật à?”

Badge:

> Best Art Books of 2020 — Sunday Times

Body:

> Một quả chuối dán băng dính lên tường bán được 120.000 đô la. Một chiếc bồn tiểu sứ đặt trong phòng triển lãm và được gọi là nghệ thuật. Một nghệ sĩ ngồi bất động suốt nhiều giờ trước công chúng và đó cũng là tác phẩm.
>
> Nghệ thuật đương đại thường khiến chúng ta bật ra những câu hỏi giống nhau: ý nghĩa ở đây là gì, vì sao lại đắt thế, và đó có thật sự là nghệ thuật hay không. Những câu hỏi ấy chính là điểm xuất phát của Câu chuyện nghệ thuật đương đại, cuốn sách trong đó Tony Godfrey dẫn người đọc qua sáu mươi năm biến động của nghệ thuật toàn cầu, từ những chiếc hộp Brillo của Andy Warhol đến màn trình diễn của Marina Abramović, từ các biennale quốc tế đến những phiên đấu giá triệu đô.

Price module:

- Giá bìa: 575.000đ
- Giá đặt trước: 460.000đ
- Ưu đãi pre-order: giảm 20%

CTA buttons:

- Primary: Đặt trước với giá 460.000đ
- Secondary: Đăng ký talk giữa tháng 8

Visual:

- Cover or 3D book mockup.
- Background should echo the pastel/gradient cover feel but remain readable.
- Typography should be bold and editorial, not luxury/fashion.

### Section 2 — Problem hook

Heading:

> Nếu bạn từng thấy nghệ thuật đương đại khó hiểu, bạn không đứng ngoài cuộc.

Body:

> Một tác phẩm có thể là một đồ vật rất bình thường. Một buổi trình diễn có thể chỉ diễn ra một lần. Một căn phòng trống, một dòng chữ, một chiếc hộp, một vết cắt, một hành động trước công chúng đều có thể bước vào bảo tàng, gallery, catalogue và thị trường.
>
> Câu hỏi “đây có phải nghệ thuật không?” không hề ngây ngô. Nó là một trong những câu hỏi quan trọng nhất để bắt đầu đọc nghệ thuật đương đại, bởi từ sau thập niên 1960, nghệ thuật không còn chỉ nằm trong khung tranh, bệ tượng hay các tiêu chuẩn quen thuộc về cái đẹp. Nó đi vào ý niệm, vật thể, cơ thể, không gian, thị trường, chính trị, ký ức, truyền thông và đời sống.

### Section 3 — Book promise

Heading:

> Một bản đồ để bước vào sáu mươi năm nghệ thuật toàn cầu.

Body:

> Tiếp nối hành trình mà E.H. Gombrich đã mở ra trong Câu chuyện nghệ thuật, Tony Godfrey dẫn dắt người đọc qua những biến động lớn của nghệ thuật từ sau thập niên 1960: pop art, nghệ thuật tối giản, nghệ thuật ý niệm, nghệ thuật sắp đặt, nghệ thuật trình diễn, video art, các biennale quốc tế, sự trỗi dậy của những trung tâm nghệ thuật ngoài phương Tây và những phiên đấu giá làm công chúng sửng sốt.
>
> Sách không kể nghệ thuật đương đại như một chuỗi tên tuổi xếp hàng trong sách giáo khoa. Godfrey kể nó qua những xung đột kịch tính: hội họa và nghệ thuật ý niệm, địa phương và toàn cầu, phòng trưng bày và thế giới rộng lớn bên ngoài, tác phẩm và thị trường, nghệ sĩ và thiết chế. Trên nền sáu mươi năm biến động dữ dội của đời sống xã hội-chính trị, ông vẽ nên một bức tranh nghệ thuật sống động, đa chiều, nơi những ranh giới cũ liên tục bị phá vỡ và những cách nhìn mới không ngừng xuất hiện.

Bullets:

- Những câu hỏi nền tảng của nghệ thuật đương đại: ý nghĩa, giá trị, tác phẩm, người xem, thị trường.
- Những chuyển động lớn từ pop art, minimalism, conceptual art đến installation, performance, video và biennale.
- Andy Warhol, Marina Abramović và nhiều nghệ sĩ đã thay đổi cách công chúng hiểu về tác phẩm.
- Nghệ thuật đương đại như một hiện tượng toàn cầu, không đóng khung trong vài trung tâm phương Tây.
- Một văn phong có sức kể, không bị ngập trong thuật ngữ hàn lâm.

### Section 4 — Interior preview

Heading:

> Xem trước một vài trang trong sách.

Body:

> Đây là một cuốn sách nên được nhìn trước khi mua. Không chỉ vì phần hình ảnh, mà vì người đọc cần cảm được nhịp trình bày: chữ, tác phẩm, chú thích, câu chuyện, nhân vật và các tranh luận được đặt cạnh nhau như thế nào.

Implementation:

- Show 6–8 interior images.
- Desktop: 2-column grid or horizontal gallery.
- Mobile: carousel or stacked gallery.
- Optional lightbox.
- Lazy-load images.
- Provide alt text.

Gallery microcopy:

> Ảnh xem trước chỉ nhằm giới thiệu hình thức và tinh thần trình bày của sách. Nội dung đầy đủ có trong bản in.

### Section 5 — Why this book matters

Heading:

> Một cuốn sách quan trọng để hiểu nghệ thuật đương đại, và để không ngừng đặt câu hỏi về nó.

Body:

> Nghệ thuật đương đại không dễ chiều công chúng. Nó có thể làm người xem nghi ngờ, khó chịu, thậm chí phản đối. Nhưng chính ở điểm đó, nó buộc ta phải hỏi lại những điều tưởng như đã ổn định: tác phẩm là gì, ai có quyền định nghĩa nghệ thuật, vì sao một vật bình thường có thể mang giá trị biểu tượng, thị trường đã thay đổi cách ta nhìn nghệ thuật ra sao, và một tác phẩm có thể nói gì về thế giới đang sống.
>
> Câu chuyện nghệ thuật đương đại không bắt người đọc phải đồng ý với mọi điều trong sách. Nó đưa người đọc vào một cuộc tranh luận dài, nơi bất đồng ý kiến không phải là trở ngại mà là một phần của nghệ thuật đương đại.

Quote block:

> “Bạn có thể bất đồng ý kiến với tôi, nhưng điều đó thật tuyệt vời! Điều đó có nghĩa là chúng ta đang có một cuộc tranh luận. Và nghệ thuật đương đại chính là về sự tranh luận.”
>
> — Tony Godfrey

### Section 6 — Who should read

Use card layout.

Card 1 heading:

> Người học và làm trong ngành sáng tạo

Card 1 body:

> Nếu bạn học thiết kế, kiến trúc, truyền thông, mỹ thuật, quản trị văn hóa, di sản hoặc creative industry, đây là một cuốn sách nền để có thêm ngôn ngữ khi nói về hình ảnh, không gian, công chúng và ý tưởng.

Card 2 heading:

> Người đi triển lãm nhưng thường thấy mình lạc lõng

Card 2 body:

> Sách không bắt bạn phải thích tất cả những gì được gọi là nghệ thuật đương đại. Nó giúp bạn hiểu vì sao những tác phẩm ấy tồn tại trong bảo tàng, gallery, biennale và thị trường.

Card 3 heading:

> Người muốn đọc tiếp sau các sách nhập môn nghệ thuật

Card 3 body:

> Nếu các cuốn lịch sử nghệ thuật tổng quan giúp bạn đi qua những trào lưu lớn và các kiệt tác kinh điển, Tony Godfrey mở tiếp đoạn khó hơn: nghệ thuật từ sau 1960, khi định nghĩa nghệ thuật liên tục bị chất vấn.

Card 4 heading:

> Người muốn tặng một cuốn sách có gu cho người làm sáng tạo

Card 4 body:

> Đây không phải món quà dễ dãi, nhưng là một món quà nghiêm túc cho sinh viên, designer, curator trẻ, người làm truyền thông, người học nghệ thuật hoặc bất cứ ai đang muốn có nền tảng văn hóa thị giác tốt hơn.

### Section 7 — Author

Heading:

> Tony Godfrey

Body:

> Tony Godfrey là nhà phê bình và giám tuyển nghệ thuật người Anh với hơn bốn mươi năm theo dõi nghệ thuật đương đại toàn cầu, từ những phòng triển lãm ở London đến các biennale ở châu Á, châu Phi và châu Mỹ Latin.
>
> Ông từng đảm nhiệm vai trò Giám đốc Chương trình Thạc sĩ Nghệ thuật Đương đại tại Học viện Sotheby's London, một trong những cơ sở đào tạo nghệ thuật uy tín của thế giới. Các bài viết của ông xuất hiện trên Art in America và Burlington Magazine, cùng nhiều catalogue triển lãm quốc tế.
>
> Hiện Tony Godfrey sống và làm việc tại Manila với tư cách giám tuyển độc lập, đồng thời điều hành arttalksea.com, nơi ghi lại những cuộc đối thoại với các nghệ sĩ Đông Nam Á, đưa tiếng nói của khu vực này vào dòng chảy phê bình nghệ thuật quốc tế.
>
> Tờ The Washington Post nhận xét rằng văn phong của Godfrey rất dễ tiếp cận và không bị ngập trong thuật ngữ hàn lâm, đồng thời cho người đọc một cái nhìn toàn cảnh về các nghệ sĩ từ khắp nơi trên thế giới.

Translator line:

> Bản tiếng Việt do Trần Phương Thúy dịch.

### Section 8 — SIS talk

Heading:

> Talk: Thế nào là nghệ thuật đương đại?

Subheading:

> Từ bảo tàng, thị trường đến đời sống sáng tạo

Body:

> Nhân dịp ra mắt Câu chuyện nghệ thuật đương đại, Nhã Nam tổ chức một buổi trò chuyện cùng SIS vào giữa tháng 8. Đây không phải một buổi ra mắt sách theo nghĩa thông thường, mà là một cuộc đối thoại nhập môn cho những ai muốn hiểu nghệ thuật đương đại từ nhiều phía: người xem, nghệ sĩ, curator, sinh viên, thị trường, không gian trưng bày và đời sống sáng tạo.

Info module placeholders:

- Thời gian: [ngày] tháng 8/2026
- Địa điểm: [địa điểm tại SIS]
- Khách mời: [đang cập nhật]
- Đăng ký: [form link]

CTA:

> Đăng ký tham dự talk

### Section 9 — Pre-order offer

Heading:

> Đặt trước Câu chuyện nghệ thuật đương đại với ưu đãi 20%.

Body:

> Giá bìa 575.000đ. Giá đặt trước 460.000đ trong thời gian pre-order. Số lượng quà tặng đi kèm có hạn: postcard/bookmark/booklet “10 câu hỏi để bước vào nghệ thuật đương đại”.
>
> Ưu đãi pre-order dự kiến kết thúc sau talk giữa tháng 8 khoảng 3–5 ngày.

CTA:

> Đặt trước ngay

Trust note:

> Sách thuộc tủ Nhã Nam Mỹ học - Nghệ thuật.

### Section 10 — FAQ

FAQ items:

1. Tôi không học nghệ thuật, có đọc được không?
2. Đây có phải sách tranh/coffee-table book không?
3. Sách có phù hợp với sinh viên thiết kế, truyền thông, kiến trúc không?
4. Ưu đãi pre-order kéo dài đến khi nào?
5. Landing page có nên show trang trong không?

Use the copy from `LANDING PAGE COPY` if a content file is created separately.

---

## 4. UX and visual direction

Visual mood:

- Editorial.
- Contemporary but readable.
- Inspired by the Vietnamese cover: pastel gradient, strong black typography, clean structure.
- Avoid museum-luxury clichés: gold, marble, overly serious serif-heavy academic look.
- Avoid childish rainbow treatment even though the cover has pastel gradients.

Layout requirements:

- Sticky CTA on mobile if project pattern allows.
- Price module visible above the fold.
- SIS talk CTA visible before and after the content sections.
- Interior preview section should be placed before author and event sections because it addresses purchase anxiety early.
- Use quote block for Tony Godfrey debate quote.
- Use author section to establish authority, not as a long biography wall.
- Use accordion for FAQ if repository has accordion pattern.

Accessibility:

- All images need alt text.
- Buttons need clear labels.
- Contrast must be WCAG reasonable, especially over gradient backgrounds.
- Page must be keyboard navigable.
- Do not put critical text inside images only.

Performance:

- Optimize and lazy-load images.
- Use responsive images if supported.
- Do not ship huge interior images uncompressed.
- Keep animations subtle and non-blocking.

---

## 5. Tracking requirements

If analytics/event tracking already exists in the repo, instrument these events using the existing convention. If no tracking system exists, add clean data attributes only and report in Completion Report.

Events / data attributes:

- `ldp_art_book_preorder_click`
- `ldp_art_book_talk_register_click`
- `ldp_art_book_gallery_open`
- `ldp_art_book_faq_open`
- `ldp_art_book_sticky_cta_click`

Suggested CTA link placeholders:

```text
PREORDER_URL = "[insert preorder URL]"
TALK_FORM_URL = "[insert SIS talk form URL]"
```

---

## 6. SEO requirements

Meta title:

> Câu chuyện nghệ thuật đương đại | Tony Godfrey | Nhã Nam

Meta description:

> Đặt trước Câu chuyện nghệ thuật đương đại của Tony Godfrey với ưu đãi 20%. Một dẫn nhập sáng rõ vào nghệ thuật đương đại toàn cầu từ sau thập niên 1960.

OpenGraph title:

> Thế nào là nghệ thuật đương đại?

OpenGraph description:

> Một cuốn sách dành cho những ai từng đứng trước một tác phẩm đương đại và tự hỏi: “Thế này mà cũng là nghệ thuật à?”

Slug:

```text
/cau-chuyen-nghe-thuat-duong-dai
```

Structured data:

If the repo has a schema pattern, add Product/Book schema with title, author, translator, price, currency VND, publisher Nhã Nam, availability/preorder if supported.

---

## 7. Requirements matrix

| REQ-ID | Requirement | Acceptance criteria |
|---|---|---|
| REQ-001 | Build landing page for the book | Page route exists and renders without errors |
| REQ-002 | Hero communicates campaign and offer | Headline, subtitle, badge, price, CTA visible above fold |
| REQ-003 | Pre-order offer | Price 575.000đ and 460.000đ displayed accurately |
| REQ-004 | SIS talk CTA | Talk section and secondary CTA visible |
| REQ-005 | Interior preview | 6–8 images supported, responsive, alt text present |
| REQ-006 | Author authority | Tony Godfrey section included with translator line |
| REQ-007 | Quote block | Tony Godfrey debate quote displayed |
| REQ-008 | FAQ | At least 5 FAQ items implemented |
| REQ-009 | SEO | Meta title/description/OG fields implemented where repo supports |
| REQ-010 | Responsive design | Mobile and desktop layouts usable |
| REQ-011 | Accessibility | Alt text, contrast, keyboard navigation, semantic buttons/links |
| REQ-012 | Performance | Images optimized/lazy-loaded if project supports |
| REQ-013 | Tracking hooks | Existing analytics or data attributes added |
| REQ-014 | No new tech stack | Uses existing repository conventions |
| REQ-015 | Graceful missing assets | Missing images/URLs do not break build |

---

## 8. Blueprint

Builder should adapt to existing stack after SCAN.

### Suggested component model

Use existing component conventions. If creating new components is appropriate, prefer:

```text
ArtBookLandingPage
  HeroSection
  ProblemHookSection
  BookPromiseSection
  InteriorPreviewGallery
  WhyThisBookMattersSection
  AudienceCardsSection
  AuthorSection
  TalkSection
  PreorderOfferSection
  FAQSection
  StickyMobileCTA
```

### Data model

Keep content in a structured object if the repo pattern supports content-driven pages.

Suggested fields:

```ts
book = {
  title: "Câu chuyện nghệ thuật đương đại",
  originalTitle: "The Story of Contemporary Art",
  subtitle: "Một dẫn nhập sáng rõ vào nghệ thuật đương đại toàn cầu",
  author: "Tony Godfrey",
  translator: "Trần Phương Thúy",
  badge: "Best Art Books of 2020 — Sunday Times",
  coverPrice: "575.000đ",
  preorderPrice: "460.000đ",
  discount: "20%",
  preorderUrl: "[insert preorder URL]",
  talkUrl: "[insert SIS talk form URL]"
}
```

---

## 9. Task graph / TIPs

### TIP-001 — Scan and route setup

Dependencies: none  
Priority: P0

Task:

- Scan repository structure, routing, styling, content patterns, image handling, SEO pattern, tracking pattern.
- Identify where landing pages live.
- Create or register the new landing page route using existing conventions.

Acceptance criteria:

- SCAN REPORT included in Completion Report.
- Route decision explained.
- Page renders with placeholder content.

### TIP-002 — Implement content sections

Dependencies: TIP-001  
Priority: P0

Task:

- Implement all required sections from Section 3.
- Use real copy from this coder pack.
- Keep typography and spacing consistent with existing site.

Acceptance criteria:

- Hero, problem hook, book promise, interior preview, why matters, audience, author, talk, preorder, FAQ all present.
- CTA labels are exact.
- Price data is exact.

### TIP-003 — Implement interior preview gallery

Dependencies: TIP-001, TIP-002  
Priority: P0

Task:

- Add gallery supporting 6–8 images.
- Implement responsive layout.
- Add alt text and lazy loading.
- Add lightbox/modal if low-risk or existing pattern exists.

Acceptance criteria:

- Gallery works on desktop and mobile.
- Missing image placeholders do not crash.
- Images have alt text.
- Gallery microcopy is included.

### TIP-004 — CTA, tracking, SEO

Dependencies: TIP-002  
Priority: P1

Task:

- Add preorder and talk URLs as config/placeholders.
- Add event tracking hooks via existing analytics convention or data attributes.
- Add meta title/description/OG fields.
- Add schema if existing pattern supports it.

Acceptance criteria:

- CTAs use centralized URLs or clearly marked placeholders.
- Tracking hooks present.
- SEO metadata present.

### TIP-005 — Responsive QA and polish

Dependencies: TIP-001 to TIP-004  
Priority: P0

Task:

- Test mobile, tablet, desktop.
- Check hero readability over gradient.
- Check CTA visibility.
- Check layout with long Vietnamese text.
- Check missing assets.
- Run lint/build/test commands available in repo.

Acceptance criteria:

- Build passes.
- No obvious layout overflow.
- Mobile CTA usable.
- Accessibility basics pass.

---

## 10. Builder constraints

- Do not invent new facts about book specs.
- Do not replace copy with generic marketing text.
- Do not remove the banana/urinal/performance hook from hero/problem sections.
- Do not hide the price.
- Do not overuse animations.
- Do not make the page feel like a fashion/luxury product page.
- Do not show too many readable pages from the book.
- Do not hardcode final talk date, guest names, preorder URL, or form URL unless provided.
- Do not add a new dependency unless absolutely necessary; if necessary, report before implementation.

---

## 11. Completion Report required

Builder must return:

```text
STATUS: DONE | PARTIAL | BLOCKED

SCAN REPORT:
- Stack:
- Routing pattern:
- Styling pattern:
- Image handling:
- SEO pattern:
- Tracking pattern:

FILES CHANGED:
- Created:
- Modified:

IMPLEMENTATION SUMMARY:
- Sections implemented:
- CTAs:
- Gallery:
- SEO:
- Tracking:

TEST RESULTS:
- Build:
- Lint:
- Unit tests, if any:
- Manual responsive checks:
- Accessibility checks:

ACCEPTANCE CRITERIA:
- REQ-001: PASS/FAIL
- REQ-002: PASS/FAIL
- REQ-003: PASS/FAIL
- REQ-004: PASS/FAIL
- REQ-005: PASS/FAIL
- REQ-006: PASS/FAIL
- REQ-007: PASS/FAIL
- REQ-008: PASS/FAIL
- REQ-009: PASS/FAIL
- REQ-010: PASS/FAIL
- REQ-011: PASS/FAIL
- REQ-012: PASS/FAIL
- REQ-013: PASS/FAIL
- REQ-014: PASS/FAIL
- REQ-015: PASS/FAIL

ISSUES:
- Severity:
- Description:
- Suggested fix:

DEVIATIONS:
- What changed from spec:
- Why:
- Impact:

SUGGESTIONS:
- Improvements for later:
```

---

## 12. Human decisions still needed

1. Final pre-order URL.
2. Final SIS talk form URL.
3. Exact talk date, time, venue.
4. Guest names.
5. Final interior preview images.
6. Whether lightbox is required or optional.
7. Whether quà pre-order is postcard, bookmark, booklet, or combination.
