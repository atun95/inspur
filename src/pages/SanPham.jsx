import React, { useState, useEffect } from 'react';
import { useContent } from '../hooks/useContent';
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Image as ImageIcon,
  Languages,
  Server,
  Database,
  Cpu,
  ArrowRight,
  Menu,
  X,
  Search,
  Settings,
  HardDrive,
  BarChart3,
  Check,
  ChevronDown,
  Monitor,
  Laptop as LaptopIcon,
  MousePointer2,
  Zap,
  Network,
  Bot,
  Battery,
  Plug,
  Smartphone
} from 'lucide-react';
import { Facebook, Linkedin, Youtube } from '../components/SocialIcons';
import HeroTitle from '../components/HeroTitle';

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
      title: "Phần cứng Inspur | PC, Laptop, All-in-One & ARM Solutions",
      desc: "Khám phá danh mục thiết bị phần cứng cao cấp từ Inspur: Màn hình chuyên nghiệp, máy tính All-in-One và tay đỡ màn hình Inspur Arm.",
      keywords: "Inspur Monitor, Inspur All-in-One, Inspur Arm, Monitor Arm, Inspur Hardware"
    },
    nav: [
      { name: 'Về Inspur', url: '/about' },
      { name: 'Giải pháp', url: '/giai-phap'},
      { name: 'Liên hệ', url: '/contact' },
      
    ],
    btnPartner: 'Liên hệ báo giá',
    heroTag: 'Giải Pháp Hạ Tầng Số Toàn Cầu 2025',
    heroTitle: 'THIẾT BỊ ĐẦU CUỐI & HỆ THỐNG TÍNH TOÁN HIỆN ĐẠI',
    heroDesc: 'Từ màn hình chuyên nghiệp, máy tính All-in-One đến tay đỡ màn hình Inspur Arm hiện đại, chúng tôi mang đến công cụ hoàn hảo cho kỷ nguyên số.',
    filterAll: 'Tất cả sản phẩm',
    categories: ['Monitor', 'All-in-One', 'Monitor Arm'],
    products: [
      {
        id: 3,
        category: 'Monitor',
        title: 'Inspur Monitor',
        desc: 'Màn hình chuyên nghiệp với độ phân giải cao, tần số quét nhanh và công nghệ hiển thị tiên tiến cho công việc chuyên nghiệp.',
        specs: ['Độ phân giải 4K/UHD', 'Tần số quét 144Hz', 'Công nghệ IPS/VA Panel'],
        img: './images/IIP270QT.png',
        icon: Monitor,
        url: '/man-hinh-inspur/'
      },
      {
        id: 4,
        category: 'All-in-One',
        title: 'Inspur All in one',
        desc: 'Giải pháp máy tính tất cả trong một, tiết kiệm không gian và tích hợp camera AI bảo mật.',
        specs: ['Màn hình tràn viền 27"', 'Loa tích hợp Hi-Fi', 'Kết nối Wi-Fi 6E'],
        img: './images/UT238-5.png',
        icon: MousePointer2,
        url: '/may-tinh-all-in-one/'
      },
      {
        id: 11,
        category: 'Monitor Arm',
        title: 'Inspur Arm',
        desc: 'Giá đỡ màn hình máy tính với khí nén cao cấp, điều chỉnh đa góc và giải phóng không gian bàn làm việc.',
        specs: ['Tải trọng lên đến 9kg', 'Xoay/nghiêng/nâng hạ linh hoạt', 'Kẹp bàn chắc chắn, quản lý cáp gọn gàng'],
        img: './images/M252-10.png',
        icon: Monitor,
        url: '/inspur-arm/'
      },
    ],
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
      title: "Inspur Hardware | PC, Laptop, All-in-One & ARM Solutions",
      desc: "Explore high-end hardware from Inspur: professional monitors, All-in-One PCs, and the Inspur Arm monitor mount.",
      keywords: "Inspur Monitor, Inspur All-in-One, Inspur Arm, Monitor Arm, Inspur Hardware"
    },
    nav: [
      { name: 'About Inspur', url: '/about' },
      { name: 'Products', url: '/san-pham'},
      { name: 'Contact', url: '/contact' }
      
    ],
    btnPartner: 'Request Quote',
    heroTag: 'Global Digital Infrastructure 2025',
    heroTitle: 'MODERN END-POINT DEVICES & COMPUTING',
    heroDesc: 'From professional monitors and All-in-One PCs to the modern Inspur Arm monitor mount, we provide the perfect tools for the digital era.',
    filterAll: 'All Products',
    categories: ['Monitor', 'All-in-One', 'Monitor Arm'],
    products: [
      {
        id: 3,
        category: 'Monitor',
        title: 'Inspur Monitor',
        desc: 'Professional display with high resolution, fast refresh rate and advanced display technology for professional work.',
        specs: ['4K/UHD Resolution', '144Hz Refresh Rate', 'IPS/VA Panel Technology'],
        img: './images/IIP270QT.png',
        icon: Monitor,
        url: '/man-hinh-inspur/'
      },
      {
        id: 4,
        category: 'All-in-One',
        title: 'Inspur All in one',
        desc: 'All-in-one computing solution, space-saving with integrated AI security camera.',
        specs: ['27" Edge-to-edge Display', 'Integrated Hi-Fi Speakers', 'Wi-Fi 6E Connectivity'],
        img: './images/UT238-5.png',
        icon: MousePointer2,
        url: '/may-tinh-all-in-one/'
      },
      {
        id: 11,
        category: 'Monitor Arm',
        title: 'Inspur Arm',
        desc: 'Premium gas-spring monitor arm with multi-angle adjustment, freeing up desk space.',
        specs: ['Load capacity up to 9kg', 'Flexible swivel/tilt/height', 'Sturdy desk clamp, tidy cable management'],
        img: './images/M252-10.png',
        icon: Monitor,
        url: '/inspur-arm/'
      },
    ],
    footerDesc: 'Inspur Vietnam provides world-class servers, storage, and endpoint devices, driving success for Vietnamese enterprises.',
    footerExplore: 'Explore',
    footerSupport: 'Support',
    footerSupportLinks: ['About Us', 'Contact', 'Technical Support'],
    footerContact: 'Contact Information',
    footerAddress: '68 Ky Hoa, Ward Cho Lon, HCMC',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. OPTIMIZING DIGITAL INFRASTRUCTURE.'
  }
};

