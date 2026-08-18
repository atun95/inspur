import React, { useState, useEffect } from 'react';
import { useContent } from '../hooks/useContent';
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Image as ImageIcon,
  Languages,
  MousePointer2,
  ArrowRight,
  Menu,
  X,
  Check,
  ChevronDown,
  Monitor as MonitorIcon,
  Laptop as LaptopIcon
} from 'lucide-react';
import { Facebook, Linkedin, Youtube } from '../components/SocialIcons';

// Products data - hardcoded directly in App.js
export const PRODUCTS_DATA = {
  products: [
    {
      id: 1,
      category: "All-in-One",
      vi: {
        title: "Inspur All-in-One AG238 (IIP-UT238)",
        desc: "Máy tính All-in-One chuyên nghiệp với màn hình 23.8 inch, hiệu năng ổn định, thiết kế tinh tế cho văn phòng và gia đình.",
        productTitle: "Inspur All-in-One AG238 (IIP-UT238)",
        productDesc: "Inspur All-in-One AG238 (IIP-UT238) là giải pháp máy tính tất cả trong một chuyên nghiệp với màn hình 23.8 inch Full HD sắc nét, hiệu năng ổn định và thiết kế tinh tế. Phù hợp cho văn phòng, gia đình và môi trường giáo dục.",
        heroTag: "Giải pháp máy tính tất cả trong một",
        heroTitle: "INSPUR ALL IN ONE AG238",
        featuresTitle: "Tính năng nổi bật",
        specsTitle: "Thông số kỹ thuật",
        specs: [
          "Màn hình 23.8 inch Full HD",
          "Hiệu năng ổn định",
          "Thiết kế tinh tế",
          "Tiết kiệm không gian",
          "Phù hợp văn phòng và gia đình"
        ],
        technicalSpecs: [
          { "label": "Màn hình", "value": "23.8\" Full HD, 1920x1080" },
          { "label": "CPU", "value": "Intel 6th-14th gen" },
          { "label": "RAM", "value": "8GB-128GB DDR3-DDR5" },
          { "label": "Ổ cứng", "value": "M.2 NVMe PCIe 128GB-2TB" },
          { "label": "Model", "value": "IIP-UT238" }
        ]
      },
      en: {
        title: "Inspur All-in-One AG238 (IIP-UT238)",
        desc: "Professional all-in-one PC with 23.8-inch display, stable performance, elegant design for office and home.",
        productTitle: "Inspur All-in-One AG238 (IIP-UT238)",
        productDesc: "Inspur All-in-One AG238 (IIP-UT238) is a professional all-in-one computing solution with a sharp 23.8-inch Full HD display, stable performance and elegant design. Perfect for office, home and educational environments.",
        heroTag: "All-in-One Computing Solution",
        heroTitle: "INSPUR ALL IN ONE AG238",
        featuresTitle: "Key Features",
        specsTitle: "Technical Specifications",
        specs: [
          "23.8\" Full HD Display",
          "Stable Performance",
          "Elegant Design",
          "Space Saving",
          "Perfect for Office and Home"
        ],
        technicalSpecs: [
          { "label": "Display", "value": "23.8\" Full HD, 1920x1080" },
          { "label": "CPU", "value": "Intel 6th-14th gen" },
          { "label": "RAM", "value": "8GB-128GB DDR3-DDR5" },
          { "label": "Storage", "value": "M.2 NVMe PCIe 128GB-2TB" },
          { "label": "Model", "value": "IIP-UT238" }
        ]
      },
      img: "./images/UT238-5.jpg",
      icon: "MousePointer2",
      url: "/san-phammay-tinh-all-in-one/"
    },
    {
      id: 2,
      category: "All-in-One",
      vi: {
        title: "Inspur All-in-One QB270",
        desc: "Máy tính All-in-One cao cấp với màn hình 27 inch, hiệu năng mạnh mẽ, thiết kế sang trọng cho không gian làm việc chuyên nghiệp.",
        productTitle: "Inspur All-in-One QB270",
        productDesc: "Inspur All-in-One QB270 là dòng máy tính tất cả trong một cao cấp với màn hình 27 inch Full HD sắc nét, hiệu năng mạnh mẽ và thiết kế sang trọng. Lý tưởng cho không gian làm việc chuyên nghiệp và giải trí đa phương tiện.",
        heroTag: "Giải pháp máy tính tất cả trong một",
        heroTitle: "INSPUR ALL IN ONE QB270",
        featuresTitle: "Tính năng nổi bật",
        specsTitle: "Thông số kỹ thuật",
        specs: [
          "Màn hình 27 inch Full HD",
          "Hiệu năng mạnh mẽ",
          "Thiết kế sang trọng",
          "Màn hình lớn trải nghiệm tốt",
          "Phù hợp không gian chuyên nghiệp"
        ],
        technicalSpecs: [
          { "label": "Màn hình", "value": "27\" IPS Full HD, 1920x1080" },
          { "label": "CPU", "value": "Intel 6th-14th gen" },
          { "label": "RAM", "value": "8GB-128GB DDR3-DDR5" },
          { "label": "Ổ cứng", "value": "M.2 NVMe PCIe 128GB-2TB" },
          { "label": "Nâng hạ", "value": "150mm" },
          { "label": "Model", "value": "IIP-BQ270" }
        ]
      },
      en: {
        title: "Inspur All-in-One QB270",
        desc: "Premium all-in-one PC with 27-inch display, powerful performance, luxurious design for professional workspace.",
        productTitle: "Inspur All-in-One QB270",
        productDesc: "Inspur All-in-One QB270 is a premium all-in-one computing solution with a sharp 27-inch Full HD display, powerful performance and luxurious design. Ideal for professional workspace and multimedia entertainment.",
        heroTag: "All-in-One Computing Solution",
        heroTitle: "INSPUR ALL IN ONE QB270",
        featuresTitle: "Key Features",
        specsTitle: "Technical Specifications",
        specs: [
          "27\" Full HD Display",
          "Powerful Performance",
          "Luxurious Design",
          "Large Display for Better Experience",
          "Perfect for Professional Space"
        ],
        technicalSpecs: [
          { "label": "Display", "value": "27\" IPS Full HD, 1920x1080" },
          { "label": "CPU", "value": "Intel 6th-14th gen" },
          { "label": "RAM", "value": "8GB-128GB DDR3-DDR5" },
          { "label": "Storage", "value": "M.2 NVMe PCIe 128GB-2TB" },
          { "label": "Lifting", "value": "150mm" },
          { "label": "Model", "value": "IIP-BQ270" }
        ]
      },
      img: "./images/QB270.jpg",
      icon: "MousePointer2",
      url: "/san-phammay-tinh-all-in-one/"
    },
    {
      id: 3,
      category: "All-in-One",
      vi: {
        title: "Inspur All-in-One TT238",
        desc: "Máy tính All-in-One hiện đại với màn hình 23.8 inch cảm ứng, hiệu năng ổn định, phù hợp cho giáo dục và thuyết trình.",
        productTitle: "Inspur All-in-One TT238",
        productDesc: "Inspur All-in-One TT238 là giải pháp máy tính tất cả trong một hiện đại với màn hình 23.8 inch cảm ứng đa điểm, hiệu năng ổn định và tính năng đa dạng. Hoàn hảo cho môi trường giáo dục, thuyết trình và tương tác.",
        heroTag: "Giải pháp máy tính tất cả trong một",
        heroTitle: "INSPUR ALL IN ONE TT238",
        featuresTitle: "Tính năng nổi bật",
        specsTitle: "Thông số kỹ thuật",
        specs: [
          "Màn hình 23.8 inch cảm ứng",
          "Cảm ứng đa điểm",
          "Hiệu năng ổn định",
          "Phù hợp giáo dục",
          "Tương tác trực quan"
        ],
        technicalSpecs: [
          { "label": "Màn hình", "value": "23.8\" Cảm ứng Full HD, 1920x1080" },
          { "label": "CPU", "value": "Intel 6th-14th gen" },
          { "label": "RAM", "value": "8GB-128GB DDR3-DDR5" },
          { "label": "Ổ cứng", "value": "M.2 NVMe PCIe 128GB-2TB" },
          { "label": "Nâng hạ", "value": "0-130mm" },
          { "label": "Model", "value": "IIP-TT238" }
        ]
      },
      en: {
        title: "Inspur All-in-One TT238",
        desc: "Modern all-in-one PC with 23.8-inch touch display, stable performance, suitable for education and presentations.",
        productTitle: "Inspur All-in-One TT238",
        productDesc: "Inspur All-in-One TT238 is a modern all-in-one computing solution with a 23.8-inch multi-touch display, stable performance and diverse features. Perfect for educational environments, presentations and interaction.",
        heroTag: "All-in-One Computing Solution",
        heroTitle: "INSPUR ALL IN ONE TT238",
        featuresTitle: "Key Features",
        specsTitle: "Technical Specifications",
        specs: [
          "23.8\" Touch Display",
          "Multi-touch Support",
          "Stable Performance",
          "Perfect for Education",
          "Visual Interaction"
        ],
        technicalSpecs: [
          { "label": "Display", "value": "23.8\" Touch Full HD, 1920x1080" },
          { "label": "CPU", "value": "Intel 6th-14th gen" },
          { "label": "RAM", "value": "8GB-128GB DDR3-DDR5" },
          { "label": "Storage", "value": "M.2 NVMe PCIe 128GB-2TB" },
          { "label": "Lifting", "value": "0-130mm" },
          { "label": "Model", "value": "IIP-TT238" }
        ]
      },
      img: "./images/TT238-7.jpg",
      icon: "MousePointer2",
      url: "/san-phammay-tinh-all-in-one/"
    },
    {
      id: 4,
      category: "All-in-One",
      vi: {
        title: "Inspur All-in-One QT238",
        desc: "Máy tính All-in-One chất lượng cao với màn hình 23.8 inch, hiệu năng đáng tin cậy, giá cả hợp lý cho mọi nhu cầu.",
        productTitle: "Inspur All-in-One QT238",
        productDesc: "Inspur All-in-One QT238 là giải pháp máy tính tất cả trong một chất lượng cao với màn hình 23.8 inch Full HD, hiệu năng đáng tin cậy và giá cả hợp lý. Phù hợp cho mọi nhu cầu từ văn phòng đến gia đình.",
        heroTag: "Giải pháp máy tính tất cả trong một",
        heroTitle: "INSPUR ALL IN ONE QT238",
        featuresTitle: "Tính năng nổi bật",
        specsTitle: "Thông số kỹ thuật",
        specs: [
          "Màn hình 23.8 inch Full HD",
          "Hiệu năng đáng tin cậy",
          "Giá cả hợp lý",
          "Chất lượng cao",
          "Phù hợp mọi nhu cầu"
        ],
        technicalSpecs: [
          { "label": "Màn hình", "value": "23.8\" Full HD, 1920x1080" },
          { "label": "CPU", "value": "Intel 6th-14th gen" },
          { "label": "RAM", "value": "8GB-128GB DDR3-DDR5" },
          { "label": "Ổ cứng", "value": "M.2 NVMe PCIe 128GB-2TB" },
          { "label": "Model", "value": "IIP-QT238" }
        ]
      },
      en: {
        title: "Inspur All-in-One QT238",
        desc: "High-quality all-in-one PC with 23.8-inch display, reliable performance, affordable price for all needs.",
        productTitle: "Inspur All-in-One QT238",
        productDesc: "Inspur All-in-One QT238 is a high-quality all-in-one computing solution with a 23.8-inch Full HD display, reliable performance and affordable price. Suitable for all needs from office to home.",
        heroTag: "All-in-One Computing Solution",
        heroTitle: "INSPUR ALL IN ONE QT238",
        featuresTitle: "Key Features",
        specsTitle: "Technical Specifications",
        specs: [
          "23.8\" Full HD Display",
          "Reliable Performance",
          "Affordable Price",
          "High Quality",
          "Suitable for All Needs"
        ],
        technicalSpecs: [
          { "label": "Display", "value": "23.8\" Full HD, 1920x1080" },
          { "label": "CPU", "value": "Intel 6th-14th gen" },
          { "label": "RAM", "value": "8GB-128GB DDR3-DDR5" },
          { "label": "Storage", "value": "M.2 NVMe PCIe 128GB-2TB" },
          { "label": "Model", "value": "IIP-QT238" }
        ]
      },
      img: "./images/QT238.jpg",
      icon: "MousePointer2",
      url: "/san-phammay-tinh-all-in-one/"
    }
  ]
};

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

