import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LayoutGrid, BookOpenCheck, Users, Settings, MessageSquare, BarChart3, LogOut } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const DashboardPage = () => {
  const userName = "اسم المستخدم"; // سيتم استبداله بالاسم الحقيقي بعد المصادقة
  const userRole = "طالب"; // سيتم استبداله بالدور الحقيقي

  const handleFeatureClick = (featureName) => {
    toast({
      title: `🚧 ${featureName}`,
      description: "هذه الميزة غير مطبقة بعد. يمكنك طلبها في رسالتك القادمة! 🚀",
    });
  };

  const dashboardItems = [
    { name: "حلقاتي", icon: <BookOpenCheck className="w-8 h-8" />, path: "/my-halaqat", role: ["طالب", "شيخ", "مشرف"] },
    { name: "إدارة الحلقات", icon: <LayoutGrid className="w-8 h-8" />, path: "/manage-halaqat", role: ["مشرف", "إدارة"] },
    { name: "إدارة المستخدمين", icon: <Users className="w-8 h-8" />, path: "/manage-users", role: ["إدارة"] },
    { name: "التقارير والإحصائيات", icon: <BarChart3 className="w-8 h-8" />, path: "/reports", role: ["مشرف", "إدارة"] },
    { name: "الرسائل والإشعارات", icon: <MessageSquare className="w-8 h-8" />, path: "/messages", role: ["طالب", "شيخ", "مشرف", "إدارة"] },
    { name: "إعدادات الحساب", icon: <Settings className="w-8 h-8" />, path: "/account-settings", role: ["طالب", "شيخ", "مشرف", "إدارة"] },
  ];

  const availableItems = dashboardItems.filter(item => item.role.includes(userRole));


  return (
    <div className="py-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-card rounded-xl shadow-lg">
          <div>
            <h1 className="text-4xl font-bold text-gradient-primary" style={{ fontFamily: "'Amiri Quran', serif" }}>
              مرحباً بك، {userName}
            </h1>
            <p className="text-lg text-muted-foreground">دورك الحالي: <span className="font-semibold text-primary">{userRole}</span></p>
          </div>
          <Button 
            variant="destructive" 
            className="rounded-full px-6 py-2 text-base"
            onClick={() => handleFeatureClick("تسجيل الخروج")}
          >
            <LogOut className="w-5 h-5 mr-2 ml-2" />
            تسجيل الخروج
          </Button>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {availableItems.map((item) => (
          <motion.div
            key={item.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="card-hover-effect"
          >
            <button
              onClick={() => handleFeatureClick(item.name)}
              className="w-full h-full bg-card p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center space-y-3 hover:bg-primary/5 transition-colors"
            >
              <div className="p-4 bg-gradient-to-br from-primary to-green-500 rounded-full text-primary-foreground inline-block">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-primary">{item.name}</h2>
            </button>
          </motion.div>
        ))}
         {availableItems.length === 0 && (
            <motion.div 
                className="col-span-full text-center py-12 bg-card rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <LayoutGrid className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-primary mb-2">لا توجد عناصر متاحة في لوحة التحكم</h2>
                <p className="text-muted-foreground">قد لا يكون لديك الصلاحيات الكافية لعرض أي عناصر حالياً.</p>
            </motion.div>
        )}
      </motion.section>
      
      <motion.div 
        className="mt-12 p-6 bg-secondary/10 rounded-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: availableItems.length * 0.1 + 0.2 }}
      >
        <h3 className="text-xl font-semibold text-secondary-foreground mb-2">تلميحة سريعة!</h3>
        <p className="text-muted-foreground">
          هذه لوحة تحكم مبدئية. سيتم إضافة المزيد من الميزات والوظائف المخصصة لدورك قريباً. يمكنك طلب ميزات محددة في رسالتك القادمة!
        </p>
      </motion.div>
    </div>
  );
};

export default DashboardPage;