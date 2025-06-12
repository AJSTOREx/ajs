import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Server, CreditCard, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/domains', label: 'الدومينات' },
  { to: '/hosting', label: 'الاستضافة' },
  { to: '/ecards', label: 'البطاقات الإلكترونية' },
  { to: '/contact', label: 'اتصل بنا' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const showToast = (feature) => {
    toast({
      title: `🚧 ${feature}`,
      description: "هذه الميزة غير مطبقة بعد. يمكنك طلبها في رسالتك القادمة! 🚀",
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2 bg-gradient-to-br from-primary to-blue-700 rounded-lg shadow-lg"
          >
            <Globe className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gradient-blue" style={{ fontFamily: "'Cairo', sans-serif" }}>
            AJS
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-foreground/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
          <Button variant="ghost" size="icon" onClick={() => showToast('حساب المستخدم')}>
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => showToast('سلة المشتريات')}>
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 text-base" onClick={() => showToast('تسجيل الدخول')}>
            تسجيل الدخول
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-7 h-7 text-primary" /> : <Menu className="w-7 h-7 text-primary" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg absolute w-full"
        >
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-foreground/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4 rtl:space-x-reverse pt-4">
              <Button variant="ghost" size="icon" onClick={() => { toggleMobileMenu(); showToast('حساب المستخدم'); }}>
                <User className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => { toggleMobileMenu(); showToast('سلة المشتريات'); }}>
                <ShoppingCart className="w-6 h-6" />
              </Button>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg w-4/5 mt-4" onClick={() => { toggleMobileMenu(); showToast('تسجيل الدخول'); }}>
              تسجيل الدخول
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;