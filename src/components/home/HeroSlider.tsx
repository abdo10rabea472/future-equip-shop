import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: "Medical Supplies for Healthcare Professionals",
    subtitle: "Quality equipment for clinics, hospitals & medical students",
    cta: "Shop Medical",
    link: "/categories/medical",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200",
    gradient: "from-primary/90 to-medical/90"
  },
  {
    id: 2,
    title: "Engineering Tools & Equipment",
    subtitle: "Everything for electrical, mechanical & civil engineering students",
    cta: "Explore Engineering",
    link: "/categories/electrical",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200",
    gradient: "from-engineering/90 to-primary/90"
  },
  {
    id: 3,
    title: "Special Offers - Up to 40% Off",
    subtitle: "Limited time deals on top-selling products",
    cta: "View Offers",
    link: "/products?filter=sale",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    gradient: "from-accent/90 to-destructive/90"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          </div>
          <div className="relative h-full container-main flex items-center">
            <div className="max-w-xl text-primary-foreground animate-slide-up">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">{slide.subtitle}</p>
              <Link to={slide.link}>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/20 hover:bg-background/40 rounded-full text-primary-foreground transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/20 hover:bg-background/40 rounded-full text-primary-foreground transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-background' : 'bg-background/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
