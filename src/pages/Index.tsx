import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import CategoryGrid from '@/components/home/CategoryGrid';
import ProductSection from '@/components/home/ProductSection';
import FeatureBanner from '@/components/home/FeatureBanner';
import { getBestSellers, getNewArrivals, getOnSale, getProductsByCategory } from '@/data/products';

const Index = () => {
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();
  const onSale = getOnSale();
  const medicalProducts = getProductsByCategory('medical');
  const engineeringProducts = [...getProductsByCategory('electrical'), ...getProductsByCategory('electronics')];

  return (
    <Layout>
      <HeroSlider />
      <FeatureBanner />
      <CategoryGrid />
      
      <ProductSection
        title="Best Sellers"
        products={bestSellers}
        link="/products?filter=bestsellers"
      />

      <div className="bg-gradient-hero py-12">
        <div className="container-main text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical & Healthcare Supplies</h2>
          <p className="text-lg mb-6 opacity-90">Trusted equipment for healthcare professionals and medical students</p>
          <a href="/categories/medical" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
            Browse Medical Equipment
          </a>
        </div>
      </div>

      <ProductSection
        title="New Arrivals"
        products={newArrivals}
        link="/products?filter=new"
        bgColor="bg-muted"
      />

      <ProductSection
        title="Special Offers"
        products={onSale}
        link="/products?filter=sale"
      />

      <div className="bg-accent/10 py-12">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Medical Equipment</h3>
              <p className="opacity-90 mb-4">Stethoscopes, diagnostic tools, and more</p>
              <a href="/categories/medical" className="inline-block bg-background text-foreground px-6 py-2 rounded-lg font-medium hover:bg-background/90 transition-colors">
                Shop Now
              </a>
            </div>
            <div className="bg-gradient-to-r from-engineering to-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Engineering Tools</h3>
              <p className="opacity-90 mb-4">Multimeters, oscilloscopes, and lab equipment</p>
              <a href="/categories/electrical" className="inline-block bg-background text-foreground px-6 py-2 rounded-lg font-medium hover:bg-background/90 transition-colors">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <ProductSection
        title="Medical & Nursing Supplies"
        products={medicalProducts}
        link="/categories/medical"
        bgColor="bg-muted"
      />

      <ProductSection
        title="Engineering Tools"
        products={engineeringProducts}
        link="/categories/electrical"
      />

      <section className="py-12 bg-muted">
        <div className="container-main text-center">
          <h2 className="section-title mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get the latest updates on new products, special offers, and exclusive deals delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-1"
            />
            <button type="submit" className="btn-primary px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
