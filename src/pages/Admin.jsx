import React, { useState, useEffect, useMemo } from 'react';
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
  Globe,
  ChevronRight,
  ChevronDown,
  Search,
  Lock,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

// Import all page translations and fallback lists
import { TRANSLATIONS as trangChu } from './TrangChu';
import { TRANSLATIONS as about } from './About';
import { TRANSLATIONS as sanPham } from './SanPham';
import { TRANSLATIONS as giaiPhap } from './GiaiPhap';
import { TRANSLATIONS as oem } from './OEM';
import { TRANSLATIONS as ttvsk, FALLBACK_NEWS } from './TTVSK';
import { TRANSLATIONS as contact } from './Contact';
import { TRANSLATIONS as manHinhInspur, PRODUCTS_DATA as manHinhProducts } from './ManHinhInspur';
import { TRANSLATIONS as allInOne, PRODUCTS_DATA as allInOneProducts } from './MayTinhAllInOne';

// Unify translation lists
const PAGE_DEFAULTS = {
  trangChu: {
    ...trangChu,
    products: []
  },
  about: {
    ...about,
    products: []
  },
  sanPham: {
    ...sanPham,
    products: sanPham.vi.products || []
  },
  giaiPhap: {
    ...giaiPhap,
    products: giaiPhap.vi.solutions || []
  },
  oem: {
    ...oem,
    products: oem.vi.products || []
  },
  ttvsk: {
    ...ttvsk,
    products: FALLBACK_NEWS || []
  },
  contact: {
    ...contact,
    products: []
  },
  manHinhInspur: {
    ...manHinhInspur,
    products: manHinhProducts?.products || []
  },
  allInOne: {
    ...allInOne,
    products: allInOneProducts?.products || []
  }
};

const PAGES = [
  { key: 'trangChu', label: 'Trang Chủ', desc: 'Trang chủ Inspur Vietnam' },
  { key: 'about', label: 'Giới Thiệu (About)', desc: 'Thông tin, lịch sử và giá trị cốt lõi' },
  { key: 'sanPham', label: 'Sản Phẩm (Mẫu)', desc: 'Tổng hợp danh mục phần cứng chính' },
  { key: 'giaiPhap', label: 'Giải Pháp', desc: 'Các giải pháp công nghệ trọng tâm' },
  { key: 'oem', label: 'OEM & Gia Công', desc: 'Dịch vụ thiết kế và gia công thiết bị' },
  { key: 'ttvsk', label: 'Tin Tức & Sự Kiện', desc: 'Quản lý các bài viết và tin tức mới nhất' },
  { key: 'contact', label: 'Liên Hệ (Contact)', desc: 'Địa chỉ, email, số điện thoại showroom' },
  { key: 'manHinhInspur', label: 'Màn Hình Inspur', desc: 'Mẫu màn hình văn phòng & chuyên dụng' },
  { key: 'allInOne', label: 'Máy Tính All-in-One', desc: 'Các dòng máy tính tất cả trong một' }
];

// Helper to check if string looks like an image path
const isImagePath = (val) => {
  if (typeof val !== 'string') return false;
  const lower = val.toLowerCase();
  return lower.startsWith('./images/') || 
         lower.startsWith('images/') || 
         lower.startsWith('http') || 
         lower.endsWith('.jpg') || 
         lower.endsWith('.jpeg') || 
         lower.endsWith('.png') || 
         lower.endsWith('.webp') || 
         lower.endsWith('.svg') || 
         lower.endsWith('.gif') || 
         lower.endsWith('.ico');
};

