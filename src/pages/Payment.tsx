import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Smartphone, Building2, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

type PaymentMethod = 'card' | 'fawry' | 'vodafone' | 'etisalat' | 'orange';

const paymentMethods = [
  { id: 'card' as PaymentMethod, name: 'Bank Card', icon: CreditCard, description: 'Visa, Mastercard, Meeza' },
  { id: 'fawry' as PaymentMethod, name: 'Fawry', icon: Building2, description: 'Pay at any Fawry outlet', color: 'bg-yellow-500' },
  { id: 'vodafone' as PaymentMethod, name: 'Vodafone Cash', icon: Smartphone, description: 'Pay with Vodafone Cash', color: 'bg-red-600' },
  { id: 'etisalat' as PaymentMethod, name: 'Etisalat Cash', icon: Smartphone, description: 'Pay with Etisalat Cash', color: 'bg-green-600' },
  { id: 'orange' as PaymentMethod, name: 'Orange Money', icon: Smartphone, description: 'Pay with Orange Money', color: 'bg-orange-500' },
];

const Payment = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });
  const [mobileNumber, setMobileNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const shipping = total >= 500 ? 0 : 50;
  const grandTotal = total + shipping;

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === 'number') {
      value = value.replace(/\D/g, '').slice(0, 16);
      value = value.replace(/(\d{4})/g, '$1 ').trim();
    } else if (name === 'expiry') {
      value = value.replace(/\D/g, '').slice(0, 4);
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
    } else if (name === 'cvv') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }

    setCardData({ ...cardData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      clearCart();
    }, 2000);
  };

  if (isComplete) {
    return (
      <Layout>
        <div className="container-main py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your order. We've sent a confirmation email with your order details.
            </p>
            <p className="text-lg font-medium mb-8">
              Order Total: <span className="text-primary">{grandTotal.toLocaleString()} EGP</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/orders">
                <Button variant="outline" className="w-full sm:w-auto">View Order</Button>
              </Link>
              <Link to="/products">
                <Button className="btn-primary w-full sm:w-auto">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

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

  return (
    <Layout>
      <div className="bg-muted py-4">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/cart" className="hover:text-primary">Cart</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/checkout" className="hover:text-primary">Checkout</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Payment</span>
          </nav>
        </div>
      </div>

      <div className="container-main py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Payment</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-card p-6 mb-6">
              <h2 className="text-xl font-semibold mb-6">Select Payment Method</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedMethod === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${method.color || 'bg-primary/10'}`}>
                        <method.icon className={`w-5 h-5 ${method.color ? 'text-white' : 'text-primary'}`} />
                      </div>
                      <div>
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {selectedMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <input
                        type="text"
                        name="number"
                        value={cardData.number}
                        onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        name="name"
                        value={cardData.name}
                        onChange={handleCardChange}
                        placeholder="Name on card"
                        required
                        className="input-field"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiry"
                          value={cardData.expiry}
                          onChange={handleCardChange}
                          placeholder="MM/YY"
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={cardData.cvv}
                          onChange={handleCardChange}
                          placeholder="123"
                          required
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'fawry' && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2">Pay with Fawry</h3>
                    <p className="text-yellow-700 text-sm mb-4">
                      After placing your order, you'll receive a Fawry reference number. Use this number to pay at any Fawry outlet within 48 hours.
                    </p>
                    <div className="flex items-center gap-2 text-yellow-800">
                      <Building2 className="w-5 h-5" />
                      <span className="font-medium">Pay at 200,000+ Fawry locations</span>
                    </div>
                  </div>
                )}

                {(selectedMethod === 'vodafone' || selectedMethod === 'etisalat' || selectedMethod === 'orange') && (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${
                      selectedMethod === 'vodafone' ? 'bg-red-50 border-red-200' :
                      selectedMethod === 'etisalat' ? 'bg-green-50 border-green-200' :
                      'bg-orange-50 border-orange-200'
                    } border`}>
                      <p className={`text-sm ${
                        selectedMethod === 'vodafone' ? 'text-red-700' :
                        selectedMethod === 'etisalat' ? 'text-green-700' :
                        'text-orange-700'
                      }`}>
                        Enter your mobile wallet number to receive a payment request.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mobile Number</label>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="01xxxxxxxxx"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full btn-primary py-6 text-lg mt-6"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Pay ${grandTotal.toLocaleString()} EGP`
                  )}
                </Button>
              </form>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>🔒 Secure Payment</span>
              <span>•</span>
              <span>256-bit SSL Encryption</span>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-card p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 max-h-60 overflow-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
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
                  <span className="text-primary">{grandTotal.toLocaleString()} EGP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
