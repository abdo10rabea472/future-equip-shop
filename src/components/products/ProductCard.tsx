import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="card-product group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && <span className="badge-new">NEW</span>}
          {product.isOnSale && <span className="badge-sale">-{discount}%</span>}
          {product.isBestSeller && (
            <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">BEST SELLER</span>
          )}
        </div>
        <button
          className="absolute top-2 right-2 p-2 bg-card/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={handleAddToCart}
            className="w-full btn-accent"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{product.subcategory}</p>
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="price-tag">{product.price.toLocaleString()} EGP</span>
          {product.originalPrice && (
            <span className="price-original">{product.originalPrice.toLocaleString()} EGP</span>
          )}
        </div>
        {!product.inStock && (
          <p className="text-destructive text-sm mt-2 font-medium">Out of Stock</p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
