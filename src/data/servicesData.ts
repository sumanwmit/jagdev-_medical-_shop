import { ServiceCategory } from '../types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    shortDesc: '100% genuine prescription drugs sourced directly from authorized pharmaceutical distributors.',
    fullDesc: 'We stock a complete range of authentic, temperature-regulated prescription drugs across cardiology, diabetology, neurology, gastroenterology, pediatrics, and general health. Our licensed pharmacists verify dosage and expiry before dispensing.',
    iconName: 'Pill',
    items: [
      'Cardiovascular & Blood Pressure Medications',
      'Diabetes Care & Insulin Formulations',
      'Antibiotics & Antimicrobials',
      'Gastrointestinal & Acidity Relief',
      'Respiratory & Asthmatic Inhalers',
      'Neurological & Psychiatric Medicines'
    ],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'otc-medicines',
    title: 'OTC Medicines & First Aid',
    shortDesc: 'Over-the-counter pain relievers, cold remedies, digestive aids, and immediate first-aid supplies.',
    fullDesc: 'Immediate relief for everyday ailments including fever, headache, indigestion, allergic reactions, minor cuts, and burns. We keep top trusted Indian and international brands fully stocked.',
    iconName: 'Stethoscope',
    items: [
      'Analgesics & Pain Relief Gels',
      'Cough Syrups & Antihistamines',
      'Antacids & Laxatives',
      'Sterile Bandages & Cotton Rolls',
      'Antiseptic Liquids & Ointments',
      'Burn & Skin Repair Creams'
    ],
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'health-devices',
    title: 'Health Devices & Monitoring Equipment',
    shortDesc: 'Digital BP monitors, glucometers, nebulizers, pulse oximeters, and clinical thermometers.',
    fullDesc: 'Empowering home health care with precision digital diagnostic tools. All devices come with manufacturer warranty and guidance on proper home usage.',
    iconName: 'Activity',
    items: [
      'Automatic Digital Blood Pressure Monitors',
      'Blood Glucose Testing Kits & Strips',
      'Compressor Nebulizers & Inhalers',
      'Fingertip Pulse Oximeters',
      'Infrared & Digital Thermometers',
      'Vaporizers & Steam Inhalers'
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'baby-maternal-care',
    title: 'Baby Care & Maternal Essentials',
    shortDesc: 'Infant formula, diapers, baby wipes, skincare, lactating supplements, and post-natal care.',
    fullDesc: 'Comprehensive mother and baby care products. Sourced from clinically tested brands like Nestle, Himalaya, Johnson & Johnson, and Sebamed.',
    iconName: 'HeartHandshake',
    items: [
      'Infant Nutrition & Cereals (Cerelac, Lactogen)',
      'Hypoallergenic Baby Wipes & Diapers',
      'Baby Bath Oils & Moisturizing Lotions',
      'Maternal Nutrition Powders',
      'Feeding Bottles & Sterilizers',
      'Diaper Rash Creams & Powder'
    ],
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical Supplies & Hospital Care',
    shortDesc: 'Disposable syringes, IV sets, surgical gloves, catheters, dressings, and orthopedic supports.',
    fullDesc: 'Serving local patients, clinics, and home care routines with surgical-grade disposables, orthopedic splints, knee caps, and wound care dressings.',
    iconName: 'ShieldPlus',
    items: [
      'Sterile Syringes & Cannulas',
      'Surgical Gloves & Masks (N95/3-Ply)',
      'Orthopedic Kneecaps, Lumbar Belts & Crepe',
      'IV Infusion Sets & Saline Bottles',
      'Absorptive Gauze Swabs & Surgical Tapes',
      'Urine Bags & Catheter Tubes'
    ],
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'supplements-personal-care',
    title: 'Supplements & Daily Wellness',
    shortDesc: 'Multivitamins, immunity boosters, protein powders, oral hygiene, and personal care products.',
    fullDesc: 'Boost your daily health with certified vitamins, mineral supplements, herbal wellness formulations, and daily personal care products for the whole family.',
    iconName: 'Sparkles',
    items: [
      'Multivitamin & Mineral Capsules',
      'Calcium & Vitamin D3 Supplements',
      'Protein Powders & Nutritional Drinks',
      'Chyawanprash & Herbal Immunity Boosters',
      'Oral Care & Medicated Toothpastes',
      'Dermatological Soaps & Lotions'
    ],
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80'
  }
];
