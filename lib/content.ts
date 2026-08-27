/**
 * ============================================================
 *  БҮХ КОНТЕНТ ЭНД БАЙНА — зөвхөн энэ файлыг засаад л болно.
 *  All site content lives here. Edit this file only.
 *
 *  Төсөл, туршлага, боловсрол, ур чадварын өгөгдөл нь хуучин
 *  portfolio-гийн src/data/constants.js-ээс шилжсэн (EN + MN).
 *  Текст бүр { en, mn } хос хэлбэртэй.
 * ============================================================
 */

export type Lang = "en" | "mn";
export type T = Record<Lang, string>;

/* ---------------------------------------------------------------
 * 1. ХУВИЙН МЭДЭЭЛЭЛ / PROFILE
 * ------------------------------------------------------------- */
export const profile = {
  brand: "B. Unenbat",
  name: { en: "B. Unenbat", mn: "Б. Үнэнбат" } satisfies T,
  role: { en: "Full Stack Developer & Programmer", mn: "Full Stack хөгжүүлэгч & Программист" } satisfies T,
  location: { en: "Ulaanbaatar, Mongolia", mn: "Улаанбаатар, Монгол" } satisfies T,
  availability: { en: "Remote worldwide · UTC+8", mn: "Дэлхийн хаанаас ч remote · UTC+8" } satisfies T,
  email: "batbaatarunenbat20@gmail.com",
  photo: "/portrait.jpg",
  // CV — одоогоор Figma дээр. PDF болговол энд замыг нь солино.
  cv: "https://www.figma.com/file/ommgInCjaW15chlhXWsBvl/Untitled?type=design&node-id=0-1&mode=design&t=scA8eZviRh8fuWqt-0",
  // Calendly / уулзалт товлох линк (хоосон бол товч нуугдана)
  calendly: "",
  socials: {
    github: "https://github.com/unenbat623",
    linkedin: "https://www.linkedin.com/in/b-unenbat-7a4b7823b/",
    x: "https://twitter.com/Unenbat050604",
    facebook: "https://www.facebook.com/profile.php?id=100089448708671",
    instagram: "https://www.instagram.com/unenbat_618/",
  },
};

/* ---------------------------------------------------------------
 * 2. НАВИГАЦИ / NAV
 * ------------------------------------------------------------- */
export const nav: { id: string; label: T }[] = [
  { id: "services", label: { en: "Services", mn: "Үйлчилгээ" } },
  { id: "experience", label: { en: "Experience", mn: "Туршлага" } },
  { id: "work", label: { en: "Projects", mn: "Төслүүд" } },
  { id: "stack", label: { en: "Skills", mn: "Ур чадвар" } },
  { id: "education", label: { en: "Education", mn: "Боловсрол" } },
  { id: "faq", label: { en: "FAQ", mn: "Асуулт" } },
  { id: "contact", label: { en: "Contact", mn: "Холбоо барих" } },
];

/* ---------------------------------------------------------------
 * 3. ГҮЙДЭГ ТУУЗ / MARQUEE
 * ------------------------------------------------------------- */
export const marquee: T[] = [
  { en: "OPEN TO NEW OPPORTUNITIES", mn: "ШИНЭ БОЛОМЖИД НЭЭЛТТЭЙ" },
  { en: "FULL STACK DEVELOPER · PROGRAMMER", mn: "FULL STACK ХӨГЖҮҮЛЭГЧ · ПРОГРАММИСТ" },
  { en: "REACT · NEXT.JS · TYPESCRIPT · NODE.JS", mn: "REACT · NEXT.JS · TYPESCRIPT · NODE.JS" },
  { en: "28 PROJECTS SHIPPED", mn: "28 ТӨСӨЛ ХИЙЖ ДУУСГАСАН" },
  { en: "BASED IN ULAANBAATAR · REMOTE WORLDWIDE", mn: "УЛААНБААТАРТ · REMOTE АЖИЛЛАНА" },
];

/* ---------------------------------------------------------------
 * 4. HERO
 * ------------------------------------------------------------- */
export const hero = {
  greeting: { en: "Hello, I'm", mn: "Сайн байна уу, намайг" } satisfies T,
  subtitle: { en: "Full Stack developer and programmer", mn: "Full Stack хөгжүүлэгч бөгөөд программист" } satisfies T,
  buildsPrefix: { en: "I build", mn: "Би бүтээдэг" } satisfies T,
  builds: [
    { en: "React & Next.js apps", mn: "React & Next.js апп" },
    { en: "GraphQL & REST APIs", mn: "GraphQL & REST API" },
    { en: "PostgreSQL data models", mn: "PostgreSQL өгөгдлийн загвар" },
    { en: "responsive interfaces", mn: "responsive интерфейс" },
  ] as T[],
  description: { en: "I am a motivated and versatile full-stack developer, passionate about building high-quality web applications and solving complex problems. With a growth mindset and a dedication to continuous learning, I strive to deliver impactful results and create meaningful digital experiences.", mn: "Би шинэ сорилтуудыг даван туулах хүсэл эрмэлзэлтэй, тууштай хөгжүүлэгч юм. Сурах хүсэл тэмүүлэл, өсөлтийн сэтгэлгээгээр дамжуулан би чанартай үр дүнг хүргэж, агуу зүйлсийг бүтээхийн төлөө хичээн ажиллаж байна." } satisfies T,
  ctaPrimary: { en: "Start a project", mn: "Төсөл эхлүүлэх" } satisfies T,
  ctaSecondary: { en: "See my work", mn: "Ажлуудыг үзэх" } satisfies T,
  ctaTertiary: { en: "View CV", mn: "CV Үзэх" } satisfies T,
  badge: { en: "Open to work", mn: "Ажилд нээлттэй" } satisfies T,
  snippet: [
    "// spec in, product out",
    'import { ship } from "@unenbat/stack";',
    "",
    "const product = ship({",
    '  web: ["next", "react", "typescript"],',
    '  api: ["node", "graphql", "postgres"],',
    "});",
  ],
};
/* ---------------------------------------------------------------
 * 5. ҮЙЛЧИЛГЭЭ / SERVICES
 * ------------------------------------------------------------- */
