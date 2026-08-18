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
  Send,
  Clock,
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
      title: "Liên hệ Inspur Việt Nam | Hỗ trợ & Tư vấn Giải pháp",
      desc: "Liên hệ với Inspur Việt Nam để được tư vấn về máy chủ, giải pháp lưu trữ và hạ tầng đám mây. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn.",
      keywords: "Liên hệ Inspur, hỗ trợ Inspur, tư vấn máy chủ, báo giá server, địa chỉ Inspur Việt Nam"
    },
    nav: [
      { name: 'Về Inspur', url: '/about' },
      { name: 'Sản phẩm', url: '/san-pham' },
      { name: 'Giải pháp', url: '/giai-phap' },
      { name: 'Tin tức và sự kiện', url: '/tin-tuc-va-su-kien' }
      
    ],
    btnPartner: 'Hợp tác',
    headerTitle: 'LIÊN HỆ VỚI CHÚNG TÔI',
    infoTitle: 'Thông tin liên hệ',
    formTitle: 'Gửi tin nhắn',
    formDesc: 'Vui lòng điền thông tin bên dưới, chúng tôi sẽ phản hồi trong vòng 24 giờ.',
    fields: {
      name: 'Họ và tên',
      email: 'Email doanh nghiệp',
      phone: 'Số điện thoại',
      subject: 'Chủ đề cần tư vấn',
      message: 'Nội dung tin nhắn',
      btnSubmit: 'Gửi yêu cầu'
    },
    contactInfo: {
      address: '68 Ký Hoà, Phường Chợ Lớn, TP.HCM',
      phone: '0377.211.797',
      email: 'admin@inspur.com.vn',
      hours: 'Thứ 2 - Thứ 7: 09:30 - 17:00'
    },
    footerDesc: 'Inspur Việt Nam tự hào cung cấp các giải pháp máy chủ, lưu trữ và AI tốt nhất thế giới, đồng hành cùng sự thành công của doanh nghiệp Việt.',
    footerExplore: 'Khám phá',
    footerSupport: 'Hỗ trợ',
    footerSupportLinks: ['Về chúng tôi', 'Liên hệ', 'Hỗ trợ kỹ thuật'],
    footerContact: 'Thông tin liên hệ',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. CUNG CẤP GIẢI PHÁP HẠ TẦNG SỐ TỐI ƯU.'
  },
  en: {
    seo: {
      title: "Contact Inspur Vietnam | Support & Solutions Consultation",
      desc: "Contact Inspur Vietnam for consultation on servers, storage solutions, and cloud infrastructure. Our team of experts is always ready to assist you.",
      keywords: "Contact Inspur, Inspur support, server consultation, server quote, Inspur Vietnam address"
    },
    nav: [
      { name: 'About Inspur', url: '/about' },
      { name: 'Products', url: '/san-pham' },
      { name: 'Solutions', url: '/giai-phap' },
      { name: 'Events', url: '/tin-tuc-va-su-kien' },
      
    ],
    btnPartner: 'Partner With Us',
    headerTitle: 'GET IN TOUCH WITH US',
    headerDesc: 'Inspur experts are always ready to listen and answer any questions about digital infrastructure solutions for your business.',
    infoTitle: 'Contact Information',
    formTitle: 'Send a Message',
    formDesc: 'Please fill out the form below, we will respond within 24 hours.',
    fields: {
      name: 'Full Name',
      email: 'Business Email',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      btnSubmit: 'Send Request'
    },
    contactInfo: {
      address: '68 Ky Hoa, Ward Chợ Lớn, HCMC',
      phone: '0377.211.797',
      email: 'admin@inspur.com.vn',
      hours: 'Mon - SatSat: 09:30 - 17:00'
    },
    footerDesc: 'Inspur Vietnam is proud to provide world-class server, storage, and AI solutions, driving success for Vietnamese enterprises.',
    footerExplore: 'Explore',
    footerSupport: 'Support',
    footerSupportLinks: ['About Us', 'Contact', 'Technical Support'],
    footerContact: 'Contact Information',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. OPTIMIZING DIGITAL INFRASTRUCTURE.'
  }
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { lang, setLang, toggleLang, t, loading } = useContent('contact', TRANSLATIONS);

  const toggleMobile = () => setIsMobileOpen((v) => !v);

  useEffect(() => {
    // Cập nhật SEO
    document.title = t.seo.title;
    const updateMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    
    // Basic SEO
    updateMeta('description', t.seo.desc);
    updateMeta('keywords', t.seo.keywords);
    
    // Open Graph / Facebook
    const logoImageUrl = window.location.origin + '/images/logo4.png';
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
    
    // Favicon
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
    
    // Xóa tất cả favicon cũ để tránh xung đột
    const removeOldFavicons = () => {
      const oldFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
      oldFavicons.forEach(link => link.remove());
    };
    removeOldFavicons();

    setLinkTag('shortcut icon', '/favicon.svg', null, 'image/svg+xml');
    setLinkTag('icon', '/favicon.svg', null, 'image/svg+xml');

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, t.seo]);

  const TextLogo = ({ light = false }) => (
    <div className="flex items-center group cursor-pointer" onClick={() => window.location.href = '/'}>
      <img
        src="./images/logo4.png"
        alt="Inspur Logo"
        className="h-8 w-auto cursor-pointer"
        onClick={() => window.location.href = '/'}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#0056b3] selection:text-white">
      {/* Navigation (Giống trang About) */}
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
              <a key={item.name} href={item.url} className={`text-xs md:text-sm font-extrabold uppercase tracking-widest ${isScrolled ? 'text-slate-900' : 'text-white'} hover:text-[#0056b3] transition-all`}>
                {item.name}
              </a>
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
              onClick={() => window.location.href = '#contact-form'}
              className="bg-[#0056b3] text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg"
            >
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
                onClick={() => {
                  setIsMobileOpen(false);
                  window.location.href = '#contact-form';
                }}
                className="bg-[#0056b3] text-white px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg"
              >
                {t.btnPartner}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Background */}
      <div className="relative h-[400px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
           <SafeImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" alt="Building" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f8fafc]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">{t.headerTitle}</h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-base">{t.headerDesc}</p>
        </div>
      </div>

      {/* Contact Content */}
      <main className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Info Card */}
          <div className="bg-[#0056b3] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 relative z-10">{t.infoTitle}</h2>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Showroom</p>
                  <p className="text-sm font-medium leading-relaxed">{t.contactInfo.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Hotline</p>
                  <p className="text-sm font-medium">{t.contactInfo.phone}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Email</p>
                  <p className="text-sm font-medium">{t.contactInfo.email}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Giờ làm việc</p>
                  <p className="text-sm font-medium">{t.contactInfo.hours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-white/20 flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61584914324843&sk=followers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-[#0056b3] transition-all cursor-pointer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-[#0056b3] transition-all cursor-pointer"><Linkedin className="w-5 h-5" /></div>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white hover:text-[#0056b3] transition-all cursor-pointer"><Youtube className="w-5 h-5" /></div>
            </div>
          </div>

          {/* Form Card */}
          <div id="contact-form" className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2">{t.formTitle}</h2>
              <p className="text-slate-500 text-sm">{t.formDesc}</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name') || e.target.querySelector('[name="name"]')?.value || '';
              const email = formData.get('email') || e.target.querySelector('[name="email"]')?.value || '';
              const phone = formData.get('phone') || e.target.querySelector('[name="phone"]')?.value || '';
              const subject = formData.get('subject') || e.target.querySelector('[name="subject"]')?.value || '';
              const message = formData.get('message') || e.target.querySelector('[name="message"]')?.value || '';
              
              const mailSubject = encodeURIComponent(`[Liên hệ từ Website] ${subject}`);
              const mailBody = encodeURIComponent(
                `Xin chào Inspur Vietnam,\n\n` +
                `Tôi nhận được tin nhắn từ form liên hệ trên website:\n\n` +
                `Họ và tên: ${name}\n` +
                `Email: ${email}\n` +
                `Số điện thoại: ${phone}\n` +
                `Chủ đề: ${subject}\n\n` +
                `Nội dung tin nhắn:\n${message}\n\n` +
                `---\n` +
                `Email này được gửi tự động từ form liên hệ trên website Inspur Vietnam.`
              );
              
              window.location.href = `mailto:admin@inspur.com.vn?subject=${mailSubject}&body=${mailBody}`;
            }}>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">{t.fields.name}</label>
                <input type="text" name="name" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0056b3] focus:ring-4 focus:ring-[#0056b3]/10 outline-none transition-all text-sm font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">{t.fields.email}</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0056b3] focus:ring-4 focus:ring-[#0056b3]/10 outline-none transition-all text-sm font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">{t.fields.phone}</label>
                <input type="tel" name="phone" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0056b3] focus:ring-4 focus:ring-[#0056b3]/10 outline-none transition-all text-sm font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">{t.fields.subject}</label>
                <select name="subject" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0056b3] focus:ring-4 focus:ring-[#0056b3]/10 outline-none transition-all text-sm font-medium text-slate-600">
                  <option value="Tư vấn giải pháp Server">Tư vấn giải pháp Server</option>
                  <option value="Hợp tác kinh doanh">Hợp tác kinh doanh</option>
                  <option value="Hỗ trợ kỹ thuật">Hỗ trợ kỹ thuật</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">{t.fields.message}</label>
                <textarea name="message" rows="4" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#0056b3] focus:ring-4 focus:ring-[#0056b3]/10 outline-none transition-all text-sm font-medium"></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button type="submit" className="bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl flex items-center gap-2 group">
                  {t.fields.btnSubmit} <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200 h-[400px] relative bg-slate-100">
          <iframe
            title="Google Maps - Inspur Vietnam"
            src="https://www.google.com/maps?q=68%20K%C3%BD%20Ho%C3%A0,%20Ph%C6%B0%E1%BB%9Dng%20Ch%E1%BB%A3%20L%E1%BB%9Bn,%20Qu%E1%BA%ADn%205,%20TP.HCM&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Fallback text overlay for cases when iframe fails to load */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center flex-col text-slate-400 bg-slate-900/5 backdrop-blur-[1px]">
            <MapPin className="w-12 h-12 mb-4 text-[#0056b3]" />
            <p className="font-bold text-slate-700 text-sm">{t.contactInfo.address}</p>
            <p className="text-xs text-slate-500">Xem bản đồ trực tiếp trên Google Maps</p>
          </div>
        </div>
      </main>

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
                  <div className="text-sm text-slate-400 leading-relaxed">{t.contactInfo.address}</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Phone className="w-4 h-4 text-[#0056b3]" /></div>
                  <div className="text-sm text-slate-400 italic">{t.contactInfo.phone}</div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Mail className="w-4 h-4 text-[#0056b3]" /></div>
                  <div className="text-sm text-slate-400">{t.contactInfo.email}</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em] opacity-60">
              {t.footerCopy}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;