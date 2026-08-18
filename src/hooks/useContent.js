import { useState, useEffect } from 'react';

export const useContent = (pageKey, defaultTranslations) => {
  const [lang, setLang] = useState(() => localStorage.getItem('appLang') || 'vi');
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/api/content.php');
        if (response.ok) {
          const serverData = await response.json();
          if (serverData && Object.keys(serverData).length > 0) {
            setContent(serverData);
          }
        }
      } catch (e) {
        console.error('Error loading content:', e);
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'vi' ? 'en' : 'vi';
    setLang(newLang);
    localStorage.setItem('appLang', newLang);
  };

  // Helper for deep merging translations
  const mergeTranslations = (target, source) => {
    const output = { ...target };
    if (source && typeof source === 'object') {
      Object.keys(source).forEach(key => {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
          output[key] = mergeTranslations(target[key] || {}, source[key]);
        } else if (source[key] !== undefined && source[key] !== '') {
          output[key] = source[key];
        }
      });
    }
    return output;
  };

  const pageDefault = defaultTranslations[lang] || {};
  const pageServer = content?.[pageKey]?.[lang] || {};
  const t = mergeTranslations(pageDefault, pageServer);

  // Support for product overrides
  const serverProducts = content?.[pageKey]?.products || content?.products;

  return {
    lang,
    setLang,
    toggleLang,
    t,
    products: serverProducts,
    loading,
    rawContent: content
  };
};
