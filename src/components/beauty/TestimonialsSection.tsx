import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  avatar?: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Я полностью изменила свой образ благодаря мастерам этого салона! Результат превзошел все мои ожидания. Теперь я постоянный клиент.",
      author: "Анна М.",
      rating: 5,
    },
    {
      content: "Отличная атмосфера, внимательный персонал и высококлассные специалисты. Всегда ухожу с прекрасным настроением и результатом.",
      author: "Елена К.",
      rating: 5,
    },
    {
      content: "Лучшее место для преображения! Девочки сделали мне потрясающий цвет волос и дали советы по уходу. Очень довольна!",
      author: "Ирина В.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section className="py-16 px-4 bg-beauty-light/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold beauty-text-gradient mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 1000 довольных клиентов уже оценили качество наших услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="beauty-card border-none hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>
                <p className="italic text-gray-700 dark:text-gray-300">
                  "{testimonial.content}"
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback className="bg-beauty/20 text-beauty">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;