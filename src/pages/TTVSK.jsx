
import React, { useState, useEffect, useMemo } from 'react';
import { useContent } from '../hooks/useContent';
import {
  Calendar,
  Search,
  ChevronRight,
  Clock,
  TrendingUp,
  Zap,
  Mail,
  MapPin,
  Phone,
  Image as ImageIcon,
  Menu,
  X,
  ExternalLink,
  AlertCircle,
  Globe,
  Languages
} from 'lucide-react';
import { Facebook, Linkedin, Youtube } from '../components/SocialIcons';

// Thành phần Image an toàn
const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`${className} bg-slate-100 relative overflow-hidden`}>
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-slate-200 flex items-center justify-center">
           <ImageIcon className="text-slate-300 w-8 h-8" />
        </div>
      )}
      {error || !src ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 border border-slate-200 bg-slate-50">
          <ImageIcon className="text-slate-300 w-10 h-10" />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">No Image</span>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className={`${className} transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }} 
        />
      )}
    </div>
  );
};

export const TRANSLATIONS = {
  vi: {
    seo: {
      title: 'Tin tức và sự kiện - Inspur',
      desc: 'Tin tức, sự kiện và hoạt động hợp tác mới nhất từ Inspur Việt Nam.',
      keywords: 'tin tuc, su kien, inspur viet nam, hop tac, dss'
    },
    nav: [
      { name: 'Về Inspur', url: '/about' },
      { name: 'Sản phẩm', url: '/san-pham' },
      { name: 'Giải pháp', url: '/giai-phap' },
      { name: 'Liên hệ', url: '/contact' }
    ],
    btnPartner: 'Bắt đầu Hợp tác',
    filterAll: 'Tất cả',
    newsTitle: 'Mới nhất',
    noResults: 'Không có kết quả',
    featuredTag: 'Tin nổi bật',
    readMore: 'Đọc tiếp',
    searchPlaceholder: 'Tìm kiếm bài viết...',
    footerDesc: 'Đối tác hạ tầng CNTT toàn cầu, dẫn đầu kỷ nguyên AI và Cloud Computing tại Việt Nam.',
    footerLinksTitle: 'Liên kết',
    footerContactTitle: 'Liên hệ',
    footerSubscribeTitle: 'Đăng ký',
    footerCopy: '© 2025 INSPUR VIETNAM. ALL RIGHTS RESERVED.'
  },
  en: {
    seo: {
      title: 'News & Events - Inspur',
      desc: 'Latest news, events and collaboration activities from Inspur Vietnam.',
      keywords: 'news, events, inspur vietnam, collaboration, dss'
    },
    nav: [
      { name: 'About Inspur', url: '/about' },
      { name: 'Products', url: '/san-pham' },
      { name: 'Solutions', url: '/giai-phap' },
      { name: 'Contact', url: '/contact' }
    ],
    btnPartner: 'Start Partnering',
    filterAll: 'All',
    newsTitle: 'Latest',
    noResults: 'No results found',
    featuredTag: 'Featured News',
    readMore: 'Read More',
    searchPlaceholder: 'Search articles...',
    footerDesc: 'Global IT infrastructure partner, leading the AI and Cloud Computing era in Vietnam.',
    footerLinksTitle: 'Links',
    footerContactTitle: 'Contact',
    footerSubscribeTitle: 'Subscribe',
    footerCopy: '© 2025 INSPUR VIETNAM. ALL RIGHTS RESERVED.'
  }
};

export const FALLBACK_NEWS = [
  {
    id: 4,
    title: "Tập đoàn INSPUR trở thành thành viên của Hiệp hội máy văn phòng Việt Nam",
    category: "Hợp tác",
    date: "12/01/2026",
    time: "6 phút đọc",
    excerpt: "Công ty TNHH Công nghệ Inspur Việt Nam chính thức trở thành thành viên của Hiệp hội máy văn phòng Việt Nam (VOMA), mở ra cơ hội hợp tác mới trong lĩnh vực công nghệ thông tin và chuyển đổi số tại Việt Nam.",
    image: "voma5.jpg",
    tags: ["VOMA", "Hợp tác", "Thành viên"],
    featured: false,
    url: "https://voma.com.vn/tap-doan-inspur-tro-thanh-thanh-vien-cua-hiep-hoi-may-van-phong-viet-nam.htm"
  },
  {
    id: 6,
    title: "Gala Tất Niên IT-CCTV Tỉnh Đắk Lắk 2025",
    category: "Sự kiện",
    date: "10/01/2026",
    time: "6 phút đọc",
    excerpt: "Sự kiện Gala Tất Niên IT-CCTV Tỉnh Đắk Lắk 2025 quy tụ đông đảo doanh nghiệp, đối tác và cộng đồng trong lĩnh vực IT, CCTV và máy văn phòng, với sự tham gia của many nhà tài trợ hàng đầu.",
    image: "./images/it-cctv-dak-lak-3.jpg",
    tags: ["Sự kiện", "IT-CCTV", "Đắk Lắk", "Gala"],
    featured: false,
    url: "/it-cctv-dak-lak-2025.html"
  },
  {
    id: 5,
    title: "IT-CCTV Gia Lai Year End Party 2025",
    category: "Sự kiện",
    date: "11/01/2026",
    time: "5 phút đọc",
    excerpt: "Sự kiện IT-CCTV Gia Lai Tây Year End Party 2025 tại Pleiku kết nối cộng đồng IT, CCTV và máy văn phòng, giới thiệu các giải pháp công nghệ và hoạt động giao lưu cuối năm.",
    image: "./images/it-cctv-gia-lai-7.jpg",
    tags: ["Sự kiện", "IT-CCTV", "Gia Lai"],
    featured: false,
    url: "/it-cctv-gia-lai-2025.html"
  },
  {
    id: 1,
    title: "Inspur Công Bố Hợp Tác Chiến Lược Với DSS Tại Partner Day 2026",
    category: "Hợp tác",
    date: "08/01/2026",
    time: "8 phút đọc",
    excerpt: "Inspur chính thức ký kết hợp tác chiến lược với DSS tại sự kiện DSS Partner Day 2026, mở ra kỷ nguyên mới trong hệ sinh thái AI và hạ tầng số tại Việt Nam.",
    image: "./images/1.jpg",
    tags: ["DSS", "Hợp tác", "AI Ecosystem"],
    featured: true,
    url: "/inspur-dss-partner-day-2026.html"
  },
  {
    id: 3,
    title: "Gala sự kiện cuối năm ",
    category: "Sự kiện",
    date: "20/12/2025",
    time: "4 phút đọc",
    excerpt: "Giải Pickleball CCTV-IT Lâm Đồng gây qũy từ thiện",
    image: "./images/pickleball.jpg",
    tags: ["Sự kiện", "Từ thiện"],
    featured: false,
    url: "/gala-su-kien-cuoi-nam.html"
  },
  {
    id: 2,
    title: "Hiệp Hội Máy Văn Phòng Việt Nam Thăm Inspur",
    category: "Sự kiện",
    date: "15/10/2025",
    time: "5 phút đọc",
    excerpt: "Đoàn đại biểu VOMA đã có buổi thăm và làm việc chính thức tại trụ sở Inspur Việt Nam.",
    image: "https://voma.com.vn/pic/News/images/z7284724248225_30086841eac6494f83b367cbb9d9ef43.jpg",
    tags: ["VOMA", "Hợp tác"],
    featured: false,
    url: "https://voma.com.vn/hiep-hoi-may-van-phong-viet-nam-tham-tru-so-inspur-viet-nam.htm"
  }
];

