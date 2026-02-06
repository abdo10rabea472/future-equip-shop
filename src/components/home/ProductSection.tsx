import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

interface ProductSectionProps {
  title: string;
  products: Product[];
  link: string;
  linkText?: string;
  bgColor?: string;
}

const ProductSection = ({ title, products, link, linkText = "View All", bgColor = "bg-background" }: ProductSectionProps) => {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container-main">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">{title}</h2>
          <Link to={link} className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            {linkText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
