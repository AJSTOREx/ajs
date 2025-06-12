
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpenText, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="space-y-12 py-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-gradient-primary mb-4" style={{ fontFamily: "'Amiri Quran', serif" }}>
          عن مؤسسة إتقان
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          مؤسسة رائدة في تعليم وتحفيظ القرآن الكريم، نسعى لتقديم تجربة تعليمية فريدة ومتميزة لجميع طلابنا.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            alt="Quran book with rosary beads"
            className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-[500px]"
           src="https://images.unsplash.com/photo-1624862300786-fcdbd20ba0c3" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full text-primary">
              <BookOpenText size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-primary mb-2" style={{ fontFamily: "'Amiri Quran', serif" }}>رسالتنا</h2>
              <p className="text-foreground/70 leading-relaxed">
                تيسير تعليم كتاب الله تعالى وحفظه وفهمه لجميع فئات المجتمع، باستخدام أحدث الوسائل التعليمية وأفضل الكفاءات، للمساهمة في بناء جيل قرآني متمسك بدينه وقيمه.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full text-primary">
              <Eye size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-primary mb-2" style={{ fontFamily: "'Amiri Quran', serif" }}>رؤيتنا</h2>
              <p className="text-foreground/70 leading-relaxed">
                أن نكون المؤسسة الرائدة والمتميزة في تعليم القرآن الكريم على مستوى العالم، وأن نكون نموذجاً يحتذى به في الجودة والإتقان والابتكار.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-12 bg-card rounded-xl shadow-lg"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-10 text-primary" style={{ fontFamily: "'Amiri Quran', serif" }}>
            أهدافنا الاستراتيجية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target size={32} />, title: "توسيع نطاق المستفيدين", description: "الوصول إلى أكبر شريحة ممكنة من الراغبين في تعلم القرآن الكريم." },
              { icon: <Users size={32} />, title: "تطوير الكوادر التعليمية", description: "التدريب المستمر للمعلمين والمعلمات لرفع كفاءتهم." },
              { icon: <BookOpenText size={32} />, title: "ابتكار البرامج التعليمية", description: "تطوير برامج ومناهج حديثة تلبي احتياجات العصر." },
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 text-center"
              >
                <div className="inline-flex items-center justify-center p-4 mb-4 bg-gradient-to-br from-primary to-green-500 rounded-full text-primary-foreground">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{goal.title}</h3>
                <p className="text-muted-foreground text-sm">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold text-primary mb-6" style={{ fontFamily: "'Amiri Quran', serif" }}>
          قيمنا الأساسية
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["الإخلاص", "الإتقان", "الاحترام", "التعاون", "الابتكار", "المسؤولية"].map((value, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-secondary/20 text-secondary-foreground px-6 py-3 rounded-full text-lg font-medium"
            >
              {value}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
