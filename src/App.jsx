import React, { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const T = {
  zh: {
    nav: ["關於我們", "花藝服務", "作品展示", "Nflorist Café", "聯絡"], order: "立即訂花",
    brandLabel: "澳門自然花藝有限公司", heroTop: "以自然花藝，", heroBottom: "盛放每一個重要時刻。",
    heroText: "從日常花禮、婚禮花卉、企業會展佈置到花藝咖啡空間，nflorist 以細膩設計與自然質感，為澳門的生活與品牌場景注入花的層次。",
    viewWorks: "查看花藝作品", eventBooking: "預約活動佈置", sigLabel: "Signature Style", sigText: "Natural, refined, memorable.",
    highlights: [["20+", "花藝與植物品類"], ["3", "澳門門店及 Café 空間"], ["7 Days", "每週營業，隨時選購心意"]],
    aboutLabel: "About nflorist", aboutTitle: "一間以自然感與設計感為核心的澳門花藝品牌。",
    about: ["nflorist 自然花藝有限公司提供鮮花訂購、婚禮花卉、植物及空間花藝佈置等服務。品牌風格偏向自然、柔和而具層次，適合日常送禮、節慶心意、企業活動與高端空間陳列。", "我們相信花不只是禮物，也是情感、祝福與空間氣氛的延伸。從一束日常鮮花，到婚禮、品牌活動與商業空間佈置，nflorist 以細緻花材配搭與自然美學，陪伴每一個值得被記住的時刻。"],
    servicesLabel: "Services", servicesTitle: "花藝服務",
    categories: [["✿", "鮮花花藝", "日常花束、節日花禮、感恩父母、畢業祝賀、開張花籃與訂製花藝。"], ["♡", "婚禮花卉", "新娘捧花、手腕花、頭花、襟花、婚禮車花與婚宴場地佈置。"], ["☘", "植物與空間佈置", "盆栽銷售、企業綠植、會展花藝、商業空間與品牌活動陳列。"], ["☕", "Nflorist Café", "花藝、植物、咖啡與輕食結合的自然生活美學空間。"]],
    galleryLabel: "Gallery", galleryTitle: "服務分類相簿", colorBrowse: "按色系瀏覽鮮花花藝", selectedAlbum: "Selected Album", totalPre: "共", totalSuf: "張作品", colorSuf: "色系",
    occasionsTitle: "為每一個場合，設計專屬花意。", occasionsDesc: "從色系、花材到包裝與陳列細節，按場合與預算提供建議。",
    occasions: ["生日與紀念日", "畢業與祝賀", "婚禮與求婚", "開張與企業禮品", "品牌活動與會展", "酒店及商業空間"],
    cafeTitle: "花藝、植物與咖啡的自然空間。", cafeText: "位於澳門漁人碼頭的 Nflorist Café，將花藝、綠植與咖啡生活方式結合，適合作為品牌延伸、生活體驗與社交打卡空間。",
    contactLabel: "Contact", contactTitle: "門店與查詢", map: "查看地圖", call: "立即致電", copy: "複製", copied: "已複製",
    wechatLabel: "微信查詢與預約", wechatText: "可透過 WeChat 查詢花束訂購、婚禮花卉、企業花藝及活動佈置。每間店均設有獨立 WeChat ID。點擊下方 WeChat ID 即可複製，方便客人直接加入對應門店。",
    ctaTitle: "需要企業花藝、婚禮或會展佈置？", ctaText: "留下日期、場地、預算與喜好色系，團隊可為你規劃合適方案。",
    close: "關閉圖片預覽", preview: "圖片放大預覽", fallback: "請將圖片放入指定資料夾，並確認檔名與程式一致。",
    footerLeft: "© nflorist Co. Ltd. Website concept redesign.", footerRight: "Fresh flowers · Wedding florals · Plants · Café",
    albums: {
      bouquet: ["鮮花花藝", "日常花束、節日花禮、畢業花束、開張花籃與訂製花藝。"], wedding: ["婚禮花卉", "新娘捧花、襟花、手腕花、車花與婚宴場地佈置。"],
      venue: ["會場佈置", "宴會、品牌活動、開幕禮、節慶活動與商業場景花藝佈置。"], signboard: ["花牌", "開張花牌、祝賀花牌、活動花牌與訂製祝福花禮。"],
      tableflower: ["枱花", "餐桌花、會議枱花、接待枱花、宴會及品牌活動枱面花藝。"], mothersday2026: ["2026年母親節花禮", "以溫柔花色與細緻花材，為母親節準備充滿心意的節日花禮。"],
    },
    colors: { all: "全部", red: "紅", orange: "橙", pink: "粉紅", yellow: "黃", green: "綠", blue: "藍", purple: "紫", white: "白", colorful: "彩色" },
  },
  en: {
    nav: ["About", "Services", "Gallery", "Café", "Contact"], order: "Order Flowers",
    brandLabel: "Nflorist Macau Limited", heroTop: "Natural florals,", heroBottom: "for every meaningful moment.",
    heroText: "From everyday floral gifts and wedding flowers to corporate events, venue styling, and our floral café concept, nflorist brings refined natural beauty into life’s most memorable scenes.",
    viewWorks: "View Floral Works", eventBooking: "Book Event Styling", sigLabel: "Signature Style", sigText: "Natural, refined, memorable.",
    highlights: [["20+", "Floral & plant categories"], ["3", "Macau shops & café space"], ["7 Days", "Open weekly for floral gifting"]],
    aboutLabel: "About nflorist", aboutTitle: "A Macau floral brand shaped by nature, emotion, and refined detail.",
    about: ["nflorist offers fresh flower orders, wedding florals, plants, and floral styling for spaces and events. Our style is natural, gentle, and layered, suited for everyday gifting, seasonal occasions, corporate events, and refined commercial displays.", "We believe flowers are more than gifts. They carry emotion, blessings, and atmosphere. From a daily bouquet to weddings, brand events, and commercial venue styling, nflorist creates floral moments with thoughtful materials and natural aesthetics."],
    servicesLabel: "Services", servicesTitle: "Floral Services",
    categories: [["✿", "Fresh Florals", "Daily bouquets, festive gifts, graduation flowers, opening baskets, and custom floral designs."], ["♡", "Wedding Florals", "Bridal bouquets, wrist corsages, hair flowers, boutonnieres, car flowers, and wedding venue styling."], ["☘", "Plants & Styling", "Potted plants, corporate greenery, exhibition florals, retail spaces, and brand event displays."], ["☕", "Nflorist Café", "A lifestyle space combining florals, plants, coffee, and light refreshments."]],
    galleryLabel: "Gallery", galleryTitle: "Service Albums", colorBrowse: "Browse fresh florals by colour", selectedAlbum: "Selected Album", totalPre: "", totalSuf: " works", colorSuf: " palette",
    occasionsTitle: "Floral designs for every occasion.", occasionsDesc: "From colours and materials to wrapping and display details, we tailor suggestions to the occasion and budget.",
    occasions: ["Birthdays & Anniversaries", "Graduation & Congratulations", "Weddings & Proposals", "Grand Openings & Corporate Gifts", "Brand Events & Exhibitions", "Hotels & Commercial Spaces"],
    cafeTitle: "A natural space for flowers, plants, and coffee.", cafeText: "Located at Macau Fisherman’s Wharf, Nflorist Café combines florals, greenery, and coffee lifestyle, creating a natural extension of the brand and a relaxed social space.",
    contactLabel: "Contact", contactTitle: "Stores & Enquiries", map: "View Map", call: "Call Now", copy: "Copy", copied: "Copied",
    wechatLabel: "WeChat Enquiries & Bookings", wechatText: "Contact us on WeChat for bouquet orders, wedding florals, corporate floral design, and event styling. Each store has its own WeChat ID. Tap an ID below to copy it.",
    ctaTitle: "Need corporate florals, wedding flowers, or event styling?", ctaText: "Share your date, venue, budget, and preferred colour palette. Our team will help plan a suitable floral direction.",
    close: "Close image preview", preview: "Image preview", fallback: "Please place the image in the correct folder and make sure the filename matches the code.",
    footerLeft: "© nflorist Co. Ltd. Website concept redesign.", footerRight: "Fresh flowers · Wedding florals · Plants · Café",
    albums: {
      bouquet: ["Fresh Florals", "Daily bouquets, festive gifts, graduation flowers, opening baskets, and custom floral designs."], wedding: ["Wedding Florals", "Bridal bouquets, boutonnieres, wrist corsages, car flowers, and wedding venue styling."],
      venue: ["Venue Styling", "Banquets, brand events, openings, seasonal installations, and commercial floral styling."], signboard: ["Flower Stands", "Opening flower stands, congratulatory stands, event flower stands, and custom floral greetings."],
      tableflower: ["Table Flowers", "Dining table florals, meeting table flowers, reception flowers, banquet and brand event table styling."], mothersday2026: ["Mother’s Day 2026", "A seasonal floral gift collection designed with soft palettes and heartfelt details for Mother’s Day."],
    },
    colors: { all: "All", red: "Red", orange: "Orange", pink: "Pink", yellow: "Yellow", green: "Green", blue: "Blue", purple: "Purple", white: "White", colorful: "Colourful" },
  },
};

const C = {
  page: "bg-[#11130f] text-[#f4efe6]",
  panel: "bg-[#1b2018]/58 border border-white/10 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl",
  soft: "bg-[#20261d]/46 border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.20)] backdrop-blur-lg",
  muted: "text-[#d6cfc0]",
  muted2: "text-[#b7b19f]",
  chip: "bg-[#1f251c]/56 text-[#d6cfc0] border border-white/10 backdrop-blur-md hover:bg-[#293124]/70 hover:border-[#6f745f]/70",
  active: "bg-[#c7b98b] text-[#161812] shadow-[0_12px_30px_rgba(199,185,139,0.18)]",
};

const brand = {
  name: "nflorist", tagline: "the natural one", legalName: "澳門自然花藝有限公司", email: "info@nflorist.com.mo",
  wechat: { macau: "nflorist2018", taipa: "nflorist_taipa", cafe: "nflorist_6181" },
  social: { instagram: "https://www.instagram.com/nfloristmacau/", facebook: "https://m.facebook.com/nflorist.mo/", cafeInstagram: "https://www.instagram.com/nflorist_cafe/" },
};

const img = { logo: "/images/nflorist/logo.png", hero: "/images/nflorist/hero.jpg", cafe: "/images/nflorist/cafe.jpg" };
const up = (folder, file) => `/images/nflorist/uploads/${folder}/${file}`;
const bq = (color, file) => up(`flower/${color}`, file);
const range = (make, prefix, start, count, ext = "jpg") => Array.from({ length: count }, (_, i) => make(`${prefix}${start + i}.${ext}`));
const flowers = (color, start, count, ext = "jpg") => range((file) => bq(color, file), "flower", start, count, ext);
const customFlowers = (color, nums, ext = {}) => nums.map((n) => bq(color, `flower${n}.${ext[n] || "jpg"}`));

const flowerDefs = [
  ["red", () => flowers("red", 9, 49)], ["orange", () => flowers("orange", 22, 16)], ["pink", () => flowers("pink", 23, 54)], ["yellow", () => flowers("yellow", 10, 20)], ["green", () => flowers("green", 21, 7)],
  ["blue", () => customFlowers("blue", [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 4, 14], { 16: "JPG", 32: "JPG" })],
  ["purple", () => flowers("purple", 20, 51)], ["white", () => flowers("white", 23, 15)], ["colorful", () => flowers("colorful", 20, 29)],
];

const albumSpecs = [
  ["wedding", (f) => range(f, "wedding", 1, 68)], ["venue", (f) => range(f, "venue", 1, 30)], ["signboard", (f) => range(f, "signboard", 1, 80)],
  ["tableflower", (f) => range(f, "tableflower", 1, 38)], ["mothersday2026", (f) => range(f, "mothersday", 1, 13)],
];

const ids = ["about", "services", "gallery", "cafe", "contact"];
const A = ({ href, children, className = "" }) => <a href={href} className={className}>{children}</a>;
const Btn = ({ children, className = "", outline = false, ...props }) => <button type="button" className={`inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-[#c7b98b] focus:ring-offset-2 focus:ring-offset-[#11130f] ${outline ? "border border-[#6f745f] bg-transparent text-[#f4efe6] hover:bg-[#252b21]" : "bg-[#c7b98b] text-[#161812] hover:bg-[#dfd0a0]"} ${className}`} {...props}>{children}</button>;
const Icon = ({ label, className = "", size = "text-2xl" }) => <span aria-hidden="true" className={`inline-flex shrink-0 items-center justify-center ${size} ${className}`}>{label}</span>;

const Img = ({ src, alt, className = "", loading = "lazy", label = "Nflorist", fallback }) => {
  const [bad, setBad] = useState(false);
  return bad ? <div role="img" aria-label={alt} className={`flex h-full w-full items-center justify-center bg-[#1b2018] p-8 text-center ${className}`}><div><p className="text-5xl text-[#c7b98b]">✿</p><p className="mt-4 text-lg font-semibold text-[#f4efe6]">{label}</p><p className="mt-2 text-sm leading-6 text-[#b7b19f]">{fallback}</p></div></div> : <img src={src} alt={alt} className={className} loading={loading} onError={() => setBad(true)} />;
};

const AmbientGlassBloom = () => {
  const petals = [
    { left: "4%", size: 82, dur: 18, delay: 0, rotate: -18, drift: 42 },
    { left: "12%", size: 118, dur: 24, delay: 2.1, rotate: 14, drift: -48 },
    { left: "21%", size: 76, dur: 20, delay: 4.3, rotate: -10, drift: 36 },
    { left: "31%", size: 142, dur: 27, delay: 1.2, rotate: 22, drift: -56 },
    { left: "43%", size: 92, dur: 21, delay: 5.8, rotate: -24, drift: 40 },
    { left: "55%", size: 162, dur: 30, delay: 2.8, rotate: 12, drift: -60 },
    { left: "67%", size: 86, dur: 19, delay: 6.4, rotate: 26, drift: 38 },
    { left: "79%", size: 132, dur: 26, delay: 1.6, rotate: -16, drift: -52 },
    { left: "90%", size: 102, dur: 22, delay: 7.2, rotate: 20, drift: 34 },
  ];

  const glints = [
    { left: "10%", top: "18%", size: 4, dur: 7, delay: 0 },
    { left: "28%", top: "42%", size: 5, dur: 9, delay: 1.2 },
    { left: "51%", top: "24%", size: 4, dur: 8, delay: 0.8 },
    { left: "74%", top: "58%", size: 5, dur: 10, delay: 2.1 },
    { left: "88%", top: "30%", size: 4, dur: 8.5, delay: 1.5 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 top-[10%] h-80 w-80 rounded-full bg-[#c7b98b]/10 blur-3xl" />
      <div className="absolute right-[4%] top-[8%] h-96 w-96 rounded-full bg-[#6f745f]/10 blur-3xl" />
      <div className="absolute left-[36%] bottom-[4%] h-[28rem] w-[28rem] rounded-full bg-[#c7b98b]/[0.06] blur-3xl" />

      {petals.map((p, i) => (
        <motion.div
          key={`glass-petal-${i}`}
          className="absolute top-[-24vh] rounded-[68%_32%_70%_30%] border border-white/10 blur-[0.6px]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.45,
            rotate: `${p.rotate}deg`,
            background: "linear-gradient(145deg, rgba(244,239,230,0.07) 0%, rgba(199,185,139,0.12) 42%, rgba(111,116,95,0.08) 100%)",
            boxShadow: "0 0 46px rgba(199,185,139,0.045), inset 0 0 18px rgba(255,255,255,0.04)",
          }}
          animate={{
            y: ["-24vh", "30vh", "72vh", "126vh"],
            x: [0, p.drift, -p.drift * 0.7, p.drift * 0.35],
            rotate: [p.rotate, p.rotate + 10, p.rotate - 12, p.rotate + 4],
            opacity: [0, 0.18, 0.28, 0.1, 0],
            scale: [0.88, 1.02, 1.07, 0.96],
            filter: ["brightness(0.92)", "brightness(1.08)", "brightness(0.96)", "brightness(1.06)", "brightness(0.92)"],
          }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {glints.map((g, i) => (
        <motion.span
          key={`glass-glint-${i}`}
          className="absolute rounded-full bg-[#f4efe6]/30 blur-[0.8px]"
          style={{ left: g.left, top: g.top, width: g.size, height: g.size }}
          animate={{ opacity: [0, 0.45, 0.12, 0.5, 0], scale: [0.7, 1.15, 0.85, 1.25, 0.7] }}
          transition={{ duration: g.dur, delay: g.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const GlassScrim = () => (
  <div className="pointer-events-none fixed inset-0 z-[6] overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-white/[0.014] backdrop-blur-[12px]" />
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(circle at 18% 16%, rgba(255,255,255,0.05), transparent 30%),
          radial-gradient(circle at 82% 20%, rgba(199,185,139,0.06), transparent 28%),
          radial-gradient(circle at 52% 74%, rgba(111,116,95,0.055), transparent 32%),
          linear-gradient(180deg, rgba(255,255,255,0.018) 0%, rgba(17,19,15,0.065) 100%)
        `,
      }}
    />
  </div>
);

const SectionTitle = ({ label, title, center = false }) => <div className={center ? "mb-12 text-center" : "mb-12"}><p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">{label}</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h2></div>;

const makeAlbums = (t) => {
  const colors = flowerDefs.map(([id, get]) => ({ id, title: t.colors[id], images: get() }));
  const all = { id: "all", title: t.colors.all, images: colors.flatMap((x) => x.images) };
  const path = (folder) => (file) => up(folder, file);
  const albums = [{ id: "bouquet", title: t.albums.bouquet[0], description: t.albums.bouquet[1], images: all.images, colorAlbums: [all, ...colors] }];
  albumSpecs.forEach(([id, get]) => albums.push({ id, title: t.albums[id][0], description: t.albums[id][1], images: get(path(id)) }));
  return { colors: [all, ...colors], albums };
};

const getLocations = (lang) => [
  { name: lang === "zh" ? "皇朝總店" : "Dynasty Main Store", wechatId: brand.wechat.macau, address: lang === "zh" ? "澳門宋玉生廣場92號環宇豪庭地下及閣樓I座" : "Shop I, G/F & Mezzanine, Universal Court, 92 Alameda Dr. Carlos D'Assumpção, Macau", phone: "+853 2822 5622 / 2822 5688", href: "tel:+85328225622", href2: "tel:+85328225688", map: "https://www.google.com/maps/search/?api=1&query=%E6%BE%B3%E9%96%80%E5%AE%8B%E7%8E%89%E7%94%9F%E5%BB%A3%E5%A0%B492%E8%99%9F%E7%92%B0%E5%AE%87%E8%B1%AA%E5%BA%AD%E5%9C%B0%E4%B8%8B%E5%8F%8A%E9%96%A3%E6%A8%93I%E5%BA%A7%20nflorist", hours: "10:00 – 19:00" },
  { name: lang === "zh" ? "氹仔店" : "Taipa Store", wechatId: brand.wechat.taipa, address: lang === "zh" ? "氹仔奧林匹克大馬路551號花城地下AR座" : "Shop AR, G/F, Flower City, 551 Avenida Olímpica, Taipa", phone: "+853 2857 6206", href: "tel:+85328576206", map: "https://www.google.com/maps/search/?api=1&query=%E6%B0%B9%E4%BB%94%E5%A5%A7%E6%9E%97%E5%8C%B9%E5%85%8B%E5%A4%A7%E9%A6%AC%E8%B7%AF551%E8%99%9F%E8%8A%B1%E5%9F%8E%E5%9C%B0%E4%B8%8BAR%E5%BA%A7%20nflorist", hours: lang === "zh" ? "週一至週五 10:00 – 19:00 / 週末 11:00 – 20:00" : "Mon–Fri 10:00 – 19:00 / Weekend 11:00 – 20:00" },
  { name: "Nflorist Café", wechatId: brand.wechat.cafe, address: lang === "zh" ? "澳門漁人碼頭羅馬及英國館地下09–11號舖" : "Shops 09–11, G/F, Roman & British Buildings, Macau Fisherman’s Wharf", phone: "+853 2838 8633", href: "tel:+85328388633", map: "https://www.google.com/maps/search/?api=1&query=%E6%BE%B3%E9%96%80%E6%BC%81%E4%BA%BA%E7%A2%BC%E9%A0%AD%E7%BE%85%E9%A6%AC%E5%8F%8A%E8%8B%B1%E5%9C%8B%E9%A4%A8%E5%9C%B0%E4%B8%8B09-11%E8%99%9F%E8%88%96%20Nflorist%20Cafe", hours: "09:00 – 19:00" },
];

export function validateWebsiteData() {
  const { colors, albums } = makeAlbums(T.zh);
  const blue = colors.find((x) => x.id === "blue");
  const md = albums.find((x) => x.id === "mothersday2026");
  const errors = [];
  if (!brand.name || !brand.legalName || !brand.email) errors.push("Missing brand data.");
  if (!brand.wechat.macau || !brand.wechat.taipa || !brand.wechat.cafe) errors.push("Missing WeChat IDs.");
  if (albums.length !== 6) errors.push("Expected exactly 6 albums.");
  if (!albums.every((a) => a.id && a.title && a.description && a.images?.length)) errors.push("Invalid album data.");
  if (!blue?.images.includes("/images/nflorist/uploads/flower/blue/flower16.JPG")) errors.push("Missing blue flower16.JPG.");
  if (!blue?.images.includes("/images/nflorist/uploads/flower/blue/flower32.JPG")) errors.push("Missing blue flower32.JPG.");
  if (md?.images.length !== 13) errors.push("Mother's Day 2026 album must contain 13 images.");
  return { passed: errors.length === 0, errors };
}

export const websiteDataTestResult = validateWebsiteData();

export default function NfloristWebsiteConcept() {
  const { scrollYProgress } = useScroll();
  const scrollProgressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [lang, setLang] = useState(() => (typeof window === "undefined" ? "zh" : window.localStorage.getItem("nflorist-lang") || "zh"));
  const [copied, setCopied] = useState("");
  const [activeAlbum, setActiveAlbum] = useState("bouquet");
  const [activeColor, setActiveColor] = useState("all");
  const [selected, setSelected] = useState(null);
  const t = T[lang];
  const { colors, albums } = useMemo(() => makeAlbums(t), [t]);
  const locations = useMemo(() => getLocations(lang), [lang]);
  const album = albums.find((x) => x.id === activeAlbum) || albums[0];
  const color = colors.find((x) => x.id === activeColor) || colors[0];
  const gallery = album.id === "bouquet" ? color.images : album.images;
  const fallback = t.fallback;

  const setLangSafe = (next) => { setLang(next); if (typeof window !== "undefined") window.localStorage.setItem("nflorist-lang", next); };
  const copy = async (id) => { try { await navigator.clipboard.writeText(id); } catch { const el = document.createElement("textarea"); el.value = id; document.body.appendChild(el); el.select(); document.execCommand("copy"); el.remove(); } setCopied(id); setTimeout(() => setCopied(""), 1800); };
  const showAlbum = (id) => { setActiveAlbum(id); setActiveColor("all"); setTimeout(() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" }), 0); };

  return <div className={`relative min-h-screen overflow-x-hidden ${C.page}`}>
    <motion.div className="fixed left-0 top-0 z-[90] h-[3px] origin-left bg-[#c7b98b] shadow-[0_0_18px_rgba(199,185,139,0.65)]" style={{ scaleX: scrollProgressScale, width: "100%" }} aria-hidden="true" />
    <AmbientGlassBloom />
    <GlassScrim />

    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#11130f]/62 backdrop-blur-2xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
      <A href="#top" className="flex min-w-0 items-center gap-3"><div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#1b2018] ring-1 ring-[#3b4435]"><Img src={img.logo} alt="nflorist logo" className="h-full w-full object-contain p-1.5" loading="eager" label="Logo" fallback={fallback} /></div><div className="hidden sm:block"><p className="text-xl font-semibold tracking-tight text-[#f4efe6]">{brand.name}</p><p className={`text-xs uppercase tracking-[0.28em] ${C.muted2}`}>{brand.tagline}</p></div></A>
      <nav className={`hidden items-center gap-7 text-sm ${C.muted} lg:flex`}>{ids.map((id, i) => <A key={id} href={`#${id}`} className="transition hover:text-white">{t.nav[i]}</A>)}</nav>
      <div className="flex items-center gap-2"><div className="flex rounded-full border border-[#3b4435] bg-[#1f251c] p-1 text-xs sm:text-sm">{["zh", "en"].map((x) => <button key={x} type="button" onClick={() => setLangSafe(x)} className={`rounded-full px-3 py-1.5 transition ${lang === x ? "bg-[#c7b98b] text-[#161812]" : "text-[#d6cfc0] hover:text-white"}`}>{x === "zh" ? "中文" : "EN"}</button>)}</div><A href="#contact" className="hidden sm:block"><Btn className="px-5">{t.order}</Btn></A></div>
    </div></header>

    <main id="top" className="relative z-[20] pt-20">
      <section className="relative overflow-hidden px-6 py-20 md:py-28"><div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#4d5642] opacity-14 blur-3xl" /><div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#c7b98b] opacity-8 blur-3xl" /><div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}><div className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${C.soft} ${C.muted}`}><Icon label="✦" size="text-base" />{t.brandLabel}</div><h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">{t.heroTop}<span className="block text-[#c7b98b]">{t.heroBottom}</span></h1><p className={`mt-7 max-w-xl text-lg leading-8 ${C.muted}`}>{t.heroText}</p><div className="mt-9 flex flex-wrap gap-4"><A href="#gallery"><Btn className="px-7 py-6 text-base">{t.viewWorks}</Btn></A><A href="#contact"><Btn outline className="px-7 py-6 text-base">{t.eventBooking}</Btn></A></div><div className="mt-7 flex flex-wrap gap-3 text-sm">{[[brand.social.instagram, "Instagram"], [brand.social.facebook, "Facebook"], [brand.social.cafeInstagram, "Café Instagram"], ["#wechat", "WeChat"]].map(([href, label]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`rounded-full px-4 py-2 transition ${C.chip}`}>{label}</a>)}</div><div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">{t.highlights.map(([num, label]) => <div key={label} className={`rounded-3xl p-5 backdrop-blur ${C.soft}`}><p className="text-2xl font-semibold text-[#c7b98b]">{num}</p><p className={`mt-1 text-sm leading-5 ${C.muted2}`}>{label}</p></div>)}</div></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative"><div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#1b2018] shadow-[0_30px_90px_rgba(0,0,0,0.5)] ring-1 ring-[#3b4435]"><Img src={img.hero} alt="nflorist bouquet" className="h-full w-full object-cover" loading="eager" label="Hero Image" fallback={fallback} /></div><div className="absolute -bottom-7 left-6 w-[82%] rounded-3xl bg-[#1b2018]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-[#3b4435] backdrop-blur"><p className="text-sm uppercase tracking-[0.24em] text-[#c7b98b]">{t.sigLabel}</p><p className="mt-2 text-2xl font-semibold text-[#f4efe6]">{t.sigText}</p></div></motion.div>
      </div></section>

      <section id="about" className="relative px-6 py-24"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">{t.aboutLabel}</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.aboutTitle}</h2></div><div className={`space-y-6 text-lg leading-9 ${C.muted}`}>{t.about.map((p) => <p key={p}>{p}</p>)}</div></div></section>

      <section id="services" className="relative px-6 py-24"><div className="mx-auto max-w-7xl"><SectionTitle label={t.servicesLabel} title={t.servicesTitle} /><div className="grid gap-5 md:grid-cols-4">{t.categories.map(([icon, title, desc]) => <div key={title} className={`rounded-3xl p-7 transition hover:-translate-y-1 hover:bg-[#252b21] ${C.soft}`}><Icon label={icon} className="mb-8 text-[#c7b98b]" size="text-4xl" /><h3 className="text-xl font-semibold text-[#f4efe6]">{title}</h3><p className={`mt-4 leading-7 ${C.muted2}`}>{desc}</p></div>)}</div></div></section>

      <section id="mothersday2026" className="relative px-6 py-24"><div className={`mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10 ${C.panel}`}><div className="p-2 md:p-6"><p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">Mother&apos;s Day 2026</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">{t.albums.mothersday2026[0]}</h2><p className={`mt-6 text-lg leading-8 ${C.muted}`}>{t.albums.mothersday2026[1]}</p><div className="mt-8 flex flex-wrap gap-4"><Btn className="px-7 py-6 text-base" onClick={() => showAlbum("mothersday2026")}>{lang === "zh" ? "查看母親節花禮" : "View Mother’s Day Gifts"}</Btn><A href="#wechat"><Btn outline className="px-7 py-6 text-base">{lang === "zh" ? "微信預訂" : "Book on WeChat"}</Btn></A></div></div><div className="grid grid-cols-2 gap-4">{albums.find((x) => x.id === "mothersday2026")?.images.slice(0, 4).map((src, i) => <button key={src} type="button" onClick={() => setSelected({ src, alt: `${t.albums.mothersday2026[0]} ${i + 1}` })} className="group overflow-hidden rounded-3xl bg-[#1b2018] ring-1 ring-[#3b4435] transition hover:ring-[#c7b98b]"><Img src={src} alt={`${t.albums.mothersday2026[0]} ${i + 1}`} className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105" label={`${t.albums.mothersday2026[0]} ${i + 1}`} fallback={fallback} /></button>)}</div></div></section>

      <section id="gallery" className="relative px-6 py-24"><div className="mx-auto max-w-7xl"><SectionTitle label={t.galleryLabel} title={t.galleryTitle} center /><div className="mb-10 flex flex-wrap justify-center gap-3">{albums.map((a) => <button key={a.id} type="button" onClick={() => { setActiveAlbum(a.id); if (a.id !== "bouquet") setActiveColor("all"); }} className={`rounded-full px-5 py-3 text-sm transition ${activeAlbum === a.id ? C.active : C.chip}`}>{a.title}</button>)}</div>{activeAlbum === "bouquet" && <div className={`mb-8 rounded-[2rem] p-5 md:p-6 ${C.soft}`}><p className={`mb-4 text-center text-sm font-medium md:text-left ${C.muted}`}>{t.colorBrowse}</p><div className="flex flex-wrap justify-center gap-3 md:justify-start">{colors.map((c) => <button key={c.id} type="button" onClick={() => setActiveColor(c.id)} className={`rounded-full px-4 py-2 text-sm transition ${activeColor === c.id ? C.active : C.chip}`}>{c.title}</button>)}</div></div>}<div className={`mb-10 rounded-[2rem] p-6 md:p-8 ${C.panel}`}><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-sm uppercase tracking-[0.24em] text-[#c7b98b]">{t.selectedAlbum}</p><h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#f4efe6]">{album.id === "bouquet" && activeColor !== "all" ? `${album.title}｜${color.title}${t.colorSuf}` : album.title}</h3><p className={`mt-5 max-w-2xl leading-7 ${C.muted2}`}>{album.description}</p></div><div className={`rounded-full px-4 py-2 text-sm ${C.chip}`}>{t.totalPre} {gallery.length}{t.totalSuf}</div></div></div><div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">{gallery.map((src, i) => { const label = `${album.id === "bouquet" && activeColor !== "all" ? color.title + t.colorSuf : album.title} ${i + 1}`; return <motion.button key={`${activeAlbum}-${activeColor}-${src}`} type="button" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.25) }} onClick={() => setSelected({ src, alt: label })} className="group cursor-zoom-in overflow-hidden rounded-xl bg-[#1b2018] ring-1 ring-[#2f352b] transition hover:ring-[#c7b98b] sm:rounded-[1.5rem]"><Img src={src} alt={label} className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105" label={label} fallback={fallback} /></motion.button>; })}</div></div></section>

      <section className="relative px-6 py-24"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3"><div><Icon label="◇" className="mb-6 text-[#c7b98b]" size="text-4xl" /><h2 className="text-4xl font-semibold tracking-tight">{t.occasionsTitle}</h2></div><div className="grid gap-5 md:col-span-2 md:grid-cols-2 lg:grid-cols-3">{t.occasions.map((x) => <div key={x} className={`rounded-3xl p-7 ${C.soft}`}><Icon label="◌" className="mb-5 text-[#c7b98b]" size="text-3xl" /><p className="text-2xl font-medium">{x}</p><p className={`mt-3 leading-7 ${C.muted2}`}>{t.occasionsDesc}</p></div>)}</div></div></section>

      <section id="cafe" className="relative px-6 py-24"><div className={`mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] p-6 md:grid-cols-2 md:p-10 ${C.panel}`}><div className="overflow-hidden rounded-[2rem] bg-[#1b2018] ring-1 ring-[#3b4435]"><Img src={img.cafe} alt="Nflorist Café" className="aspect-[4/3] h-full w-full object-cover" label="Café Image" fallback={fallback} /></div><div className="p-2 md:p-6"><p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">Nflorist Café</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">{t.cafeTitle}</h2><p className={`mt-6 text-lg leading-8 ${C.muted}`}>{t.cafeText}</p><div className="mt-8 flex flex-wrap gap-3 text-sm">{["Flower", "Plants", "Coffee", "Lifestyle"].map((x) => <span key={x} className={`rounded-full px-4 py-2 ${C.chip}`}>{x}</span>)}</div></div></div></section>

      <section id="contact" className="relative px-6 py-24"><div className="mx-auto max-w-7xl"><SectionTitle label={t.contactLabel} title={t.contactTitle} /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{locations.map((loc) => <div key={loc.name} className={`rounded-3xl p-8 ${C.soft}`}><h3 className="text-2xl font-semibold text-[#f4efe6]">{loc.name}</h3><p className="mt-5 flex gap-3 text-[#d6cfc0]"><Icon label="⌖" size="text-lg" /><a href={loc.map} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">{loc.address}</a></p><p className="mt-5 flex gap-3 text-[#d6cfc0]"><Icon label="☎" size="text-lg" /><span><a href={loc.href} className="hover:text-white hover:underline">{loc.phone.split(" / ")[0]}</a>{loc.href2 && <><span> / </span><a href={loc.href2} className="hover:text-white hover:underline">{loc.phone.split(" / ")[1]}</a></>}</span></p><p className="mt-5 flex gap-3 text-[#d6cfc0]"><Icon label="◷" size="text-lg" />{loc.hours}</p><div className="mt-7 flex flex-wrap gap-3"><a href={loc.map} target="_blank" rel="noreferrer" className={`rounded-full px-4 py-2 text-sm transition ${C.chip}`}>{t.map}</a><a href={loc.href} className="rounded-full bg-[#c7b98b] px-4 py-2 text-sm text-[#161812] transition hover:bg-[#dfd0a0]">{t.call}</a></div></div>)}</div>
        <div id="wechat" className={`mt-8 rounded-3xl p-8 ${C.panel}`}><p className="text-sm uppercase tracking-[0.24em] text-[#c7b98b]">WeChat</p><h3 className="mt-2 text-2xl font-semibold">{t.wechatLabel}</h3><p className={`mt-3 leading-7 ${C.muted}`}>{t.wechatText}</p><div className="mt-5 grid gap-3 md:grid-cols-3">{locations.map((loc) => <button key={loc.wechatId} type="button" onClick={() => copy(loc.wechatId)} className="group rounded-3xl bg-[#1f251c] p-5 text-left text-[#f4efe6] ring-1 ring-[#3b4435] transition hover:-translate-y-0.5 hover:bg-[#293124]"><p className="font-semibold">{loc.name}</p><p className="mt-2 text-sm text-[#b7b19f]">WeChat ID</p><div className="mt-1 flex items-center justify-between gap-3"><p className="break-all text-lg font-medium">{loc.wechatId}</p><span className="shrink-0 rounded-full bg-[#303729] px-3 py-1 text-xs text-[#d6cfc0]">{copied === loc.wechatId ? t.copied : t.copy}</span></div></button>)}</div></div>

        <div className={`mt-8 rounded-[2.5rem] p-8 md:p-10 ${C.panel}`}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#c7b98b]">Event Styling</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">{t.ctaTitle}</h3>
              <p className={`mt-4 max-w-2xl leading-7 ${C.muted}`}>{t.ctaText}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href="tel:+85328225622" className="rounded-full bg-[#c7b98b] px-5 py-3 text-sm font-medium text-[#161812] transition hover:bg-[#dfd0a0]">{t.call}</a>
              <button type="button" onClick={() => copy(brand.wechat.macau)} className={`rounded-full px-5 py-3 text-sm transition ${C.chip}`}>WeChat: {brand.wechat.macau}</button>
            </div>
          </div>
        </div>
      </div></section>
    </main>

    <footer className="relative z-[20] border-t border-white/10 px-6 py-8 backdrop-blur-sm">
      <div className={`mx-auto flex max-w-7xl flex-col gap-3 text-sm ${C.muted2} md:flex-row md:items-center md:justify-between`}>
        <p>{t.footerLeft}</p>
        <p>{t.footerRight}</p>
      </div>
    </footer>

    {selected && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/86 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={t.preview} onClick={() => setSelected(null)}>
        <button type="button" className="absolute right-4 top-4 rounded-full bg-[#1b2018] px-5 py-3 text-sm text-[#f4efe6] ring-1 ring-[#3b4435] transition hover:bg-[#293124]" onClick={() => setSelected(null)}>
          {t.close}
        </button>
        <div className="max-h-[86vh] max-w-5xl overflow-hidden rounded-[2rem] bg-[#1b2018] ring-1 ring-[#3b4435]" onClick={(event) => event.stopPropagation()}>
          <Img src={selected.src} alt={selected.alt} className="max-h-[86vh] w-full object-contain" label={selected.alt} fallback={fallback} />
        </div>
      </div>
    )}
  </div>;
}
