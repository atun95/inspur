import React, { useState, useEffect } from 'react';
import { useContent } from '../hooks/useContent';
import {
  ChevronRight,
  Zap,
  Mail,
  MapPin,
  Phone,
  Image as ImageIcon,
  Globe,
  Languages,
  Server,
  Cloud,
  Database,
  Cpu,
  Shield,
  Activity,
  ArrowRight,
  CheckCircle2,
  Menu,
  X
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
      title: "Giải pháp Inspur Việt Nam | Hạ tầng số & Chuyển đổi số",
      desc: "Khám phá các giải pháp công nghệ toàn diện từ Inspur: Máy chủ AI, Điện toán đám mây, Lưu trữ dữ liệu lớn và Chuyển đổi số cho doanh nghiệp.",
      keywords: "Giải pháp Inspur, AI Server, Cloud Computing, Big Data, Smart City, Chuyển đổi số"
    },
    nav: [
      { name: 'Về Inspur', url: '/about' },  
      { name: 'Sản phẩm', url: '/san-pham' },
      { name: 'Tin tức và sự kiện', url: '/tin-tuc-va-su-kien' },
      { name: 'Liên hệ', url: '/contact' }
      
    ],
    btnPartner: 'Hợp tác',
    heroTag: 'Solutions Ecosystem',
    heroTitle: 'GIẢI PHÁP CÔNG NGHỆ TOÀN DIỆN CHO KỶ NGUYÊN SỐ',
    heroDesc: 'Inspur cung cấp hệ sinh thái giải pháp hạ tầng CNTT từ Edge đến Cloud, giúp doanh nghiệp khai phá sức mạnh dữ liệu và tăng tốc đổi mới sáng tạo.',
    solutionsTitle: 'Lĩnh vực trọng tâm',
    solutions: [
      { 
        id: 'ai',
        title: 'Trí Tuệ Nhân Tạo (AI)', 
        desc: 'Nền tảng tính toán AI hiệu năng cao, hỗ trợ đào tạo mô hình lớn và suy luận thông minh.',
        icon: Cpu,
        img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'cloud',
        title: 'Điện Toán Đám Mây', 
        desc: 'Giải pháp Cloud toàn diện, linh hoạt và bảo mật, tối ưu hóa chi phí vận hành doanh nghiệp.',
        icon: Cloud,
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'data',
        title: 'Lưu Trữ Dữ Liệu', 
        desc: 'Hệ thống lưu trữ All-Flash và Hybrid hiệu suất cao, đảm bảo an toàn dữ liệu tuyệt đối.',
        icon: Database,
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'edge',
        title: 'Edge Computing', 
        desc: 'Đưa sức mạnh tính toán đến gần nguồn dữ liệu, giảm độ trễ và tăng tốc độ xử lý thực tế.',
        icon: Activity,
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'security',
        title: 'Bảo Mật Hệ Thống', 
        desc: 'Giải pháp an ninh mạng đa lớp, bảo vệ hạ tầng số trước các mối đe dọa ngày càng phức tạp.',
        icon: Shield,
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'smart',
        title: 'Thành Phố Thông Minh', 
        desc: 'Tích hợp IoT và Big Data để xây dựng hạ tầng đô thị thông minh, hiệu quả và bền vững.',
        icon: Globe,
        img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800'
      }
    ],
    deepDive: {
      title: "Tại sao chọn giải pháp Inspur?",
      features: [
        "Hiệu năng dẫn đầu thế giới trong các bài kiểm tra chuẩn SPEC.",
        "Khả năng mở rộng linh hoạt theo nhu cầu tăng trưởng.",
        "Hỗ trợ kỹ thuật 24/7 từ đội ngũ chuyên gia toàn cầu.",
        "Tối ưu hóa chi phí đầu tư (TCO) cho doanh nghiệp."
      ]
    },
    ctaTitle: 'Sẵn sàng chuyển đổi số?',
    ctaDesc: 'Liên hệ ngay với chuyên gia của chúng tôi để được tư vấn giải pháp phù hợp nhất.',
    ctaButton: 'Nhận tư vấn miễn phí',
    footerDesc: 'Inspur Việt Nam tự hào cung cấp các giải pháp máy chủ, lưu trữ và AI tốt nhất thế giới, đồng hành cùng sự thành công của doanh nghiệp Việt.',
    footerExplore: 'Khám phá',
    footerSupport: 'Hỗ trợ',
    footerSupportLinks: ['Về chúng tôi', 'Liên hệ', 'Hỗ trợ kỹ thuật'],
    footerContact: 'Thông tin liên hệ',
    footerAddress: '68 Ký Hoà, Phường Chợ Lớn, TP.HCM',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. CUNG CẤP GIẢI PHÁP HẠ TẦNG SỐ TỐI ƯU.'
  },
  en: {
    seo: {
      title: "Inspur Vietnam Solutions | Digital Infrastructure & Transformation",
      desc: "Explore comprehensive technology solutions from Inspur: AI Servers, Cloud Computing, Big Data Storage, and Digital Transformation for enterprises.",
      keywords: "Inspur solutions, AI Server, Cloud Computing, Big Data, Smart City, Digital Transformation"
    },
    nav: [
      { name: 'Products', url: '/san-pham' },
      { name: 'Solutions', url: '/giai-phap' },
      { name: 'Contact', url: '/contact' },
      { name: 'About Inspur', url: '/gioi-thieu/' }
    ],
    btnPartner: 'Partner With Us',
    heroTag: 'Solutions Ecosystem',
    heroTitle: 'COMPREHENSIVE TECH SOLUTIONS FOR THE DIGITAL ERA',
    heroDesc: 'Inspur provides IT infrastructure ecosystems from Edge to Cloud, empowering businesses to unlock data potential and accelerate innovation.',
    solutionsTitle: 'Core Areas',
    solutions: [
      { 
        id: 'ai',
        title: 'Artificial Intelligence', 
        desc: 'High-performance AI computing platforms supporting large model training and intelligent inference.',
        icon: Cpu,
        img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'cloud',
        title: 'Cloud Computing', 
        desc: 'Comprehensive, flexible, and secure Cloud solutions, optimizing operational costs for businesses.',
        icon: Cloud,
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'data',
        title: 'Data Storage', 
        desc: 'High-performance All-Flash and Hybrid storage systems, ensuring absolute data security.',
        icon: Database,
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'edge',
        title: 'Edge Computing', 
        desc: 'Bringing computing power closer to data sources, reducing latency and accelerating real-time processing.',
        icon: Activity,
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'security',
        title: 'System Security', 
        desc: 'Multi-layer cybersecurity solutions protecting digital infrastructure against complex threats.',
        icon: Shield,
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
      },
      { 
        id: 'smart',
        title: 'Smart City', 
        desc: 'Integrating IoT and Big Data to build efficient and sustainable smart urban infrastructures.',
        icon: Globe,
        img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800'
      }
    ],
    deepDive: {
      title: "Why Choose Inspur Solutions?",
      features: [
        "World-leading performance in SPEC benchmarks.",
        "Flexible scalability according to growth needs.",
        "24/7 technical support from global experts.",
        "Optimized Total Cost of Ownership (TCO)."
      ]
    },
    ctaTitle: 'Ready for Transformation?',
    ctaDesc: 'Contact our experts today for the most suitable solution consultation.',
    ctaButton: 'Get Free Consultation',
    footerDesc: 'Inspur Vietnam is proud to provide world-class server, storage, and AI solutions, driving success for Vietnamese enterprises.',
    footerExplore: 'Explore',
    footerSupport: 'Support',
    footerSupportLinks: ['About Us', 'Contact', 'Technical Support'],
    footerContact: 'Contact Information',
    footerAddress: '68 Ky Hoa, Ward Cho Lon, HCMC',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. OPTIMIZING DIGITAL INFRASTRUCTURE.'
  }
};

