import React, { useState } from "react";
import { motion } from "framer-motion";

const translations = {
  zh: {
    nav: {
      about: "關於我們",
      services: "花藝服務",
      gallery: "作品展示",
      cafe: "Nflorist Café",
      contact: "聯絡",
      orderNow: "立即訂花",
    },
    brandLabel: "澳門自然花藝有限公司",
    heroTitleTop: "以自然花藝，",
    heroTitleBottom: "盛放每一個重要時刻。",
    heroText:
      "從日常花禮、婚禮花卉、企業會展佈置到花藝咖啡空間，nflorist 以細膩設計與自然質感，為澳門的生活與品牌場景注入花的層次。",
    viewWorks: "查看花藝作品",
    eventBooking: "預約活動佈置",
    signatureLabel: "Signature Style",
    signatureText: "Natural, refined, memorable.",
    highlights: [
      { number: "20+", label: "花藝與植物品類" },
      { number: "3", label: "澳門門店及 Café 空間" },
      { number: "7 Days", label: "每週營業，隨時選購心意" },
    ],
    aboutLabel: "About nflorist",
    aboutTitle: "一間以自然感與設計感為核心的澳門花藝品牌。",
    aboutP1:
      "nflorist 自然花藝有限公司提供鮮花訂購、婚禮花卉、植物及空間花藝佈置等服務。品牌風格偏向自然、柔和而具層次，適合日常送禮、節慶心意、企業活動與高端空間陳列。",
    aboutP2:
      "我們相信花不只是禮物，也是情感、祝福與空間氣氛的延伸。從一束日常鮮花，到婚禮、品牌活動與商業空間佈置，nflorist 以細緻花材配搭與自然美學，陪伴每一個值得被記住的時刻。",
    servicesLabel: "Services",
    servicesTitle: "花藝服務",
    servicesIntro: "",
    categories: [
      { icon: "✿", title: "鮮花花藝", desc: "日常花束、節日花禮、感恩父母、畢業祝賀、開張花籃與訂製花藝。" },
      { icon: "♡", title: "婚禮花卉", desc: "新娘捧花、手腕花、頭花、襟花、婚禮車花與婚宴場地佈置。" },
      { icon: "☘", title: "植物與空間佈置", desc: "盆栽銷售、企業綠植、會展花藝、商業空間與品牌活動陳列。" },
      { icon: "☕", title: "Nflorist Café", desc: "花藝、植物、咖啡與輕食結合的自然生活美學空間。" },
    ],
    galleryLabel: "Gallery",
    galleryTitle: "服務分類相簿",
    galleryIntro: "",
    colorBrowse: "按色系瀏覽鮮花花藝",
    selectedAlbum: "Selected Album",
    totalWorksPrefix: "共",
    totalWorksSuffix: "張作品",
    colorSuffix: "色系",
    occasionsTitle: "為每一個場合，設計專屬花意。",
    occasionsDesc: "從色系、花材到包裝與陳列細節，按場合與預算提供建議。",
    occasions: ["生日與紀念日", "畢業與祝賀", "婚禮與求婚", "開張與企業禮品", "品牌活動與會展", "酒店及商業空間"],
    cafeTitle: "花藝、植物與咖啡的自然空間。",
    cafeText:
      "位於澳門漁人碼頭的 Nflorist Café，將花藝、綠植與咖啡生活方式結合，適合作為品牌延伸、生活體驗與社交打卡空間。",
    contactLabel: "Contact",
    contactTitle: "門店與查詢",
    map: "查看地圖",
    call: "立即致電",
    wechatLabel: "微信查詢與預約",
    wechatText:
      "可透過 WeChat 查詢花束訂購、婚禮花卉、企業花藝及活動佈置。每間店均設有獨立 WeChat ID。點擊下方 WeChat ID 即可複製，方便客人直接加入對應門店。",
    copy: "複製",
    copied: "已複製",
    ctaTitle: "需要企業花藝、婚禮或會展佈置？",
    ctaText: "留下日期、場地、預算與喜好色系，團隊可為你規劃合適方案。",
    closePreview: "關閉圖片預覽",
    imagePreview: "圖片放大預覽",
    fallbackTitle: "請將圖片放入指定資料夾，並確認檔名與程式一致。",
    footerLeft: "© nflorist Co. Ltd. Website concept redesign.",
    footerRight: "Fresh flowers · Wedding florals · Plants · Café",
    albums: {
      bouquet: { title: "鮮花花藝", description: "日常花束、節日花禮、畢業花束、開張花籃與訂製花藝。" },
      wedding: { title: "婚禮花卉", description: "新娘捧花、襟花、手腕花、車花與婚宴場地佈置。" },
      venue: { title: "會場佈置", description: "宴會、品牌活動、開幕禮、節慶活動與商業場景花藝佈置。" },
      signboard: { title: "花牌", description: "開張花牌、祝賀花牌、活動花牌與訂製祝福花禮。" },
      tableflower: { title: "枱花", description: "餐桌花、會議枱花、接待枱花、宴會及品牌活動枱面花藝。" },
    },
    colors: {
      all: "全部",
      red: "紅",
      orange: "橙",
      pink: "粉紅",
      yellow: "黃",
      green: "綠",
      blue: "藍",
      purple: "紫",
      white: "白",
      colorful: "彩色",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      cafe: "Café",
      contact: "Contact",
      orderNow: "Order Flowers",
    },
    brandLabel: "Nflorist Macau Limited",
    heroTitleTop: "Natural florals,",
    heroTitleBottom: "for every meaningful moment.",
    heroText:
      "From everyday floral gifts and wedding flowers to corporate events, venue styling, and our floral café concept, nflorist brings refined natural beauty into life’s most memorable scenes.",
    viewWorks: "View Floral Works",
    eventBooking: "Book Event Styling",
    signatureLabel: "Signature Style",
    signatureText: "Natural, refined, memorable.",
    highlights: [
      { number: "20+", label: "Floral & plant categories" },
      { number: "3", label: "Macau shops & café space" },
      { number: "7 Days", label: "Open weekly for floral gifting" },
    ],
    aboutLabel: "About nflorist",
    aboutTitle: "A Macau floral brand shaped by nature, emotion, and refined detail.",
    aboutP1:
      "nflorist offers fresh flower orders, wedding florals, plants, and floral styling for spaces and events. Our style is natural, gentle, and layered, suited for everyday gifting, seasonal occasions, corporate events, and refined commercial displays.",
    aboutP2:
      "We believe flowers are more than gifts. They carry emotion, blessings, and atmosphere. From a daily bouquet to weddings, brand events, and commercial venue styling, nflorist creates floral moments with thoughtful materials and natural aesthetics.",
    servicesLabel: "Services",
    servicesTitle: "Floral Services",
    servicesIntro: "",
    categories: [
      { icon: "✿", title: "Fresh Florals", desc: "Daily bouquets, festive gifts, graduation flowers, opening baskets, and custom floral designs." },
      { icon: "♡", title: "Wedding Florals", desc: "Bridal bouquets, wrist corsages, hair flowers, boutonnieres, car flowers, and wedding venue styling." },
      { icon: "☘", title: "Plants & Styling", desc: "Potted plants, corporate greenery, exhibition florals, retail spaces, and brand event displays." },
      { icon: "☕", title: "Nflorist Café", desc: "A lifestyle space combining florals, plants, coffee, and light refreshments." },
    ],
    galleryLabel: "Gallery",
    galleryTitle: "Service Albums",
    galleryIntro: "",
    colorBrowse: "Browse fresh florals by colour",
    selectedAlbum: "Selected Album",
    totalWorksPrefix: "",
    totalWorksSuffix: " works",
    colorSuffix: " palette",
    occasionsTitle: "Floral designs for every occasion.",
    occasionsDesc: "From colours and materials to wrapping and display details, we tailor suggestions to the occasion and budget.",
    occasions: ["Birthdays & Anniversaries", "Graduation & Congratulations", "Weddings & Proposals", "Grand Openings & Corporate Gifts", "Brand Events & Exhibitions", "Hotels & Commercial Spaces"],
    cafeTitle: "A natural space for flowers, plants, and coffee.",
    cafeText:
      "Located at Macau Fisherman’s Wharf, Nflorist Café combines florals, greenery, and coffee lifestyle, creating a natural extension of the brand and a relaxed social space.",
    contactLabel: "Contact",
    contactTitle: "Stores & Enquiries",
    map: "View Map",
    call: "Call Now",
    wechatLabel: "WeChat Enquiries & Bookings",
    wechatText:
      "Contact us on WeChat for bouquet orders, wedding florals, corporate floral design, and event styling. Each store has its own WeChat ID. Tap an ID below to copy it.",
    copy: "Copy",
    copied: "Copied",
    ctaTitle: "Need corporate florals, wedding flowers, or event styling?",
    ctaText: "Share your date, venue, budget, and preferred colour palette. Our team will help plan a suitable floral direction.",
    closePreview: "Close image preview",
    imagePreview: "Image preview",
    fallbackTitle: "Please place the image in the correct folder and make sure the filename matches the code.",
    footerLeft: "© nflorist Co. Ltd. Website concept redesign.",
    footerRight: "Fresh flowers · Wedding florals · Plants · Café",
    albums: {
      bouquet: { title: "Fresh Florals", description: "Daily bouquets, festive gifts, graduation flowers, opening baskets, and custom floral designs." },
      wedding: { title: "Wedding Florals", description: "Bridal bouquets, boutonnieres, wrist corsages, car flowers, and wedding venue styling." },
      venue: { title: "Venue Styling", description: "Banquets, brand events, openings, seasonal installations, and commercial floral styling." },
      signboard: { title: "Flower Stands", description: "Opening flower stands, congratulatory stands, event flower stands, and custom floral greetings." },
      tableflower: { title: "Table Flowers", description: "Dining table florals, meeting table flowers, reception flowers, banquet and brand event table styling." },
    },
    colors: {
      all: "All",
      red: "Red",
      orange: "Orange",
      pink: "Pink",
      yellow: "Yellow",
      green: "Green",
      blue: "Blue",
      purple: "Purple",
      white: "White",
      colorful: "Colourful",
    },
  },
};

