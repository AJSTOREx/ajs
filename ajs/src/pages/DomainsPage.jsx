import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const popularTlds = ['.com', '.net', '.org', '.co', '.ai', '.io', '.me', '.dev'];
const tldPrices = {
  '.com': '35 ر.س', '.net': '40 ر.س', '.org': '45 ر.س',
  '.co': '50 ر.س', '.ai': '200 ر.س', '.io': '150 ر.س',
  '.me': '60 ر.س', '.dev': '55 ر.س'
};

const DomainsPage = () => {
    const handleDomainSearch = (e) => {
        e.preventDefault();
        const domainName = e.target.elements.domain.value;
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
        <div className="py-12 md:py-20">
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 container mx-auto px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-blue">
                    ابحث عن اسم نطاقك المثالي
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    اسم النطاق هو هويتك على الإنترنت. ابدأ البحث الآن للعثور على الاسم الذي يعبر عنك.
                </p>
            </motion.section>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="container mx-auto px-4 max-w-3xl mb-16"
            >
                <form onSubmit={handleDomainSearch} className="relative">
                    <Input
                        name="domain"
                        type="text"
                        placeholder="example.com"
                        className="w-full h-16 pl-14 pr-36 text-xl rounded-full bg-secondary/60 border-2 border-border focus:ring-primary focus:border-primary"
                    />
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-7 h-7 text-muted-foreground" />
                    <Button type="submit" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90 h-12 px-8 text-lg">
                        بحث
                    </Button>
                </form>
            </motion.div>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="container mx-auto px-4"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">أسعار بعض الامتدادات الشهيرة</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {popularTlds.map((tld, index) => (
                        <motion.div
                            key={tld}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-secondary/40 rounded-lg p-4 text-center border border-border card-hover-glow"
                        >
                            <p className="text-2xl font-bold text-foreground">{tld}</p>
                            <p className="text-lg text-primary">{tldPrices[tld]}</p>
                            <p className="text-xs text-muted-foreground">/ سنة</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default DomainsPage;