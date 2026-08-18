import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Download, 
  Upload, 
  Edit, 
  Eye, 
  X, 
  Plus, 
  Trash2,
  Settings,
  FileText,
  Image as ImageIcon,
  Globe
} from 'lucide-react';
import productsData from './products.json';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('hero');
  const [isPreview, setIsPreview] = useState(false);
  const [data, setData] = useState({
    hero: {
      vi: {
        heroTag: 'Giải pháp máy tính tất cả trong một',
        heroTitle: 'INSPUR ALL IN ONE',
        heroDesc: 'Giải pháp máy tính tất cả trong một, tiết kiệm không gian và tích hợp camera AI bảo mật. Màn hình tràn viền 27", loa tích hợp Hi-Fi và kết nối Wi-Fi 6E.'
      },
      en: {
        heroTag: 'All-in-One Computing Solution',
        heroTitle: 'INSPUR ALL IN ONE',
        heroDesc: 'All-in-one computing solution, space-saving with integrated AI security camera. 27" Edge-to-edge display, integrated Hi-Fi speakers and Wi-Fi 6E connectivity.'
      },
      img: './images/sanpham7.jpg'
    },
    seo: {
      vi: {
        title: 'Máy tính All-in-One Inspur | Giải pháp máy tính tất cả trong một',
        desc: 'Khám phá Máy tính All-in-One Inspur - Giải pháp máy tính tất cả trong một hiện đại, tiết kiệm không gian và tích hợp camera AI bảo mật với màn hình tràn viền 27" và loa tích hợp Hi-Fi.',
        keywords: 'Máy tính All-in-One Inspur, All-in-One PC, Máy tính AIO, Inspur All-in-One, Máy tính tích hợp'
      },
      en: {
        title: 'Inspur All-in-One PC | All-in-One Computing Solution',
        desc: 'Discover Inspur All-in-One PC - Modern all-in-one computing solution, space-saving with integrated AI security camera, featuring 27" edge-to-edge display and integrated Hi-Fi speakers.',
        keywords: 'Inspur All-in-One, All-in-One PC, AIO Computer, Inspur AIO, Integrated PC'
      }
    },
    footer: {
      vi: {
        desc: 'Inspur Việt Nam tự hào cung cấp các giải pháp máy chủ, lưu trữ và thiết bị đầu cuối tốt nhất thế giới, đồng hành cùng sự thành công của doanh nghiệp Việt.',
        address: '68 Ký Hoà, Phường Chợ Lớn, TP.HCM',
        phone: '0907865892',
        email: 'admin@inspur.com.vn'
      },
      en: {
        desc: 'Inspur Vietnam provides world-class servers, storage, and endpoint devices, driving success for Vietnamese enterprises.',
        address: '68 Ky Hoa, Ward Cho Lon, HCMC',
        phone: '0907865892',
        email: 'admin@inspur.com.vn'
      }
    },
    products: productsData.products || []
  });

  // Check authentication
  useEffect(() => {
    const adminPassword = localStorage.getItem('inspurAdminPasswordSet');
    
    // If password is set, check authentication
    if (adminPassword) {
      const isAuth = sessionStorage.getItem('inspurAdminAuth') === 'true';
      setIsAuthenticated(isAuth);
    } else {
      // First time - no password set, allow access
      setIsAuthenticated(true);
    }
  }, []);

  // Load data from localStorage on mount
  useEffect(() => {
    if (!isAuthenticated) return;
    
    const savedData = localStorage.getItem('inspurAdminData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error('Error loading saved data:', e);
      }
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    const savedPassword = localStorage.getItem('inspurAdminPassword');
    
    if (!savedPassword) {
      // First time - set password
      if (password.length < 4) {
        alert('Mật khẩu phải có ít nhất 4 ký tự!');
        return;
      }
      localStorage.setItem('inspurAdminPassword', password);
      localStorage.setItem('inspurAdminPasswordSet', 'true');
      sessionStorage.setItem('inspurAdminAuth', 'true');
      setIsAuthenticated(true);
      setPassword('');
      alert('Đã đặt mật khẩu thành công!');
    } else {
      // Check password
      if (password === savedPassword) {
        sessionStorage.setItem('inspurAdminAuth', 'true');
        setIsAuthenticated(true);
        setPassword('');
      } else {
        alert('Mật khẩu không đúng!');
        setPassword('');
      }
    }
  };

  const handleSave = () => {
    localStorage.setItem('inspurAdminData', JSON.stringify(data));
    alert('Đã lưu thành công!');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'inspur-content.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          setData(prev => ({ ...prev, ...imported }));
          localStorage.setItem('inspurAdminData', JSON.stringify({ ...data, ...imported }));
          alert('Đã import thành công!');
        } catch (e) {
          alert('Lỗi: File không hợp lệ!');
        }
      };
      reader.readAsText(file);
    }
  };

  const updateField = (section, lang, field, value) => {
    setData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [lang]: {
          ...prev[section][lang],
          [field]: value
        }
      }
    }));
  };

  const updateProduct = (productId, lang, field, value) => {
    setData(prev => ({
      ...prev,
      products: prev.products.map(p => 
        p.id === productId 
          ? { ...p, [lang]: { ...p[lang], [field]: value } }
          : p
      )
    }));
  };

  const addProduct = () => {
    const newProduct = {
      id: Math.max(...data.products.map(p => p.id), 0) + 1,
      category: "All-in-One",
      vi: {
        title: "Sản phẩm mới",
        desc: "Mô tả sản phẩm",
        technicalSpecs: []
      },
      en: {
        title: "New Product",
        desc: "Product description",
        technicalSpecs: []
      },
      img: "./images/sanpham7.jpg",
      icon: "MousePointer2",
      url: "https://inspur.com.vn/san-pham/may-tinh-all-in-one/"
    };
    setData(prev => ({
      ...prev,
      products: [...prev.products, newProduct]
    }));
  };

  const deleteProduct = (productId) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setData(prev => ({
        ...prev,
        products: prev.products.filter(p => p.id !== productId)
      }));
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <Settings className="w-12 h-12 text-[#0056b3] mx-auto mb-4" />
            <h1 className="text-2xl font-black text-slate-900">Inspur Admin Panel</h1>
            <p className="text-sm text-slate-500 mt-2">
              {localStorage.getItem('inspurAdminPasswordSet') 
                ? 'Nhập mật khẩu để tiếp tục' 
                : 'Đặt mật khẩu cho lần đầu sử dụng'}
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {localStorage.getItem('inspurAdminPasswordSet') ? 'Mật khẩu' : 'Đặt mật khẩu (tối thiểu 4 ký tự)'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                placeholder="Nhập mật khẩu"
                autoFocus
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full px-4 py-3 bg-[#0056b3] text-white rounded-lg hover:bg-[#004494] transition-colors font-semibold"
            >
              {localStorage.getItem('inspurAdminPasswordSet') ? 'Đăng nhập' : 'Đặt mật khẩu'}
            </button>
            <p className="text-xs text-slate-500 text-center">
              💡 Mật khẩu được lưu trong trình duyệt, mỗi trình duyệt có mật khẩu riêng
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Settings className="w-8 h-8 text-[#0056b3]" />
            <div>
              <h1 className="text-2xl font-black text-slate-900">Inspur Admin Panel</h1>
              <p className="text-sm text-slate-500">Quản lý nội dung website</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sessionStorage.removeItem('inspurAdminAuth');
                setIsAuthenticated(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <X className="w-4 h-4" />
              Đăng xuất
            </button>
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Eye className="w-4 h-4" />
              {isPreview ? 'Ẩn Preview' : 'Xem Preview'}
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-[#0056b3] text-white rounded-lg hover:bg-[#004494] transition-colors"
            >
              <Save className="w-4 h-4" />
              Lưu
            </button>
            <label className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
              <Upload className="w-4 h-4" />
              Import
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-80px)]">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab('hero')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'hero' ? 'bg-[#0056b3] text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              Hero Section
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'seo' ? 'bg-[#0056b3] text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Globe className="w-5 h-5" />
              SEO Settings
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'products' ? 'bg-[#0056b3] text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-5 h-5" />
              Sản phẩm ({data.products.length})
            </button>
            <button
              onClick={() => setActiveTab('footer')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'footer' ? 'bg-[#0056b3] text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Settings className="w-5 h-5" />
              Footer
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Hero Section</h2>
              {['vi', 'en'].map(lang => (
                <div key={lang} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase">{lang === 'vi' ? 'Tiếng Việt' : 'English'}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Hero Tag</label>
                      <input
                        type="text"
                        value={data.hero[lang].heroTag}
                        onChange={(e) => updateField('hero', lang, 'heroTag', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Hero Title</label>
                      <input
                        type="text"
                        value={data.hero[lang].heroTitle}
                        onChange={(e) => updateField('hero', lang, 'heroTitle', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Hero Description</label>
                      <textarea
                        value={data.hero[lang].heroDesc}
                        onChange={(e) => updateField('hero', lang, 'heroDesc', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Hero Image URL</label>
                <input
                  type="text"
                  value={data.hero.img}
                  onChange={(e) => setData(prev => ({ ...prev, hero: { ...prev.hero, img: e.target.value } }))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 mb-6">SEO Settings</h2>
              {['vi', 'en'].map(lang => (
                <div key={lang} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase">{lang === 'vi' ? 'Tiếng Việt' : 'English'}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Page Title</label>
                      <input
                        type="text"
                        value={data.seo[lang].title}
                        onChange={(e) => updateField('seo', lang, 'title', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Meta Description</label>
                      <textarea
                        value={data.seo[lang].desc}
                        onChange={(e) => updateField('seo', lang, 'desc', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Keywords</label>
                      <input
                        type="text"
                        value={data.seo[lang].keywords}
                        onChange={(e) => updateField('seo', lang, 'keywords', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                        placeholder="keyword1, keyword2, keyword3"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">Sản phẩm</h2>
                <button
                  onClick={addProduct}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Thêm sản phẩm
                </button>
              </div>
              <div className="space-y-4">
                {data.products.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-slate-900">{product.vi.title}</h3>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {['vi', 'en'].map(lang => (
                        <div key={lang} className="space-y-3">
                          <h4 className="font-semibold text-slate-700 uppercase">{lang === 'vi' ? 'Tiếng Việt' : 'English'}</h4>
                          <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Title</label>
                            <input
                              type="text"
                              value={product[lang].title}
                              onChange={(e) => updateProduct(product.id, lang, 'title', e.target.value)}
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Description</label>
                            <textarea
                              value={product[lang].desc}
                              onChange={(e) => updateProduct(product.id, lang, 'desc', e.target.value)}
                              rows={2}
                              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={product.img}
                        onChange={(e) => setData(prev => ({
                          ...prev,
                          products: prev.products.map(p => p.id === product.id ? { ...p, img: e.target.value } : p)
                        }))}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'footer' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Footer Settings</h2>
              {['vi', 'en'].map(lang => (
                <div key={lang} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase">{lang === 'vi' ? 'Tiếng Việt' : 'English'}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                      <textarea
                        value={data.footer[lang].desc}
                        onChange={(e) => updateField('footer', lang, 'desc', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Address</label>
                      <input
                        type="text"
                        value={data.footer[lang].address}
                        onChange={(e) => updateField('footer', lang, 'address', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                      <input
                        type="text"
                        value={data.footer[lang].phone}
                        onChange={(e) => updateField('footer', lang, 'phone', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={data.footer[lang].email}
                        onChange={(e) => updateField('footer', lang, 'email', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;

