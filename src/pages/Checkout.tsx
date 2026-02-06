import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Truck, CreditCard } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Checkout = () => {
  const { items, total } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    governorate: '',
    postalCode: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/payment');
  };

  const shipping = total >= 500 ? 0 : 50;

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-main py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link to="/products" className="text-primary hover:underline">
            Continue shopping
          </Link>
        </div>
      </Layout>
    );
  }

  const governorates = [
    'Cairo', 'Giza', 'Alexandria', 'Qalyubia', 'Port Said', 'Suez',
    'Dakahlia', 'Sharqia', 'Gharbia', 'Monufia', 'Beheira', 'Ismailia',
    'Fayoum', 'Beni Suef', 'Minya', 'Asyut', 'Sohag', 'Qena',
    'Aswan', 'Luxor', 'Red Sea', 'Matruh', 'North Sinai', 'South Sinai'
  ];

  return (
    <Layout>
      <div className="bg-muted py-4">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/cart" className="hover:text-primary">Cart</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Checkout</span>
            <ChevronRight className="w-4 h-4" />
            <span>Payment</span>
          </nav>
        </div>
      </div>

      <div className="container-main py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-card rounded-lg shadow-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold">Shipping Information</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+20 xxx xxx xxxx"
                      className="input-field"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Street address, building, floor, apartment"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Governorate *</label>
                    <select
                      name="governorate"
                      value={formData.governorate}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select Governorate</option>
                      {governorates.map((gov) => (
                        <option key={gov} value={gov}>{gov}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Order Notes (Optional)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Notes about your order, e.g. special delivery instructions"
                      className="input-field resize-none"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full btn-primary py-6 text-lg">
                <CreditCard className="w-5 h-5 mr-2" />
                Continue to Payment
              </Button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-card p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 max-h-80 overflow-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-2">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-primary">{(item.price * item.quantity).toLocaleString()} EGP</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{total.toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `${shipping} EGP`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">{(total + shipping).toLocaleString()} EGP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