const ICON_MAP = {
  MousePointer2,
  LaptopIcon,
  Monitor,
  Server,
  Network,
  Cpu,
  Bot,
  Plug
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const { lang, setLang, toggleLang, t, products: serverProducts, loading } = useContent('sanPham', TRANSLATIONS);

  const displayProducts = serverProducts || t.products || [];
  const filteredProducts = activeCategory === 'All' 
    ? displayProducts 
    : displayProducts.filter(p => p.category === activeCategory);

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
    
    updateMeta('description', t.seo.desc);
    updateMeta('keywords', t.seo.keywords);
    
    // Open Graph / Facebook
    const baseUrl = window.location.origin;
    const logoImageUrl = baseUrl + '/images/logo4.jpg';
    const faviconIco = baseUrl + '/favicon.ico';
    const faviconPng = baseUrl + '/favicon.png';
    
    updateMeta('og:title', t.seo.title, 'property');
    updateMeta('og:description', t.seo.desc, 'property');
    updateMeta('og:type', 'website', 'property');
    updateMeta('og:url', window.location.href, 'property');
    updateMeta('og:image', logoImageUrl, 'property');
    updateMeta('og:image:width', '1200', 'property');
    updateMeta('og:image:height', '630', 'property');
    updateMeta('og:image:type', 'image/jpeg', 'property');
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', t.seo.title);
    updateMeta('twitter:description', t.seo.desc);
    updateMeta('twitter:image', logoImageUrl);
    
    // Favicon - Sử dụng favicon.ico cho taskbar
    const setLinkTag = (rel, href, sizes = null, type = null, prepend = false) => {
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
        // Thêm vào đầu head để có độ ưu tiên cao hơn
        if (prepend && document.head.firstChild) {
          document.head.insertBefore(link, document.head.firstChild);
        } else {
          document.head.appendChild(link);
        }
      }
    };
    
    // Xóa tất cả favicon cũ để tránh xung đột
    const removeOldFavicons = () => {
      const oldFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
      oldFavicons.forEach(link => link.remove());
    };
    removeOldFavicons();
    
    // Sử dụng favicon.svg đồng nhất
    setLinkTag('shortcut icon', '/favicon.ico', null, 'image/x-icon', true);
    setLinkTag('icon', '/favicon.ico', null, 'image/x-icon', true);
    
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

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#0056b3] selection:text-white">

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden bg-slate-950 min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-40">
          <SafeImage src="./images/sanpham-hero.jpg" alt="Inspur Products" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-[#0056b3]/20 border border-[#0056b3]/50 text-[#0056b3] text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              {t.heroTag}
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              <HeroTitle text={t.heroTitle} accent={t.heroTitle.includes('&') ? t.heroTitle.slice(t.heroTitle.indexOf('&')).trim() : ''} />
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed font-light mb-8 max-w-xl">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-[90] bg-[#f8fafc]/80 backdrop-blur-md border-b border-slate-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setActiveCategory('All')}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeCategory === 'All' ? 'bg-[#0056b3] text-white shadow-lg shadow-blue-500/30' : 'bg-white text-slate-500 border border-slate-200 hover:border-[#0056b3]'
              }`}
            >
              {t.filterAll}
            </button>
            {t.categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat ? 'bg-[#0056b3] text-white shadow-lg shadow-blue-500/30' : 'bg-white text-slate-500 border border-slate-200 hover:border-[#0056b3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#0056b3]" />
            <input 
              type="text" 
              placeholder="Tìm kiếm thiết bị..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-left">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <SafeImage src={product.img} alt={product.title} className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-[9px] font-black uppercase tracking-widest text-[#0056b3] rounded-lg shadow-sm border border-white">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 text-[#0056b3] rounded-lg group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                      {(() => {
                        let IconComponent = Server;
                        if (typeof product.icon === 'string' && ICON_MAP[product.icon]) {
                          IconComponent = ICON_MAP[product.icon];
                        } else if (
                          typeof product.icon === 'function' || 
                          (typeof product.icon === 'object' && product.icon !== null && product.icon.$$typeof)
                        ) {
                          IconComponent = product.icon;
                        }
                        return <IconComponent className="w-5 h-5" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">{product.title}</h3>
                  </div>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  <div className="space-y-3 mb-8 flex-1">
                    {product.specs && Array.isArray(product.specs) && product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
                        <Check className="w-4 h-4 text-[#0056b3]" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  {product.url ? (
                    <a 
                      href={product.url}
                      className="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#0056b3] transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      Chi tiết sản phẩm <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#0056b3] transition-all flex items-center justify-center gap-2 group/btn">
                      Chi tiết sản phẩm <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;