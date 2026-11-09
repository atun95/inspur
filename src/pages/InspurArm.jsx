import React, { useState, useEffect } from 'react';
import { useContent } from '../hooks/useContent';
import {
  Image as ImageIcon,
  Check,
  Monitor,
  RotateCw,
  Weight,
  Cable,
  ShieldCheck,
  ArrowRight,
  Maximize
} from 'lucide-react';

const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const normalizedSrc = src && src.startsWith('./') ? src.replace(/^\./, '') : src;
  if (error || !normalizedSrc) {
    return (
      <div className={`${className} bg-slate-200 flex flex-col items-center justify-center gap-2 border border-slate-300`}>
        <ImageIcon className="text-slate-400 w-8 h-8" />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Image Not Found</span>
      </div>
    );
  }
  return <img src={normalizedSrc} alt={alt} className={className} onError={() => setError(true)} />;
};

export const TRANSLATIONS = {
  vi: {
    seo: {
      title: 'Inspur Arm - Giá đỡ màn hình máy tính | Inspur Việt Nam',
      desc: 'Inspur Arm là giá đỡ màn hình máy tính khí nén cao cấp, điều chỉnh đa góc, tải trọng 9kg, giải phóng không gian bàn làm việc.',
      keywords: 'gia do man hinh, monitor arm, inspur arm, gia do man hinh khi nen'
    },
    heroTag: 'Phụ kiện màn hình chuyên nghiệp',
    heroTitle: 'INSPUR ARM',
    heroDesc: 'Giá đỡ màn hình máy tính với khí nén cao cấp, điều chỉnh đa góc và giải phóng không gian bàn làm việc một cách tối ưu.',
    detailTag: 'Chi tiết sản phẩm',
    detailTitle: 'Tay đỡ màn hình khí nén Inspur Arm',
    detailDesc: 'Inspur Arm là giải pháp giá đỡ màn hình hiện đại với cơ cấu khí nén bền bỉ, cho phép nâng hạ, xoay và nghiêng màn hình một cách mượt mà. Thiết kế kẹp bàn chắc chắn giúp giải phóng hoàn toàn không gian làm việc, mang lại góc nhìn thoải mái và tiện nghi hơn cho người dùng.',
    specsTitle: 'Thông số kỹ thuật',
    specs: [
      { label: 'Tải trọng', value: 'Lên đến 9kg' },
      { label: 'VESA', value: '75x75 / 100x100mm' },
      { label: 'Chuyển động', value: 'Nâng hạ, xoay 360°, nghiêng ±85°' },
      { label: 'Khớp nối', value: 'Khí nén (Gas Spring)' },
      { label: 'Lắp đặt', value: 'Kẹp bàn / lỗ khoan' },
      { label: 'Quản lý cáp', value: 'Có tích hợp' }
    ],
    featuresTitle: 'Tính năng nổi bật',
    features: [
      { title: 'Giải phóng không gian', desc: 'Giá đỡ giúp màn hình lơ lửng trên bàn, tối ưu diện tích làm việc.', icon: Maximize },
      { title: 'Điều chỉnh đa góc', desc: 'Nâng hạ, xoay và nghiêng linh hoạt với cơ cấu khí nén mượt mà.', icon: RotateCw },
      { title: 'Tải trọng cao', desc: 'Hỗ trợ màn hình đến 9kg, tương thích đa số màn hình văn phòng.', icon: Weight },
      { title: 'Quản lý cáp gọn', desc: 'Tích hợp kênh đi cáp giúp bàn làm việc sạch sẽ, chuyên nghiệp.', icon: Cable },
      { title: 'An toàn & bền bỉ', desc: 'Khí nén chất lượng cao, kẹp bàn chắc chắn, lắp đặt nhanh chóng.', icon: ShieldCheck },
      { title: 'Tương thích rộng', desc: 'Chuẩn VESA 75/100mm, phù hợp màn hình 17" - 34".', icon: Monitor }
    ],
    ctaTitle: 'Liên hệ báo giá Inspur Arm',
    ctaDesc: 'Liên hệ ngay để được tư vấn và báo giá giá đỡ màn hình Inspur Arm chính hãng.',
    ctaBtn: 'Liên hệ báo giá',
    backBtn: 'Quay lại sản phẩm'
  },
  en: {
    seo: {
      title: 'Inspur Arm - Monitor Mount | Inspur Vietnam',
      desc: 'Inspur Arm is a premium gas-spring monitor arm with multi-angle adjustment, 9kg load capacity, freeing up desk space.',
      keywords: 'monitor arm, inspur arm, gas spring monitor mount, desk mount'
    },
    heroTag: 'Professional Display Accessory',
    heroTitle: 'INSPUR ARM',
    heroDesc: 'A computer monitor arm with premium gas spring, multi-angle adjustment and optimal desk space savings.',
    detailTag: 'Product Details',
    detailTitle: 'Inspur Arm Gas-Spring Monitor Mount',
    detailDesc: 'Inspur Arm is a modern monitor mounting solution with a durable gas spring mechanism, allowing smooth height, rotation and tilt adjustment. The sturdy desk clamp completely frees up workspace, providing a more comfortable and convenient viewing angle.',
    specsTitle: 'Technical Specifications',
    specs: [
      { label: 'Load Capacity', value: 'Up to 9kg' },
      { label: 'VESA', value: '75x75 / 100x100mm' },
      { label: 'Movement', value: 'Height, 360° swivel, ±85° tilt' },
      { label: 'Joint', value: 'Gas Spring' },
      { label: 'Mounting', value: 'Desk clamp / screw-in' },
      { label: 'Cable Management', value: 'Integrated' }
    ],
    featuresTitle: 'Key Features',
    features: [
      { title: 'Space Saving', desc: 'Float your monitor above the desk for maximum workspace.', icon: Maximize },
      { title: 'Multi-angle Adjustment', desc: 'Smooth height, swivel and tilt via gas spring mechanism.', icon: RotateCw },
      { title: 'High Load Capacity', desc: 'Supports monitors up to 9kg, compatible with most office displays.', icon: Weight },
      { title: 'Tidy Cable Management', desc: 'Built-in cable channel keeps your desk clean and professional.', icon: Cable },
      { title: 'Safe & Durable', desc: 'Quality gas spring, sturdy desk clamp, quick installation.', icon: ShieldCheck },
      { title: 'Wide Compatibility', desc: 'VESA 75/100mm standard, fits 17" - 34" monitors.', icon: Monitor }
    ],
    ctaTitle: 'Contact for Inspur Arm Quote',
    ctaDesc: 'Contact us now for consultation and a genuine Inspur Arm monitor mount quote.',
    ctaBtn: 'Request a Quote',
    backBtn: 'Back to Products'
  }
};

