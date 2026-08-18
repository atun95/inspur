import React, { useState, useEffect } from 'react';
import { useContent } from '../hooks/useContent';
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Image as ImageIcon,
  Languages,
  Monitor,
  ArrowRight,
  Menu,
  X,
  Check,
  ChevronDown,
  Monitor as MonitorIcon
} from 'lucide-react';
import { Facebook, Linkedin, Youtube } from '../components/SocialIcons';

// Thành phần Image dự phòng
const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`${className} bg-slate-200 flex flex-col items-center justify-center gap-2 border border-slate-300`}>
        <ImageIcon className="text-slate-400 w-8 h-8" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Image Not Found</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
};

// Products data - hardcoded directly in App.js
export const PRODUCTS_DATA = {
  products: [
    {
      id: 1,
      category: "Monitor",
      vi: {
        title: "Inspur Monitor IIP215AF",
        desc: "Màn hình chuyên nghiệp 21.5 inch, chất lượng cao, phù hợp cho văn phòng và gia đình.",
        technicalSpecs: [
          { "label": "Kích thước", "value": "21.5\"" },
          { "label": "Model", "value": "IIP215AF" },
          { "label": "Độ phân giải", "value": "Full HD" },
          { "label": "Loại", "value": "Màn hình" }
        ]
      },
      en: {
        title: "Inspur Monitor IIP215AF",
        desc: "Professional 21.5-inch monitor, high quality, suitable for office and home.",
        technicalSpecs: [
          { "label": "Size", "value": "21.5\"" },
          { "label": "Model", "value": "IIP215AF" },
          { "label": "Resolution", "value": "Full HD" },
          { "label": "Type", "value": "Monitor" }
        ]
      },
      img: "./images/IIP215AF.jpg",
      icon: "Monitor",
      url: "/san-phamman-hinh-inspur/"
    },
    {
      id: 2,
      category: "Monitor",
      vi: {
        title: "Inspur Monitor IIP245SF",
        desc: "Màn hình 24.5 inch chất lượng cao, thiết kế hiện đại, phù hợp cho công việc chuyên nghiệp.",
        technicalSpecs: [
          { "label": "Kích thước", "value": "24.5\"" },
          { "label": "Model", "value": "IIP245SF" },
          { "label": "Độ phân giải", "value": "Full HD" },
          { "label": "Loại", "value": "Màn hình" }
        ]
      },
      en: {
        title: "Inspur Monitor IIP245SF",
        desc: "High-quality 24.5-inch monitor, modern design, suitable for professional work.",
        technicalSpecs: [
          { "label": "Size", "value": "24.5\"" },
          { "label": "Model", "value": "IIP245SF" },
          { "label": "Resolution", "value": "Full HD" },
          { "label": "Type", "value": "Monitor" }
        ]
      },
      img: "./images/IIP245SF.jpg",
      icon: "Monitor",
      url: "/san-phamman-hinh-inspur/"
    },
    {
      id: 3,
      category: "Monitor",
      vi: {
        title: "Inspur Monitor IIP270AF",
        desc: "Màn hình 27 inch cao cấp, hiệu năng mạnh mẽ, thiết kế sang trọng cho không gian làm việc chuyên nghiệp.",
        technicalSpecs: [
          { "label": "Kích thước", "value": "27\"" },
          { "label": "Model", "value": "IIP270AF" },
          { "label": "Độ phân giải", "value": "Full HD" },
          { "label": "Loại", "value": "Màn hình" }
        ]
      },
      en: {
        title: "Inspur Monitor IIP270AF",
        desc: "Premium 27-inch monitor, powerful performance, luxurious design for professional workspace.",
        technicalSpecs: [
          { "label": "Size", "value": "27\"" },
          { "label": "Model", "value": "IIP270AF" },
          { "label": "Resolution", "value": "Full HD" },
          { "label": "Type", "value": "Monitor" }
        ]
      },
      img: "./images/IIP270AF.jpg",
      icon: "Monitor",
      url: "/san-phamman-hinh-inspur/"
    },
    {
      id: 4,
      category: "Monitor",
      vi: {
        title: "Inspur Monitor IIP49SX",
        desc: "Màn hình siêu rộng 49 inch, trải nghiệm đa nhiệm tuyệt vời, phù hợp cho gaming và thiết kế.",
        technicalSpecs: [
          { "label": "Kích thước", "value": "49\"" },
          { "label": "Model", "value": "IIP49SX" },
          { "label": "Độ phân giải", "value": "Ultra Wide" },
          { "label": "Loại", "value": "Màn hình" }
        ]
      },
      en: {
        title: "Inspur Monitor IIP49SX",
        desc: "Ultra-wide 49-inch monitor, excellent multitasking experience, suitable for gaming and design.",
        technicalSpecs: [
          { "label": "Size", "value": "49\"" },
          { "label": "Model", "value": "IIP49SX" },
          { "label": "Resolution", "value": "Ultra Wide" },
          { "label": "Type", "value": "Monitor" }
        ]
      },
      img: "./images/IIP49SX.jpg",
      icon: "Monitor",
      url: "/san-phamman-hinh-inspur/"
    },
    {
      id: 5,
      category: "Monitor",
      vi: {
        title: "Inspur Monitor IIP270QT",
        desc: "Màn hình 27 inch chất lượng cao, hiệu năng ổn định, giá cả hợp lý cho mọi nhu cầu.",
        technicalSpecs: [
          { "label": "Kích thước", "value": "27\"" },
          { "label": "Model", "value": "IIP270QT" },
          { "label": "Độ phân giải", "value": "Full HD" },
          { "label": "Loại", "value": "Màn hình" }
        ]
      },
      en: {
        title: "Inspur Monitor IIP270QT",
        desc: "High-quality 27-inch monitor, stable performance, affordable price for all needs.",
        technicalSpecs: [
          { "label": "Size", "value": "27\"" },
          { "label": "Model", "value": "IIP270QT" },
          { "label": "Resolution", "value": "Full HD" },
          { "label": "Type", "value": "Monitor" }
        ]
      },
      img: "./images/IIP270QT.jpg",
      icon: "Monitor",
      url: "/san-phamman-hinh-inspur/"
    },
    {
      id: 6,
      category: "Monitor",
      vi: {
        title: "Inspur Monitor IIP270QZ",
        desc: "Màn hình 27 inch cao cấp, hiệu năng vượt trội, thiết kế tinh tế cho không gian làm việc hiện đại.",
        technicalSpecs: [
          { "label": "Kích thước", "value": "27\"" },
          { "label": "Model", "value": "IIP270QZ" },
          { "label": "Độ phân giải", "value": "Full HD" },
          { "label": "Loại", "value": "Màn hình" }
        ]
      },
      en: {
        title: "Inspur Monitor IIP270QZ",
        desc: "Premium 27-inch monitor, outstanding performance, elegant design for modern workspace.",
        technicalSpecs: [
          { "label": "Size", "value": "27\"" },
          { "label": "Model", "value": "IIP270QZ" },
          { "label": "Resolution", "value": "Full HD" },
          { "label": "Type", "value": "Monitor" }
        ]
      },
      img: "./images/IIP270QZ.jpg",
      icon: "Monitor",
      url: "/san-phamman-hinh-inspur/"
    }
  ]
};

