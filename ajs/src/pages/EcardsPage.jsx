import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const cardCategories = ["الكل", "ألعاب", "متاجر", "اتصالات", "خدمات"];

const eCardsData = [
    { id: 1, name: "بطاقة PlayStation", category: "ألعاب", price: "50 ر.س", image: "Icon for PlayStation gift card" },
    { id: 2, name: "بطاقة Xbox", category: "ألعاب", price: "50 ر.س", image: "Icon for Xbox gift card" },
    { id: 3, name: "بطاقة Steam", category: "ألعاب", price: "20 ر.س", image: "Icon for Steam gift card" },
    { id: 4, name: "بطاقة Apple iTunes", category: "متاجر", price: "100 ر.س", image: "Icon for iTunes gift card" },
    { id: 5, name: "بطاقة Google Play", category: "متاجر", price: "100 ر.س", image: "Icon for Google Play gift card" },
    { id: 6, name: "بطاقة Amazon", category: "متاجر", price: "150 ر.س", image: "Icon for Amazon gift card" },
    { id: 7, name: "بطاقة STC شحن سوا", category: "اتصالات", price: "20 ر.س", image: "Icon for STC Sawa recharge card" },
    { id: 8, name: "بطاقة Mobily", category: "اتصالات", price: "20 ر.س", image: "Icon for Mobily recharge card" },
    { id: 9, name: "بطاقة Netflix", category: "خدمات", price: "50 ر.س", image: "Icon for Netflix gift card" },
    { id: 10, name: "بطاقة Spotify", category: "خدمات", price: "30 ر.س", image: "Icon for Spotify gift card" },
    { id: 11, name: "بطاقة Shahid VIP", category: "خدمات", price: "40 ر.س", image: "Icon for Shahid VIP gift card" },
    { id: 12, name: "بطاقة PUBG Mobile", category: "ألعاب", price: "10 ر.س", image: "Icon for PUBG Mobile UC card" },
];

const EcardItem = ({ card, index }) => {
    const handleAddToCart = () => {
        toast({
            title: `تمت إضافة "${card.name}" للسلة`,
            description: "هذه الميزة غير مطبقة بعد، لكننا سجلنا طلبك! 🚀",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-secondary/30 border border-border rounded-xl p-4 flex flex-col text-center card-hover-glow"
        >
            <div className="bg-background rounded-lg mb-4 flex-grow flex items-center justify-center p-4 min-h-[120px]">
                <img  alt={card.name} className="max-h-20 max-w-full" src="https://images.unsplash.com/photo-1552198550-c8e6e9d510d5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{card.name}</h3>
            <p className="text-md text-primary font-bold mb-3">تبدأ من {card.price}</p>
            <Button onClick={handleAddToCart} className="w-full bg-primary/10 text-primary hover:bg-primary/20">
                <ShoppingCart className="w-4 h-4 mr-2 ml-2" />
                أضف للسلة
            </Button>
        </motion.div>
    );
};

const EcardsPage = () => {
    const [activeCategory, setActiveCategory] = useState("الكل");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCards = eCardsData.filter(card => {
        const inCategory = activeCategory === "الكل" || card.category === activeCategory;
        const inSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
        return inCategory && inSearch;
    });

    return (
        <div className="py-12 md:py-20">
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 container mx-auto px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-blue">
                    البطاقات الإلكترونية
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    اشحن ألعابك واشترك في خدماتك المفضلة. تشكيلة واسعة من البطاقات الرقمية في مكان واحد.
                </p>
            </motion.section>

            <div className="container mx-auto px-4 mb-10">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
                    <div className="relative w-full md:max-w-xs">
                        <Input
                            type="text"
                            placeholder="ابحث عن بطاقة..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-11 pl-10 bg-secondary/60 border-border focus:ring-primary focus:border-primary"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {cardCategories.map(category => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? 'default' : 'secondary'}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/40 text-foreground'}`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {filteredCards.map((card, index) => (
                        <EcardItem key={card.id} card={card} index={index} />
                    ))}
                </div>
                {filteredCards.length === 0 && (
                     <div className="col-span-full text-center py-16">
                        <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-primary mb-2">لا توجد نتائج</h2>
                        <p className="text-muted-foreground">حاول البحث بكلمة أخرى أو تغيير التصنيف.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EcardsPage;