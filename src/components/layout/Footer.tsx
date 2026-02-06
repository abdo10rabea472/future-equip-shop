import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Stethoscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">MedTech<span className="text-primary">Store</span></span>
            </Link>
            <p className="text-background/70 text-sm mb-4">
              Your trusted source for medical supplies, nursing equipment, and engineering tools. Quality products for healthcare and education professionals.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-background/70 hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/categories" className="text-background/70 hover:text-primary transition-colors">Categories</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/blog" className="text-background/70 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-background/70 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-background/70 hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-background/70 hover:text-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="text-background/70 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-background/70 hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <span className="text-background/70">123 Medical District, Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/70">+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/70">support@medtechstore.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Payment Methods</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background/10 rounded text-xs">Visa</span>
                <span className="px-3 py-1 bg-background/10 rounded text-xs">Mastercard</span>
                <span className="px-3 py-1 bg-background/10 rounded text-xs">Fawry</span>
                <span className="px-3 py-1 bg-background/10 rounded text-xs">Vodafone Cash</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2024 MedTechStore. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 opacity-50" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
