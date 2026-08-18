import React, { useState, useEffect } from 'react';
import { useContent } from '../hooks/useContent';
import {
  ChevronRight,
  Zap,
  Mail,
  MapPin,
  Phone,
  Image as ImageIcon,
  Target,
  Eye,
  Award,
  Users,
  Building2,
  ShieldCheck,
  Globe,
  Languages,
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

// Sử dụng các ảnh local thay vì ảnh từ unsplash
const SLIDE_IMAGES = [
  {
    url: "./images/about2.jpg",
    alt: "Inspur Technology"
  },
  {
    url: "./images/about3.jpg",
    alt: "Inspur Solutions"
  }
];

export const TRANSLATIONS = {
  vi: {
    seo: {
      title: "Giới thiệu Inspur Việt Nam | Giải pháp Hạ tầng số & Cloud hàng đầu",
      desc: "Inspur Việt Nam là đối tác chiến lược cung cấp máy chủ, lưu trữ, điện toán đám mây và giải pháp chuyển đổi số toàn diện cho doanh nghiệp.",
      keywords: "Inspur Việt Nam, máy chủ Inspur, giải pháp Cloud, hạ tầng số, trung tâm dữ liệu, server Inspur, AI server"
    },
    nav: [
      
      { name: 'Sản phẩm', url: '/san-pham' },
      { name: 'Giải pháp', url: '/giai-phap' },
      { name: 'Tin tức và sự kiện', url: '/tin-tuc-va-su-kien' },
      { name: 'Liên hệ', url: '/contact' }
    ],
    btnPartner: 'Hợp tác',
    heroTag: 'Inspur Group Vietnam',
    heroTitle: 'TIÊN PHONG SÁNG TẠO HẠ TẦNG SỐ TƯƠNG LAI',
    heroDesc: 'Cung cấp sức mạnh tính toán cho kỷ nguyên AI. Inspur là đối tác tin cậy trong việc xây dựng các trung tâm dữ liệu thế hệ mới và giải pháp đám mây toàn diện.',
    stats: [
      { label: 'Năm kinh nghiệm', val: '20+', icon: Award },
      { label: 'Quốc gia hiện diện', val: '120+', icon: Globe },
      { label: 'Đối tác chiến lược', val: '500+', icon: Users },
      { label: 'Giải pháp số', val: '1000+', icon: Zap }
    ],
    visionTitle: 'Tầm nhìn chiến lược',
    visionDesc: 'Dẫn đầu kỷ nguyên số bằng cách cung cấp các hạ tầng tính toán mạnh mẽ nhất, giúp mọi doanh nghiệp trở nên thông minh hơn thông qua dữ liệu và trí tuệ nhân tạo.',
    missionTitle: 'Sứ mệnh cốt lõi',
    missionDesc: 'Chúng tôi nỗ lực chuyển đổi sức mạnh tính toán thành giá trị kinh doanh cho khách hàng, góp phần xây dựng một thế giới kết nối và hiệu quả hơn.',
    coreValues: 'Giá trị cốt lõi',
    values: [
      { title: 'Chất lượng hàng đầu', desc: 'Sản phẩm đạt chuẩn quốc tế, từ máy chủ AI đến hệ thống lưu trữ Enterprise.', icon: ShieldCheck },
      { title: 'Đồng hành cùng khách hàng', desc: 'Luôn lắng nghe và cung cấp giải pháp tùy chỉnh sát thực tế nhất.', icon: Building2 },
      { title: 'Đổi mới sáng tạo', desc: 'Liên tục nghiên cứu các công nghệ mới nhất để ứng dụng vào hạ tầng số.', icon: Zap }
    ],
    ctaTitle: 'Hợp tác cùng Inspur Việt Nam ngay hôm nay!',
    ctaQuote: 'Gửi yêu cầu báo giá',
    ctaCatalog: 'Xem Catalog sản phẩm',
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
      title: "About Inspur Vietnam | Leading Digital Infrastructure & Cloud Solutions",
      desc: "Inspur Vietnam is a strategic partner providing servers, storage, cloud computing, and comprehensive digital transformation solutions for enterprises.",
      keywords: "Inspur Vietnam, Inspur server, Cloud solutions, digital infrastructure, data center, AI server"
    },
    nav: [
      { name: 'Products', url: '/san-pham' },
      { name: 'Solutions', url: '/giai-phap' },
      { name: 'Events', url: '/tin-tuc-va-su-kien' },
      { name: 'Contact', url: '/contact' }
    ],
    btnPartner: 'Partner With Us',
    heroTag: 'Inspur Group Vietnam',
    heroTitle: 'PIONEERING INNOVATION IN FUTURE DIGITAL INFRASTRUCTURE',
    heroDesc: 'Empowering the AI era with superior computing power. Inspur is your trusted partner in building next-generation data centers and comprehensive cloud solutions.',
    stats: [
      { label: 'Years Experience', val: '20+', icon: Award },
      { label: 'Global Presence', val: '120+', icon: Globe },
      { label: 'Strategic Partners', val: '500+', icon: Users },
      { label: 'Digital Solutions', val: '1000+', icon: Zap }
    ],
    visionTitle: 'Strategic Vision',
    visionDesc: 'Leading the digital era by providing the most powerful computing infrastructures, enabling every enterprise to become smarter through data and AI.',
    missionTitle: 'Core Mission',
    missionDesc: 'We strive to transform computing power into business value for our customers, contributing to a more connected and efficient world.',
    coreValues: 'Core Values',
    values: [
      { title: 'Premium Quality', desc: 'International standard products, from AI servers to Enterprise storage systems.', icon: ShieldCheck },
      { title: 'Customer Centric', desc: 'Always listening and providing the most practical customized solutions.', icon: Building2 },
      { title: 'Continuous Innovation', desc: 'Constantly researching the latest technologies for digital infrastructure.', icon: Zap }
    ],
    ctaTitle: 'Partner with Inspur Vietnam Today!',
    ctaQuote: 'Request a Quote',
    ctaCatalog: 'View Product Catalog',
    footerDesc: 'Inspur Vietnam is proud to provide world-class server, storage, and AI solutions, driving success for Vietnamese enterprises.',
    footerExplore: 'Explore',
    footerSupport: 'Support',
    footerSupportLinks: ['About Us', 'Contact', 'Technical Support'],
    footerContact: 'Contact Information',
    footerAddress: '68 Ky Hoa, Ward Cho Lon, HCMC',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. OPTIMIZING DIGITAL INFRASTRUCTURE.'
  }
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { lang, setLang, toggleLang, t, loading } = useContent('about', TRANSLATIONS);
  const navLinkColor = isScrolled ? 'text-slate-900' : 'text-white';

  // Cập nhật SEO động
  useEffect(() => {
    // 1. Cập nhật Title
    document.title = t.seo.title;

    // 2. Cập nhật các thẻ Meta
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

    updateMeta('description', t.seo.desc);
    updateMeta('keywords', t.seo.keywords);
    updateMeta('og:title', t.seo.title, true);
    updateMeta('og:description', t.seo.desc, true);
    updateMeta('og:image', "/wp-content/uploads/2023/logo-inspur.png", true);
    updateMeta('og:url', window.location.href, true);
    updateMeta('twitter:card', 'summary_large_image');

  }, [lang, t.seo]);

  useEffect(() => {
    if (SLIDE_IMAGES.length > 1) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
      }, 4000);
      return () => clearInterval(slideInterval);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TextLogo = ({ light = false }) => (
    <div className="flex items-center group cursor-pointer" onClick={() => window.location.href = '/'}>
     <img
  src="./images/logo4.png"
  alt="Inspur Logo"
  className="h-8 w-auto cursor-pointer"
  onClick={() => window.location.href = '/'}/>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans text-slate-900 selection:bg-[#0056b3] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-2 shadow-sm' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <TextLogo />
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {t.nav.map((item) => (
              <a 
                key={item.name} 
                href={item.url} 
                className={`text-xs md:text-sm font-extrabold uppercase tracking-widest ${navLinkColor} hover:text-[#0056b3] transition-all`}
              >
                {item.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#0056b3] transition-colors bg-white/70 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
            >
              <Languages size={14} className="text-[#0056b3]" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">{lang === 'vi' ? 'EN' : 'VN'}</span>
            </button>

            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-[#0056b3] text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg"
            >
              {t.btnPartner}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-800 bg-white/80 rounded-lg hover:bg-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'
        }`}>
          <div className="flex flex-col p-6 gap-5">
            {t.nav.map((item) => (
              <a 
                key={item.name}
                href={item.url} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-slate-700 font-bold uppercase tracking-widest hover:text-[#0056b3] transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-[#0056b3] text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all mt-2"
            >
              {t.btnPartner}
            </button>
            
            {/* Language Toggle Button */}
            <button 
              onClick={() => { 
                const newLang = lang === 'vi' ? 'en' : 'vi';
                setLang(newLang);
                localStorage.setItem('appLang', newLang);
                setIsMenuOpen(false);
              }} 
              className="flex items-center gap-2 text-[#0056b3] font-black uppercase text-left pt-4 border-t border-slate-100"
            >
              <Languages size={16} />
              <span>{lang === 'vi' ? 'EN' : 'VN'}</span>
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-40">
            <SafeImage 
              src="./images/about1.jpg" 
              alt="Inspur Vietnam" 
              className="w-full h-full object-cover object-center" 
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <span className="inline-block px-4 py-1 bg-[#0056b3] text-white text-[10px] font-bold rounded uppercase tracking-[0.2em] mb-6">
            {t.heroTag}
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8 max-w-4xl uppercase">
            {t.heroTitle.split(' ').map((word, i) => (
              i === 2 ? <span key={i} className="text-[#0056b3] block md:inline">{word} </span> : word + ' '
            ))}
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {t.stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-[#0056b3] transition-all">
              <div className="p-3 bg-slate-50 rounded-2xl text-[#0056b3] mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{stat.val}</div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="relative pl-12">
                <div className="absolute left-0 top-0 text-[#0056b3] opacity-20"><Eye size={64} /></div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t.visionTitle}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{t.visionDesc}</p>
            </div>
            <div className="relative pl-12">
                <div className="absolute left-0 top-0 text-[#0056b3] opacity-20"><Target size={64} /></div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t.missionTitle}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{t.missionDesc}</p>
            </div>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square bg-slate-100">
            {SLIDE_IMAGES.length > 0 ? (
              <>
                {SLIDE_IMAGES.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  >
                    <SafeImage src={slide.url} alt={slide.alt} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ))}
                {SLIDE_IMAGES.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                    {SLIDE_IMAGES.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'w-8 bg-[#0056b3]' : 'w-4 bg-white/50 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-200">
                <span className="text-slate-400 text-sm">No images available</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t.coreValues}</h2>
          <div className="w-20 h-1.5 bg-[#0056b3] mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {t.values.map((val, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-[#0056b3] transition-colors">
                <val.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-4 text-slate-900">{val.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#0056b3] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
              {t.ctaTitle}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-[#0056b3] px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all shadow-xl"
              >
                {t.ctaQuote}
              </button>
              <button className="text-white border border-white/30 px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                {t.ctaCatalog}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white pt-10 pb-6 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10 border-b border-white/5 pb-8">
            <div className="space-y-6">
              <TextLogo light={true} />
              <p className="text-slate-200 text-lg leading-relaxed">
                {t.footerDesc}
              </p>
              <div className="flex gap-4">
                <div className="p-2.5 bg-white/5 rounded-lg text-slate-400 hover:text-[#0056b3] hover:bg-white transition-all cursor-pointer"><Facebook className="w-4 h-4" /></div>
                <div className="p-2.5 bg-white/5 rounded-lg text-slate-400 hover:text-[#0056b3] hover:bg-white transition-all cursor-pointer"><Linkedin className="w-4 h-4" /></div>
                <div className="p-2.5 bg-white/5 rounded-lg text-slate-400 hover:text-[#0056b3] hover:bg-white transition-all cursor-pointer"><Youtube className="w-4 h-4" /></div>
              </div>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold uppercase tracking-widest mb-8 border-l-4 border-[#0056b3] pl-4 text-white">{t.footerExplore}</h4>
              <ul className="space-y-4">
                {t.nav.map(link => (
                  <li key={link.name}>
                    <a href={link.url} className="text-slate-300 hover:text-white text-base transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 text-[#0056b3] group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold uppercase tracking-widest mb-8 border-l-4 border-[#0056b3] pl-4 text-white">{t.footerSupport}</h4>
              <ul className="space-y-4 text-base text-slate-300">
                {t.footerSupportLinks.map((linkText, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition-colors">{linkText}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold uppercase tracking-widest mb-8 border-l-4 border-[#0056b3] pl-4 text-white">{t.footerContact}</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><MapPin className="w-4 h-4 text-[#0056b3]" /></div>
                  <div className="text-base text-slate-200 leading-relaxed">{t.footerAddress}</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Phone className="w-4 h-4 text-[#0056b3]" /></div>
                  <div className="text-base text-slate-200 italic">0377211797</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Mail className="w-4 h-4 text-[#0056b3]" /></div>
                  <div className="text-base text-slate-200">admin@inspur.com.vn</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-slate-300 text-[11px] font-bold uppercase tracking-[0.3em] opacity-80">
              © 2025 INSPUR VIETNAM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;