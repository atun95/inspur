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
  Check,
  ChevronDown,
  Monitor,
  Laptop as LaptopIcon,
  MousePointer2,
  Zap,
  Globe,
  ShieldCheck,
  Cloud,
  Network,
  Activity,
  Layers,
  Box,
  Microchip,
  ExternalLink
} from 'lucide-react';
import { Facebook, Linkedin, Youtube } from '../components/SocialIcons';

const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`${className} bg-slate-200 flex flex-col items-center justify-center gap-2 border border-slate-300`}>
        <ImageIcon className="text-slate-400 w-8 h-8" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center px-2">Image Updating</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
};

// Icon Zalo SVG - Logo Zalo (chữ Z màu trắng trong vòng tròn xanh)
const ZaloIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="currentColor"/>
    <path d="M8.5 9.5h5.5M8.5 12h4.5M8.5 14.5h5.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 9.5l4.5 3-4.5 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icon Messenger SVG - Logo Messenger (bong bóng chat với tia chớp)
const MessengerIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 4.925 0 11c0 2.153.74 4.137 1.97 5.709L0 24l7.733-2.074c1.051.29 2.162.449 3.267.449 6.627 0 12-4.925 12-11S18.627 0 12 0z"/>
    <path d="M7 9l5 5 7-9H9l-2 4z" fill="white"/>
  </svg>
);