const App = () => {
  const [filter, setFilter] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { lang, setLang, toggleLang, t, products: serverNews, loading } = useContent('ttvsk', TRANSLATIONS);
  const newsData = serverNews || FALLBACK_NEWS;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Khóa cuộn khi mở menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const filteredData = newsData.filter(item => {
    const matchesFilter = filter === 'Tất cả' || item.category === filter;
    const matchesSearch = item.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featured = newsData.find(n => n.featured) || newsData[0];
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(newsData.map((n) => n.category).filter(Boolean))
    );
    return ['Tất cả', ...unique];
  }, [newsData]);

  const TextLogo = ({ light = false }) => (
    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '/'}>
      <img
        src="./images/logo4.jpg"
        alt="Inspur Logo"
        className="h-8 w-auto cursor-pointer"
        onClick={() => window.location.href = '/'}
      />
    </div>
  );

  // Cập nhật tiêu đề tab và favicon
  useEffect(() => {
    document.title = t.seo.title || 'Tin tức và sự kiện - Inspur';
    
    // Thiết lập favicon
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [t.seo.title]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Đang tải...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      



      {/* Hero Section */}
      {featured && (
        <section className="pt-28 md:pt-36 pb-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative group rounded-[2rem] overflow-hidden bg-slate-900 aspect-[4/3] md:aspect-[21/8] shadow-2xl border border-slate-200">
              <SafeImage src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-60 transition-transform duration-[3s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-20 w-full md:w-4/5 lg:w-3/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase flex items-center gap-2 tracking-widest"><Zap size={12}/> Tin nổi bật</span>
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{featured.date}</span>
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">{featured.title}</h1>
                <button 
                  onClick={() => featured.url ? window.location.href = featured.url : null}
                  className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest flex items-center gap-3 hover:bg-blue-700 hover:text-white transition-all shadow-xl"
                >
                  Đọc tiếp <ChevronRight size={16}/>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
      <div className={`sticky z-[80] py-4 bg-white/80 backdrop-blur-md border-y border-slate-200 transition-all ${isScrolled ? 'top-[60px] md:top-[72px]' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat ? 'bg-blue-700 text-white shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'}`}>{cat}</button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input type="text" placeholder="Tìm kiếm bài viết..." className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600/10 focus:border-blue-700 outline-none text-xs font-bold transition-all" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex items-center justify-between mb-12">
           <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-4">
            <TrendingUp className="text-blue-700" size={32} /> Mới nhất
           </h2>
           <div className="h-px bg-slate-200 flex-grow ml-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredData.length > 0 ? (
            filteredData.map((news) => (
              <article 
                key={news.id} 
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-blue-700/20 hover:shadow-xl transition-all duration-500 flex flex-col h-full cursor-pointer"
                onClick={() => news.url ? window.location.href = news.url : null}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SafeImage src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur text-slate-900 text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm">{news.category}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5 text-blue-700"><Calendar size={14}/> {news.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14}/> {news.time}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl leading-snug mb-4 group-hover:text-blue-700 transition-colors min-h-[3.5rem]">{news.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8">{news.excerpt}</p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex gap-2">
                      {news.tags?.map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">#{tag}</span>
                      ))}
                    </div>
                    <div 
                      onClick={(e) => e.stopPropagation()}
                      className="text-[10px] font-black text-blue-700 uppercase tracking-widest flex items-center gap-1 hover:text-[#0056b3] transition-colors"
                    >
                      Chi tiết <ChevronRight size={14}/>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <AlertCircle className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-400 font-bold uppercase tracking-widest">Không có kết quả</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;