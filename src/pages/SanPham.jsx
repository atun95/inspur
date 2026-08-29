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
      desc: "Khám phá danh mục thiết bị phần cứng cao cấp từ Inspur: Máy tính để bàn, Laptop doanh nghiệp, PC All-in-One và hệ thống ARM hiệu năng cao.",
      keywords: "Inspur PC, Inspur Laptop, All-in-One, ARM Server, Inspur Hardware"
    },
    nav: [
      { name: 'Về Inspur', url: '/about' },
      { name: 'Giải pháp', url: '/giai-phap'},
      { name: 'Tin tức và sự kiện', url: '/tin-tuc-va-su-kien',},
      { name: 'Liên hệ', url: '/contact' },
      
    ],
    btnPartner: 'Liên hệ báo giá',
    heroTag: 'Giải Pháp Hạ Tầng Số Toàn Cầu 2025',
    heroTitle: 'THIẾT BỊ ĐẦU CUỐI & HỆ THỐNG TÍNH TOÁN HIỆN ĐẠI',
    heroDesc: 'Từ những chiếc Laptop mỏng nhẹ đến hệ thống PC hiệu năng cao và máy chủ ARM tối ưu năng lượng, Inspur mang đến công cụ hoàn hảo cho kỷ nguyên số.',
    filterAll: 'Tất cả sản phẩm',
    categories: ['Monitor', 'Laptop', 'All-in-One', 'Server & Network', 'Smart Robots', 'Energy Solutions', 'Interactive Displays', 'Chuột AI'],
    products: [
      {
        id: 1,
        category: 'Chuột AI',
        title: 'Inspur AI Mouse',
        desc: 'Chuột thông minh tích hợp công nghệ AI, hỗ trợ điều khiển bằng cử chỉ và tối ưu hóa năng suất làm việc.',
        specs: ['Công nghệ AI thông minh', 'Điều khiển cử chỉ', 'Kết nối không dây'],
        img: './images/03.jpg',
        icon: MousePointer2,
        url: '/san-phamai-mouse/'
      },
      {
        id: 2,
        category: 'Laptop',
        title: 'Inspur Laptop',
        desc: 'Laptop doanh nghiệp mỏng nhẹ, bảo mật cao với hiệu năng vượt trội cho văn phòng hiện đại.',
        specs: ['Intel Core Ultra', 'Màn hình Full HD', 'Bảo mật vân tay & IR'],
        img: './images/sanpham6.jpg',
        icon: LaptopIcon
      },
      {
        id: 3,
        category: 'Monitor',
        title: 'Inspur Monitor',
        desc: 'Màn hình chuyên nghiệp với độ phân giải cao, tần số quét nhanh và công nghệ hiển thị tiên tiến cho công việc chuyên nghiệp.',
        specs: ['Độ phân giải 4K/UHD', 'Tần số quét 144Hz', 'Công nghệ IPS/VA Panel'],
        img: './images/monitor.jpg',
        icon: Monitor,
        url: '/san-phamman-hinh-inspur/'
      },
      {
        id: 4,
        category: 'All-in-One',
        title: 'Inspur All in one',
        desc: 'Giải pháp máy tính tất cả trong một, tiết kiệm không gian và tích hợp camera AI bảo mật.',
        specs: ['Màn hình tràn viền 27"', 'Loa tích hợp Hi-Fi', 'Kết nối Wi-Fi 6E'],
        img: './images/sanpham7.jpg',
        icon: MousePointer2,
        url: '/san-phammay-tinh-all-in-one/'
      },
      {
        id: 4,
        category: 'Server & Network',
        title: 'Inspur Server Rack Series',
        desc: 'Hệ thống máy chủ rack chuyên nghiệp với thiết kế modular, hỗ trợ nhiều cấu hình linh hoạt cho trung tâm dữ liệu.',
        specs: ['Thiết kế modular linh hoạt', 'Hỗ trợ nhiều cấu hình', 'Quản lý nhiệt độ thông minh'],
        img: './images/sanpham3.jpg',
        icon: Server
      },
      {
        id: 5,
        category: 'Server & Network',
        title: 'Inspur Network Switch Series',
        desc: 'Bộ chuyển mạch mạng enterprise với hiệu năng cao, hỗ trợ PoE và quản lý tập trung.',
        specs: ['Hỗ trợ PoE/PoE+', 'Quản lý tập trung', 'Băng thông cao'],
        img: './images/sanpham4.jpg',
        icon: Network
      },
      {
        id: 6,
        category: 'Server & Network',
        title: 'Inspur AI Server',
        desc: 'Máy chủ AI chuyên dụng với khả năng xử lý deep learning và training mô hình AI quy mô lớn.',
        specs: ['Tối ưu cho AI/ML', 'Hỗ trợ GPU cao cấp', 'Hiệu năng xử lý vượt trội'],
        img: './images/sanpham2.jpg',
        icon: Cpu
      },
      {
        id: 7,
        category: 'Smart Robots',
        title: 'Inspur Autonomous Sweeper',
        desc: 'Robot quét đường tự động với công nghệ AI, hoạt động độc lập và thông minh cho môi trường đô thị.',
        specs: ['Điều khiển tự động', 'Cảm biến AI thông minh', 'Pin lâu dài'],
        img: './images/about2.jpg',
        icon: Bot
      },
      {
        id: 8,
        category: 'Smart Robots',
        title: 'Inspur Service Robot',
        desc: 'Robot dịch vụ thông minh với khả năng tương tác và điều hướng tự động, phù hợp cho nhiều môi trường.',
        specs: ['Tương tác thông minh', 'Điều hướng tự động', 'Giao diện thân thiện'],
        img: './images/about3.jpg',
        icon: Bot
      },
      {
        id: 9,
        category: 'Energy Solutions',
        title: 'Inspur EV Charging Station',
        desc: 'Trạm sạc xe điện thông minh với công nghệ sạc nhanh, quản lý từ xa và tích hợp thanh toán.',
        specs: ['Sạc nhanh công suất cao', 'Quản lý từ xa', 'Tích hợp thanh toán'],
        img: './images/sanpham.jpg',
        icon: Plug
      },
           {
        id: 10,
        category: 'Interactive Displays',
        title: 'Inspur Interactive Panel',
        desc: 'Màn hình tương tác thông minh với công nghệ cảm ứng đa điểm, phù hợp cho giáo dục và văn phòng.',
        specs: ['Cảm ứng đa điểm', 'Độ phân giải cao', 'Tích hợp Android'],
        img: './images/sanpham1.jpg',
        icon: Monitor
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
      desc: "Explore high-end hardware from Inspur: Desktops, Business Laptops, All-in-One PCs, and high-performance ARM systems.",
      keywords: "Inspur PC, Inspur Laptop, All-in-One, ARM Server, Inspur Hardware"
    },
    nav: [
      { name: 'About Inspur', url: '/about' },
      { name: 'Products', url: '/san-pham'},
      { name: 'Events', url: '/tin-tuc-va-su-kien'},
      { name: 'Contact', url: '/contact' }
      
    ],
    btnPartner: 'Request Quote',
    heroTag: 'Global Digital Infrastructure 2025',
    heroTitle: 'MODERN END-POINT DEVICES & COMPUTING',
    heroDesc: 'From lightweight laptops to high-performance desktops and energy-efficient ARM systems, Inspur provides tools for the digital era.',
    filterAll: 'All Products',
    categories: ['Monitor', 'Laptop', 'All-in-One', 'Server & Network', 'Smart Robots', 'Energy Solutions', 'Interactive Displays', 'AI Mouse'],
    products: [
      {
        id: 1,
        category: 'AI Mouse',
        title: 'Inspur AI Mouse',
        desc: 'Smart mouse with integrated AI technology, supporting gesture control and productivity optimization.',
        specs: ['Smart AI Technology', 'Gesture Control', 'Wireless Connectivity'],
        img: './images/03.jpg',
        icon: MousePointer2,
        url: '/san-phamai-mouse/'
      },
      {
        id: 2,
        category: 'Laptop',
        title: 'Inspur Laptop',
        desc: 'Thin & light business laptop with high security and exceptional performance for modern offices.',
        specs: ['Intel Core Ultra', 'Full HD Display', 'Fingerprint & IR Security'],
        img: './images/sanpham6.jpg',
        icon: LaptopIcon
      },
      {
        id: 3,
        category: 'Monitor',
        title: 'Inspur Monitor',
        desc: 'Professional display with high resolution, fast refresh rate and advanced display technology for professional work.',
        specs: ['4K/UHD Resolution', '144Hz Refresh Rate', 'IPS/VA Panel Technology'],
        img: './images/monitor.jpg',
        icon: Monitor,
        url: '/san-phamman-hinh-inspur/'
      },
      {
        id: 4,
        category: 'All-in-One',
        title: 'Inspur All in one',
        desc: 'All-in-one computing solution, space-saving with integrated AI security camera.',
        specs: ['27" Edge-to-edge Display', 'Integrated Hi-Fi Speakers', 'Wi-Fi 6E Connectivity'],
        img: './images/sanpham7.jpg',
        icon: MousePointer2,
        url: '/san-phammay-tinh-all-in-one/'
      },
      {
        id: 4,
        category: 'Server & Network',
        title: 'Inspur Server Rack Series',
        desc: 'Professional rack server systems with modular design, supporting flexible configurations for data centers.',
        specs: ['Flexible modular design', 'Multiple configuration support', 'Intelligent thermal management'],
        img: './images/sanpham4.jpg',
        icon: Server
      },
      {
        id: 5,
        category: 'Server & Network',
        title: 'Inspur Network Switch Series',
        desc: 'Enterprise network switches with high performance, PoE support and centralized management.',
        specs: ['PoE/PoE+ Support', 'Centralized Management', 'High Bandwidth'],
        img: './images/sanpham5.jpg',
        icon: Network
      },
      {
        id: 6,
        category: 'Server & Network',
        title: 'Inspur AI Server',
        desc: 'Dedicated AI server with deep learning processing capabilities and large-scale AI model training.',
        specs: ['Optimized for AI/ML', 'High-end GPU Support', 'Outstanding Processing Power'],
        img: './images/sanpham2.jpg',
        icon: Cpu
      },
      {
        id: 7,
        category: 'Smart Robots',
        title: 'Inspur Autonomous Sweeper',
        desc: 'Autonomous street sweeper robot with AI technology, operating independently and intelligently for urban environments.',
        specs: ['Autonomous Control', 'Smart AI Sensors', 'Long-lasting Battery'],
        img: './images/about2.jpg',
        icon: Bot
      },
      {
        id: 8,
        category: 'Smart Robots',
        title: 'Inspur Service Robot',
        desc: 'Smart service robot with interaction and autonomous navigation capabilities, suitable for various environments.',
        specs: ['Smart Interaction', 'Autonomous Navigation', 'User-friendly Interface'],
        img: './images/about3.jpg',
        icon: Bot
      },
      {
        id: 9,
        category: 'Energy Solutions',
        title: 'Inspur EV Charging Station',
        desc: 'Smart EV charging station with fast charging technology, remote management and payment integration.',
        specs: ['High Power Fast Charging', 'Remote Management', 'Payment Integration'],
        img: './images/sanpham.jpg',
        icon: Plug
      },
           {
        id: 10,
        category: 'Interactive Displays',
        title: 'Inspur Interactive Panel',
        desc: 'Smart interactive display with multi-touch technology, suitable for education and office environments.',
        specs: ['Multi-touch Support', 'High Resolution', 'Android Integration'],
        img: './images/sanpham1.jpg',
        icon: Monitor
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
      <section className="relative pt-48 pb-20 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-45">
          <SafeImage src="./images/sanpham-hero.jpg" alt="Inspur Products" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/88 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#0056b3]/20 border border-[#0056b3]/50 text-[#0056b3] text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(0,86,179,0.3)]">
            {t.heroTag}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6 uppercase">
            {t.heroTitle}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {t.heroDesc}
          </p>
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
                  <SafeImage src={product.img} alt={product.title} className={`w-full h-full ${product.id === 1 ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`} />
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