const ICON_MAP = {
  Cpu,
  Cloud,
  Database,
  Activity,
  Shield,
  Globe
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { lang, setLang, toggleLang, t, loading } = useContent('giaiPhap', TRANSLATIONS);

  const toggleMobile = () => setIsMobileOpen((v) => !v);

  useEffect(() => {
    document.title = t.seo.title;
    const updateMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (property) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    
    const setLinkTag = (rel, href, sizes = null) => {
      let el = document.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (sizes) el.setAttribute('sizes', sizes);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Basic SEO
    updateMeta('description', t.seo.desc);
    updateMeta('keywords', t.seo.keywords);

    // Open Graph
    updateMeta('og:title', t.seo.title, true);
    updateMeta('og:description', t.seo.desc, true);
    updateMeta('og:image', `${window.location.origin}/images/logo4.jpg`, true);
    updateMeta('og:image:width', '1200', true);
    updateMeta('og:image:height', '630', true);
    updateMeta('og:image:type', 'image/jpeg', true);
    updateMeta('og:url', window.location.href, true);
    updateMeta('og:type', 'website', true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', t.seo.title);
    updateMeta('twitter:description', t.seo.desc);
    updateMeta('twitter:image', `${window.location.origin}/images/logo4.jpg`);

    // Favicon
    setLinkTag('icon', `${window.location.origin}/images/logo4.jpg`, '16x16');
    setLinkTag('icon', `${window.location.origin}/images/logo4.jpg`, '32x32');
    setLinkTag('icon', `${window.location.origin}/images/logo4.jpg`, '96x96');
    setLinkTag('apple-touch-icon', `${window.location.origin}/images/logo4.jpg`, '180x180');

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, t.seo]);

  const TextLogo = ({ light = false }) => (
    <div className="flex items-center group cursor-pointer" onClick={() => window.location.href = '/'}>
      <img 
        src="./images/logo4.jpg" 
        alt="INSPUR" 
        className="h-10 md:h-12 transition-transform group-hover:scale-105 object-contain"
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

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-xl border border-slate-200 bg-white/70 text-slate-900 shadow-sm"
            onClick={toggleMobile}
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {t.nav.map((item) => (
              <a key={item.name} href={item.url} className={`text-xs md:text-sm font-extrabold uppercase tracking-widest transition-all ${
                isScrolled ? 'text-slate-600 hover:text-[#0056b3]' : 'text-white hover:text-slate-200'
              }`}>
                {item.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#0056b3] transition-colors bg-white/50"
            >
              <Languages size={14} className="text-[#0056b3]" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">{lang === 'vi' ? 'EN' : 'VN'}</span>
            </button>

            <button className="bg-[#0056b3] text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg">
              {t.btnPartner}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden origin-top px-6 transition-all duration-300 ${isMobileOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="flex flex-col gap-3 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 p-4 shadow-lg">
            {t.nav.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-sm font-semibold uppercase tracking-wide text-black hover:text-[#0056b3] transition-all"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center justify-between gap-4 pt-2">
              <button 
                onClick={() => { toggleLang(); setIsMobileOpen(false); }}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 hover:border-[#0056b3] transition-colors bg-white/80 text-slate-900"
              >
                <Languages size={14} className="text-[#0056b3]" />
                <span className="text-[11px] font-bold uppercase tracking-tighter">{lang === 'vi' ? 'EN' : 'VN'}</span>
              </button>

              <button
                className="bg-[#0056b3] text-white px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg"
                onClick={() => setIsMobileOpen(false)}
              >
                {t.btnPartner}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden bg-slate-950 min-h-[500px] flex items-center">
        <div className="absolute inset-0 opacity-40">
            <SafeImage 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000" 
              alt="Technology Solutions Background" 
              className="w-full h-full object-cover" 
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-[#0056b3]/20 border border-[#0056b3]/50 text-[#0056b3] text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              {t.heroTag}
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed font-light mb-8 max-w-xl">
              {t.heroDesc}
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-[#0056b3] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#0056b3] hover:text-white transition-all shadow-xl flex items-center gap-2 w-fit group"
            >
              {t.btnPartner} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t.solutionsTitle}</h2>
            <div className="w-20 h-1.5 bg-[#0056b3] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.solutions.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-[2rem] p-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-48 rounded-[1.5rem] overflow-hidden mb-6">
                  <SafeImage src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-3 bg-white/10 backdrop-blur-md rounded-xl text-white border border-white/20">
                    {(() => {
                      const IconComponent = typeof item.icon === 'string' ? ICON_MAP[item.icon] || Server : item.icon || Server;
                      return <IconComponent className="w-6 h-6" />;
                    })()}
                  </div>
                </div>
                <div className="px-4 pb-6">
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#0056b3] transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0056b3] uppercase tracking-widest hover:gap-3 transition-all">
                    Xem chi tiết <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0056b3]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">{t.deepDive.title}</h2>
            <ul className="space-y-6">
              {t.deepDive.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#0056b3] flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#0056b3] rounded-[2rem] rotate-6 opacity-20"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <SafeImage 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Inspur Dashboard" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-[#0056b3] text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            {t.ctaButton}
          </button>
        </div>
      </section>

      {/* Footer (Giống trang About) */}
      <footer className="bg-[#0a0a0a] text-white pt-20 pb-12 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/5 pb-16">
            <div className="space-y-6">
              <TextLogo light={true} />
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.footerDesc}
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61584914324843" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-lg text-slate-400 hover:text-[#0056b3] hover:bg-white transition-all cursor-pointer"><Facebook className="w-4 h-4" /></a>
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