export const TRANSLATIONS = {
  vi: {
    seo: {
      title: "Màn hình Inspur | Màn hình chất lượng cao cho doanh nghiệp",
      desc: "Khám phá màn hình Inspur - Màn hình chuyên nghiệp chất lượng cao với nhiều kích thước từ 21.5 inch đến 49 inch, phù hợp cho văn phòng, gaming và thiết kế.",
      keywords: "Màn hình Inspur, Monitor Inspur, Màn hình doanh nghiệp, IIP215AF, IIP245SF, IIP270AF"
    },
    nav: [
      { name: 'Về Inspur', url: '/about' },
      { name: 'Giải pháp', url: '/giai-phap'},
      { name: 'Tin tức và sự kiện', url: '/tin-tuc-va-su-kien',},
      { name: 'Liên hệ', url: '/contact' },
    ],
    btnPartner: 'Liên hệ báo giá',
    heroTag: 'Thiết bị hiển thị chuyên nghiệp',
    heroTitle: 'INSPUR MONITOR',
    heroDesc: 'Màn hình chuyên nghiệp chất lượng cao với nhiều kích thước từ 21.5 inch đến 49 inch, phù hợp cho văn phòng, gaming và thiết kế. Hiệu năng ổn định, thiết kế hiện đại.',
    img: './images/monitor-hero.jpg',
    footerDesc: 'Inspur Việt Nam tự hào cung cấp các giải pháp máy chủ, lưu trữ và thiết bị đầu cuối tốt nhất thế giới, đồng hành cùng sự thành công của doanh nghiệp Việt.',
    footerExplore: 'Khám phá',
    footerSupport: 'Hỗ trợ',
    footerSupportLinks: ['Về chúng tôi', 'Liên hệ', 'Hỗ trợ kỹ thuật'],
    footerContact: 'Thông tin liên hệ',
    footerAddress: '68 Ký Hoà, Phường Chợ Lớn, TP.HCM',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. CUNG CẤP GIẢI PHÁP HẠ TẦNG SỐ TỐI ƯU.'
  },
  en: {
    seo: {
      title: "Inspur Monitor | High-Quality Business Monitors",
      desc: "Discover Inspur Monitor - High-performance desktop computers, stable 24/7 operation for professional tasks with RTX 40-Series Support and DDR5 5600MHz.",
      keywords: "Inspur Monitor, Inspur Desktop, RTX 40-Series, DDR5, Business Monitor"
    },
    nav: [
      { name: 'About Inspur', url: '/about' },
      { name: 'Products', url: '/san-pham'},
      { name: 'Events', url: '/tin-tuc-va-su-kien'},
      { name: 'Contact', url: '/contact' }
    ],
    btnPartner: 'Request Quote',
    heroTag: 'Professional Display Device',
    heroTitle: 'INSPUR MONITOR',
    heroDesc: 'High-quality professional monitors with sizes from 21.5 inch to 49 inch, suitable for office, gaming and design. Stable performance, modern design.',
    img: './images/monitor-hero.jpg',
    footerDesc: 'Inspur Vietnam provides world-class servers, storage, and endpoint devices, driving success for Vietnamese enterprises.',
    footerExplore: 'Explore',
    footerSupport: 'Support',
    footerSupportLinks: ['About Us', 'Contact', 'Technical Support'],
    footerContact: 'Contact Information',
    footerAddress: '68 Ky Hoa, Ward Cho Lon, HCMC',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. OPTIMIZING DIGITAL INFRASTRUCTURE.'
  }
};

