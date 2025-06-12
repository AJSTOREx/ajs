import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Clock, CalendarDays, UserCircle, Tv, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const halaqatData = [
  {
    id: 1,
    name: "حلقة الفجر للمتقدمين",
    sheikh: "الشيخ عبد الرحمن السديس (محاكاة)",
    timing: "بعد صلاة الفجر بتوقيت مكة المكرمة",
    days: "يومياً",
    level: "متقدم (مراجعة وتثبيت)",
    capacity: 20,
    enrolled: 15,
    platform: "Zoom (مثال)",
    image: "Sunrise over a mosque silhouette",
    features: ["مراجعة مكثفة", "تصحيح التلاوة", "تفسير آيات مختارة"]
  },
  {
    id: 2,
    name: "حلقة المساء للمبتدئين",
    sheikh: "الشيخ ماهر المعيقلي (محاكاة)",
    timing: "بعد صلاة المغرب بتوقيت مكة المكرمة",
    days: "الأحد، الثلاثاء، الخميس",
    level: "مبتدئ (حفظ جزء عم)",
    capacity: 25,
    enrolled: 10,
    platform: "Google Meet (مثال)",
    image: "Sunset with Quran book in foreground",
    features: ["تحفيظ جزء عم", "تعليم أحكام التجويد الأساسية", "قصص قرآنية"]
  },
  {
    id: 3,
    name: "حلقة النساء - تصحيح تلاوة",
    sheikh: "الأستاذة منيرة الأحمد (محاكاة)",
    timing: "العصر (4:00 م - 5:00 م) بتوقيت مكة",
    days: "الإثنين، الأربعاء",
    level: "متوسط (تصحيح تلاوة)",
    capacity: 15,
    enrolled: 12,
    platform: "Skype (مثال)",
    image: "Women studying Quran together in a respectful setting",
    features: ["تصحيح مخارج الحروف", "تطبيق أحكام التجويد", "تلاوة جماعية"]
  },
   {
    id: 4,
    name: "حلقة الأطفال - القاعدة النورانية",
    sheikh: "المعلمة سارة خالد (محاكاة)",
    timing: "الصباح (10:00 ص - 11:00 ص) بتوقيت مكة",
    days: "السبت",
    level: "أطفال (القاعدة النورانية)",
    capacity: 15,
    enrolled: 8,
    platform: "تطبيق خاص (مثال)",
    image: "Colorful illustration of children learning Arabic alphabet",
    features: ["تعليم الحروف الهجائية", "نطق سليم", "أناشيد تعليمية"]
  }
];

const HalaqaCard = ({ halaqa, index }) => {
  const handleJoinClick = () => {
    toast({
      title: `🚧 الانضمام إلى ${halaqa.name}`,
      description: "هذه الميزة غير مطبقة بعد. يمكنك طلبها في رسالتك القادمة! 🚀",
    });
  };

  const progressPercentage = (halaqa.enrolled / halaqa.capacity) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl shadow-xl overflow-hidden flex flex-col card-hover-effect"
    >
      <div className="relative h-48">
        <img  alt={halaqa.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1700716137543-ef7d4d78c5f3" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 right-4 text-primary-foreground">
          <h3 className="text-xl font-bold" style={{ fontFamily: "'Amiri Quran', serif" }}>{halaqa.name}</h3>
          <p className="text-sm opacity-90">المستوى: {halaqa.level}</p>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center"><UserCircle className="w-4 h-4 mr-2 ml-2 text-primary" /> الشيخ/ة: {halaqa.sheikh}</p>
          <p className="flex items-center"><Clock className="w-4 h-4 mr-2 ml-2 text-primary" /> التوقيت: {halaqa.timing}</p>
          <p className="flex items-center"><CalendarDays className="w-4 h-4 mr-2 ml-2 text-primary" /> الأيام: {halaqa.days}</p>
          <p className="flex items-center"><Tv className="w-4 h-4 mr-2 ml-2 text-primary" /> المنصة: {halaqa.platform}</p>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>الطلاب المسجلون</span>
            <span>{halaqa.enrolled} / {halaqa.capacity}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5">
            <motion.div
              className="bg-primary h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            ></motion.div>
          </div>
        </div>
        
        <div className="mb-4 mt-2">
          <h4 className="font-semibold text-primary mb-1 text-sm">مميزات الحلقة:</h4>
          <ul className="space-y-1 text-xs">
            {halaqa.features.map((feature, i) => (
              <li key={i} className="flex items-center text-muted-foreground">
                <CheckCircle className="w-3 h-3 text-green-500 mr-1 ml-1 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Button onClick={handleJoinClick} className="w-full btn-primary-gradient mt-auto rounded-lg py-2.5 text-base">
          <Users className="w-4 h-4 mr-2 ml-2" />
          انضم إلى الحلقة
        </Button>
      </div>
    </motion.div>
  );
};

const HalaqatPage = () => {
  return (
    <div className="py-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gradient-primary mb-4" style={{ fontFamily: "'Amiri Quran', serif" }}>
          الحلقات القرآنية المتاحة
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          تصفح الحلقات المتاحة واختر ما يناسبك للانضمام وبدء رحلتك مع القرآن الكريم.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {halaqatData.map((halaqa, index) => (
          <HalaqaCard key={halaqa.id} halaqa={halaqa} index={index} />
        ))}
      </div>
       {halaqatData.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-primary mb-2">لا توجد حلقات متاحة حالياً</h2>
          <p className="text-muted-foreground">يرجى التحقق مرة أخرى قريباً أو التواصل معنا لمزيد من المعلومات.</p>
        </motion.div>
      )}
    </div>
  );
};

export default HalaqatPage;