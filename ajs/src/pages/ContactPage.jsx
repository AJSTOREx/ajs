import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "✅ تم استلام رسالتك",
            description: "شكراً لتواصلك معنا. سنقوم بالرد في أقرب وقت ممكن.",
        });
        e.target.reset();
    };

    return (
        <div className="py-12 md:py-20">
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 container mx-auto px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-blue">
                    اتصل بنا
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    لديك سؤال أو استفسار؟ فريق الدعم لدينا جاهز لمساعدتك.
                </p>
            </motion.section>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="bg-secondary/30 p-6 rounded-lg flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">البريد الإلكتروني</h3>
                            <p className="text-muted-foreground">support@ajs.com</p>
                        </div>
                    </div>
                     <div className="bg-secondary/30 p-6 rounded-lg flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">الهاتف</h3>
                            <p className="text-muted-foreground" dir="ltr">+966 555 123 456</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">أوقات العمل</h3>
                        <p className="text-muted-foreground">فريق الدعم الفني متواجد لمساعدتكم:</p>
                        <p className="text-foreground/90 mt-2">الأحد - الخميس: 9:00 صباحاً - 11:00 مساءً</p>
                        <p className="text-foreground/90">الجمعة والسبت: 2:00 ظهراً - 10:00 مساءً</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-secondary/30 p-8 rounded-xl"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                        أرسل لنا رسالة
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="text-muted-foreground mb-1 block">الاسم</Label>
                            <Input id="name" type="text" required className="bg-background/50 border-border" />
                        </div>
                        <div>
                            <Label htmlFor="email" className="text-muted-foreground mb-1 block">البريد الإلكتروني</Label>
                            <Input id="email" type="email" required className="bg-background/50 border-border" />
                        </div>
                        <div>
                            <Label htmlFor="subject" className="text-muted-foreground mb-1 block">الموضوع</Label>
                            <Input id="subject" type="text" required className="bg-background/50 border-border" />
                        </div>
                        <div>
                            <Label htmlFor="message" className="text-muted-foreground mb-1 block">رسالتك</Label>
                            <Textarea id="message" rows={4} required className="bg-background/50 border-border" />
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3">
                            <Send className="mr-2 ml-2 h-5 w-5" />
                            إرسال
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;