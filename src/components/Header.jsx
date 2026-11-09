import React, { useState, useEffect } from 'react';
import { ChevronDown, Languages, ArrowRight, X, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useContent } from '../hooks/useContent';

const HEADER_TRANSLATIONS = {
  vi: {
    nav: [
      { name: 'Về Inspur', url: '/about' },
      { name: 'Sản Phẩm', url: '/san-pham' },
      { name: 'Giải pháp', url: '/giai-phap' },
      { name: 'OEM', url: '/oem' },
      { name: 'Liên hệ', url: '/contact' },
    ],
    oemContactBtn: "Liên hệ OEM",
  },
  en: {
    nav: [
      { name: 'About us', url: '/about' },
      { name: 'Products', url: '/san-pham' },
      { name: 'Solutions', url: '/giai-phap' },
      { name: 'OEM', url: '/oem' },
      { name: 'Contact us', url: '/contact' },
    ],
    oemContactBtn: "Contact OEM",
  }
};

const Header = () => {
  const { lang, toggleLang, t } = useContent('header', HEADER_TRANSLATIONS);
  const location = useLocation();
  const LIGHT_BG_ROUTES = ['/man-hinh-inspur', '/may-tinh-all-in-one', '/inspur-arm'];
  const cleanPath = location.pathname.replace(/\/$/, '');
  const forceDarkText = cleanPath === '/tin-tuc-va-su-kien' || LIGHT_BG_ROUTES.includes(cleanPath);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedNav, setExpandedNav] = useState(null);

  const useDarkText = isScrolled || forceDarkText;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[150] transition-opacity duration-500 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-[200] transition-transform duration-500 ease-out lg:hidden shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between border-b border-slate-100">
            <img
              src="/images/logo4.jpg"
              alt="Inspur Logo"
              className="h-8 w-auto"
            />
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
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '/'}>
            <img
              src="/images/logo4.jpg"
              alt="Inspur Logo"
              className="h-8 w-auto cursor-pointer"
            />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {t.nav.map((item) => (
              <div key={item.name} className="relative group">
                <a href={item.url} className={`text-xs md:text-sm font-extrabold uppercase tracking-widest transition-all flex items-center gap-1 ${useDarkText ? 'text-slate-600 hover:text-[#0056b3]' : 'text-white hover:text-slate-200'}`}>
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
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-[10px] font-black uppercase tracking-widest ${useDarkText ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'
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
            className={`lg:hidden p-2 rounded-xl transition-colors ${useDarkText ? 'bg-slate-100 text-slate-600' : 'bg-white/10 text-white backdrop-blur-md'}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
