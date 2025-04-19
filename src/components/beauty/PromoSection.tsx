import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="py-16 px-4 beauty-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-cover opacity-20 mix-blend-overlay"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-beauty-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Специальное предложение
            </h2>
            <p className="text-beauty-foreground/90 text-lg mb-6">
              Забронируйте процедуру сегодня и получите <span className="font-bold">скидку 20%</span> на 
              следующее посещение. Предложение действует до конца месяца!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Акция до 30 ноября</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Быстрая запись</span>
              </div>
            </div>
            
            <Button className="bg-white text-beauty hover:bg-beauty-foreground/90 hover:text-beauty group">
              Получить скидку
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
          
          <div className="beauty-card p-8 beauty-shine">
            <div className="bg-white text-center p-6 rounded-lg">
              <h3 className="text-2xl font-semibold beauty-text-gradient mb-2">
                Подарочный сертификат
              </h3>
              <p className="text-gray-600 mb-4">
                Идеальный подарок для близких
              </p>
              <div className="text-4xl font-bold beauty-text-gradient mb-4">5 000 ₽</div>
              <Button variant="outline" className="border-beauty/30 text-beauty hover:bg-beauty/5 hover:border-beauty">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;