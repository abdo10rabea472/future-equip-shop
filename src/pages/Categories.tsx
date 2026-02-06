import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Stethoscope, Heart, Zap, Cog, Building2, Cpu, Ruler } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { categories, getProductsByCategory, products } from '@/data/products';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Heart,
  Zap,
  Cog,
  Building2,
  Cpu,
  Ruler,
};

const Categories = () => {
  const { categoryId } = useParams();

  if (categoryId === 'engineering') {
    const engineeringCategories = categories.filter(c => 
      ['electrical', 'mechanical', 'civil', 'electronics', 'architecture'].includes(c.id)
    );
    const engineeringProducts = products.filter(p => 
      ['electrical', 'mechanical', 'civil', 'electronics', 'architecture'].includes(p.category)
    );

    return (
      <Layout>
        <div className="bg-gradient-to-r from-engineering to-primary py-12">
          <div className="container-main text-primary-foreground">
            <nav className="flex items-center gap-2 text-sm mb-4 opacity-80">
              <Link to="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Engineering Tools</span>
            </nav>
            <h1 className="text-4xl font-bold mb-2">Engineering Tools & Equipment</h1>
            <p className="text-lg opacity-90">Complete range for electrical, mechanical, civil, and electronics engineering students</p>
          </div>
        </div>

        <div className="container-main py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {engineeringCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Cog;
              return (
                <Link
                  key={cat.id}
                  to={`/categories/${cat.id}`}
                  className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.subcategories.length} subcategories</p>
                </Link>
              );
            })}
          </div>

          <h2 className="section-title mb-8">All Engineering Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  if (!categoryId) {
    return (
      <Layout>
        <div className="bg-muted py-6">
          <div className="container-main">
            <h1 className="text-3xl font-bold text-foreground">All Categories</h1>
          </div>
        </div>

        <div className="container-main py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Stethoscope;
              const categoryProducts = getProductsByCategory(category.id);
              
              return (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
                >
                  <div className="relative h-48">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-6 h-6" />
                        <h3 className="text-xl font-bold">{category.name}</h3>
                      </div>
                      <p className="text-sm opacity-80">{categoryProducts.length} products</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 4).map((sub) => (
                        <span key={sub} className="text-xs bg-muted px-2 py-1 rounded">{sub}</span>
                      ))}
                      {category.subcategories.length > 4 && (
                        <span className="text-xs text-primary">+{category.subcategories.length - 4} more</span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }

  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <Layout>
        <div className="container-main py-12 text-center">
          <h1 className="text-2xl font-bold">Category not found</h1>
          <Link to="/categories" className="text-primary hover:underline mt-4 inline-block">
            View All Categories
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = iconMap[category.icon] || Stethoscope;

  return (
    <Layout>
      <div className="relative h-64 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
        <div className="absolute inset-0 container-main flex flex-col justify-center text-primary-foreground">
          <nav className="flex items-center gap-2 text-sm mb-4 opacity-80">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/categories" className="hover:underline">Categories</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{category.name}</span>
          </nav>
          <div className="flex items-center gap-4">
            <Icon className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">{category.name}</h1>
              <p className="opacity-90">{categoryProducts.length} products available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {category.subcategories.map((sub) => (
            <Link
              key={sub}
              to={`/products?category=${categoryId}&subcategory=${encodeURIComponent(sub)}`}
              className="px-4 py-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              {sub}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No products found in this category</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Categories;