export const services = {
  eyebrow: { en: "Hire me", mn: "Намайг ажиллуулах" } satisfies T,
  title: { en: "What I build", mn: "Юу бүтээдэг вэ" } satisfies T,
  intro: {
    en: "Everything below is work I have actually shipped — for companies, for clients and on my own time.",
    mn: "Доорх бүхэн бодитоор хийж дуусгасан ажил — компанид, захиалгаар болон өөрийн цагаар.",
  } satisfies T,
  meta: [
    { en: "Ulaanbaatar · remote worldwide", mn: "Улаанбаатар · дэлхий даяар remote" },
    { en: "Asia · EU overlap", mn: "Ази · ЕХ-тай давхцах цаг" },
    { en: "Full-time · contract · freelance", mn: "Бүтэн цаг · гэрээт · freelance" },
  ] as T[],
  items: [
    {
      title: { en: "Web apps, end to end", mn: "Веб апп, эхнээс нь дуустал" },
      body: {
        en: "From an empty repo to a deployed product: data model, API, interface, auth and the deploy pipeline. Next.js on the front, Node or FastAPI behind it.",
        mn: "Хоосон repo-оос эхлээд ажиллаж буй бүтээгдэхүүн хүртэл: өгөгдлийн загвар, API, интерфейс, нэвтрэлт, deploy. Урд талд Next.js, ард нь Node эсвэл FastAPI.",
      },
      tags: ["Next.js", "React", "PostgreSQL", "Prisma"],
    },
    {
      title: { en: "Frontend & interface work", mn: "Frontend ба интерфейс" },
      body: {
        en: "Responsive interfaces with a real design sense — component systems, animation, state management and the performance work that keeps them fast.",
        mn: "Дизайны мэдрэмжтэй responsive интерфейс — компонентын систем, хөдөлгөөн, state удирдлага, хурдыг барих гүйцэтгэлийн ажил.",
      },
      tags: ["TypeScript", "Tailwind", "Framer Motion", "Three.js"],
    },
    {
      title: { en: "APIs & integrations", mn: "API ба интеграц" },
      body: {
        en: "Backend services and third-party integrations: GraphQL and REST APIs, database design, ERP and payment flows, Docker and AWS deployment.",
        mn: "Backend үйлчилгээ, гуравдагч талын интеграц: GraphQL, REST API, өгөгдлийн сангийн загвар, ERP болон төлбөрийн урсгал, Docker, AWS deploy.",
      },
      tags: ["Node.js", "GraphQL", "Docker", "AWS"],
    },
  ],
  cta: { en: "View scope", mn: "Дэлгэрэнгүй" } satisfies T,
};

/* ---------------------------------------------------------------
 * 6. ТОО БАРИМТ / NUMBERS
 * ------------------------------------------------------------- */
export const numbers = {
  eyebrow: { en: "Proof in numbers", mn: "Тоогоор нотлогдсон" } satisfies T,
  title: { en: "Built, shipped, measured.", mn: "Бүтээж, хүлээлгэн өгч, хэмжсэн." } satisfies T,
  items: [
    // Бүгд бодит өгөгдлөөс тоологдсон — төслийн жагсаалт, ур чадварын жагсаалт,
    // GitHub профайлаас. Шинэ ажил нэмэгдэх бүрд эдгээрийг шинэчилнэ.
    { value: 28, suffix: "", label: { en: "projects built", mn: "бүтээсэн төсөл" } },
    { value: 22, suffix: "", label: { en: "public GitHub repos", mn: "нээлттэй GitHub repo" } },
    { value: 21, suffix: "", label: { en: "live deployments", mn: "ажиллаж буй deploy" } },
    { value: 46, suffix: "", label: { en: "tools and technologies", mn: "хэрэгсэл, технологи" } },
    { value: 4, suffix: "", label: { en: "companies worked with", mn: "компанид ажилласан" } },
    { value: 3, suffix: "", label: { en: "years writing code", mn: "жил код бичиж байна" } },
  ],
  footnote: {
    en: "Counted from the project list below and my public GitHub profile.",
    mn: "Доорх төслийн жагсаалт болон нээлттэй GitHub профайлаас тоолсон.",
  } satisfies T,
};

/* ---------------------------------------------------------------
 * 7. ТУРШЛАГА / EXPERIENCE
 * ------------------------------------------------------------- */
export const experience = {
  eyebrow: { en: "Experience", mn: "Туршлага" } satisfies T,
  title: { en: "Where I have shipped.", mn: "Хаана ажиллаж байсан бэ." } satisfies T,
  intro: {
    en: "Software engineering roles and the teams I built with.",
    mn: "Програм хангамжийн инженерээр ажилласан компани, багууд.",
  } satisfies T,
  items: [
    {
      company: "Tavan Bogd NURA",
      logo: "/img/company/company-tavanbogd-nura.svg",
      role: { en: "Full-stack developer", mn: "Full-stack хөгжүүлэгч" },
      period: { en: "May 1, 2026 - Present", mn: "2026 оны 5 сарын 1 - Одоо" },
      body: { en: "Currently working as a full-stack developer at Tavan Bogd NURA, contributing to GitLab-based projects through branch and merge request workflows, bug fixes, and feature implementation.", mn: "Tavan Bogd NURA-д одоогоор full-stack хөгжүүлэгчээр ажиллаж, GitLab дээрх төслүүдийн хөгжүүлэлт, branch/merge request workflow, bug fix болон feature implementation дээр ажиллаж байна." },
      skills: ["React JS", "TypeScript", "Node JS", "GitLab", "Git", "Docker", "DBeaver", "Jira", "REST API", "PostgreSQL"],
    },
    {
      company: "Dev and Soft",
      logo: "/img/company/company-devandsoft.svg",
      role: { en: "Full-stack developer", mn: "Full-stack хөгжүүлэгч" },
      period: { en: "Sep 2025 - Nov 2025", mn: "2025 оны 9 сар - 2025 оны 11 сар" },
      body: { en: "Developed internal and client-facing web applications with PostgreSQL, AWS deployment workflows, and AI-assisted development tools.", mn: "Дотоод болон захиалгат веб аппликейшн дээр full-stack хөгжүүлэлт хийж, PostgreSQL өгөгдлийн сан, AWS deployment, AI туслах хэрэгслүүдтэй workflow ашигласан." },
      skills: ["React JS", "GraphQL", "Node JS", "Tailwind CSS", "JavaScript", "AWS", "PostgreSQL", "Antigravity"],
    },
    {
      company: "Tixy Digital",
      logo: "/img/company/company-tixy.svg",
      role: { en: "Full-stack developer", mn: "Full-stack хөгжүүлэгч" },
      period: { en: "Jun 2024 - Sep 2024", mn: "2024 оны 6 сар - 2024 оны 9 сар" },
      body: { en: "Worked on client web projects across frontend and backend development, including UI improvements, API integrations, and performance fixes.", mn: "Үйлчлүүлэгчийн веб төслүүд дээр frontend болон backend хөгжүүлэлт хийж, UI сайжруулалт, API интеграц, performance засварууд дээр ажилласан." },
      skills: ["React JS", "TypeScript", "Node JS", "GraphQL", "Tailwind CSS", "JavaScript", "AWS"],
    },
    {
      company: "Pinecone",
      logo: "/img/company/company-pinecone.png",
      role: { en: "Full-stack developer", mn: "Full-stack хөгжүүлэгч" },
      period: { en: "Oct 2023 - Sep 2024", mn: "2023 оны 10 сар - 2024 оны 9 сар" },
      body: { en: "Built a strong full-stack foundation through hands-on projects, team workflows, responsive interfaces, and backend API development.", mn: "Full-stack хөгжүүлэлтийн суурь, багаар ажиллах арга барил, responsive веб интерфэйс болон backend API хөгжүүлэлтийн дадлага хийсэн." },
      skills: ["React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS", "JavaScript"],
    },
  ],
};