// Helper to flatten nested objects (excluding arrays)
const getFlatTextKeys = (obj, prefix = '') => {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (!Array.isArray(obj[key])) {
          Object.assign(result, getFlatTextKeys(obj[key], newKey));
        }
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

// Helper to format key names nicely
const formatPathLabel = (path) => {
  return path
    .split('.')
    .map(word => {
      if (word.toLowerCase() === 'seo') return 'SEO';
      // replace camel case with spaces and capitalize
      return word
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
    })
    .join(' ➔ ');
};

const ImageUploadInput = ({ value, onChange, label, className = '' }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn tệp hình ảnh!');
      return;
    }

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('image', file);
    formData.append('password', pwd);

    const pwd = sessionStorage.getItem('inspurAdminPassword') || '';

    try {
      const response = await fetch('/api/content.php', {
        method: 'POST',
        headers: {
          'X-Admin-Password': pwd
        },
        body: formData
      });

      const result = await response.json();
      if (response.ok && result.success) {
        onChange(result.url);
      } else {
        setError(result.error || 'Lỗi tải ảnh lên');
        alert(result.error || 'Lỗi tải ảnh lên');
      }
    } catch (err) {
      setError('Lỗi kết nối server');
      alert('Lỗi kết nối server khi tải ảnh');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && <label className="text-[11px] font-bold text-slate-700 block capitalize">{label}</label>}
      <div className="flex gap-2">
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium bg-slate-50"
          placeholder="Đường dẫn ảnh hoặc URL..."
        />
        <label className={`px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer select-none shrink-0 ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
          {uploading ? (
            <div className="w-4 h-4 border-2 border-slate-700 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Upload className="w-4 h-4" />
          )}
          Tải ảnh lên
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>
      </div>
      {error && <span className="text-[10px] text-red-500 font-semibold">{error}</span>}
      {value && (
        <div className="border border-slate-200 rounded-2xl p-2 w-28 h-28 bg-white flex items-center justify-center overflow-hidden">
          <img src={value} alt="preview" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
};

// Component for rendering product specs and fields
const RenderItemFields = ({ item, onChange }) => {
  const topLevelKeys = Object.keys(item).filter(k => k !== 'vi' && k !== 'en' && k !== 'id');
  
  return (
    <div className="space-y-4">
      {topLevelKeys.length > 0 && (
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block">Thông tin chung</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topLevelKeys.map(key => {
              const val = item[key];
              const isImg = isImagePath(val);
              
              if (Array.isArray(val)) {
                return (
                  <div key={key} className="col-span-2 space-y-2">
                    <label className="text-[11px] font-bold text-slate-700 capitalize">{key}</label>
                    <textarea
                      value={val.join('\n')}
                      onChange={(e) => onChange(key, e.target.value.split('\n'))}
                      rows={3}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium"
                      placeholder="Mỗi dòng một mục"
                    />
                  </div>
                );
              }
              
              if (isImg) {
                return (
                  <ImageUploadInput
                    key={key}
                    value={val}
                    onChange={(newVal) => onChange(key, newVal)}
                    label={key}
                  />
                );
              }
              
              return (
                <div key={key} className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-700 capitalize">{key}</label>
                  <input
                    type="text"
                    value={val || ''}
                    onChange={(e) => onChange(key, e.target.value)}
                    className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {item.vi && typeof item.vi === 'object' && (
          <div className="bg-blue-50/20 p-6 rounded-2xl border border-blue-100/50 space-y-4">
            <span className="text-[10px] font-black text-blue-700 uppercase tracking-[0.2em] block">Tiếng Việt (VI)</span>
            {Object.keys(item.vi).map(key => {
              const val = item.vi[key];
              if (Array.isArray(val)) {
                if (key === 'technicalSpecs') {
                  return (
                    <div key={key} className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Thông số kỹ thuật chi tiết</label>
                      <div className="space-y-2">
                        {val.map((spec, idx) => (
                          <div key={idx} className="flex gap-2">
                            <input
                              type="text"
                              value={spec.label || ''}
                              placeholder="Tên thông số (Ví dụ: RAM)"
                              onChange={(e) => {
                                const newSpecs = [...val];
                                newSpecs[idx] = { ...newSpecs[idx], label: e.target.value };
                                onChange('vi', { ...item.vi, technicalSpecs: newSpecs });
                              }}
                              className="w-1/2 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                            />
                            <input
                              type="text"
                              value={spec.value || ''}
                              placeholder="Giá trị (Ví dụ: 16GB)"
                              onChange={(e) => {
                                const newSpecs = [...val];
                                newSpecs[idx] = { ...newSpecs[idx], value: e.target.value };
                                onChange('vi', { ...item.vi, technicalSpecs: newSpecs });
                              }}
                              className="w-1/2 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newSpecs = val.filter((_, sidx) => sidx !== idx);
                                onChange('vi', { ...item.vi, technicalSpecs: newSpecs });
                              }}
                              className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => {
                            const newSpecs = [...val, { label: '', value: '' }];
                            onChange('vi', { ...item.vi, technicalSpecs: newSpecs });
                          }}
                          className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors inline-flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" /> Thêm dòng thông số
                        </button>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={key} className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-700 capitalize">{key}</label>
                    <textarea
                      value={val.join('\n')}
                      onChange={(e) => onChange('vi', { ...item.vi, [key]: e.target.value.split('\n') })}
                      rows={3}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium"
                    />
                  </div>
                );
              }
              const isImg = isImagePath(val);
              if (isImg) {
                return (
                  <ImageUploadInput
                    key={key}
                    value={val}
                    onChange={(newVal) => onChange('vi', { ...item.vi, [key]: newVal })}
                    label={key}
                  />
                );
              }
              return (
                <div key={key} className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-700 capitalize">{key}</label>
                  {key === 'desc' || key === 'productDesc' || key === 'excerpt' ? (
                    <textarea
                      value={val || ''}
                      onChange={(e) => onChange('vi', { ...item.vi, [key]: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium"
                    />
                  ) : (
                    <input
                      type="text"
                      value={val || ''}
                      onChange={(e) => onChange('vi', { ...item.vi, [key]: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium"
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
        {item.en && typeof item.en === 'object' && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/50 space-y-4">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] block">English (EN)</span>
            {Object.keys(item.en).map(key => {
              const val = item.en[key];
              if (Array.isArray(val)) {
                if (key === 'technicalSpecs') {
                  return (
                    <div key={key} className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Technical Specifications</label>
                      <div className="space-y-2">
                        {val.map((spec, idx) => (
                          <div key={idx} className="flex gap-2">
                            <input
                              type="text"
                              value={spec.label || ''}
                              placeholder="Spec Label"
                              onChange={(e) => {
                                const newSpecs = [...val];
                                newSpecs[idx] = { ...newSpecs[idx], label: e.target.value };
                                onChange('en', { ...item.en, technicalSpecs: newSpecs });
                              }}
                              className="w-1/2 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                            />
                            <input
                              type="text"
                              value={spec.value || ''}
                              placeholder="Value"
                              onChange={(e) => {
                                const newSpecs = [...val];
                                newSpecs[idx] = { ...newSpecs[idx], value: e.target.value };
                                onChange('en', { ...item.en, technicalSpecs: newSpecs });
                              }}
                              className="w-1/2 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-600 outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newSpecs = val.filter((_, sidx) => sidx !== idx);
                                onChange('en', { ...item.en, technicalSpecs: newSpecs });
                              }}
                              className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => {
                            const newSpecs = [...val, { label: '', value: '' }];
                            onChange('en', { ...item.en, technicalSpecs: newSpecs });
                          }}
                          className="px-4 py-2 bg-slate-200/50 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" /> Add Spec Line
                        </button>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={key} className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-700 capitalize">{key}</label>
                    <textarea
                      value={val.join('\n')}
                      onChange={(e) => onChange('en', { ...item.en, [key]: e.target.value.split('\n') })}
                      rows={3}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium"
                    />
                  </div>
                );
              }
              const isImg = isImagePath(val);
              if (isImg) {
                return (
                  <ImageUploadInput
                    key={key}
                    value={val}
                    onChange={(newVal) => onChange('en', { ...item.en, [key]: newVal })}
                    label={key}
                  />
                );
              }
              return (
                <div key={key} className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-700 capitalize">{key}</label>
                  {key === 'desc' || key === 'productDesc' || key === 'excerpt' ? (
                    <textarea
                      value={val || ''}
                      onChange={(e) => onChange('en', { ...item.en, [key]: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium"
                    />
                  ) : (
                    <input
                      type="text"
                      value={val || ''}
                      onChange={(e) => onChange('en', { ...item.en, [key]: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all font-medium"
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedPageKey, setSelectedPageKey] = useState('trangChu');
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' or 'products'
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // Load content from server and authenticate
  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch('/api/content.php');
        if (response.ok) {
          const serverData = await response.json();
          if (serverData && Object.keys(serverData).length > 0) {
            setData(serverData);
          }
        }
      } catch (e) {
        console.error('Error loading content:', e);
      } finally {
        setLoading(false);
      }

      const savedPwd = sessionStorage.getItem('inspurAdminPassword');
      if (savedPwd) {
        setIsAuthenticated(true);
      }
    };
    init();
  }, []);

  const handleLogin = async () => {
    if (!password) {
      alert('Vui lòng nhập mật khẩu!');
      return;
    }
    
    try {
      const response = await fetch('/api/content.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Password': password
        },
        body: JSON.stringify({ action: 'check_password', password })
      });
      
      if (response.ok) {
        sessionStorage.setItem('inspurAdminPassword', password);
        setIsAuthenticated(true);
        setPassword('');
      } else {
        alert('Mật khẩu không đúng!');
        setPassword('');
      }
    } catch (e) {
      alert('Lỗi kết nối server: ' + e.message);
    }
  };

  const handleSave = async () => {
    const pwd = sessionStorage.getItem('inspurAdminPassword') || '';
    try {
      const response = await fetch('/api/content.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Password': pwd
        },
        body: JSON.stringify({ data, password: pwd })
      });
      
      if (response.ok) {
        alert('Đã lưu cấu hình của tất cả các trang lên server thành công!');
      } else {
        const err = await response.json();
        alert('Không thể lưu: ' + (err.error || 'Lỗi chưa xác định'));
      }
    } catch (e) {
      alert('Lỗi kết nối: ' + e.message);
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'inspur-all-content.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          setData(imported);
          
          // Save immediately
          const pwd = sessionStorage.getItem('inspurAdminPassword') || '';
          const response = await fetch('/api/content.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Admin-Password': pwd
            },
            body: JSON.stringify(imported)
          });
          
          if (response.ok) {
            alert('Đã import và lưu đồng bộ lên server thành công!');
          } else {
            alert('Đã import tạm thời vào trình duyệt. Hãy nhấn nút Lưu để đồng bộ lên server.');
          }
        } catch (e) {
          alert('Lỗi: File import không hợp lệ!');
        }
      };
      reader.readAsText(file);
    }
  };

  // Get active translations and list elements for the selected page
  const pageDefaults = PAGE_DEFAULTS[selectedPageKey];
  const pageServerData = data[selectedPageKey] || {};

  // Deep-merge defaults with server data
  const currentTranslations = useMemo(() => {
    const merge = (def, srv) => {
      const result = { ...def };
      for (const k in srv) {
        if (srv[k] && typeof srv[k] === 'object' && !Array.isArray(srv[k])) {
          result[k] = merge(def[k] || {}, srv[k]);
        } else {
          result[k] = srv[k];
        }
      }
      return result;
    };
    return merge(pageDefaults, pageServerData);
  }, [selectedPageKey, data]);

  // Flattened keys
  const viFlatKeys = useMemo(() => getFlatTextKeys(currentTranslations.vi || {}), [currentTranslations]);
  const enFlatKeys = useMemo(() => getFlatTextKeys(currentTranslations.en || {}), [currentTranslations]);
  
  // Sorted unique paths
  const allPaths = useMemo(() => {
    const paths = Array.from(new Set([...Object.keys(viFlatKeys), ...Object.keys(enFlatKeys)]));
    // Filter out paths containing nav links, arrays, or object collections
    return paths
      .filter(path => !path.includes('.nav.') && !path.startsWith('nav.') && !path.includes('.categories') && !path.includes('.features') && !path.includes('.solutions'))
      .sort((a, b) => a.localeCompare(b));
  }, [viFlatKeys, enFlatKeys]);

  const filteredPaths = useMemo(() => {
    if (!searchTerm) return allPaths;
    const lowerSearch = searchTerm.toLowerCase();
    return allPaths.filter(path => 
      path.toLowerCase().includes(lowerSearch) || 
      (viFlatKeys[path] && String(viFlatKeys[path]).toLowerCase().includes(lowerSearch)) ||
      (enFlatKeys[path] && String(enFlatKeys[path]).toLowerCase().includes(lowerSearch))
    );
  }, [allPaths, searchTerm, viFlatKeys, enFlatKeys]);

  // Products array
  const products = currentTranslations.products || [];

  const handleFieldChange = (path, lang, val) => {
    setData(prev => {
      const pageData = { ...prev[selectedPageKey] };
      const langData = { ...pageData[lang] };
      
      const keys = path.split('.');
      let current = langData;
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (i === keys.length - 1) {
          current[k] = val;
        } else {
          current[k] = { ...current[k] };
          current = current[k];
        }
      }
      
      return {
        ...prev,
        [selectedPageKey]: {
          ...pageData,
          [lang]: langData
        }
      };
    });
  };

  const handleProductChange = (idx, field, value) => {
    setData(prev => {
      const pageData = { ...prev[selectedPageKey] };
      const newProducts = [...(pageData.products || pageDefaults.products || [])];
      newProducts[idx] = {
        ...newProducts[idx],
        [field]: value
      };
      
      return {
        ...prev,
        [selectedPageKey]: {
          ...pageData,
          products: newProducts
        }
      };
    });
  };

  const handleProductNestedChange = (idx, lang, subfield, value) => {
    setData(prev => {
      const pageData = { ...prev[selectedPageKey] };
      const newProducts = [...(pageData.products || pageDefaults.products || [])];
      newProducts[idx] = {
        ...newProducts[idx],
        [lang]: {
          ...newProducts[idx][lang],
          [subfield]: value
        }
      };
      
      return {
        ...prev,
        [selectedPageKey]: {
          ...pageData,
          products: newProducts
        }
      };
    });
  };

  const addProduct = () => {
    setData(prev => {
      const pageData = { ...prev[selectedPageKey] };
      const currentProds = [...(pageData.products || pageDefaults.products || [])];
      
      // Template item based on existing products or a blank one
      const templateItem = currentProds[0] || {
        id: 1,
        category: "Monitor",
        vi: { title: "Sản phẩm mới", desc: "Mô tả sản phẩm mới" },
        en: { title: "New Product", desc: "Description of new product" },
        img: "./images/logo4.jpg",
        icon: "Monitor"
      };

      const newProduct = {
        ...templateItem,
        id: Math.max(...currentProds.map(p => Number(p.id) || 0), 0) + 1,
        vi: { ...templateItem.vi, title: templateItem.vi.title + " (Mới)" },
        en: { ...templateItem.en, title: templateItem.en.title + " (New)" }
      };

      return {
        ...prev,
        [selectedPageKey]: {
          ...pageData,
          products: [...currentProds, newProduct]
        }
      };
    });
    
    // Switch to bottom or highlight
    setTimeout(() => {
      alert("Đã thêm một mục mới vào cuối danh sách!");
    }, 100);
  };

  const deleteProduct = (idx) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa mục này khỏi danh sách?")) {
      setData(prev => {
        const pageData = { ...prev[selectedPageKey] };
        const currentProds = [...(pageData.products || pageDefaults.products || [])];
        const newProducts = currentProds.filter((_, i) => i !== idx);
        
        return {
          ...prev,
          [selectedPageKey]: {
            ...pageData,
            products: newProducts
          }
        };
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center font-sans">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 max-w-md w-full shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight uppercase">Inspur Admin</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Trang quản trị nội dung</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest block">Mật khẩu quản trị</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-4 focus:ring-blue-600/20 focus:border-blue-500 transition-all font-medium text-center text-lg tracking-wider"
                placeholder="••••••"
                autoFocus
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-600/30 active:scale-98"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col">
      {/* Top Header */}
      <header className="bg-slate-950 text-white sticky top-0 z-[100] px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-700/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
            <Settings className="w-5 h-5 text-blue-400 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg tracking-tighter uppercase italic text-blue-500">INSPUR</span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-black text-slate-300 tracking-wider">ADMIN</span>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Hệ thống biên tập không code</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sessionStorage.removeItem('inspurAdminPassword');
              setIsAuthenticated(false);
            }}
            className="px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-red-950/30 hover:border-red-950 hover:text-red-400 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
          >
            Đăng xuất
          </button>
          
          <div className="h-6 w-px bg-white/10 mx-1"></div>

          <label className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2">
            <Upload className="w-3.5 h-3.5" />
            Import
            <input type="file" accept=".json" onChange={handleImport} className="hidden" />
          </label>
          <button
            onClick={handleExport}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            Export
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            Lưu thay đổi
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex min-h-[calc(100vh-73px)]">
        {/* Sidebar - Page Selector */}
        <aside className="w-80 bg-slate-900 text-slate-400 border-r border-slate-800 p-6 flex flex-col gap-6 shrink-0">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Danh sách các trang</span>
          <nav className="space-y-1.5 flex-1 overflow-y-auto">
            {PAGES.map((page) => {
              const isActive = selectedPageKey === page.key;
              return (
                <button
                  key={page.key}
                  onClick={() => {
                    setSelectedPageKey(page.key);
                    // Default to visual when changing page
                    setActiveTab('visual');
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${
                    isActive 
                      ? 'bg-blue-600 text-white font-black shadow-lg shadow-blue-500/10' 
                      : 'hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className={`text-sm block tracking-tight uppercase ${isActive ? 'font-bold' : 'font-medium'}`}>{page.label}</span>
                    <span className={`text-[10px] block opacity-60 font-semibold ${isActive ? 'text-white' : 'text-slate-500'}`}>{page.desc}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-slate-50 overflow-y-auto flex flex-col">
          {/* Page Toolbar */}
          <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between shadow-sm shrink-0">
            <div>
              <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest block">Đang biên tập</span>
              <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tighter mt-0.5">
                {PAGES.find(p => p.key === selectedPageKey)?.label}
              </h2>
            </div>

            {/* Tab Switched */}
            <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveTab('visual')}
                className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === 'visual' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                Văn bản & Hình ảnh
              </button>
              {products.length > 0 && (
                <button
                  onClick={() => setActiveTab('products')}
                  className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                    activeTab === 'products' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-950'
                  }`}
                >
                  Danh sách mục ({products.length})
                </button>
              )}
            </div>
          </div>

          {/* Editor Body */}
          <div className="flex-1 p-8">
            {activeTab === 'visual' ? (
              <div className="max-w-6xl mx-auto space-y-6">
                {/* Search / Filter bar */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <Search className="text-slate-400 w-5 h-5 shrink-0" />
                  <input
                    type="text"
                    placeholder="Tìm nhanh các trường văn dung (Ví dụ: hero, title, desc...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm font-semibold placeholder-slate-400"
                  />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="p-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-500">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Form Elements */}
                <div className="space-y-4">
                  {filteredPaths.length > 0 ? (
                    filteredPaths.map((path) => {
                      const viVal = viFlatKeys[path] || '';
                      const enVal = enFlatKeys[path] || '';
                      const isImg = isImagePath(viVal || enVal);
                      
                      return (
                        <div key={path} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden group hover:border-blue-700/30 transition-all duration-300">
                          {/* Path Header */}
                          <div className="bg-slate-50/80 px-6 py-3 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono block">
                              {formatPathLabel(path)}
                            </span>
                            {isImg && (
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-black uppercase rounded tracking-wider">
                                HÌNH ẢNH
                              </span>
                            )}
                          </div>

                          {/* Bilingual side-by-side input */}
                          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Tiếng Việt */}
                            <div className="space-y-2">
                              <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest block">Tiếng Việt (VI)</span>
                              {isImg ? (
                                <ImageUploadInput
                                  value={viVal}
                                  onChange={(newVal) => handleFieldChange(path, 'vi', newVal)}
                                />
                              ) : viVal.length > 80 ? (
                                <textarea
                                  value={viVal}
                                  onChange={(e) => handleFieldChange(path, 'vi', e.target.value)}
                                  rows={3}
                                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all font-medium text-sm leading-relaxed"
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={viVal}
                                  onChange={(e) => handleFieldChange(path, 'vi', e.target.value)}
                                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all font-medium text-sm"
                                />
                              )}
                            </div>

                            {/* Tiếng Anh */}
                            <div className="space-y-2">
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">English (EN)</span>
                              {isImg ? (
                                <ImageUploadInput
                                  value={enVal}
                                  onChange={(newVal) => handleFieldChange(path, 'en', newVal)}
                                />
                              ) : enVal.length > 80 ? (
                                <textarea
                                  value={enVal}
                                  onChange={(e) => handleFieldChange(path, 'en', e.target.value)}
                                  rows={3}
                                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all font-medium text-sm leading-relaxed"
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={enVal}
                                  onChange={(e) => handleFieldChange(path, 'en', e.target.value)}
                                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all font-medium text-sm"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 shadow-sm space-y-3">
                      <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto" />
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Không tìm thấy trường nào phù hợp</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="max-w-6xl mx-auto space-y-6">
                <div className="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Info className="w-5 h-5 text-blue-600 shrink-0" />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Thêm, xóa và sửa đổi danh sách các phần tử hiển thị động trên trang này.
                    </p>
                  </div>
                  <button
                    onClick={addProduct}
                    className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all active:scale-95 shadow-lg shadow-green-600/20"
                  >
                    <Plus className="w-4 h-4" /> Thêm mục mới
                  </button>
                </div>

                <div className="space-y-6">
                  {products.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-[2.5rem] border border-slate-200 hover:border-blue-600/25 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden">
                      {/* Card Header */}
                      <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 bg-blue-600 text-white text-[11px] font-black rounded-lg flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="font-black text-slate-900 text-sm uppercase tracking-tight">
                            {item.vi?.title || item.title || "Không có tiêu đề"}
                          </span>
                        </div>
                        <button
                          onClick={() => deleteProduct(idx)}
                          className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Card Body */}
                      <div className="p-8">
                        <RenderItemFields
                          item={item}
                          onChange={(field, val) => {
                            if (field === 'vi' || field === 'en') {
                              // Object level change
                              handleProductChange(idx, field, val);
                            } else {
                              // Top level field change
                              handleProductChange(idx, field, val);
                            }
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
