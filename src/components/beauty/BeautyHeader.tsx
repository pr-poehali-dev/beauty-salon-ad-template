import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Sparkles } from "lucide-react";

interface BeautyHeaderProps {
  salonName?: string;
  slogan?: string;
}

const BeautyHeader = ({
  salonName = "BELLA BEAUTY",
  slogan = "Искусство преображения"
}: BeautyHeaderProps) => {
  return (
    <header className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden beauty-gradient p-4 sm:p-8">
      <div className="absolute inset-0 beauty-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="absolute top-0 right-0 left-0 flex justify-between items-center p-4 sm:p-6 z-10">
        <div className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-beauty-foreground" />
          <span className="font-bold text-beauty-foreground tracking-wider">{salonName}</span>
        </div>
        <Button variant="ghost" className="text-beauty-foreground hover:bg-beauty-dark/20">
          Связаться
        </Button>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto py-16 sm:py-24">
        <div className="inline-block relative">
          <span className="absolute -top-6 -right-6 animate-float">
            <Sparkles className="h-12 w-12 text-beauty-light/80" />
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-beauty-foreground mb-4 tracking-tight">
          Открой для себя <br /> истинную красоту
        </h1>
        
        <p className="text-xl text-beauty-foreground/90 mb-8 max-w-2xl mx-auto">
          {slogan}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="beauty-button beauty-shine group">
            Записаться онлайн
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="bg-transparent border-beauty-foreground/30 text-beauty-foreground hover:bg-beauty-foreground/10">
            Наши услуги
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BeautyHeader;