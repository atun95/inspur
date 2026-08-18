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
  Laptop as LaptopIcon,
  MousePointer2,
  Keyboard,
  Cpu,
  ArrowRight,
  Menu,
  X,
  Check,
  ChevronDown,
  Box,
  Send,
  MessageSquare
} from 'lucide-react';
import { Facebook, Linkedin, Youtube } from '../components/SocialIcons';

const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`${className} bg-slate-200 flex flex-col items-center justify-center gap-2 border border-slate-300`}>
        <ImageIcon className="text-slate-400 w-8 h-8" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Image Updating</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
};

export const TRANSLATIONS = {
  vi: {
    seo: {
      title: "Inspur OEM | Sản phẩm Gia công & OEM Chất lượng Cao",
      desc: "Dịch vụ OEM và gia công thiết bị công nghệ cao: Màn hình, Mini PC, Chuột, Bàn phím và nhiều sản phẩm khác từ Inspur.",
      keywords: "Inspur OEM, gia công thiết bị, màn hình OEM, mini PC OEM, chuột bàn phím OEM, sản xuất theo yêu cầu",
    },
    nav: [
      { name: 'Về Inspur', url: '/about' },
      { name: 'Sản Phẩm', url: '/san-pham' },
      { name: 'Giải pháp', url: '/giai-phap' },
      { name: 'OEM', url: '/oem' },
      { name: 'Tin tức và sự kiện', url: '/tin-tuc-va-su-kien' },
      { name: 'Liên hệ', url: '/contact' },
    ],
    contactBtn: "Liên hệ ngay",
    heroTag: "Dịch vụ OEM & Gia công Chuyên nghiệp",
    heroTitle: "SẢN PHẨM OEM",
    heroSubtitle: "CHẤT LƯỢNG CAO",
    heroDesc: "Inspur cung cấp dịch vụ OEM và gia công thiết bị công nghệ với chất lượng đạt chuẩn quốc tế, đáp ứng mọi nhu cầu sản xuất và thương hiệu hóa sản phẩm.",
    
    productsTitle: "Danh Mục Sản Phẩm OEM",
    productsTag: "Sản phẩm của chúng tôi",
    products: [
      {
        id: 1,
        category: 'Thiết bị hiển thị',
        title: 'Màn hình Inspur OEM',
        desc: 'Màn hình OEM chất lượng cao với nhiều kích thước và độ phân giải đa dạng, phù hợp cho mọi ứng dụng từ văn phòng đến gaming.',
        specs: ['Độ phân giải: Full HD, 2K, 4K', 'Tấm nền IPS/VA', 'Công nghệ lọc ánh sáng xanh', 'Thiết kế bezel mỏng'],
        img: './images/IIP49SX.jpg',
        icon: Monitor
      },
      {
        id: 2,
        category: 'Máy tính mini',
        title: 'Mini PC Inspur OEM',
        desc: 'Hệ thống máy tính mini hiệu năng cao, tiết kiệm không gian, phù hợp cho văn phòng, giáo dục và giải pháp nhúng.',
        specs: ['CPU: Intel/AMD đa dạng', 'RAM: DDR4/DDR5', 'Lưu trữ: SSD/HDD', 'Kết nối đa dạng'],
        img: './images/sanpham6.jpg',
        icon: LaptopIcon
      },
      {
        id: 3,
        category: 'Thiết bị nhập liệu',
        title: 'Chuột & Bàn phím OEM',
        desc: 'Chuột và bàn phím OEM với thiết kế ergonomic, độ bền cao và giá cả cạnh tranh cho mọi đối tác.',
        specs: ['Chuột: Wireless/Có dây', 'Bàn phím: Cơ/Màng phim', 'Tương thích đa nền tảng', 'Thiết kế bền bỉ'],
        img: './images/sanpham7.jpg',
        icon: MousePointer2
      },
      {
        id: 4,
        category: 'Thiết bị ngoại vi',
        title: 'Thiết bị ngoại vi OEM',
        desc: 'Webcam, loa, tai nghe và các thiết bị ngoại vi khác với chất lượng cao, sẵn sàng cho thương hiệu hóa.',
        specs: ['Webcam HD/Full HD', 'Loa công suất cao', 'Tai nghe chất lượng', 'Tùy chỉnh theo yêu cầu'],
        img: './images/sanpham1.jpg',
        icon: Box
      }
    ],

    servicesTitle: "Dịch Vụ OEM của Inspur",
    services: [
      {
        title: "Gia công theo đơn hàng",
        desc: "Sản xuất sản phẩm theo thiết kế và yêu cầu riêng của đối tác, đảm bảo chất lượng và thời gian giao hàng."
      },
      {
        title: "Thương hiệu hóa sản phẩm",
        desc: "Hỗ trợ in logo, đóng gói và thương hiệu hóa sản phẩm theo yêu cầu của đối tác."
      },
      {
        title: "Hỗ trợ kỹ thuật",
        desc: "Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ tư vấn và giải quyết mọi vấn đề kỹ thuật."
      }
    ],

    contactTitle: "Liên Hệ Với Chúng Tôi",
    contactSubtitle: "Nhận báo giá và tư vấn OEM ngay hôm nay",
    contactDesc: "Điền thông tin bên dưới, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    formName: "Họ và tên *",
    formCompany: "Công ty/Tổ chức",
    formPhone: "Số điện thoại *",
    formEmail: "Email *",
    formProduct: "Sản phẩm quan tâm",
    formMessage: "Tin nhắn/Yêu cầu *",
    formSubmit: "Gửi yêu cầu",
    formPlaceholderName: "Nhập họ và tên của bạn",
    formPlaceholderCompany: "Nhập tên công ty",
    formPlaceholderPhone: "Nhập số điện thoại",
    formPlaceholderEmail: "Nhập email của bạn",
    formPlaceholderMessage: "Mô tả yêu cầu hoặc sản phẩm bạn cần...",

    contactInfoTitle: "Thông Tin Liên Hệ",
    contactAddress: "68 Ký Hoà, Phường Chợ Lớn, TP.HCM",
    contactPhone: "0377 211 797",
    contactEmail: "admin@inspur.com.vn",
    contactHours: "Thứ 2 - Thứ 6: 8:00 - 17:30",

    footerDesc: 'Inspur Việt Nam - Đối tác tin cậy cho dịch vụ OEM và gia công thiết bị công nghệ chất lượng cao.',
    footerProduct: "Khám Phá",
    footerGroup: "Hỗ trợ",
    footerContact: "Thông tin liên hệ",
    footerCopy: '© 2025 INSPUR VIETNAM GROUP.'
  },
  en: {
    seo: {
      title: "Inspur OEM | High-Quality OEM & Manufacturing Services",
      desc: "OEM and manufacturing services for high-tech devices: Monitors, Mini PCs, Mice, Keyboards and more from Inspur.",
      keywords: "Inspur OEM, device manufacturing, OEM monitors, OEM mini PC, OEM mouse keyboard, custom manufacturing",
    },
    nav: [
      { name: 'About Inspur', url: '/about' },
      { name: 'Products', url: '/san-pham' },
      { name: 'Solutions', url: '/giai-phap' },
      { name: 'OEM', url: '/oem' },
      { name: 'Events', url: '/tin-tuc-va-su-kien' },
      { name: 'Contact', url: '/contact' },
    ],
    contactBtn: "Contact Now",
    heroTag: "Professional OEM & Manufacturing Services",
    heroTitle: "HIGH-QUALITY",
    heroSubtitle: "OEM PRODUCTS",
    heroDesc: "Inspur provides OEM and manufacturing services for technology devices with international standard quality, meeting all production and branding needs.",

    productsTitle: "OEM Product Catalog",
    productsTag: "Our Products",
    products: [
      {
        id: 1,
        category: 'Display Devices',
        title: 'Inspur OEM Monitors',
        desc: 'High-quality OEM monitors with diverse sizes and resolutions, suitable for all applications from office to gaming.',
        specs: ['Resolution: Full HD, 2K, 4K', 'IPS/VA Panels', 'Blue light filter technology', 'Slim bezel design'],
        img: './images/IIP49SX.jpg',
        icon: Monitor
      },
      {
        id: 2,
        category: 'Mini Computers',
        title: 'Inspur OEM Mini PC',
        desc: 'High-performance mini computer systems, space-saving, suitable for office, education and embedded solutions.',
        specs: ['CPU: Various Intel/AMD', 'RAM: DDR4/DDR5', 'Storage: SSD/HDD', 'Diverse connectivity'],
        img: './images/sanpham6.jpg',
        icon: LaptopIcon
      },
      {
        id: 3,
        category: 'Input Devices',
        title: 'OEM Mouse & Keyboard',
        desc: 'OEM mice and keyboards with ergonomic design, high durability and competitive prices for all partners.',
        specs: ['Mouse: Wireless/Wired', 'Keyboard: Mechanical/Membrane', 'Multi-platform compatible', 'Durable design'],
        img: './images/sanpham7.jpg',
        icon: MousePointer2
      },
      {
        id: 4,
        category: 'Peripheral Devices',
        title: 'OEM Peripherals',
        desc: 'Webcams, speakers, headsets and other peripherals with high quality, ready for branding.',
        specs: ['HD/Full HD Webcam', 'High-power speakers', 'Quality headsets', 'Customizable on demand'],
        img: './images/sanpham1.jpg',
        icon: Box
      }
    ],

    servicesTitle: "Inspur OEM Services",
    services: [
      {
        title: "Custom Manufacturing",
        desc: "Manufacture products according to partner's unique designs and requirements, ensuring quality and delivery time."
      },
      {
        title: "Product Branding",
        desc: "Support logo printing, packaging and product branding according to partner requirements."
      },
      {
        title: "Technical Support",
        desc: "Professional technical team ready to provide consultation and solve all technical issues."
      }
    ],

    contactTitle: "Contact Us",
    contactSubtitle: "Get OEM quote and consultation today",
    contactDesc: "Fill in the information below, we will contact you as soon as possible.",
    formName: "Full Name *",
    formCompany: "Company/Organization",
    formPhone: "Phone Number *",
    formEmail: "Email *",
    formProduct: "Product of Interest",
    formMessage: "Message/Request *",
    formSubmit: "Send Request",
    formPlaceholderName: "Enter your full name",
    formPlaceholderCompany: "Enter company name",
    formPlaceholderPhone: "Enter phone number",
    formPlaceholderEmail: "Enter your email",
    formPlaceholderMessage: "Describe your requirements or products you need...",

    contactInfoTitle: "Contact Information",
    contactAddress: "68 Ky Hoa, Ward Cho Lon, HCMC",
    contactPhone: "0377 211 797",
    contactEmail: "admin@inspur.com.vn",
    contactHours: "Monday - Friday: 8:00 - 17:30",

    footerDesc: 'Inspur Vietnam - Trusted partner for high-quality OEM and technology device manufacturing services.',
    footerProduct: "Explore",
    footerGroup: "Support",
    footerContact: "Contact Information",
    footerCopy: '© 2025 INSPUR VIETNAM GROUP.'
  }
};