export const TRANSLATIONS = {
  vi: {
    seo: {
      title: "Máy tính All-in-One Inspur | Giải pháp máy tính tất cả trong một",
      desc: "Khám phá Máy tính All-in-One Inspur - Giải pháp máy tính tất cả trong một hiện đại, tiết kiệm không gian và tích hợp camera AI bảo mật với màn hình tràn viền 27\" và loa tích hợp Hi-Fi.",
      keywords: "Máy tính All-in-One Inspur, All-in-One PC, Máy tính AIO, Inspur All-in-One, Máy tính tích hợp"
    },
    nav: [
      { name: 'Về Inspur', url: '/about' },
      { name: 'Giải pháp', url: '/giai-phap'},
      { name: 'Tin tức và sự kiện', url: '/tin-tuc-va-su-kien',},
      { name: 'Liên hệ', url: '/contact' },
    ],
    btnPartner: 'Liên hệ báo giá',
    heroTag: 'Giải pháp máy tính tất cả trong một',
    heroTitle: 'INSPUR ALL IN ONE',
    heroDesc: 'Giải pháp máy tính tất cả trong một, tiết kiệm không gian và tích hợp camera AI bảo mật. Màn hình tràn viền 27", loa tích hợp Hi-Fi và kết nối Wi-Fi 6E.',
    productTitle: 'Inspur All in one',
    productDesc: 'Inspur All in one mang đến trải nghiệm máy tính hoàn hảo với thiết kế tất cả trong một hiện đại. Tích hợp màn hình tràn viền 27 inch, hệ thống loa Hi-Fi chất lượng cao, camera AI bảo mật thông minh, và kết nối Wi-Fi 6E tốc độ cao. Giải pháp lý tưởng cho văn phòng và gia đình, tiết kiệm không gian tối đa.',
    featuresTitle: 'Tính năng nổi bật',
    specs: [
      'Màn hình tràn viền 27 inch',
      'Loa tích hợp Hi-Fi chất lượng cao',
      'Camera AI bảo mật thông minh',
      'Kết nối Wi-Fi 6E tốc độ cao',
      'Thiết kế tất cả trong một tiện lợi',
      'Tiết kiệm không gian tối đa'
    ],
    specsTitle: 'Thông số kỹ thuật',
    img: './images/QT238.jpg',
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
      title: "Inspur All-in-One PC | All-in-One Computing Solution",
      desc: "Discover Inspur All-in-One PC - Modern all-in-one computing solution, space-saving with integrated AI security camera, featuring 27\" edge-to-edge display and integrated Hi-Fi speakers.",
      keywords: "Inspur All-in-One, All-in-One PC, AIO Computer, Inspur AIO, Integrated PC"
    },
    nav: [
      { name: 'About Inspur', url: '/about' },
      { name: 'Products', url: '/san-pham'},
      { name: 'Events', url: '/tin-tuc-va-su-kien'},
      { name: 'Contact', url: '/contact' }
    ],
    btnPartner: 'Request Quote',
    heroTag: 'All-in-One Computing Solution',
    heroTitle: 'INSPUR ALL IN ONE',
    heroDesc: 'All-in-one computing solution, space-saving with integrated AI security camera. 27" Edge-to-edge display, integrated Hi-Fi speakers and Wi-Fi 6E connectivity.',
    productTitle: 'Inspur All in one',
    productDesc: 'Inspur All in one delivers the perfect computing experience with modern all-in-one design. Features a 27-inch edge-to-edge display, high-quality Hi-Fi speaker system, intelligent AI security camera, and high-speed Wi-Fi 6E connectivity. Ideal solution for office and home, maximizing space savings.',
    featuresTitle: 'Key Features',
    specs: [
      '27" Edge-to-edge Display',
      'Integrated Hi-Fi Speakers',
      'Intelligent AI Security Camera',
      'High-speed Wi-Fi 6E Connectivity',
      'Convenient All-in-One Design',
      'Maximum Space Saving'
    ],
    specsTitle: 'Technical Specifications',
    img: './images/sanpham7.jpg',
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
  MousePointer2,
  Monitor: MonitorIcon,
  Laptop: LaptopIcon
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [products, setProducts] = useState([]);
  
  const { lang, toggleLang, t, products: serverProducts, loading } = useContent('allInOne', TRANSLATIONS);

  useEffect(() => {
    if (serverProducts && serverProducts.length > 0) {
      setProducts(serverProducts);
    } else {
      setProducts(PRODUCTS_DATA.products);
    }
  }, [serverProducts]);

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
    
    // SEO for general All-in-One page
    const seoTitle = t.seo.title;
    const seoDesc = t.seo.desc;
    const seoKeywords = t.seo.keywords;
    const logoImageUrl = window.location.origin + '/images/logo4.jpg';
    
    updateMeta('description', seoDesc);
    updateMeta('keywords', seoKeywords);
    document.title = seoTitle;
    
    // Open Graph / Facebook
    updateMeta('og:title', seoTitle, 'property');
    updateMeta('og:description', seoDesc, 'property');
    updateMeta('og:type', 'website', 'property');
    updateMeta('og:url', window.location.href, 'property');
    updateMeta('og:image', logoImageUrl, 'property');
    updateMeta('og:image:width', '1200', 'property');
    updateMeta('og:image:height', '630', 'property');
    updateMeta('og:image:type', 'image/jpeg', 'property');
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', seoTitle);
    updateMeta('twitter:description', seoDesc);
    updateMeta('twitter:image', logoImageUrl);
    
    // Favicon - Use favicon.ico
    const setLinkTag = (rel, href, sizes = null, type = null) => {
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
    setLinkTag('shortcut icon', '/favicon.ico', null, 'image/x-icon');
    setLinkTag('icon', '/favicon.ico', null, 'image/x-icon');
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, t.seo]);

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

  // Use general All-in-One translations (not specific product)
  const displayHeroTag = t.heroTag || '';
  const displayHeroTitle = t.heroTitle || '';
  const displayHeroDesc = t.heroDesc || '';
  const displayImg = t.img || './images/sanpham7.jpg';

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

      {/* All-in-One Products Section - Display 4 products in a row */}
      {products.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tight">
              {lang === 'vi' ? 'Các mẫu sản phẩm All-in-One' : 'All-in-One Product Models'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => {
                const prodData = product[lang];
                const Icon = ICON_MAP[product.icon] || MousePointer2;
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
                          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-3">{prodData.specsTitle || (lang === 'vi' ? 'Thông số kỹ thuật' : 'Technical Specs')}</h4>
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
      <footer className="bg-[#0a0a0a] text-white pt-10 pb-6 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10 border-b border-white/5 pb-8">
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
              © 2025 INSPUR VIETNAM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

