import { Link } from 'react-router-dom';
import { Stethoscope, Heart, Zap, Cog, Building2, Cpu, Ruler } from 'lucide-react';
import { categories } from '@/data/products';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Heart,
  Zap,
  Cog,
  Building2,
  Cpu,
  Ruler,
};

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container-main">
        <div className="text-center mb-8">
          <h2 className="section-title mb-2">Shop by Category</h2>
          <p className="text-muted-foreground">Find everything you need for medical and engineering education</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Stethoscope;
            return (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="group relative overflow-hidden rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-5 h-5" />
                      <span className="font-semibold">{category.name}</span>
                    </div>
                    <p className="text-xs opacity-80">{category.subcategories.length} subcategories</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