// Icon mapping
const ICON_MAP = {
  Monitor: MonitorIcon
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const { lang, setLang, toggleLang, t, products: serverProducts, loading } = useContent('manHinhInspur', TRANSLATIONS);
  const products = serverProducts || PRODUCTS_DATA.products || [];

  useEffect(() => {
    document.title = t.seo.title;
    
    // SEO Meta Tags
    const updateMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    
    // SEO for general Monitor page
    const seoTitle = t.seo.title;
    const seoDesc = t.seo.desc;
    const seoKeywords = t.seo.keywords;
    const currentUrl = window.location.href;
    const logoImageUrl = window.location.origin + '/images/logo4.jpg';
    const siteName = 'Inspur Vietnam';
    const currentLang = lang === 'vi' ? 'vi_VN' : 'en_US';
    const alternateLang = lang === 'vi' ? 'en' : 'vi';
    const alternateUrl = currentUrl.replace(`/${lang === 'vi' ? 'vi' : 'en'}/`, `/${alternateLang}/`);
    
    // Basic Meta Tags
    updateMeta('description', seoDesc);
    updateMeta('keywords', seoKeywords);
    updateMeta('author', 'Inspur Vietnam');
    updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('googlebot', 'index, follow');
    updateMeta('language', lang === 'vi' ? 'Vietnamese' : 'English');
    updateMeta('revisit-after', '7 days');
    updateMeta('distribution', 'global');
    updateMeta('rating', 'general');
    
    // Open Graph / Facebook
    updateMeta('og:title', seoTitle, 'property');
    updateMeta('og:description', seoDesc, 'property');
    updateMeta('og:type', 'website', 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:image', logoImageUrl, 'property');
    updateMeta('og:image:width', '1200', 'property');
    updateMeta('og:image:height', '630', 'property');
    updateMeta('og:image:type', 'image/jpeg', 'property');
    updateMeta('og:image:alt', seoTitle, 'property');
    updateMeta('og:site_name', siteName, 'property');
    updateMeta('og:locale', currentLang, 'property');
    updateMeta('og:locale:alternate', alternateLang === 'vi' ? 'vi_VN' : 'en_US', 'property');
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', seoTitle);
    updateMeta('twitter:description', seoDesc);
    updateMeta('twitter:image', logoImageUrl);
    updateMeta('twitter:image:alt', seoTitle);
    updateMeta('twitter:site', '@InspurVietnam');
    updateMeta('twitter:creator', '@InspurVietnam');
    
    // Canonical URL
    const setLinkTag = (rel, href, hreflang = null) => {
      let selector = `link[rel="${rel}"]`;
      if (hreflang) selector += `[hreflang="${hreflang}"]`;
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('href', href);
        if (hreflang) element.setAttribute('hreflang', hreflang);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        if (hreflang) link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
    };
    
    setLinkTag('canonical', currentUrl);
    setLinkTag('alternate', alternateUrl, alternateLang);
    setLinkTag('alternate', currentUrl, lang);
    
    // Schema.org Structured Data (JSON-LD)
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": seoTitle,
      "description": seoDesc,
      "brand": {
        "@type": "Brand",
        "name": "Inspur"
      },
      "category": "Computer Monitor",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "VND",
        "seller": {
          "@type": "Organization",
          "name": "Inspur Vietnam"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "10"
      }
    };
    
    // Remove existing schema if any
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    // Add new schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);
    
    // Favicon - Use favicon.ico
    const setFaviconTag = (rel, href, sizes = null, type = null) => {
      let selector = `link[rel="${rel}"]`;
      if (sizes) selector += `[sizes="${sizes}"]`;
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('href', href);
        if (sizes) element.setAttribute('sizes', sizes);
        if (type) element.setAttribute('type', type);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        if (sizes) link.setAttribute('sizes', sizes);
        if (type) link.setAttribute('type', type);
        document.head.appendChild(link);
      }
    };
    
    // Remove old favicon links
    const oldFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
    oldFavicons.forEach(link => link.remove());
    
    // Set favicon.svg as primary favicon
    setFaviconTag('shortcut icon', '/favicon.svg', null, 'image/svg+xml');
    setFaviconTag('icon', '/favicon.svg', null, 'image/svg+xml');
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, t.seo]);
  
  // Use general Monitor translations
  const displayHeroTag = t.heroTag || '';
  const displayHeroTitle = t.heroTitle || '';
  const displayHeroDesc = t.heroDesc || '';
  const displayImg = t.img || './images/monitor-hero.jpg';

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0056b3] mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  const TextLogo = ({ light = false }) => (
    <div className="flex items-center group cursor-pointer" onClick={() => window.location.href = '/'}>
      <img
        src="./images/logo4.jpg"
        alt="Inspur Logo"
        className="h-8 w-auto cursor-pointer"
        onClick={() => window.location.href = '/'}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#0056b3] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-2 shadow-sm' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <TextLogo />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {t.nav.map((item) => (
              <div key={item.name} className="relative group">
                <a href={item.url} className={`text-xs md:text-sm font-extrabold uppercase tracking-widest ${isScrolled ? 'text-slate-900' : 'text-white'} hover:text-[#0056b3] transition-all`}>
                  {item.name}
                </a>
              </div>
            ))}
            
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-[10px] font-black uppercase tracking-widest ${
                isScrolled ? 'border-slate-200 text-slate-600 hover:bg-slate-50 bg-white/50' : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <Languages size={14} />
              {lang === 'vi' ? 'English' : 'Tiếng Việt'}
            </button>

            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-[#0056b3] text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg"
            >
              {t.btnPartner}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-900"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu (Slide Down) */}
        <div className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-slate-200 shadow-2xl transition-all duration-500 overflow-hidden ${
          isMobileOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="px-6 py-8 flex flex-col gap-1 overflow-y-auto max-h-[80vh]">
            {t.nav.map((item, idx) => (
              <div key={idx} className="border-b border-slate-50 last:border-0">
                <div 
                  className="flex items-center justify-between py-4 group cursor-pointer"
                  onClick={() => {
                    if (item.submenu) {
                      setActiveMobileSubmenu(activeMobileSubmenu === idx ? null : idx);
                    } else {
                      window.location.href = item.url;
                    }
                  }}
                >
                  <span className="text-sm font-black uppercase tracking-wider text-slate-800 group-hover:text-[#0056b3]">
                    {item.name}
                  </span>
                  {item.submenu && (
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeMobileSubmenu === idx ? 'rotate-180' : ''}`} />
                  )}
                </div>
                
                {item.submenu && (
                  <div className={`transition-all duration-300 overflow-hidden bg-slate-50/50 rounded-xl mb-2 ${
                    activeMobileSubmenu === idx ? 'max-h-96 py-3 px-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {item.submenu.map((sub, sIdx) => (
                      <a 
                        key={sIdx} 
                        href={sub.url}
                        className="flex items-center gap-3 py-3 text-sm font-semibold text-slate-600 hover:text-[#0056b3]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3]/30"></div>
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-4 mt-8">
              <button onClick={toggleLang} className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900">
                <Languages size={18} className="text-[#0056b3]" />
                <span className="text-xs font-bold uppercase tracking-widest">{lang === 'vi' ? 'Tiếng Anh (EN)' : 'Vietnamese (VN)'}</span>
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-[#0056b3] text-white w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-lg shadow-blue-500/20"
              >
                {t.btnPartner}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-45">
          <SafeImage src={displayImg} alt={displayHeroTitle} className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/88 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#0056b3]/20 border border-[#0056b3]/50 text-[#0056b3] text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(0,86,179,0.3)]">
            {displayHeroTag}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6 uppercase">
            {displayHeroTitle}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {displayHeroDesc}
          </p>
        </div>
      </section>

      {/* Monitor Products Section - Display 6 products in a row */}
      {products.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tight">
              {lang === 'vi' ? 'Các mẫu sản phẩm Màn hình' : 'Monitor Product Models'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
              {products.map((product) => {
                const prodData = product[lang];
                const Icon = ICON_MAP[product.icon] || MonitorIcon;
                return (
                  <div 
                    key={product.id}
                    className="bg-white rounded-[2rem] border border-slate-100 hover:border-[#0056b3] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden flex flex-col group cursor-pointer"
                    onClick={() => {
                      if (product.url) {
                        window.location.href = product.url;
                      }
                    }}
                  >
                    <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center">
                      <SafeImage src={product.img} alt={prodData.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-[#0056b3] text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm border border-white">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-50 text-[#0056b3] rounded-lg group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">{prodData.title}</h3>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {prodData.desc}
                      </p>
                      
                      {/* Technical Specifications */}
                      {prodData.technicalSpecs && prodData.technicalSpecs.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">{lang === 'vi' ? 'Thông số kỹ thuật' : 'Technical Specs'}</h4>
                          <div className="space-y-2">
                            {prodData.technicalSpecs.slice(0, 4).map((spec, idx) => (
                              <div key={idx} className="flex justify-between items-start gap-2">
                                <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide flex-shrink-0">{spec.label}:</span>
                                <span className="text-[11px] font-bold text-slate-900 text-right">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {product.url && (
                        <div className="flex items-center gap-2 text-[#0056b3] text-sm font-bold uppercase tracking-widest mt-4 pt-4 border-t border-slate-200">
                          <span>{lang === 'vi' ? 'Xem chi tiết' : 'View Details'}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white pt-20 pb-12 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/5 pb-16">
            <div className="space-y-6">
              <TextLogo light={true} />
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.footerDesc}
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61584914324843&sk=followers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 rounded-lg text-slate-400 hover:text-[#0056b3] hover:bg-white transition-all cursor-pointer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <div className="p-2.5 bg-white/5 rounded-lg text-slate-400 hover:text-[#0056b3] hover:bg-white transition-all cursor-pointer"><Linkedin className="w-4 h-4" /></div>
                <div className="p-2.5 bg-white/5 rounded-lg text-slate-400 hover:text-[#0056b3] hover:bg-white transition-all cursor-pointer"><Youtube className="w-4 h-4" /></div>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-8 border-l-4 border-[#0056b3] pl-4">{t.footerExplore}</h4>
              <ul className="space-y-4">
                {t.nav.map(link => (
                  <li key={link.name}>
                    <a href={link.url} className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-[#0056b3] group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-8 border-l-4 border-[#0056b3] pl-4">{t.footerSupport}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {t.footerSupportLinks.map((linkText, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition-colors">{linkText}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-8 border-l-4 border-[#0056b3] pl-4">{t.footerContact}</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><MapPin className="w-4 h-4 text-[#0056b3]" /></div>
                  <div className="text-sm text-slate-400 leading-relaxed">{t.footerAddress}</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Phone className="w-4 h-4 text-[#0056b3]" /></div>
                  <div className="text-sm text-slate-400 italic">0377211797</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Mail className="w-4 h-4 text-[#0056b3]" /></div>
                  <div className="text-sm text-slate-400">admin@inspur.com.vn</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
              {t.footerCopy}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

