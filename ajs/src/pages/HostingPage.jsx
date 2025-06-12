import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Server, Zap, ShieldCheck, Database, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const hostingPlans = [
    {
        name: "الأساسية",
        price: "15 ر.س",
        description: "مثالية للمواقع الشخصية والمدونات الصغيرة.",
        icon: <Server className="w-10 h-10 mx-auto mb-4 text-primary" />,
        features: ["موقع واحد", "10GB تخزين SSD", "شهادة SSL مجانية", "دعم فني محدود"],
        isPopular: false,
    },
    {
        name: "الاحترافية",
        price: "30 ر.س",
        description: "للشركات الصغيرة والمتاجر الإلكترونية الناشئة.",
        icon: <Zap className="w-10 h-10 mx-auto mb-4 text-primary" />,
        features: ["5 مواقع", "50GB تخزين NVMe", "شهادة SSL مجانية", "دومين مجاني للسنة الأولى", "دعم فني 24/7"],
        isPopular: true,
    },
    {
        name: "الأعمال",
        price: "60 ر.س",
        description: "للشركات المتنامية والمواقع ذات الزيارات العالية.",
        icon: <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-primary" />,
        features: ["مواقع غير محدودة", "100GB تخزين NVMe", "شهادة SSL مجانية", "دومين مجاني للسنة الأولى", "دعم فني متخصص"],
        isPopular: false,
    },
];

const HostingPlanCard = ({ plan, index }) => {
    const handleOrderClick = () => {
        toast({
            title: `طلب خطة ${plan.name}`,
            description: "هذه الميزة غير مطبقة بعد. يمكنك طلبها في رسالتك القادمة! 🚀",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-secondary/30 border-2 ${plan.isPopular ? 'border-primary' : 'border-border'} rounded-2xl p-8 flex flex-col text-center card-hover-glow`}
        >
            {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    الأكثر شيوعاً
                </div>
            )}
            {plan.icon}
            <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
            <p className="text-muted-foreground mb-6 flex-grow">{plan.description}</p>
            <p className="text-4xl font-bold mb-2">{plan.price}<span className="text-lg text-muted-foreground">/شهرياً</span></p>
            <ul className="space-y-3 my-8 text-right">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 ml-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                ))}
            </ul>
            <Button onClick={handleOrderClick} size="lg" className={`w-full mt-auto rounded-lg text-lg py-3 ${plan.isPopular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'}`}>
                اطلب الآن
            </Button>
        </motion.div>
    );
};

const HostingPage = () => {
    return (
        <div className="py-12 md:py-20">
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 container mx-auto px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-blue">
                    خطط استضافة تناسب الجميع
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    سواء كنت تبدأ مدونة شخصية أو تدير متجراً إلكترونياً كبيراً، لدينا الخطة المثالية لك.
                </p>
            </motion.section>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {hostingPlans.map((plan, index) => (
                        <HostingPlanCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HostingPage;