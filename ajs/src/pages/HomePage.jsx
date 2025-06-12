import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Globe, Server, CreditCard, ShieldCheck, Zap, LifeBuoy } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-secondary/50 p-6 rounded-xl shadow-lg text-center card-hover-glow"
  >
    <div className="mb-4 inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-blue-700 rounded-full text-primary-foreground">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

const HomePage = () => {
  const [domainName, setDomainName] = useState('');

  const handleDomainSearch = (e) => {
    e.preventDefault();
    if (!domainName.trim()) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال اسم دومين للبحث.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: `جاري البحث عن "${domainName}"...`,
      description: "هذه الميزة غير مطبقة بعد. يمكنك طلبها في رسالتك القادمة! 🚀",
    });
  };

  return (
    <div className="space-y-20 md:space-y-32 overflow-x-hidden">
      <section className="relative text-center py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-grid-white/[0.05]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gradient-blue">AJS</span> بوابتك الرقمية الأولى
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            ابحث عن اسم النطاق المثالي، واحصل على استضافة فائقة السرعة، واشترِ بطاقاتك الإلكترونية بكل سهولة.
          </motion.p>
          <motion.form
            onSubmit={handleDomainSearch}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="ابحث عن اسم الدومين الخاص بك..."
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                className="w-full h-14 pl-14 pr-32 text-lg rounded-full bg-secondary/60 border-2 border-border focus:ring-primary focus:border-primary"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <Button type="submit" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90 h-10 px-6">
                بحث
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          خدماتنا المتكاملة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/domains" className="block">
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="تسجيل الدومينات"
              description="اختر من بين مئات الامتدادات واحجز اسم نطاقك الفريد اليوم."
              delay={0.1}
            />
          </Link>
          <Link to="/hosting" className="block">
            <FeatureCard
              icon={<Server className="w-8 h-8" />}
              title="استضافة مواقع"
              description="خطط استضافة قوية، آمنة، وسريعة لتلبية جميع احتياجات موقعك."
              delay={0.2}
            />
          </Link>
          <Link to="/ecards" className="block">
            <FeatureCard
              icon={<CreditCard className="w-8 h-8" />}
              title="بطاقات إلكترونية"
              description="مجموعة واسعة من البطاقات الإلكترونية لخدماتك ومنصاتك المفضلة."
              delay={0.3}
            />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-secondary/20 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img  alt="Modern data center servers" className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px]" src="https://images.unsplash.com/flagged/photo-1599037598911-e20f441c3cd4" />
          </motion.div>
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-blue">
              لماذا تختار AJS؟
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نحن نقدم لك أكثر من مجرد خدمات، نحن نقدم لك تجربة متكاملة وموثوقة لبناء وتوسيع وجودك على الإنترنت.
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-center"><ShieldCheck className="w-5 h-5 text-primary mr-2 ml-2" /> حماية وأمان على مدار الساعة.</li>
              <li className="flex items-center"><Zap className="w-5 h-5 text-primary mr-2 ml-2" /> سرعة أداء لا تضاهى.</li>
              <li className="flex items-center"><LifeBuoy className="w-5 h-5 text-primary mr-2 ml-2" /> دعم فني متخصص جاهز لمساعدتك.</li>
            </ul>
          </motion.div>
        </div>
      </section>
      
       <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          انطلق بمشروعك الآن
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          لا تنتظر أكثر. اختر الخدمة التي تناسبك وابدأ رحلتك نحو النجاح الرقمي اليوم.
        </p>
        <Link to="/hosting">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-3 text-lg">
            عرض خطط الاستضافة
          </Button>
        </Link>
      </section>

    </div>
  );
};

export default HomePage;