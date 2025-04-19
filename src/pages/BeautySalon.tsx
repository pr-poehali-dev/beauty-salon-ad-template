import BeautyHeader from "@/components/beauty/BeautyHeader";
import ServicesSection from "@/components/beauty/ServicesSection";
import TestimonialsSection from "@/components/beauty/TestimonialsSection";
import PromoSection from "@/components/beauty/PromoSection";
import BeautyFooter from "@/components/beauty/BeautyFooter";

const BeautySalon = () => {
  return (
    <div className="min-h-screen">
      <BeautyHeader salonName="BELLA BEAUTY" slogan="Искусство преображения" />
      <ServicesSection />
      <TestimonialsSection />
      <PromoSection />
      <BeautyFooter />
    </div>
  );
};

export default BeautySalon;