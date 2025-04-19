import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scissors, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const BeautyFooter = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-5 w-5 text-beauty" />
              <span className="font-bold tracking-wider text-beauty">BELLA BEAUTY</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Ваш салон красоты с индивидуальным подходом к каждому клиенту. Мы создаем красоту с 2010 года.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full h-10 w-10 text-beauty hover:bg-beauty/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-10 w-10 text-beauty hover:bg-beauty/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-beauty mt-0.5" />
                <span>ул. Модная, 123, Москва, Россия</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-beauty" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-beauty" />
                <span>info@bellabeauty.ru</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Подписка на новости</h3>
            <p className="text-muted-foreground mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости о специальных предложениях
            </p>
            <div className="flex gap-2">
              <Input placeholder="Ваш email" className="border-beauty/30 focus-visible:ring-beauty" />
              <Button className="beauty-button whitespace-nowrap">Подписаться</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2023 BELLA BEAUTY. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default BeautyFooter;