const theme = {
  page: "bg-[#11130f] text-[#f4efe6]",
  header: "border-[#2f352b] bg-[#11130f]/88",
  panel: "bg-[#1b2018]/88 border border-[#363d30] shadow-[0_24px_90px_rgba(0,0,0,0.32)]",
  panelSoft: "bg-[#20261d]/82 border border-[#3b4435] shadow-[0_18px_60px_rgba(0,0,0,0.24)]",
  accent: "text-[#c7b98b]",
  muted: "text-[#d6cfc0]",
  muted2: "text-[#b7b19f]",
  chip: "bg-[#1f251c] text-[#d6cfc0] border border-[#3b4435] hover:bg-[#293124] hover:border-[#6f745f]",
  active: "bg-[#c7b98b] text-[#161812] shadow-[0_12px_30px_rgba(199,185,139,0.18)]",
};

const Card = ({ children, className = "" }) => <div className={className}>{children}</div>;
const CardContent = ({ children, className = "" }) => <div className={className}>{children}</div>;

const Button = ({ children, className = "", variant = "default", type = "button", ...props }) => {
  const baseClass =
    "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-[#c7b98b] focus:ring-offset-2 focus:ring-offset-[#11130f] disabled:pointer-events-none disabled:opacity-50";

  const variantClass =
    variant === "outline"
      ? "border border-[#6f745f] bg-transparent text-[#f4efe6] hover:bg-[#252b21]"
      : "bg-[#c7b98b] text-[#161812] hover:bg-[#dfd0a0]";

  return (
    <button type={type} className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

const brand = {
  name: "nflorist",
  legalName: "澳門自然花藝有限公司",
  tagline: "the natural one",
  email: "info@nflorist.com.mo",
  whatsapp: "+853 2822 5622",
  phoneHref: "tel:+85328225622",
  wechat: {
    macau: "nflorist2018",
    taipa: "nflorist_taipa",
    cafe: "nflorist_6181",
  },
  social: {
    instagram: "https://www.instagram.com/nfloristmacau/",
    facebook: "https://m.facebook.com/nflorist.mo/",
    cafeInstagram: "https://www.instagram.com/nflorist_cafe/",
  },
};

const images = {
  logo: "/images/nflorist/logo.png",
  hero: "/images/nflorist/hero.jpg",
  cafe: "/images/nflorist/cafe.jpg",
};

const uploadImagePath = (folder, fileName) => `/images/nflorist/uploads/${folder}/${fileName}`;
const bouquetImagePath = (colorFolder, fileName) => uploadImagePath(`flower/${colorFolder}`, fileName);
const weddingImagePath = (fileName) => uploadImagePath("wedding", fileName);
const venueImagePath = (fileName) => uploadImagePath("venue", fileName);
const signboardImagePath = (fileName) => uploadImagePath("signboard", fileName);
const tableFlowerImagePath = (fileName) => uploadImagePath("tableflower", fileName);

const bouquetColorDefinitions = [
  { id: "red", imageFactory: () => Array.from({ length: 49 }, (_, index) => bouquetImagePath("red", `flower${index + 9}.jpg`)) },
  { id: "orange", imageFactory: () => Array.from({ length: 16 }, (_, index) => bouquetImagePath("orange", `flower${index + 22}.jpg`)) },
  { id: "pink", imageFactory: () => Array.from({ length: 54 }, (_, index) => bouquetImagePath("pink", `flower${index + 23}.jpg`)) },
  { id: "yellow", imageFactory: () => Array.from({ length: 20 }, (_, index) => bouquetImagePath("yellow", `flower${index + 10}.jpg`)) },
  { id: "green", imageFactory: () => Array.from({ length: 7 }, (_, index) => bouquetImagePath("green", `flower${index + 21}.jpg`)) },
  {
    id: "blue",
    imageFactory: () => [
      bouquetImagePath("blue", "flower15.jpg"),
      bouquetImagePath("blue", "flower16.JPG"),
      bouquetImagePath("blue", "flower17.jpg"),
      bouquetImagePath("blue", "flower18.jpg"),
      bouquetImagePath("blue", "flower19.jpg"),
      bouquetImagePath("blue", "flower20.jpg"),
      bouquetImagePath("blue", "flower21.jpg"),
      bouquetImagePath("blue", "flower22.jpg"),
      bouquetImagePath("blue", "flower23.jpg"),
      bouquetImagePath("blue", "flower24.jpg"),
      bouquetImagePath("blue", "flower25.jpg"),
      bouquetImagePath("blue", "flower26.jpg"),
      bouquetImagePath("blue", "flower27.jpg"),
      bouquetImagePath("blue", "flower28.jpg"),
      bouquetImagePath("blue", "flower29.jpg"),
      bouquetImagePath("blue", "flower30.jpg"),
      bouquetImagePath("blue", "flower31.jpg"),
      bouquetImagePath("blue", "flower32.JPG"),
      bouquetImagePath("blue", "flower33.jpg"),
      bouquetImagePath("blue", "flower34.jpg"),
      bouquetImagePath("blue", "flower35.jpg"),
      bouquetImagePath("blue", "flower36.jpg"),
      bouquetImagePath("blue", "flower37.jpg"),
      bouquetImagePath("blue", "flower38.jpg"),
      bouquetImagePath("blue", "flower39.jpg"),
      bouquetImagePath("blue", "flower4.jpg"),
      bouquetImagePath("blue", "flower14.jpg"),
    ],
  },
  { id: "purple", imageFactory: () => Array.from({ length: 51 }, (_, index) => bouquetImagePath("purple", `flower${index + 20}.jpg`)) },
  { id: "white", imageFactory: () => Array.from({ length: 15 }, (_, index) => bouquetImagePath("white", `flower${index + 23}.jpg`)) },
  { id: "colorful", imageFactory: () => Array.from({ length: 29 }, (_, index) => bouquetImagePath("colorful", `flower${index + 20}.jpg`)) },
];

const getBouquetColorAlbums = (t) =>
  bouquetColorDefinitions.map((item) => ({
    id: item.id,
    title: t.colors[item.id],
    images: item.imageFactory(),
  }));

const getServiceAlbums = (t, bouquetAllAlbum, bouquetAlbumsWithAll) => [
  {
    id: "bouquet",
    title: t.albums.bouquet.title,
    description: t.albums.bouquet.description,
    images: bouquetAllAlbum.images,
    colorAlbums: bouquetAlbumsWithAll,
  },
  {
    id: "wedding",
    title: t.albums.wedding.title,
    description: t.albums.wedding.description,
    images: Array.from({ length: 68 }, (_, index) => weddingImagePath(`wedding${index + 1}.jpg`)),
  },
  {
    id: "venue",
    title: t.albums.venue.title,
    description: t.albums.venue.description,
    images: Array.from({ length: 30 }, (_, index) => venueImagePath(`venue${index + 1}.jpg`)),
  },
  {
    id: "signboard",
    title: t.albums.signboard.title,
    description: t.albums.signboard.description,
    images: Array.from({ length: 80 }, (_, index) => signboardImagePath(`signboard${index + 1}.jpg`)),
  },
  {
    id: "tableflower",
    title: t.albums.tableflower.title,
    description: t.albums.tableflower.description,
    images: Array.from({ length: 38 }, (_, index) => tableFlowerImagePath(`tableflower${index + 1}.jpg`)),
  },
];

const Icon = ({ label, className = "", size = "text-2xl" }) => (
  <span aria-hidden="true" className={`inline-flex shrink-0 items-center justify-center ${size} ${className}`}>
    {label}
  </span>
);

const ImageWithFallback = ({ src, alt, className = "", loading = "lazy", label = "Nflorist", fallbackTitle = "Please place the image in the correct folder and make sure the filename matches the code." }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`flex h-full w-full items-center justify-center bg-[#1b2018] p-8 text-center ${className}`}>
        <div>
          <p className="text-5xl text-[#c7b98b]">✿</p>
          <p className="mt-4 text-lg font-semibold text-[#f4efe6]">{label}</p>
          <p className="mt-2 text-sm leading-6 text-[#b7b19f]">{fallbackTitle}</p>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading={loading} onError={() => setFailed(true)} />;
};

function validateWebsiteData() {
  const errors = [];
  if (!brand.name || !brand.legalName || !brand.email) errors.push("Brand data must include name, legalName, and email.");
  if (!brand.wechat.macau || !brand.wechat.taipa || !brand.wechat.cafe) errors.push("Brand data must include WeChat IDs for Macau, Taipa, and Café.");
  if (!brand.social.instagram || !brand.social.facebook || !brand.social.cafeInstagram) errors.push("Social links must include Instagram, Facebook, and Café Instagram.");
  if (!images.logo || !images.hero || !images.cafe) errors.push("Logo, Hero, and Café images are required.");
  const zh = translations.zh;
  const bouquetColorAlbums = getBouquetColorAlbums(zh);
  const bouquetAllAlbum = { id: "all", title: zh.colors.all, images: bouquetColorAlbums.flatMap((album) => album.images) };
  const bouquetAlbumsWithAll = [bouquetAllAlbum, ...bouquetColorAlbums];
  const serviceAlbums = getServiceAlbums(zh, bouquetAllAlbum, bouquetAlbumsWithAll);
  if (serviceAlbums.length < 5) errors.push("Expected at least 5 service albums.");
  if (!serviceAlbums.every((album) => album.id && album.title && album.description && Array.isArray(album.images) && album.images.length >= 1)) errors.push("Every service album must include id, title, description, and at least 1 image.");
  if (!bouquetColorAlbums.every((album) => album.id && album.title && Array.isArray(album.images))) errors.push("Every bouquet color album must include id, title, and images array.");
  if (translations.zh.categories.length < 4) errors.push("Expected at least 4 service categories.");
  return { passed: errors.length === 0, errors };
}

export const websiteDataTestResult = validateWebsiteData();

export default function NfloristWebsiteConcept() {
  const [lang, setLang] = useState(() => localStorage.getItem("nflorist-lang") || "zh");
  const [copiedWechatId, setCopiedWechatId] = useState("");
  const [activeAlbum, setActiveAlbum] = useState("bouquet");
  const [activeBouquetColor, setActiveBouquetColor] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const t = translations[lang];
  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.cafe, href: "#cafe" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const bouquetColorAlbums = getBouquetColorAlbums(t);
  const bouquetAllAlbum = {
    id: "all",
    title: t.colors.all,
    images: bouquetColorAlbums.flatMap((album) => album.images),
  };
  const bouquetAlbumsWithAll = [bouquetAllAlbum, ...bouquetColorAlbums];
  const serviceAlbums = getServiceAlbums(t, bouquetAllAlbum, bouquetAlbumsWithAll);
  const currentAlbum = serviceAlbums.find((album) => album.id === activeAlbum) || serviceAlbums[0];
  const currentBouquetColorAlbum = bouquetAlbumsWithAll.find((album) => album.id === activeBouquetColor) || bouquetAlbumsWithAll[0];
  const currentGalleryImages = currentAlbum.id === "bouquet" ? currentBouquetColorAlbum.images : currentAlbum.images;

  const locations = [
    {
      name: lang === "zh" ? "皇朝總店" : "Dynasty Main Store",
      wechatId: brand.wechat.macau,
      address: lang === "zh" ? "澳門宋玉生廣場92號環宇豪庭地下及閣樓I座" : "Shop I, G/F & Mezzanine, Universal Court, 92 Alameda Dr. Carlos D'Assumpção, Macau",
      phone: "+853 2822 5622 / 2822 5688",
      primaryPhoneHref: "tel:+85328225622",
      secondaryPhoneHref: "tel:+85328225688",
      mapHref: "https://www.google.com/maps/search/?api=1&query=%E6%BE%B3%E9%96%80%E5%AE%8B%E7%8E%89%E7%94%9F%E5%BB%A3%E5%A0%B492%E8%99%9F%E7%92%B0%E5%AE%87%E8%B1%AA%E5%BA%AD%E5%9C%B0%E4%B8%8B%E5%8F%8A%E9%96%A3%E6%A8%93I%E5%BA%A7%20nflorist",
      hours: "10:00 – 19:00",
    },
    {
      name: lang === "zh" ? "氹仔店" : "Taipa Store",
      wechatId: brand.wechat.taipa,
      address: lang === "zh" ? "氹仔奧林匹克大馬路551號花城地下AR座" : "Shop AR, G/F, Flower City, 551 Avenida Olímpica, Taipa",
      phone: "+853 2857 6206",
      primaryPhoneHref: "tel:+85328576206",
      mapHref: "https://www.google.com/maps/search/?api=1&query=%E6%B0%B9%E4%BB%94%E5%A5%A7%E6%9E%97%E5%8C%B9%E5%85%8B%E5%A4%A7%E9%A6%AC%E8%B7%AF551%E8%99%9F%E8%8A%B1%E5%9F%8E%E5%9C%B0%E4%B8%8BAR%E5%BA%A7%20nflorist",
      hours: lang === "zh" ? "週一至週五 10:00 – 19:00 / 週末 11:00 – 20:00" : "Mon–Fri 10:00 – 19:00 / Weekend 11:00 – 20:00",
    },
    {
      name: "Nflorist Café",
      wechatId: brand.wechat.cafe,
      address: lang === "zh" ? "澳門漁人碼頭羅馬及英國館地下09–11號舖" : "Shops 09–11, G/F, Roman & British Buildings, Macau Fisherman’s Wharf",
      phone: "+853 2838 8633",
      primaryPhoneHref: "tel:+85328388633",
      mapHref: "https://www.google.com/maps/search/?api=1&query=%E6%BE%B3%E9%96%80%E6%BC%81%E4%BA%BA%E7%A2%BC%E9%A0%AD%E7%BE%85%E9%A6%AC%E5%8F%8A%E8%8B%B1%E5%9C%8B%E9%A4%A8%E5%9C%B0%E4%B8%8B09-11%E8%99%9F%E8%88%96%20Nflorist%20Cafe",
      hours: "09:00 – 19:00",
    },
  ];

  const switchLanguage = (nextLang) => {
    setLang(nextLang);
    localStorage.setItem("nflorist-lang", nextLang);
  };

  const closeLightbox = () => setSelectedImage(null);

  const copyWechatId = async (wechatId) => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopiedWechatId(wechatId);
      window.setTimeout(() => setCopiedWechatId(""), 1800);
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = wechatId;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedWechatId(wechatId);
      window.setTimeout(() => setCopiedWechatId(""), 1800);
    }
  };

  return (
    <div className={`min-h-screen ${theme.page}`}>
      <header className={`fixed top-0 z-50 w-full border-b ${theme.header} backdrop-blur-xl`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="nflorist home">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#1b2018] ring-1 ring-[#3b4435]">
              <ImageWithFallback src={images.logo} alt="nflorist logo" className="h-full w-full object-contain p-1.5" loading="eager" label="Logo" fallbackTitle={t.fallbackTitle} />
            </div>
            <div className="hidden sm:block">
              <p className="text-xl font-semibold tracking-tight text-[#f4efe6]">{brand.name}</p>
              <p className={`text-xs uppercase tracking-[0.28em] ${theme.muted2}`}>{brand.tagline}</p>
            </div>
          </a>

          <nav className={`hidden items-center gap-7 text-sm ${theme.muted} lg:flex`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-[#3b4435] bg-[#1f251c] p-1 text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => switchLanguage("zh")}
                className={`rounded-full px-3 py-1.5 transition ${lang === "zh" ? "bg-[#c7b98b] text-[#161812]" : "text-[#d6cfc0] hover:text-white"}`}
              >
                中文
              </button>
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={`rounded-full px-3 py-1.5 transition ${lang === "en" ? "bg-[#c7b98b] text-[#161812]" : "text-[#d6cfc0] hover:text-white"}`}
              >
                EN
              </button>
            </div>
            <a href="#contact" className="hidden sm:block"><Button className="px-5">{t.nav.orderNow}</Button></a>
          </div>
        </div>
      </header>

      <main id="top" className="pt-20">
        <section className="relative overflow-hidden px-6 py-20 md:py-28">
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#4d5642] opacity-60 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#c7b98b] opacity-20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${theme.panelSoft} ${theme.muted}`}>
                <Icon label="✦" size="text-base" /> {t.brandLabel}
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                {t.heroTitleTop}
                <span className="block text-[#c7b98b]">{t.heroTitleBottom}</span>
              </h1>

              <p className={`mt-7 max-w-xl text-lg leading-8 ${theme.muted}`}>{t.heroText}</p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#gallery"><Button className="px-7 py-6 text-base">{t.viewWorks}</Button></a>
                <a href="#contact"><Button variant="outline" className="px-7 py-6 text-base">{t.eventBooking}</Button></a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <a href={brand.social.instagram} target="_blank" rel="noreferrer" className={`rounded-full px-4 py-2 transition ${theme.chip}`}>Instagram</a>
                <a href={brand.social.facebook} target="_blank" rel="noreferrer" className={`rounded-full px-4 py-2 transition ${theme.chip}`}>Facebook</a>
                <a href={brand.social.cafeInstagram} target="_blank" rel="noreferrer" className={`rounded-full px-4 py-2 transition ${theme.chip}`}>Café Instagram</a>
                <a href="#wechat" className={`rounded-full px-4 py-2 transition ${theme.chip}`}>WeChat</a>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
                {t.highlights.map((item) => (
                  <div key={item.label} className={`rounded-3xl p-5 backdrop-blur ${theme.panelSoft}`}>
                    <p className="text-2xl font-semibold text-[#c7b98b]">{item.number}</p>
                    <p className={`mt-1 text-sm leading-5 ${theme.muted2}`}>{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#1b2018] shadow-[0_30px_90px_rgba(0,0,0,0.5)] ring-1 ring-[#3b4435]">
                <ImageWithFallback src={images.hero} alt="nflorist bouquet" className="h-full w-full object-cover" loading="eager" label="Hero Image" fallbackTitle={t.fallbackTitle} />
              </div>
              <Card className="absolute -bottom-7 left-6 w-[82%] rounded-3xl bg-[#1b2018]/90 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-[#3b4435] backdrop-blur">
                <CardContent className="p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#c7b98b]">{t.signatureLabel}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#f4efe6]">{t.signatureText}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">{t.aboutLabel}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{t.aboutTitle}</h2>
            </div>
            <div className={`space-y-6 text-lg leading-9 ${theme.muted}`}>
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#151811] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">{t.servicesLabel}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight">{t.servicesTitle}</h2>
              </div>
              {t.servicesIntro && <p className={`max-w-lg ${theme.muted}`}>{t.servicesIntro}</p>}
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {t.categories.map((item) => (
                <Card key={item.title} className={`rounded-3xl p-7 transition hover:-translate-y-1 hover:bg-[#252b21] ${theme.panelSoft}`}>
                  <Icon label={item.icon} className="mb-8 text-[#c7b98b]" size="text-4xl" />
                  <h3 className="text-xl font-semibold text-[#f4efe6]">{item.title}</h3>
                  <p className={`mt-4 leading-7 ${theme.muted2}`}>{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">{t.galleryLabel}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">{t.galleryTitle}</h2>
              {t.galleryIntro && <p className={`mx-auto mt-4 max-w-2xl leading-7 ${theme.muted2}`}>{t.galleryIntro}</p>}
            </div>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {serviceAlbums.map((album) => {
                const isActive = activeAlbum === album.id;
                return (
                  <button
                    key={album.id}
                    type="button"
                    onClick={() => {
                      setActiveAlbum(album.id);
                      if (album.id !== "bouquet") setActiveBouquetColor("all");
                    }}
                    className={`rounded-full px-5 py-3 text-sm transition ${isActive ? theme.active : theme.chip}`}
                  >
                    {album.title}
                  </button>
                );
              })}
            </div>

            {activeAlbum === "bouquet" && (
              <div className={`mb-8 rounded-[2rem] p-5 md:p-6 ${theme.panelSoft}`}>
                <p className={`mb-4 text-center text-sm font-medium md:text-left ${theme.muted}`}>{t.colorBrowse}</p>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  {bouquetAlbumsWithAll.map((colorAlbum) => {
                    const isColorActive = activeBouquetColor === colorAlbum.id;
                    return (
                      <button key={colorAlbum.id} type="button" onClick={() => setActiveBouquetColor(colorAlbum.id)} className={`rounded-full px-4 py-2 text-sm transition ${isColorActive ? theme.active : theme.chip}`}>
                        {colorAlbum.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className={`mb-10 rounded-[2rem] p-6 md:p-8 ${theme.panel}`}>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#c7b98b]">{t.selectedAlbum}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#f4efe6]">
                    {currentAlbum.id === "bouquet" && activeBouquetColor !== "all" ? `${currentAlbum.title}｜${currentBouquetColorAlbum.title}${t.colorSuffix}` : currentAlbum.title}
                  </h3>
                  <p className={`mt-5 max-w-2xl leading-7 ${theme.muted2}`}>{currentAlbum.description}</p>
                </div>
                <div className={`rounded-full px-4 py-2 text-sm ${theme.chip}`}>{t.totalWorksPrefix} {currentGalleryImages.length}{t.totalWorksSuffix}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
              {currentGalleryImages.map((src, index) => {
                const label = `${currentAlbum.id === "bouquet" && activeBouquetColor !== "all" ? currentBouquetColorAlbum.title + t.colorSuffix : currentAlbum.title} ${index + 1}`;
                return (
                  <motion.button
                    key={`${currentAlbum.id}-${activeBouquetColor}-${src}-${index}`}
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
                    onClick={() => setSelectedImage({ src, alt: label })}
                    className="group cursor-zoom-in overflow-hidden rounded-xl bg-[#1b2018] text-left shadow-[0_10px_35px_rgba(0,0,0,0.28)] ring-1 ring-[#2f352b] transition hover:ring-[#c7b98b] focus:outline-none focus:ring-2 focus:ring-[#c7b98b] sm:rounded-[1.5rem] sm:shadow-[0_18px_55px_rgba(0,0,0,0.32)]"
                    aria-label={`${lang === "zh" ? "放大查看" : "View larger"} ${label}`}
                  >
                    <ImageWithFallback src={src} alt={label} className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105" label={label} fallbackTitle={t.fallbackTitle} />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#151811] px-6 py-24 text-[#f4efe6]">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <Icon label="◇" className="mb-6 text-[#c7b98b]" size="text-4xl" />
              <h2 className="text-4xl font-semibold tracking-tight">{t.occasionsTitle}</h2>
            </div>
            <div className="grid gap-5 md:col-span-2 md:grid-cols-2 lg:grid-cols-3">
              {t.occasions.map((item) => (
                <div key={item} className={`rounded-3xl p-7 ${theme.panelSoft}`}>
                  <Icon label="◌" className="mb-5 text-[#c7b98b]" size="text-3xl" />
                  <p className="text-2xl font-medium">{item}</p>
                  <p className={`mt-3 leading-7 ${theme.muted2}`}>{t.occasionsDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cafe" className="px-6 py-24">
          <div className={`mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] p-6 md:grid-cols-2 md:p-10 ${theme.panel}`}>
            <div className="overflow-hidden rounded-[2rem] bg-[#1b2018] ring-1 ring-[#3b4435]">
              <ImageWithFallback src={images.cafe} alt="Nflorist Café" className="aspect-[4/3] h-full w-full object-cover" label="Café Image" fallbackTitle={t.fallbackTitle} />
            </div>
            <div className="p-2 md:p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">Nflorist Café</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">{t.cafeTitle}</h2>
              <p className={`mt-6 text-lg leading-8 ${theme.muted}`}>{t.cafeText}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {['Flower', 'Plants', 'Coffee', 'Lifestyle'].map((item) => <span key={item} className={`rounded-full px-4 py-2 ${theme.chip}`}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.28em] text-[#c7b98b]">{t.contactLabel}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">{t.contactTitle}</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {locations.map((loc) => (
                <Card key={loc.name} className={`rounded-3xl p-8 ${theme.panelSoft}`}>
                  <h3 className="text-2xl font-semibold text-[#f4efe6]">{loc.name}</h3>
                  <div className="mt-5 flex gap-3 text-[#d6cfc0]"><Icon label="⌖" size="text-lg" /><a href={loc.mapHref} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">{loc.address}</a></div>
                  <div className="mt-5 flex gap-3 text-[#d6cfc0]"><Icon label="☎" size="text-lg" /><span><a href={loc.primaryPhoneHref} className="hover:text-white hover:underline">{loc.phone.split(" / ")[0]}</a>{loc.secondaryPhoneHref && <><span> / </span><a href={loc.secondaryPhoneHref} className="hover:text-white hover:underline">{loc.phone.split(" / ")[1]}</a></>}</span></div>
                  <div className="mt-5 flex gap-3 text-[#d6cfc0]"><Icon label="◷" size="text-lg" /> <span>{loc.hours}</span></div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={loc.mapHref} target="_blank" rel="noreferrer" className={`rounded-full px-4 py-2 text-sm transition ${theme.chip}`}>{t.map}</a>
                    <a href={loc.primaryPhoneHref} className="rounded-full bg-[#c7b98b] px-4 py-2 text-sm text-[#161812] transition hover:bg-[#dfd0a0]">{t.call}</a>
                  </div>
                </Card>
              ))}
            </div>

            <div id="wechat" className={`mt-8 rounded-3xl p-8 ${theme.panel}`}>
              <p className="text-sm uppercase tracking-[0.24em] text-[#c7b98b]">WeChat</p>
              <h3 className="mt-2 text-2xl font-semibold">{t.wechatLabel}</h3>
              <p className={`mt-3 leading-7 ${theme.muted}`}>{t.wechatText}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {locations.map((loc) => {
                  const isCopied = copiedWechatId === loc.wechatId;
                  return (
                    <button key={`wechat-${loc.name}`} type="button" onClick={() => copyWechatId(loc.wechatId)} className="group rounded-3xl bg-[#1f251c] p-5 text-left text-[#f4efe6] ring-1 ring-[#3b4435] transition hover:-translate-y-0.5 hover:bg-[#293124] focus:outline-none focus:ring-2 focus:ring-[#c7b98b]" aria-label={`${t.copy} ${loc.name} WeChat ID ${loc.wechatId}`}>
                      <p className="font-semibold">{loc.name}</p>
                      <p className="mt-2 text-sm text-[#b7b19f]">WeChat ID</p>
                      <div className="mt-1 flex items-center justify-between gap-3">
                        <p className="break-all text-lg font-medium">{loc.wechatId}</p>
                        <span className="shrink-0 rounded-full bg-[#303729] px-3 py-1 text-xs text-[#d6cfc0] transition group-hover:bg-[#3b4435]">{isCopied ? t.copied : t.copy}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#c7b98b] p-8 text-[#161812] md:flex md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{t.ctaTitle}</h3>
                <p className="mt-2 text-[#2b281d]">{t.ctaText}</p>
              </div>
              <div className="mt-6 flex flex-col gap-2 md:mt-0 md:items-end">
                <div className="flex items-center gap-3"><Icon label="✉" size="text-lg" /><a href={`mailto:${brand.email}`} className="hover:underline">{brand.email}</a></div>
                <div className="flex items-center gap-3"><Icon label="☎" size="text-lg" /><a href={brand.phoneHref} className="hover:underline">{brand.whatsapp}</a></div>
                <div className="flex flex-wrap justify-end gap-2 pt-2 text-sm">
                  <a href={brand.social.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-[#161812]/10 px-3 py-1 hover:bg-[#161812]/20">IG</a>
                  <a href={brand.social.facebook} target="_blank" rel="noreferrer" className="rounded-full bg-[#161812]/10 px-3 py-1 hover:bg-[#161812]/20">FB</a>
                  <a href={brand.social.cafeInstagram} target="_blank" rel="noreferrer" className="rounded-full bg-[#161812]/10 px-3 py-1 hover:bg-[#161812]/20">Café IG</a>
                  <a href="#wechat" className="rounded-full bg-[#161812]/10 px-3 py-1 hover:bg-[#161812]/20">WeChat</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={t.imagePreview} onClick={closeLightbox}>
          <button type="button" onClick={closeLightbox} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#1b2018]/90 text-2xl text-[#f4efe6] ring-1 ring-[#3b4435] transition hover:bg-[#293124]" aria-label={t.closePreview}>×</button>
          <div className="relative max-h-[88vh] max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[88vh] w-auto max-w-full rounded-2xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.6)]" />
            <p className="mt-3 text-center text-sm text-[#d6cfc0]">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      <footer className="border-t border-[#2f352b] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#b7b19f] md:flex-row">
          <p>{t.footerLeft}</p>
          <p>{t.footerRight}</p>
        </div>
      </footer>
    </div>
  );
}

