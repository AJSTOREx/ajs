import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import DomainsPage from '@/pages/DomainsPage';
import HostingPage from '@/pages/HostingPage';
import EcardsPage from '@/pages/EcardsPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Toaster />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/domains" element={<DomainsPage />} />
            <Route path="/hosting" element={<HostingPage />} />
            <Route path="/ecards" element={<EcardsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;