const ICON_MAP = {
  Monitor,
  LaptopIcon,
  MousePointer2,
  Box
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const { lang, setLang, toggleLang, t, products: serverProducts, loading } = useContent('oem', TRANSLATIONS);
  const displayProducts = serverProducts || t.products || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    alert(lang === 'vi' ? 'Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất có thể.' : 'Thank you! We will contact you as soon as possible.');
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      product: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // Set document title
    document.title = t.seo.title;
    
    // Helper function to update or create meta tags
    const updateMeta = (name, content, isProperty = false) => {
      let el = isProperty 
        ? document.querySelector(`meta[property="${name}"]`)
        : document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const updateLink = (rel, href, type = null) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (type) el.setAttribute('type', type);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Basic SEO Meta Tags
    updateMeta('description', t.seo.desc);
    updateMeta('keywords', t.seo.keywords);
    updateMeta('author', 'Inspur Vietnam Group');
    updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('language', lang === 'vi' ? 'Vietnamese' : 'English');
    updateMeta('revisit-after', '7 days');
    updateMeta('distribution', 'global');
    updateMeta('rating', 'general');

    // Viewport meta (ensure it exists)
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
      document.head.appendChild(viewport);
    }

    // Charset meta (ensure it exists)
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Favicon
    updateLink('icon', '/favicon.ico', 'image/x-icon');
    updateLink('shortcut icon', '/favicon.ico', 'image/x-icon');
    updateLink('apple-touch-icon', '/favicon.ico');

    // Canonical URL
    updateLink('canonical', window.location.href);

    // Open Graph Tags
    updateMeta('og:type', 'website', true);
    updateMeta('og:title', t.seo.title, true);
    updateMeta('og:description', t.seo.desc, true);
    updateMeta('og:image', window.location.origin + '/images/logo4.jpg', true);
    updateMeta('og:url', window.location.href, true);
    updateMeta('og:site_name', 'Inspur Vietnam', true);
    updateMeta('og:locale', lang === 'vi' ? 'vi_VN' : 'en_US', true);
    updateMeta('og:image:width', '1200', true);
    updateMeta('og:image:height', '630', true);
    updateMeta('og:image:alt', 'Inspur OEM Services', true);

    // Twitter Card Tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', t.seo.title);
    updateMeta('twitter:description', t.seo.desc);
    updateMeta('twitter:image', window.location.origin + '/images/logo4.jpg');
    updateMeta('twitter:image:alt', 'Inspur OEM Services');

    // Structured Data (JSON-LD) - Organization
    let orgScript = document.querySelector('script[type="application/ld+json"][data-type="organization"]');
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.setAttribute('type', 'application/ld+json');
      orgScript.setAttribute('data-type', 'organization');
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Inspur Vietnam Group",
      "alternateName": "Inspur Vietnam",
      "url": "/",
      "logo": window.location.origin + "/images/logo4.jpg",
      "image": window.location.origin + "/images/logo4.jpg",
      "description": t.seo.desc,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "68 Ký Hoà",
        "addressLocality": "Phường Chợ Lớn",
        "addressRegion": "TP.HCM",
        "addressCountry": "VN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+84-377-211-797",
        "contactType": "Customer Service",
        "email": "admin@inspur.com.vn",
        "areaServed": "VN",
        "availableLanguage": ["Vietnamese", "English"]
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61584914324843"
      ]
    });

    // Structured Data (JSON-LD) - WebPage
    let webpageScript = document.querySelector('script[type="application/ld+json"][data-type="webpage"]');
    if (!webpageScript) {
      webpageScript = document.createElement('script');
      webpageScript.setAttribute('type', 'application/ld+json');
      webpageScript.setAttribute('data-type', 'webpage');
      document.head.appendChild(webpageScript);
    }
    webpageScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": t.seo.title,
      "description": t.seo.desc,
      "url": window.location.href,
      "inLanguage": lang === 'vi' ? 'vi-VN' : 'en-US',
      "isPartOf": {
        "@type": "WebSite",
        "name": "Inspur Vietnam",
        "url": "/"
      },
      "about": {
        "@type": "Thing",
        "name": "OEM Manufacturing Services",
        "description": "Professional OEM and manufacturing services for technology devices"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": window.location.origin + "/images/logo4.jpg"
      }
    });

    // Structured Data (JSON-LD) - Service
    let serviceScript = document.querySelector('script[type="application/ld+json"][data-type="service"]');
    if (!serviceScript) {
      serviceScript = document.createElement('script');
      serviceScript.setAttribute('type', 'application/ld+json');
      serviceScript.setAttribute('data-type', 'service');
      document.head.appendChild(serviceScript);
    }
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "OEM Manufacturing Services",
      "provider": {
        "@type": "Organization",
        "name": "Inspur Vietnam Group"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Vietnam"
      },
      "description": t.seo.desc,
      "offers": {
        "@type": "Offer",
        "description": lang === 'vi' ? 'Dịch vụ OEM chất lượng cao với giá cả cạnh tranh' : 'High-quality OEM services with competitive pricing'
      }
    });
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, t.seo]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#0056b3] selection:text-white">
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[150] transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-[200] transition-transform duration-500 ease-out lg:hidden shadow-2xl ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between border-b border-slate-100">
            <span className="font-black text-2xl tracking-tighter italic uppercase text-[#0056b3]">INSPUR</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-50 rounded-full text-slate-400">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {t.nav.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                className="flex items-center py-4 group border-b border-slate-50 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-black text-sm uppercase tracking-widest text-slate-700 group-hover:text-[#0056b3] transition-colors">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
          <div className="p-8 bg-slate-50 space-y-6">
            <button 
              onClick={toggleLang}
              className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm"
            >
              <Languages size={16} className="text-[#0056b3]" />
              {lang === 'vi' ? 'Switch to English' : 'Dùng Tiếng Việt'}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '/'}>
            <img
              src="./images/logo4.jpg"
              alt="Inspur Logo"
              className="h-8 w-auto cursor-pointer"
              onClick={() => window.location.href = '/'}
            />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {t.nav.map((item) => (
              <a 
                key={item.name} 
                href={item.url} 
                className={`text-xs md:text-sm font-extrabold uppercase tracking-widest transition-all ${
                  isScrolled ? 'text-slate-600 hover:text-[#0056b3]' : 'text-white hover:text-slate-200'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-[10px] font-black uppercase tracking-widest ${
                isScrolled ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <Languages size={14} />
              {lang === 'vi' ? 'English' : 'Tiếng Việt'}
            </button>

            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-[#0056b3] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#004494] transition-all shadow-lg shadow-blue-500/20"
            >
              {t.contactBtn}
            </button>
          </div>

          <button 
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'bg-slate-100 text-slate-600' : 'bg-white/10 text-white backdrop-blur-md'
            }`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000" 
            alt="OEM Manufacturing" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-50 to-transparent z-1"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#0056b3]/20 border border-[#0056b3]/40 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0056b3] animate-pulse"></span>
              <span className="text-[#0056b3] text-[10px] font-black uppercase tracking-[0.3em]">{t.heroTag}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
              {t.heroTitle} <br/>
              <span className="text-[#0056b3]">{t.heroSubtitle}</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-24 bg-white z-20 -mt-16 md:-mt-24 rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#0056b3] text-[10px] font-black uppercase tracking-[0.4em] block mb-4">{t.productsTag}</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">{t.productsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {displayProducts.map((product) => (
              <div key={product.id} className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0056b3] text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  {(() => {
                    const IconComponent = typeof product.icon === 'string' ? ICON_MAP[product.icon] || Box : product.icon || Box;
                    return <IconComponent size={28} />;
                  })()}
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#0056b3]/10 text-[#0056b3] text-[9px] font-black uppercase rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight uppercase">{product.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 md:mb-8 font-medium">{product.desc}</p>
                <div className="space-y-3">
                  {product.specs && Array.isArray(product.specs) && product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-slate-700">
                      <div className="w-1 h-1 rounded-full bg-[#0056b3]"></div> {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">{t.servicesTitle}</h2>
            <div className="w-20 h-1.5 bg-[#0056b3] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-6">
                  <Check size={28} />
                </div>
                <h4 className="text-xl font-black mb-4 text-slate-900 uppercase">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-[#0056b3] font-bold mb-2">{t.contactSubtitle}</p>
            <p className="text-slate-400 text-lg">{t.contactDesc}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">
                    {t.formName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.formPlaceholderName}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">
                    {t.formCompany}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.formPlaceholderCompany}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">
                      {t.formPhone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={t.formPlaceholderPhone}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.formPlaceholderEmail}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">
                    {t.formProduct}
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                  >
                    <option value="">{lang === 'vi' ? 'Chọn sản phẩm...' : 'Select product...'}</option>
                    {t.products.map(p => (
                      <option key={p.id} value={p.title} className="bg-slate-900">{p.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2">
                    {t.formMessage}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder={t.formPlaceholderMessage}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-[#0056b3] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#004494] transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
                >
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  {t.formSubmit}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-white/10">
                <h3 className="text-2xl font-black text-white uppercase mb-8 tracking-tighter">{t.contactInfoTitle}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0056b3] rounded-xl">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">{lang === 'vi' ? 'Địa chỉ' : 'Address'}</h4>
                      <p className="text-slate-400">{t.contactAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0056b3] rounded-xl">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">{lang === 'vi' ? 'Điện thoại' : 'Phone'}</h4>
                      <p className="text-slate-400">{t.contactPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0056b3] rounded-xl">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">Email</h4>
                      <p className="text-slate-400">{t.contactEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0056b3] rounded-xl">
                      <MessageSquare size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">{lang === 'vi' ? 'Giờ làm việc' : 'Business Hours'}</h4>
                      <p className="text-slate-400">{t.contactHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0056b3] to-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white">
                <h4 className="text-xl font-black uppercase mb-4">{lang === 'vi' ? 'Tại sao chọn Inspur OEM?' : 'Why Choose Inspur OEM?'}</h4>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-[#0056b3] bg-white rounded-full p-0.5" />
                    <span>{lang === 'vi' ? 'Chất lượng đạt chuẩn quốc tế' : 'International standard quality'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-[#0056b3] bg-white rounded-full p-0.5" />
                    <span>{lang === 'vi' ? 'Giá cả cạnh tranh' : 'Competitive pricing'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-[#0056b3] bg-white rounded-full p-0.5" />
                    <span>{lang === 'vi' ? 'Giao hàng đúng hẹn' : 'On-time delivery'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-[#0056b3] bg-white rounded-full p-0.5" />
                    <span>{lang === 'vi' ? 'Hỗ trợ kỹ thuật 24/7' : '24/7 technical support'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-12 pb-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-10">
            <div className="space-y-8 text-center md:text-left">
              <span className="font-black text-4xl tracking-tighter italic uppercase text-white">INSPUR</span>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">{t.footerDesc}</p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://www.facebook.com/profile.php?id=61584914324843" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#0056b3] transition-all cursor-pointer border border-white/5">
                  <Facebook size={20} />
                </a>
                <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#0056b3] transition-all cursor-pointer border border-white/5">
                  <Linkedin size={20} />
                </div>
                <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#0056b3] transition-all cursor-pointer border border-white/5">
                  <Youtube size={20} />
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h5 className="text-[11px] font-black uppercase tracking-widest text-[#0056b3] mb-8">{t.footerProduct}</h5>
              <ul className="space-y-4 text-slate-400 text-sm font-bold">
                <li><a href="/san-pham" className="hover:text-white transition-colors">Sản phẩm</a></li>
                <li><a href="/giai-phap" className="hover:text-white transition-colors">Giải pháp</a></li>
                <li><a href="/tin-tuc-va-su-kien" className="hover:text-white transition-colors">Tin tức và sự kiện</a></li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h5 className="text-[11px] font-black uppercase tracking-widest text-[#0056b3] mb-8">{t.footerGroup}</h5>
              <ul className="space-y-4 text-slate-400 text-sm font-bold">
                <li><a href="/about" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Liên hệ</a></li>
                <li><a href="/oem" className="hover:text-white transition-colors">OEM Services</a></li>
              </ul>
            </div>

            <div className="space-y-6 text-center md:text-left">
              <h5 className="text-[11px] font-black uppercase tracking-widest text-[#0056b3] mb-8">{t.footerContact}</h5>
              <div className="flex items-start gap-4 text-sm text-slate-400 font-medium justify-center md:justify-start">
                <MapPin size={20} className="text-[#0056b3] shrink-0 mt-1" />
                <span>{t.contactAddress}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400 font-bold justify-center md:justify-start">
                <Phone size={20} className="text-[#0056b3] shrink-0" />
                <span>{t.contactPhone}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400 font-medium justify-center md:justify-start">
                <Mail size={20} className="text-[#0056b3] shrink-0" />
                <span>{t.contactEmail}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex justify-center items-center">
            <p className="text-slate-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-center">© 2025 INSPUR VIETNAM</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

