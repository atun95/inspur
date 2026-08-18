import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TrangChu from './pages/TrangChu';
import About from './pages/About';
import SanPham from './pages/SanPham';
import GiaiPhap from './pages/GiaiPhap';
import OEM from './pages/OEM';
import TTVSK from './pages/TTVSK';
import Contact from './pages/Contact';
import ManHinhInspur from './pages/ManHinhInspur';
import MayTinhAllInOne from './pages/MayTinhAllInOne';
import Admin from './pages/Admin';

// ScrollToTop helper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<TrangChu />} />
        <Route path="/trangchu" element={<TrangChu />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/about/" element={<About />} />
        
        <Route path="/san-pham" element={<SanPham />} />
        <Route path="/san-pham/" element={<SanPham />} />
        
        <Route path="/giai-phap" element={<GiaiPhap />} />
        <Route path="/giai-phap/" element={<GiaiPhap />} />
        
        <Route path="/oem" element={<OEM />} />
        <Route path="/oem/" element={<OEM />} />
        
        <Route path="/tin-tuc-va-su-kien" element={<TTVSK />} />
        <Route path="/tin-tuc-va-su-kien/" element={<TTVSK />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/" element={<Contact />} />
        
        <Route path="/man-hinh-inspur" element={<ManHinhInspur />} />
        <Route path="/man-hinh-inspur/" element={<ManHinhInspur />} />
        
        <Route path="/may-tinh-all-in-one" element={<MayTinhAllInOne />} />
        <Route path="/may-tinh-all-in-one/" element={<MayTinhAllInOne />} />
        
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/" element={<Admin />} />

        {/* Fallback route - redirect to home page or show 404 */}
        <Route path="*" element={<TrangChu />} />
      </Routes>
    </Router>
  );
}

export default App;
