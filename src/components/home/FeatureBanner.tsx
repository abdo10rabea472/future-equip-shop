import { Truck, Shield, Headphones, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over 500 EGP"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team"
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day return policy"
  }
];

const FeatureBanner = () => {
  return (
    <section className="bg-muted py-8 border-y border-border">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