/* ---------------------------------------------------------------
 * 8. ТӨСЛҮҮД / PROJECTS
 *      — эхэнд харагдана. Бусад нь "бүгдийг харах"-аар нээгдэнэ.
 * ------------------------------------------------------------- */
export type ProjectCategory = "web app" | "machine learning";

export type Project = {
  name: string;
  year: T;
  description: T;
  tags: string[];
  image: string;
  category: ProjectCategory;
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const work = {
  eyebrow: { en: "Projects", mn: "Төслүүд" } satisfies T,
  title: { en: "Things I have built.", mn: "Миний бүтээсэн зүйлс." } satisfies T,
  intro: {
    en: "From web applications to internal tools. Featured work first, the full list underneath.",
    mn: "Веб аппликейшнээс дотоод хэрэгсэл хүртэл. Эхлээд онцлох ажлууд, доор бүх жагсаалт.",
  } satisfies T,
  filters: [
    { id: "all", label: { en: "All", mn: "Бүгд" } },
    { id: "web app", label: { en: "Web app", mn: "Вэб апп" } },
    { id: "machine learning", label: { en: "Machine learning", mn: "Машин сургалт" } },
  ] as { id: string; label: T }[],
  showAll: { en: "Show all projects", mn: "Бүх төслийг харах" } satisfies T,
  showLess: { en: "Show less", mn: "Хураах" } satisfies T,
  cta: { en: "Live", mn: "Үзэх" } satisfies T,
  repoCta: { en: "Code", mn: "Код" } satisfies T,
  soon: { en: "Coming soon", mn: "Тун удахгүй" } satisfies T,
  items: [
    {
      name: "Personal Life OS",
      year: { en: "Aug 2026 - Present", mn: "2026 оны 8 сар - Одоо" },
      description: { en: "An AI-powered personal life operating system for managing daily plans, goals, habits, notes, calendar, and weather in one place. Built as a monorepo with a Next.js frontend, FastAPI backend, and Docker-based infrastructure.", mn: "AI-д суурилсан хувийн амьдралын удирдлагын систем. Өдөр тутмын төлөвлөгөө, зорилго, дадал, тэмдэглэл, календарь, цаг агаарын мэдээллийг нэг дороос удирдах Life OS платформ. Next.js frontend, FastAPI backend, Docker infrastructure бүхий monorepo бүтэцтэй." },
      tags: ["Next Js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
      image: "/img/projects/personal-lifestyle.png",
      category: "web app",
      repo: "https://github.com/unenbat623/personal-lifestyle",
      href: "https://web-omega-one-16.vercel.app/",
      featured: true,
    },
    {
      name: "Zity Shop",
      year: { en: "Aug 2026", mn: "2026 оны 8 сар" },
      description: { en: "The official e-commerce web app for Zity Chef Complex, integrated with Odoo ERP for real-time stock and order sync, QPay payment flows, and recipe meal-kit bundles from the Zity Chef ecosystem.", mn: "Zity Chef Complex-ийн албан ёсны e-commerce веб апп. Odoo ERP-тэй бодит цагийн барааны үлдэгдэл, захиалгын sync, QPay төлбөрийн урсгал, хоолны жорын орц багц худалдан авах Zity Chef ecosystem интеграцтай." },
      tags: ["React 19", "TypeScript", "Odoo ERP", "Zustand", "Tailwind CSS"],
      image: "/img/projects/zity-shop.jpg",
      category: "web app",
      repo: "https://github.com/unenbat623/zity-shop",
      href: "https://zity-shop.vercel.app",
      featured: true,
    },
    {
      name: "Car Rental Web App",
      year: { en: "Feb 2025 - Mar 2025", mn: "2024 оны 6 сар - 2024 оны 9 сар" },
      description: { en: "A modern car rental web application where users can browse cars, filter by categories, and make bookings. It includes responsive UI, filtering system, and clean UX.", mn: "Геодези, зураглалын үйлчилгээний компанид зориулсан responsive веб сайт. Компанийн үйлчилгээ, төслийн мэдээлэл, холбоо барих урсгалыг хэрэглэгчдэд ойлгомжтой байдлаар хүргэсэн." },
      tags: ["Next Js", "TypeScript", "Tailwind CSS"],
      image: "/img/projects/car_rental.png",
      category: "web app",
      repo: "https://github.com/unenbat623/car-rental-client",
      href: "https://car-rental-client-6khh.vercel.app/",
      featured: true,
    },
    {
      name: "Djgeo.mn",
      year: { en: "Jun 2024 - Sep 2024", mn: "2024 оны 4 сар - 2024 оны 6 сар" },
      description: { en: "A responsive website for a geodesy and mapping services company, presenting services, project information, and contact flows clearly for customers.", mn: "Киноны жагсаалт, дэлгэрэнгүй мэдээлэл, цагийн хуваарь, хэрэглэгчийн нэвтрэлттэй Central Cinema хэрэглэгчийн веб апп." },
      tags: ["TypeScript", "GraphQL", "React"],
      image: "/img/projects/djgeo.png",
      category: "web app",
      repo: "https://github.com/unenbat623/",
      href: "https://www.djgeo.mn/",
      featured: true,
    },
    {
      name: "Central Cinema website",
      year: { en: "Apr 2024 - Jun 2024", mn: "2024 оны 4 сар - 2024 оны 6 сар" },
      description: { en: "A customer-facing Central Cinema web app with movie listings, detail pages, schedules, and login-ready user flows.", mn: "Кино, танхим, цагийн хуваарь болон админ үйлдлүүдийг удирдах dashboard веб апп. CRUD урсгал болон responsive админ UI-г багтаасан." },
      tags: ["React Js", "TypeScript", "Node JS"],
      image: "/img/projects/cinema.png",
      category: "web app",
      repo: "https://github.com/unenbat623/Todo-Web-App",
      href: "https://cinema-app-client-front.vercel.app/",
      featured: true,
    },
    {
      name: "Central Cinema Admin",
      year: { en: "Apr 2024 - Jun 2024", mn: "2023 оны 9 сар - 2023 оны 10 сар" },
      description: { en: "An admin dashboard for managing movies, halls, schedules, and operational content with CRUD flows and a responsive admin UI.", mn: "Нийтлэл үүсгэх, унших, ангилах боломжтой блог веб апп. React болон Node.js ашиглан frontend/backend урсгалыг хэрэгжүүлсэн." },
      tags: ["React Js", "TypeScript", "Node JS"],
      image: "/img/projects/cinema_admin.png",
      category: "web app",
      repo: "https://github.com/unenbat623/Todo-Web-App",
      href: "https://cinema-app-client-front.vercel.app/",
    },
    {
      name: "Blog Web App",
      year: { en: "Sep 2023 - Oct 2023", mn: "2025 оны 2 сар - 2025 оны 3 сар" },
      description: { en: "A blog web app for creating, browsing, and organizing posts, built with a React frontend and Node.js backend flow.", mn: "Хэрэглэгчид машин үзэх, ангиллаар шүүх, захиалга өгөх боломжтой орчин үеийн машин түрээсийн вэб програм. Энэ нь респонсив UI, шүүлтүүрийн систем болон цэвэр UX-ийг багтаасан болно." },
      tags: ["React Js", "TypeScript", "Node JS"],
      image: "/img/projects/blog.png",
      category: "web app",
      repo: "https://github.com/unenbat623/teamBlog",
      href: "https://team-blog-ten.vercel.app/",
    },
    {
      name: "Zeel.mn",
      year: { en: "Oct 2024 - Dec 2024", mn: "2024 оны 10 сар - 2024 оны 12 сар" },
      description: { en: "A loan management system for tracking loan information, repayment schedules, and customer workflows in one place.", mn: "Зээлийн мэдээлэл, төлөлтийн хуваарь болон хэрэглэгчийн удирдлагыг нэг дороос хянах боломжтой зээлийн удирдлагын систем." },
      tags: ["React Js", "TypeScript", "Node JS", "PostgreSQL"],
      image: "/img/projects/zeel.jpg",
      category: "web app",
      href: "https://zeel.mn/",
      featured: true,
    },
    {
      name: "Taki App",
      year: { en: "Nov 2024 - Present", mn: "2024 оны 11 сар - Одоо" },
      description: { en: "A music and entertainment web application focused on fast content browsing and smooth user interaction.", mn: "Хөгжим болон энтертайнмент контентыг хэрэглэгчдэд хурдан, ойлгомжтой хүргэхэд чиглэсэн веб аппликейшн." },
      tags: ["React Js", "Tailwind CSS", "Framer Motion"],
      image: "/img/projects/taki.jpeg",
      category: "web app",
    },
    {
      name: "AI Chatbot",
      year: { en: "Dec 2024 - Jan 2025", mn: "2024 оны 12 сар - 2025 оны 1 сар" },
      description: { en: "An AI chatbot project with a ChatGPT-style conversational interface, prompt submission, response display, responsive chat layout, and message history.", mn: "ChatGPT маягийн conversational UI бүхий AI chatbot төсөл. Prompt илгээх, хариу харах, responsive chat layout болон хэрэглэгчдэд ойлгомжтой message history-г хэрэгжүүлсэн." },
      tags: ["React Js", "Node JS", "OpenAI API"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%2310b981%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M240%20250%20185%20305l55%2055M440%20250l55%2055-55%2055M382%20224l-84%20164%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3EAI%20Chatbot%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3EOpenAI%20conversational%20UI%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "machine learning",
      repo: "https://github.com/unenbat623/",
    },
    {
      name: "PDF Generator",
      year: { en: "Aug 2026", mn: "2026 оны 8 сар" },
      description: { en: "A file and PDF generation backend service deployed on Railway, focused on generating documents from user data.", mn: "Файл болон PDF үүсгэх backend service. Railway дээр deploy хийж, хэрэглэгчийн өгөгдлөөс document generate хийх workflow туршсан." },
      tags: ["JavaScript", "Node JS", "Railway"],
      image: "/img/projects/pdf-generate.png",
      category: "web app",
      repo: "https://github.com/unenbat623/pdf-generate",
      href: "https://pdf-generate-production.up.railway.app",
    },
    {
      name: "Zity Chef",
      year: { en: "Jul 2026", mn: "2026 оны 7 сар" },
      description: { en: "A chef and food-themed responsive web app built with TypeScript, focusing on UI structure, routing, and deployment workflow.", mn: "Chef/food төрлийн responsive веб апп. TypeScript ашиглан UI бүтэц, routing, deployment workflow дээр ажилласан." },
      tags: ["TypeScript", "React Js", "Vercel"],
      image: "/img/projects/zity-chef.png",
      category: "web app",
      repo: "https://github.com/unenbat623/zity-chef",
      href: "https://zity-chef.vercel.app",
      featured: true,
    },
    {
      name: "Zurhai.mn",
      year: { en: "Apr 2026 - May 2026", mn: "2026 оны 4 сар - 2026 оны 5 сар" },
      description: { en: "A Mongolian astrology platform that combines daily horoscope content, lunar calendar information, and traditional zodiac features with a modern web UI.", mn: "Монгол зурхайн өдөр тутмын мэдээлэл, сарны тоолол, уламжлалт зурхайн контентыг орчин үеийн веб UI-тай холбосон платформ." },
      tags: ["TypeScript", "React Js", "UI/UX"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23f59e0b%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M240%20250%20185%20305l55%2055M440%20250l55%2055-55%2055M382%20224l-84%20164%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3EZurhai.mn%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3EMongolian%20astrology%20app%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/zurhai.mn",
    },
    {
      name: "Todo List",
      year: { en: "May 2026", mn: "2026 оны 5 сар" },
      description: { en: "A TypeScript todo application for creating, editing, deleting, and organizing tasks.", mn: "Даалгавар нэмэх, засах, устгах, жагсаалтаа удирдах боломжтой TypeScript todo апп." },
      tags: ["TypeScript", "React Js", "Vercel"],
      image: "/img/projects/todo-list.png",
      category: "web app",
      repo: "https://github.com/unenbat623/todo_list",
      href: "https://todo-list-6d98.vercel.app",
    },
    {
      name: "Demo LLC",
      year: { en: "Apr 2026 - May 2026", mn: "2026 оны 4 сар - 2026 оны 5 сар" },
      description: { en: "A demo company website for presenting business information, service sections, and responsive marketing pages.", mn: "Компанийн танилцуулга болон бизнесийн мэдээллийг харуулах demo website төсөл." },
      tags: ["TypeScript", "React Js", "Responsive UI"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%2364748b%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M240%20250%20185%20305l55%2055M440%20250l55%2055-55%2055M382%20224l-84%20164%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3EDemo%20LLC%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3ECompany%20website%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/demo-llc",
    },
    {
      name: "Enola Shop",
      year: { en: "Apr 2026", mn: "2026 оны 4 сар" },
      description: { en: "An e-commerce web app with product browsing, shop layouts, and deployment workflow practice.", mn: "Онлайн дэлгүүрийн бүтээгдэхүүн харах, shop layout, deployment workflow бүхий e-commerce веб апп." },
      tags: ["TypeScript", "React Js", "Render"],
      image: "/img/projects/enola-shop.jpg",
      category: "web app",
      repo: "https://github.com/unenbat623/enola-shop",
      href: "https://enola-shop-1.onrender.com/",
    },
    {
      name: "My Portfolio",
      year: { en: "May 2024 - Apr 2026", mn: "2024 оны 5 сар - 2026 оны 4 сар" },
      description: { en: "A responsive personal portfolio website for presenting my profile, experience, skills, and projects.", mn: "Өөрийн танилцуулга, туршлага, ур чадвар, төслүүдийг харуулах responsive portfolio website." },
      tags: ["JavaScript", "React Js", "Three.js"],
      image: "/img/projects/my-portfolio.png",
      category: "web app",
      repo: "https://github.com/unenbat623/my-portfolio",
      href: "https://my-portfolio-delta-three-17.vercel.app",
    },
    {
      name: "Little Lemon Web",
      year: { en: "Mar 2026 - Apr 2026", mn: "2026 оны 3 сар - 2026 оны 4 сар" },
      description: { en: "A restaurant web project exploring landing page design, food presentation, and booking-style UI patterns.", mn: "Ресторан/хоолны газрын landing болон booking төрлийн UI туршсан TypeScript веб төсөл." },
      tags: ["TypeScript", "React Js", "Vercel"],
      image: "/img/projects/little-lemon-web.png",
      category: "web app",
      repo: "https://github.com/unenbat623/little-lemon-web",
      href: "https://little-lemon-web-liart.vercel.app",
    },
    {
      name: "Valentine",
      year: { en: "Feb 2026", mn: "2026 оны 2 сар" },
      description: { en: "An interactive Valentine-themed web experience focused on animation, visual layout, and responsive design.", mn: "Interactive Valentine theme-тэй веб experience. Animation, visual layout, responsive design дээр төвлөрсөн төсөл." },
      tags: ["TypeScript", "React Js", "Animation"],
      image: "/img/projects/valentine.png",
      category: "web app",
      repo: "https://github.com/unenbat623/Valentine-",
      href: "https://valentine-liart-ten.vercel.app",
    },
    {
      name: "JobPortal.mn",
      year: { en: "Nov 2025 - Dec 2025", mn: "2025 оны 11 сар - 2025 оны 12 сар" },
      description: { en: "A Mongolian job portal with job seeker, employer, and admin flows, including CV creation, job posting, applications, and ATS-style review workflows.", mn: "Ажил хайгч, ажил олгогч, админы урсгалтай Монгол job portal. CV үүсгэх, ажлын зар нийтлэх, өргөдөл шалгах ATS workflow багтаасан." },
      tags: ["TypeScript", "React Js", "ATS"],
      image: "/img/projects/jobportal.png",
      category: "web app",
      repo: "https://github.com/unenbat623/JobPortal.mn",
      href: "https://job-portal-mn.vercel.app",
      featured: true,
    },
    {
      name: "Food Delivery",
      year: { en: "Jan 2024 - Dec 2025", mn: "2024 оны 1 сар - 2025 оны 12 сар" },
      description: { en: "A food delivery web app with product browsing, ordering flows, and responsive customer-facing screens.", mn: "Хоол захиалга, бүтээгдэхүүний жагсаалт, хэрэглэгчийн захиалгын урсгал бүхий food delivery веб апп." },
      tags: ["TypeScript", "React Js", "Vercel"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23ef4444%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M210%20173v228M172%20173v86c0%2034%2016%2055%2038%2055s38-21%2038-55v-86M382%20175c-45%2033-60%2093-35%20138%2010%2018%2024%2028%2041%2034v54%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3EFood%20Delivery%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3EFood%20ordering%20app%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/food_delivery",
      href: "https://food-delivery-gold.vercel.app",
      featured: true,
    },
    {
      name: "E-commerce",
      year: { en: "Sep 2024", mn: "2024 оны 9 сар" },
      description: { en: "An e-commerce practice project with product listing UI, shop structure, and TypeScript-based frontend organization.", mn: "Бүтээгдэхүүний жагсаалт, shop UI, TypeScript бүтэцтэй e-commerce дадлагын төсөл." },
      tags: ["TypeScript", "React Js", "E-commerce"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23f97316%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M174%20244h310l-33%20146H210l-36-146Zm37%200-28-70h-53M248%20430h2M414%20430h2%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Ccircle%20cx%3D%22249%22%20cy%3D%22430%22%20r%3D%2220%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22415%22%20cy%3D%22430%22%20r%3D%2220%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3EE-commerce%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3EOnline%20store%20UI%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/e-commerce",
    },
    {
      name: "Team Blog",
      year: { en: "Dec 2023 - May 2024", mn: "2023 оны 12 сар - 2024 оны 5 сар" },
      description: { en: "A team-built blog web app for browsing posts, practicing frontend collaboration, and deploying a shared project.", mn: "Багаар хийсэн блог веб апп. Нийтлэл унших, жагсаах, frontend deployment хийх дадлага багтаасан." },
      tags: ["JavaScript", "React Js", "Vercel"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%2306b6d4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M240%20250%20185%20305l55%2055M440%20250l55%2055-55%2055M382%20224l-84%20164%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3ETeam%20Blog%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3ECollaborative%20blog%20app%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/teamBlog",
      href: "https://team-blog-nine.vercel.app",
    },
    {
      name: "Todo",
      year: { en: "Jan 2024", mn: "2024 оны 1 сар" },
      description: { en: "A small React and TypeScript todo app for practicing state management, CRUD actions, and component structure.", mn: "React болон TypeScript ашиглан state management, CRUD үйлдэл, component бүтэц дадлага хийсэн todo апп." },
      tags: ["TypeScript", "React Js", "CRUD"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%233b82f6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M240%20250%20185%20305l55%2055M440%20250l55%2055-55%2055M382%20224l-84%20164%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3ETodo%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3ECRUD%20task%20app%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/todo",
      href: "https://todo-pearl-chi.vercel.app",
    },
    {
      name: "Vue App",
      year: { en: "Apr 2024", mn: "2024 оны 4 сар" },
      description: { en: "A small Vue project for learning component structure, templates, and basic frontend app setup.", mn: "Vue framework-ийн component, template, basic app structure сурч туршсан жижиг төсөл." },
      tags: ["Vue", "JavaScript", "Frontend"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%2342b883%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M240%20250%20185%20305l55%2055M440%20250l55%2055-55%2055M382%20224l-84%20164%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3EVue%20App%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3EVue%20frontend%20practice%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/vue-app",
    },
    {
      name: "Shopping Project",
      year: { en: "Nov 2023", mn: "2023 оны 11 сар" },
      description: { en: "An early shopping and e-commerce practice repository started while learning project setup and GitHub workflows.", mn: "Анхны shopping/e-commerce санааг GitHub дээр эхлүүлсэн дадлагын repo." },
      tags: ["GitHub", "E-commerce", "Practice"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23f97316%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M174%20244h310l-33%20146H210l-36-146Zm37%200-28-70h-53M248%20430h2M414%20430h2%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Ccircle%20cx%3D%22249%22%20cy%3D%22430%22%20r%3D%2220%22%20fill%3D%22%23fff%22%2F%3E%3Ccircle%20cx%3D%22415%22%20cy%3D%22430%22%20r%3D%2220%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3EShopping%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3EE-commerce%20practice%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/shopping.project",
    },
    {
      name: "Geld Project",
      year: { en: "Nov 2023 - Jan 2024", mn: "2023 оны 11 сар - 2024 оны 1 сар" },
      description: { en: "A finance tracker style web app for practicing income, expense, and money management UI flows.", mn: "Орлого, зарлага, санхүүгийн бүртгэл хянах money tracker төрлийн веб апп." },
      tags: ["JavaScript", "React Js", "Finance"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%2322c55e%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M190%20382h300M225%20334v-84M310%20334V198M395%20334V226M480%20334V170M202%20185l89%2049%2080-62%2085%2028%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3EGeld%20Project%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3EFinance%20tracker%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/Geld.project",
      href: "https://geld-project.vercel.app",
    },
    {
      name: "Next.js Lesson",
      year: { en: "Sep 2023 - Jan 2024", mn: "2023 оны 9 сар - 2024 оны 1 сар" },
      description: { en: "A Next.js learning project for practicing routing, page structure, and Vercel deployment.", mn: "Next.js framework-ийн routing, page structure, deployment workflow сурсан дадлагын төсөл." },
      tags: ["Next Js", "JavaScript", "Vercel"],
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20680%20380%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23111827%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23111827%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeDropShadow%20dx%3D%220%22%20dy%3D%2216%22%20stdDeviation%3D%2218%22%20flood-color%3D%22%23000%22%20flood-opacity%3D%22.28%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20width%3D%22680%22%20height%3D%22380%22%20rx%3D%2234%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22552%22%20cy%3D%2290%22%20r%3D%22118%22%20fill%3D%22%23fff%22%20opacity%3D%22.12%22%2F%3E%3Ccircle%20cx%3D%2296%22%20cy%3D%22318%22%20r%3D%22150%22%20fill%3D%22%23fff%22%20opacity%3D%22.08%22%2F%3E%3Cg%20filter%3D%22url(%23s)%22%3E%3Cpath%20d%3D%22M240%20250%20185%20305l55%2055M440%20250l55%2055-55%2055M382%20224l-84%20164%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%2222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%2254%22%20y%3D%22112%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2254%22%20font-weight%3D%22850%22%20fill%3D%22%23fff%22%3ENext.js%20Lesson%3C%2Ftext%3E%3Ctext%20x%3D%2256%22%20y%3D%22165%22%20font-family%3D%22Inter%2C%20Arial%2C%20sans-serif%22%20font-size%3D%2225%22%20font-weight%3D%22650%22%20fill%3D%22%23e5e7eb%22%3ERouting%20and%20deployment%3C%2Ftext%3E%3Crect%20x%3D%2254%22%20y%3D%22210%22%20width%3D%22185%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.72%22%2F%3E%3Crect%20x%3D%2254%22%20y%3D%22236%22%20width%3D%22112%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%3C%2Fsvg%3E",
      category: "web app",
      repo: "https://github.com/unenbat623/lessson_next_js",
      href: "https://lessson-next-js.vercel.app",
    },
  ] satisfies Project[],
};
/* ---------------------------------------------------------------
 * 9. УР ЧАДВАР / SKILLS
 *     `logo` нь хуучин сайтын лого. Ачаалагдахгүй бол автоматаар нуугдана.
 * ------------------------------------------------------------- */
export const stack = {
  eyebrow: { en: "Skills", mn: "Ур чадвар" } satisfies T,
  title: { en: "Tools I work with, daily.", mn: "Өдөр бүр ажилладаг хэрэгслүүд." } satisfies T,
  intro: {
    en: "Some of the skills I have learned and worked with over the last three years.",
    mn: "Сүүлийн 3 жилийн хугацаанд миний сурч мэдсэн, ажилласан зарим ур чадварууд.",
  } satisfies T,
  groups: [
    {
      label: { en: "Frontend", mn: "Фронтенд" } satisfies T,
      items: [
        { name: "React Js", logo: "/img/skills/react-js.svg" },
        { name: "Next Js", logo: "/img/skills/next-js.png" },
        { name: "Vue Js", logo: "/img/skills/vue-js.svg" },
        { name: "HTML", logo: "/img/skills/html.png" },
        { name: "CSS", logo: "/img/skills/css.svg" },
        { name: "JavaScript", logo: "/img/skills/javascript.svg" },
        { name: "TypeScript", logo: "/img/skills/typescript.svg" },
        { name: "Python", logo: "/img/skills/python.svg" },
        { name: "Tailwindcss", logo: "/img/skills/tailwindcss.webp" },
        { name: "Material UI", logo: "/img/skills/material-ui.svg" },
        { name: "Three.js", logo: "/img/skills/three-js.svg" },
        { name: "Framer Motion", logo: "/img/skills/framer-motion.svg" },
        { name: "Vite", logo: "/img/skills/vite.svg" },
      ],
    },
    {
      label: { en: "Backend", mn: "Бэкенд" } satisfies T,
      items: [
        { name: "Node Js", logo: "/img/skills/node-js.svg" },
        { name: "Express Js", logo: "/img/skills/express-js.svg" },
        { name: "Graph Ql", logo: "/img/skills/graph-ql.svg" },
        { name: "REST API", logo: "/img/skills/rest-api.png" },
        { name: "MySQL", logo: "/img/skills/mysql.svg" },
        { name: "PostgreSQL", logo: "/img/skills/postgresql.png" },
        { name: "MongoDB", logo: "/img/skills/mongodb.svg" },
        { name: "Prisma", logo: "/img/skills/prisma.svg" },
        { name: "C++", logo: "/img/skills/c.svg" },
        { name: "Docker", logo: "/img/skills/docker.svg" },
        { name: "AWS", logo: "/img/skills/aws.svg" },
        { name: "PDF Generation", logo: "/img/skills/pdf-generation.png" },
        { name: "Authentication", logo: "/img/skills/authentication.png" },
      ],
    },
    {
      label: { en: "Others", mn: "Бусад" } satisfies T,
      items: [
        { name: "GitHub", logo: "/img/skills/github.png" },
        { name: "Git", logo: "/img/skills/git.png" },
        { name: "GitLab", logo: "/img/skills/gitlab.svg" },
        { name: "Jira", logo: "/img/skills/jira.svg" },
        { name: "Vercel", logo: "/img/skills/vercel.png" },
        { name: "Railway", logo: "/img/skills/railway.png" },
        { name: "Render", logo: "/img/skills/render.svg" },
        { name: "DBeaver", logo: "/img/skills/dbeaver.svg" },
        { name: "VS Code", logo: "/img/skills/vs-code.svg" },
        { name: "VS Code Extensions", logo: "/img/skills/vs-code-extensions.svg" },
        { name: "ESLint", logo: "/img/skills/eslint.svg" },
        { name: "Prettier", logo: "/img/skills/prettier.png" },
        { name: "npm", logo: "/img/skills/npm.svg" },
        { name: "Chrome DevTools", logo: "/img/skills/chrome-devtools.svg" },
        { name: "Postman", logo: "/img/skills/postman.png" },
        { name: "Swagger", logo: "/img/skills/swagger.png" },
        { name: "Figma", logo: "/img/skills/figma.svg" },
        { name: "Antigravity", logo: "/img/skills/antigravity.svg" },
        { name: "Cursor AI", logo: "/img/skills/cursor-ai.jpg" },
        { name: "Lovable AI", logo: "/img/skills/lovable-ai.jpg" },
      ],
    },
  ],
};

/* ---------------------------------------------------------------
 * 10. БОЛОВСРОЛ / EDUCATION
 * ------------------------------------------------------------- */
export const education = {
  eyebrow: { en: "Education", mn: "Боловсрол" } satisfies T,
  title: { en: "How I learned it.", mn: "Хэрхэн сурсан бэ." } satisfies T,
  intro: {
    en: "My education was a journey of finding my own direction and growing into it.",
    mn: "Миний боловсрол бол өөрийгөө нээх, өсч хөгжих аялал байлаа.",
  } satisfies T,
  gradeLabel: { en: "Grade", mn: "Голч" } satisfies T,
  items: [
    {
      school: { en: "Pinecone Academy", mn: "Pinecone Академи" },
      degree: { en: "Pinecone Academy Summer Leap", mn: "Pinecone Academy Summer Leap" },
      period: { en: "Oct 2023 - Sep 2024", mn: "2023 оны 10 сар - 2024 оны 9 сар" },
      grade: { en: "Certificate", mn: "гэрчилгээ" },
      body: { en: "Studied full-stack web development with practical experience in React, Node.js, databases, and team-based product projects.", mn: "Full-stack веб хөгжүүлэлтийн сургалтаар React, Node.js, өгөгдлийн сан, багаар төсөл хэрэгжүүлэх дадлага эзэмшсэн." },
    },
    {
      school: { en: "The 1st school of general education of the capital", mn: "Нийслэлийн ерөнхий боловсролын 1-р сургууль" },
      degree: { en: "High school", mn: "Ахлах сургууль" },
      period: { en: "Oct 2011 - Sep 2023", mn: "2011 оны 10 сар - 2023 оны 9 сар" },
      grade: { en: "93.2", mn: "93.2" },
      body: { en: "Completed secondary education while building an early interest in information technology and programming.", mn: "Ерөнхий боловсролоо амжилттай төгсөж, мэдээллийн технологи болон програмчлалын чиглэлд сонирхлоо гүнзгийрүүлсэн." },
    },
  ],
};

/* ---------------------------------------------------------------
 * 11. ТҮГЭЭМЭЛ АСУУЛТ / FAQ
 * ------------------------------------------------------------- */
export const faq = {
  eyebrow: { en: "Frequently asked questions", mn: "Түгээмэл асуултууд" } satisfies T,
  title: { en: "What teams usually ask.", mn: "Багууд ихэвчлэн юу асуудаг вэ." } satisfies T,
  items: [
    {
      q: { en: "What kind of work can I hire you for?", mn: "Ямар төрлийн ажилд чамайг авч болох вэ?" },
      a: {
        en: "Full-stack web applications, frontend and interface work, and backend APIs or integrations. I have shipped all three for companies and for clients.",
        mn: "Full-stack веб аппликейшн, frontend болон интерфейсийн ажил, backend API буюу интеграц. Гурвуулангийг компанид болон захиалгаар хийж байсан.",
      },
    },
    {
      q: { en: "Are you available right now?", mn: "Одоо ажилд бэлэн үү?" },
      a: {
        en: "I currently work as a full-stack developer at Tavan Bogd NURA and am open to freelance and contract work alongside it. I am based in Ulaanbaatar (UTC+8) and work remotely with comfortable overlap for Asia and Europe — write to confirm the current schedule.",
        mn: "Одоогоор Tavan Bogd NURA-д full-stack хөгжүүлэгчээр ажиллаж байгаа бөгөөд зэрэгцүүлэн freelance, гэрээт ажил авна. Улаанбаатарт (UTC+8) байрлаж, Ази болон Европтой цагийн давхцал сайтай remote ажилладаг — одоогийн хуваарийг мэйлээр тодруулна уу.",
      },
    },
    {
      q: { en: "How do we start?", mn: "Хэрхэн эхлэх вэ?" },
      a: {
        en: "Send a short brief: the problem, the outcome you want, your current stack, timing and constraints. The form at the bottom of this page reaches my inbox directly, and the BRIEF.md block has a template you can paste.",
        mn: "Товч танилцуулга илгээнэ үү: асуудал, хүсэж буй үр дүн, одоогийн технологи, хугацаа, хязгаарлалт. Энэ хуудасны доод хэсгийн форм шууд миний мэйл рүү очно, BRIEF.md хэсэгт хуулж болох загвар бий.",
      },
    },
    {
      q: { en: "Which stack do you prefer?", mn: "Ямар технологиор ажиллах дуртай вэ?" },
      a: {
        en: "Next.js or React with TypeScript on the front, Node.js or FastAPI with PostgreSQL behind it. I have also worked with GraphQL, Prisma, Odoo ERP, Docker and AWS, and I am comfortable picking up whatever your team already runs.",
        mn: "Урд талд Next.js эсвэл React + TypeScript, ард нь Node.js эсвэл FastAPI + PostgreSQL. Мөн GraphQL, Prisma, Odoo ERP, Docker, AWS-тэй ажиллаж байсан бөгөөд танай багийн ашиглаж буй технологийг сурч дасахад бэлэн.",
      },
    },
  ],
};

/* ---------------------------------------------------------------
 * 12. ХОЛБОО БАРИХ / CONTACT
 *     Форм нь EmailJS-ээр ажиллана — .env.local доторх түлхүүрүүдийг үзнэ үү.
 * ------------------------------------------------------------- */
export const contact = {
  eyebrow: { en: "Contact", mn: "Холбоо барих" } satisfies T,
  title: { en: "Have a question or an opportunity?", mn: "Асуулт, боломж байна уу?" } satisfies T,
  body: {
    en: "Feel free to get in touch about questions and opportunities. Tell me what you are building.",
    mn: "Асуулт, боломжуудын талаар надтай чөлөөтэй холбогдоорой. Юу бүтээж байгаагаа надад хэлээрэй.",
  } satisfies T,
  cta: { en: "Start a conversation", mn: "Холбогдох" } satisfies T,
  ctaCall: { en: "Book a 15-min intro", mn: "15 минутын уулзалт товлох" } satisfies T,
  form: {
    name: { en: "Your name", mn: "Таны нэр" } satisfies T,
    email: { en: "Your email", mn: "Таны мэйл" } satisfies T,
    subject: { en: "Subject", mn: "Гарчиг" } satisfies T,
    message: { en: "Message", mn: "Мессеж" } satisfies T,
    send: { en: "Send message", mn: "Мессеж илгээх" } satisfies T,
    sending: { en: "Sending…", mn: "Илгээж байна…" } satisfies T,
    sent: { en: "Message sent — thank you!", mn: "Мессеж илгээгдлээ — баярлалаа!" } satisfies T,
    error: {
      en: "Could not send right now —",
      mn: "Одоогоор илгээж чадсангүй —",
    } satisfies T,
    fallback: {
      en: "open it in your mail app",
      mn: "мэйл програмаараа илгээх",
    } satisfies T,
  },
};

/* ---------------------------------------------------------------
 * 13. FOOTER
 * ------------------------------------------------------------- */
export const footer = {
  pages: { en: "Pages", mn: "Хуудсууд" } satisfies T,
  elsewhere: { en: "Elsewhere", mn: "Бусад холбоос" } satisfies T,
  builtWith: {
    en: "Built with Next.js, Tailwind CSS and Framer Motion.",
    mn: "Next.js, Tailwind CSS, Framer Motion ашиглан бүтээв.",
  } satisfies T,
  rights: { en: "All rights reserved.", mn: "Бүх эрх хуулиар хамгаалагдсан." } satisfies T,
};

/* ---------------------------------------------------------------
 * 14. НИЙТЛЭГ UI ТЕКСТ / SHARED UI
 * ------------------------------------------------------------- */
export const ui = {
  menu: { en: "Menu", mn: "Цэс" } satisfies T,
  close: { en: "Close", mn: "Хаах" } satisfies T,
  backToTop: { en: "Back to top", mn: "Дээш буцах" } satisfies T,
  copied: { en: "Copied", mn: "Хуулагдлаа" } satisfies T,
  copyEmail: { en: "Copy email", mn: "Мэйл хуулах" } satisfies T,
};

/* ---------------------------------------------------------------
 * 15. ХУУЛЖ АВАХ ТАНИЛЦУУЛГА / COPY-PASTE BRIEF
 * ------------------------------------------------------------- */
export const brief = {
  eyebrow: { en: "BRIEF.md", mn: "BRIEF.md" } satisfies T,
  title: { en: "Hire me in one paste.", mn: "Нэг хуулалтаар ажилд ав." } satisfies T,
  body: {
    en: "Drop this into an email, a Slack thread or your favourite chatbot. It has everything a team needs to decide whether to talk to me.",
    mn: "Үүнийг мэйл, Slack эсвэл дуртай чатбот руугаа хуулаад тавь. Багт шийдвэр гаргахад хэрэгтэй бүх зүйл байгаа.",
  } satisfies T,
  filename: "BRIEF.md",
  copy: { en: "COPY", mn: "ХУУЛАХ" } satisfies T,
  copied: { en: "COPIED", mn: "ХУУЛСАН" } satisfies T,
  content: `# BRIEF.md — hire B. Unenbat
Full Stack developer (Ulaanbaatar, remote worldwide).
Currently full-stack developer at Tavan Bogd NURA.

To start a project:
  email    batbaatarunenbat20@gmail.com
  github   github.com/unenbat623
  subject  Project — <what you are building>

Include:
  { "problem": "what is broken or missing",
    "outcome": "what success looks like",
    "stack":   "what you run today",
    "timing":  "when you need it",
    "budget":  "optional range" }

Stack: Next.js / React / TypeScript / Tailwind on the front,
Node.js / Express / FastAPI / GraphQL / REST with PostgreSQL,
MongoDB and Prisma behind it. Docker and AWS for delivery.

Shipped: e-commerce with Odoo ERP + QPay, a loan management
system, an ATS job portal, cinema booking, food delivery,
and an AI-assisted personal Life OS.

Replies within a day or two.`,
};

/* ---------------------------------------------------------------
 * 16. FOOTER — нэмэлт багана, тоо
 * ------------------------------------------------------------- */
export const footerExtra = {
  products: { en: "Links", mn: "Холбоосууд" } satisfies T,
  socials: { en: "Socials", mn: "Сошиал" } satisfies T,
  productLinks: [
    { label: "GitHub", href: "https://github.com/unenbat623" },
    { label: "CV", href: profile.cv },
    { label: "Old portfolio", href: "https://my-portfolio-delta-three-17.vercel.app/" },
    { label: "Life OS", href: "https://web-omega-one-16.vercel.app/" },
  ],
  newsletter: {
    label: { en: "Field notes", mn: "Тэмдэглэл" } satisfies T,
    body: {
      en: "One email when I ship something worth your time. No noise.",
      mn: "Цаг зарцуулах юм гаргахад л нэг мэйл явуулна. Шуугиангүй.",
    } satisfies T,
    placeholder: "you@email.com",
    cta: { en: "SUBSCRIBE", mn: "БҮРТГҮҮЛЭХ" } satisfies T,
    done: { en: "THANKS", mn: "БАЯРЛАЛАА" } satisfies T,
  },
  activity: {
    label: { en: "By the numbers", mn: "Тоон үзүүлэлт" } satisfies T,
    total: { en: "Repos", mn: "Repo" } satisfies T,
    month: { en: "Projects", mn: "Төсөл" } satisfies T,
    today: { en: "Companies", mn: "Компани" } satisfies T,
    counts: { total: "22", month: "28", today: "4" },
  },
  credits: {
    en: "Built with Next.js · Tailwind · Three.js · Framer Motion",
    mn: "Next.js · Tailwind · Three.js · Framer Motion ашиглав",
  } satisfies T,
};
