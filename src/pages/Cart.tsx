import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-main py-16 text-center">
          <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products">
            <Button size="lg" className="btn-primary">
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted py-6">
        <div className="container-main">
          <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
          <p className="text-muted-foreground mt-1">{itemCount} items in your cart</p>
        </div>
      </div>

      <div className="container-main py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-card overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-muted font-medium text-sm">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>

              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-t border-border items-center">
                  <div className="md:col-span-6 flex gap-4">
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </Link>
                    <div>
                      <Link to={`/product/${item.id}`} className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2">
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.subcategory}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1 text-destructive text-sm mt-2 hover:underline md:hidden"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2 text-center">
                    <span className="md:hidden text-muted-foreground mr-2">Price:</span>
                    <span className="font-medium">{item.price.toLocaleString()} EGP</span>
                  </div>

                  <div className="md:col-span-2 flex justify-center">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2 flex items-center justify-between md:justify-center gap-4">
                    <div>
                      <span className="md:hidden text-muted-foreground mr-2">Total:</span>
                      <span className="font-bold text-primary">{(item.price * item.quantity).toLocaleString()} EGP</span>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="hidden md:block p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="p-4 border-t border-border flex justify-between items-center">
                <button
                  onClick={clearCart}
                  className="text-destructive hover:underline font-medium"
                >
                  Clear Cart
                </button>
                <Link to="/products" className="text-primary hover:underline font-medium">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-card p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>{total.toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>{total >= 500 ? 'Free' : '50 EGP'}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{(total >= 500 ? total : total + 50).toLocaleString()} EGP</span>
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="input-field mb-2"
                />
                <Button variant="outline" className="w-full">Apply Coupon</Button>
              </div>

              <Link to="/checkout">
                <Button className="w-full btn-primary py-6 text-lg">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              {total < 500 && (
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Add <span className="font-bold text-primary">{(500 - total).toLocaleString()} EGP</span> more for free shipping!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
