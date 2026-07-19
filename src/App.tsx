import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { DiagnosticsPage } from './pages/DiagnosticsPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = () => {
    setIsModalOpen(true);
  };

  return (
    <HelmetProvider>
      <Layout>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar onBookClick={handleBookClick} />
          
          <Routes>
            <Route path="/" element={<Home onBookClick={handleBookClick} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/diagnostics" element={<DiagnosticsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Footer />
          
          <AppointmentModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </BrowserRouter>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
