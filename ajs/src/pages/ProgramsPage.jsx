
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookMarked, Users, Clock, Award, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const programsData = [
  {
    id: 1,
    title: "برنامج تحفيظ القرآن الكريم كاملاً",
    icon: <BookMarked className="w-10 h-10 text-primary-foreground" />,
    description: "يهدف هذا البرنامج إلى مساعدة الطلاب على حفظ القرآن الكريم كاملاً مع إتقان التلاوة وأحكام التجويد، ضمن حلقات منظمة.",
    duration: "سنتان - 3 سنوات (حسب الحلقة)",
    targetAudience: "جميع الأعمار (رجال ونساء)",
    features: ["متابعة فردية عبر الحلقات", "اختبارات دورية", "شهادة إتمام معتمدة من الحلقة"],
    image: "Quran book on a stand with intricate details",
  },
  {
    id: 2,
    title: "برنامج تعليم التجويد وأحكام التلاوة",
    icon: <Award className="w-10 h-10 text-primary-foreground" />,
    description: "يركز هذا البرنامج على تعليم قواعد التجويد النظرية والتطبيقية لتحسين تلاوة القرآن الكريم، ويقدم عبر حلقات متخصصة.",
    duration: "6 أشهر (حسب الحلقة)",
    targetAudience: "الراغبون في تحسين تلاوتهم",
    features: ["دروس نظرية وتطبيقية في الحلقات", "تمارين عملية", "إجازة في التجويد (للمتميزين في الحلقة)"],
    image: "Teacher explaining Quranic script on a whiteboard",
  },
  {
    id: 3,
    title: "برنامج تحفيظ قصار السور للأطفال",
    icon: <Users className="w-10 h-10 text-primary-foreground" />,
    description: "برنامج مخصص للأطفال لتحفيظ قصار السور بطرق ممتعة وتفاعلية تناسب أعمارهم، من خلال حلقات مخصصة للأطفال.",
    duration: "مستويات متعددة (حسب الحلقة)",
    targetAudience: "الأطفال من 5 إلى 10 سنوات",
    features: ["وسائل تعليمية مبتكرة في الحلقة", "أنشطة ترفيهية هادفة", "تشجيع وتحفيز مستمر من معلم الحلقة"],
    image: "Group of children sitting in a circle learning Quran",
  },
  {
    id: 4,
    title: "برنامج المراجعة المكثفة للحفاظ",
    icon: <Clock className="w-10 h-10 text-primary-foreground" />,
    description: "برنامج مخصص للحفاظ لمراجعة وتثبيت حفظهم للقرآن الكريم بشكل دوري ومكثف، ضمن حلقات مراجعة متخصصة.",
    duration: "حسب الحاجة (ضمن الحلقة)",
    targetAudience: "من أتموا حفظ القرآن الكريم",
    features: ["جداول مراجعة مخصصة في الحلقة", "تسميع دوري مع الشيخ", "دعم مستمر من معلمي الحلقات"],
    image: "Person reviewing Quran text closely",
  },
];

const ProgramCard = ({ program, index }) => {
  const handleRegisterClick = () => {
    toast({
      title: "🚧 التسجيل في البرنامج",
      description: "للتسجيل في هذا البرنامج، يرجى تصفح الحلقات المتاحة التي تقدم هذا البرنامج والانضمام إليها مباشرة. 🚀",
      variant: "default",
      duration: 7000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl shadow-xl overflow-hidden flex flex-col card-hover-effect"
    >
      <div className="relative h-56 bg-gradient-to-br from-primary to-green-500 flex items-center justify-center p-6">
        <img  alt={program.title} className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1591206246224-04b4624adef4" />
        <div className="relative z-10 text-center text-primary-foreground">
          <div className="mb-3 inline-block p-3 bg-primary-foreground/20 rounded-full">{program.icon}</div>
          <h3 className="text-2xl font-bold" style={{ fontFamily: "'Amiri Quran', serif" }}>{program.title}</h3>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">{program.description}</p>
        <div className="mb-4 space-y-2 text-sm">
          <p><strong className="text-primary">المدة:</strong> {program.duration}</p>
          <p><strong className="text-primary">الفئة المستهدفة:</strong> {program.targetAudience}</p>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-2">مميزات البرنامج:</h4>
          <ul className="space-y-1 text-sm">
            {program.features.map((feature, i) => (
              <li key={i} className="flex items-center text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 ml-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={handleRegisterClick} className="w-full btn-primary-gradient mt-auto rounded-lg py-3">
          كيفية التسجيل في البرنامج
        </Button>
      </div>
    </motion.div>
  );
};

const ProgramsPage = () => {
  return (
    <div className="py-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gradient-primary mb-4" style={{ fontFamily: "'Amiri Quran', serif" }}>
          البرامج التعليمية المعتمدة
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          نقدم مجموعة متنوعة من البرامج المصممة لتلبية احتياجات جميع الراغبين في تعلم وحفظ القرآن الكريم عبر حلقاتنا التفاعلية.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {programsData.map((program, index) => (
          <ProgramCard key={program.id} program={program} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProgramsPage;