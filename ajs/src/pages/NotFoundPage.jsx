import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        className="p-8 bg-secondary/30 rounded-xl shadow-2xl max-w-md w-full border border-border"
      >
        <AlertTriangle className="w-24 h-24 text-destructive mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-destructive mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-3">
          الصفحة غير موجودة
        </h2>
        <p className="text-muted-foreground mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg">
            <Home className="mr-2 ml-2 h-5 w-5" />
            العودة للرئيسية
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;