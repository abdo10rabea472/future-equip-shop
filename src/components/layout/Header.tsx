import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Heart, Stethoscope, Zap, Cog, Building2, Cpu, Ruler } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Heart,
  Zap,
  Cog,
  Building2,
  Cpu,
  Ruler,
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-card">
      <div className="bg-gradient-hero text-primary-foreground py-2">
        <div className="container-main flex items-center justify-between text-sm">
          <span>Free Shipping on Orders Over 500 EGP</span>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="hover:underline">Contact Us</Link>
            <Link to="/track-order" className="hover:underline">Track Order</Link>
          </div>
        </div>
      </div>

      <div className="container-main py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">MedTech<span className="text-primary">Store</span></span>
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-2xl hidden md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for medical supplies, engineering tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pr-12"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-2 sm:gap-4">
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors">
                  <User className="w-5 h-5" />
                  <span className="hidden lg:block text-sm font-medium">{user?.name}</span>
                  <ChevronDown className="w-4 h-4 hidden lg:block" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-card rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
                  <Link to="/account" className="block px-4 py-2 hover:bg-muted transition-colors">My Account</Link>
                  <Link to="/orders" className="block px-4 py-2 hover:bg-muted transition-colors">Orders</Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-muted transition-colors text-destructive">Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors">
                <User className="w-5 h-5" />
                <span className="hidden lg:block text-sm font-medium">Login</span>
              </Link>
            )}

            <Link to="/wishlist" className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:block">
              <Heart className="w-5 h-5" />
            </Link>

            <Link to="/cart" className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors lg:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <form onSubmit={handleSearch} className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pr-12"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-md">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      <nav className="bg-muted border-t border-border hidden lg:block">
        <div className="container-main">
          <ul className="flex items-center gap-1">
            <li
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-3 font-medium text-foreground hover:text-primary transition-colors">
                <Menu className="w-5 h-5" />
                All Categories
                <ChevronDown className="w-4 h-4" />
              </button>

              {isMegaMenuOpen && (
                <div className="absolute left-0 top-full w-[800px] bg-card rounded-lg shadow-xl border border-border p-6 grid grid-cols-3 gap-6 animate-slide-down">
                  {categories.map((category) => {
                    const Icon = iconMap[category.icon] || Stethoscope;
                    return (
                      <div key={category.id}>
                        <Link
                          to={`/categories/${category.id}`}
                          className="flex items-center gap-2 font-semibold text-foreground hover:text-primary mb-2"
                        >
                          <Icon className="w-5 h-5" />
                          {category.name}
                        </Link>
                        <ul className="space-y-1">
                          {category.subcategories.map((sub) => (
                            <li key={sub}>
                              <Link
                                to={`/products?category=${category.id}&subcategory=${encodeURIComponent(sub)}`}
                                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
            <li>
              <Link to="/products?filter=bestsellers" className="nav-link px-4 py-3 block">Best Sellers</Link>
            </li>
            <li>
              <Link to="/products?filter=new" className="nav-link px-4 py-3 block">New Arrivals</Link>
            </li>
            <li>
              <Link to="/products?filter=sale" className="nav-link px-4 py-3 block text-destructive font-semibold">Special Offers</Link>
            </li>
            <li>
              <Link to="/categories/medical" className="nav-link px-4 py-3 block">Medical</Link>
            </li>
            <li>
              <Link to="/categories/engineering" className="nav-link px-4 py-3 block">Engineering</Link>
            </li>
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <nav className="lg:hidden bg-card border-t border-border animate-slide-down">
          <div className="container-main py-4 space-y-2">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Stethoscope;
              return (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{category.name}</span>
                </Link>
              );
            })}
            <div className="border-t border-border pt-2 mt-2">
              <Link to="/products?filter=bestsellers" className="block p-3 hover:bg-muted rounded-lg" onClick={() => setIsMenuOpen(false)}>Best Sellers</Link>
              <Link to="/products?filter=new" className="block p-3 hover:bg-muted rounded-lg" onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
              <Link to="/products?filter=sale" className="block p-3 hover:bg-muted rounded-lg text-destructive font-semibold" onClick={() => setIsMenuOpen(false)}>Special Offers</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
