export interface MedicineItem {
  id: string;
  medicineName: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  dosageForm: string;
  description?: string;
  prescriptionRequired: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  items: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'devices' | 'babycare' | 'surgical';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'orders' | 'prescriptions' | 'services' | 'delivery';
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  badge?: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  medicineRequired: string;
  hasPrescription: boolean;
  preferredTime: string;
  message?: string;
}
