# B. Unenbat — Portfolio

`rubenmarcus.dev`-ийн бүтэц, өнгө, layout-г дагасан хувийн portfolio.
Хар дэвсгэр + matrix ногоон (`#00ff41`), EN/MN хос хэл.
Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Three.js + Framer Motion.

Бүх контент (төсөл, туршлага, боловсрол, ур чадвар) нь хуучин portfolio-гийн
`src/data/constants.js`-ээс EN + MN хоёулангаар нь шилжсэн.

## Ажиллуулах

```bash
npm install
cp .env.example .env.local   # EmailJS түлхүүрүүдээ бичих
npm run dev                  # http://localhost:3000
npm run build                # production build
```

## Контентоо засах

Бүх текст, өгөгдөл **зөвхөн нэг файлд** байна:

```
lib/content.ts
```

Текст бүр `{ en: "...", mn: "..." }` хос хэлбэртэй. Header дээрх `EN / MN`
товч тэднийг сэлгэнэ (сонголт нь localStorage-д хадгалагдана).

| Хэсэг | Юу байгаа |
|---|---|
| `profile` | нэр, мэйл, CV, сошиал линкүүд |
| `hero` | гарчиг, танилцуулга, эргэлдэх мөр, кодын хэсэг |
| `services` | 3 үйлчилгээний карт |
| `numbers` | тоо баримт (гараар шинэчилнэ) |
| `experience` | 4 ажлын байр, компанийн логотой |
| `work` | 28 төсөл — зураг, tag, GitHub/live линк, `featured` |
| `stack` | 54 ур чадвар, лого бүхий |
| `education` | 2 боловсролын бичлэг |
| `faq`, `contact`, `brief`, `footerExtra` | бусад секц |

Шинэ төсөл нэмэхдээ `work.items`-д бичээд зургийг нь
`public/img/projects/` дотор хийнэ. `featured: true` бол эхний экранд гарна.

## Холбоо барих форм (EmailJS)

Форм нь [EmailJS](https://www.emailjs.com/)-ээр шууд мэйл рүү илгээнэ.
Түлхүүрүүд `.env.local` дотор (хуучин portfolio-гоос шилжсэн):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Template-д `from_name`, `from_email`, `subject`, `message` талбарууд ирнэ.
Түлхүүр байхгүй бол форм нь автоматаар `mailto:` рүү шилжинэ — тэгэхээр
хоосон deploy хийсэн ч ажиллана.

**Deploy хийхдээ** эдгээр гурван хувьсагчийг Vercel-ийн Environment
Variables хэсэгт нэмэхээ мартуузай.

## Бүтэц

```
app/
  layout.tsx      фонт, metadata, JSON-LD, LangProvider
  page.tsx        секцүүдийн дараалал
  globals.css     дизайн токен, утилити, marquee, motion тохиргоо
components/
  SmoothScroll.tsx  Lenis инерцтэй смүүз скролл
  TopStrip.tsx      хамгийн дээрх гүйдэг ногоон тууз
  Header.tsx        sticky nav, scroll-spy, EN/MN, мобайл цэс
  Hero.tsx          гарчиг + эргэлдэх мөр + код хэсэг + matrix portrait
  Services.tsx      01 — Hire me
  Numbers.tsx       02 — тоолуурын хүснэгт
  Experience.tsx    03 — ажлын түүх
  Work.tsx          04 — төслүүд (шүүлтүүр + бүгдийг харах)
  Stack.tsx         ур чадвар, лого бүхий
  Education.tsx     05 — боловсрол
  Brief.tsx         BRIEF.md — хуулж авдаг танилцуулга
  Faq.tsx           06 — accordion
  Contact.tsx       07 — CTA + EmailJS форм
  Footer.tsx        баганууд, захиалга, тоон үзүүлэлт
  Dock.tsx          хөвөгч товчнууд (анимаци зогсоох / дээш)
  webgl/
    AuroraBackground.tsx  сайт даяарх ногоон шэйдэр
    MatrixPortrait.tsx    хөрөг зураг дээрх matrix эффект (desktop only)
    WebGLLayer.tsx        client-only dynamic import
  ui/               Reveal, SectionHeading, Icons, Generative, CharRain
lib/
  content.ts      БҮХ КОНТЕНТ
  lang.tsx        хэлний context
public/
  portrait.jpg          hero дээрх хөрөг
  img/projects/*        төслийн зургууд
  img/company/*         компанийн логонууд
  img/skills/*          ур чадварын логонууд (бүгд локал)
```

## Hero дээрх зургаа солих

1. Шинэ зургаа `public/portrait.jpg` нэрээр хадгална.
2. [Hero.tsx](components/Hero.tsx) доторх `<MatrixPortrait ... />`-д
   `center` (зурган дээр царай хаана байгаа, 0..1, зүүн-доод булангаас) болон
   `zoom` (1-ээс их бол ойртоно) утгыг тааруулна.

Эффект нь **ирмэг илрүүлэлт (Sobel)** дээр суурилдаг тул цагаан хана,
гэрэлтэй дэвсгэр асуудал үүсгэхгүй — зөвхөн объектын ирмэг гэрэлтэнэ.

## Дизайн токен

Өнгө, фонтыг `app/globals.css`-ийн `@theme` блокоос солино:

| Токен | Утга |
|---|---|
| `--color-bg` | `#000000` |
| `--color-accent` | `#00ff41` |
| `--color-accent-soft` | `#4ade80` |
| `--color-fg` | `#f5f1ea` |
| `--color-line` | `rgba(134,239,172,.1)` |

Ногоон биш өөр өнгө хүсвэл эдгээрийг сольж, `AuroraBackground` болон
`MatrixPortrait` доторх `vec3` өнгүүдийг тааруулна.

## WebGL давхарга

- **`AuroraBackground`** — бүх хуудсын ард fixed шэйдэр. Хүчийг нь
  `float alpha = glow * 0.26 * ...` мөрөөр тохируулна.
- **`MatrixPortrait`** — hero-гийн хөргийг цэгэн сүлжээ болгоно. Цэгийн нягт
  `float cell = 7.0`, борооны хүч `rain * 0.34`.

Хоёулаа:

- `prefers-reduced-motion: reduce` үед огт ачаалагдахгүй
- таб нуугдсан эсвэл дэлгэцээс гарсан үед render зогсоно
- WebGL байхгүй бол чимээгүй унтарна
- Portrait зөвхөн `lg` (1024px)-ээс дээш дэлгэцэд ачаална
- Зүүн доод булангийн ❚❚ товчоор бүх WebGL-ийг зогсоож болно

## Deploy

Vercel дээр repo-гоо холбоод, дээрх 3 environment variable-ыг нэмнэ.
`app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts` доторх `siteUrl`-ыг
өөрийн домэйнээр солихоо мартуузай.
