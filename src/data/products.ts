export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subcategory: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  features: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
  image: string;
}

export const categories: Category[] = [
  {
    id: "medical",
    name: "Medical Equipment",
    icon: "Stethoscope",
    subcategories: ["Diagnostic Tools", "Patient Care", "Lab Equipment", "First Aid", "PPE"],
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400"
  },
  {
    id: "nursing",
    name: "Nursing College Tools",
    icon: "Heart",
    subcategories: ["Clinical Skills", "Anatomy Models", "Training Kits", "Uniforms", "Books"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    icon: "Zap",
    subcategories: ["Multimeters", "Oscilloscopes", "Circuit Kits", "Components", "Tools"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400"
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    icon: "Cog",
    subcategories: ["Measurement Tools", "Workshop Equipment", "CAD Tools", "Materials", "Safety Gear"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"
  },
  {
    id: "civil",
    name: "Civil Engineering",
    icon: "Building2",
    subcategories: ["Survey Equipment", "Testing Tools", "Drafting", "Materials", "Safety"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400"
  },
  {
    id: "electronics",
    name: "Electronics Engineering",
    icon: "Cpu",
    subcategories: ["Arduino/Raspberry Pi", "Sensors", "PCB Tools", "Testing Equipment", "Components"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400"
  },
  {
    id: "architecture",
    name: "Architecture Tools",
    icon: "Ruler",
    subcategories: ["Drafting Tools", "Model Making", "Design Software", "Presentation", "Materials"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Professional Stethoscope - Cardiology III",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400",
    category: "medical",
    subcategory: "Diagnostic Tools",
    rating: 4.8,
    reviews: 342,
    inStock: true,
    description: "High-performance cardiology stethoscope with exceptional acoustic sensitivity for accurate cardiac auscultation.",
    features: ["Dual-lumen tubing", "Stainless steel chestpiece", "Soft-sealing ear tips", "5-year warranty"],
    isBestSeller: true
  },
  {
    id: "2",
    name: "Digital Blood Pressure Monitor",
    price: 459,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400",
    category: "medical",
    subcategory: "Diagnostic Tools",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    description: "Automatic digital blood pressure monitor with irregular heartbeat detection and memory function.",
    features: ["Large LCD display", "60 memory readings", "Irregular heartbeat indicator", "WHO classification"],
    isOnSale: true
  },
  {
    id: "3",
    name: "Anatomical Skeleton Model - Life Size",
    price: 3499,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
    category: "nursing",
    subcategory: "Anatomy Models",
    rating: 4.9,
    reviews: 87,
    inStock: true,
    description: "Full-size anatomical skeleton with detailed bone structure, perfect for medical education.",
    features: ["170cm height", "Removable limbs", "Numbered bones", "Rolling stand included"],
    isNew: true
  },
  {
    id: "4",
    name: "IV Training Arm Kit",
    price: 1899,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400",
    category: "nursing",
    subcategory: "Training Kits",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    description: "Realistic IV training arm with replaceable skin and veins for venipuncture practice.",
    features: ["Replaceable veins", "Realistic skin texture", "Carrying case", "Practice guide included"],
    isBestSeller: true
  },
  {
    id: "5",
    name: "Digital Multimeter Pro",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
    category: "electrical",
    subcategory: "Multimeters",
    rating: 4.8,
    reviews: 423,
    inStock: true,
    description: "Professional-grade digital multimeter with auto-ranging and true RMS measurement.",
    features: ["True RMS", "Auto-ranging", "CAT III safety", "Backlit display"],
    isBestSeller: true
  },
  {
    id: "6",
    name: "Digital Oscilloscope 100MHz",
    price: 8999,
    originalPrice: 10999,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    category: "electrical",
    subcategory: "Oscilloscopes",
    rating: 4.7,
    reviews: 78,
    inStock: true,
    description: "4-channel digital oscilloscope with 100MHz bandwidth and 1GSa/s sampling rate.",
    features: ["4 channels", "100MHz bandwidth", "USB connectivity", "FFT analysis"],
    isOnSale: true
  },
  {
    id: "7",
    name: "Arduino Mega Starter Kit",
    price: 1299,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
    category: "electronics",
    subcategory: "Arduino/Raspberry Pi",
    rating: 4.9,
    reviews: 567,
    inStock: true,
    description: "Complete Arduino Mega kit with sensors, actuators, and comprehensive project guide.",
    features: ["Arduino Mega board", "37 sensors", "LCD display", "Tutorial book"],
    isBestSeller: true,
    isNew: true
  },
  {
    id: "8",
    name: "Digital Vernier Caliper",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
    category: "mechanical",
    subcategory: "Measurement Tools",
    rating: 4.6,
    reviews: 234,
    inStock: true,
    description: "Precision digital caliper with 0.01mm resolution and stainless steel construction.",
    features: ["0.01mm resolution", "150mm range", "LCD display", "Inch/metric conversion"],
    isOnSale: true
  },
  {
    id: "9",
    name: "Theodolite - Electronic",
    price: 15999,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400",
    category: "civil",
    subcategory: "Survey Equipment",
    rating: 4.8,
    reviews: 45,
    inStock: true,
    description: "Electronic theodolite with 2\" accuracy for precise angle measurements in surveying.",
    features: ["2\" accuracy", "LCD display", "Rechargeable battery", "Carrying case"],
    isBestSeller: true
  },
  {
    id: "10",
    name: "Architecture Drawing Board A1",
    price: 2499,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400",
    category: "architecture",
    subcategory: "Drafting Tools",
    rating: 4.7,
    reviews: 112,
    inStock: true,
    description: "Professional A1 drawing board with parallel motion and adjustable angle.",
    features: ["A1 size", "Parallel motion", "Adjustable angle", "Aluminum frame"],
    isNew: true
  },
  {
    id: "11",
    name: "Pulse Oximeter - Fingertip",
    price: 199,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400",
    category: "medical",
    subcategory: "Patient Care",
    rating: 4.5,
    reviews: 892,
    inStock: true,
    description: "Accurate fingertip pulse oximeter with OLED display and plethysmograph.",
    features: ["OLED display", "SpO2 & pulse rate", "Low battery indicator", "Auto power off"],
    isOnSale: true
  },
  {
    id: "12",
    name: "Soldering Station Digital",
    price: 1599,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
    category: "electronics",
    subcategory: "Tools",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    description: "Professional digital soldering station with temperature control and ESD safe design.",
    features: ["60W power", "200-450°C range", "ESD safe", "Sleep function"],
    isBestSeller: true
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(p => p.category === categoryId);
};

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.isBestSeller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getOnSale = (): Product[] => {
  return products.filter(p => p.isOnSale);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
