import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Scissors, Droplet, Sparkles } from "lucide-react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  price: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: <Scissors className="h-8 w-8 text-beauty" />,
      title: "Стрижка и укладка",
      description: "Профессиональная стрижка и стайлинг от ведущих мастеров",
      price: "от 2 500 ₽",
    },
    {
      icon: <Droplet className="h-8 w-8 text-beauty" />,
      title: "Окрашивание",
      description: "Инновационные техники окрашивания и премиум красители",
      price: "от 5 000 ₽",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-beauty" />,
      title: "СПА процедуры",
      description: "Расслабляющие и восстанавливающие процедуры для волос и тела",
      price: "от 3 500 ₽",
    },
  ];

  return (
    <section className="py-16 px-4 bg-beauty-light/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold beauty-text-gradient mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем широкий спектр услуг для вашей красоты и комфорта, используя только 
            профессиональные средства и современные техники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="beauty-card border-none hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-beauty font-semibold">{service.price}</span>
                  <span className="text-sm opacity-75">Подробнее →</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;