export const TRANSLATIONS = {
  vi: {
    seo: {
      title: "Inspur Vietnam | Tập đoàn Công nghệ Hạ tầng Số Toàn cầu",
      desc: "Giải pháp Server, AI, Cloud và Thiết bị thông minh hàng đầu thế giới.",
      keywords: "Inspur Vietnam, máy chủ Inspur, giải pháp Cloud, hạ tầng số, trung tâm dữ liệu, server Inspur, AI server, thiết bị thông minh",
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
    oemContactBtn: "Liên hệ OEM",
    heroTag: "Nhà cung cấp Server Top 2 Toàn cầu",
    heroTitle: "HỆ SINH THÁI",
    heroSubtitle: "TÍNH TOÁN TOÀN DIỆN",
    heroDesc: "Inspur dẫn dắt kỷ nguyên AI thông qua sức mạnh tính toán vượt trội, cung cấp hạ tầng vững chắc cho chuyển đổi số toàn cầu.",
    heroBtnPrimary: "Khám phá năng lực",
    heroBtnSecondary: "Tìm hiểu tập đoàn",
    
    sectorsTitle: "Lĩnh Vực Hoạt Động Cốt Lõi",
    sectorsTag: "Hệ sinh thái cốt lõi",
    sectors: [
      {
        icon: Server,
        title: "Hạ tầng AI & Server",
        desc: "Dẫn đầu thế giới về máy chủ AI, tối ưu hóa cho deep learning và dữ liệu lớn.",
        features: ["AI Servers", "Cloud Servers", "Edge Computing"]
      },
      {
        icon: Cloud,
        title: "Cloud & Big Data",
        desc: "Giải pháp quản trị dữ liệu thông minh và nền tảng đám mây an toàn cho doanh nghiệp.",
        features: ["Inspur Cloud", "Phân tích dữ liệu", "Hệ thống lưu trữ"]
      },
      {
        icon: Monitor,
        title: "Thiết bị thông minh",
        desc: "Thiết bị thông minh tương tác, điều khiển từ xa và hoạt động tự động theo điều kiện môi trường, lịch trình hoặc theo lệnh của người dùng.",
        features: ["Smart TV", "Camera an ninh thông minh", "Hệ thống AIO"]
      },
      {
        icon: Box,
        title: "OEM & Gia Công",
        desc: "Dịch vụ gia công và sản xuất theo yêu cầu (OEM) với công nghệ tiên tiến, đảm bảo chất lượng và hiệu quả cao cho đối tác.",
        features: ["Gia công thiết bị", "Sản xuất theo đơn hàng", "Hỗ trợ kỹ thuật OEM"]
      }
    ],

    globalTitle: "Mạng Lưới Toàn Cầu, Sức Mạnh Công Nghệ",
    globalDesc: "Inspur vận hành 8 trung tâm R&D và 6 cơ sở sản xuất thông minh trên toàn thế giới, cam kết mang lại sự ổn định cho mọi hệ thống hạ tầng.",
    stats: [
      { val: "30+", label: "Năm Kinh Nghiệm" },
      { val: "#1", label: "AI Server tại Trung Quốc" }
    ],

    portfolioTitle: "Sản Phẩm Tiêu Biểu",
    portfolioTag: "Danh mục doanh nghiệp",
    products: [
      {
        id: 1,
        category: 'Thiết bị hiển thị',
        title: 'Màn hình Inspur',
        desc: 'Màn hình Inspur mang đến chất lượng hiển thị sắc nét, hiệu năng ổn định.',
        specs: ['Độ phân giải: 1920 × 1080 (Full HD)', 'Công nghệ DCR (Dynamic Contrast Ratio), lọc ánh sáng xanh', 'Tấm nền: IPS (BOE)'],
        img: './images/IIP270AF.png',
        link: '/san-phamman-hinh-inspur/'
      },
      {
        id: 2,
        category: 'Máy tính All-in-one',
        title: 'Máy tính All-in-one Inspur',
        desc: 'Giải pháp máy tính All-in-one hiện đại, tích hợp màn hình và CPU trong một thiết bị gọn nhẹ.',
        specs: ['Thiết kế All-in-one tiện lợi', 'Hiệu năng mạnh mẽ, tiết kiệm không gian', 'Phù hợp văn phòng và gia đình'],
        img: './images/UT238.png',
        link: '/san-phammay-tinh-all-in-one/'
      },
      {
        id: 3,
        category: 'Máy chủ hiệu năng cao',
        title: 'Inspur Server',
        desc: 'Hệ thống máy chủ hiệu năng cao, đáp ứng nhu cầu doanh nghiệp và trung tâm dữ liệu.',
        specs: ['Hiệu năng xử lý mạnh mẽ', 'Độ tin cậy cao, ổn định', 'Hỗ trợ nhiều cấu hình linh hoạt'],
        img: './images/NF5266M5.png'
      },
      {
        id: 4,
        category: 'Trung tâm dữ liệu',
        title: 'Data Center',
        desc: 'Giải pháp trung tâm dữ liệu toàn diện, đảm bảo an toàn và hiệu quả cho doanh nghiệp.',
        specs: ['Hạ tầng mạnh mẽ, mở rộng dễ dàng', 'Bảo mật cao, độ tin cậy 99.99%', 'Hỗ trợ cloud và hybrid'],
        img: './images/datacenter.jpeg'
      }
    ],

    industryTitle: "Giải Pháp Cho Mọi Ngành Nghề",
    industries: ['Y tế Số', 'Tài chính', 'Viễn thông', 'Sản xuất', 'Chính phủ', 'Giáo dục'],

    footerProduct: "Khám Phá",
    footerGroup: "Hỗ trợ",
    footerContact: "Thông tin liên hệ",
    footerQuote: "Yêu cầu báo giá",
    footerDesc: 'Inspur Việt Nam - Đại diện chính thức cung cấp giải pháp công nghệ toàn diện từ tập đoàn Inspur.',
    footerAddress: '68 Ký Hoà, Phường Chợ Lớn , TP.HCM',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP.'
  },
  en: {
    seo: {
      title: "Inspur Vietnam | Global Digital Infrastructure Powerhouse",
      desc: "World-leading AI, Server, Cloud, and Terminal solutions.",
      keywords: "Inspur Vietnam, Inspur server, Cloud solutions, digital infrastructure, data center, AI server, smart devices",
    },
    nav: [
      { name: 'About us', url: '/gioi-thieu/'},
      { name: 'Products', url: '/san-pham' },
      { name: 'Solutions', url: '/giai-phap' },
      { name: 'OEM', url: '/oem' },
      { name: 'Events', url: '/tin-tuc-va-su-kien' },
      { name: 'Contact us', url: '/contact' },
    ],
    contactBtn: "Contact Now",
    oemContactBtn: "Contact OEM",
    heroTag: "Global Top 2 Server Provider",
    heroTitle: "COMPUTING",
    heroSubtitle: "ECOSYSTEM",
    heroDesc: "Inspur leads the AI era through superior computing power, providing a solid infrastructure for global digital transformation.",
    heroBtnPrimary: "Explore Capacity",
    heroBtnSecondary: "About Group",

    sectorsTitle: "Core Business Sectors",
    sectorsTag: "Core Ecosystem",
    sectors: [
      {
        icon: Server,
        title: "AI & Server Infrastructure",
        desc: "Global leader in AI servers, optimized for deep learning and big data.",
        features: ["AI Servers", "Cloud Servers", "Edge Computing"]
      },
      {
        icon: Cloud,
        title: "Cloud & Big Data",
        desc: "Smart data management solutions and secure cloud platforms for enterprises.",
        features: ["Inspur Cloud", "Data Analytics", "Storage Systems"]
      },
      {
        icon: Monitor,
        title: "Smart Terminals",
        desc: "High-performance PC, Laptop, and Workstation systems for professionals.",
        features: ["Yingxin Books", "PC Pro", "AIO Systems"]
      },
      {
        icon: Box,
        title: "OEM & Manufacturing",
        desc: "Custom manufacturing and OEM services with advanced technology, ensuring quality and efficiency for partners.",
        features: ["Custom Manufacturing", "OEM Production", "Technical OEM Support"]
      }
    ],

    globalTitle: "Global Network, Technological Power",
    globalDesc: "Inspur operates 8 R&D centers and 6 smart manufacturing facilities worldwide, ensuring stability for all infrastructure systems.",
    stats: [
      { val: "30+", label: "Years Experience" },
      { val: "#1", label: "AI Server in China" }
    ],

    portfolioTitle: "Featured Products",
    portfolioTag: "Enterprise Portfolio",
    products: [
      {
        id: 1,
        category: 'Display Devices',
        title: 'Inspur Monitor',
        desc: 'Inspur monitors deliver sharp display quality and stable performance.',
        specs: ['Resolution: 1920 × 1080 (Full HD)', 'DCR technology, blue light filter', 'IPS Panel (BOE)'],
        img: './images/IIP270AF.png',
        link: '/man-hinh-inspur'
      },
      {
        id: 2,
        category: 'All-in-one PC',
        title: 'Inspur All-in-one PC',
        desc: 'Modern All-in-one PC solution, integrating display and CPU in a compact device.',
        specs: ['Convenient All-in-one design', 'Powerful performance, space-saving', 'Suitable for office and home'],
        img: './images/UT238.png',
        link: '/may-tinh-all-in-one'
      },
      {
        id: 3,
        category: 'High Performance Server',
        title: 'Inspur Server',
        desc: 'High-performance server systems, meeting enterprise and data center needs.',
        specs: ['Powerful processing performance', 'High reliability and stability', 'Support for flexible configurations'],
        img: './images/NF5266M5.png'
      },
      {
        id: 4,
        category: 'Data Center',
        title: 'Data Center',
        desc: 'Comprehensive data center solutions, ensuring security and efficiency for enterprises.',
        specs: ['Robust infrastructure, easy scalability', 'High security, 99.99% reliability', 'Cloud and hybrid support'],
        img: './images/datacenter.jpeg'
      }
    ],

    industryTitle: "Solutions for Every Industry",
    industries: ['Digital Health', 'Finance', 'Telecom', 'Manufacturing', 'Government', 'Education'],

    footerProduct: "Products",
    footerGroup: "Company",
    footerContact: "VN Office",
    footerQuote: "Request a Quote",
    footerDesc: 'Inspur Vietnam - Official representative providing comprehensive tech solutions from Inspur Group.',
    footerAddress: '68 Ky Hoa, Ward Cho Lon, HCMC',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. ALL RIGHTS RESERVED.'
  }
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedNav, setExpandedNav] = useState(null);

  const { lang, setLang, toggleLang, t, loading } = useContent('trangChu', TRANSLATIONS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Cập nhật tiêu đề trang ngay lập tức
    document.title = t.seo.title;
    
    // Hàm cập nhật hoặc tạo mới thẻ meta
    const setMetaTag = (name, content, attr = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Hàm cập nhật hoặc tạo mới thẻ link (cho favicon)
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

    // Cập nhật các thẻ SEO quan trọng
    setMetaTag('description', t.seo.desc);
    if (t.seo.keywords) {
      setMetaTag('keywords', t.seo.keywords);
    }
    
    // Robots meta tag
    setMetaTag('robots', 'index, follow');
    
    // Author meta tag
    setMetaTag('author', 'Inspur Vietnam');
    
    // Tách riêng favicon và social sharing image
    // Favicon nên dùng ICO hoặc PNG với kích thước chuẩn để tránh bể hình trên taskbar
    const baseUrl = window.location.origin;
    
    // Ưu tiên sử dụng favicon.ico (tốt nhất) hoặc favicon.png
    // Logo JPG chỉ dùng cho social sharing, không dùng cho favicon
    const faviconIco = baseUrl + '/favicon.ico';
    const faviconPng = baseUrl + '/favicon.png';
    const logoImageUrl = baseUrl + '/images/logo4.jpg';
    
    // Xóa tất cả favicon cũ để tránh xung đột
    const removeOldFavicons = () => {
      const oldFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
      oldFavicons.forEach(link => link.remove());
    };
    removeOldFavicons();
    
    // Sử dụng favicon.svg đồng nhất
    setLinkTag('shortcut icon', '/favicon.svg', null, 'image/svg+xml', true);
    setLinkTag('icon', '/favicon.svg', null, 'image/svg+xml', true);
    
    // Thêm manifest icon cho PWA (nếu cần)
    const setManifestIcon = () => {
      let manifest = document.querySelector('link[rel="manifest"]');
      if (manifest) {
        // Manifest sẽ được xử lý riêng nếu có file manifest.json
      }
    };
    
    // Canonical URL
    const setCanonical = (url) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (element) {
        element.setAttribute('href', url);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        document.head.appendChild(link);
      }
    };
    setCanonical(window.location.href);
    
    // Open Graph tags - Tối ưu cho Zalo, Messenger, Facebook
    // Lưu ý: Ảnh OG image phải có kích thước thực tế là 1200x630 pixels (tỷ lệ 1.91:1)
    // Nếu ảnh không đúng kích thước, Zalo/Messenger sẽ tự động crop và có thể bị cắt mất hình
    setMetaTag('og:title', t.seo.title, 'property');
    setMetaTag('og:description', t.seo.desc, 'property');
    setMetaTag('og:type', 'website', 'property');
    setMetaTag('og:url', window.location.href, 'property');
    setMetaTag('og:site_name', 'Inspur Vietnam', 'property');
    setMetaTag('og:locale', lang === 'vi' ? 'vi_VN' : 'en_US', 'property');
    
    // OG Image - URL phải là absolute URL (đã có baseUrl)
    // Kích thước chuẩn: 1200x630 (1.91:1) - TỐI THIỂU cho Zalo/Messenger
    setMetaTag('og:image', logoImageUrl, 'property');
    // Thêm secure URL cho HTTPS (Zalo/Messenger yêu cầu)
    setMetaTag('og:image:secure_url', logoImageUrl, 'property');
    // Kích thước phải khớp với ảnh thực tế - Nếu ảnh không đúng 1200x630 thì sẽ bị crop
    setMetaTag('og:image:width', '1200', 'property');
    setMetaTag('og:image:height', '630', 'property');
    setMetaTag('og:image:type', 'image/jpeg', 'property');
    setMetaTag('og:image:alt', 'Inspur Vietnam Logo', 'property');
    
    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', t.seo.title);
    setMetaTag('twitter:description', t.seo.desc);
    setMetaTag('twitter:image', logoImageUrl);
    setMetaTag('twitter:image:alt', 'Inspur Vietnam Logo');

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, t.seo.title, t.seo.desc, t.seo.keywords, isMenuOpen]);



  // ============================================
  // HÀM XỬ LÝ ZALO VÀ FACEBOOK MESSENGER
  // ============================================
  
  // Hàm mở Zalo chat
  const openZaloChat = () => {
    window.open('https://zalo.me/0377211797', '_blank');
  };

  // Hàm mở Zalo với tin nhắn mặc định
  const openZaloWithMessage = (message = '') => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://zalo.me/0377211797?message=${encodedMessage}`, '_blank');
  };

  // Hàm mở Facebook Messenger
  // Dùng link Facebook Page trực tiếp - chắc chắn hoạt động, người dùng click nút "Gửi tin nhắn"
  // Trên mobile sẽ tự động mở Messenger app khi click nút trên Page
  const openFacebookMessenger = () => {
    // Link Facebook Page trực tiếp - luôn hoạt động, trên Page có nút Messenger
    // Đây là cách đáng tin cậy nhất và không yêu cầu đăng nhập
    window.open('https://www.facebook.com/VietNamInspur', '_blank');
  };

  // Hàm mở Messenger với tin nhắn mặc định
  // Với link Facebook Page, không thể thêm tin nhắn mặc định, nhưng người dùng có thể nhắn tin trực tiếp
  const openFacebookMessengerWithMessage = (message = '') => {
    // Mở Facebook Page, người dùng sẽ click nút "Gửi tin nhắn" để nhắn tin
    window.open('https://www.facebook.com/VietNamInspur', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#0056b3] selection:text-white">
      
      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[150] transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Content */}
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
              <div key={idx} className="border-b border-slate-50 last:border-0">
                {item.sub ? (
                  <>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-4 cursor-pointer group text-left"
                      onClick={() => setExpandedNav(expandedNav === idx ? null : idx)}
                    >
                      <span className="font-black text-sm uppercase tracking-widest text-slate-700 group-hover:text-[#0056b3] transition-colors">
                        {item.name}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-300 transition-transform ${expandedNav === idx ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expandedNav === idx && (
                      <div className="pb-4 space-y-3 pl-4 border-l-2 border-slate-100 ml-1">
                        {item.sub.map((subItem, sIdx) => (
                          <a
                            key={sIdx}
                            href={subItem.url || '#'}
                            className="block text-sm font-bold text-slate-500 hover:text-[#0056b3]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name || subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.url}
                    className="flex items-center py-4 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-black text-sm uppercase tracking-widest text-slate-700 group-hover:text-[#0056b3] transition-colors">
                      {item.name}
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="p-8 bg-slate-50 space-y-6">
            <button 
              onClick={toggleLang}
              className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm active:scale-95 transition-all"
            >
              <Languages size={16} className="text-[#0056b3]" />
              {lang === 'vi' ? 'Switch to English' : 'Dùng Tiếng Việt'}
            </button>
            <button 
              onClick={() => {
                window.location.href = '/oem';
                setIsMenuOpen(false);
              }}
              className="w-full py-5 bg-gradient-to-r from-[#0056b3] to-[#0073e6] text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/40 active:scale-95 transition-all border-2 border-white/20 hover:border-white/40 group relative overflow-hidden animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>💼</span>
                {t.oemContactBtn}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
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
              <div key={item.name} className="relative group">
                <a href={item.url} className={`text-xs md:text-sm font-extrabold uppercase tracking-widest transition-all flex items-center gap-1 ${isScrolled ? 'text-slate-600 hover:text-[#0056b3]' : 'text-white hover:text-slate-200'}`}>
                  {item.name}
                  {item.sub && <ChevronDown size={12} className="opacity-50" />}
                </a>
                {item.sub && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-56 space-y-4">
                       {item.sub.map(sub => (
                         <a key={sub} href="#" className="block text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-[#0056b3] transition-colors">{sub}</a>
                       ))}
                    </div>
                  </div>
                )}
              </div>
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
              onClick={() => window.location.href = '/oem'}
              className="relative bg-gradient-to-r from-[#0056b3] to-[#0073e6] text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest hover:from-[#004494] hover:to-[#0056b3] transition-all shadow-2xl shadow-blue-500/40 active:scale-95 hover:scale-105 border-2 border-white/20 hover:border-white/40 group overflow-hidden animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>💼</span>
                {t.oemContactBtn}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </button>
          </div>

          <button 
            className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'bg-slate-100 text-slate-600' : 'bg-white/10 text-white backdrop-blur-md'}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] lg:h-[90vh] flex items-center overflow-hidden bg-slate-950 pt-32 pb-40">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="World Network Vision" 
            className="w-full h-full object-cover opacity-40 animate-slow-zoom"
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
            <div className="flex flex-wrap gap-5">
              <button className="bg-[#0056b3] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all flex items-center gap-3 group shadow-2xl">
                {t.heroBtnPrimary} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.location.href = 'https://inspur.com'}
                className="bg-white/5 border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {t.heroBtnSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="relative py-24 bg-slate-50 z-20 -mt-16 md:-mt-24 rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#0056b3] text-[10px] font-black uppercase tracking-[0.4em] block mb-4">{t.sectorsTag}</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">{t.sectorsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {t.sectors.map((item, i) => (
              <div key={i} className="p-8 md:p-10 bg-white rounded-[2.5rem] md:rounded-[3rem] hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0056b3] text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 md:mb-8 font-medium">{item.desc}</p>
                <div className="space-y-3">
                  {item.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-[11px] font-bold text-slate-700">
                      <div className="w-1 h-1 rounded-full bg-[#0056b3]"></div> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-[#0056b3] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <Network className="w-full h-full scale-150 rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white text-center md:text-left md:max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">{t.globalTitle}</h2>
                <p className="text-blue-100 font-medium">{t.globalDesc}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-16 w-full md:w-auto">
                {t.stats.map((s, idx) => (
                  <div key={idx} className="text-white text-center md:text-left">
                    <div className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">{s.val}</div>
                    <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-70">{s.label}</div>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center md:text-left mb-16 md:mb-20">
            <span className="text-[#0056b3] text-[10px] font-black uppercase tracking-[0.4em] block mb-4">{t.portfolioTag}</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">{t.portfolioTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {t.products.map((product) => {
              // Tất cả sản phẩm đều dùng nền trắng
              return (
                <div 
                  key={product.id} 
                  className="group bg-white border border-slate-200 shadow-lg hover:shadow-2xl rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-500 flex flex-col"
                >
                  <div className="h-56 md:h-64 overflow-hidden relative">
                    <SafeImage src={product.img} alt={product.title} className="w-full h-full object-contain bg-white transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#0056b3] rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight">{product.title}</h3>
                    <p className="text-sm leading-relaxed mb-8 line-clamp-2 text-slate-600">{product.desc}</p>
                    <div className="space-y-3 mb-10 flex-1">
                      {product.specs && Array.isArray(product.specs) && product.specs.map(s => (
                        <div key={s} className="flex items-center gap-3 text-[11px] font-bold text-slate-700">
                          <Check size={14} className="text-[#0056b3]" /> {s}
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => window.location.href = product.link || '/contact'}
                      className="w-full py-4 bg-[#0056b3] hover:bg-[#004494] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      {product.link ? (
                        <>
                          {lang === 'vi' ? 'Xem chi tiết' : 'View Details'}
                          <ExternalLink size={14} />
                        </>
                      ) : (
                        t.footerQuote
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-16 md:mb-20">{t.industryTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
            {[
              { icon: Activity, name: t.industries[0] },
              { icon: Database, name: t.industries[1] },
              { icon: Network, name: t.industries[2] },
              { icon: Microchip, name: t.industries[3] },
              { icon: Globe, name: t.industries[4] },
              { icon: Layers, name: t.industries[5] },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#0056b3] transition-all duration-500 group-hover:rotate-6">
                  <item.icon size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
            <div className="space-y-8 text-center md:text-left">
              <span className="font-black text-4xl tracking-tighter italic uppercase text-white">INSPUR</span>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">{t.footerDesc}</p>
              <div className="flex justify-center md:justify-start gap-4">
                {[Facebook, Linkedin, Youtube].map((Icon, idx) => {
                  const socialLinks = [
                    'https://www.facebook.com/VietNamInspur',
                    '#',
                    '#'
                  ];
                  return (
                    <a 
                      key={idx} 
                      href={socialLinks[idx]} 
                      target={idx === 0 ? "_blank" : "_self"}
                      rel={idx === 0 ? "noopener noreferrer" : ""}
                      className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#0056b3] transition-all cursor-pointer border border-white/5"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
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
                <li><a href="/contact" className="hover:text-white transition-colors">Hỗ trợ kỹ thuật</a></li>
              </ul>
            </div>

            <div className="space-y-6 text-center md:text-left">
              <h5 className="text-[11px] font-black uppercase tracking-widest text-[#0056b3] mb-8">{t.footerContact}</h5>
              <div className="flex items-start gap-4 text-sm text-slate-400 font-medium justify-center md:justify-start">
                <MapPin size={20} className="text-[#0056b3] shrink-0 mt-1" />
                <span>{t.footerAddress}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400 font-bold justify-center md:justify-start">
                <Phone size={20} className="text-[#0056b3] shrink-0" />
                <span>0377 211 797</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400 font-medium justify-center md:justify-start">
                <Mail size={20} className="text-[#0056b3] shrink-0" />
                <span>admin@inspur.com.vn</span>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <button 
                  onClick={openZaloChat}
                  className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-[#0068ff] text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-[#0056cc] transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  <ZaloIcon className="w-5 h-5" />
                  Nhắn tin Zalo
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex justify-center items-center">
            <p className="text-slate-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-center">{t.footerCopy}</p>
          </div>
        </div>
      </footer>



      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite alternate;
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 86, 179, 0.4), 0 0 40px rgba(0, 86, 179, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 115, 230, 0.6), 0 0 60px rgba(0, 115, 230, 0.3);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}} />
    </div>
  );
};

export default App;