const FEATURE_ICONS = { Maximize, RotateCw, Weight, Cable, ShieldCheck, Monitor };

const App = () => {
  const { lang, t, loading } = useContent('inspurArm', TRANSLATIONS);

  useEffect(() => {
    document.title = t.seo.title;
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
    updateMeta('og:image', `${window.location.origin}/images/inspur-arm.png`, true);
  }, [lang, t.seo]);

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

      {/* Product Detail */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 aspect-[4/3] flex items-center justify-center p-10">
            <SafeImage src="./images/inspur-arm.png" alt={t.detailTitle} className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#0056b3]/10 border border-[#0056b3]/30 text-[#0056b3] text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-6">
              {t.detailTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-6">{t.detailTitle}</h2>
            <p className="text-slate-500 leading-relaxed mb-10">{t.detailDesc}</p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="mt-10 bg-[#0056b3] hover:bg-[#004494] text-white px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-2 w-fit group"
            >
              {t.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">{t.featuresTitle}</h2>
            <div className="w-16 h-1.5 bg-[#0056b3] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((f, i) => {
              const Icon = FEATURE_ICONS[f.icon] || Check;
              return (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:border-[#0056b3]/40 transition-all group">
                  <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-[#0056b3] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#0056b3] rounded-[2.5rem] px-8 py-12 md:px-14 md:py-14 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
              {t.ctaTitle}
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-8 max-w-xl mx-auto">{t.ctaDesc}</p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-[#0056b3] px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-slate-900 hover:text-white transition-all shadow-xl inline-flex items-center gap-2 group"
            >
              {t.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
