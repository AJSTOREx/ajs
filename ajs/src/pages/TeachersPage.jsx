
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, BookOpen, Star, ShieldCheck, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const teachersData = [
  {
    id: 1,
    name: "الشيخ أحمد بن محمد",
    qualification: "إجازة في القراءات العشر",
    experience: "15+ سنة في تعليم القرآن وقيادة الحلقات",
    specialization: "تحفيظ وتجويد الكبار، إدارة حلقات متقدمة",
    bio: "شيخ ومعلم متمرس ومجاز بالقراءات العشر، له خبرة واسعة في تعليم القرآن الكريم وقيادة الحلقات للكبار والصغار، ويتميز بأسلوبه السهل والمشجع.",
    image: "Portrait of a smiling male Quran teacher with a beard wearing traditional attire",
  },
  {
    id: 2,
    name: "الأستاذة فاطمة علي",
    qualification: "ماجستير في الدراسات القرآنية",
    experience: "10+ سنوات في تعليم النساء والأطفال ضمن حلقات",
    specialization: "تحفيظ وتفسير مبسط للنساء، إدارة حلقات نسائية",
    bio: "معلمة متخصصة في تعليم النساء والأطفال، حاصلة على درجة الماجستير في الدراسات القرآنية، وتتميز بقدرتها على تبسيط المعلومة وقيادة حلقات تفاعلية للنساء.",
    image: "Portrait of a female Quran teacher wearing a hijab, with a gentle smile",
  },
  {
    id: 3,
    name: "الشيخ عمر عبدالله",
    qualification: "إجازة في رواية حفص عن عاصم",
    experience: "8+ سنوات في تعليم الشباب وإدارة حلقاتهم",
    specialization: "تعليم أحكام التجويد للشباب، قيادة حلقات شبابية",
    bio: "معلم شاب متخصص في تعليم أحكام التجويد للشباب، يتميز بحماسه وقدرته على التواصل الفعال مع هذه الفئة العمرية وقيادة حلقاتهم بنجاح.",
    image: "Portrait of a young male Quran teacher with a light beard, looking approachable",
  },
  {
    id: 4,
    name: "الأستاذة خديجة إبراهيم",
    qualification: "بكالوريوس شريعة ودراسات إسلامية",
    experience: "7+ سنوات في تعليم الفتيات ضمن حلقات مخصصة",
    specialization: "تحفيظ قصار السور للفتيات، إدارة حلقات للفتيات",
    bio: "معلمة متميزة في تعليم الفتيات الصغيرات، تستخدم أساليب تربوية حديثة ومحببة للأطفال لتشجيعهن على حفظ القرآن الكريم ضمن حلقات ممتعة.",
    image: "Portrait of a female Quran teacher with a kind expression, suitable for teaching children",
  },
];

const TeacherCard = ({ teacher, index }) => {
  const handleContactClick = () => {
    toast({
      title: `🚧 التواصل مع ${teacher.name}`,
      description: "هذه الميزة غير مطبقة بعد. يمكنك طلبها في رسالتك القادمة! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row card-hover-effect"
    >
      <div className="md:w-1/3 h-64 md:h-auto relative">
        <img  
          alt={`صورة ${teacher.name}`}
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 right-4 text-primary-foreground">
          <h3 className="text-xl font-bold" style={{ fontFamily: "'Amiri Quran', serif" }}>{teacher.name}</h3>
          <p className="text-sm opacity-90">{teacher.qualification}</p>
        </div>
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-secondary mb-2">
            <Star className="w-4 h-4 mr-1 ml-1" />
            <span>{teacher.experience}</span>
          </div>
          <h4 className="text-lg font-semibold text-primary mb-1">التخصص وقيادة الحلقات:</h4>
          <p className="text-muted-foreground text-sm mb-3">{teacher.specialization}</p>
          <h4 className="text-lg font-semibold text-primary mb-1">نبذة:</h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{teacher.bio}</p>
        </div>
        <Button onClick={handleContactClick} className="w-full md:w-auto btn-secondary-outline rounded-lg py-2.5 mt-2 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 mr-2 ml-2" />
          تواصل مع الشيخ/ة
        </Button>
      </div>
    </motion.div>
  );
};

const TeachersPage = () => {
  return (
    <div className="py-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gradient-primary mb-4" style={{ fontFamily: "'Amiri Quran', serif" }}>
          شيوخنا ومعلمو الحلقات
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          نفخر بوجود كوكبة من الشيوخ والمعلمين الأكفاء والمجازين، أصحاب الخبرة والتفاني في قيادة حلقات القرآن الكريم.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          { icon: <UserCheck className="w-8 h-8" />, title: "كفاءة عالية", description: "شيوخ ومعلمون مؤهلون علمياً وتربوياً لقيادة الحلقات." },
          { icon: <BookOpen className="w-8 h-8" />, title: "إجازات معتمدة", description: "حاصلون على إجازات في القراءات المختلفة تؤهلهم للتعليم." },
          { icon: <Star className="w-8 h-8" />, title: "خبرة طويلة", description: "سنوات من الخبرة في مجال تعليم القرآن وقيادة الحلقات." },
          { icon: <ShieldCheck className="w-8 h-8" />, title: "أمانة وإخلاص", description: "نحرص على اختيار ذوي الأمانة والإخلاص لقيادة الحلقات." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card p-6 rounded-lg shadow-md flex items-center space-x-4 rtl:space-x-reverse"
          >
            <div className="p-3 bg-gradient-to-br from-primary to-green-500 rounded-full text-primary-foreground">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-8">
        {teachersData.map((teacher, index) => (
          <TeacherCard key={teacher.id} teacher={teacher} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TeachersPage;