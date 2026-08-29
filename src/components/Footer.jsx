import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Facebook, Linkedin, Youtube } from './SocialIcons';
import { useContent } from '../hooks/useContent';

const ZaloIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="M8.5 9.5h5.5M8.5 12h4.5M8.5 14.5h5.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 9.5l4.5 3-4.5 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FOOTER_TRANSLATIONS = {
  vi: {
    footerProduct: "Khám Phá",
    footerGroup: "Hỗ trợ",
    footerContact: "Thông tin liên hệ",
    footerDesc: 'Inspur Việt Nam - Đại diện chính thức cung cấp giải pháp công nghệ toàn diện từ tập đoàn Inspur.',
    footerAddress: '68 Ký Hoà, Phường Chợ Lớn , TP.HCM',
    footerCopy: '© 2025 INSPUR VIETNAM.',
    linkSanPham: "Sản phẩm",
    linkGiaiPhap: "Giải pháp",
    linkTinTuc: "Tin tức và sự kiện",
    linkAbout: "Về chúng tôi",
    linkContact: "Liên hệ",
    linkSupport: "Hỗ trợ kỹ thuật",
    btnZalo: "Nhắn tin Zalo"
  },
  en: {
    footerProduct: "Products",
    footerGroup: "Company",
    footerContact: "VN Office",
    footerDesc: 'Inspur Vietnam - Official representative providing comprehensive tech solutions from Inspur Group.',
    footerAddress: '68 Ky Hoa, Ward Cho Lon, HCMC',
    footerCopy: '© 2025 INSPUR VIETNAM GROUP. ALL RIGHTS RESERVED.',
    linkSanPham: "Products",
    linkGiaiPhap: "Solutions",
    linkTinTuc: "News & Events",
    linkAbout: "About us",
    linkContact: "Contact",
    linkSupport: "Tech Support",
    btnZalo: "Message Zalo"
  }
};

const Footer = () => {
  const { t } = useContent('footer', FOOTER_TRANSLATIONS);

  const openZaloChat = () => {
    window.open('https://zalo.me/0377211797', '_blank');
  };

  return (
    <footer className="bg-slate-950 text-white pt-12 pb-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-10">
          <div className="space-y-8 text-center md:text-left">
            <img src="/images/logo4.jpg" alt="Inspur Logo" className="h-10 md:h-12 w-auto object-contain mx-auto md:mx-0" />
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
              <li><a href="/san-pham" className="hover:text-white transition-colors">{t.linkSanPham}</a></li>
              <li><a href="/giai-phap" className="hover:text-white transition-colors">{t.linkGiaiPhap}</a></li>
              <li><a href="/tin-tuc-va-su-kien" className="hover:text-white transition-colors">{t.linkTinTuc}</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h5 className="text-[11px] font-black uppercase tracking-widest text-[#0056b3] mb-8">{t.footerGroup}</h5>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><a href="/about" className="hover:text-white transition-colors">{t.linkAbout}</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">{t.linkContact}</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">{t.linkSupport}</a></li>
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
                {t.btnZalo}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex justify-center items-center">
          <p className="text-slate-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-center">{t.footerCopy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
