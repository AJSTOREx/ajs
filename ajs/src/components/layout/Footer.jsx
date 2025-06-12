import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 text-foreground/80 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-right">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="p-2 bg-gradient-to-br from-primary to-blue-700 rounded-lg shadow-lg">
                <Globe className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-gradient-blue">AJS</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              منصتك المتكاملة لشراء الدومينات، وخطط الاستضافة، والبطاقات الإلكترونية بكل سهولة وأمان.
            </p>
          </div>

          <div>
            <span className="text-xl font-semibold text-primary mb-4 block">المنتجات</span>
            <ul className="space-y-3">
              <li><Link to="/domains" className="hover:text-primary transition-colors">الدومينات</Link></li>
              <li><Link to="/hosting" className="hover:text-primary transition-colors">الاستضافة</Link></li>
              <li><Link to="/ecards" className="hover:text-primary transition-colors">البطاقات الإلكترونية</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-xl font-semibold text-primary mb-4 block">الدعم</span>
            <ul className="space-y-3">
              <li><Link to="/contact" className="hover:text-primary transition-colors">اتصل بنا</Link></li>
              <li><button onClick={() => alert("🚧")} className="hover:text-primary transition-colors">مركز المساعدة</button></li>
              <li><button onClick={() => alert("🚧")} className="hover:text-primary transition-colors">سياسة الخصوصية</button></li>
            </ul>
          </div>
          
          <div>
            <span className="text-xl font-semibold text-primary mb-4 block">تواصل معنا</span>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-primary" />
                <span dir="ltr">+966 555 123 456</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@ajs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} AJS. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;